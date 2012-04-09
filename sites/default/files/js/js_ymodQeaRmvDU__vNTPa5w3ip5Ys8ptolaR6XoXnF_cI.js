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
/**
 * @file
 *
 * Implement a modal form.
 *
 * @see modal.inc for documentation.
 *
 * This javascript relies on the CTools ajax responder.
 */

(function ($) {
  // Make sure our objects are defined.
  Drupal.CTools = Drupal.CTools || {};
  Drupal.CTools.Modal = Drupal.CTools.Modal || {};

  /**
   * Display the modal
   *
   * @todo -- document the settings.
   */
  Drupal.CTools.Modal.show = function (choice) {
    var opts = {};

    if (choice && typeof choice == 'string' && Drupal.settings[choice]) {
      // This notation guarantees we are actually copying it.
      $.extend(true, opts, Drupal.settings[choice]);
    }
    else {
      if (choice) {
        $.extend(true, opts, choice);
      }
    }

    var defaults = {
      modalTheme:'CToolsModalDialog',
      throbberTheme:'CToolsModalThrobber',
      animation:'show',
      animationSpeed:'fast',
      modalSize:{
        type:'scale',
        width:.8,
        height:.8,
        addWidth:0,
        addHeight:0,
        // How much to remove from the inner content to make space for the
        // theming.
        contentRight:25,
        contentBottom:45
      },
      modalOptions:{
        opacity:.55,
        background:'#fff'
      }
    };

    var settings = {};
    $.extend(true, settings, defaults, Drupal.settings.CToolsModal, opts);

    if (Drupal.CTools.Modal.currentSettings && Drupal.CTools.Modal.currentSettings != settings) {
      Drupal.CTools.Modal.modal.remove();
      Drupal.CTools.Modal.modal = null;
    }

    Drupal.CTools.Modal.currentSettings = settings;

    var resize = function (e) {
      // When creating the modal, it actually exists only in a theoretical
      // place that is not in the DOM. But once the modal exists, it is in the
      // DOM so the context must be set appropriately.
      var context = e ? document : Drupal.CTools.Modal.modal;

      if (Drupal.CTools.Modal.currentSettings.modalSize.type == 'scale') {
        var width = $(window).width() * Drupal.CTools.Modal.currentSettings.modalSize.width;
        var height = $(window).height() * Drupal.CTools.Modal.currentSettings.modalSize.height;
      }
      else {
        var width = Drupal.CTools.Modal.currentSettings.modalSize.width;
        var height = Drupal.CTools.Modal.currentSettings.modalSize.height;
      }

      // Use the additionol pixels for creating the width and height.
      $('div.ctools-modal-content', context).css({
        'width':width + Drupal.CTools.Modal.currentSettings.modalSize.addWidth + 'px',
        'height':height + Drupal.CTools.Modal.currentSettings.modalSize.addHeight + 'px'
      });
      $('div.ctools-modal-content .modal-content', context).css({
        'width':(width - Drupal.CTools.Modal.currentSettings.modalSize.contentRight) + 'px',
        'height':(height - Drupal.CTools.Modal.currentSettings.modalSize.contentBottom) + 'px'
      });
    }

    if (!Drupal.CTools.Modal.modal) {
      Drupal.CTools.Modal.modal = $(Drupal.theme(settings.modalTheme));
      if (settings.modalSize.type == 'scale') {
        $(window).bind('resize', resize);
      }
    }

    resize();

    $('span.modal-title', Drupal.CTools.Modal.modal).html(Drupal.CTools.Modal.currentSettings.loadingText);
    Drupal.CTools.Modal.modalContent(Drupal.CTools.Modal.modal, settings.modalOptions, settings.animation,
      settings.animationSpeed);
    $('#modalContent .modal-content').html(Drupal.theme(settings.throbberTheme));
  };

  /**
   * Hide the modal
   */
  Drupal.CTools.Modal.dismiss = function () {
    if (Drupal.CTools.Modal.modal) {
      Drupal.CTools.Modal.unmodalContent(Drupal.CTools.Modal.modal);
    }
  };

  /**
   * Provide the HTML to create the modal dialog.
   */
  Drupal.theme.prototype.CToolsModalDialog = function () {
    var html = ''
    html += '  <div id="ctools-modal">'
    html += '    <div class="ctools-modal-content">' // panels-modal-content
    html += '      <div class="modal-header">';
    html += '        <a class="close" href="#">';
    html += Drupal.CTools.Modal.currentSettings.closeText + Drupal.CTools.Modal.currentSettings.closeImage;
    html += '        </a>';
    html += '        <span id="modal-title" class="modal-title">&nbsp;</span>';
    html += '      </div>';
    html += '      <div id="modal-content" class="modal-content">';
    html += '      </div>';
    html += '    </div>';
    html += '  </div>';

    return html;
  }

  /**
   * Provide the HTML to create the throbber.
   */
  Drupal.theme.prototype.CToolsModalThrobber = function () {
    var html = '';
    html += '  <div id="modal-throbber">';
    html += '    <div class="modal-throbber-wrapper">';
    html += Drupal.CTools.Modal.currentSettings.throbber;
    html += '    </div>';
    html += '  </div>';

    return html;
  };

  /**
   * Figure out what settings string to use to display a modal.
   */
  Drupal.CTools.Modal.getSettings = function (object) {
    var match = $(object).attr('class').match(/ctools-modal-(\S+)/);
    if (match) {
      return match[1];
    }
  }

  /**
   * Click function for modals that can be cached.
   */
  Drupal.CTools.Modal.clickAjaxCacheLink = function () {
    Drupal.CTools.Modal.show(Drupal.CTools.Modal.getSettings(this));
    return Drupal.CTools.AJAX.clickAJAXCacheLink.apply(this);
  };

  /**
   * Handler to prepare the modal for the response
   */
  Drupal.CTools.Modal.clickAjaxLink = function () {
    Drupal.CTools.Modal.show(Drupal.CTools.Modal.getSettings(this));
    return false;
  };

  /**
   * Submit responder to do an AJAX submit on all modal forms.
   */
  Drupal.CTools.Modal.submitAjaxForm = function (e) {
    var url = $(this).attr('action');
    var form = $(this);

    setTimeout(function () {
      Drupal.CTools.AJAX.ajaxSubmit(form, url);
    }, 1);
    return false;
  }

  /**
   * Bind links that will open modals to the appropriate function.
   */
  Drupal.behaviors.ZZCToolsModal = {
    attach:function (context) {
      // Bind links
      // Note that doing so in this order means that the two classes can be
      // used together safely.
      /*
       * @todo remimplement the warm caching feature
       $('a.ctools-use-modal-cache:not(.ctools-use-modal-processed)', context)
       .addClass('ctools-use-modal-processed')
       .click(Drupal.CTools.Modal.clickAjaxCacheLink)
       .each(function () {
       Drupal.CTools.AJAX.warmCache.apply(this);
       });
       */

      $('a.ctools-use-modal:not(.ctools-use-modal-processed)',
        context).addClass('ctools-use-modal-processed').click(Drupal.CTools.Modal.clickAjaxLink).each(function () {
          // Create a drupal ajax object
          var element_settings = {};
          if ($(this).attr('href')) {
            element_settings.url = $(this).attr('href');
            element_settings.event = 'click';
            element_settings.progress = { type:'throbber' };
          }
          var base = $(this).attr('href');
          Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);

          // Attach the display behavior to the ajax object
        });

      // Bind buttons
      $('input.ctools-use-modal:not(.ctools-use-modal-processed), button.ctools-use-modal:not(.ctools-use-modal-processed)',
        context).addClass('ctools-use-modal-processed').click(Drupal.CTools.Modal.clickAjaxLink).each(function () {
          var button = this;
          var element_settings = {};

          // AJAX submits specified in this manner automatically submit to the
          // normal form action.
          element_settings.url = Drupal.CTools.Modal.findURL(this);
          element_settings.event = 'click';

          var base = $(this).attr('id');
          Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);

          // Make sure changes to settings are reflected in the URL.
          $('.' + $(button).attr('id') + '-url').change(function () {
            Drupal.ajax[base].options.url = Drupal.CTools.Modal.findURL(button);
          });
        });

      // Bind our custom event to the form submit
      $('#modal-content form:not(.ctools-use-modal-processed)',
        context).addClass('ctools-use-modal-processed').each(function () {
          var element_settings = {};

          element_settings.url = $(this).attr('action');
          element_settings.event = 'submit';
          element_settings.progress = { 'type':'throbber' }
          var base = $(this).attr('id');

          Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
          Drupal.ajax[base].form = $(this);

          $('input[type=submit], button', this).click(function () {
            Drupal.ajax[base].element = this;
            this.form.clk = this;
          });

        });
    }
  };

  // The following are implementations of AJAX responder commands.

  /**
   * AJAX responder command to place HTML within the modal.
   */
  Drupal.CTools.Modal.modal_display = function (ajax, response, status) {
    if ($('#modalContent').length == 0) {
      Drupal.CTools.Modal.show(Drupal.CTools.Modal.getSettings(ajax.element));
    }
    $('#modal-title').html(response.title);
    $('#modal-content').html(response.output);
    Drupal.attachBehaviors();
  }

  /**
   * AJAX responder command to dismiss the modal.
   */
  Drupal.CTools.Modal.modal_dismiss = function (command) {
    Drupal.CTools.Modal.dismiss();
    $('link.ctools-temporary-css').remove();
  }

  /**
   * Display loading
   */
    //Drupal.CTools.AJAX.commands.modal_loading = function(command) {
  Drupal.CTools.Modal.modal_loading = function (command) {
    Drupal.CTools.Modal.modal_display({
      output:Drupal.theme(Drupal.CTools.Modal.currentSettings.throbberTheme),
      title:Drupal.CTools.Modal.currentSettings.loadingText
    });
  }

  /**
   * Find a URL for an AJAX button.
   *
   * The URL for this gadget will be composed of the values of items by
   * taking the ID of this item and adding -url and looking for that
   * class. They need to be in the form in order since we will
   * concat them all together using '/'.
   */
  Drupal.CTools.Modal.findURL = function (item) {
    var url = '';
    var url_class = '.' + $(item).attr('id') + '-url';
    $(url_class).each(function () {
        if (url && $(this).val()) {
          url += '/';
        }
        url += $(this).val();
      });
    return url;
  };


  /**
   * modalContent
   * @param content string to display in the content box
   * @param css obj of css attributes
   * @param animation (fadeIn, slideDown, show)
   * @param speed (valid animation speeds slow, medium, fast or # in ms)
   */
  Drupal.CTools.Modal.modalContent = function (content, css, animation, speed) {
    // If our animation isn't set, make it just show/pop
    if (!animation) {
      animation = 'show';
    }
    else {
      // If our animation isn't "fadeIn" or "slideDown" then it always is show
      if (animation != 'fadeIn' && animation != 'slideDown') {
        animation = 'show';
      }
    }

    if (!speed) {
      speed = 'fast';
    }

    // Build our base attributes and allow them to be overriden
    css = jQuery.extend({
      position:'absolute',
      left:'0px',
      margin:'0px',
      background:'#000',
      opacity:'.55'
    }, css);

    // Add opacity handling for IE.
    css.filter = 'alpha(opacity=' + (100 * css.opacity) + ')';
    content.hide();

    // if we already ahve a modalContent, remove it
    if ($('#modalBackdrop')) {
      $('#modalBackdrop').remove();
    }
    if ($('#modalContent')) {
      $('#modalContent').remove();
    }

    // position code lifted from http://www.quirksmode.org/viewport/compatibility.html
    if (self.pageYOffset) { // all except Explorer
      var wt = self.pageYOffset;
    }
    else {
      if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
        var wt = document.documentElement.scrollTop;
      }
      else {
        if (document.body) { // all other Explorers
          var wt = document.body.scrollTop;
        }
      }
    }

    // Get our dimensions

    // Get the docHeight and (ugly hack) add 50 pixels to make sure we dont have a *visible* border below our div
    var docHeight = $(document).height() + 50;
    var docWidth = $(document).width();
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    if (docHeight < winHeight) {
      docHeight = winHeight;
    }

    // Create our divs
    $('body').append('<div id="modalBackdrop" style="z-index: 1000; display: none;"></div><div id="modalContent" style="z-index: 1001; position: absolute;">' + $(content).html() + '</div>');

    // Keyboard and focus event handler ensures focus stays on modal elements only
    modalEventHandler = function (event) {
      target = null;
      if (event) { //Mozilla
        target = event.target;
      }
      else { //IE
        event = window.event;
        target = event.srcElement;
      }

      var parents = $(target).parents().get();
      for (var i in $(target).parents().get()) {
        var position = $(parents[i]).css('position');
        if (position == 'absolute' || position == 'fixed') {
          return true;
        }
      }
      if ($(target).filter('*:visible').parents('#modalContent').size()) {
        // allow the event only if target is a visible child node of #modalContent
        return true;
      }
      if ($('#modalContent')) {
        $('#modalContent').get(0).focus();
      }
      return false;
    };
    $('body').bind('focus', modalEventHandler);
    $('body').bind('keypress', modalEventHandler);

    // Create our content div, get the dimensions, and hide it
    var modalContent = $('#modalContent').css('top', '-1000px');
    var mdcTop = wt + ( winHeight / 2 ) - (  modalContent.outerHeight() / 2);
    var mdcLeft = ( winWidth / 2 ) - ( modalContent.outerWidth() / 2);
    $('#modalBackdrop').css(css).css('top', 0).css('height', docHeight + 'px').css('width', docWidth + 'px').show();
    modalContent.css({top:mdcTop + 'px', left:mdcLeft + 'px'}).hide()[animation](speed);

    // Bind a click for closing the modalContent
    modalContentClose = function () {
      close();
      return false;
    };
    $('.close').bind('click', modalContentClose);

    // Close the open modal content and backdrop
    function close() {
      // Unbind the events
      $(window).unbind('resize', modalContentResize);
      $('body').unbind('focus', modalEventHandler);
      $('body').unbind('keypress', modalEventHandler);
      $('.close').unbind('click', modalContentClose);
      $(document).trigger('CToolsDetachBehaviors', $('#modalContent'));

      // Set our animation parameters and use them
      if (animation == 'fadeIn') {
        animation = 'fadeOut';
      }
      if (animation == 'slideDown') {
        animation = 'slideUp';
      }
      if (animation == 'show') {
        animation = 'hide';
      }

      // Close the content
      modalContent.hide()[animation](speed);

      // Remove the content
      $('#modalContent').remove();
      $('#modalBackdrop').remove();
    }

    ;

    // Move and resize the modalBackdrop and modalContent on resize of the window
    modalContentResize = function () {
      // Get our heights
      var docHeight = $(document).height();
      var docWidth = $(document).width();
      var winHeight = $(window).height();
      var winWidth = $(window).width();
      if (docHeight < winHeight) {
        docHeight = winHeight;
      }

      // Get where we should move content to
      var modalContent = $('#modalContent');
      var mdcTop = ( winHeight / 2 ) - (  modalContent.outerHeight() / 2);
      var mdcLeft = ( winWidth / 2 ) - ( modalContent.outerWidth() / 2);

      // Apply the changes
      $('#modalBackdrop').css('height', docHeight + 'px').css('width', docWidth + 'px').show();
      modalContent.css('top', mdcTop + 'px').css('left', mdcLeft + 'px').show();
    };
    $(window).bind('resize', modalContentResize);

    $('#modalContent').focus();
  };

  /**
   * unmodalContent
   * @param content (The jQuery object to remove)
   * @param animation (fadeOut, slideUp, show)
   * @param speed (valid animation speeds slow, medium, fast or # in ms)
   */
  Drupal.CTools.Modal.unmodalContent = function (content, animation, speed) {
    // If our animation isn't set, make it just show/pop
    if (!animation) {
      var animation = 'show';
    }
    else {
      // If our animation isn't "fade" then it always is show
      if (( animation != 'fadeOut' ) && ( animation != 'slideUp')) {
        animation = 'show';
      }
    }
    // Set a speed if we dont have one
    if (!speed) {
      var speed = 'fast';
    }

    // Unbind the events we bound
    $(window).unbind('resize', modalContentResize);
    $('body').unbind('focus', modalEventHandler);
    $('body').unbind('keypress', modalEventHandler);
    $('.close').unbind('click', modalContentClose);
    $(document).trigger('CToolsDetachBehaviors', $('#modalContent'));

    // jQuery magic loop through the instances and run the animations or removal.
    content.each(function () {
      if (animation == 'fade') {
        $('#modalContent').fadeOut(speed, function () {
          $('#modalBackdrop').fadeOut(speed, function () {
            $(this).remove();
          });
          $(this).remove();
        });
      }
      else {
        if (animation == 'slide') {
          $('#modalContent').slideUp(speed, function () {
            $('#modalBackdrop').slideUp(speed, function () {
              $(this).remove();
            });
            $(this).remove();
          });
        }
        else {
          $('#modalContent').remove();
          $('#modalBackdrop').remove();
        }
      }
    });
  };

  $(function () {
    Drupal.ajax.prototype.commands.modal_display = Drupal.CTools.Modal.modal_display;
    Drupal.ajax.prototype.commands.modal_dismiss = Drupal.CTools.Modal.modal_dismiss;
  });

})(jQuery);
;
// Ensure the $ alias is owned by jQuery.
(function ($) {

  // randomly lock a pane.
  // @debug only
  Drupal.settings.Panels = Drupal.settings.Panels || {};
  Drupal.settings.Panels.RegionLock = {
    10:{ 'top':false, 'left':true, 'middle':true }
  }

  Drupal.PanelsIPE = {
    editors:{},
    bindClickDelete:function (context) {
      $('a.pane-delete:not(.pane-delete-processed)', context).addClass('pane-delete-processed').click(function () {
          if (confirm('Remove this pane?')) {
            $(this).parents('div.panels-ipe-portlet-wrapper').fadeOut('medium', function () {
              $(this).empty().remove();
            });
            $(this).parents('div.panels-ipe-display-container').addClass('changed');
          }
          return false;
        });
    }
  }

  // A ready function should be sufficient for this, at least for now
  $(function () {
    $.each(Drupal.settings.PanelsIPECacheKeys, function () {
      Drupal.PanelsIPE.editors[this] = new DrupalPanelsIPE(this, Drupal.settings.PanelsIPESettings[this]);
      Drupal.PanelsIPE.editors[this].showContainer();
    });
  });

  Drupal.behaviors.PanelsIPE = {
    attach:function (context) {
      Drupal.PanelsIPE.bindClickDelete(context);
    }
  };

  /**
   * Base object (class) definition for the Panels In-Place Editor.
   *
   * A new instance of this object is instanciated for every unique IPE on a given
   * page.
   *
   * Note that this form is provisional, and we hope to replace it with a more
   * flexible, loosely-coupled model that utilizes separate controllers for the
   * discrete IPE elements. This will result in greater IPE flexibility.
   */
  function DrupalPanelsIPE(cache_key, cfg) {
    var ipe = this;
    this.key = cache_key;
    this.state = {};
    this.container = $('#panels-ipe-control-container');
    this.control = $('div#panels-ipe-control-' + cache_key);
    this.initButton = $('div.panels-ipe-startedit', this.control);
    this.cfg = cfg;
    this.changed = false;
    this.sortableOptions = $.extend({
      opacity:0.75, // opacity of sortable while sorting
      items:'div.panels-ipe-portlet-wrapper',
      handle:'div.panels-ipe-draghandle',
      cancel:'.panels-ipe-nodrag'
    }, cfg.sortableOptions || {});

    this.regions = [];
    this.sortables = {};

    this.activateSortable = function (event, ui) {
      if (!Drupal.settings.Panels || !Drupal.settings.Panels.RegionLock) {
        // don't bother if there are no region locks in play.
        return;
      }

      var region = event.data.region;
      var $pane = $(event.srcElement).parents('.panels-ipe-portlet-wrapper');
      var paneId = $pane.attr('id').replace('panels-ipe-paneid-', '');

      var disabledRegions = false;

      // Determined if this pane is locked out of this region.
      if (!Drupal.settings.Panels.RegionLock[paneId] || Drupal.settings.Panels.RegionLock[paneId][region]) {
        ipe.sortables[region].sortable('enable');
        ipe.sortables[region].sortable('refresh');
      }
      else {
        disabledRegions = true;
        ipe.sortables[region].sortable('disable');
        ipe.sortables[region].sortable('refresh');
      }

      // If we disabled regions, we need to
      if (disabledRegions) {
        $(event.srcElement).bind('dragstop', function (event, ui) {
          // Go through
        });
      }
    };

    // When dragging is stopped, we need to ensure all sortable regions are enabled.
    this.enableRegions = function (event, ui) {
      for (var i in ipe.regions) {
        ipe.sortables[ipe.regions[i]].sortable('enable');
        ipe.sortables[ipe.regions[i]].sortable('refresh');
      }
    }

    this.initSorting = function () {
      var $region = $(this).parent('.panels-ipe-region');
      var region = $region.attr('id').replace('panels-ipe-regionid-', '');
      ipe.sortables[region] = $(this).sortable(ipe.sortableOptions);
      ipe.regions.push(region);
      $(this).bind('sortactivate', {region:region}, ipe.activateSortable);
    };

    this.initEditing = function (formdata) {
      ipe.topParent = $('div#panels-ipe-display-' + cache_key);
      ipe.backup = this.topParent.clone();

      // See http://jqueryui.com/demos/sortable/ for details on the configuration
      // parameters used here.
      ipe.changed = false;

      $('div.panels-ipe-sort-container', ipe.topParent).each(ipe.initSorting);

      // Since the connectWith option only does a one-way hookup, iterate over
      // all sortable regions to connect them with one another.
      $('div.panels-ipe-sort-container', ipe.topParent).sortable('option', 'connectWith', ['div.panels-ipe-sort-container']);

      $('div.panels-ipe-sort-container', ipe.topParent).bind('sortupdate', function () {
        ipe.changed = true;
      });

      $('div.panels-ipe-sort-container', ipe.topParent).bind('sortstop', this.enableRegions);

      $('.panels-ipe-form-container', ipe.control).append(formdata);

      $('input:submit:not(.ajax-processed)', ipe.control).addClass('ajax-processed').each(function () {
        var element_settings = {};

        element_settings.url = $(this.form).attr('action');
        element_settings.setClick = true;
        element_settings.event = 'click';
        element_settings.progress = { 'type':'throbber' };

        var base = $(this).attr('id');
        Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
        if ($(this).attr('id') == 'panels-ipe-save') {
          Drupal.ajax[base].options.beforeSerialize = function (element_settings, options) {
            ipe.saveEditing();
            return Drupal.ajax[base].beforeSerialize(element_settings, options);
          };
          Drupal.ajax[base].oldEventResponse = Drupal.ajax[base].eventResponse;
          Drupal.ajax[base].eventResponse = function (element, event) {
            var val = this.oldEventResponse(element, event);
            if (this.ajaxing) {
              ipe.hideContainer();
            }
            return val;
          };

        }
        if ($(this).attr('id') == 'panels-ipe-cancel') {
          Drupal.ajax[base].options.beforeSend = function () {
            return ipe.cancelEditing();
          };
        }
      });

      // Perform visual effects in a particular sequence.
      $('.panels-ipe-on').show('normal');
      ipe.showForm();
      ipe.topParent.addClass('panels-ipe-editing');
    };

    this.hideContainer = function () {
      ipe.container.slideUp('fast');
    };

    this.showContainer = function () {
      ipe.container.slideDown('normal');
      ipe.container.css('margin-left', '-' + parseInt(ipe.container.outerWidth() / 2) + 'px');
    };

    this.showButtons = function () {
      $('.panels-ipe-form-container').hide();
      $('.panels-ipe-button-container').show();
      ipe.showContainer();
    };

    this.showForm = function () {
      $('.panels-ipe-button-container').hide();
      $('.panels-ipe-form-container').show();
      ipe.showContainer();
    };

    this.endEditing = function (data) {
      $('.panels-ipe-form-container', ipe.control).empty();
      // Re-show all the IPE non-editing meta-elements
      $('div.panels-ipe-off').show('fast');

      ipe.showButtons();
      // Re-hide all the IPE meta-elements
      $('div.panels-ipe-on').hide('fast');
      ipe.topParent.removeClass('panels-ipe-editing');
      $('div.panels-ipe-sort-container', ipe.topParent).sortable("destroy");
    };

    this.saveEditing = function () {
      $('div.panels-ipe-region', ipe.topParent).each(function () {
        var val = '';
        var region = $(this).attr('id').split('panels-ipe-regionid-')[1];
        $(this).find('div.panels-ipe-portlet-wrapper').each(function () {
          var id = $(this).attr('id').split('panels-ipe-paneid-')[1];
          if (id) {
            if (val) {
              val += ',';
            }
            val += id;
          }
        });
        $('input[name="panel[pane][' + region + ']"]', ipe.control).val(val);
      });
    }

    this.cancelEditing = function () {
      if (ipe.topParent.hasClass('changed')) {
        ipe.changed = true;
      }

      if (!ipe.changed || confirm(Drupal.t('This will discard all unsaved changes. Are you sure?'))) {
        ipe.hideContainer();
        ipe.topParent.fadeOut('medium', function () {
          ipe.topParent.replaceWith(ipe.backup.clone());
          ipe.topParent = $('div#panels-ipe-display-' + ipe.key);

          // Processing of these things got lost in the cloning, but the classes remained behind.
          // @todo this isn't ideal but I can't seem to figure out how to keep an unprocessed backup
          // that will later get processed.
          $('.ctools-use-modal-processed', ipe.topParent).removeClass('ctools-use-modal-processed');
          $('.pane-delete-processed', ipe.topParent).removeClass('pane-delete-processed');
          ipe.topParent.fadeIn('medium');
          Drupal.attachBehaviors();
        });
      }
      else {
        // Cancel the submission.
        return false;
      }
    };

    this.createSortContainers = function () {
      $('div.panels-ipe-region', this.topParent).each(function () {
        $('div.panels-ipe-portlet-marker', this).parent().wrapInner('<div class="panels-ipe-sort-container" />');

        // Move our gadgets outside of the sort container so that sortables
        // cannot be placed after them.
        $('div.panels-ipe-portlet-static', this).each(function () {
          $(this).appendTo($(this).parent().parent());
        });

        // Also remove the last panel separator.
        $('div.panel-separator', this).filter(':last').remove();

        // Add a marker so we can drag things to empty containers.
        $('div.panels-ipe-sort-container', this).append('<div>&nbsp;</div>');
      });
    }

    this.createSortContainers();

    var element_settings = {
      url:ipe.cfg.formPath,
      event:'click',
      keypress:false,
      // No throbber at all.
      progress:{ 'type':'none' }
    };

    Drupal.ajax['ipe-ajax'] = new Drupal.ajax('ipe-ajax', $('div.panels-ipe-startedit', this.control).get(0),
      element_settings);

    Drupal.ajax['ipe-ajax'].oldEventResponse = Drupal.ajax['ipe-ajax'].eventResponse;
    Drupal.ajax['ipe-ajax'].eventResponse = function (element, event) {
      this.oldEventResponse(element, event);
      if (this.ajaxing) {
        ipe.hideContainer();
        $('div.panels-ipe-off').fadeOut('normal');
      }
    };

    /*
     var ajaxOptions = {
     type: "POST",
     url: ,
     data: { 'js': 1 },
     global: true,
     success: Drupal.CTools.AJAX.respond,
     error: function(xhr) {
     Drupal.CTools.AJAX.handleErrors(xhr, ipe.cfg.formPath);
     },
     dataType: 'json'
     };

     $('div.panels-ipe-startedit', this.control).click(function() {
     var $this = $(this);
     $.ajax(ajaxOptions);
     });
     */
  }

  ;

  $(function () {
    Drupal.ajax.prototype.commands.initIPE = function (ajax, data, status) {
      if (Drupal.PanelsIPE.editors[data.key]) {
        Drupal.PanelsIPE.editors[data.key].initEditing(data.data);
      }
    };

    Drupal.ajax.prototype.commands.unlockIPE = function (ajax, data, status) {
      if (confirm(data.message)) {
        var ajaxOptions = {
          type:"POST",
          url:data.break_path,
          data:{ 'js':1 },
          global:true,
          success:Drupal.CTools.AJAX.respond,
          error:function (xhr) {
            Drupal.CTools.AJAX.handleErrors(xhr, ipe.cfg.formPath);
          },
          dataType:'json'
        };

        $.ajax(ajaxOptions);
      }
      ;
    };

    Drupal.ajax.prototype.commands.endIPE = function (ajax, data, status) {
      if (Drupal.PanelsIPE.editors[data.key]) {
        Drupal.PanelsIPE.editors[data.key].endEditing(data);
      }
    };


  });

})(jQuery);
;
/**
 * @file base.js
 *
 * Some basic behaviors and utility functions for Views.
 */
