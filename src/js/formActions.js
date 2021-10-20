import $ from "jquery";
import calcPrice from "./calculator";

let savedFormName = ''

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

async function getCurrencyRate() {
   let res = await fetch('https://freecurrencyapi.net/api/v2/latest?apikey=0e7b2580-2a4e-11ec-b0e0-b70a23d9c949&base_currency=USD')
   let result = await res.json()
   return result.data.RUB
}

async function renderCamerasPrice(form) {
   const data = calcPrice($(form))
   const rate = await getCurrencyRate()
   document.querySelector('.cameras-price').innerHTML = ''

   document.querySelector('.cameras-count').innerHTML = data.count
   document.querySelector('.calculator-hidden-count').value = data.count
   document.querySelector('[name=archiveSize]').value = (data.archiveSize).toFixed(2)
   document.querySelector('[name=processorPrice]').value = (data.processorPrice * rate).toFixed(2)
   document.querySelector('[name=motherboardPrice]').value = (data.motherboardPrice * rate).toFixed(2)
   document.querySelector('[name=boxPrice]').value = (data.boxPrice * rate).toFixed(2)
   document.querySelector('[name=radiatorPrice]').value = (data.radiatorPrice * rate).toFixed(2)
   document.querySelector('[name=memoryPrice]').value = (data.memoryPrice * rate).toFixed(2)
   document.querySelector('[name=ssdPrice]').value = (data.ssdPrice * rate).toFixed(2)
   document.querySelector('[name=diskCount]').value = data.diskCount
   document.querySelector('[name=disksPrice]').value = (data.disksPrice * rate).toFixed(2)
   document.querySelector('[name=controllerPrice]').value = (data.controllerPrice * rate).toFixed(2)
   document.querySelector('[name=consumablePrice]').value = (data.consumablePrice * rate).toFixed(2)
   document.querySelector('[name=licensePrice]').value = (data.licensePrice * rate).toFixed(2)


   const priceRub = data.price ? `${parseInt(data.price * +rate)} руб.` : 'Автоматический расчёт невозможен'
   console.log(priceRub)
   document.querySelector('.cameras-price').innerHTML = priceRub
   document.querySelector('.calculator-hidden-price').value = priceRub
}

function send(event) {
   console.log('send')
   event.preventDefault ? event.preventDefault() : (event.returnValue = false);
   let form = event.target
   let formData
   if (form.classList.contains("prevent")) {
      console.log('here')
      renderCamerasPrice(form)
      console.log('after')
      savedFormName = $(form).attr('id')
      return
   }

   if (savedFormName) {
      formData = $(` #${savedFormName}, #${$(form).attr('id')}`).serialize()
      savedFormName = ''
   } else {
      formData = $(form).serialize()
   }

   if (form.classList.contains("with-file")) {
      ajaxWithFile()
   } else {
      regularAjax()
   }

   function regularAjax() {
      $.ajax({
         url: 'include/send2.php',
         method: 'POST',

         data: decodeURI(formData),
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
            console.log(this.data);
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
