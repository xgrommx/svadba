Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"HTTP \u0437\u0430\u043f\u0440\u043e\u0441 AJAX \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0421\u0442\u0430\u0442\u0443\u0441\u0422\u0435\u043a\u0441\u0442\u043e\u043c","ResponseText: !responseText":"\u041e\u0442\u0432\u0435\u0442\u0422\u0435\u043a\u0441\u0442\u043e\u043c: !responseText","ReadyState: !readyState":"ReadyState: !readyState","Loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","@title dialog":"\u0414\u0438\u0430\u043b\u043e\u0433 @title","Re-order rows by numerical weight instead of dragging.":"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e \u0432\u0435\u0441\u0443 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0421\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445.","Edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","Enabled":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Disabled":"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Configure":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u043b\u043e\u043a\u0430\u0445 \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u043d\u0430\u0436\u043c\u0435\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0431\u043b\u043e\u043a\u0438\u003C\/em\u003E.","Show shortcuts":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448","This permission is inherited from the authenticated user role.":"\u042d\u0442\u043e \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u0440\u043e\u043b\u0438 \u00ab\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u00bb.","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","@number comments per page":"@number \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","Requires a title":"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","Not customizable":"\u041d\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439","Restricted to certain pages":"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u044d\u0442\u043e\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435.","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u043e\u043d\u0441","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b %filename \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %extensions.","Don\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430","Autocomplete popup":"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","Searching for matches...":"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439...","Hide shortcuts":"\u0421\u043a\u0440\u044b\u0442\u044c \u044f\u0440\u043b\u044b\u043a\u0438"}} };;
/**
 * @file
 * JavaScript file for the Coffee module.
 */

