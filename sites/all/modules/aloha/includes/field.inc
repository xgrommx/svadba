<?php
/**
 * @file
 * Field module integration.
 */

/**
 * Implements hook_aloha_type_info() on behalf of field.module.
 */
function field_aloha_type_info() {
  return array(
    'field' => array(
      'save callback' => 'aloha_save_field',
      'access callback' => 'aloha_access_field',
    ),
  );
}

/**
 * Implements hook_aloha_form_alter() on behalf of field.module.
 */
function field_aloha_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'aloha_admin') {
    $form['aloha_fields'] = array(
      '#type' => 'checkbox',
      '#title' => t('Enable front end editing for fields.'),
      '#description' => t('Enables front end editing globally for all fields.'),
      '#default_value' => variable_get('aloha_fields', TRUE),
    );
  }

  // Add setting to enable/disable front end editing per field basis.
  if ($form_id === 'field_ui_field_edit_form' && isset($form['#field']['type'])) {
    if ($form['#field']['type'] === 'text' || $form['#field']['type'] === 'text_long' || $form['#field']['type'] === 'text_with_summary') {
      $form['field']['settings']['front_end_editable'] = array(
        '#type' => 'checkbox',
        '#title' => t('Enable front end editing'),
        '#description' => t('Enables front end editing for this field. This does not have effect if front end editing is enabled globally.'),
        '#default_value' =>  isset($form['#field']['settings']['front_end_editable']) ? $form['#field']['settings']['front_end_editable'] : '0',
      );
    }
  }
}

/**
 * Implements hook_field_attach_view_alter().
 */
function aloha_field_attach_view_alter(&$output, $context) {
  $front_end_editing_globally = variable_get('aloha_fields', TRUE);
  foreach (element_children($output) as $field_name) {
    $field = field_info_field($field_name);
    // Check if front end editing is enabled globally or per field basis.
    if ($front_end_editing_globally || $field['settings']['front_end_editable']) {
      $instance = $output[$field_name];
      if (aloha_access_field($field_name, $instance['#object'])) {
        // Attach required files.
        _aloha_include_files();

        // Process each field.
        foreach ($instance['#items'] as $delta => $item) {
          switch ($instance['#field_type']) {
            case 'text':
            case 'text_with_summary':
            case 'text_long':
              $key = "{$field_name}-{$instance['#object']->vid}-{$delta}";

              $data = array(
                'type' => 'field',
                'nid' => $instance['#object']->nid,
                'revision_id' => $instance['#object']->vid,
                'field_name' => $field_name,
                'delta' => $delta,
                'lang' => $instance['#object']->language,
                'entity_type' => $instance['#entity_type'],
                'formatter' => $instance['#formatter'],
              );
              _aloha_add_target_to_region($output[$field_name][$delta]['#markup'], $key);
              _aloha_add_region_to_js($key, $data);
              break;
          }
        }
      }
    }
  }
}

/**
 * Save callback for field.module.
 */
function aloha_save_field() {
  if (isset($_POST['html'])) {
    $node = node_load(check_plain($_POST['nid']));
    switch ($_POST['formatter']) {
      case 'text_summary_or_trimmed':
        $node->{$_POST['field_name']}[$_POST['lang']][$_POST['delta']]['summary'] = $_POST['html'];
        break;
      case 'text_default':
        $node->{$_POST['field_name']}[$_POST['lang']][$_POST['delta']]['value'] = $_POST['html'];
        break;
    }
    node_save($node);
    return drupal_json_output(array(
      'title' => 'Field',
      'type' => 'field',
      'status' => 'saved',
      'delta' => $_POST['delta'],
    ));
  }
  return;
}

/**
 * Access callback for field.module.
 */
function aloha_access_field($field_name = NULL, $node = NULL) {
  $field_name = is_null($field_name) ? check_plain($_POST['field_name']) : $field_name;
  // @TODO: Change this to entity_load() to make this entity type agnostic.
  $node = is_null($node) ? node_load(check_plain($_POST['nid'])) : $node;

  return field_access('edit', $field_name, 'node', $node) && node_access('update', $node) && user_access('use aloha');
}
