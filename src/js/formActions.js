import $ from "jquery";

export default function formsInit() {
   $('form').on('submit', send)
   let inputFile = document.querySelectorAll('.form__file')
   inputFile.forEach(input => {
      input.addEventListener('input', () => {
         let slash = input.value.lastIndexOf("fakepath")
         $(input).closest("form").find('.form__file-name').html(input.value.substring(slash + 9));
      })
   })
}

function send(event) {
   event.preventDefault ? event.preventDefault() : (event.returnValue = false);
   let form = event.target
   if (form.classList.contains("with-file")) {
      ajaxWithFile()
   } else {
      regularAjax()
   }

   function regularAjax() {
      $.ajax({
         url: 'include/send2.php',
         method: 'POST',

         data: decodeURI($(form).serialize()),
         success: function success(data) {
            console.log('success');
            $(".modal-bg").fadeOut(300);
            $(".modal-ok").fadeIn(300);
            // console.log(data);
            // dataLayer.push({ 'event': 'formsend', 'form_type': formThis.attr('class') });
         },
         error: function error(xhr) {
            alert('error - ' + xhr.status);
         },
         complete: function complete() {
            // console.log(this.data);
         }
      });
   }

   function ajaxWithFile() {
      $.ajax({
         // Your server script to process the upload
         url: 'include/send2.php',
         method: 'POST',

         // Form data
         data: new FormData(form),

         // Tell jQuery not to process data or worry about content-type
         // You *must* include these options!
         cache: false,
         contentType: false,
         processData: false,
         success: function () {
            console.log('success');
            $(".modal-bg").fadeOut(300);
            $(".modal-ok").fadeIn(300);
            // console.log(this.data);
            // dataLayer.push({ 'event': 'formsend', 'form_type': 'programm__form' });
         },
         // Custom XMLHttpRequest
         xhr: function () {
            var myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload) {
               // For handling the progress of the upload
               myXhr.upload.addEventListener('progress', function (e) {
                  if (e.lengthComputable) {
                     if ($(form).find(".file-name").html()) {
                        $(form).find(".file-send").removeClass("hide")
                        $(form).find('progress').removeClass("hide").attr({
                           value: e.loaded,
                           max: e.total,
                        });
                     }

                     $(form).find(".file-name").html("")
                  }
               }, false);
            }
            return myXhr;
         }
      });
   }
}
