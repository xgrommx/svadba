(function ($) {
  Drupal.behaviors.generalTheme = {
    attach:function (context, settings) {
      if ($('#block-svadba-general-menu-user-roles').length) {
        $.each($('#block-svadba-general-menu-user-roles ul li a'), function (i, n) {
          if ($(this).hasClass('active')) {
            $(this).parent().addClass('active');
          }
        });
      }
      if($('#block-svadba-general-categories').length){
        $('#block-svadba-general-categories td').click(function(){
          var link = $(this).find('a');
          window.location.href = link.attr('href');
        });
      }
      $('#tinymce').css({
        'max-width': '460px',
        'width': '460px'
      });
    }
  };
})(jQuery);