(function ($) {

  Drupal.Views = {};

  /**
   * jQuery UI tabs, Views integration component
   */
  Drupal.behaviors.viewsTabs = {
    attach:function (context) {
      if ($.viewsUi && $.viewsUi.tabs) {
        $('#views-tabset').once('views-processed').viewsTabs({
          selectedClass:'active'
        });
      }

      $('a.views-remove-link').once('views-processed').click(function (event) {
        var id = $(this).attr('id').replace('views-remove-link-', '');
        $('#views-row-' + id).hide();
        $('#views-removed-' + id).attr('checked', true);
        event.preventDefault();
      });
      /**
       * Here is to handle display deletion
       * (checking in the hidden checkbox and hiding out the row)
       */
      $('a.display-remove-link').addClass('display-processed').click(function () {
          var id = $(this).attr('id').replace('display-remove-link-', '');
          $('#display-row-' + id).hide();
          $('#display-removed-' + id).attr('checked', true);
          return false;
        });
    }
  };

  /**
   * Helper function to parse a querystring.
   */
  Drupal.Views.parseQueryString = function (query) {
    var args = {};
    var pos = query.indexOf('?');
    if (pos != -1) {
      query = query.substring(pos + 1);
    }
    var pairs = query.split('&');
    for (var i in pairs) {
      if (typeof(pairs[i]) == 'string') {
        var pair = pairs[i].split('=');
        // Ignore the 'q' path argument, if present.
        if (pair[0] != 'q' && pair[1]) {
          args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
        }
      }
    }
    return args;
  };

  /**
   * Helper function to return a view's arguments based on a path.
   */
  Drupal.Views.parseViewArgs = function (href, viewPath) {
    var returnObj = {};
    var path = Drupal.Views.getPath(href);
    // Ensure we have a correct path.
    if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
      var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
      returnObj.view_args = args;
      returnObj.view_path = path;
    }
    return returnObj;
  };

  /**
   * Strip off the protocol plus domain from an href.
   */
  Drupal.Views.pathPortion = function (href) {
    // Remove e.g. http://example.com if present.
    var protocol = window.location.protocol;
    if (href.substring(0, protocol.length) == protocol) {
      // 2 is the length of the '//' that normally follows the protocol
      href = href.substring(href.indexOf('/', protocol.length + 2));
    }
    return href;
  };

  /**
   * Return the Drupal path portion of an href.
   */
  Drupal.Views.getPath = function (href) {
    href = Drupal.Views.pathPortion(href);
    href = href.substring(Drupal.settings.basePath.length, href.length);
    // 3 is the length of the '?q=' added to the url without clean urls.
    if (href.substring(0, 3) == '?q=') {
      href = href.substring(3, href.length);
    }
    var chars = ['#', '?', '&'];
    for (i in chars) {
      if (href.indexOf(chars[i]) > -1) {
        href = href.substr(0, href.indexOf(chars[i]));
      }
    }
    return href;
  };

})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
/**
 * @file ajaxView.js
 *
 * Handles AJAX fetching of views, including filter submission and response.
 */
