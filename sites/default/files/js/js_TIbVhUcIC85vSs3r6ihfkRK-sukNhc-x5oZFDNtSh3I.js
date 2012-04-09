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
 * browserplus.js
 *
 * Provides a gateway between user JavaScript and the BrowserPlus platform
 * 
 * Copyright 2007-2009 Yahoo! Inc. All rights reserved.
 */
BrowserPlus=(typeof BrowserPlus!="undefined"&&BrowserPlus)?BrowserPlus:(function(){var P=false;var F="__browserPlusPluginID";var E="uninitialized";var G=[];var D="application/x-yahoo-browserplus_2";var J,K,L,H,A;return{initWhenAvailable:function(R,S){setTimeout(function(){try{navigator.plugins.refresh(false)}catch(T){}BrowserPlus.init(R,function(U){if(U.success){S(U)}else{BrowserPlus.initWhenAvailable(R,S)}})},1000)},clientSystemInfo:function(){return I()},listActiveServices:function(R){if(R==null||R.constructor!=Function){throw new Error("BrowserPlus.services() invoked without  required callback parameter.")}return N().EnumerateServices(R)},getPlatformInfo:function(){if(N()===null){throw new Error("BrowserPlus.getPlatformInfo() invoked, but init() has not completed successfully.")}return N().Info()},isServiceLoaded:function(S,R){return((S!=undefined&&BrowserPlus.hasOwnProperty(S))&&(R==undefined||BrowserPlus[S].hasOwnProperty(R)))},describeService:function(S,R){if(R==null||R.constructor!=Function){throw new Error("BrowserPlus.services() invoked without  required callback parameter")}if(N()===null){throw new Error("BrowserPlus.describeService() invoked, but init() has not completed successfully.")}return N().DescribeService(S,R)},isServiceActivated:function(S,R){return N().DescribeService(S,(function(){var T=R;return function(U){T(U.success)}})())},isInitialized:function(){return(E==="succeeded")},require:function(S,T){if(T==null||T.constructor!=Function){throw new Error("BrowserPlus.require() invoked without required callback parameter")}var R=function(V){if(V.success){var W=[];for(var U=0;U<V.value.length;U++){if(V.value[U].fullDesc){M({value:V.value[U].fullDesc});W.push({service:V.value[U].service,version:V.value[U].version})}else{BrowserPlus.describeService({service:V.value[U].service,version:V.value[U].version},M);W=V.value}}V.value=W}T(V)};N().RequireService(S,R);return true},init:function(T,S){if(I().browser=="Safari"){navigator.plugins.refresh(false)}var X=null;var W=null;if(S==null){W=T}else{X=T;W=S}if(W==null||W.constructor!=Function){throw new Error("BrowserPlus.init() invoked without  required callback parameter")}if(X===null){X=new Object}if(typeof(X.locale)=="undefined"){X.locale=I().locale}var R=true;if(!X.supportLevel||X.supportLevel==="experimental"){R=(I().supportLevel!=="unsupported")}else{if(X.supportLevel==="supported"){R=(I().supportLevel==="supported")}}if(!R){W({success:false,error:"bp.unsupportedClient"});return}if(E==="succeeded"){W({success:true});return}if(E=="inprogress"){G.push(W);return}E="inprogress";if(typeof(window.onunload)=="undefined"){window.onunload=function(){}}var V=false;if(Q()&&N()!==null){V=true}if(!V){E="uninitialized";W({success:false,error:"bp.notInstalled"});return}else{G.push(W);var U=(function(){var Y=X;return function(){var d=function(g){if(!g.success&&g.error==="bp.switchVersion"&&I().browser!=="Explorer"){var h="application/x-yahoo-browserplus_";h+=g.verboseError;if(h!==D){D=h;setTimeout(function(){try{var j=document.getElementById(F);if(j){document.documentElement.removeChild(j.parentNode)}navigator.plugins.refresh(false)}catch(i){}if(Q()&&N()!==null){setTimeout(function(){N().Initialize(Y,d)},10)}else{d(g)}},10);return}}if(!g.success&&g.error==="bp.switchVersion"){g={success:false,error:"bp.notInstalled",verboseError:"BrowserPlus isn't installed, or couldn't be loaded"}}E=g.success?"succeeded":"uninitialized";var e=G;G=[];for(var f=0;f<e.length;f++){e[f](g)}};try{N().Initialize(Y,d)}catch(b){var Z=I();var c={success:false,error:"bp.notInstalled",verboseError:String(b)};if(Z.browser=="Explorer"){c.error="bp.unsupportedClient"}else{if(Z.browser=="Firefox"){try{navigator.plugins.refresh(true)}catch(a){}}}d(c)}}})();setTimeout(U,0)}},_detectBrowser:function(){return BrowserPlus.clientSystemInfo()}};function Q(){if(B()){return C()}else{return O()}}function O(){var R=navigator.mimeTypes[D];if(typeof(R)!=="object"||typeof(R.enabledPlugin)!=="object"){return false}var S=document.createElement("div");S.style.visibility="hidden";S.style.borderStyle="hidden";S.style.width=0;S.style.height=0;S.style.border=0;S.style.position="absolute";S.style.top=0;S.style.left=0;S.innerHTML='<object type="'+D+'" id="'+F+'" name="'+F+'"></object>';document.documentElement.appendChild(S);P=true;return true}function C(){if(N()!=null){return true}try{var R=document.createElement("object");R.id=F;R.type=D;R.style.display="none";document.body.appendChild(R);document.getElementById(F).Ping();P=true;return true}catch(T){try{document.body.removeChild(R)}catch(S){}}return false}function N(){if(P){return document.getElementById(F)}return null}function B(){return(I().browser=="Explorer")}function M(T){T=T.value;var V=T.name;var R=T.versionString;if(!BrowserPlus[V]){BrowserPlus[V]={};BrowserPlus[V].corelet=V;BrowserPlus[V].version=R}if(!BrowserPlus[V][R]){BrowserPlus[V][R]={};BrowserPlus[V][R].corelet=V;BrowserPlus[V][R].version=R}if(V=="core"){BrowserPlus[V].version=R}if(T.functions){for(var S=0;S<T.functions.length;S++){var W=T.functions[S].name;var U=(function(){var X=W;return function(Z,Y){if(Y==null||Y.constructor!=Function){throw new Error("BrowserPlus."+V+"."+X+"() invoked without  required callback parameter")}return N().ExecuteMethod(V,R,X,Z,Y)}})();BrowserPlus[V][R][W]=U;if(R==BrowserPlus[V].version){BrowserPlus[V][W]=U}}}}function I(){var X=[{string:navigator.vendor,subString:"Apple",identity:"Safari"},{string:navigator.vendor,subString:"Google",identity:"Chrome"},{prop:window.opera,identity:"Opera"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"}];var W=[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.platform,subString:"Linux",identity:"Linux"}];var U={Mac:{Firefox:"supported",Safari:"supported"},Windows:{Explorer:{"8":"supported","7":"supported","6":"experimental"},Safari:"supported",Firefox:"supported",Chrome:"supported"}};var S;function T(b){for(var Y=0;Y<b.length;Y++){var Z=b[Y].string;var a=b[Y].prop;S=b[Y].versionSearch||b[Y].identity;if(Z){if(Z.indexOf(b[Y].subString)!=-1){return b[Y].identity}}else{if(a){return b[Y].identity}}}return null}function R(Z){var Y=Z.indexOf(S);if(Y==-1){return null}else{return parseFloat(Z.substring(Y+S.length+1))}}function V(){if(U[L]&&U[L][J]){var Y=U[L][J];if(typeof Y==="string"){return Y}else{if(Y[K]){return Y[K]}else{return"unsupported"}}}else{return"unsupported"}}if(!J){J=T(X)||"An unknown browser";K=R(navigator.userAgent)||R(navigator.appVersion)||"an unknown version";L=T(W)||"an unknown OS";if(L==="Mac"&&navigator.userAgent.indexOf("Intel")==-1){A="unsupported"}else{if(navigator.userAgent.indexOf("Firefox/2.0.0")!=-1){A="unsupported"}else{A=V()}}H=navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage}return{browser:J,version:K,os:L,locale:H,supportLevel:A}}})();if(typeof YAHOO=="undefined"||!YAHOO){var YAHOO={}}if(typeof YAHOO.bp=="undefined"||!YAHOO.bp){YAHOO.bp=BrowserPlus};;
/*1.5.3*/
(function(){var f=0,k=[],m={},i={},a={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},l=/[<>&\"\']/g,b,c=window.setTimeout,d={},e;function h(){this.returnValue=false}function j(){this.cancelBubble=true}(function(n){var o=n.split(/,/),p,r,q;for(p=0;p<o.length;p+=2){q=o[p+1].split(/ /);for(r=0;r<q.length;r++){i[q[r]]=o[p]}}})("application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mpga mpega mp2 mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe");var g={VERSION:"1.5.3",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:i,ua:(function(){var r=navigator,q=r.userAgent,s=r.vendor,o,n,p;o=/WebKit/.test(q);p=o&&s.indexOf("Apple")!==-1;n=window.opera&&window.opera.buildNumber;return{windows:navigator.platform.indexOf("Win")!==-1,ie:!o&&!n&&(/MSIE/gi).test(q)&&(/Explorer/gi).test(r.appName),webkit:o,gecko:!o&&/Gecko/.test(q),safari:p,opera:!!n}}()),typeOf:function(n){return({}).toString.call(n).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},extend:function(n){g.each(arguments,function(o,p){if(p>0){g.each(o,function(r,q){n[q]=r})}});return n},cleanName:function(n){var o,p;p=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(o=0;o<p.length;o+=2){n=n.replace(p[o],p[o+1])}n=n.replace(/\s+/g,"_");n=n.replace(/[^a-z0-9_\-\.]+/gi,"");return n},addRuntime:function(n,o){o.name=n;k[n]=o;k.push(o);return o},guid:function(){var n=new Date().getTime().toString(32),o;for(o=0;o<5;o++){n+=Math.floor(Math.random()*65535).toString(32)}return(g.guidPrefix||"p")+n+(f++).toString(32)},buildUrl:function(o,n){var p="";g.each(n,function(r,q){p+=(p?"&":"")+encodeURIComponent(q)+"="+encodeURIComponent(r)});if(p){o+=(o.indexOf("?")>0?"&":"?")+p}return o},each:function(q,r){var p,o,n;if(q){p=q.length;if(p===b){for(o in q){if(q.hasOwnProperty(o)){if(r(q[o],o)===false){return}}}}else{for(n=0;n<p;n++){if(r(q[n],n)===false){return}}}}},formatSize:function(n){if(n===b||/\D/.test(n)){return g.translate("N/A")}if(n>1073741824){return Math.round(n/1073741824,1)+" GB"}if(n>1048576){return Math.round(n/1048576,1)+" MB"}if(n>1024){return Math.round(n/1024,1)+" KB"}return n+" b"},getPos:function(o,s){var t=0,r=0,v,u=document,p,q;o=o;s=s||u.body;function n(B){var z,A,w=0,C=0;if(B){A=B.getBoundingClientRect();z=u.compatMode==="CSS1Compat"?u.documentElement:u.body;w=A.left+z.scrollLeft;C=A.top+z.scrollTop}return{x:w,y:C}}if(o&&o.getBoundingClientRect&&((navigator.userAgent.indexOf("MSIE")>0)&&(u.documentMode<8))){p=n(o);q=n(s);return{x:p.x-q.x,y:p.y-q.y}}v=o;while(v&&v!=s&&v.nodeType){t+=v.offsetLeft||0;r+=v.offsetTop||0;v=v.offsetParent}v=o.parentNode;while(v&&v!=s&&v.nodeType){t-=v.scrollLeft||0;r-=v.scrollTop||0;v=v.parentNode}return{x:t,y:r}},getSize:function(n){return{w:n.offsetWidth||n.clientWidth,h:n.offsetHeight||n.clientHeight}},parseSize:function(n){var o;if(typeof(n)=="string"){n=/^([0-9]+)([mgk]?)$/.exec(n.toLowerCase().replace(/[^0-9mkg]/g,""));o=n[2];n=+n[1];if(o=="g"){n*=1073741824}if(o=="m"){n*=1048576}if(o=="k"){n*=1024}}return n},xmlEncode:function(n){return n?(""+n).replace(l,function(o){return a[o]?"&"+a[o]+";":o}):n},toArray:function(p){var o,n=[];for(o=0;o<p.length;o++){n[o]=p[o]}return n},inArray:function(p,q){if(q){if(Array.prototype.indexOf){return Array.prototype.indexOf.call(q,p)}for(var n=0,o=q.length;n<o;n++){if(q[n]===p){return n}}}return -1},addI18n:function(n){return g.extend(m,n)},translate:function(n){return m[n]||n},isEmptyObj:function(n){if(n===b){return true}for(var o in n){return false}return true},hasClass:function(p,o){var n;if(p.className==""){return false}n=new RegExp("(^|\\s+)"+o+"(\\s+|$)");return n.test(p.className)},addClass:function(o,n){if(!g.hasClass(o,n)){o.className=o.className==""?n:o.className.replace(/\s+$/,"")+" "+n}},removeClass:function(p,o){var n=new RegExp("(^|\\s+)"+o+"(\\s+|$)");p.className=p.className.replace(n,function(r,q,s){return q===" "&&s===" "?" ":""})},getStyle:function(o,n){if(o.currentStyle){return o.currentStyle[n]}else{if(window.getComputedStyle){return window.getComputedStyle(o,null)[n]}}},addEvent:function(s,n,t){var r,q,p,o;o=arguments[3];n=n.toLowerCase();if(e===b){e="Plupload_"+g.guid()}if(s.addEventListener){r=t;s.addEventListener(n,r,false)}else{if(s.attachEvent){r=function(){var u=window.event;if(!u.target){u.target=u.srcElement}u.preventDefault=h;u.stopPropagation=j;t(u)};s.attachEvent("on"+n,r)}}if(s[e]===b){s[e]=g.guid()}if(!d.hasOwnProperty(s[e])){d[s[e]]={}}q=d[s[e]];if(!q.hasOwnProperty(n)){q[n]=[]}q[n].push({func:r,orig:t,key:o})},removeEvent:function(s,n){var q,t,p;if(typeof(arguments[2])=="function"){t=arguments[2]}else{p=arguments[2]}n=n.toLowerCase();if(s[e]&&d[s[e]]&&d[s[e]][n]){q=d[s[e]][n]}else{return}for(var o=q.length-1;o>=0;o--){if(q[o].key===p||q[o].orig===t){if(s.removeEventListener){s.removeEventListener(n,q[o].func,false)}else{if(s.detachEvent){s.detachEvent("on"+n,q[o].func)}}q[o].orig=null;q[o].func=null;q.splice(o,1);if(t!==b){break}}}if(!q.length){delete d[s[e]][n]}if(g.isEmptyObj(d[s[e]])){delete d[s[e]];try{delete s[e]}catch(r){s[e]=b}}},removeAllEvents:function(o){var n=arguments[1];if(o[e]===b||!o[e]){return}g.each(d[o[e]],function(q,p){g.removeEvent(o,p,n)})}};g.Uploader=function(r){var o={},u,t=[],q,p=false;u=new g.QueueProgress();r=g.extend({chunk_size:0,multipart:true,multi_selection:true,file_data_name:"file",filters:[]},r);function s(){var w,x=0,v;if(this.state==g.STARTED){for(v=0;v<t.length;v++){if(!w&&t[v].status==g.QUEUED){w=t[v];w.status=g.UPLOADING;if(this.trigger("BeforeUpload",w)){this.trigger("UploadFile",w)}}else{x++}}if(x==t.length){this.stop();this.trigger("UploadComplete",t)}}}function n(){var w,v;u.reset();for(w=0;w<t.length;w++){v=t[w];if(v.size!==b){u.size+=v.size;u.loaded+=v.loaded}else{u.size=b}if(v.status==g.DONE){u.uploaded++}else{if(v.status==g.FAILED){u.failed++}else{u.queued++}}}if(u.size===b){u.percent=t.length>0?Math.ceil(u.uploaded/t.length*100):0}else{u.bytesPerSec=Math.ceil(u.loaded/((+new Date()-q||1)/1000));u.percent=u.size>0?Math.ceil(u.loaded/u.size*100):0}}g.extend(this,{state:g.STOPPED,runtime:"",features:{},files:t,settings:r,total:u,id:g.guid(),init:function(){var A=this,B,x,w,z=0,y;if(typeof(r.preinit)=="function"){r.preinit(A)}else{g.each(r.preinit,function(D,C){A.bind(C,D)})}r.page_url=r.page_url||document.location.pathname.replace(/\/[^\/]+$/g,"/");if(!/^(\w+:\/\/|\/)/.test(r.url)){r.url=r.page_url+r.url}r.chunk_size=g.parseSize(r.chunk_size);r.max_file_size=g.parseSize(r.max_file_size);A.bind("FilesAdded",function(C,F){var E,D,H=0,I,G=r.filters;if(G&&G.length){I=[];g.each(G,function(J){g.each(J.extensions.split(/,/),function(K){if(/^\s*\*\s*$/.test(K)){I.push("\\.*")}else{I.push("\\."+K.replace(new RegExp("["+("/^$.*+?|()[]{}\\".replace(/./g,"\\$&"))+"]","g"),"\\$&"))}})});I=new RegExp(I.join("|")+"$","i")}for(E=0;E<F.length;E++){D=F[E];D.loaded=0;D.percent=0;D.status=g.QUEUED;if(I&&!I.test(D.name)){C.trigger("Error",{code:g.FILE_EXTENSION_ERROR,message:g.translate("File extension error."),file:D});continue}if(D.size!==b&&D.size>r.max_file_size){C.trigger("Error",{code:g.FILE_SIZE_ERROR,message:g.translate("File size error."),file:D});continue}t.push(D);H++}if(H){c(function(){A.trigger("QueueChanged");A.refresh()},1)}else{return false}});if(r.unique_names){A.bind("UploadFile",function(C,D){var F=D.name.match(/\.([^.]+)$/),E="tmp";if(F){E=F[1]}D.target_name=D.id+"."+E})}A.bind("UploadProgress",function(C,D){D.percent=D.size>0?Math.ceil(D.loaded/D.size*100):100;n()});A.bind("StateChanged",function(C){if(C.state==g.STARTED){q=(+new Date())}else{if(C.state==g.STOPPED){for(B=C.files.length-1;B>=0;B--){if(C.files[B].status==g.UPLOADING){C.files[B].status=g.QUEUED;n()}}}}});A.bind("QueueChanged",n);A.bind("Error",function(C,D){if(D.file){D.file.status=g.FAILED;n();if(C.state==g.STARTED){c(function(){s.call(A)},1)}}});A.bind("FileUploaded",function(C,D){D.status=g.DONE;D.loaded=D.size;C.trigger("UploadProgress",D);c(function(){s.call(A)},1)});if(r.runtimes){x=[];y=r.runtimes.split(/\s?,\s?/);for(B=0;B<y.length;B++){if(k[y[B]]){x.push(k[y[B]])}}}else{x=k}function v(){var F=x[z++],E,C,D;if(F){E=F.getFeatures();C=A.settings.required_features;if(C){C=C.split(",");for(D=0;D<C.length;D++){if(!E[C[D]]){v();return}}}F.init(A,function(G){if(G&&G.success){A.features=E;A.runtime=F.name;A.trigger("Init",{runtime:F.name});A.trigger("PostInit");A.refresh()}else{v()}})}else{A.trigger("Error",{code:g.INIT_ERROR,message:g.translate("Init error.")})}}v();if(typeof(r.init)=="function"){r.init(A)}else{g.each(r.init,function(D,C){A.bind(C,D)})}},refresh:function(){this.trigger("Refresh")},start:function(){if(t.length&&this.state!=g.STARTED){this.state=g.STARTED;this.trigger("StateChanged");s.call(this)}},stop:function(){if(this.state!=g.STOPPED){this.state=g.STOPPED;this.trigger("CancelUpload");this.trigger("StateChanged")}},disableBrowse:function(){p=arguments[0]!==b?arguments[0]:true;this.trigger("DisableBrowse",p)},getFile:function(w){var v;for(v=t.length-1;v>=0;v--){if(t[v].id===w){return t[v]}}},removeFile:function(w){var v;for(v=t.length-1;v>=0;v--){if(t[v].id===w.id){return this.splice(v,1)[0]}}},splice:function(x,v){var w;w=t.splice(x===b?0:x,v===b?t.length:v);this.trigger("FilesRemoved",w);this.trigger("QueueChanged");return w},trigger:function(w){var y=o[w.toLowerCase()],x,v;if(y){v=Array.prototype.slice.call(arguments);v[0]=this;for(x=0;x<y.length;x++){if(y[x].func.apply(y[x].scope,v)===false){return false}}}return true},hasEventListener:function(v){return !!o[v.toLowerCase()]},bind:function(v,x,w){var y;v=v.toLowerCase();y=o[v]||[];y.push({func:x,scope:w||this});o[v]=y},unbind:function(v){v=v.toLowerCase();var y=o[v],w,x=arguments[1];if(y){if(x!==b){for(w=y.length-1;w>=0;w--){if(y[w].func===x){y.splice(w,1);break}}}else{y=[]}if(!y.length){delete o[v]}}},unbindAll:function(){var v=this;g.each(o,function(x,w){v.unbind(w)})},destroy:function(){this.stop();this.trigger("Destroy");this.unbindAll()}})};g.File=function(q,o,p){var n=this;n.id=q;n.name=o;n.size=p;n.loaded=0;n.percent=0;n.status=0};g.Runtime=function(){this.getFeatures=function(){};this.init=function(n,o){}};g.QueueProgress=function(){var n=this;n.size=0;n.loaded=0;n.uploaded=0;n.failed=0;n.queued=0;n.percent=0;n.bytesPerSec=0;n.reset=function(){n.size=n.loaded=n.uploaded=n.failed=n.queued=n.percent=n.bytesPerSec=0}};g.runtimes={};window.plupload=g})();;
(function(){if(window.google&&google.gears){return}var a=null;if(typeof GearsFactory!="undefined"){a=new GearsFactory()}else{try{a=new ActiveXObject("Gears.Factory");if(a.getBuildInfo().indexOf("ie_mobile")!=-1){a.privateSetGlobalObject(this)}}catch(b){if((typeof navigator.mimeTypes!="undefined")&&navigator.mimeTypes["application/x-googlegears"]){a=document.createElement("object");a.style.display="none";a.width=0;a.height=0;a.type="application/x-googlegears";document.documentElement.appendChild(a)}}}if(!a){return}if(!window.google){window.google={}}if(!google.gears){google.gears={factory:a}}})();(function(e,b,c,d){var f={};function a(h,j,l){var g,i,k,n;i=google.gears.factory.create("beta.canvas");try{i.decode(h);if(!j.width){j.width=i.width}if(!j.height){j.height=i.height}n=Math.min(width/i.width,height/i.height);if(n<1||(n===1&&l==="image/jpeg")){i.resize(Math.round(i.width*n),Math.round(i.height*n));if(j.quality){return i.encode(l,{quality:j.quality/100})}return i.encode(l)}}catch(m){}return h}c.runtimes.Gears=c.addRuntime("gears",{getFeatures:function(){return{dragdrop:true,jpgresize:true,pngresize:true,chunks:true,progress:true,multipart:true,multi_selection:true}},init:function(k,m){var l,h,g=false;if(!e.google||!google.gears){return m({success:false})}try{l=google.gears.factory.create("beta.desktop")}catch(j){return m({success:false})}function i(p){var o,n,q=[],r;for(n=0;n<p.length;n++){o=p[n];r=c.guid();f[r]=o.blob;q.push(new c.File(r,o.name,o.blob.length))}k.trigger("FilesAdded",q)}k.bind("PostInit",function(){var o=k.settings,n=b.getElementById(o.drop_element);if(n){c.addEvent(n,"dragover",function(p){l.setDropEffect(p,"copy");p.preventDefault()},k.id);c.addEvent(n,"drop",function(q){var p=l.getDragData(q,"application/x-gears-files");if(p){i(p.files)}q.preventDefault()},k.id);n=0}c.addEvent(b.getElementById(o.browse_button),"click",function(t){var s=[],q,p,r;t.preventDefault();if(g){return}no_type_restriction:for(q=0;q<o.filters.length;q++){r=o.filters[q].extensions.split(",");for(p=0;p<r.length;p++){if(r[p]==="*"){s=[];break no_type_restriction}s.push("."+r[p])}}l.openFiles(i,{singleFile:!o.multi_selection,filter:s})},k.id)});k.bind("CancelUpload",function(){if(h.abort){h.abort()}});k.bind("UploadFile",function(t,q){var v=0,u,r,s=0,p=t.settings.resize,n;if(p&&/\.(png|jpg|jpeg)$/i.test(q.name)){f[q.id]=a(f[q.id],p,/\.png$/i.test(q.name)?"image/png":"image/jpeg")}q.size=f[q.id].length;r=t.settings.chunk_size;n=r>0;u=Math.ceil(q.size/r);if(!n){r=q.size;u=1}function o(){var B,x=t.settings.multipart,w=0,A={name:q.target_name||q.name},y=t.settings.url;function z(D){var C,I="----pluploadboundary"+c.guid(),F="--",H="\r\n",E,G;if(x){h.setRequestHeader("Content-Type","multipart/form-data; boundary="+I);C=google.gears.factory.create("beta.blobbuilder");c.each(c.extend(A,t.settings.multipart_params),function(K,J){C.append(F+I+H+'Content-Disposition: form-data; name="'+J+'"'+H+H);C.append(K+H)});G=c.mimeTypes[q.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream";C.append(F+I+H+'Content-Disposition: form-data; name="'+t.settings.file_data_name+'"; filename="'+q.name+'"'+H+"Content-Type: "+G+H+H);C.append(D);C.append(H+F+I+F+H);E=C.getAsBlob();w=E.length-D.length;D=E}h.send(D)}if(q.status==c.DONE||q.status==c.FAILED||t.state==c.STOPPED){return}if(n){A.chunk=v;A.chunks=u}B=Math.min(r,q.size-(v*r));if(!x){y=c.buildUrl(t.settings.url,A)}h=google.gears.factory.create("beta.httprequest");h.open("POST",y);if(!x){h.setRequestHeader("Content-Disposition",'attachment; filename="'+q.name+'"');h.setRequestHeader("Content-Type","application/octet-stream")}c.each(t.settings.headers,function(D,C){h.setRequestHeader(C,D)});h.upload.onprogress=function(C){q.loaded=s+C.loaded-w;t.trigger("UploadProgress",q)};h.onreadystatechange=function(){var C;if(h.readyState==4&&t.state!==c.STOPPED){if(h.status==200){C={chunk:v,chunks:u,response:h.responseText,status:h.status};t.trigger("ChunkUploaded",q,C);if(C.cancelled){q.status=c.FAILED;return}s+=B;if(++v>=u){q.status=c.DONE;t.trigger("FileUploaded",q,{response:h.responseText,status:h.status})}else{o()}}else{t.trigger("Error",{code:c.HTTP_ERROR,message:c.translate("HTTP Error."),file:q,chunk:v,chunks:u,status:h.status})}}};if(v<u){z(f[q.id].slice(v*r,B))}}o()});k.bind("DisableBrowse",function(n,o){g=o});k.bind("Destroy",function(n){var o,p,q={browseButton:n.settings.browse_button,dropElm:n.settings.drop_element};for(o in q){p=b.getElementById(q[o]);if(p){c.removeAllEvents(p,n.id)}}});m({success:true})}})})(window,document,plupload);;
(function(g,b,d,e){var a={},h={};function c(o){var n,m=typeof o,j,l,k;if(o===e||o===null){return"null"}if(m==="string"){n="\bb\tt\nn\ff\rr\"\"''\\\\";return'"'+o.replace(/([\u0080-\uFFFF\x00-\x1f\"])/g,function(q,p){var i=n.indexOf(p);if(i+1){return"\\"+n.charAt(i+1)}q=p.charCodeAt().toString(16);return"\\u"+"0000".substring(q.length)+q})+'"'}if(m=="object"){j=o.length!==e;n="";if(j){for(l=0;l<o.length;l++){if(n){n+=","}n+=c(o[l])}n="["+n+"]"}else{for(k in o){if(o.hasOwnProperty(k)){if(n){n+=","}n+=c(k)+":"+c(o[k])}}n="{"+n+"}"}return n}return""+o}function f(r){var u=false,i=null,n=null,j,k,l,t,m,p=0;try{try{n=new ActiveXObject("AgControl.AgControl");if(n.IsVersionSupported(r)){u=true}n=null}catch(q){var o=navigator.plugins["Silverlight Plug-In"];if(o){j=o.description;if(j==="1.0.30226.2"){j="2.0.30226.2"}k=j.split(".");while(k.length>3){k.pop()}while(k.length<4){k.push(0)}l=r.split(".");while(l.length>4){l.pop()}do{t=parseInt(l[p],10);m=parseInt(k[p],10);p++}while(p<l.length&&t===m);if(t<=m&&!isNaN(t)){u=true}}}}catch(s){u=false}return u}d.silverlight={trigger:function(n,k){var m=a[n],l,j;if(m){j=d.toArray(arguments).slice(1);j[0]="Silverlight:"+k;setTimeout(function(){m.trigger.apply(m,j)},0)}}};d.runtimes.Silverlight=d.addRuntime("silverlight",{getFeatures:function(){return{jpgresize:true,pngresize:true,chunks:true,progress:true,multipart:true,multi_selection:true}},init:function(p,q){var o,m="",n=p.settings.filters,l,k=b.body;if(!f("2.0.31005.0")||(g.opera&&g.opera.buildNumber)){q({success:false});return}h[p.id]=false;a[p.id]=p;o=b.createElement("div");o.id=p.id+"_silverlight_container";d.extend(o.style,{position:"absolute",top:"0px",background:p.settings.shim_bgcolor||"transparent",zIndex:99999,width:"100px",height:"100px",overflow:"hidden",opacity:p.settings.shim_bgcolor||b.documentMode>8?"":0.01});o.className="plupload silverlight";if(p.settings.container){k=b.getElementById(p.settings.container);if(d.getStyle(k,"position")==="static"){k.style.position="relative"}}k.appendChild(o);for(l=0;l<n.length;l++){m+=(m!=""?"|":"")+n[l].title+" | *."+n[l].extensions.replace(/,/g,";*.")}o.innerHTML='<object id="'+p.id+'_silverlight" data="data:application/x-silverlight," type="application/x-silverlight-2" style="outline:none;" width="1024" height="1024"><param name="source" value="'+p.settings.silverlight_xap_url+'"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="id='+p.id+",filter="+m+",multiselect="+p.settings.multi_selection+'"/></object>';function j(){return b.getElementById(p.id+"_silverlight").content.Upload}p.bind("Silverlight:Init",function(){var i,r={};if(h[p.id]){return}h[p.id]=true;p.bind("Silverlight:StartSelectFiles",function(s){i=[]});p.bind("Silverlight:SelectFile",function(s,v,t,u){var w;w=d.guid();r[w]=v;r[v]=w;i.push(new d.File(w,t,u))});p.bind("Silverlight:SelectSuccessful",function(){if(i.length){p.trigger("FilesAdded",i)}});p.bind("Silverlight:UploadChunkError",function(s,v,t,w,u){p.trigger("Error",{code:d.IO_ERROR,message:"IO Error.",details:u,file:s.getFile(r[v])})});p.bind("Silverlight:UploadFileProgress",function(s,w,t,v){var u=s.getFile(r[w]);if(u.status!=d.FAILED){u.size=v;u.loaded=t;s.trigger("UploadProgress",u)}});p.bind("Refresh",function(s){var t,u,v;t=b.getElementById(s.settings.browse_button);if(t){u=d.getPos(t,b.getElementById(s.settings.container));v=d.getSize(t);d.extend(b.getElementById(s.id+"_silverlight_container").style,{top:u.y+"px",left:u.x+"px",width:v.w+"px",height:v.h+"px"})}});p.bind("Silverlight:UploadChunkSuccessful",function(s,v,t,y,x){var w,u=s.getFile(r[v]);w={chunk:t,chunks:y,response:x};s.trigger("ChunkUploaded",u,w);if(u.status!=d.FAILED&&s.state!==d.STOPPED){j().UploadNextChunk()}if(t==y-1){u.status=d.DONE;s.trigger("FileUploaded",u,{response:x})}});p.bind("Silverlight:UploadSuccessful",function(s,v,t){var u=s.getFile(r[v]);u.status=d.DONE;s.trigger("FileUploaded",u,{response:t})});p.bind("FilesRemoved",function(s,u){var t;for(t=0;t<u.length;t++){j().RemoveFile(r[u[t].id])}});p.bind("UploadFile",function(s,u){var v=s.settings,t=v.resize||{};j().UploadFile(r[u.id],s.settings.url,c({name:u.target_name||u.name,mime:d.mimeTypes[u.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream",chunk_size:v.chunk_size,image_width:t.width,image_height:t.height,image_quality:t.quality||90,multipart:!!v.multipart,multipart_params:v.multipart_params||{},file_data_name:v.file_data_name,headers:v.headers}))});p.bind("CancelUpload",function(){j().CancelUpload()});p.bind("Silverlight:MouseEnter",function(s){var t,u;t=b.getElementById(p.settings.browse_button);u=s.settings.browse_button_hover;if(t&&u){d.addClass(t,u)}});p.bind("Silverlight:MouseLeave",function(s){var t,u;t=b.getElementById(p.settings.browse_button);u=s.settings.browse_button_hover;if(t&&u){d.removeClass(t,u)}});p.bind("Silverlight:MouseLeftButtonDown",function(s){var t,u;t=b.getElementById(p.settings.browse_button);u=s.settings.browse_button_active;if(t&&u){d.addClass(t,u);d.addEvent(b.body,"mouseup",function(){d.removeClass(t,u)})}});p.bind("Sliverlight:StartSelectFiles",function(s){var t,u;t=b.getElementById(p.settings.browse_button);u=s.settings.browse_button_active;if(t&&u){d.removeClass(t,u)}});p.bind("DisableBrowse",function(s,t){j().DisableBrowse(t)});p.bind("Destroy",function(s){var t;d.removeAllEvents(b.body,s.id);delete h[s.id];delete a[s.id];t=b.getElementById(s.id+"_silverlight_container");if(t){k.removeChild(t)}});q({success:true})})}})})(window,document,plupload);;
(function(f,b,d,e){var a={},g={};function c(){var h;try{h=navigator.plugins["Shockwave Flash"];h=h.description}catch(j){try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(i){h="0.0"}}h=h.match(/\d+/g);return parseFloat(h[0]+"."+h[1])}d.flash={trigger:function(j,h,i){setTimeout(function(){var m=a[j],l,k;if(m){m.trigger("Flash:"+h,i)}},0)}};d.runtimes.Flash=d.addRuntime("flash",{getFeatures:function(){return{jpgresize:true,pngresize:true,maxWidth:8091,maxHeight:8091,chunks:true,progress:true,multipart:true,multi_selection:true}},init:function(m,o){var k,l,h=0,i=b.body;if(c()<10){o({success:false});return}g[m.id]=false;a[m.id]=m;k=b.getElementById(m.settings.browse_button);l=b.createElement("div");l.id=m.id+"_flash_container";d.extend(l.style,{position:"absolute",top:"0px",background:m.settings.shim_bgcolor||"transparent",zIndex:99999,width:"100%",height:"100%"});l.className="plupload flash";if(m.settings.container){i=b.getElementById(m.settings.container);if(d.getStyle(i,"position")==="static"){i.style.position="relative"}}i.appendChild(l);(function(){var p,q;p='<object id="'+m.id+'_flash" type="application/x-shockwave-flash" data="'+m.settings.flash_swf_url+'" ';if(d.ua.ie){p+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '}p+='width="100%" height="100%" style="outline:0"><param name="movie" value="'+m.settings.flash_swf_url+'" /><param name="flashvars" value="id='+escape(m.id)+'" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>';if(d.ua.ie){q=b.createElement("div");l.appendChild(q);q.outerHTML=p;q=null}else{l.innerHTML=p}}());function n(){return b.getElementById(m.id+"_flash")}function j(){if(h++>5000){o({success:false});return}if(g[m.id]===false){setTimeout(j,1)}}j();k=l=null;m.bind("Destroy",function(p){var q;d.removeAllEvents(b.body,p.id);delete g[p.id];delete a[p.id];q=b.getElementById(p.id+"_flash_container");if(q){i.removeChild(q)}});m.bind("Flash:Init",function(){var q={},p;n().setFileFilters(m.settings.filters,m.settings.multi_selection);if(g[m.id]){return}g[m.id]=true;m.bind("UploadFile",function(r,t){var u=r.settings,s=m.settings.resize||{};n().uploadFile(q[t.id],u.url,{name:t.target_name||t.name,mime:d.mimeTypes[t.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream",chunk_size:u.chunk_size,width:s.width,height:s.height,quality:s.quality,multipart:u.multipart,multipart_params:u.multipart_params||{},file_data_name:u.file_data_name,format:/\.(jpg|jpeg)$/i.test(t.name)?"jpg":"png",headers:u.headers,urlstream_upload:u.urlstream_upload})});m.bind("CancelUpload",function(){n().cancelUpload()});m.bind("Flash:UploadProcess",function(s,r){var t=s.getFile(q[r.id]);if(t.status!=d.FAILED){t.loaded=r.loaded;t.size=r.size;s.trigger("UploadProgress",t)}});m.bind("Flash:UploadChunkComplete",function(r,t){var u,s=r.getFile(q[t.id]);u={chunk:t.chunk,chunks:t.chunks,response:t.text};r.trigger("ChunkUploaded",s,u);if(s.status!==d.FAILED&&r.state!==d.STOPPED){n().uploadNextChunk()}if(t.chunk==t.chunks-1){s.status=d.DONE;r.trigger("FileUploaded",s,{response:t.text})}});m.bind("Flash:SelectFiles",function(r,u){var t,s,v=[],w;for(s=0;s<u.length;s++){t=u[s];w=d.guid();q[w]=t.id;q[t.id]=w;v.push(new d.File(w,t.name,t.size))}if(v.length){m.trigger("FilesAdded",v)}});m.bind("Flash:SecurityError",function(r,s){m.trigger("Error",{code:d.SECURITY_ERROR,message:d.translate("Security error."),details:s.message,file:m.getFile(q[s.id])})});m.bind("Flash:GenericError",function(r,s){m.trigger("Error",{code:d.GENERIC_ERROR,message:d.translate("Generic error."),details:s.message,file:m.getFile(q[s.id])})});m.bind("Flash:IOError",function(r,s){m.trigger("Error",{code:d.IO_ERROR,message:d.translate("IO error."),details:s.message,file:m.getFile(q[s.id])})});m.bind("Flash:ImageError",function(r,s){m.trigger("Error",{code:parseInt(s.code,10),message:d.translate("Image error."),file:m.getFile(q[s.id])})});m.bind("Flash:StageEvent:rollOver",function(r){var s,t;s=b.getElementById(m.settings.browse_button);t=r.settings.browse_button_hover;if(s&&t){d.addClass(s,t)}});m.bind("Flash:StageEvent:rollOut",function(r){var s,t;s=b.getElementById(m.settings.browse_button);t=r.settings.browse_button_hover;if(s&&t){d.removeClass(s,t)}});m.bind("Flash:StageEvent:mouseDown",function(r){var s,t;s=b.getElementById(m.settings.browse_button);t=r.settings.browse_button_active;if(s&&t){d.addClass(s,t);d.addEvent(b.body,"mouseup",function(){d.removeClass(s,t)},r.id)}});m.bind("Flash:StageEvent:mouseUp",function(r){var s,t;s=b.getElementById(m.settings.browse_button);t=r.settings.browse_button_active;if(s&&t){d.removeClass(s,t)}});m.bind("Flash:ExifData",function(r,s){m.trigger("ExifData",m.getFile(q[s.id]),s.data)});m.bind("Flash:GpsData",function(r,s){m.trigger("GpsData",m.getFile(q[s.id]),s.data)});m.bind("QueueChanged",function(r){m.refresh()});m.bind("FilesRemoved",function(r,t){var s;for(s=0;s<t.length;s++){n().removeFile(q[t[s].id])}});m.bind("StateChanged",function(r){m.refresh()});m.bind("Refresh",function(r){var s,t,u;n().setFileFilters(m.settings.filters,m.settings.multi_selection);s=b.getElementById(r.settings.browse_button);if(s){t=d.getPos(s,b.getElementById(r.settings.container));u=d.getSize(s);d.extend(b.getElementById(r.id+"_flash_container").style,{top:t.y+"px",left:t.x+"px",width:u.w+"px",height:u.h+"px"})}});m.bind("DisableBrowse",function(r,s){n().disableBrowse(s)});o({success:true})})}})})(window,document,plupload);;
(function(a){a.runtimes.BrowserPlus=a.addRuntime("browserplus",{getFeatures:function(){return{dragdrop:true,jpgresize:true,pngresize:true,chunks:true,progress:true,multipart:true,multi_selection:true}},init:function(g,i){var e=window.BrowserPlus,h={},d=g.settings,c=d.resize;function f(n){var m,l,j=[],k,o;for(l=0;l<n.length;l++){k=n[l];o=a.guid();h[o]=k;j.push(new a.File(o,k.name,k.size))}if(l){g.trigger("FilesAdded",j)}}function b(){var j=false;g.bind("PostInit",function(){var n,l=d.drop_element,p=g.id+"_droptarget",k=document.getElementById(l),m;function q(s,r){e.DragAndDrop.AddDropTarget({id:s},function(t){e.DragAndDrop.AttachCallbacks({id:s,hover:function(u){if(!u&&r){r()}},drop:function(u){if(r){r()}f(u)}},function(){})})}function o(){document.getElementById(p).style.top="-1000px"}if(k){if(document.attachEvent&&(/MSIE/gi).test(navigator.userAgent)){n=document.createElement("div");n.setAttribute("id",p);a.extend(n.style,{position:"absolute",top:"-1000px",background:"red",filter:"alpha(opacity=0)",opacity:0});document.body.appendChild(n);a.addEvent(k,"dragenter",function(s){var r,t;r=document.getElementById(l);t=a.getPos(r);a.extend(document.getElementById(p).style,{top:t.y+"px",left:t.x+"px",width:r.offsetWidth+"px",height:r.offsetHeight+"px"})});q(p,o)}else{q(l)}}a.addEvent(document.getElementById(d.browse_button),"click",function(x){var r=[],t,s,w=d.filters,v,u;x.preventDefault();if(j){return}no_type_restriction:for(t=0;t<w.length;t++){v=w[t].extensions.split(",");for(s=0;s<v.length;s++){if(v[s]==="*"){r=[];break no_type_restriction}u=a.mimeTypes[v[s]];if(u&&a.inArray(u,r)===-1){r.push(a.mimeTypes[v[s]])}}}e.FileBrowse.OpenBrowseDialog({mimeTypes:r},function(y){if(y.success){f(y.value)}})});k=n=null});g.bind("CancelUpload",function(){e.Uploader.cancel({},function(){})});g.bind("DisableBrowse",function(k,l){j=l});g.bind("UploadFile",function(n,k){var m=h[k.id],s={},l=n.settings.chunk_size,o,p=[];function r(t,v){var u;if(k.status==a.FAILED){return}s.name=k.target_name||k.name;if(l){s.chunk=""+t;s.chunks=""+v}u=p.shift();e.Uploader.upload({url:n.settings.url,files:{file:u},cookies:document.cookies,postvars:a.extend(s,n.settings.multipart_params),progressCallback:function(y){var x,w=0;o[t]=parseInt(y.filePercent*u.size/100,10);for(x=0;x<o.length;x++){w+=o[x]}k.loaded=w;n.trigger("UploadProgress",k)}},function(x){var w,y;if(x.success){w=x.value.statusCode;if(l){n.trigger("ChunkUploaded",k,{chunk:t,chunks:v,response:x.value.body,status:w})}if(p.length>0){r(++t,v)}else{k.status=a.DONE;n.trigger("FileUploaded",k,{response:x.value.body,status:w});if(w>=400){n.trigger("Error",{code:a.HTTP_ERROR,message:a.translate("HTTP Error."),file:k,status:w})}}}else{n.trigger("Error",{code:a.GENERIC_ERROR,message:a.translate("Generic Error."),file:k,details:x.error})}})}function q(t){k.size=t.size;if(l){e.FileAccess.chunk({file:t,chunkSize:l},function(w){if(w.success){var x=w.value,u=x.length;o=Array(u);for(var v=0;v<u;v++){o[v]=0;p.push(x[v])}r(0,u)}})}else{o=Array(1);p.push(t);r(0,1)}}if(c&&/\.(png|jpg|jpeg)$/i.test(k.name)){BrowserPlus.ImageAlter.transform({file:m,quality:c.quality||90,actions:[{scale:{maxwidth:c.width,maxheight:c.height}}]},function(t){if(t.success){q(t.value.file)}})}else{q(m)}});i({success:true})}if(e){e.init(function(k){var j=[{service:"Uploader",version:"3"},{service:"DragAndDrop",version:"1"},{service:"FileBrowse",version:"1"},{service:"FileAccess",version:"2"}];if(c){j.push({service:"ImageAlter",version:"4"})}if(k.success){e.require({services:j},function(l){if(l.success){b()}else{i()}})}else{i()}})}else{i()}}})})(plupload);;
(function(d,a,b,c){function e(f){return a.getElementById(f)}b.runtimes.Html4=b.addRuntime("html4",{getFeatures:function(){return{multipart:true,triggerDialog:(b.ua.gecko&&d.FormData||b.ua.webkit)}},init:function(f,g){f.bind("Init",function(p){var j=a.body,n,h="javascript",k,x,q,z=[],r=/MSIE/.test(navigator.userAgent),t=[],m=p.settings.filters,o,l,s,w;no_type_restriction:for(o=0;o<m.length;o++){l=m[o].extensions.split(/,/);for(w=0;w<l.length;w++){if(l[w]==="*"){t=[];break no_type_restriction}s=b.mimeTypes[l[w]];if(s&&b.inArray(s,t)===-1){t.push(s)}}}t=t.join(",");function v(){var B,y,i,A;q=b.guid();z.push(q);B=a.createElement("form");B.setAttribute("id","form_"+q);B.setAttribute("method","post");B.setAttribute("enctype","multipart/form-data");B.setAttribute("encoding","multipart/form-data");B.setAttribute("target",p.id+"_iframe");B.style.position="absolute";y=a.createElement("input");y.setAttribute("id","input_"+q);y.setAttribute("type","file");y.setAttribute("accept",t);y.setAttribute("size",1);A=e(p.settings.browse_button);if(p.features.triggerDialog&&A){b.addEvent(e(p.settings.browse_button),"click",function(C){if(!y.disabled){y.click()}C.preventDefault()},p.id)}b.extend(y.style,{width:"100%",height:"100%",opacity:0,fontSize:"99px",cursor:"pointer"});b.extend(B.style,{overflow:"hidden"});i=p.settings.shim_bgcolor;if(i){B.style.background=i}if(r){b.extend(y.style,{filter:"alpha(opacity=0)"})}b.addEvent(y,"change",function(F){var D=F.target,C,E=[],G;if(D.value){e("form_"+q).style.top=-1048575+"px";C=D.value.replace(/\\/g,"/");C=C.substring(C.length,C.lastIndexOf("/")+1);E.push(new b.File(q,C));if(!p.features.triggerDialog){b.removeAllEvents(B,p.id)}else{b.removeEvent(A,"click",p.id)}b.removeEvent(y,"change",p.id);v();if(E.length){f.trigger("FilesAdded",E)}}},p.id);B.appendChild(y);j.appendChild(B);p.refresh()}function u(){var i=a.createElement("div");i.innerHTML='<iframe id="'+p.id+'_iframe" name="'+p.id+'_iframe" src="'+h+':&quot;&quot;" style="display:none"></iframe>';n=i.firstChild;j.appendChild(n);b.addEvent(n,"load",function(C){var D=C.target,B,y;if(!k){return}try{B=D.contentWindow.document||D.contentDocument||d.frames[D.id].document}catch(A){p.trigger("Error",{code:b.SECURITY_ERROR,message:b.translate("Security error."),file:k});return}y=B.body.innerHTML;if(y){k.status=b.DONE;k.loaded=1025;k.percent=100;p.trigger("UploadProgress",k);p.trigger("FileUploaded",k,{response:y})}},p.id)}if(p.settings.container){j=e(p.settings.container);if(b.getStyle(j,"position")==="static"){j.style.position="relative"}}p.bind("UploadFile",function(i,A){var B,y;if(A.status==b.DONE||A.status==b.FAILED||i.state==b.STOPPED){return}B=e("form_"+A.id);y=e("input_"+A.id);y.setAttribute("name",i.settings.file_data_name);B.setAttribute("action",i.settings.url);b.each(b.extend({name:A.target_name||A.name},i.settings.multipart_params),function(E,C){var D=a.createElement("input");b.extend(D,{type:"hidden",name:C,value:E});B.insertBefore(D,B.firstChild)});k=A;e("form_"+q).style.top=-1048575+"px";B.submit()});p.bind("FileUploaded",function(i){i.refresh()});p.bind("StateChanged",function(i){if(i.state==b.STARTED){u()}else{if(i.state==b.STOPPED){d.setTimeout(function(){b.removeEvent(n,"load",i.id);if(n.parentNode){n.parentNode.removeChild(n)}},0)}}b.each(i.files,function(A,y){if(A.status===b.DONE||A.status===b.FAILED){var B=e("form_"+A.id);if(B){B.parentNode.removeChild(B)}}})});p.bind("Refresh",function(y){var F,A,B,C,i,G,H,E,D;F=e(y.settings.browse_button);if(F){i=b.getPos(F,e(y.settings.container));G=b.getSize(F);H=e("form_"+q);E=e("input_"+q);b.extend(H.style,{top:i.y+"px",left:i.x+"px",width:G.w+"px",height:G.h+"px"});if(y.features.triggerDialog){if(b.getStyle(F,"position")==="static"){b.extend(F.style,{position:"relative"})}D=parseInt(F.style.zIndex,10);if(isNaN(D)){D=0}b.extend(F.style,{zIndex:D});b.extend(H.style,{zIndex:D-1})}B=y.settings.browse_button_hover;C=y.settings.browse_button_active;A=y.features.triggerDialog?F:H;if(B){b.addEvent(A,"mouseover",function(){b.addClass(F,B)},y.id);b.addEvent(A,"mouseout",function(){b.removeClass(F,B)},y.id)}if(C){b.addEvent(A,"mousedown",function(){b.addClass(F,C)},y.id);b.addEvent(a.body,"mouseup",function(){b.removeClass(F,C)},y.id)}}});f.bind("FilesRemoved",function(y,B){var A,C;for(A=0;A<B.length;A++){C=e("form_"+B[A].id);if(C){C.parentNode.removeChild(C)}}});f.bind("DisableBrowse",function(i,A){var y=a.getElementById("input_"+q);if(y){y.disabled=A}});f.bind("Destroy",function(i){var y,A,B,C={inputContainer:"form_"+q,inputFile:"input_"+q,browseButton:i.settings.browse_button};for(y in C){A=e(C[y]);if(A){b.removeAllEvents(A,i.id)}}b.removeAllEvents(a.body,i.id);b.each(z,function(E,D){B=e("form_"+E);if(B){j.removeChild(B)}})});v()});g({success:true})}})})(window,document,plupload);;
(function(h,k,j,e){var c={},g;function m(o,p){var n;if("FileReader" in h){n=new FileReader();n.readAsDataURL(o);n.onload=function(){p(n.result)}}else{return p(o.getAsDataURL())}}function l(o,p){var n;if("FileReader" in h){n=new FileReader();n.readAsBinaryString(o);n.onload=function(){p(n.result)}}else{return p(o.getAsBinary())}}function d(r,p,n,v){var q,o,u,s,t=this;m(c[r.id],function(w){q=k.createElement("canvas");q.style.display="none";k.body.appendChild(q);o=q.getContext("2d");u=new Image();u.onerror=u.onabort=function(){v({success:false})};u.onload=function(){var B,x,z,y,A;if(!p.width){p.width=u.width}if(!p.height){p.height=u.height}s=Math.min(p.width/u.width,p.height/u.height);if(s<1||(s===1&&n==="image/jpeg")){B=Math.round(u.width*s);x=Math.round(u.height*s);q.width=B;q.height=x;o.drawImage(u,0,0,B,x);if(n==="image/jpeg"){y=new f(atob(w.substring(w.indexOf("base64,")+7)));if(y.headers&&y.headers.length){A=new a();if(A.init(y.get("exif")[0])){A.setExif("PixelXDimension",B);A.setExif("PixelYDimension",x);y.set("exif",A.getBinary());if(t.hasEventListener("ExifData")){t.trigger("ExifData",r,A.EXIF())}if(t.hasEventListener("GpsData")){t.trigger("GpsData",r,A.GPS())}}}if(p.quality){try{w=q.toDataURL(n,p.quality/100)}catch(C){w=q.toDataURL(n)}}}else{w=q.toDataURL(n)}w=w.substring(w.indexOf("base64,")+7);w=atob(w);if(y&&y.headers&&y.headers.length){w=y.restore(w);y.purge()}q.parentNode.removeChild(q);v({success:true,data:w})}else{v({success:false})}};u.src=w})}j.runtimes.Html5=j.addRuntime("html5",{getFeatures:function(){var s,o,r,q,p,n;o=r=p=n=false;if(h.XMLHttpRequest){s=new XMLHttpRequest();r=!!s.upload;o=!!(s.sendAsBinary||s.upload)}if(o){q=!!(s.sendAsBinary||(h.Uint8Array&&h.ArrayBuffer));p=!!(File&&(File.prototype.getAsDataURL||h.FileReader)&&q);n=!!(File&&(File.prototype.mozSlice||File.prototype.webkitSlice||File.prototype.slice))}g=j.ua.safari&&j.ua.windows;return{html5:o,dragdrop:(function(){var t=k.createElement("div");return("draggable" in t)||("ondragstart" in t&&"ondrop" in t)}()),jpgresize:p,pngresize:p,multipart:p||!!h.FileReader||!!h.FormData,canSendBinary:q,cantSendBlobInFormData:!!(j.ua.gecko&&h.FormData&&h.FileReader&&!FileReader.prototype.readAsArrayBuffer),progress:r,chunks:n,multi_selection:!(j.ua.safari&&j.ua.windows),triggerDialog:(j.ua.gecko&&h.FormData||j.ua.webkit)}},init:function(p,r){var n,q;function o(w){var u,t,v=[],x,s={};for(t=0;t<w.length;t++){u=w[t];if(s[u.name]){continue}s[u.name]=true;x=j.guid();c[x]=u;v.push(new j.File(x,u.fileName||u.name,u.fileSize||u.size))}if(v.length){p.trigger("FilesAdded",v)}}n=this.getFeatures();if(!n.html5){r({success:false});return}p.bind("Init",function(w){var G,F,C=[],v,D,t=w.settings.filters,u,B,s=k.body,E;G=k.createElement("div");G.id=w.id+"_html5_container";j.extend(G.style,{position:"absolute",background:p.settings.shim_bgcolor||"transparent",width:"100px",height:"100px",overflow:"hidden",zIndex:99999,opacity:p.settings.shim_bgcolor?"":0});G.className="plupload html5";if(p.settings.container){s=k.getElementById(p.settings.container);if(j.getStyle(s,"position")==="static"){s.style.position="relative"}}s.appendChild(G);no_type_restriction:for(v=0;v<t.length;v++){u=t[v].extensions.split(/,/);for(D=0;D<u.length;D++){if(u[D]==="*"){C=[];break no_type_restriction}B=j.mimeTypes[u[D]];if(B&&j.inArray(B,C)===-1){C.push(B)}}}G.innerHTML='<input id="'+p.id+'_html5"  style="font-size:999px" type="file" accept="'+C.join(",")+'" '+(p.settings.multi_selection&&p.features.multi_selection?'multiple="multiple"':"")+" />";G.scrollTop=100;E=k.getElementById(p.id+"_html5");if(w.features.triggerDialog){j.extend(E.style,{position:"absolute",width:"100%",height:"100%"})}else{j.extend(E.style,{cssFloat:"right",styleFloat:"right"})}E.onchange=function(){o(this.files);this.value=""};F=k.getElementById(w.settings.browse_button);if(F){var z=w.settings.browse_button_hover,A=w.settings.browse_button_active,x=w.features.triggerDialog?F:G;if(z){j.addEvent(x,"mouseover",function(){j.addClass(F,z)},w.id);j.addEvent(x,"mouseout",function(){j.removeClass(F,z)},w.id)}if(A){j.addEvent(x,"mousedown",function(){j.addClass(F,A)},w.id);j.addEvent(k.body,"mouseup",function(){j.removeClass(F,A)},w.id)}if(w.features.triggerDialog){j.addEvent(F,"click",function(H){var y=k.getElementById(w.id+"_html5");if(y&&!y.disabled){y.click()}H.preventDefault()},w.id)}}});p.bind("PostInit",function(){var s=k.getElementById(p.settings.drop_element);if(s){if(g){j.addEvent(s,"dragenter",function(w){var v,t,u;v=k.getElementById(p.id+"_drop");if(!v){v=k.createElement("input");v.setAttribute("type","file");v.setAttribute("id",p.id+"_drop");v.setAttribute("multiple","multiple");j.addEvent(v,"change",function(){o(this.files);j.removeEvent(v,"change",p.id);v.parentNode.removeChild(v)},p.id);s.appendChild(v)}t=j.getPos(s,k.getElementById(p.settings.container));u=j.getSize(s);if(j.getStyle(s,"position")==="static"){j.extend(s.style,{position:"relative"})}j.extend(v.style,{position:"absolute",display:"block",top:0,left:0,width:u.w+"px",height:u.h+"px",opacity:0})},p.id);return}j.addEvent(s,"dragover",function(t){t.preventDefault()},p.id);j.addEvent(s,"drop",function(u){var t=u.dataTransfer;if(t&&t.files){o(t.files)}u.preventDefault()},p.id)}});p.bind("Refresh",function(s){var t,u,v,x,w;t=k.getElementById(p.settings.browse_button);if(t){u=j.getPos(t,k.getElementById(s.settings.container));v=j.getSize(t);x=k.getElementById(p.id+"_html5_container");j.extend(x.style,{top:u.y+"px",left:u.x+"px",width:v.w+"px",height:v.h+"px"});if(p.features.triggerDialog){if(j.getStyle(t,"position")==="static"){j.extend(t.style,{position:"relative"})}w=parseInt(j.getStyle(t,"z-index"),10);if(isNaN(w)){w=0}j.extend(t.style,{zIndex:w});j.extend(x.style,{zIndex:w-1})}}});p.bind("DisableBrowse",function(s,u){var t=k.getElementById(s.id+"_html5");if(t){t.disabled=u}});p.bind("CancelUpload",function(){if(q&&q.abort){q.abort()}});p.bind("UploadFile",function(s,u){var v=s.settings,y,t;function x(A,D,z){var B;if(File.prototype.slice){try{A.slice();return A.slice(D,z)}catch(C){return A.slice(D,z-D)}}else{if(B=File.prototype.webkitSlice||File.prototype.mozSlice){return B.call(A,D,z)}else{return null}}}function w(A){var D=0,C=0,z=("FileReader" in h)?new FileReader:null;function B(){var I,M,K,L,H,J,F,E=s.settings.url;function G(V){var T=0,N="----pluploadboundary"+j.guid(),O,P="--",U="\r\n",R="";q=new XMLHttpRequest;if(q.upload){q.upload.onprogress=function(W){u.loaded=Math.min(u.size,C+W.loaded-T);s.trigger("UploadProgress",u)}}q.onreadystatechange=function(){var W,Y;if(q.readyState==4&&s.state!==j.STOPPED){try{W=q.status}catch(X){W=0}if(W>=400){s.trigger("Error",{code:j.HTTP_ERROR,message:j.translate("HTTP Error."),file:u,status:W})}else{if(K){Y={chunk:D,chunks:K,response:q.responseText,status:W};s.trigger("ChunkUploaded",u,Y);C+=J;if(Y.cancelled){u.status=j.FAILED;return}u.loaded=Math.min(u.size,(D+1)*H)}else{u.loaded=u.size}s.trigger("UploadProgress",u);V=I=O=R=null;if(!K||++D>=K){u.status=j.DONE;s.trigger("FileUploaded",u,{response:q.responseText,status:W})}else{B()}}}};if(s.settings.multipart&&n.multipart){L.name=u.target_name||u.name;q.open("post",E,true);j.each(s.settings.headers,function(X,W){q.setRequestHeader(W,X)});if(typeof(V)!=="string"&&!!h.FormData){O=new FormData();j.each(j.extend(L,s.settings.multipart_params),function(X,W){O.append(W,X)});O.append(s.settings.file_data_name,V);q.send(O);return}if(typeof(V)==="string"){q.setRequestHeader("Content-Type","multipart/form-data; boundary="+N);j.each(j.extend(L,s.settings.multipart_params),function(X,W){R+=P+N+U+'Content-Disposition: form-data; name="'+W+'"'+U+U;R+=unescape(encodeURIComponent(X))+U});F=j.mimeTypes[u.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream";R+=P+N+U+'Content-Disposition: form-data; name="'+s.settings.file_data_name+'"; filename="'+unescape(encodeURIComponent(u.name))+'"'+U+"Content-Type: "+F+U+U+V+U+P+N+P+U;T=R.length-V.length;V=R;if(q.sendAsBinary){q.sendAsBinary(V)}else{if(n.canSendBinary){var S=new Uint8Array(V.length);for(var Q=0;Q<V.length;Q++){S[Q]=(V.charCodeAt(Q)&255)}q.send(S.buffer)}}return}}E=j.buildUrl(s.settings.url,j.extend(L,s.settings.multipart_params));q.open("post",E,true);q.setRequestHeader("Content-Type","application/octet-stream");j.each(s.settings.headers,function(X,W){q.setRequestHeader(W,X)});q.send(V)}if(u.status==j.DONE||u.status==j.FAILED||s.state==j.STOPPED){return}L={name:u.target_name||u.name};if(v.chunk_size&&u.size>v.chunk_size&&(n.chunks||typeof(A)=="string")){H=v.chunk_size;K=Math.ceil(u.size/H);J=Math.min(H,u.size-(D*H));if(typeof(A)=="string"){I=A.substring(D*H,D*H+J)}else{I=x(A,D*H,D*H+J)}L.chunk=D;L.chunks=K}else{J=u.size;I=A}if(s.settings.multipart&&n.multipart&&typeof(I)!=="string"&&z&&n.cantSendBlobInFormData&&n.chunks&&s.settings.chunk_size){z.onload=function(){G(z.result)};z.readAsBinaryString(I)}else{G(I)}}B()}y=c[u.id];if(n.jpgresize&&s.settings.resize&&/\.(png|jpg|jpeg)$/i.test(u.name)){d.call(s,u,s.settings.resize,/\.png$/i.test(u.name)?"image/png":"image/jpeg",function(z){if(z.success){u.size=z.data.length;w(z.data)}else{if(n.chunks){w(y)}else{l(y,w)}}})}else{if(!n.chunks&&n.jpgresize){l(y,w)}else{w(y)}}});p.bind("Destroy",function(s){var u,v,t=k.body,w={inputContainer:s.id+"_html5_container",inputFile:s.id+"_html5",browseButton:s.settings.browse_button,dropElm:s.settings.drop_element};for(u in w){v=k.getElementById(w[u]);if(v){j.removeAllEvents(v,s.id)}}j.removeAllEvents(k.body,s.id);if(s.settings.container){t=k.getElementById(s.settings.container)}t.removeChild(k.getElementById(w.inputContainer))});r({success:true})}});function b(){var q=false,o;function r(t,v){var s=q?0:-8*(v-1),w=0,u;for(u=0;u<v;u++){w|=(o.charCodeAt(t+u)<<Math.abs(s+u*8))}return w}function n(u,s,t){var t=arguments.length===3?t:o.length-s-1;o=o.substr(0,s)+u+o.substr(t+s)}function p(t,u,w){var x="",s=q?0:-8*(w-1),v;for(v=0;v<w;v++){x+=String.fromCharCode((u>>Math.abs(s+v*8))&255)}n(x,t,w)}return{II:function(s){if(s===e){return q}else{q=s}},init:function(s){q=false;o=s},SEGMENT:function(s,u,t){switch(arguments.length){case 1:return o.substr(s,o.length-s-1);case 2:return o.substr(s,u);case 3:n(t,s,u);break;default:return o}},BYTE:function(s){return r(s,1)},SHORT:function(s){return r(s,2)},LONG:function(s,t){if(t===e){return r(s,4)}else{p(s,t,4)}},SLONG:function(s){var t=r(s,4);return(t>2147483647?t-4294967296:t)},STRING:function(s,t){var u="";for(t+=s;s<t;s++){u+=String.fromCharCode(r(s,1))}return u}}}function f(s){var u={65505:{app:"EXIF",name:"APP1",signature:"Exif\0"},65506:{app:"ICC",name:"APP2",signature:"ICC_PROFILE\0"},65517:{app:"IPTC",name:"APP13",signature:"Photoshop 3.0\0"}},t=[],r,n,p=e,q=0,o;r=new b();r.init(s);if(r.SHORT(0)!==65496){return}n=2;o=Math.min(1048576,s.length);while(n<=o){p=r.SHORT(n);if(p>=65488&&p<=65495){n+=2;continue}if(p===65498||p===65497){break}q=r.SHORT(n+2)+2;if(u[p]&&r.STRING(n+4,u[p].signature.length)===u[p].signature){t.push({hex:p,app:u[p].app.toUpperCase(),name:u[p].name.toUpperCase(),start:n,length:q,segment:r.SEGMENT(n,q)})}n+=q}r.init(null);return{headers:t,restore:function(y){r.init(y);var w=new f(y);if(!w.headers){return false}for(var x=w.headers.length;x>0;x--){var z=w.headers[x-1];r.SEGMENT(z.start,z.length,"")}w.purge();n=r.SHORT(2)==65504?4+r.SHORT(4):2;for(var x=0,v=t.length;x<v;x++){r.SEGMENT(n,0,t[x].segment);n+=t[x].length}return r.SEGMENT()},get:function(x){var y=[];for(var w=0,v=t.length;w<v;w++){if(t[w].app===x.toUpperCase()){y.push(t[w].segment)}}return y},set:function(y,x){var z=[];if(typeof(x)==="string"){z.push(x)}else{z=x}for(var w=ii=0,v=t.length;w<v;w++){if(t[w].app===y.toUpperCase()){t[w].segment=z[ii];t[w].length=z[ii].length;ii++}if(ii>=z.length){break}}},purge:function(){t=[];r.init(null)}}}function a(){var q,n,o={},t;q=new b();n={tiff:{274:"Orientation",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}};t={ColorSpace:{1:"sRGB",0:"Uncalibrated"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}};function p(u,C){var w=q.SHORT(u),z,F,G,B,A,v,x,D,E=[],y={};for(z=0;z<w;z++){x=v=u+12*z+2;G=C[q.SHORT(x)];if(G===e){continue}B=q.SHORT(x+=2);A=q.LONG(x+=2);x+=4;E=[];switch(B){case 1:case 7:if(A>4){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.BYTE(x+F)}break;case 2:if(A>4){x=q.LONG(x)+o.tiffHeader}y[G]=q.STRING(x,A-1);continue;case 3:if(A>2){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.SHORT(x+F*2)}break;case 4:if(A>1){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.LONG(x+F*4)}break;case 5:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.LONG(x+F*4)/q.LONG(x+F*4+4)}break;case 9:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.SLONG(x+F*4)}break;case 10:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.SLONG(x+F*4)/q.SLONG(x+F*4+4)}break;default:continue}D=(A==1?E[0]:E);if(t.hasOwnProperty(G)&&typeof D!="object"){y[G]=t[G][D]}else{y[G]=D}}return y}function s(){var v=e,u=o.tiffHeader;q.II(q.SHORT(u)==18761);if(q.SHORT(u+=2)!==42){return false}o.IFD0=o.tiffHeader+q.LONG(u+=2);v=p(o.IFD0,n.tiff);o.exifIFD=("ExifIFDPointer" in v?o.tiffHeader+v.ExifIFDPointer:e);o.gpsIFD=("GPSInfoIFDPointer" in v?o.tiffHeader+v.GPSInfoIFDPointer:e);return true}function r(w,u,z){var B,y,x,A=0;if(typeof(u)==="string"){var v=n[w.toLowerCase()];for(hex in v){if(v[hex]===u){u=hex;break}}}B=o[w.toLowerCase()+"IFD"];y=q.SHORT(B);for(i=0;i<y;i++){x=B+12*i+2;if(q.SHORT(x)==u){A=x+8;break}}if(!A){return false}q.LONG(A,z);return true}return{init:function(u){o={tiffHeader:10};if(u===e||!u.length){return false}q.init(u);if(q.SHORT(0)===65505&&q.STRING(4,5).toUpperCase()==="EXIF\0"){return s()}return false},EXIF:function(){var v;v=p(o.exifIFD,n.exif);if(v.ExifVersion&&j.typeOf(v.ExifVersion)==="array"){for(var w=0,u="";w<v.ExifVersion.length;w++){u+=String.fromCharCode(v.ExifVersion[w])}v.ExifVersion=u}return v},GPS:function(){var u;u=p(o.gpsIFD,n.gps);if(u.GPSVersionID){u.GPSVersionID=u.GPSVersionID.join(".")}return u},setExif:function(u,v){if(u!=="PixelXDimension"&&u!=="PixelYDimension"){return false}return r("exif",u,v)},getBinary:function(){return q.SEGMENT()}}}})(window,document,plupload);;
(function ($) {
  Drupal.behaviors.photo = {
    attach:function(context, settings) {
      if($('#upload-photo-form').length) {
        var output = '';

        var uploader = new plupload.Uploader({
          runtimes : 'gears,html5,flash,silverlight,browserplus',
          browse_button : 'pickfiles',
          container: 'container',
          max_file_size : '10mb',
          url : '/get/upload/photo',
          resize : {width : 320, height : 240, quality : 90},
          flash_swf_url : '/sites/all/modules/custom/svadba_user/lib/plupload/js/plupload.flash.swf',
          silverlight_xap_url : '/sites/all/modules/custom/svadba_user/lib/plupload/js/plupload.silverlight.xap',
          file_data_name: 'file',
          filters : [
            {title : "Image files", extensions : "jpg,gif,png"},
            {title : "Zip files", extensions : "zip"}
          ]
        });

        uploader.bind('Init', function(up, params) {
          $('#filelist').html("<div>Current runtime: " + params.runtime + "</div>");
        });

        uploader.bind('FilesAdded', function(up, files) {
          for (var i in files) {
            output += '<div id="' + files[i].id + '">' + files[i].name + ' (' + plupload.formatSize(files[i].size) + ') <b></b></div>';
          }
          $('#filelist').html(output);
        });

        uploader.bind('FileUploaded', function(up, file, info) {
          var output = $.parseJSON(info.response);
          $('<li>' + output.html +'</li>').hide().delay(1000).fadeIn('slow').prependTo('#uploaded-photo-list');
//          console.log($.parseJSON(info.response));
        });

        uploader.bind('UploadProgress', function(up, file) {
          $(file.id).find('b').html('<span>' + file.percent + '%</span>');
        });

        $('#uploadfiles').click(function() {
          uploader.start();

          return false;
        });

        uploader.init();
      }


//      if($('.fileUpload').length) {
//        $('.fileUpload').fileUploader({
//          limit: 5,
//          afterEachUpload: function(data) {
//            if(data.status == 'success') {
//              $('<li>' + data.html +'</li>').hide().delay(1000).fadeIn('slow').prependTo('#uploaded-photo-list');
////              if(data.count_photo > 5) {
////                $('.px-widget').remove();
////              }
//            }
//          }
//        });
//      }
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