(function ($) {

Drupal.coffee = Drupal.coffee || {};

Drupal.behaviors.coffee = {
  attach: function () {
    $('body').once('coffee', function () {

      var body = $(this);

      Drupal.coffee.bg.appendTo(body).hide();
      
      Drupal.coffee.form
        .append(Drupal.coffee.label)
        .append(Drupal.coffee.field)
        .append(Drupal.coffee.results)
        .wrapInner('<div id="coffee-form-inner" />')
        .appendTo(body)
        .hide();

      $(document).keydown(function (event) {
        
        var activeElement = $(document.activeElement);

        // Show the form with alt + D. Use 2 keycodes as 'D' can be uppercase or lowercase.
        if (!Drupal.coffee.form.is(':visible') && event.altKey === true && (event.keyCode === 68 || event.keyCode === 206)) {
          Drupal.coffee.open();
          event.preventDefault();
        }

        // Close the form with esc or alt + D.
        else if (Drupal.coffee.form.is(':visible') && (event.keyCode === 27 || (event.altKey === true && (event.keyCode === 68 || event.keyCode === 206)))) {
          Drupal.coffee.close();
          event.preventDefault();
        }

        // Use the arrow up/down keys to navigate trough the results.
        else if (Drupal.coffee.form.is(':visible') && Drupal.coffee.results.children().length && (event.keyCode === 38 || event.keyCode === 40)) {
          Drupal.coffee.move(event.keyCode === 38 ? 'prev' : 'next', activeElement);
          event.preventDefault();
        }

        // Enter key handling for the search field: redirect to the first result if there are any.
        else if (Drupal.coffee.form.is(':visible') && event.keyCode === 13 && activeElement[0] === Drupal.coffee.field[0]) {
          if (Drupal.coffee.results.children().length) {
            Drupal.coffee.redirect(Drupal.coffee.results.find('a:first').attr('href'));
          }
          event.preventDefault();
        }

      });

      // .live() is deprecated ==>> convert to .on() when Drupal gets jQuery 1.7+ (http://api.jquery.com/live/)
      // Remove the fake focus class once actual focus is used.
      $('#coffee-results a').live('focus', function () {
        Drupal.coffee.results.find('.focus').removeClass('focus');
      })
      // We close the form explicitly after following a link as pages aren't reloaded when the overlay module is used.
      .live('click', function () {
        Drupal.coffee.close();
      });
    });
  }
};

/**
 * Open the form and focus on the search field.
 */
Drupal.coffee.open = function () {
  Drupal.coffee.form.show();
  Drupal.coffee.bg.show();
  Drupal.coffee.field.focus();
};

/**
 * Close the form and destroy all data.
 */
Drupal.coffee.close = function () {
  Drupal.coffee.field.val('');
  Drupal.coffee.results.empty();
  Drupal.coffee.form.hide();
  Drupal.coffee.bg.hide();
};

/**
 * Move the focus to the previous or next search result.
 *
 * @param direction
 *   "prev" or "next".
 * @param activeElement
 *   jQuery object for the element to use as starting point.
 */
Drupal.coffee.move = function (direction, activeElement) {
  
  // From the search field: jump to the first (next) or last (prev) result.
  // Skip the first result if it already has the fake focus class.
  if (activeElement[0] === Drupal.coffee.field[0]) {
    Drupal.coffee.results.find( direction === 'prev' ? 'a:last' : (Drupal.coffee.results.find('a:first').hasClass('focus') ? 'li:nth-child(2) a' : 'a:first') ).focus();
  }
  
  // Jump to the last result if prev is used on the first, and the other way around.
  else if (activeElement[0] === Drupal.coffee.results.find(direction === 'prev' ? 'a:first' : 'a:last')[0]) {
    Drupal.coffee.results.find( direction === 'prev' ? 'a:last' : 'a:first' ).focus();
  }
  
  // Assuming we're on a result link.
  else if (direction === 'prev') {
    activeElement.parent().prev().find('a').focus();
  }
  else {
    activeElement.parent().next().find('a').focus();
  }
};

/**
 * Close the Coffee form and redirect.
 * Todo: make it work with the overlay module.
 */
Drupal.coffee.redirect = function (path) {
  Drupal.coffee.close();
  document.location = path;
};

/**
 * The HTML elements.
 */
Drupal.coffee.label = $('<label for="coffee-q" class="element-invisible" />').text(Drupal.t('Query'));

Drupal.coffee.results = $('<ol id="coffee-results" />');

// Instead of appending results one by one, we put them in a placeholder element
// first and then append them all at once to prevent flickering while typing.
Drupal.coffee.resultsPlaceholder = $('<ol />');

Drupal.coffee.form = $('<form id="coffee-form" />');

Drupal.coffee.bg = $('<div id="coffee-bg" />').click(function () {
  Drupal.coffee.close();
});

Drupal.coffee.field = $('<input id="coffee-q" type="text" autocomplete="off" />').keyup(function () {
  Drupal.coffee.resultsPlaceholder.empty();

  $.getJSON(Drupal.settings.basePath + 'admin/coffee/result/' + Drupal.coffee.field.val(), function (data) {
    if (data) {
      $.each(data, function (key, value) {
        var description = $('<small class="description" />').text(value.path);
        $('<a />').text(value.title)
          .attr('href', Drupal.settings.basePath + value.path)
          .append(description)
          .appendTo(Drupal.coffee.resultsPlaceholder)
          .wrap('<li />');
      });

      // Highlight the first result as if it were focused, as a visual hint for
      // what will happen when the enter key is used in the search field.
      Drupal.coffee.results.html(Drupal.coffee.resultsPlaceholder.children()).find('a:first').addClass('focus');
    }
  });
});

}(jQuery));
;
(function ($) {
  Drupal.Panels = {};

  Drupal.Panels.autoAttach = function () {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(function () {
          $('div.panel-hide', this).addClass("panel-hide-hover");
          return true;
        }, function () {
          $('div.panel-hide', this).removeClass("panel-hide-hover");
          return true;
        });
      $("div.admin-links").hover(function () {
          $(this).addClass("admin-links-hover");
          return true;
        }, function () {
          $(this).removeClass("admin-links-hover");
          return true;
        });
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
/* $Id: admin_menu.js,v 1.32 2010/02/20 23:44:00 sun Exp $ */
(function ($) {

  Drupal.admin = Drupal.admin || {};
  Drupal.admin.behaviors = Drupal.admin.behaviors || {};
  Drupal.admin.hashes = Drupal.admin.hashes || {};

  /**
   * Core behavior for Administration menu.
   *
   * Test whether there is an administration menu is in the output and execute all
   * registered behaviors.
   */
  Drupal.behaviors.adminMenu = {
    attach:function (context, settings) {
      // Initialize settings.
      settings.admin_menu = $.extend({
        suppress:false,
        margin_top:false,
        position_fixed:false,
        tweak_modules:false,
        tweak_permissions:false,
        tweak_tabs:false,
        destination:'',
        basePath:settings.basePath,
        hash:0,
        replacements:{}
      }, settings.admin_menu || {});
      // Check whether administration menu should be suppressed.
      if (settings.admin_menu.suppress) {
        return;
      }
      var $adminMenu = $('#admin-menu:not(.admin-menu-processed)', context);
      // Client-side caching; if administration menu is not in the output, it is
      // fetched from the server and cached in the browser.
      if (!$adminMenu.length && settings.admin_menu.hash) {
        Drupal.admin.getCache(settings.admin_menu.hash, function (response) {
          if (typeof response == 'string' && response.length > 0) {
            $('body', context).prepend(response);
          }
          var $adminMenu = $('#admin-menu:not(.admin-menu-processed)', context);
          // Apply our behaviors.
          Drupal.admin.attachBehaviors(context, settings, $adminMenu);
        });
      }
      // If the menu is in the output already, this means there is a new version.
      else {
        // Apply our behaviors.
        Drupal.admin.attachBehaviors(context, settings, $adminMenu);
      }
    }
  };

  /**
   * Collapse fieldsets on Modules page.
   */
  Drupal.behaviors.adminMenuCollapseModules = {
    attach:function (context, settings) {
      if (settings.admin_menu.tweak_modules) {
        $('#system-modules fieldset:not(.collapsed)', context).addClass('collapsed');
      }
    }
  };

  /**
   * Collapse modules on Permissions page.
   */
  Drupal.behaviors.adminMenuCollapsePermissions = {
    attach:function (context, settings) {
      if (settings.admin_menu.tweak_permissions) {
        // Freeze width of first column to prevent jumping.
        $('#permissions th:first', context).css({ width:$('#permissions th:first', context).width() });
        // Attach click handler.
        $('#permissions tr:has(td.module)', context).once('admin-menu-tweak-permissions',
          function () {
            var $module = $(this);
            $module.bind('click.admin-menu', function () {
              // @todo Replace with .nextUntil() in jQuery 1.4.
              $module.nextAll().each(function () {
                var $row = $(this);
                if ($row.is(':has(td.module)')) {
                  return false;
                }
                $row.toggleClass('element-hidden');
              });
            });
          }).trigger('click.admin-menu');
      }
    }
  };

  /**
   * Apply margin to page.
   *
   * Note that directly applying marginTop does not work in IE. To prevent
   * flickering/jumping page content with client-side caching, this is a regular
   * Drupal behavior.
   */
  Drupal.behaviors.adminMenuMarginTop = {
    attach:function (context, settings) {
      if (!settings.admin_menu.suppress && settings.admin_menu.margin_top) {
        $('body:not(.admin-menu)', context).addClass('admin-menu');
      }
    }
  };

  /**
   * Retrieve content from client-side cache.
   *
   * @param hash
   *   The md5 hash of the content to retrieve.
   * @param onSuccess
   *   A callback function invoked when the cache request was successful.
   */
  Drupal.admin.getCache = function (hash, onSuccess) {
    if (Drupal.admin.hashes.hash !== undefined) {
      return Drupal.admin.hashes.hash;
    }
    $.ajax({
      cache:true,
      type:'GET',
      dataType:'text', // Prevent auto-evaluation of response.
      global:false, // Do not trigger global AJAX events.
      url:Drupal.settings.admin_menu.basePath.replace(/admin_menu/, 'js/admin_menu/cache/' + hash),
      success:onSuccess,
      complete:function (XMLHttpRequest, status) {
        Drupal.admin.hashes.hash = status;
      }
    });
  }

  /**
   * @defgroup admin_behaviors Administration behaviors.
   * @{
   */

  /**
   * Attach administrative behaviors.
   */
  Drupal.admin.attachBehaviors = function (context, settings, $adminMenu) {
    if ($adminMenu.length) {
      $adminMenu.addClass('admin-menu-processed');
      $.each(Drupal.admin.behaviors, function () {
        this(context, settings, $adminMenu);
      });
    }
  };

  /**
   * Apply 'position: fixed'.
   */
  Drupal.admin.behaviors.positionFixed = function (context, settings, $adminMenu) {
    if (settings.admin_menu.position_fixed) {
      $adminMenu.addClass('admin-menu-position-fixed');
      $adminMenu.css('position', 'fixed');
    }
  };

  /**
   * Move page tabs into administration menu.
   */
  Drupal.admin.behaviors.pageTabs = function (context, settings, $adminMenu) {
    if (settings.admin_menu.tweak_tabs) {
      $('ul.tabs.primary li', context).addClass('admin-menu-tab').appendTo('#admin-menu-wrapper > ul');
      $('ul.tabs.secondary',
        context).appendTo('#admin-menu-wrapper > ul > li.admin-menu-tab.active').removeClass('secondary');
      $('ul.tabs.primary', context).remove();
    }
  };

  /**
   * Perform dynamic replacements in cached menu.
   */
  Drupal.admin.behaviors.replacements = function (context, settings, $adminMenu) {
    for (var item in settings.admin_menu.replacements) {
      $(item, $adminMenu).html(settings.admin_menu.replacements[item]);
    }
  }

  /**
   * Inject destination query strings for current page.
   */
  Drupal.admin.behaviors.destination = function (context, settings, $adminMenu) {
    if (settings.admin_menu.destination) {
      $('a.admin-menu-destination', $adminMenu).each(function () {
        this.search += (!this.search.length ? '?' : '&') + Drupal.settings.admin_menu.destination;
      });
    }
  }

  /**
   * Apply JavaScript-based hovering behaviors.
   *
   * @todo This has to run last.  If another script registers additional behaviors
   *   it will not run last.
   */
  Drupal.admin.behaviors.hover = function (context, settings, $adminMenu) {
    // Hover emulation for IE 6.
    if ($.browser.msie && parseInt(jQuery.browser.version) == 6) {
      $('li', $adminMenu).hover(function () {
          $(this).addClass('iehover');
        }, function () {
          $(this).removeClass('iehover');
        });
    }

    // Delayed mouseout.
    $('li.expandable', $adminMenu).hover(function () {
        // Stop the timer.
        clearTimeout(this.sfTimer);
        // Display child lists.
        $('> ul',
          this).css({left:'auto', display:'block'})// Immediately hide nephew lists..parent().siblings('li').children('ul').css({left:'-999em', display:'none'});
      }, function () {
        // Start the timer.
        var uls = $('> ul', this);
        this.sfTimer = setTimeout(function () {
          uls.css({left:'-999em', display:'none'});
        }, 400);
      });
  };

  /**
   * @} End of "defgroup admin_behaviors".
   */

})(jQuery);
;
/*
*	Class: fileUploader
*	Use: Upload multiple files using jquery
*	Author: John Laniba (http://pixelcone.com)
*	Version: 1.3
*/

(function($) {
	$.fileUploader = {version: '1.3', count: 0};
	$.fn.fileUploader = function(config){
		
		config = $.extend({}, {
			autoUpload: false,
			limit: false,
			buttonUpload: '#px-submit',
			buttonClear: '#px-clear',
			selectFileLabel: Drupal.t("Select files or drop this"),
			allowedExtension: 'jpg|jpeg|gif|png',
			timeInterval: [1, 2, 4, 2, 1, 5], //Mock percentage for iframe upload
			percentageInterval: [10, 20, 30, 40, 60, 80],
			
			//Callbacks
			onValidationError: null,	//trigger if file is invalid
			onFileChange: function(){},
			onFileRemove: function(){},
			beforeUpload: function(){}, //trigger after the submit button is click: before upload
			beforeEachUpload: function(){}, //callback before each file has been uploaded ::: returns each Form
			afterUpload: function(){},
			afterEachUpload: function(){} //callback after each file has been uploaded
			
		}, config);
		
		$.fileUploader.count++;
		
		//Multiple instance of a FOrm Container
		var pxUploadForm = 'px-form-' + $.fileUploader.count,
		pxWidget = 'px-widget-' + $.fileUploader.count,
		pxButton = 'px-button-' + $.fileUploader.count,
		wrapper = ' \
			<div id="'+ pxWidget +'" class="px-widget ui-widget"> \
				<div class="ui-helper-clearfix"> \
					<div id="'+ pxUploadForm +'-input" class="px-form-input"></div> \
					<div id="'+ pxButton +'" class="px-buttons"></div> \
				</div> \
				<div id="'+ pxUploadForm +'"></div> \
			</div> \
		',
		pxUploadForm = '#' + pxUploadForm,
		pxUploadFormInput = pxUploadForm + '-input',
		pxButton = '#' + pxButton,
		pxWidget = '#' + pxWidget,
		buttonClearId = null,
	
		itr = 1, //index/itr of file
		isLimit = (config.limit)? true : false,
		limit = parseInt(config.limit),
	
		e = this, //set e as this
		selector = $(this).selector,
		buttonM = pxButton + ' input, '+ pxButton +' button'; //Accept button as input and as button
		isFile = false, //this is use to hide other inputs in a form
		progress = 0, //percentage of the upload,
		totalForm = 0,
		jqxhr = null, //return object from jquery.ajax,
		timeInterval = config.timeInterval,
		percentageInterval = config.percentageInterval,
		pcount = 0, //progress count to set interval,
		progressTime = null,
		stopUpload = false; //Stop all upload
		
		if (window.FormData) {
			var isHtml5 = true;
		} else {
			var isHtml5 = false;
		}
		
		//Wrap all function that is accessable within the plugin
		var px = {
			
			//Initialize and format data
			init: function(){
				px.form = $(e).parents('form');
				
				//prepend wrapper markup
				px.form.before(wrapper);
				
				//Wrap input button
				$(e).wrap('<div class="px-input-button" />');
				px.form.find('.px-input-button').prepend('<span class="help">'+ config.selectFileLabel +'</span>');
				
				//move upload and clear button into id px_button
				px.form.find(config.buttonUpload + ',' + config.buttonClear).appendTo(pxButton);
				
				//Transform file input into ui button
				px.form.find('.px-input-button').button({
					icons: {
               			primary: "ui-icon-circle-plus"
            		}
				});
				$(config.buttonUpload, pxButton).button({
					icons: {
               			primary: "ui-icon-arrowthickstop-1-n"
            		}
				});
				$(config.buttonClear, pxButton).button({
					icons: {
               			primary: "ui-icon-circle-close"
            		}
				});
				
				//clear all form data
				px.clearFormData(px.form);
				
				px.form.hide();
				this.printForm();
				
				//Disable button
				$(buttonM).attr('disabled','disabled');
			},
			
			//Clone, format and append form
			printForm: function(){
				
				var formId = 'pxupload' + itr,
				iframeId = formId + '_frame';
				
				$('<iframe name="'+ iframeId +'"></iframe>').attr({
					id: iframeId,
					src: 'about:blank',
					style: 'display:none'
				}).prependTo(pxUploadFormInput);
				
				px.form.clone().attr({
					id: formId,
					target: iframeId
				}).prependTo(pxUploadFormInput).show();
				
				//Show only the file input
				px.showInputFile( '#'+formId );
				
				//This is not good but i left no choice because live function is not working on IE
				$(selector).change(function() {
					if (isHtml5) {
						html5Change(this);
					} else {
						uploadChange($(this));
					}
				});
			},
			
			//Show only the file input
			showInputFile: function(form) {
				$(pxUploadFormInput).find(form).children().each(function(){
					isFile = $(this).is(':file');
					if (!isFile && $(this).find(':file').length == 0) {
						$(this).hide();
					}
				});
			},
			//Hide file input and show other data
			hideInputFile: function($form) {
				$form.children().each(function(){
					isFile = $(this).is(':file');
					if (isFile || $(this).find(':file').length > 0) {
						$(this).hide();
					} else {
						$(this).show();
					}
				});
			},
			
			//Validate file
			getFileName: function(file) {
				
				if (file.indexOf('/') > -1){
					file = file.substring(file.lastIndexOf('/') + 1);
				} else if (file.indexOf('\\') > -1){
					file = file.substring(file.lastIndexOf('\\') + 1);
				}
				
				return file;
			},
			
			validateFileName: function(filename) {
				var extensions = new RegExp(config.allowedExtension + '$', 'i');
				if (extensions.test(filename)){
					return filename;
				} else {
					return -1;
				}
			},
			
			getFileSize: function(file) {
				var fileSize = 0;
				if (file.size > 1024 * 1024) {
					fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
				} else {
					fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
				}
				return fileSize;
			},
			
			//clear form data
			clearFormData: function(form) {
				$(form).find(':input').each(function() {
					if (this.type == 'file') {
						$(this).val('');
					}
				});
			}
			
		}
		
		//initialize
		px.init();
		
		/*
		*	Plugin Events/Method
		*/
		
		/*
		* Html5 file change
		*/
		function html5Change($this) {
			$.each( $this.files, function(index, file){
				uploadChange(file);
			});
			
			afterUploadChange();
		}
		
		/*
		*	Html5 Drag and Drop
		*/
		$.event.props.push('dataTransfer');
		$(pxWidget).bind( 'dragenter dragover', false)
		.bind( 'drop', function( e ) {
			e.stopPropagation();
			e.preventDefault();
			
			html5Change(e.dataTransfer);
			
		});
		
		/*
		*	On Change of upload file
		*/
		function uploadChange($this) {
			
			var $form = $(pxUploadFormInput + ' #pxupload'+ itr);
					
			//validate file
			var filename = (isHtml5)? $this.name : px.getFileName( $this.val() );
			if ( px.validateFileName(filename) == -1 ){
				if ($.isFunction(config.onValidationError)) {
					config.onValidationError($this);
				} else {
					alert ('Invalid file!');
				}
				$form.find(':file').val('');
				return false;
			}
			
			//Limit
			if (limit <= 0) {
				//Your message about exceeding limit
				
				return false;
			}
			limit = limit - 1;
			
			//remove disabled attr
			$(buttonM).removeAttr('disabled');
			
			//remove upload text after uploaded
			$('.upload-data', pxUploadForm).each(function() {
				if ( $(this).find('form').length <= 0 ) {
					$(this).remove();
				}
			});
			
			//append size of the file after filename
			if (isHtml5) {
				filename += ' (' + px.getFileSize($this) + ')';
			}

			//DIsplay syled markup				
			$(pxUploadForm).append(
				$('<div>').attr({
					'class': 'upload-data pending ui-widget-content ui-corner-all',
					id: 'pxupload'+ itr +'_text'
				})
				.data('formId', 'pxupload'+ itr)
				.append(' \
					<ul class="actions ui-helper-clearfix"> \
						<li title="Upload" class="upload ui-state-default ui-corner-all"> \
							<span class="ui-icon ui-icon-circle-triangle-e"></span> \
						</li> \
						<li title="Delete" class="delete ui-state-default ui-corner-all"> \
							<span class="ui-icon ui-icon-circle-minus"></span> \
						</li> \
					</ul> \
					<span class="filename">'+ filename +'</span> \
					<div class="progress ui-helper-clearfix"> \
						<div class="progressBar" id="progressBar_'+ itr +'"></div> \
						<div class="percentage">0%</div> \
					</div> \
					<div class="status">Pending...</div> \
				')
			);
			
			//Store input in form
			$form.data('input', $this);
			
			$form.appendTo(pxUploadForm + ' #pxupload'+ itr +'_text');
			
			//hide the input file
			px.hideInputFile( $form );
			
			//increment for printing form
			itr++;
			
			//print form
			px.printForm();
			
			//Callback on file Changed
			config.onFileChange($this, $form);
			
			if (!isHtml5) {
				afterUploadChange();
			}
		}
		
		/*
		*	After upload change triggers autoupload
		*/
		function afterUploadChange() {
			
			if (config.autoUpload) {
				
				//Display Cancel Button
				toogleCancel(true)
				
				stopUpload = false;
				//Queue and process upload
				uploadQueue();
			}
		}
		
		/*
		*	Queue Upload and send each form to process upload
		*/
		function uploadQueue() {
			
			//stop all upload
			if (stopUpload) {
				return;
			}
			
			totalForm = $(pxUploadForm + ' form').parent('.upload-data').get().length;
			if (totalForm > 0) {
				pendingUpload = $(pxUploadForm + ' form').parent('.upload-data').get(0);
				$form = $(pendingUpload).children('form');
				
				//before upload
				beforeEachUpload( $form );
				
				if (isHtml5) {
					//Upload Using Html5 api
					html5Upload( $form );
				} else {
					
					//upload using iframe
					iframeUpload( $form );
				}
			} else {
				config.afterUpload(pxUploadForm);
				
				//Revert Button to clear
				toogleCancel(false);
			}
		}
		
		/*
		*	Process form Upload
		*/
		function html5Upload($form) {
			file = $form.data('input');
			if (file) {
				var fd = new FormData();
				fd.append($form.find(selector).attr('name'), file);
				//get other form input and append to formData
				$form.find(':input').each(function() {
					if (this.type != 'file') {
						fd.append($(this).attr('name'), $(this).val());
					}
				});
				
				//show progress bar
				$uploadData = $form.parent();
				$uploadData.find('.progress').show();
				$progressBar = $uploadData.find('.progressBar');
				$percentage = $uploadData.find('.percentage');
				
				//Upload using jQuery AJAX
				jqxhr = $.ajax({
					url: $form.attr('action'),
					data: fd,
					cache: false,
					contentType: false,
					processData: false,
					type: 'POST',
					xhr: function() {
						var req = $.ajaxSettings.xhr();
						if (req) {
							req.upload.addEventListener('progress',function(ev){
								//Display progress Percentage
								progress = Math.round(ev.loaded * 100 / ev.total);
								$percentage.text(progress.toString() + '%');
								$progressBar.progressbar({
									value: progress
								});
							}, false);
						}
						return req;
					}
				})
				.success(function(data) {
					afterEachUpload($form.attr('id'), data );
				})
				.error(function(jqXHR, textStatus, errorThrown) {
					afterEachUpload($form.attr('id'), null, textStatus, errorThrown );
				})
				.complete(function(jqXHR, textStatus) {
					$progressBar.progressbar({
						value: 100
					});
					$percentage.text('100%');
					
					uploadQueue();
				});
			}
			
			$form.remove();
		}
		
		/*
		*	Iframe Upload Process
		*/
		function iframeUpload($form) {
			
			//show progress bar
			$uploadData = $form.parent();
			$uploadData.find('.progress').show();
			$percentage = $uploadData.find('.percentage');
			$progressBar = $uploadData.find('.progressBar');
			
			pcount = 0;
			dummyProgress($progressBar, $percentage);
			
			$form.submit();
			
			var id = pxWidget + ' #' + $form.attr('id');
			$(id +'_frame').load(function(){
				
				data = $(this).contents().find('body').html();
				
				afterEachUpload($form.attr('id'), data);
				
				clearTimeout ( progressTime );
				progress = 100;
				$percentage.text(progress.toString() + '%');
				$progressBar.progressbar({
					value: progress
				});
				
				uploadQueue();
				
			});
		}
		
		/*
		*	Show the progress bar to the user
		*/
		function dummyProgress($progressBar, $percentage) {
			
			if (percentageInterval[pcount]) {
				progress = percentageInterval[pcount] + Math.floor( Math.random() * 5 + 1 );
				$percentage.text(progress.toString() + '%');
				$progressBar.progressbar({
					value: progress
				});
			}
			
			if (timeInterval[pcount]) {
				progressTime = setTimeout(function(){
					dummyProgress($progressBar, $percentage)
				}, timeInterval[pcount] * 1000);
			}
			
			pcount++;
		}
		
		/*
		*	before Upload
		*/
		function beforeAllUpload() {
			//trigger before upload callback
			$continue = config.beforeUpload(e, pxButton);
			if ($continue === false) {			
				return false;
			}
			
			//Show Cancle Button
			toogleCancel(true);
			
			//process and queue upload
			uploadQueue();
		}
		
		/*
		* Before Each file is uploaded
		*/
		function beforeEachUpload($form) {
			
			//trigger before upload callback
			config.beforeEachUpload($form);
			
			$uploadData = $form.parent();
			$uploadData.find('.status').text('Uploading...');
			$uploadData.removeClass('pending').addClass('uploading');
			$uploadData.find('.delete').removeClass('delete').addClass('cancel').attr('title', 'Cancel');
		}
		
		/*
		* After Each file is uploaded
		*/
		function afterEachUpload(formId, data, status, errorThrown) {
			formId = pxWidget + ' #' + formId;
			$uploadData = $(formId + '_text');
			
			if (data.status == 'success'){
				
				$uploadData.removeClass('uploading').addClass('success');
				$uploadData.children('.status').html(data.message);

        $uploadData.fadeOut('slow', function () {
          $(this).remove();
          limit++;

        });
				
			} else if (data.status == 'error'){
				
				$uploadData.removeClass('uploading').addClass('error');
				
				//if client side error other display error from backend
				if (errorThrown) {
					$uploadData.children('.status').html( errorThrown );
				} else {
					$uploadData.children('.status').html( data.message );
				}
				
			} else if (data.status == 'abort') {
				
				$uploadData.removeClass('uploading').addClass('cancel');
				
				$uploadData.children('.status').html( 'Cancelled' );
			}
			
			$uploadData.find('.cancel').removeClass('cancel').addClass('delete').attr('title', 'Delete');
			
			//hide progress bar
			$uploadData.find('.progress').hide();
			
			//trigger after each upload
			config.afterEachUpload(data, status, $uploadData);
			
			$(formId).remove();
			$(formId + '_frame').remove();
		}
		
		/*
		*	Toggle Cancel/Delete button
		*/
		function toogleCancel(cancel) {
			
			if (cancel) {
				//store button clear id
				buttonClearId = $(config.buttonClear, pxButton).attr('id');
				//Cancel Button
				$(config.buttonClear, pxButton).attr({ id: 'px-cancel', title: 'Cancel' });
			} else {
				//Clear button
				$('#px-cancel', pxButton).attr({ id: buttonClearId, title: 'Clear' });
			}
		}
		
		/*
		*	Onlick submit button: start upload
		*/
		$(config.buttonUpload, pxButton).click(function(){
			
			stopUpload = false;
			
			beforeAllUpload();
		});
		
		/*
		* Individual Upload
		*/
		$('.upload', pxUploadForm).live('click', function(){
			
			$form = $(this).parents('.upload-data').children('form');
			if ($form.length > 0) {
				
				//Show Cancle Button
				toogleCancel(true);
								
				//before upload
				beforeEachUpload( $form );
				
				if (isHtml5) {
					//Upload Using Html5 api
					html5Upload( $form );
				} else {
					
					//upload using iframe
					iframeUpload( $form );
				}
				
				stopUpload = true;
			}
		});
		
		//Button Clear Event
		$(config.buttonClear, pxButton).live('click', function(){
			$(pxUploadForm).fadeOut('slow',function(){
				$(this).empty();
				$(this).show();
				$(pxUploadFormInput).empty();
				
				itr = 1; //reset iteration
				limit = parseInt(config.limit);
				
				//print the First form
				px.printForm();
				
				//disable button
				$(buttonM).attr('disabled','disabled');
			});
		});
		
		$('.delete', pxUploadForm).live('click', function(){
			
			limit++;
			
			var id = pxWidget + ' #' + $(this).parents('.upload-data').data('formId');
			$(id+'_text').fadeOut('slow',function(){
				$(id+'_frame').remove();
				$(this).remove();
				
				//disable button
				if ($(pxUploadForm).find('form').length <= 1) {
					$(buttonM).attr('disabled','disabled');	
				}
			});
			
			//on file remove callback
			config.onFileRemove(this);
		});
		
		/*
		*	Cancel individual upload
		*/
		$('.cancel', pxUploadForm).live('click', function() {
			if (jqxhr) {
				jqxhr.abort();
			}
			
			if (!isHtml5) {
				$form = $(this).parents('.upload-data').children('form');
				$form.remove();
				afterEachUpload($form.attr('id'), null, 'abort', 'Cancelled');
			}
		});
		
		/*
		*	Cancel all uploads
		*/
		$('#px-cancel', pxButton).live('click', function(){
			stopUpload = true;
			if (jqxhr) {
				jqxhr.abort();
			}
			
			$('form', pxUploadForm).each(function(){
				afterEachUpload($(this).attr('id'), null, 'abort', 'Cancelled');
			});
			
			//Show Clear Button
			toogleCancel(false);
		});
		
		/* Icons hover */
		$(".px-widget .actions li").live("mouseover mouseout", function(event) {
			if ( event.type == "mouseover" ) {
				$(this).addClass('ui-state-hover');
			} else {
				$(this).removeClass("ui-state-hover");
			}
		});
		
		return this;
	}
})(jQuery);;
/*!
 * jQuery UI 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.14",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();
b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,
"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",
function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,
outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,"tabindex"),d=isNaN(b);
return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=
0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*
 * jQuery UI Button 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(b){var h,i,j,g,l=function(){var a=b(this).find(":ui-button");setTimeout(function(){a.button("refresh")},1)},k=function(a){var c=a.name,e=a.form,f=b([]);if(c)f=e?b(e).find("[name='"+c+"']"):b("[name='"+c+"']",a.ownerDocument).filter(function(){return!this.form});return f};b.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",l);if(typeof this.options.disabled!==
"boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var a=this,c=this.options,e=this.type==="checkbox"||this.type==="radio",f="ui-state-hover"+(!e?" ui-state-active":"");if(c.label===null)c.label=this.buttonElement.html();if(this.element.is(":disabled"))c.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",function(){if(!c.disabled){b(this).addClass("ui-state-hover");
this===h&&b(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){c.disabled||b(this).removeClass(f)}).bind("click.button",function(d){if(c.disabled){d.preventDefault();d.stopImmediatePropagation()}});this.element.bind("focus.button",function(){a.buttonElement.addClass("ui-state-focus")}).bind("blur.button",function(){a.buttonElement.removeClass("ui-state-focus")});if(e){this.element.bind("change.button",function(){g||a.refresh()});this.buttonElement.bind("mousedown.button",function(d){if(!c.disabled){g=
false;i=d.pageX;j=d.pageY}}).bind("mouseup.button",function(d){if(!c.disabled)if(i!==d.pageX||j!==d.pageY)g=true})}if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(c.disabled||g)return false;b(this).toggleClass("ui-state-active");a.buttonElement.attr("aria-pressed",a.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(c.disabled||g)return false;b(this).addClass("ui-state-active");a.buttonElement.attr("aria-pressed",true);
var d=a.element[0];k(d).not(d).map(function(){return b(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return false;b(this).addClass("ui-state-active");h=this;b(document).one("mouseup",function(){h=null})}).bind("mouseup.button",function(){if(c.disabled)return false;b(this).removeClass("ui-state-active")}).bind("keydown.button",function(d){if(c.disabled)return false;if(d.keyCode==b.ui.keyCode.SPACE||
d.keyCode==b.ui.keyCode.ENTER)b(this).addClass("ui-state-active")}).bind("keyup.button",function(){b(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(d){d.keyCode===b.ui.keyCode.SPACE&&b(this).click()})}this._setOption("disabled",c.disabled);this._resetButton()},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type===
"radio"){var a=this.element.parents().filter(":last"),c="label[for="+this.element.attr("id")+"]";this.buttonElement=a.find(c);if(!this.buttonElement.length){a=a.length?a.siblings():this.element.siblings();this.buttonElement=a.filter(c);if(!this.buttonElement.length)this.buttonElement=a.find(c)}this.element.addClass("ui-helper-hidden-accessible");(a=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",a)}else this.buttonElement=this.element},
widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());this.hasTitle||this.buttonElement.removeAttr("title");
b.Widget.prototype.destroy.call(this)},_setOption:function(a,c){b.Widget.prototype._setOption.apply(this,arguments);if(a==="disabled")c?this.element.attr("disabled",true):this.element.removeAttr("disabled");else this._resetButton()},refresh:function(){var a=this.element.is(":disabled");a!==this.options.disabled&&this._setOption("disabled",a);if(this.type==="radio")k(this.element[0]).each(function(){b(this).is(":checked")?b(this).button("widget").addClass("ui-state-active").attr("aria-pressed",true):
b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var a=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c=b("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),e=this.options.icons,f=e.primary&&e.secondary,d=[];if(e.primary||e.secondary){if(this.options.text)d.push("ui-button-text-icon"+(f?"s":e.primary?"-primary":"-secondary"));e.primary&&a.prepend("<span class='ui-button-icon-primary ui-icon "+e.primary+"'></span>");e.secondary&&a.append("<span class='ui-button-icon-secondary ui-icon "+e.secondary+"'></span>");if(!this.options.text){d.push(f?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||a.attr("title",c)}}else d.push("ui-button-text-only");a.addClass(d.join(" "))}}});b.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(a,c){a==="disabled"&&this.buttons.button("option",a,c);b.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var a=this.element.css("direction")===
"ltr";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-left":"ui-corner-right").end().filter(":last").addClass(a?"ui-corner-right":"ui-corner-left").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
b.Widget.prototype.destroy.call(this)}})})(jQuery);
;/*
 * jQuery UI Progressbar 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(b,d){b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(a){if(a===d)return this._value();this._setOption("value",a);return this},_setOption:function(a,c){if(a==="value"){this.options.value=c;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;if(typeof a!=="number")a=0;return Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var a=this.value(),c=this._percentage();if(this.oldValue!==a){this.oldValue=a;this._trigger("change")}this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(c.toFixed(0)+"%");this.element.attr("aria-valuenow",a)}});b.extend(b.ui.progressbar,{version:"1.8.14"})})(jQuery);
;;
(function ($) {
  Drupal.behaviors.photo = {
    attach:function(context, settings) {
      if($('.fileUpload').length) {
        $('.fileUpload').fileUploader({
          limit: 5,
          afterEachUpload: function(data) {
            if(data.status == 'success') {
              $('<li>' + data.html +'</li>').hide().delay(1000).fadeIn('slow').prependTo('#uploaded-photo-list');
//              if(data.count_photo > 5) {
//                $('.px-widget').remove();
//              }
            }
          }
        });
      }
    }
  };

  Drupal.behaviors.video = {
    attach:function (context, settings) {
      if ($('.view-video-edit-list').length) {
        var videoId = 0;
        var tempText = '';

        $('.form-checkbox').click(function () {
          var self = $(this);
          var checked = self.attr('checked');
          var videoId = self.data('videoId');

          if (checked) {
            var parent = self.closest('tr');
            var div = $('<div></div>', {
              class:'video-ajax-delete-message',
              css:{
                'background-color':'rgba(255, 255, 255, 0.9)',
                'border':'1px solid #fef',
                'top':$(parent).position().top,
                'left':$(parent).position().left,
                'z-index':1000,
                'position':'absolute',
                'height':$(parent).height(),
                'width':$(parent).width(),
                'line-height':$(parent).height() + 'px',
                'text-align':'center'
              },
              html:'<input type="submit" id="video-ajax-delete-message-yes" class="form-submit" value="Yes"/>' + '<input type="submit" id="video-ajax-delete-message-no" class="form-submit" value="No"/>'
            });
            $(div).appendTo(parent);

            $('#video-ajax-delete-message-yes').live('click', function (e) {
              e.preventDefault();
              $.get('/get/delete/video', { 'videoId':videoId }, function () {
                $('.video-ajax-delete-message').remove();
                $(parent).fadeOut('slow', function () {
                  $(this).remove();
                });
              });
              return false;
            });
            $('#video-ajax-delete-message-no').live('click', function (e) {
              e.preventDefault();
              $(this).parent().fadeOut('slow', function () {
                self.attr('checked', false);
                $(this).remove();
              });
              return false;
            });
          }
        });

        $('.form-text').focus(
          function () {
            var self = $(this);
            tempText = self.val();
            videoId = self.data('videoId');
          }).blur(function () {
            var self = $(this);
            if (self.val() !== tempText) {
              var parent = self.closest('tr');
              var div = $('<div></div>', {
                class:'video-ajax-update-message',
                css:{
                  'background-color':'rgba(255, 255, 255, 0.9)',
                  'border':'1px solid #fef',
                  'top':$(parent).position().top,
                  'left':$(parent).position().left,
                  'z-index':1000,
                  'position':'absolute',
                  'height':$(parent).height(),
                  'width':$(parent).width(),
                  'line-height':$(parent).height() + 'px',
                  'text-align':'center'
                },
                html:Drupal.t('Please wait...')
              });
              $(div).appendTo(parent);

              $.get('/get/update/video', { 'videoId':videoId, 'videoTitle':self.val(), 'type':'title' },
                function (data, status) {
                  $(div).html(Drupal.t('Updated successfully')).stop().delay(1000).fadeOut('slow', function () {
                    $(this).remove();
                  });

                });
            }
            else {
              console.log('No changes');
            }
          });
        $('.form-textarea').focus(
          function () {
            var self = $(this);
            tempText = self.val();
            videoId = self.data('videoId');
          }).blur(function () {
            var self = $(this);
            if (self.val() !== tempText) {

              var parent = self.closest('tr');
              var div = $('<div></div>', {
                class:'video-ajax-update-message',
                css:{
                  'background-color':'rgba(255, 255, 255, 0.9)',
                  'border':'1px solid #fef',
                  'top':$(parent).position().top,
                  'left':$(parent).position().left,
                  'z-index':1000,
                  'position':'absolute',
                  'height':$(parent).height(),
                  'width':$(parent).width(),
                  'line-height':$(parent).height() + 'px',
                  'text-align':'center'
                },
                html:Drupal.t('Please wait...')
              });
              $(div).appendTo(parent);

              $.get('/get/update/video', { 'videoId':videoId, 'videoDescription':self.val(), 'type':'description' },
                function (data, status) {
                  $(div).html(Drupal.t('Updated successfully')).stop().delay(1000).fadeOut('slow', function () {
                    $(this).remove();
                  });
                });
            }
            else {
              console.log('No changes');
            }
          });
      }
    }
  };

  Drupal.behaviors.userCustomizing = {
    attach: function(context, settings){
      if($('#edit-picture-upload').length){
        $('#edit-picture-upload-link').click(function(e){
          e.preventDefault();

          $('#edit-picture-upload').click();

          return false;
        });
      }
    }
  };
})(jQuery);
;

/*!
 * jQuery Form Plugin
 * version: 2.52 (07-DEC-2010)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function(b){function q(){if(b.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log)window.console.log(a);else window.opera&&window.opera.postError&&window.opera.postError(a)}}b.fn.ajaxSubmit=function(a){function f(){function t(){var o=i.attr("target"),m=i.attr("action");l.setAttribute("target",u);l.getAttribute("method")!="POST"&&l.setAttribute("method","POST");l.getAttribute("action")!=e.url&&l.setAttribute("action",e.url);e.skipEncodingOverride|| i.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});e.timeout&&setTimeout(function(){F=true;s()},e.timeout);var v=[];try{if(e.extraData)for(var w in e.extraData)v.push(b('<input type="hidden" name="'+w+'" value="'+e.extraData[w]+'" />').appendTo(l)[0]);r.appendTo("body");r.data("form-plugin-onload",s);l.submit()}finally{l.setAttribute("action",m);o?l.setAttribute("target",o):i.removeAttr("target");b(v).remove()}}function s(){if(!G){r.removeData("form-plugin-onload");var o=true; try{if(F)throw"timeout";p=x.contentWindow?x.contentWindow.document:x.contentDocument?x.contentDocument:x.document;var m=e.dataType=="xml"||p.XMLDocument||b.isXMLDoc(p);q("isXml="+m);if(!m&&window.opera&&(p.body==null||p.body.innerHTML==""))if(--K){q("requeing onLoad callback, DOM not available");setTimeout(s,250);return}G=true;j.responseText=p.documentElement?p.documentElement.innerHTML:null;j.responseXML=p.XMLDocument?p.XMLDocument:p;j.getResponseHeader=function(L){return{"content-type":e.dataType}[L]}; var v=/(json|script)/.test(e.dataType);if(v||e.textarea){var w=p.getElementsByTagName("textarea")[0];if(w)j.responseText=w.value;else if(v){var H=p.getElementsByTagName("pre")[0],I=p.getElementsByTagName("body")[0];if(H)j.responseText=H.textContent;else if(I)j.responseText=I.innerHTML}}else if(e.dataType=="xml"&&!j.responseXML&&j.responseText!=null)j.responseXML=C(j.responseText);J=b.httpData(j,e.dataType)}catch(D){q("error caught:",D);o=false;j.error=D;b.handleError(e,j,"error",D)}if(j.aborted){q("upload aborted"); o=false}if(o){e.success.call(e.context,J,"success",j);y&&b.event.trigger("ajaxSuccess",[j,e])}y&&b.event.trigger("ajaxComplete",[j,e]);y&&!--b.active&&b.event.trigger("ajaxStop");if(e.complete)e.complete.call(e.context,j,o?"success":"error");setTimeout(function(){r.removeData("form-plugin-onload");r.remove();j.responseXML=null},100)}}function C(o,m){if(window.ActiveXObject){m=new ActiveXObject("Microsoft.XMLDOM");m.async="false";m.loadXML(o)}else m=(new DOMParser).parseFromString(o,"text/xml");return m&& m.documentElement&&m.documentElement.tagName!="parsererror"?m:null}var l=i[0];if(b(":input[name=submit],:input[id=submit]",l).length)alert('Error: Form elements must not have name or id of "submit".');else{var e=b.extend(true,{},b.ajaxSettings,a);e.context=e.context||e;var u="jqFormIO"+(new Date).getTime(),E="_"+u;window[E]=function(){var o=r.data("form-plugin-onload");if(o){o();window[E]=undefined;try{delete window[E]}catch(m){}}};var r=b('<iframe id="'+u+'" name="'+u+'" src="'+e.iframeSrc+'" onload="window[\'_\'+this.id]()" />'), x=r[0];r.css({position:"absolute",top:"-1000px",left:"-1000px"});var j={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=1;r.attr("src",e.iframeSrc)}},y=e.global;y&&!b.active++&&b.event.trigger("ajaxStart");y&&b.event.trigger("ajaxSend",[j,e]);if(e.beforeSend&&e.beforeSend.call(e.context,j,e)===false)e.global&&b.active--;else if(!j.aborted){var G=false, F=0,z=l.clk;if(z){var A=z.name;if(A&&!z.disabled){e.extraData=e.extraData||{};e.extraData[A]=z.value;if(z.type=="image"){e.extraData[A+".x"]=l.clk_x;e.extraData[A+".y"]=l.clk_y}}}e.forceSync?t():setTimeout(t,10);var J,p,K=50}}}if(!this.length){q("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof a=="function")a={success:a};var d=this.attr("action");if(d=typeof d==="string"?b.trim(d):"")d=(d.match(/^([^#]+)/)||[])[1];d=d||window.location.href||"";a=b.extend(true,{url:d, type:this.attr("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);d={};this.trigger("form-pre-serialize",[this,a,d]);if(d.veto){q("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(a.beforeSerialize&&a.beforeSerialize(this,a)===false){q("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var c,h,g=this.formToArray(a.semantic);if(a.data){a.extraData=a.data;for(c in a.data)if(a.data[c]instanceof Array)for(var k in a.data[c])g.push({name:c, value:a.data[c][k]});else{h=a.data[c];h=b.isFunction(h)?h():h;g.push({name:c,value:h})}}if(a.beforeSubmit&&a.beforeSubmit(g,this,a)===false){q("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[g,this,a,d]);if(d.veto){q("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}c=b.param(g);if(a.type.toUpperCase()=="GET"){a.url+=(a.url.indexOf("?")>=0?"&":"?")+c;a.data=null}else a.data=c;var i=this,n=[];a.resetForm&&n.push(function(){i.resetForm()}); a.clearForm&&n.push(function(){i.clearForm()});if(!a.dataType&&a.target){var B=a.success||function(){};n.push(function(t){var s=a.replaceTarget?"replaceWith":"html";b(a.target)[s](t).each(B,arguments)})}else a.success&&n.push(a.success);a.success=function(t,s,C){for(var l=a.context||a,e=0,u=n.length;e<u;e++)n[e].apply(l,[t,s,C||i,i])};c=b("input:file",this).length>0;k=i.attr("enctype")=="multipart/form-data"||i.attr("encoding")=="multipart/form-data";if(a.iframe!==false&&(c||a.iframe||k))a.closeKeepAlive? b.get(a.closeKeepAlive,f):f();else b.ajax(a);this.trigger("form-submit-notify",[this,a]);return this};b.fn.ajaxForm=function(a){if(this.length===0){var f={s:this.selector,c:this.context};if(!b.isReady&&f.s){q("DOM not ready, queuing ajaxForm");b(function(){b(f.s,f.c).ajaxForm(a)});return this}q("terminating; zero elements found by selector"+(b.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(d){if(!d.isDefaultPrevented()){d.preventDefault(); b(this).ajaxSubmit(a)}}).bind("click.form-plugin",function(d){var c=d.target,h=b(c);if(!h.is(":submit,input:image")){c=h.closest(":submit");if(c.length==0)return;c=c[0]}var g=this;g.clk=c;if(c.type=="image")if(d.offsetX!=undefined){g.clk_x=d.offsetX;g.clk_y=d.offsetY}else if(typeof b.fn.offset=="function"){h=h.offset();g.clk_x=d.pageX-h.left;g.clk_y=d.pageY-h.top}else{g.clk_x=d.pageX-c.offsetLeft;g.clk_y=d.pageY-c.offsetTop}setTimeout(function(){g.clk=g.clk_x=g.clk_y=null},100)})};b.fn.ajaxFormUnbind= function(){return this.unbind("submit.form-plugin click.form-plugin")};b.fn.formToArray=function(a){var f=[];if(this.length===0)return f;var d=this[0],c=a?d.getElementsByTagName("*"):d.elements;if(!c)return f;var h,g,k,i,n,B;h=0;for(n=c.length;h<n;h++){g=c[h];if(k=g.name)if(a&&d.clk&&g.type=="image"){if(!g.disabled&&d.clk==g){f.push({name:k,value:b(g).val()});f.push({name:k+".x",value:d.clk_x},{name:k+".y",value:d.clk_y})}}else if((i=b.fieldValue(g,true))&&i.constructor==Array){g=0;for(B=i.length;g< B;g++)f.push({name:k,value:i[g]})}else i!==null&&typeof i!="undefined"&&f.push({name:k,value:i})}if(!a&&d.clk){a=b(d.clk);c=a[0];if((k=c.name)&&!c.disabled&&c.type=="image"){f.push({name:k,value:a.val()});f.push({name:k+".x",value:d.clk_x},{name:k+".y",value:d.clk_y})}}return f};b.fn.formSerialize=function(a){return b.param(this.formToArray(a))};b.fn.fieldSerialize=function(a){var f=[];this.each(function(){var d=this.name;if(d){var c=b.fieldValue(this,a);if(c&&c.constructor==Array)for(var h=0,g=c.length;h< g;h++)f.push({name:d,value:c[h]});else c!==null&&typeof c!="undefined"&&f.push({name:this.name,value:c})}});return b.param(f)};b.fn.fieldValue=function(a){for(var f=[],d=0,c=this.length;d<c;d++){var h=b.fieldValue(this[d],a);h===null||typeof h=="undefined"||h.constructor==Array&&!h.length||(h.constructor==Array?b.merge(f,h):f.push(h))}return f};b.fieldValue=function(a,f){var d=a.name,c=a.type,h=a.tagName.toLowerCase();if(f===undefined)f=true;if(f&&(!d||a.disabled||c=="reset"||c=="button"||(c=="checkbox"|| c=="radio")&&!a.checked||(c=="submit"||c=="image")&&a.form&&a.form.clk!=a||h=="select"&&a.selectedIndex==-1))return null;if(h=="select"){var g=a.selectedIndex;if(g<0)return null;d=[];h=a.options;var k=(c=c=="select-one")?g+1:h.length;for(g=c?g:0;g<k;g++){var i=h[g];if(i.selected){var n=i.value;n||(n=i.attributes&&i.attributes.value&&!i.attributes.value.specified?i.text:i.value);if(c)return n;d.push(n)}}return d}return b(a).val()};b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea", this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var a=this.type,f=this.tagName.toLowerCase();if(a=="text"||a=="password"||f=="textarea")this.value="";else if(a=="checkbox"||a=="radio")this.checked=false;else if(f=="select")this.selectedIndex=-1})};b.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||typeof this.reset=="object"&&!this.reset.nodeType)this.reset()})};b.fn.enable=function(a){if(a===undefined)a=true;return this.each(function(){this.disabled= !a})};b.fn.selected=function(a){if(a===undefined)a=true;return this.each(function(){var f=this.type;if(f=="checkbox"||f=="radio")this.checked=a;else if(this.tagName.toLowerCase()=="option"){f=b(this).parent("select");a&&f[0]&&f[0].type=="select-one"&&f.find("option").selected(false);this.selected=a}})}})(jQuery);;
// $Id: ajax_poll.js,v 1.3 2011/01/28 01:32:42 quicksketch Exp $
(function ($) {

  /**
   * @file
   * Provides AJAX-voting capabilities to the normal Poll voting form.
   */

  /**
   * Behavior to add AJAX voting support to polls.
   */
  Drupal.behaviors.ajaxPoll = {};
  Drupal.behaviors.ajaxPoll.attach = function (context) {
    $('form.ajax-poll:not(.ajax-poll-processed)', context).addClass('ajax-poll-processed').each(function () {
      // Find the form and poll wrapper items that will be affected.
      var $form = $(this);
      var $pollWrapper = $form.parents('.content:first');

      // Find all the settings for this form.
      var url = $form.find('input[name=ajax_url]').val();
      var disabledText = $form.find('input[name=ajax_text]').val();
      var enabledText = $form.find('input.form-submit').val();

      // Set up the options for the AJAX voting mechanism.
      var options = {
        url:url,
        beforeSubmit:function (values, form, options) {
          if (disabledText) {
            $form.find('input.form-submit').attr('disabled', true).val(disabledText);
          }
        },
        success:function (response, status) {
          // Remove previous messages and re-enable the buttons in case anything
          // goes wrong after this.
          $form.find('input.form-submit').attr('disabled', '').val(enabledText);
          $form.find('.messages').remove();

          // On success, replace the poll content with the new content.
          if (response.status) {
            $pollWrapper.html(response.output);
            // The action attribute will be the path of the AJAX Poll menu
            // callback. We fix this here for consistency, even though this will
            // be replaced by the AJAX Poll beforeSubmit() function above.
            $pollWrapper.find('form').attr('action', window.location.pathname);
            Drupal.attachBehaviors($pollWrapper.parent().get(0));
          }

          // Display any new messages.
          if (response.messages) {
            $pollWrapper.prepend(response.messages);
          }
        },
        complete:function (response, status) {
          $form.find('input.form-submit').attr('disabled', '').val(enabledText);

          if (status == 'error' || status == 'parsererror') {
            $form.prepend(Drupal.theme('ajaxPollError'));
          }
        },
        dataType:'json',
        type:'POST'
      };

      // Add the handlers to the Poll form through the jquery.form.js library.
      $form.ajaxForm(options)
    });
  };

  /**
   * A fallback error that is shown upon a complete failure.
   *
   * This error is only used when the server cannot return a properly themed
   * error. This is usually because the server is unavailable or because the JSON
   * returned is invalid JSON.
   *
   * The second situation is most frequently caused by modules appending extra
   * information to requests and causing improper JSON. Modules that may do this
   * include Devel, Memcache Admin, and other development modules that output
   * debugging code.
   */
  Drupal.theme.prototype.ajaxPollError = function () {
    return '<div class="messages error">A parsing or network error has occurred.</div>';
  };

})(jQuery);
;