(function ($) {

  /**
   * Attaches the AJAX behavior to Views exposed filter forms and key View links.
   */
  Drupal.behaviors.ViewsAjaxView = {};
  Drupal.behaviors.ViewsAjaxView.attach = function() {
    if (Drupal.settings && Drupal.settings.views && Drupal.settings.views.ajaxViews) {
      $.each(Drupal.settings.views.ajaxViews, function(i, settings) {
        // @todo: Figure out where to store the object.
        new Drupal.views.ajaxView(settings);
      });
    }
  };

  Drupal.views = {};

  /**
   * Javascript object for a certain view.
   */
  Drupal.views.ajaxView = function(settings) {
    var selector = '.view-dom-id-' + settings.view_dom_id;
    this.$view = $(selector);

    // Retrieve the path to use for views' ajax.
    var ajax_path = Drupal.settings.views.ajax_path;

    // If there are multiple views this might've ended up showing up multiple times.
    if (ajax_path.constructor.toString().indexOf("Array") != -1) {
      ajax_path = ajax_path[0];
    }

    // Check if there are any GET parameters to send to views.
    var queryString = window.location.search || '';
    if (queryString !== '') {
      // Remove the question mark and Drupal path component if any.
      var queryString = queryString.slice(1).replace(/q=[^&]+&?/, '');
      if (queryString !== '') {
        // If there is a '?' in ajax_path, clean url are on and & should be used to add parameters.
        queryString = ((/\?/.test(ajax_path)) ? '&' : '?') + queryString;
      }
    }

    this.element_settings = {
      url: ajax_path + queryString,
      submit: settings,
      setClick: true,
      event: 'click',
      selector: selector,
      progress: { type: 'throbber' }
    };

    this.settings = settings;

    // Add the ajax to exposed forms.
    this.$exposed_form = $('form#views-exposed-form-'+ settings.view_name.replace(/_/g, '-') + '-' + settings.view_display_id.replace(/_/g, '-'));
    this.$exposed_form.once(jQuery.proxy(this.attachExposedFormAjax, this));

    // Add the ajax to pagers.
    this.$view
      // Don't attach to nested views. Doing so would attach multiple behaviors
      // to a given element.
      .filter(jQuery.proxy(this.filterNestedViews, this))
      .once(jQuery.proxy(this.attachPagerAjax, this));
  };

  Drupal.views.ajaxView.prototype.attachExposedFormAjax = function() {
    var button = $('input[type=submit], input[type=image]', this.$exposed_form);
    button = button[0];

    this.exposedFormAjax = new Drupal.ajax($(button).attr('id'), button, this.element_settings);
  };

  Drupal.views.ajaxView.prototype.filterNestedViews= function() {
    // If there is at least one parent with a view class, this view
    // is nested (e.g., an attachment). Bail.
    return !this.$view.parents('.view').size();
  };

  /**
   * Attach the ajax behavior to each link.
   */
  Drupal.views.ajaxView.prototype.attachPagerAjax = function() {
    this.$view.find('ul.pager > li > a, th.views-field a, .attachment .views-summary a')
      .each(jQuery.proxy(this.attachPagerLinkAjax, this));
  };

  /**
   * Attach the ajax behavior to a singe link.
   */
  Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function(id, link) {
    var $link = $(link);
    var viewData = {};
    var href = $link.attr('href');
    // Construct an object using the settings defaults and then overriding
    // with data specific to the link.
    $.extend(
      viewData,
      this.settings,
      Drupal.Views.parseQueryString(href),
      // Extract argument data from the URL.
      Drupal.Views.parseViewArgs(href, this.settings.view_base_path)
    );

    // For anchor tags, these will go to the target of the anchor rather
    // than the usual location.
    $.extend(viewData, Drupal.Views.parseViewArgs(href, this.settings.view_base_path));

    this.element_settings.submit = viewData;
    this.pagerAjax = new Drupal.ajax(false, $link, this.element_settings);
  };

  Drupal.ajax.prototype.commands.viewsScrollTop = function (ajax, response, status) {
    // Scroll to the top of the view. This will allow users
    // to browse newly loaded content after e.g. clicking a pager
    // link.
    var offset = $(response.selector).offset();
    // We can't guarantee that the scrollable object should be
    // the body, as the view could be embedded in something
    // more complex such as a modal popup. Recurse up the DOM
    // and scroll the first element that has a non-zero top.
    var scrollTarget = response.selector;
    while ($(scrollTarget).scrollTop() == 0 && $(scrollTarget).parent()) {
      scrollTarget = $(scrollTarget).parent();
    }
    // Only scroll upward
    if (offset.top - 10 < $(scrollTarget).scrollTop()) {
      $(scrollTarget).animate({scrollTop: (offset.top - 10)}, 500);
    }
  };

})(jQuery);;

