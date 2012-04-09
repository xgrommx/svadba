<?php hide($content); ?>

<article<?php print $attributes; ?>>
  <header>
    <div class="node-info-wrapper">
      <div class="node-info-image"><?php print render($content['field_photo_news']); ?></div>
      <div class="node-info-meta">
        <div class="node-info-meta-author">
          <?php print t('Author: !name', array('!name' => $name)); ?>
        </div>
        <div class="node-info-meta-title">
          <a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a>
        </div>
        <div class="node-info-meta-wrapper-inner">
          <div class="node-info-meta-links-wrapper">
            <div class="node-info-meta-flag">
              <?php print render($content['links']['flag']); ?>
            </div>
            <div class="node-info-meta-comments-count">
              <?php print l(svadba_general_get_count_comment_by_nid($node->nid), 'node/' . $node->nid, array('fragment' => 'comments')); ?>
            </div>
          </div>
          <div class="node-info-meta-posted">
            <?php print drupal_strtolower(format_date($node->created, 'custom', 'j F, h:i'));  ?>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </header>

  <div<?php print $content_attributes; ?>>
    <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    print render($content);
    ?>
  </div>

  <div class="clearfix">
    <?php if (!empty($content['links'])): ?>
    <nav class="links node-links clearfix"><?php print render($content['links']); ?></nav>
    <?php endif; ?>

    <?php print render($content['comments']); ?>
  </div>
</article>