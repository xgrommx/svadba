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
          unique_names: true,
          flash_swf_url : '/sites/all/modules/custom/svadba_user/lib/plupload/js/plupload.flash.swf',
          silverlight_xap_url : '/sites/all/modules/custom/svadba_user/lib/plupload/js/plupload.silverlight.xap',
          file_data_name: 'file',
          drop_element: 'drop-zone',
          filters : [
            {title : "Image files", extensions : "jpg,gif,png,jpeg"}
          ]
        });

        uploader.bind('Init', function(up, params) {
//          $('#filelist').html("<div>Current runtime: " + params.runtime + "</div>");
        });

        $('#drop-zone').click(function(e){
          $('#pickfiles').trigger('click');
        });

        /*$('#uploadfiles').click(function(e) {
          uploader.start();

          e.preventDefault();
        });*/

        uploader.init();

        uploader.bind('FilesAdded', function(up, files) {
          //files = files.reverse();
          var countLi = $('#uploaded-photo-list').children('li').size();

          $.each(files, function(i, file) {
//            $('#uploaded-photo-list').prepend('<li id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')</li>');
            if(countLi == 0){
              $('<li id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')</li>').appendTo('#uploaded-photo-list');              
            }else {
              $('<li id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')</li>').insertBefore('#uploaded-photo-list li[data-pid]:first');              
            }

            $('#' + file.id).append('<a href="" class="remove-file">Remove</a>\
                                  <div class="progress ui-helper-clearfix"> \
						                        <div class="progressBar" id="progressBar_'+ file.id +'"></div> \
						                        <div class="percentage">0%</div> \
					                        </div>');
            $('#progressBar_' + file.id).progressbar({
              value: 0
            });

            $('#' + file.id + ' a.remove-file', context).live('click', function(e){
              e.preventDefault();
              uploader.removeFile(file);

              $('#' + file.id).fadeOut('slow', function(){
                $(this).remove();
              });

              return false;
            });
          });

          up.refresh(); // Reposition Flash/Silverlight
          up.start();
        });

        uploader.bind('UploadProgress', function(up, file) {
          var speed = uploader.total.bytesPerSec / 1024;
          $('#progressBar_' + file.id).progressbar({
            value: file.percent
          });
          $('#progressBar_' + file.id).next('div').html(file.percent + '% ' + speed + 'kb/s');
        });

        uploader.bind('Error', function(up, err) {
          $('#uploaded-photo-list').prepend("<div>Error: " + err.code +
                                ", Message: " + err.message +
                                (err.file ? ", File: " + err.file.name : "") +
                                "</div>"
          );

          up.refresh(); // Reposition Flash/Silverlight
        });

        uploader.bind('FileUploaded', function(up, file, info) {
          $('#' + file.id).fadeOut('slow', function(){
            var output = $.parseJSON(info.response);
            $(this).replaceWith(output.html).fadeIn('slow');
          });
          
          //$("#uploaded-photo-list li").sort(decSort).appendTo('#uploaded-photo-list');
          // accending sort
          /*function ascSort(a, b){
              return ($(b).data('Pid')) < ($(a).data('Pid')) ? 1 : -1;  
          };

          // decending sort
          function decSort(a, b){
              return ($(b).data('Pid')) > ($(a).data('Pid')) ? 1 : -1;    
          };*/

        });

        $('#uploaded-photo-list li input:checkbox').live('click', function(e){
          var self = $(this);
          var photoId = self.closest('li').data('Pid');
          var checked = self.attr('checked');

          if(checked) {
            var parent = self.closest('li');

            var div = $('<div></div>', {
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
              html:'<input type="submit" class="form-submit photo-ajax-delete-message-yes" value="Yes"/>' +
                   '<input type="submit" class="form-submit photo-ajax-delete-message-no" value="No"/>'
            }).addClass('photo-ajax-delete-message');

            $(div).appendTo(parent);

            $('.photo-ajax-delete-message-yes', context).click(function (e) {
              e.preventDefault();
              $.get('/get/delete/photo', { 'photoId': photoId }, function () {
                $('.photo-ajax-delete-message').remove();
                $(parent).fadeOut('slow', function () {
                  $(this).remove();
                });
              });
              return false;
            });
            $('.photo-ajax-delete-message-no', context).click(function (e) {
              e.preventDefault();
              $(this).parent().fadeOut('slow', function () {
                self.attr('checked', false);
                $(this).remove();
              });
              return false;
            });
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
            }).addClass('video-ajax-delete-message');
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
              }).addClass('video-ajax-update-message');
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
              }).addClass('video-ajax-update-message');
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
