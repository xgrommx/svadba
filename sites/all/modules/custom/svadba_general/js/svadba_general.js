(function ($) {
  Drupal.behaviors.sliderTransparent = {
    attach:function (context, settings) {
      if ($('.slider-wrapper').length) {
        $('.slider-wrapper').TransBanner({
          button_show_next:false,
          button_show_back:false,
          button_show_timer:!false,
          button_show_numbers:false,
          clock_timer_color:'#ee2244'
        });
      }
    }
  };
})(jQuery);