/**
 * Event handler that listens for flags selected by the user.
 */
jQuery(document).bind('flagGlobalAfterLinkUpdate', function(event, data) {
  var refresh = new viewsFlagRefresh(data.flagName);
  jQuery.each(Drupal.settings.views.ajaxViews, function(index, settings) {
    refresh.ajax(settings);
  });
});

/**
 * Constructor for the viewsFlagRefresh object, sets the name of the flag that
 * was selected.
 * 
 * @param flagName
 *   The name of the flag selected by the user.
 */
function viewsFlagRefresh(flagName) {
  this.flagName = flagName;
}

/**
 * Class method that returns the Views module's AJAX path.
 * 
 * @reutrn
 *   The Views module's AJAX path.
 */
viewsFlagRefresh.ajaxPath = function() {
  var ajaxPath = Drupal.settings.views.ajax_path;
  if (ajaxPath.constructor.toString().indexOf("Array") != -1) {
    ajaxPath = ajaxPath[0];
  }
  return ajaxPath;
}

/**
 * Returns the widget settings associated with the view. Returns false if the
 * view isn't set to refresh on this flag.
 * 
 * @param viewName
 *   The name of the view we are running the check against.
 * @param viewDisplayId
 *   The display ID of the view we are running the check against.
 * @return
 *   A string containing the theme hook used to theme the view as it is being
 *   refreshed, a boolean false if the view should not be refreshed at all.
 */
