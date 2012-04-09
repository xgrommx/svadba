<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 *
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */

function svadba_alpha_preprocess_page(&$vars) {
  // Hide the node title and tabs on the front page
  $arg2 = arg(2);
  $vars['title_hidden'] = TRUE;
  if ($vars['is_front']) {
    unset($vars['tabs']['#primary']);
  }
  if (arg(0) == 'user' && is_numeric(arg(1)) && !isset($arg2)){
    unset($vars['tabs']['#primary']);
  }
}

function svadba_alpha_preprocess_zone(&$vars) {
}

function svadba_alpha_preprocess_flag(&$variables) {
  if (in_array($variables['flag']->name, array('like_for_materials', 'user_like_flag'))) {
    $count_like = $variables['flag']->get_count($variables['content_id']);
    $variables['link_text'] += $count_like;
  }
}
