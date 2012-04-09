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
;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {def:"easeOutQuad", swing:function (e, f, a, h, g) {
  return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
}, easeInQuad:function (e, f, a, h, g) {
  return h * (f /= g) * f + a
}, easeOutQuad:function (e, f, a, h, g) {
  return -h * (f /= g) * (f - 2) + a
}, easeInOutQuad:function (e, f, a, h, g) {
  if ((f /= g / 2) < 1) {
    return h / 2 * f * f + a
  }
  return -h / 2 * ((--f) * (f - 2) - 1) + a
}, easeInCubic:function (e, f, a, h, g) {
  return h * (f /= g) * f * f + a
}, easeOutCubic:function (e, f, a, h, g) {
  return h * ((f = f / g - 1) * f * f + 1) + a
}, easeInOutCubic:function (e, f, a, h, g) {
  if ((f /= g / 2) < 1) {
    return h / 2 * f * f * f + a
  }
  return h / 2 * ((f -= 2) * f * f + 2) + a
}, easeInQuart:function (e, f, a, h, g) {
  return h * (f /= g) * f * f * f + a
}, easeOutQuart:function (e, f, a, h, g) {
  return -h * ((f = f / g - 1) * f * f * f - 1) + a
}, easeInOutQuart:function (e, f, a, h, g) {
  if ((f /= g / 2) < 1) {
    return h / 2 * f * f * f * f + a
  }
  return -h / 2 * ((f -= 2) * f * f * f - 2) + a
}, easeInQuint:function (e, f, a, h, g) {
  return h * (f /= g) * f * f * f * f + a
}, easeOutQuint:function (e, f, a, h, g) {
  return h * ((f = f / g - 1) * f * f * f * f + 1) + a
}, easeInOutQuint:function (e, f, a, h, g) {
  if ((f /= g / 2) < 1) {
    return h / 2 * f * f * f * f * f + a
  }
  return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
}, easeInSine:function (e, f, a, h, g) {
  return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
}, easeOutSine:function (e, f, a, h, g) {
  return h * Math.sin(f / g * (Math.PI / 2)) + a
}, easeInOutSine:function (e, f, a, h, g) {
  return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
}, easeInExpo:function (e, f, a, h, g) {
  return(f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
}, easeOutExpo:function (e, f, a, h, g) {
  return(f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
}, easeInOutExpo:function (e, f, a, h, g) {
  if (f == 0) {
    return a
  }
  if (f == g) {
    return a + h
  }
  if ((f /= g / 2) < 1) {
    return h / 2 * Math.pow(2, 10 * (f - 1)) + a
  }
  return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
}, easeInCirc:function (e, f, a, h, g) {
  return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
}, easeOutCirc:function (e, f, a, h, g) {
  return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
}, easeInOutCirc:function (e, f, a, h, g) {
  if ((f /= g / 2) < 1) {
    return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
  }
  return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
}, easeInElastic:function (f, h, e, l, k) {
  var i = 1.70158;
  var j = 0;
  var g = l;
  if (h == 0) {
    return e
  }
  if ((h /= k) == 1) {
    return e + l
  }
  if (!j) {
    j = k * 0.3
  }
  if (g < Math.abs(l)) {
    g = l;
    var i = j / 4
  }
  else {
    var i = j / (2 * Math.PI) * Math.asin(l / g)
  }
  return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
}, easeOutElastic:function (f, h, e, l, k) {
  var i = 1.70158;
  var j = 0;
  var g = l;
  if (h == 0) {
    return e
  }
  if ((h /= k) == 1) {
    return e + l
  }
  if (!j) {
    j = k * 0.3
  }
  if (g < Math.abs(l)) {
    g = l;
    var i = j / 4
  }
  else {
    var i = j / (2 * Math.PI) * Math.asin(l / g)
  }
  return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
}, easeInOutElastic:function (f, h, e, l, k) {
  var i = 1.70158;
  var j = 0;
  var g = l;
  if (h == 0) {
    return e
  }
  if ((h /= k / 2) == 2) {
    return e + l
  }
  if (!j) {
    j = k * (0.3 * 1.5)
  }
  if (g < Math.abs(l)) {
    g = l;
    var i = j / 4
  }
  else {
    var i = j / (2 * Math.PI) * Math.asin(l / g)
  }
  if (h < 1) {
    return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
  }
  return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
}, easeInBack:function (e, f, a, i, h, g) {
  if (g == undefined) {
    g = 1.70158
  }
  return i * (f /= h) * f * ((g + 1) * f - g) + a
}, easeOutBack:function (e, f, a, i, h, g) {
  if (g == undefined) {
    g = 1.70158
  }
  return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
}, easeInOutBack:function (e, f, a, i, h, g) {
  if (g == undefined) {
    g = 1.70158
  }
  if ((f /= h / 2) < 1) {
    return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
  }
  return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
}, easeInBounce:function (e, f, a, h, g) {
  return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
}, easeOutBounce:function (e, f, a, h, g) {
  if ((f /= g) < (1 / 2.75)) {
    return h * (7.5625 * f * f) + a
  }
  else {
    if (f < (2 / 2.75)) {
      return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
    }
    else {
      if (f < (2.5 / 2.75)) {
        return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
      }
      else {
        return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
      }
    }
  }
}, easeInOutBounce:function (e, f, a, h, g) {
  if (f < g / 2) {
    return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
  }
  return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
}});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/*
 Translucent - jQuery Banner Rotator / Slideshow
 Copyright (c) 2011 Ramesh Kumar
 http://codecanyon.net/user/VF

 Version: 1.0 
 14 NOV 2011

 Built using:
 jQuery 				version: 1.6.2		http://jquery.com/
 jQuery Easing 		version: 1.3		http://gsgd.co.uk/sandbox/jquery/easing/
 Superfast Blur		version: 0.5		http://www.quasimondo.com/BoxBlurForCanvas

 */

(function ($) {

  function TBMain(container, options) {

    this.sett = $.extend({

      //Default Settings
      slide_autoplay:true,
      slide_delaytime:5,
      slide_transition:1,
      slide_transition_period:800,

      button_size:20,
      button_margin:4,
      button_opacity:.7,
      button_space:2,
      button_color:'#FFFFFF',

      button_show_next:true,
      button_show_back:false,
      button_show_timer:true,
      button_show_numbers:true,

      button_numbers_autohide:true,
      button_numbers_horizontal:false,

      caption_float_mode:false,
      caption_bg_blur:12,
      caption_padding_x:24,
      caption_padding_y:12,
      caption_margin_x:0,
      caption_margin_y:0,

      caption_position_x:50,
      caption_position_y:100,
      caption_width:300,
      caption_height:'',
      caption_bg_color:'#FFFFFF',
      caption_bg_opacity:.08,
      caption_bg_radius:6,
      caption_bg_shadow:.3,
      caption_allow_selection:false,

      caption_border:1,
      caption_border_color:'#FFFFFF',
      caption_border_opacity:.15,

      touch_dragdrop_factor:60,
      touch_throw_factor:5,
      clock_timer_color:'#FFFFFF',
      clock_timer_clear_color:'#FFFFFF'

    }, options);

    this.$cont = container;

    this.bW = this.$cont.width();
    this.bH = this.$cont.height();

    this.slides = [];
    this.slide_tot = this.$cont.children().length;
    this.slide_dir = -1;
    this.slide_sel = 0;
    this.slide_pr1 = '';
    this.slide_pr2 = '';
    this.slide_fin = false;
    this.slide_drg = false;
    this.slide_sta = true;

    this.clockDraw;
    this.clockContext;
    this.clockStart;
    this.clockDiff = 0;
    this.clockTimer = this.sett.button_show_timer;
    this.clockPlaying = false;
    this.clockColor = this.sett.clock_timer_color;
    this.clockClearColor = this.sett.clock_timer_clear_color;

    this.buttonNext = this.sett.button_show_next;
    this.buttonBack = this.sett.button_show_back;
    this.buttonNumber = this.sett.button_show_numbers;

    this.FF2 = $.browser.mozilla && parseFloat($.browser.version, 10) < 1.9 ? true : false;
    this.IE8 = $.browser.msie && parseInt($.browser.version, 10) <= 8 ? true : false;
    this.canvasSupport = document.createElement('canvas').getContext;

    this.buttonIE = this.IE8 ? 1 : 0;
    this.buttonLeaveTimer;

    this.draggable = true;
    this.dragged = false;
    this.numShow = false;
    this.autoPlaying = this.sett.slide_autoplay;
    this.timerob = $('<div style="position:absolute;"></div>').appendTo(this.$cont);

    var trans = this.sett.slide_transition;
    if (trans <= 1 || isNaN(trans)) {
      this.sett.slide_transition = 'move';
    }
    else {
      if (trans == 2) {
        this.sett.slide_transition = 'fade';
      }
      else {
        if (trans == 3) {
          this.sett.slide_transition = 'slideIn';
        }
        else {
          if (trans >= 4) {
            this.sett.slide_transition = 'slideOut';
          }
        }
      }
    }

    if (this.sett.caption_margin_y == 0 && !this.sett.caption_float_mode) {
      this.sett.caption_bg_radius = 0;
    }
    if (this.sett.button_show_numbers && !this.sett.button_show_next) {
      this.sett.button_numbers_autohide = false;
    }

    if ($.browser.webkit) {
      this.shProp = '-webkit-box-shadow';
    }
    else {
      if ($.browser.mozilla && this.$cont.css('box-shadow') != 'none') {
        this.shProp = '-moz-box-shadow';
      }
      else {
        this.shProp = 'box-shadow';
      }
    }

    //Check load status of 1st image and Navigation icons. After preloading, the banner initiated.
    this.preload([this.$cont.children().eq(0).find('img').attr('src'), '/sites/all/modules/custom/svadba_general/lib/icons.png'])

  }

  TBMain.prototype = {

    //Preload 1st image & icons
    //////////////////////////////////////////////////////////////////////////////////////////////
    preload:function (items) {
      var self = this;
      for (var i = 0; i < items.length; i++) {
        items[i] = {src:items[i], loaded:false};
        var _img = new Image();

        //Load event
        $(_img).bind('load', {id:i}, function (e) {
          items[e.data.id].loaded = true;
          var complete = true;
          for (var i = 0; i < items.length; i++) {
            if (!items[i].loaded) {
              complete = false;
            }
          }
          if (complete) {
            self.init();
          }
        });
        _img.src = items[i].src;
      }

    },


    //Initialise Slideshow / gather data
    //////////////////////////////////////////////////////////////////////////////////////////////
    init:function () {

      var self = this;
      var IEBlur = Math.max((this.sett.caption_bg_blur / 3), 3);
      var navWidth = (this.sett.button_show_next ? this.sett.button_size + this.sett.button_space : 0) + (this.sett.button_show_back ? this.sett.button_size + this.sett.button_space : 0) + (this.sett.button_show_timer ? this.sett.button_size + this.sett.button_space : 0) + (!this.sett.button_numbers_autohide && this.sett.button_numbers_horizontal ? (this.sett.button_size + this.sett.button_space) * this.slide_tot : 0);
      var capX, capY, capW, capH;
      var $cont = this.$cont.children();
      //Generate each slide with caption elements
      for (var i = 0; i < this.slide_tot; i++) {
        var div = $cont.eq(i).css({'position':'absolute', 'z-index':this.slide_tot - i, 'left':'0px', 'top':'0px', 'width':this.bW + 'px', 'height':this.bH + 'px', 'overflow':'hidden', 'visibility':'visible'});
        var img = div.find('img').css({'filter':'progid:DXImageTransform.Microsoft.Alpha(opacity=100)', 'z-index':1, 'position':'absolute', 'left':'0px', 'top':'0px', 'border':'0px'}).attr('galleryimg',
          'no').addClass('noSelect');
        ;
        var inner = $('<span></span>').css('opacity', .99);
        var txt = div.find('div').wrapInner(inner);
        if (this.sett.caption_allow_selection) {
          txt.bind('mousedown', function (e) {
            e.stopImmediatePropagation();
          });
        }
        else {
          txt.addClass('noSelect').attr('unselectable', 'on');
        }
        if (txt.length > 0) {
          txt.css({'z-index':4, 'position':'absolute', 'left':this.sett.caption_padding_x + 'px', 'top':this.sett.caption_padding_y + 'px'});
          var capCont = $('<div></div>').css({'z-index':3, 'position':'absolute'}).appendTo(div);
          var txtCont = $('<div></div>').css({'z-index':4, 'position':'absolute', 'overflow':'hidden', 'left':'0px', 'top':'0px'}).appendTo(capCont);

          //If the text should float over the image, find location and size		
          if (this.sett.caption_float_mode) {
            var pd = div.data('position');

            if (pd) {
              capX = parseInt(pd.split(',')[0], 10);
              capY = parseInt(pd.split(',')[1], 10);
            }
            else {
              capX = this.sett.caption_position_x;
              capY = this.sett.caption_position_y;
            }

            //width
            var wd = div.data('width');
            if (wd) {
              capW = parseInt(wd, 10);
            }
            else {
              capW = this.sett.caption_width;
            }
            if (capX + capW + this.sett.caption_margin_x > this.bW) {
              capW = this.bW - capX - this.sett.caption_margin_x;
            }
            txt.css({'width':(capW - (this.sett.caption_padding_x * 2)) + 'px'});

            //height
            var hd = div.data('height');
            if (hd) {
              capH = parseInt(hd, 10);
            }
            else {
              capH = this.sett.caption_height == '' ? txt.height() + (this.sett.caption_padding_y * 2) : this.sett.caption_height;
            }
            txt.css({'height':this.sett.caption_height == '' ? 'auto' : capH + 'px'});
            capCont.css({'left':capX + 'px', 'top':capY + 'px', 'width':capW, 'height':capH});

          }
          else {
            capCont.css({'left':this.sett.caption_padding_x + 'px', 'width':(this.bW - ((this.sett.caption_padding_x + this.sett.caption_margin_x) * 2) - navWidth) + 'px'});
            txt.css({'width':(this.bW - ((this.sett.caption_padding_x + this.sett.caption_margin_x) * 2) - navWidth) + 'px'});
          }

          var canvas;
          var descH = txt.height() + (this.sett.caption_padding_y * 2);

          if (!this.sett.caption_float_mode) {
            capX = this.sett.caption_margin_x;
            capY = this.bH - descH - this.sett.caption_margin_y;
            capW = this.bW - (this.sett.caption_margin_x * 2);
            capH = descH;
            txt.css({'width':(capW - navWidth - (this.sett.caption_padding_x * 2)) + 'px'});
            capCont.css({'left':capX + 'px', 'top':capY + 'px', 'width':capW + 'px', 'height':capH});
          }
          txtCont.css({'width':capW, 'height':capH});
          txt.appendTo(txtCont);

          var capBGSh = div.data('caption_bg_shadow') ? div.data('caption_bg_shadow') : this.sett.caption_bg_shadow;


          //Text BG blur effect
          if (this.sett.caption_bg_blur > 0) {
            if (this.IE8) {
              canvas = $('<div style="position:absolute; z-index:1; overflow:hidden; width:' + (capW - 1) + 'px; height:' + (capH - 1) + 'px; top:0px; left:0px"><div style="position:absolute; z-index:2; width:' + (capW + (this.sett.caption_bg_blur * 2)) + 'px; height:' + (capH + (this.sett.caption_bg_blur * 2)) + 'px; top:' + (-(this.sett.caption_bg_blur) * 2) + 'px; left:' + (-(this.sett.caption_bg_blur * 2)) + 'px; background: transparent url(' + img.attr('src') + ') ' + (-capX + (this.sett.caption_bg_blur)) + 'px ' + (-capY + (this.sett.caption_bg_blur)) + 'px no-repeat; -ms-filter: progid:DXImageTransform.Microsoft.blur(pixelradius=' + this.sett.caption_bg_blur + '); filter: progid:DXImageTransform.Microsoft.blur(pixelradius=' + this.sett.caption_bg_blur + ');"></div></div>').appendTo(capCont);
              if (this.sett.caption_margin_y <= this.sett.caption_bg_blur / 2 && !this.sett.caption_float_mode) {
                canvas.append('<div style="position:absolute; z-index:1; width:' + (capW + (IEBlur * 2)) + 'px; height:' + (capH + (IEBlur * 2)) + 'px; top:' + (-(IEBlur) * 2) + 'px; left:' + (-(IEBlur * 2)) + 'px; background: transparent url(' + img.attr('src') + ') ' + (-capX + (IEBlur)) + 'px ' + (-capY + (IEBlur)) + 'px no-repeat; -ms-filter: progid:DXImageTransform.Microsoft.blur(pixelradius=' + IEBlur + '); filter: progid:DXImageTransform.Microsoft.blur(pixelradius=' + IEBlur + ');"></div>');
              }
            }
            else {
              if (!this.FF2) {
                canvas = $('<canvas id="c' + (i + 1) + '" width="' + capW + 'px" height="' + capH + 'px" style="position:absolute; z-index:1; top: 0px; left: 0px;  -moz-border-radius: ' + this.sett.caption_bg_radius + 'px; -webkit-border-radius: ' + this.sett.caption_bg_radius + 'px; border-radius: ' + this.sett.caption_bg_radius + 'px; -khtml-border-radius: ' + this.sett.caption_bg_radius + 'px;"></canvas>').appendTo(capCont);
              }
            }
          }
          else {
            if (capBGSh > 0 && !this.FF2) {
              canvas = $('<div id="c' + (i + 1) + '" width="' + capW + 'px" height="' + capH + 'px" style="position:absolute; z-index:1; top: 0px; left: 0px;  -moz-border-radius: ' + this.sett.caption_bg_radius + 'px; -webkit-border-radius: ' + this.sett.caption_bg_radius + 'px; border-radius: ' + this.sett.caption_bg_radius + 'px; -khtml-border-radius: ' + this.sett.caption_bg_radius + 'px;"></div>').appendTo(capCont);
            }
          }

          //Text BG color with transaprency
          var capBG = div.data('caption_bg_color') ? div.data('caption_bg_color') : this.sett.caption_bg_color;
          var capBGOp = div.data('caption_bg_opacity') ? div.data('caption_bg_opacity') : this.sett.caption_bg_opacity;
          var color = $('<div style="position:absolute; z-index:2; left:0px; top:0px; width:' + capW + 'px; height:' + capH + 'px; background-color:' + capBG + ';  -moz-border-radius: ' + this.sett.caption_bg_radius + 'px; -webkit-border-radius: ' + this.sett.caption_bg_radius + 'px; border-radius: ' + this.sett.caption_bg_radius + 'px; -khtml-border-radius: ' + this.sett.caption_bg_radius + 'px;"></div>').appendTo(capCont).css('opacity',
            capBGOp);

          //Text BG Border
          if (this.sett.caption_border) {
            var border = $('<div style="position:absolute; z-index:3; left:0px; top:0px; width:' + (capW - (this.sett.caption_border * 2)) + 'px; height:' + (capH - (this.sett.caption_border * 2)) + 'px; border:' + this.sett.caption_border + 'px solid ' + this.sett.caption_border_color + ';  -moz-border-radius: ' + this.sett.caption_bg_radius + 'px; -webkit-border-radius: ' + this.sett.caption_bg_radius + 'px; border-radius: ' + this.sett.caption_bg_radius + 'px; -khtml-border-radius: ' + this.sett.caption_bg_radius + 'px;"></div>').appendTo(capCont).css('opacity',
              this.sett.caption_border_opacity);
          }

          //Text BG Shadow					
          if (capBGSh > 0 && !this.FF2) {
            if ($.browser.webkit) {
              if (parseInt($.browser.version, 10) < 533) {
                canvas.css(this.shProp, '0px 0px 6px rgba(0, 0, 0, ' + capBGSh + ')');
              }
              else {
                canvas.css(this.shProp, '0px 0px 6px 0px rgba(0, 0, 0, ' + capBGSh + ')');
              }
            }
            else {
              if ($.browser.mozilla) {
                if (canvas.css('box-shadow') != 'none') {
                  canvas.css(this.shProp, '0px 0px 4px 1px rgba(0, 0, 0, ' + capBGSh + ')');
                }
                else {
                  canvas.css(this.shProp, '0px 0px 4px 0px rgba(0, 0, 0, ' + capBGSh + ')');
                }
              }
              else {
                if ($.browser.opera) {
                  canvas.css(this.shProp, '0px 0px 4px 1px rgba(0, 0, 0, ' + capBGSh + ')');
                }
                else {
                  canvas.css(this.shProp, '0px 0px 6px 0px rgba(0, 0, 0, ' + capBGSh + ')');
                }
              }
            }
          }

          //Hide elements to start animation
          capCont.hide();
          txt.hide();
        }


        //Store each slide's data
        this.slides.push({con:div, img:img, txt:txt.length > 0 ? txt : false, cap:capCont, loaded:false, butt:"", z:this.slide_tot - i, can:canvas, cx:capX, cy:capY, cw:capW, ch:capH, tx:this.sett.caption_padding_x + capX, ty:this.sett.caption_padding_y + capY, tw:txt.width(), delay:(div.data('delay') ? div.data('delay') : this.sett.slide_delaytime) * 1000});
        div.hide().bind('mousedown touchstart', {id:i}, function (e) {
          if (self.draggable && !self.slide_drg) {
            if (e.type == "mousedown") {
              if (self.slide_fin) {
                self.startDrag(e.data.id, e.pageX);
              }
            }
            else {
              if (self.slide_fin && e.originalEvent.touches.length > 0 && e.originalEvent.touches.length < 2) {
                self.startDrag(e.data.id, e.originalEvent.changedTouches[0].pageX);
              }
            }

          }
          if (e.type == "mousedown") {
            e.preventDefault();
          }

        });
      }

      //Check load status of images
      for (var i = 0; i < this.slide_tot; i++) {
        var _img = new Image();
        //Load event
        $(_img).bind('load', {id:i}, function (e) {
          var id = e.data.id;
          self.slides[id].loaded = true;
          self.slides[id].con.css({'background-image':'none'});

          //Once the image loaded, prepare the blurred version
          if (!self.IE8 && !self.FF2 && self.sett.caption_bg_blur > 0 && self.slides[id].txt) {
            boxBlurImage(self.slides[id].img[0], self.slides[id].cx, self.slides[id].cy, self.slides[id].cw,
              self.slides[id].ch, self.slides[id].can[0], self.sett.caption_bg_blur, false, 2);
          }

          //When the 1st image  loaded, set Navigation and transition
          if (id == self.slide_pr2 && id == 0) {
            self.setNavigation();
            self[self.sett.slide_transition]();
          }
        });
        _img.src = this.slides[i].img.attr('src');
      }

      //Manage Links when slide dragged
      if (this.draggable) {
        var aHrefs = this.$cont.find('a');
        aHrefs.each(function () {
          var a = $(this);
          a.bind('click', {l:a.attr('href'), t:a.attr('target')}, function (e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            var l = e.data.l;
            var t = e.data.t ? e.data.t.toLowerCase() : "_self";
            if (!self.slide_drg) {
              $(document).unbind('mouseup.drag touchend.drag');
              $(document).unbind('mousemove.drag touchmove.drag');
              if (t === '_self') {
                window.location.href = l;
              }
              else {
                window.open(l);
              }
            }
            else {
              self.slide_drg = false;
            }
            return false;

          });
          if (a.find('img').length < 1) {
            a.bind('mousedown', function (e) {
              e.preventDefault();
              return false;
            });
          }
          a.attr('href', 'return false');
        });
      }


    },

    hexToRGB:function (color) {
      var hex = parseInt(color.substring(1), 16);
      var r = (hex & 0xff0000) >> 16;
      var g = (hex & 0x00ff00) >> 8;
      var b = hex & 0x0000ff;
      return [r, g, b];
    },

    //Add Navigation
    //////////////////////////////////////////////////////////////////////////////////////////////
    setNavigation:function () {
      var self = this;
      var $navigation = this.navigation().appendTo(this.$cont);
      var navX = $navigation.position().left;

      //Fade/slide in navigation
      if (!this.IE8) {
        $navigation.hide().fadeIn(700);
      }
      $navigation.css({'left':navX - 30}).animate({'left':navX}, {duration:700,
          easing:'easeInOutQuart',
          queue:false,
          complete:function () {
            if (!self.sett.button_numbers_autohide && self.sett.button_show_numbers) {
              for (var i = 0; i < self.slide_tot; i++) {
                self.showHideButton(i, true);
              }
            }
          }
        });

      //Class for button color
      $('.col').css('background-color', this.sett.button_color);
    },


    startDrag:function (id, sx) {
      var self = this;
      var n;
      var pos;
      var p = 0;
      var ch = 0;
      var reversed = false;
      if (this.sett.slide_transition !== 'move') {
        this.slides[id].con.css(this.shProp, '0px 0px 45px 0px #000000');
      }
      this.slide_drg = false;

      $(document).unbind('mousemove.drag touchmove.drag').bind('mousemove.drag touchmove.drag', function (e) {
        var mouseX;

        if (e.type == 'mousemove') {
          mouseX = e.pageX;

        }
        else {
          //If multi touch swipe happens instead of single finger, stop dragging
          if (e.originalEvent.touches.length > 1) {
            return false;
          }
          else {
            mouseX = e.originalEvent.changedTouches[0].pageX;
          }
        }

        pos = mouseX - sx;
        if (pos > self.bW) {
          pos = self.bW;
        }
        if (pos < -self.bW) {
          pos = -self.bW;
        }
        ch = mouseX - p;
        p = mouseX;
        self.slides[id].con.css('left', pos);
        if (pos > 0) {
          n = self.slide_sel - 1 < 0 ? self.slide_tot - 1 : self.slide_sel - 1;
          if (!self.slide_drg) {
            self.slides[n].con.show();
          }
          if (self.slides[n].txt) {
            self.slides[n].cap.hide();
          }
          self.slide_drg = true;
        }
        else {
          if (pos < 0) {
            n = self.slide_sel + 1 > self.slide_tot - 1 ? 0 : self.slide_sel + 1;
            if (!self.slide_drg) {
              self.slides[n].con.show();
            }
            if (self.slides[n].txt) {
              self.slides[n].cap.hide();
            }
            self.slide_drg = true;

          }
        }
        if (pos !== 0) {
          self.slide_pr1 = n;
          self.zSort(2, 1);
          if (self.clockPlaying) {
            self.clockPlaying = false;
            self.timerob.stop();
            self.timerReset(true);
          }

          if (self.sett.slide_transition == 'move') {
            self.slides[n].con.css({'left':pos + (pos > 0 ? -self.bW : self.bW)});
          }
          else {
            self.slides[n].con.css({'left':'0px'});
          }

        }
        e.preventDefault();
        return false;
      });
      $(document).unbind('mouseup.drag touchend.drag').bind('mouseup.drag touchend.drag', function (e) {
        $(document).unbind('mousemove.drag touchmove.drag');
        $(document).unbind('mouseup.drag touchend.drag');
        if (self.slide_drg) {
          var dir = 0;
          var cp = self.slides[id].con.position().left;
          if (self.IE8) {
            if (cp > self.sett.touch_dragdrop_factor) {
              dir = 1;
            }
            else {
              if (cp < -self.sett.touch_dragdrop_factor) {
                dir = -1;
              }
            }
          }
          else {
            if (cp > self.sett.touch_dragdrop_factor) {
              dir = 1;
            }
            else {
              if (cp < -self.sett.touch_dragdrop_factor) {
                dir = -1;
              }
            }
            if (ch > self.sett.touch_throw_factor) {
              dir = cp < 0 ? 0 : 1;
            }
            else {
              if (ch < -self.sett.touch_throw_factor) {
                dir = cp > 0 ? 0 : -1;
              }
            }
          }

          if (dir != 0) {
            self.dragged = true;
            self.slide_dir = dir;
            self.slide_fin = false;
            if (self.sett.slide_transition == 'move') {
              self.slides[id].con.stop().animate({'left':self.bW * dir},
                {duration:Math.max((self.bW - (self.slides[id].con.position().left * dir)) / 1.5, 400),
                  step:function (now, fx) {
                    self.slides[n].con.css({'left':now + (pos > 0 ? -self.bW : self.bW)});
                  },
                  complete:function () {
                    self.slide_fin = true;
                    self.slide_drg = false;
                    if (self.sett.button_show_numbers) {
                      self.toggleButton();
                    }
                    else {
                      self.timerReset(true);
                    }
                    if (self.slides[n].txt) {
                      self.slides[n].cap.hide();
                      if (self.sett.caption_float_mode) {
                        self.slides[n].cap.css('left',
                          (self.IE8 ? self.slides[n].cx : self.slides[n].cx + (100 * -self.slide_dir)) + 'px');
                      }
                    }
                    if (self.slides[n].txt) {
                      self.animateCaption();
                    }
                    if (self.autoPlaying) {
                      self.startDelayTimer();
                    }
                  }});

            }
            else {
              if (self.IE8) {
                if (self.slides[self.slide_pr1].txt) {
                  self.slides[self.slide_pr1].txt.stop().clearQueue();
                  self.slides[self.slide_pr1].cap.stop().clearQueue();
                }
              }
              self.slides[id].con.stop().animate({'left':(self.bW + 30) * dir},
                {duration:Math.max((self.bW - (self.slides[id].con.position().left * dir)) / .75, 600),
                  easing:'easeOutQuart',
                  complete:function () {
                    self.slides[id].con.css(self.shProp, 'none');
                    self.slide_fin = true;
                    self.slide_drg = false;
                    if (self.sett.button_show_numbers) {
                      self.toggleButton();
                    }
                    else {
                      self.timerReset(true);
                    }
                    if (self.slides[n].txt) {
                      self.slides[n].cap.hide();
                      if (self.sett.caption_float_mode) {
                        self.slides[n].cap.css('left',
                          (self.IE8 ? self.slides[n].cx : self.slides[n].cx + (100 * -self.slide_dir)) + 'px');
                      }
                    }
                    if (self.slides[n].txt) {
                      self.animateCaption();
                    }
                    if (self.autoPlaying) {
                      self.startDelayTimer();
                    }
                  }});
            }
            self.slide_sel = n;

          }
          else {
            if (self.sett.slide_transition == 'move') {
              self.slides[id].con.stop().animate({'left':0}, {
                step:function (now, fx) {
                  self.slides[n].con.css({'left':now + (pos > 0 ? -self.bW : self.bW)});
                },
                complete:function () {
                  self.slide_drg = false;
                  if (self.autoPlaying) {
                    self.startDelayTimer();
                  }
                }
              });
            }
            else {
              self.slides[id].con.stop().animate({'left':0}, {
                complete:function () {
                  self.slide_drg = false;
                  self.slides[id].con.css(self.shProp, 'none');
                  if (self.autoPlaying) {
                    self.startDelayTimer();
                  }
                }
              });
            }
          }
        }

        return false;
      });

    },


    //Find the selected slide before making transition
    //////////////////////////////////////////////////////////////////////////////////////////////
    changeSlide:function (n) {
      this.slide_pr2 = this.slide_pr1;
      this.slide_pr1 = this.slide_sel;
      this.dragged = false;

      //Next button clicked			
      if (n == 'next') {
        this.slide_sel = this.slide_sel + 1 > this.slide_tot - 1 ? 0 : this.slide_sel + 1;

        //Back button clicked
      }
      else {
        if (n == 'back') {
          this.slide_sel = this.slide_sel - 1 < 0 ? this.slide_tot - 1 : this.slide_sel - 1;

          //Number button clicked
        }
        else {
          this.slide_sel = n;
        }
      }

      this[this.sett.slide_transition]();

    },


    //Change the stack order (z-index) of slides
    //////////////////////////////////////////////////////////////////////////////////////////////
    zSort:function (current, previous) {
      var z = 1;
      for (var i = 0; i < this.slide_tot; i++) {
        if (i !== this.slide_sel && i !== this.slide_pr1) {
          if (this.slides[i]) {
            this.slides[i].con.css('z-index', z);
            if (this.IE8) {
              this.slides[i].con.hide();
            }
          }
          z++;
        }
      }
      if (this.slides[this.slide_pr1]) {
        this.slides[this.slide_pr1].con.css('z-index', this.slide_tot + previous);
      }
      if (this.slides[this.slide_sel]) {
        this.slides[this.slide_sel].con.css('z-index', this.slide_tot + current);
      }
    },


    //Trasnition out the previous slides caption
    //////////////////////////////////////////////////////////////////////////////////////////////
    textOut:function () {
      var self = this;
      if (this.slides[this.slide_pr1] && this.sett.slide_transition == 'fade') {
        this.slides[this.slide_pr1].txt.stop().clearQueue().animate({
          'left':(-self.slides[self.slide_pr1].cw / 2) + 'px'}, {
          duration:150,
          easing:'easeOutQuad',

          queue:false,
          complete:function () {
            $(this).hide();
          }
        });
      }
    },


    //Animate the slected slide's caption
    //////////////////////////////////////////////////////////////////////////////////////////////
    textIn:function () {
      this.slides[this.slide_sel].txt.stop().clearQueue();
      var txtDir = -this.slide_dir;
      if (this.sett.slide_transition == 'fade' && !this.dragged) {
        txtDir = 1;
      }
      if (this.IE8) {
        this.slides[this.slide_sel].txt.css({'left':(this.sett.caption_padding_x + (100 * txtDir)) + 'px', 'filter':'none'})
      }
      else {
        this.slides[this.slide_sel].txt.css({'left':(this.sett.caption_padding_x + (100 * txtDir)) + 'px', 'opacity':1});
      }

      this.slides[this.slide_sel].txt.hide().fadeIn(600, function () {
          $(this).removeAttr("filter").removeAttr("-ms-filter");
        }).animate({
          'left':this.sett.caption_padding_x + 'px'}, {
          duration:800,
          easing:'easeOutQuart',
          queue:false
        });
    },


    //Entire Caption holder animates
    //////////////////////////////////////////////////////////////////////////////////////////////
    animateCaption:function () {
      var self = this;
      var id = this.slide_sel;
      this.slides[this.slide_sel].txt.hide();
      if (this.sett.caption_float_mode) {
        if (this.IE8) {
          this.slides[id].cap.hide().fadeIn({ duration:300});
        }
        else {
          this.slides[id].cap.hide().fadeIn({ duration:800, queue:false}).animate({'left':this.slides[id].cx},
            {'duration':600});
        }
        this.textIn();
      }
      else {
        if (this.IE8) {
          this.slides[id].cap.hide().fadeIn({ duration:600,
            complete:function () {
              self.textIn();
            }, queue:false});
        }
        else {
          this.slides[id].cap.hide().fadeIn({ duration:600, queue:false});
          this.slides[id].cap.animate({'_':100}, {'duration':400,
            complete:function () {
              self.textIn();
            }
          });
        }
      }
    },


    //Navigation Button
    //////////////////////////////////////////////////////////////////////////////////////////////
    createButton:function (nav, holder, zindex, icon, num) {
      var self = this;
      var _size = this.sett.button_size;
      var button = $('<div></div>',
        {'style':'z-index:' + zindex + '; position: absolute; width:' + (_size + (this.buttonIE * 2)) + 'px; height:' + (_size + (this.buttonIE * 2)) + 'px; cursor: pointer; '}).addClass('noSelect');
      var bg = $('<div></div>',
        {'style':'z-index:2; position: absolute; left: ' + this.buttonIE + 'px; top: ' + this.buttonIE + 'px; right:' + this.buttonIE + 'px; bottom:' + this.buttonIE + 'px; width:' + _size + 'px; height:' + _size + 'px;'}).appendTo(button);

      if (this.IE8) {
        var sh = $('<div></div>',
          {'style':'z-index:1; position: absolute; background-color:#000000; left: 0px; top: 0px; width:100%; height:100%; filter: alpha(opacity=10)'}).appendTo(button);
        var alpha = '<div class="col" style="z-index:2; position:absolute; left:0px; top:0px; width:100%; height:100%; filter: alpha(opacity=35);"></div>';
        var tb = '<div class="col" style="z-index:3; position:absolute; left:1px; right:1px; top:0px; height:100%; filter: alpha(opacity=100);"></div>';
        var cent = '<div class="col" id="iconHolder" unselectable="on" style="z-index:4; position:absolute; left:0px; top: 1px; width: 100%; height: ' + (_size - 2) + 'px; filter: alpha(opacity=100);" align="center"></div>';
        $(alpha + tb + cent).appendTo(bg);
        var ih = bg.find('#iconHolder');
        if (icon !== "") {
          ih.css({ 'background-image':'url(' + icon + ')', 'background-position':(num == "next" ? ((_size - 30) / 2) - 30 : num == "pause" ? ((_size - 30) / 2) - (this.autoPlaying ? 60 : 90) : (_size - 30) / 2) + 'px center', 'background-repeat':'no-repeat'});
        }
        else {
          var ih_number = $('<span unselectable="on" style="position:relative; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: bold; text-align: center; line-height:' + (_size - 1) + 'px; left:' + (String(num + 1).length <= 1 ? 1 : 0) + 'px; top:-1px;"  align="center">' + (num + 1) + '</span>')
          ih.append(ih_number);
        }

      }
      else {
        if ($.browser.webkit) {
          if (parseInt($.browser.version, 10) < 533) {
            bg.css(this.shProp, '0px 0px 2px #000000');
          }
          else {
            bg.css(this.shProp, '0px 0px 5px -1px #000000');
          }
        }
        else {
          if ($.browser.mozilla) {
            if (bg.css('box-shadow') != 'none') {
              bg.css(this.shProp, '0px 0px 3px -1px #000000');
            }
            else {
              bg.css(this.shProp, '0px 0px 2px -1px #000000');
            }
          }
          else {
            if ($.browser.opera) {
              bg.css(this.shProp, '0px 0px 2px 0px #000000');
            }
            else {
              bg.css(this.shProp, '0px 0px 5px -1px #000000');
            }
          }
        }
        bg.css({
          '-moz-border-radius':'2px', '-webkit-border-radius':'2px', 'border-radius':'2px', '-khtml-border-radius':'2px'
        }).addClass('col');

        if (icon !== "") {
          bg.css({'background-image':'url(' + icon + ')', 'background-position':(num == "next" ? ((_size - 30) / 2) - 30 : num == "pause" ? ((_size - 30) / 2) - (this.autoPlaying ? 60 : 90) : (_size - 30) / 2) + 'px center', 'background-repeat':'no-repeat'});

        }
        else {
          button.append($('<div align="center" style="z-index:2; position: absolute; left: 0px; top: 0px; width: 100%; height:100%; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: bold; line-height:' + _size + 'px; text-align: center; cursor:hand;">' + (num + 1) + '</div>'));
        }
      }

      //console.info(ih_number)

      //Button Events; only for over, out and down states
      button.bind('mouseenter',
        function (e) {
          bg.css({'opacity':1});

        }).bind('mouseleave', {id:num},
        function (e) {
          if (e.data.id != self.slide_sel) {
            bg.css({'opacity':self.sett.button_opacity});
          }

        }).bind('mousedown', function (e) {
          e.stopImmediatePropagation();
          if (num !== self.slide_sel) {
            bg.css({'opacity':1, 'left':(1 + self.buttonIE) + 'px', 'top':(1 + self.buttonIE) + 'px', 'width':(_size - 2) + 'px', 'height':(_size - 2) + 'px', 'background-position':((num == "next" ? ((_size - 30) / 2) - 30 : num == "pause" ? ((_size - 30) / 2) - (self.autoPlaying ? 60 : 90) : (_size - 30) / 2) - 1) + 'px center'});
            sh ? sh.css({'left':'1px', 'top':'1px', 'width':_size + 'px', 'height':_size + 'px'}) : "";
            if (ih) {
              ih.css({'height':(_size - 4) + 'px', 'background-position':((num == "next" ? ((_size - 30) / 2) - 30 : num == "pause" ? ((_size - 30) / 2) - (self.autoPlaying ? 60 : 90) : (_size - 30) / 2) - 1) + 'px center'});
            }
            if (ih_number) {
              ih_number.css({'top':'-2px'});
            }
            nav.currentDown = num;
          }
        });

      bg.css('opacity', this.sett.button_opacity);
      button.appendTo(holder);
      button.bg = bg;
      button.ih = button.children().eq(1);
      return button;
    },


    //Setup entire navigation here
    ////////////////////////////////////////////////////////////////////////////////////////////// 
    navigation:function () {
      var self = this;

      var nav = this.nav = this;
      nav.currentDown = "";

      var _size = this.sett.button_size;
      var _sp = this.sett.button_space;

      var navPosX = this.bW - this.sett.button_margin - (this.sett.caption_float_mode ? 0 : this.sett.caption_margin_x);
      var navPosY = this.bH - this.sett.button_margin - (this.sett.caption_float_mode ? 0 : this.sett.caption_margin_y);

      //Add Navigation Holder
      var $navHolder = $('<div></div>',
        {'style':'z-index:' + (this.slide_tot + 50) + '; position: absolute; left: ' + navPosX + 'px; top: ' + navPosY + 'px;'});

      if (this.buttonNext || this.buttonNumber) {
        var $numSet = $('<div></div>',
          {'style':'z-index:4; position: absolute; left: ' + (-_size) + 'px; top: ' + (-(_size + _sp) * (this.slide_tot + (this.buttonNext ? 1 : 0)) + _sp) + 'px; width: ' + _size + 'px; height: ' + ((_size + _sp) * (this.slide_tot + 1) - _sp) + 'px; '});
        if (this.sett.button_numbers_horizontal) {
          $numSet.css({
            'z-index':4,
            'position':'absolute',
            'left':(-(_size + _sp) * (this.slide_tot + (this.buttonNext ? 1 : 0)) + _sp) + 'px',
            'top':(-_size) + 'px',
            'width':((_size + _sp) * (this.slide_tot + (this.buttonNext ? 1 : 0)) - _sp) + 'px',
            'height':_size + 'px'
          });
        }
        $numSet.appendTo($navHolder);
      }

      //Next Button
      if (this.buttonNext) {
        this.buttonNext = this.createButton(nav, $numSet, 4, '/sites/all/modules/custom/svadba_general/lib/icons.png',
          "next").css({'left':(this.sett.button_numbers_horizontal ? ((_size + _sp) * this.slide_tot) : 0) - this.buttonIE + 'px', 'top':(this.sett.button_numbers_horizontal ? 0 : ((_size + _sp) * this.slide_tot)) - this.buttonIE + 'px'})

        if (this.sett.button_numbers_autohide && this.buttonNumber) {
          this.buttonNext.bind('mouseenter', function (e) {
            if (!self.numShow) {
              for (var i = 0; i < self.slide_tot; i++) {
                clearTimeout(self.buttonLeaveTimer);
                clearTimeout(self.slides[i].timer);
                self.showHideButton(i, true);
              }
            }
          });
          $numSet.bind('mouseleave', function (e) {
            if (self.numShow) {
              self.buttonLeaveTimer = setTimeout(function () {
                self.numShow = false;
                for (var i = 0; i < self.slide_tot; i++) {
                  self.showHideButton(i, false);
                }
              }, 300);
            }

          }).bind('mouseenter', function (e) {
              if (self.numShow) {
                clearTimeout(self.buttonLeaveTimer);
              }
              ;
            });
        }
      }

      //Timer Clock
      if (this.clockTimer) {
        if (this.canvasSupport) {
          this.clockTimer = $('<canvas id="clockTimer" width="' + _size + '" height="' + _size + '" style="position:absolute; z-index:2;"></canvas>').appendTo(this.sett.button_numbers_horizontal && this.buttonNext ? $numSet : $navHolder);
          this.clockContext = this.clockTimer[0].getContext('2d');
          this.clockContext.shadowColor = 'rgba(0, 0, 0, 0.5)';
          this.clockContext.shadowBlur = 3;
          this.clockContext.shadowOffsetX = 0;
          this.clockContext.shadowOffsetY = 0;
          this.clockContext.lineWidth = _size / 10;
          this.clockContext.lineCap = 'round';
        }
        else {
          this.clockTimer = $('<div style="position:absolute; z-index:2; width:' + _size + 'px; height:' + _size + 'px; overflow:hidden"><div style="position:absolute; left: -2px; top:-2px; width:' + (_size !== 20 ? (960 * (_size / 20 / 1)) : 960) + 'px; height:' + (_size + 2) + 'px; filter : progid:DXImageTransform.Microsoft.AlphaImageLoader(src=trans_banner/timer-sprite.png, sizingMethod=' + (_size !== 20 ? 'scale' : 'noscale') + ') alpha(opacity=100);"></div></div>').appendTo(this.sett.button_numbers_horizontal && this.buttonNext ? $numSet : $navHolder);
        }

        if (this.sett.button_numbers_horizontal) {
          if (this.buttonNext) {
            if (this.buttonNumber && !this.sett.button_numbers_autohide) {
              this.clockTimer.css({'left':-(_size + _sp) + 'px', 'top':'0px'});
            }
            else {
              this.clockTimer.css({'left':((_size + _sp) * (this.slide_tot - 1)) + 'px', 'top':'0px'});
            }
          }
          else {
            if (this.buttonNumber && !this.sett.button_numbers_autohide) {
              this.clockTimer.css({'left':-((_size + _sp) * (this.slide_tot + 1)) + _sp + 'px', 'top':(-_size) + 'px'});
            }
            else {
              this.clockTimer.css({'left':(-_size) + 'px', 'top':(-_size - this.buttonIE) + 'px'});
            }
          }
        }
        else {
          this.clockTimer.css({'left':-((_size * (this.buttonNext || this.buttonNumber ? 2 : 1)) + (this.buttonNext || this.buttonNumber ? _sp : 0)) + 'px', 'top':-(_size) + 'px'});
        }

        this.buttonPause = this.createButton(nav,
          this.sett.button_numbers_horizontal && this.buttonNext ? $numSet : $navHolder, 3,
          '/sites/all/modules/custom/svadba_general/lib/icons.png',
          'pause').css({'left':parseInt(this.clockTimer.css('left'),
            10) - this.buttonIE, 'top':parseInt(this.clockTimer.css('top'), 10) - this.buttonIE});
        if (this.autoPlaying) {
          this.buttonPause.css({'opacity':0});
        }
        else {
          this.clockTimer.css({'opacity':0});
        }

        this.buttonPause.bind('mouseenter',
          function (e) {
            self.buttonPause.stop().animate({opacity:1}, {
              duration:400,
              easing:'easeOutQuad'

            });

          }).bind('mouseleave', function (e) {
            if (self.autoPlaying) {
              self.buttonPause.stop().animate({opacity:0}, {
                duration:400,
                easing:'easeOutQuart'
              });
            }

          });
      }

      //Back Button
      if (this.buttonBack) {
        this.buttonBack = this.createButton(nav,
          this.sett.button_numbers_horizontal && this.buttonNext ? $numSet : $navHolder, 1,
          '/sites/all/modules/custom/svadba_general/lib/icons.png', "back");
        if (this.sett.button_numbers_horizontal) {
          if (this.buttonNext) {
            if (this.clockTimer) {
              this.buttonBack.css({'left':((_size + _sp) * (this.slide_tot - 2)) - this.buttonIE + 'px', 'top':(-this.buttonIE) + 'px'});
            }
            else {
              this.buttonBack.css({'left':((_size + _sp) * (this.slide_tot - 1)) - this.buttonIE + 'px', 'top':(-this.buttonIE) + 'px'});
            }
          }
          else {
            if (this.clockTimer) {
              this.buttonBack.css({'left':(parseInt(this.clockTimer.css('left'),
                10) - _size - _sp) - this.buttonIE + 'px', 'top':parseInt(this.clockTimer.css('top'), 10) - this.buttonIE});
            }
            else {
              this.buttonBack.css({'left':(-_size) + 'px', 'top':(-_size - this.buttonIE) + 'px'});
            }
          }
        }
        else {
          if (this.clockTimer) {
            this.buttonBack.css({'left':((-(_size + _sp) * (this.buttonNext ? 3 : 2)) + _sp) - this.buttonIE + 'px', 'top':-(_size) - this.buttonIE + 'px'});
          }
          else {
            this.buttonBack.css({'left':-((_size * (this.buttonNext || this.buttonNumber ? 2 : 1)) + (this.buttonNext || this.buttonNumber ? _sp : 0)) - this.buttonIE + 'px', 'top':-(_size) - this.buttonIE + 'px'});
          }
        }
      }

      //Number Buttons
      if (this.buttonNumber) {
        for (var i = 0; i < this.slide_tot; i++) {
          this.slides[i].butt = this.createButton(nav, $numSet, this.slide_tot - i + 5, "", i);
          this.slides[i].buttBG = this.slides[i].butt.bg;
          this.slides[i].buttIH = this.slides[i].butt.ih;
          if (this.sett.button_numbers_horizontal) {
            this.slides[i].butt.css({'top':(-this.buttonIE) + 'px', 'left':((_size + _sp) * i) - this.buttonIE + 'px'});
          }
          else {
            this.slides[i].butt.css({'left':(-this.buttonIE) + 'px', 'top':((_size + _sp) * i) - this.buttonIE + 'px'});
          }
          if (i == this.slide_sel) {
            this.slides[i].buttBG.css({'opacity':1});
          }
          this.slides[i].butt.hide();
        }
      }

      //Mouse Up event for all the buttons: Next, Back, Pause and Number buttons
      $(document).bind('mouseup', function () {
        if (nav.currentDown == "next") {
          if ((self.sett.slide_transition == 'fade' && self.slide_fin) || (self.sett.slide_transition != 'fade' && ((self.slide_dir < 0 && self.slides[self.slide_sel].con.position().left < self.bW / 2) || (self.slide_dir > 0 && self.slides[self.slide_sel].con.position().left > -self.bW / 2)))) {
            self.slide_dir = -1;
            self.changeSlide("next");
          }
          if (self.sett.button_show_numbers) {
            self.toggleButton();
          }
          else {
            self.timerReset(false);
          }
          self.buttonNext.bg.css({'opacity':1, 'left':(self.buttonIE) + 'px', 'top':(self.buttonIE) + 'px', 'width':_size + 'px', 'height':_size + 'px', 'background-position':(((_size - 30) / 2) - 30) + 'px center'});
          self.buttonNext.ih.css({'left':'0px', 'top':'0px', 'width':_size + 2 + 'px', 'height':_size + 2 + 'px'});
          self.buttonNext.find('#iconHolder').css({'height':(_size - 2) + 'px', 'background-position':(((_size - 30) / 2) - 30) + 'px center'});

        }
        else {
          if (nav.currentDown == "back") {
            if ((self.sett.slide_transition == 'fade' && self.slide_fin) || (self.sett.slide_transition != 'fade' && ((self.slide_dir < 0 && self.slides[self.slide_sel].con.position().left < self.bW / 2) || (self.slide_dir > 0 && self.slides[self.slide_sel].con.position().left > -self.bW / 2)))) {
              self.slide_dir = 1;
              self.changeSlide("back");
            }
            if (self.sett.button_show_numbers) {
              self.toggleButton();
            }
            else {
              self.timerReset(false);
            }
            self.buttonBack.bg.css({'opacity':1, 'left':(self.buttonIE) + 'px', 'top':(self.buttonIE) + 'px', 'width':_size + 'px', 'height':_size + 'px', 'background-position':((_size - 30) / 2) + 'px center'});
            self.buttonBack.ih.css({'left':'0px', 'top':'0px', 'width':_size + 2 + 'px', 'height':_size + 2 + 'px'});
            self.buttonBack.find('#iconHolder').css({'height':(_size - 2) + 'px', 'background-position':((_size - 30) / 2) + 'px center'});

          }
          else {
            if (nav.currentDown == "pause") {
              if (self.autoPlaying) {
                self.autoPlaying = false;
                self.buttonPause.css({'opacity':1});
                self.clockTimer.css({'opacity':0});
                self.timerReset(true);
              }
              else {
                self.autoPlaying = true;
                self.buttonPause.stop().animate({opacity:0}, {
                  duration:400,
                  easing:'easeOutQuart'
                });
                self.clockTimer.css({'opacity':1});
                self.startDelayTimer();
              }

              self.buttonPause.bg.css({'opacity':1, 'left':(self.buttonIE) + 'px', 'top':(self.buttonIE) + 'px', 'width':_size + 'px', 'height':_size + 'px', 'background-position':(((_size - 30) / 2) - (self.autoPlaying ? 60 : 90)) + 'px center'});
              self.buttonPause.ih.css({'left':'0px', 'top':'0px', 'width':_size + 2 + 'px', 'height':_size + 2 + 'px'});
              self.buttonPause.find('#iconHolder').css({'height':(_size - 2) + 'px', 'background-position':(((_size - 30) / 2) - (self.autoPlaying ? 60 : 90)) + 'px center'});

            }
            else {
              if (nav.currentDown !== "") {
                if (self.slide_sel !== nav.currentDown) {
                  if ((self.sett.slide_transition == 'fade' && self.slide_fin) || (self.sett.slide_transition != 'fade' && ((self.slide_dir < 0 && self.slides[self.slide_sel].con.position().left < self.bW / 2) || (self.slide_dir > 0 && self.slides[self.slide_sel].con.position().left > -self.bW / 2)))) {
                    if (nav.currentDown > self.slide_sel) {
                      self.slide_dir = -1;
                    }
                    else {
                      if (nav.currentDown < self.slide_sel) {
                        self.slide_dir = 1;
                      }
                    }
                    self.changeSlide(nav.currentDown);
                  }
                }
                if (self.sett.button_show_numbers) {
                  self.toggleButton();
                }
                else {
                  self.timerReset(false);
                }
                var ih = self.slides[self.slide_sel].butt.find('#iconHolder');
                if (ih) {
                  ih.css({'height':(_size - 2) + 'px'});
                  ih.children().eq(0).css({'top':'-1px'});
                }
              }
            }
          }
        }
        nav.currentDown = "";
      });
      return $navHolder;
    },


    //The timer clock initiated
    //////////////////////////////////////////////////////////////////////////////////////////////
    startDelayTimer:function () {
      var self = this;
      if (this.clockPlaying) this.timerob.stop();
      if (this.clockTimer) this.clockTimer.stop();
      this.clockPlaying = true;
      this.timerob.css('left', '0px');
      this.timerob.animate({'left':'780px'}, {
        easing:'linear',
        duration:this.slides[this.slide_sel].delay,
        queue:false,
        step:function (now, fx) {
          if (self.sett.button_show_timer) {
            if (self.canvasSupport) {
              self.clockContext.clearRect(0, 0, self.sett.button_size, self.sett.button_size);
              //self.clockContext.strokeStyle = "rgba(255, 0, 255, .4)";
              self.clockContext.strokeStyle = "rgba(" + self.hexToRGB(self.clockClearColor).join(',') + ", .4)";
              self.clockContext.beginPath();
              self.clockContext.arc(self.sett.button_size / 2, self.sett.button_size / 2,
                (self.sett.button_size / 2) - (self.sett.button_size / 10), 0, Math.PI * 2, true);
              self.clockContext.stroke();
              self.clockContext.closePath();

              //self.clockContext.strokeStyle = "rgba(255, 0, 255, .85)";
              self.clockContext.strokeStyle = "rgba(" + self.hexToRGB(self.clockColor).join(',') + ", .85)";
              self.clockContext.beginPath();
              self.clockContext.arc(self.sett.button_size / 2, self.sett.button_size / 2,
                (self.sett.button_size / 2) - (self.sett.button_size / 10), (Math.PI * 2 * (now / 780)) - (Math.PI / 2),
                -Math.PI / 2, true);

              self.clockContext.stroke();
              self.clockContext.closePath();
            }
            else {
              var pos = (parseInt(now / 780 * 39, 10) * -(24 * self.sett.button_size / 20)) - 2;
              pos < -(39 * (24 * self.sett.button_size / 20)) - 2 ? pos = -2 : "";
              self.clockTimer.children().eq(0).css({'left':pos + 'px'});
            }
          }
        },
        complete:function () {
          self.clockPlaying = false;
          if (!self.slide_drg) {
            self.slide_dir = -1;
            self.changeSlide("next");
            if (self.sett.button_show_numbers) {
              self.toggleButton();
            }
            else {
              self.timerReset(false);
            }
          }
        }
      });
    },


    //Stop timer clock and initiate new
    //////////////////////////////////////////////////////////////////////////////////////////////
    timerReset:function (immediate) {
      var self = this;
      if (this.clockPlaying) this.timerob.stop();

      if (this.autoPlaying) {
        if (immediate) {
          if (this.clockTimer) {
            this.clockTimer.stop();
            if (this.canvasSupport) {
              self.clockContext.clearRect(0, 0, self.sett.button_size, self.sett.button_size);
              //self.clockContext.strokeStyle = "rgba(255, 255, 255, .4)";
              self.clockContext.strokeStyle = "rgba(" + self.hexToRGB(self.clockColor).join(',') + ", .4)";
              self.clockContext.beginPath();
              self.clockContext.arc(self.sett.button_size / 2, self.sett.button_size / 2,
                (self.sett.button_size / 2) - (self.sett.button_size / 10), 0, Math.PI * 2, true);
              self.clockContext.stroke();
              self.clockContext.closePath();
              self.clockTimer.css({'opacity':1});
            }
            else {
              self.clockTimer.children().eq(0).css({'left':'-2px'});
              self.clockTimer.css({'filter':'none'});
            }
          }
        }
        else {
          if (this.clockTimer) {
            if (this.canvasSupport) {
              this.clockTimer.stop().fadeTo(300, .4, function () {
                self.clockContext.clearRect(0, 0, self.sett.button_size, self.sett.button_size);
                //self.clockContext.strokeStyle = "rgba(255, 255, 255, .4)";
                self.clockContext.strokeStyle = "rgba(" + self.hexToRGB(self.clockColor).join(',') + ", .4)";
                self.clockContext.beginPath();
                self.clockContext.arc(self.sett.button_size / 2, self.sett.button_size / 2, 8, 0, Math.PI * 2, true);
                self.clockContext.stroke();
                self.clockContext.closePath();
                self.clockTimer.css({'opacity':1});
              });
            }
            else {
              this.clockTimer.stop().fadeTo(300, .4, function () {
                self.clockTimer.children().eq(0).css({'left':'-2px'});
                self.clockTimer.css({'filter':'none'});
              });
            }
          }
        }
      }
    },


    //Change Number button selection
    //////////////////////////////////////////////////////////////////////////////////////////////
    toggleButton:function () {
      for (var i = 0; i < this.slide_tot; i++) {
        this.slides[i].buttBG.css({'opacity':this.sett.button_opacity});
        this.slides[i].buttBG.css({'opacity':this.sett.button_opacity, 'left':(this.buttonIE) + 'px', 'top':(this.buttonIE) + 'px', 'width':this.sett.button_size + 'px', 'height':this.sett.button_size + 'px'});
      }
      this.timerReset(false);
      this.slides[this.slide_sel].buttBG.css({'opacity':1, 'left':(this.buttonIE) + 'px', 'top':(this.buttonIE) + 'px', 'width':this.sett.button_size + 'px', 'height':this.sett.button_size + 'px'});
      this.buttonIE > 0 ? this.slides[this.slide_sel].buttIH.css({'left':'0px', 'top':'0px', 'width':this.sett.button_size + 2 + 'px', 'height':this.sett.button_size + 2 + 'px'}) : "";
    },


    //Number Buttons - Animated Chain display
    //////////////////////////////////////////////////////////////////////////////////////////////
    showHideButton:function (i, up) {
      var self = this;
      var _size = this.sett.button_size;
      var _sp = this.sett.button_space;
      var delay, dur, tar_op, sc, ob, bg, sh, children;
      ob = self.slides[i].butt;

      clearTimeout(this.buttonLeaveTimer);
      clearTimeout(self.slides[i].timer);

      bg = ob.bg;
      sh = ob.ih;
      ob.stop();
      if (up) {
        self.numShow = true;
        self.slides[i].butt.show();
        if (ob.css('opacity') == 1)ob.css('opacity', 0);
        delay = (self.slide_tot - i) * (100 / self.slide_tot);
        dur = 20 + ((self.slide_tot - i) * (300 / self.slide_tot));
        tar_op = 1;
        sc = 3;
      }
      else {
        delay = i * (150 / self.slide_tot);
        dur = 20 + (i * (150 / self.slide_tot));
        tar_op = 0;
        sc = 8
      }
      self.slides[i].timer = setTimeout(function () {
        ob.animate({'opacity':tar_op}, {duration:dur,
            step:function (now, fx) {

              var p = parseInt((_size / sc) - (_size / sc * now), 10);
              var s = _size - (p * 2);
              bg.css({'width':s, 'height':s, 'left':p + self.buttonIE, 'top':p + self.buttonIE});
              self.buttonIE > 0 ? sh.css({'width':s + 2, 'height':s + 2, 'left':p, 'top':p}) : "";
              var ih = bg.find('#iconHolder');
              if (ih) {
                ih.css({'height':(s - 2) + 'px'});
                ih.children().eq(0).css({'top':(-p - 1) + 'px'});
              }
              if (self.sett.button_numbers_horizontal) {
                if (self.clockTimer) {
                  if (i == self.slide_tot - 1) {
                    if (up) {
                      if (self.buttonNext) {
                        self.clockTimer.css({'left':(-(_size + _sp) * now) + 'px', 'top':'0px'});
                      }
                    }
                    else {
                      self.clockTimer.css('left',
                        (((_size + _sp) * (self.slide_tot - 1) * (1 - now)) + (_size + _sp) * now) + 'px');
                    }
                    if (self.buttonBack) {
                      self.buttonBack.css('left', (self.clockTimer.position().left - _size - _sp) - self.buttonIE + 'px');
                    }
                  }
                  self.buttonPause.css({'left':parseInt(self.clockTimer.css('left'),
                    10) - self.buttonIE, 'top':parseInt(self.clockTimer.css('top'), 10) - self.buttonIE});
                }
                else {
                  if (i == self.slide_tot - 1) {
                    if (self.buttonBack) {
                      if (up) {
                        if (self.buttonNext) {
                          self.buttonBack.css('left', (-(now * (_size + _sp))) - self.buttonIE + 'px');
                        }
                      }
                      else {
                        if (self.buttonNext) {
                          self.buttonBack.css('left',
                            (((_size + _sp) * (self.slide_tot - 1) * (1 - now)) + (_size + _sp) * now) - self.buttonIE + 'px');
                        }

                      }
                    }
                  }
                }
              }
            },
            complete:function () {
              if (!up) self.slides[i].butt.hide();
            }
          });
      }, delay);
    },


    //Transition 1: Move
    //////////////////////////////////////////////////////////////////////////////////////////////
    move:function () {
      var self = this;
      var id = this.slide_sel;
      this.zSort(2, 1);
      if (this.slides[id].txt) {
        this.slides[id].cap.hide();
        if (this.sett.caption_float_mode) {
          this.slides[id].cap.css('left',
            (this.IE8 ? this.slides[id].cx : this.slides[id].cx + (100 * -this.slide_dir)) + 'px');
        }
      }
      if (this.slide_pr1 !== '') {
        if (this.slides[this.slide_pr1].txt) {
          this.textOut();
        }
      }
      this.slide_drg = false;
      this.slide_fin = false;
      var ent = false;
      this.slide_playing = true;
      this.slides[id].con.stop().show().css({'left':(this.slide_pr1 !== '' ? this.slides[this.slide_pr1].con.position().left + (-this.bW * this.slide_dir) : -this.bW * this.slide_dir)}).animate({
          'left':'0px'}, {duration:self.sett.slide_transition_period + 100,
          easing:'easeInOutQuart',
          step:function (now, fx) {
            if (self.slide_pr1 !== '' && self.slide_pr1 !== id) self.slides[self.slide_pr1].con.stop().css({'left':now + (self.bW * self.slide_dir)});
            if (self.slide_pr2 !== '' && self.slide_pr2 !== id && self.slide_pr2 !== self.slide_pr1) self.slides[self.slide_pr2].con.stop().css({'left':now + (self.bW * 2 * self.slide_dir)});
          },
          complete:function () {
            self.slide_fin = true;
            if (self.slide_sta) {
              self.slide_sta = false;
              self.$cont.css('background-image', 'none');
            }

            if (id == self.slide_sel && self.slides[id].txt) {
              self.animateCaption();
            }
            if (self.autoPlaying) {
              self.startDelayTimer();
            }
          }
        });
    },


    //Transition 2: FadeIn
    //////////////////////////////////////////////////////////////////////////////////////////////
    fade:function () {
      var self = this;
      var id = this.slide_sel;
      this.zSort(2, 1);
      if (this.slides[id].txt) {
        this.slides[id].con.show();
        this.slides[id].cap.hide();
        if (this.sett.caption_float_mode) {
          this.slides[id].cap.css('left',
            (this.IE8 ? this.slides[id].cx : this.slides[id].cx + (100 * -this.slide_dir)) + 'px');
        }
      }
      if (this.slide_pr1 !== '') {
        if (this.slides[this.slide_pr1].txt) {
          this.textOut();
        }
      }
      this.slide_drg = false;
      this.slide_fin = false;

      var ent = false;
      this.slide_playing = true;
      this.slides[id].con.stop().hide().css('left', '0px').fadeIn({
        duration:self.sett.slide_transition_period + 100,
        easing:'easeInOutQuart',
        complete:function () {
          self.slide_fin = true;
          if (self.slide_sta) {
            self.slide_sta = false;
            self.$cont.css('background-image', 'none');
          }
          if (id == self.slide_sel && self.slides[id].txt) {
            self.animateCaption();
          }
          if (self.autoPlaying) {
            self.startDelayTimer();
          }
        }
      });
    },


    //Transition 3: Slide In
    //////////////////////////////////////////////////////////////////////////////////////////////
    slideIn:function () {
      var self = this;
      var id = this.slide_sel;
      this.zSort(2, 1);
      if (this.slides[id].txt) {
        this.slides[id].cap.hide();
        if (this.sett.caption_float_mode) {
          this.slides[id].cap.css('left',
            (this.IE8 ? this.slides[id].cx : this.slides[id].cx + (100 * -this.slide_dir)) + 'px');
        }
      }
      if (this.slide_pr1 !== '') {
        if (this.slides[this.slide_pr1].txt) {
          this.textOut();
        }
      }
      this.slide_drg = false;
      this.slide_fin = false;
      var ent = false;
      this.slide_playing = true;
      this.slides[id].con.stop().show().clearQueue().css({'left':(this.slide_dir < 0 ? this.bW + 30 : -this.bW - 30) + 'px'});
      if (this.IE8) {
        this.slides[id].txt.stop().clearQueue();
        this.slides[id].cap.stop().clearQueue();
      }
      this.slides[id].con.css(this.shProp, '0px 0px 45px 0px #000000');
      this.slides[id].con.stop().clearQueue().animate({
          'left':'0px'}, {duration:self.sett.slide_transition_period + 100,
          easing:'easeInOutQuart',
          complete:function () {
            self.slide_fin = true;
            if (self.slide_sta) {
              self.slide_sta = false;
              self.$cont.css('background-image', 'none');
            }
            if (id == self.slide_sel && self.slides[id].txt) {
              self.animateCaption();
            }
            if (self.autoPlaying) {
              self.startDelayTimer();
            }
            self.slides[id].con.css(self.shProp, 'none');
          }
        });
    },


    //Transition 4: Slide Out
    //////////////////////////////////////////////////////////////////////////////////////////////
    slideOut:function () {
      var self = this;
      var id = this.slide_sel;
      this.zSort(1, 2);
      if (this.slides[id].txt) {
        this.slides[id].cap.hide();
        if (this.sett.caption_float_mode) {
          this.slides[id].cap.css('left',
            (this.IE8 ? this.slides[id].cx : this.slides[id].cx + (100 * -this.slide_dir)) + 'px');
        }
      }
      if (this.slide_pr1 !== '') {
        if (this.slides[this.slide_pr1].txt) {
          this.textOut();
        }
      }
      this.slide_drg = false;
      this.slide_fin = false;
      var ent = false;
      this.slide_playing = true;
      if (this.slide_pr1 !== '') {
        this.slides[id].con.stop().show().clearQueue().css({'left':'0px'});
        if (this.IE8) {
          this.slides[this.slide_pr1].txt.stop().clearQueue();
          this.slides[this.slide_pr1].cap.stop().clearQueue();
        }
        this.slides[id].con.css(this.shProp, '0px 0px 45px 0px #000000');
        this.slides[this.slide_pr1].con.stop().clearQueue().animate({
            'left':this.slide_dir * (this.bW + 30)}, {duration:self.sett.slide_transition_period,
            easing:'easeInOutQuart',
            complete:function () {
              self.slide_fin = true;
              if (self.slide_sta) {
                self.slide_sta = false;
                self.$cont.css('background-image', 'none');
              }
              if (id == self.slide_sel && self.slides[id].txt) {
                self.animateCaption();
              }
              if (self.autoPlaying) {
                self.startDelayTimer();
              }
              self.slides[self.slide_pr1].con.css(self.shProp, 'none');

            }
          });
      }
      else {
        this.slides[id].con.stop().show().clearQueue().css({'left':this.bW + 'px'}).animate({
            'left':'0px'}, {duration:self.sett.slide_transition_period,
            easing:'easeInOutQuart',
            complete:function () {
              self.slide_fin = true;
              if (id == self.slide_sel && self.slides[id].txt) {
                self.animateCaption();
              }
              if (self.autoPlaying) {
                self.startDelayTimer();
              }
            }
          });
      }
    }

  } //End - TBMain.prototype


  $.fn.TransBanner = function (options) {
    return this.each(function () {
      var banner = $(this);
      if (!banner.data('TransBanner')) {
        banner.data('TransBanner', new TBMain(banner, options));
      }
    });
  };

})(jQuery);


/* Below is Mario Klingemann's Superfast Blur. Note that this is Modified version that made to work with Translucent Banner.

 Superfast Blur - a fast Box Blur For Canvas

 Version: 	0.5
 Author:		Mario Klingemann
 Contact: 	mario@quasimondo.com
 Website:	http://www.quasimondo.com/BoxBlurForCanvas
 Twitter:	@quasimondo

 In case you find this class useful - especially in commercial projects -
 I am not totally unhappy for a small donation to my PayPal account
 mario@quasimondo.de

 Or support me on flattr:
 https://flattr.com/thing/140066/Superfast-Blur-a-pretty-fast-Box-Blur-Effect-for-CanvasJavascript

 Copyright (c) 2011 Mario Klingemann

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
 */
var mul_table = [ 1, 57, 41, 21, 203, 34, 97, 73, 227, 91, 149, 62, 105, 45, 39, 137, 241, 107, 3, 173, 39, 71, 65, 238, 219, 101, 187, 87, 81, 151, 141, 133, 249, 117, 221, 209, 197, 187, 177, 169, 5, 153, 73, 139, 133, 127, 243, 233, 223, 107, 103, 99, 191, 23, 177, 171, 165, 159, 77, 149, 9, 139, 135, 131, 253, 245, 119, 231, 224, 109, 211, 103, 25, 195, 189, 23, 45, 175, 171, 83, 81, 79, 155, 151, 147, 9, 141, 137, 67, 131, 129, 251, 123, 30, 235, 115, 113, 221, 217, 53, 13, 51, 50, 49, 193, 189, 185, 91, 179, 175, 43, 169, 83, 163, 5, 79, 155, 19, 75, 147, 145, 143, 35, 69, 17, 67, 33, 65, 255, 251, 247, 243, 239, 59, 29, 229, 113, 111, 219, 27, 213, 105, 207, 51, 201, 199, 49, 193, 191, 47, 93, 183, 181, 179, 11, 87, 43, 85, 167, 165, 163, 161, 159, 157, 155, 77, 19, 75, 37, 73, 145, 143, 141, 35, 138, 137, 135, 67, 33, 131, 129, 255, 63, 250, 247, 61, 121, 239, 237, 117, 29, 229, 227, 225, 111, 55, 109, 216, 213, 211, 209, 207, 205, 203, 201, 199, 197, 195, 193, 48, 190, 47, 93, 185, 183, 181, 179, 178, 176, 175, 173, 171, 85, 21, 167, 165, 41, 163, 161, 5, 79, 157, 78, 154, 153, 19, 75, 149, 74, 147, 73, 144, 143, 71, 141, 140, 139, 137, 17, 135, 134, 133, 66, 131, 65, 129, 1];


var shg_table = [0, 9, 10, 10, 14, 12, 14, 14, 16, 15, 16, 15, 16, 15, 15, 17, 18, 17, 12, 18, 16, 17, 17, 19, 19, 18, 19, 18, 18, 19, 19, 19, 20, 19, 20, 20, 20, 20, 20, 20, 15, 20, 19, 20, 20, 20, 21, 21, 21, 20, 20, 20, 21, 18, 21, 21, 21, 21, 20, 21, 17, 21, 21, 21, 22, 22, 21, 22, 22, 21, 22, 21, 19, 22, 22, 19, 20, 22, 22, 21, 21, 21, 22, 22, 22, 18, 22, 22, 21, 22, 22, 23, 22, 20, 23, 22, 22, 23, 23, 21, 19, 21, 21, 21, 23, 23, 23, 22, 23, 23, 21, 23, 22, 23, 18, 22, 23, 20, 22, 23, 23, 23, 21, 22, 20, 22, 21, 22, 24, 24, 24, 24, 24, 22, 21, 24, 23, 23, 24, 21, 24, 23, 24, 22, 24, 24, 22, 24, 24, 22, 23, 24, 24, 24, 20, 23, 22, 23, 24, 24, 24, 24, 24, 24, 24, 23, 21, 23, 22, 23, 24, 24, 24, 22, 24, 24, 24, 23, 22, 24, 24, 25, 23, 25, 25, 23, 24, 25, 25, 24, 22, 25, 25, 25, 24, 23, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 23, 25, 23, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 24, 22, 25, 25, 23, 25, 25, 20, 24, 25, 24, 25, 25, 22, 24, 25, 24, 25, 24, 25, 25, 24, 25, 25, 25, 25, 22, 25, 25, 25, 24, 25, 24, 25, 18];


function boxBlurImage(img, left, top, imgW, imgH, canvas, radius, blurAlphaChannel, iterations) {

  //var img = document.getElementById( imageID );
  //var w = img.naturalWidth;
  //var h = img.naturalHeight;

  var w = imgW;
  var h = imgH;

  //var canvas = document.getElementById( canvasID );

  canvas.style.width = w + "px";
  canvas.style.height = h + "px";
  canvas.width = w;
  canvas.height = h;

  var context = canvas.getContext("2d");
  context.clearRect(0, 0, w, h);

  context.drawImage(img, -left, -top);


  if (isNaN(radius) || radius < 1) return;

  boxBlurCanvasRGB(canvas, 0, 0, w, h, radius, iterations);

  context.restore();

}


function boxBlurCanvasRGB(canvas, top_x, top_y, width, height, radius, iterations) {
  if (isNaN(radius) || radius < 1) return;

  radius |= 0;

  if (isNaN(iterations)) iterations = 1;
  iterations |= 0;
  if (iterations > 3) iterations = 3;
  if (iterations < 1) iterations = 1;

  //var canvas  = document.getElementById( id );
  var context = canvas.getContext("2d");

  var imageData;

  try {
    try {
      imageData = context.getImageData(top_x, top_y, width, height);
    } catch (e) {

      // NOTE: this part is supposedly only needed if you want to work with local files
      // so it might be okay to remove the whole try/catch block and just use
      // imageData = context.getImageData( top_x, top_y, width, height );
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
        imageData = context.getImageData(top_x, top_y, width, height);
      } catch (e) {

        //throw new Error("unable to access local image data: " + e);
        return;
      }
    }
  } catch (e) {

    // throw new Error("unable to access image data: " + e);
    return;
  }

  var pixels = imageData.data;

  var rsum, gsum, bsum, asum, x, y, i, p, p1, p2, yp, yi, yw, idx;
  var wm = width - 1;
  var hm = height - 1;
  var wh = width * height;
  var rad1 = radius + 1;

  var r = [];
  var g = [];
  var b = [];

  var mul_sum = mul_table[radius];
  var shg_sum = shg_table[radius];

  var vmin = [];
  var vmax = [];

  while (iterations-- > 0) {
    yw = yi = 0;

    for (y = 0; y < height; y++) {
      rsum = pixels[yw] * rad1;
      gsum = pixels[yw + 1] * rad1;
      bsum = pixels[yw + 2] * rad1;

      for (i = 1; i <= radius; i++) {
        p = yw + (((i > wm ? wm : i )) << 2 );
        rsum += pixels[p++];
        gsum += pixels[p++];
        bsum += pixels[p++];
      }

      for (x = 0; x < width; x++) {
        r[yi] = rsum;
        g[yi] = gsum;
        b[yi] = bsum;

        if (y == 0) {
          vmin[x] = ( ( p = x + rad1) < wm ? p : wm ) << 2;
          vmax[x] = ( ( p = x - radius) > 0 ? p << 2 : 0 );
        }

        p1 = yw + vmin[x];
        p2 = yw + vmax[x];

        rsum += pixels[p1++] - pixels[p2++];
        gsum += pixels[p1++] - pixels[p2++];
        bsum += pixels[p1++] - pixels[p2++];

        yi++;
      }
      yw += ( width << 2 );
    }

    for (x = 0; x < width; x++) {
      yp = x;
      rsum = r[yp] * rad1;
      gsum = g[yp] * rad1;
      bsum = b[yp] * rad1;

      for (i = 1; i <= radius; i++) {
        yp += ( i > hm ? 0 : width );
        rsum += r[yp];
        gsum += g[yp];
        bsum += b[yp];
      }

      yi = x << 2;
      for (y = 0; y < height; y++) {
        pixels[yi] = (rsum * mul_sum) >>> shg_sum;
        pixels[yi + 1] = (gsum * mul_sum) >>> shg_sum;
        pixels[yi + 2] = (bsum * mul_sum) >>> shg_sum;

        if (x == 0) {
          vmin[y] = ( ( p = y + rad1) < hm ? p : hm ) * width;
          vmax[y] = ( ( p = y - radius) > 0 ? p * width : 0 );
        }

        p1 = x + vmin[y];
        p2 = x + vmax[y];

        rsum += r[p1] - r[p2];
        gsum += g[p1] - g[p2];
        bsum += b[p1] - b[p2];

        yi += width << 2;
      }
    }
  }
  context.putImageData(imageData, top_x, top_y);
}
;
(function ($) {

/**
 * Terminology:
 *
 *   "Link" means "Everything which is in flag.tpl.php" --and this may contain
 *   much more than the <A> element. On the other hand, when we speak
 *   specifically of the <A> element, we say "element" or "the <A> element".
 */

/**
 * The main behavior to perform AJAX toggling of links.
 */
Drupal.flagLink = function(context) {
  /**
   * Helper function. Updates a link's HTML with a new one.
   *
   * @param element
   *   The <A> element.
   * @return
   *   The new link.
   */
  function updateLink(element, newHtml) {
    var $newLink = $(newHtml);

    // Initially hide the message so we can fade it in.
    $('.flag-message', $newLink).css('display', 'none');

    // Reattach the behavior to the new <A> element. This element
    // is either whithin the wrapper or it is the outer element itself.
    var $nucleus = $newLink.is('a') ? $newLink : $('a.flag', $newLink);
    $nucleus.addClass('flag-processed').click(flagClick);

    // Find the wrapper of the old link.
    var $wrapper = $(element).parents('.flag-wrapper:first');
    if ($wrapper.length == 0) {
      // If no ancestor wrapper was found, or if the 'flag-wrapper' class is
      // attached to the <a> element itself, then take the element itself.
      $wrapper = $(element);
    }
    // Replace the old link with the new one.
    $wrapper.after($newLink).remove();
    Drupal.attachBehaviors($newLink.get(0));

    $('.flag-message', $newLink).fadeIn();
    setTimeout(function(){ $('.flag-message', $newLink).fadeOut() }, 3000);
    return $newLink.get(0);
  }

  /**
   * A click handler that is attached to all <A class="flag"> elements.
   */
  function flagClick() {
    // 'this' won't point to the element when it's inside the ajax closures,
    // so we reference it using a variable.
    var element = this;

    // While waiting for a server response, the wrapper will have a
    // 'flag-waiting' class. Themers are thus able to style the link
    // differently, e.g., by displaying a throbber.
    var $wrapper = $(element).parents('.flag-wrapper');
    if ($wrapper.is('.flag-waiting')) {
      // Guard against double-clicks.
      return false;
    }
    $wrapper.addClass('flag-waiting');

    // Hide any other active messages.
    $('span.flag-message:visible').fadeOut();

    // Send POST request
    $.ajax({
      type: 'POST',
      url: element.href,
      data: { js: true },
      dataType: 'json',
      success: function (data) {
        if (data.status) {
          // Success.
          data.link = $wrapper.get(0);
          $.event.trigger('flagGlobalBeforeLinkUpdate', [data]);
          if (!data.preventDefault) { // A handler may cancel updating the link.
            data.link = updateLink(element, data.newLink);
          }
          $.event.trigger('flagGlobalAfterLinkUpdate', [data]);
        }
        else {
          // Failure.
          alert(data.errorMessage);
          $wrapper.removeClass('flag-waiting');
        }
      },
      error: function (xmlhttp) {
        alert('An HTTP error '+ xmlhttp.status +' occurred.\n'+ element.href);
        $wrapper.removeClass('flag-waiting');
      }
    });
    return false;
  }

  $('a.flag-link-toggle:not(.flag-processed)', context).addClass('flag-processed').click(flagClick);
};

/**
 * Prevent anonymous flagging unless the user has JavaScript enabled.
 */
Drupal.flagAnonymousLinks = function(context) {
  $('a.flag:not(.flag-anonymous-processed)', context).each(function() {
    this.href += (this.href.match(/\?/) ? '&' : '?') + 'has_js=1';
    $(this).addClass('flag-anonymous-processed');
  });
}

String.prototype.flagNameToCSS = function() {
  return this.replace(/_/g, '-');
}

/**
 * A behavior specifically for anonymous users. Update links to the proper state.
 */
Drupal.flagAnonymousLinkTemplates = function(context) {
  // Swap in current links. Cookies are set by PHP's setcookie() upon flagging.

  var templates = Drupal.settings.flag.templates;

  // Build a list of user-flags.
  var userFlags = Drupal.flagCookie('flags');
  if (userFlags) {
    userFlags = userFlags.split('+');
    for (var n in userFlags) {
      var flagInfo = userFlags[n].match(/(\w+)_(\d+)/);
      var flagName = flagInfo[1];
      var contentId = flagInfo[2];
      // User flags always default to off and the JavaScript toggles them on.
      if (templates[flagName + '_' + contentId]) {
        $('.flag-' + flagName.flagNameToCSS() + '-' + contentId, context).after(templates[flagName + '_' + contentId]).remove();
      }
    }
  }

  // Build a list of global flags.
  var globalFlags = document.cookie.match(/flag_global_(\w+)_(\d+)=([01])/g);
  if (globalFlags) {
    for (var n in globalFlags) {
      var flagInfo = globalFlags[n].match(/flag_global_(\w+)_(\d+)=([01])/);
      var flagName = flagInfo[1];
      var contentId = flagInfo[2];
      var flagState = (flagInfo[3] == '1') ? 'flag' : 'unflag';
      // Global flags are tricky, they may or may not be flagged in the page
      // cache. The template always contains the opposite of the current state.
      // So when checking global flag cookies, we need to make sure that we
      // don't swap out the link when it's already in the correct state.
      if (templates[flagName + '_' + contentId]) {
        $('.flag-' + flagName.flagNameToCSS() + '-' + contentId, context).each(function() {
          if ($(this).find('.' + flagState + '-action').size()) {
            $(this).after(templates[flagName + '_' + contentId]).remove();
          }
        });
      }
    }
  }
}

/**
 * Utility function used to set Flag cookies.
 *
 * Note this is a direct copy of the jQuery cookie library.
 * Written by Klaus Hartl.
 */
Drupal.flagCookie = function(name, value, options) {
  if (typeof value != 'undefined') { // name and value given, set cookie
    options = options || {};
    if (value === null) {
      value = '';
      options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
      options.expires = -1;
    }
    var expires = '';
    if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
      var date;
      if (typeof options.expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
      } else {
        date = options.expires;
      }
      expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
    }
    // NOTE Needed to parenthesize options.path and options.domain
    // in the following expressions, otherwise they evaluate to undefined
    // in the packed version for some reason...
    var path = options.path ? '; path=' + (options.path) : '';
    var domain = options.domain ? '; domain=' + (options.domain) : '';
    var secure = options.secure ? '; secure' : '';
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
  } else { // only name given, get cookie
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
};

Drupal.behaviors.flagLink = {};
Drupal.behaviors.flagLink.attach = function(context) {
  // For anonymous users with the page cache enabled, swap out links with their
  // current state for the user.
  if (Drupal.settings.flag && Drupal.settings.flag.templates) {
    Drupal.flagAnonymousLinkTemplates(context);
  }

  // For all anonymous users, require JavaScript for flagging to prevent spiders
  // from flagging things inadvertently.
  if (Drupal.settings.flag && Drupal.settings.flag.anonymous) {
    Drupal.flagAnonymousLinks(context);
  }

  // On load, bind the click behavior for all links on the page.
  Drupal.flagLink(context);
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