viewsFlagRefresh.prototype.widgetSettings = function(viewName, viewDisplayId) {
  var settings = Drupal.settings.viewsFlagRefresh.flags;
  for (var flagName in settings) {
    functionName = viewName + '-' + viewDisplayId;
    if (flagName == this.flagName && functionName in settings[flagName]) {
      return settings[flagName][functionName];
    }
  }
  return false;
}

/**
 * Returns a key / value pair to be uses as settings by the ajax methods.
 * 
 * @param view
 *   a jQuery object containing the view.
 * @param settings
 *   The View's AJAX settings.
 * @param theme
 *   The theme object.
 * @return
 *   The AJAX settings.
 */
viewsFlagRefresh.ajaxSettings = function(view, settings, theme) {
  return {
    url: viewsFlagRefresh.ajaxPath(),
    type: 'GET',
    data: settings,
    success: function(response, status) {
      // Handle ajax response.
      jQuery(view).data('viewsFlagRefresh_ajax').success(response, status);

      // Invokes theme hook.
      jQuery(view).filter(function() { return !jQuery(this).parents('.view').size(); }).each(function() {
        theme.target = this;
        theme.hookInvoke('themeHookPost');
      });
    },
    error: function() {
      // Invokes theme hook, handles errors gracefully.
      theme.hookInvoke('themeHookPost');
      Drupal.Views.Ajax.handleErrors(xhr, viewsFlagRefresh.ajaxPath());
    },
    dataType: 'json'
  };
}

