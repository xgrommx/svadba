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