/**
 * Refreshes a view via AJAX if it is configured to do so.
 * 
 * @param settings
 *   The view's AJAX settings passed through Drupal.settings.views.ajaxViews.
 */
viewsFlagRefresh.prototype.ajax = function(settings) {
  // Bails if the view shouldn't be refreshed when this flag is selected.
  var widgetSettings = this.widgetSettings(settings.view_name, settings.view_display_id);
  if (!widgetSettings) {
    return;
  }

  // Calculates the selector for the view.
  var view = '.view-dom-id-' + settings.view_dom_id;
  if (!jQuery(view).size()) {
    view = '.view-id-' + settings.view_name + '.view-display-id-' + settings.view_display_id;
  }

  // Locates the view, AJAX refreshes the content.
  jQuery(view).filter(function() { return !jQuery(this).parents('.view').size(); }).each(function() {
    var target = this;

    // create ajax object to handle the response.
    if (jQuery(target).data('viewsFlagRefresh_ajax') == null) {
      // TODO: Find a way to handle ajax commands without creating an ajax object.
      var element_settings = {
        url: viewsFlagRefresh.ajaxPath(),
        submit: {},
        setClick: true,
        event: 'click',
        selector: view,
        progress: { type: 'throbber' }
      };

      jQuery(target).data('viewsFlagRefresh_ajax', new Drupal.ajax(false, view, element_settings));
    }
    
    // Instantiates the theme object, invokes the widget's theme hook.
    var theme = new viewsFlagRefresh.theme(target, widgetSettings);
    theme.hookInvoke('themeHook');
    
    // Gets AJAX settings, either refreshes the view or submits the exposed
    // filter form. This latter refreshes the view and maintains the filters.
    var ajaxSettings = viewsFlagRefresh.ajaxSettings(view, settings, theme);
    var exposedForm = jQuery('form#views-exposed-form-' + settings.view_name.replace(/_/g, '-') + '-' + settings.view_display_id.replace(/_/g, '-'));
    if (exposedForm.size()) {
      setTimeout(function() { jQuery(exposedForm).ajaxSubmit(ajaxSettings); }, theme.timeout);
    }
    else {
      setTimeout(function() { jQuery.ajax(ajaxSettings); }, theme.timeout);
    }
  });
}

/**
 * Contructor for our pseudo theme system class.
 * 
 * @param target
 *   A jQuery object containing the content being refreshed.
 * @param settings
 *   The widget settings.
 */
viewsFlagRefresh.theme = function(target, settings) {
  this.timeout  = 0;
  this.target   = target;
  this.settings = settings;
}

/**
 * Invokes a hook in the theme object.
 * 
 * @param hookType
 *   The hook type being invoked, i.e. 'themeHook', 'themeHookPost'.
 * @return
 *   A boolean flagging whether the hook exists.
 */
viewsFlagRefresh.theme.prototype.hookInvoke = function(hookType) {
  if (hookType in this.settings && this.settings[hookType] in this) {
    this[this.settings[hookType]]();
    return true;
  }
  return false;
}

/**
 * Adds a throbber image to the view content while it is being refreshed.
 */
viewsFlagRefresh.theme.prototype.throbber = function() {
  // Hide the content of the view.
  jQuery(this.target).css('visibility', 'hidden');
  
  // Captures parent, as the view is usually in something such as a block.
  var container = jQuery(this.target).parent();
  
  // Adds our throbber to the middle of the view.
  // NOTE: The throbber image is 32px wide.
  var pos = jQuery(container).position();
  this.throbberElement = jQuery('<img src="' + Drupal.settings.viewsFlagRefresh.imagePath + '/throbber.gif" class="views_flag_refresh-throbber" />')
    .css('left', pos.left + (jQuery(container).outerWidth() / 2) - 16)
    .css('top', pos.top + (jQuery(container).outerHeight() / 2) - 16)
    .insertAfter(this.target);
}

/**
 * Cleans up the throbber image.
 * 
 * @param target
 *   A jQuery object containing the view being refreshed.
 */
viewsFlagRefresh.theme.prototype.throbberPost = function() {
  jQuery(this.throbberElement).remove();
};
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
