import $ from 'jquery'
import slick from 'slick-slider'
import '../js/jquery.maskedinput'

window.addEventListener('load', function () {
   burgerHandler()
   sliderProducts()
   sliderProjects()
   vendorsSlider()
   reviewsSlider()
   sliderControlsHandler()

   tabsInit()
   modalHandler()
   scrollToAnchor()

   $("input[name='phone_f']").mask("+7 ( 999 ) 999 9999");

   window.onscroll = function () {
      if (window.pageYOffset > 800) {
         $(".header").addClass("header-fixed");
      } else {
         $(".header").removeClass("header-fixed");
      }
   };
})

function scrollToAnchor(behavior = 'smooth') {
   let links = document.querySelectorAll('.topline__item');
   // let sections = document.querySelectorAll('.section');
   // let header = document.querySelector('.header');
   // let headerHeight = parseInt(window.getComputedStyle(header).height)

   links.forEach((item, i) => {
      item.addEventListener('click', function (e) {
         document.querySelector('.j-menu-switcher').click()

         let section = document.querySelector(`.${item.dataset.link}`).querySelector('.section-title')
         window.scrollTo({
            top: getCoords(section).top - 70,
            behavior: behavior
         });
      });
   })
}

function getCoords(elem) {
   let box = elem.getBoundingClientRect();
   return {
      top: box.top + window.pageYOffset,
      left: box.left + window.pageXOffset
   }
}

function burgerHandler() {
   let burger = document.querySelector(".j-menu-switcher")
   let menu = document.querySelector(".j-menu")
   burger.addEventListener("click", () => {
      menu.classList.toggle("active")
      burger.classList.toggle("active")
   })
}

function sliderProducts() {
   const sliderEl = $('.products__slider');
   sliderEl.on('init', function(){
      sliderEl.removeClass("hide")
   });

   sliderEl.slick({
      arrows: false,
      centerMode: true,
      centerPadding: '120px',
      slidesToShow: 4,
      infinite: false,
      initialSlide: 2,
      responsive: [
         {
            breakpoint: 1550,
            settings: {
               centerMode: false,
               initialSlide: 0,
            }
         },
         {
            breakpoint: 1080,
            settings: {
               centerMode: false,
               initialSlide: 0,
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 768,
            settings: {
               centerMode: false,
               initialSlide: 0,
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 510,
            settings: {
               centerMode: false,
               initialSlide: 0,
               slidesToShow: 1,
            }
         },
      ]
   });
}

function sliderProjects() {
   const sliderEl = $('.projects__slider');
   $('.projects__arrow').on('click', (e) => {
      if (e.target.classList.contains('prev-slide')) {
         sliderEl.slick('slickPrev');
      } else if (e.target.classList.contains('next-slide')) {
         sliderEl.slick('slickNext');
      }
   })

   sliderEl.on('init', function(){
      sliderEl.removeClass("hide")
      window.dispatchEvent(new Event('resize'));
   });
   sliderEl.slick({
      infinite: true,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false,
   })

   const galleryEl_1 = $('.projects__slide_1 .projects__gallery-slider');
   galleryEl_1.on('init', function(){
      galleryEl_1.removeClass("hide")
   });
   galleryEl_1.slick({
      slidesToShow: 4,
      arrows: false,
      focusOnSelect: true,
      responsive: [
         {
            breakpoint: 568,
            settings: {
               centerMode: true,
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 420,
            settings: {
               centerMode: true,
               slidesToShow: 1,
            }
         },
      ]
   })

   const galleryEl_2 = $('.projects__slide_2 .projects__gallery-slider');
   galleryEl_2.on('init', function(){
      galleryEl_2.removeClass("hide")
   });
   galleryEl_2.slick({
      slidesToShow: 3,
      arrows: false,
      focusOnSelect: true,
      responsive: [
         {
            breakpoint: 480,
            settings: {
               centerMode: true,
               slidesToShow: 1,
            }
         },
      ]
   })

   const galleryEl_3 = $('.projects__slide_3 .projects__gallery-slider');
   galleryEl_3.on('init', function(){
      galleryEl_3.removeClass("hide")
   });
   galleryEl_3.slick({
      slidesToShow: 4,
      arrows: false,
      focusOnSelect: true,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               centerMode: true,
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 480,
            settings: {
               centerMode: true,
               slidesToShow: 1,
            }
         },
      ]
   })
}

function vendorsSlider() {
   const sliderEl = $('.vendors__slider');
   sliderEl.on('init', function(){
      sliderEl.removeClass("hide")
   });
   sliderEl.slick({
      slidesToShow: 4,
      arrows: false,
      focusOnSelect: true,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
            }
         },
      ]
   })
}

function reviewsSlider() {
   const sliderEl = $('.reviews__slider');
   sliderEl.on('init', function(){
      sliderEl.removeClass("hide")
   });
   sliderEl.slick({
      arrows: false,
      slidesToShow: 1,
      variableWidth: true,
      infinite: false
   })
}

function sliderControlsHandler() {
   $('.slider-line__arrows').on('click', (e) => {
      let slider = $(e.target).closest('.wrapper').find('.slider')
      if (e.target.classList.contains('slider-line__prev')) {
         slider.slick('slickPrev');
      } else if (e.target.classList.contains('slider-line__next')) {
         slider.slick('slickNext');
      }
   })
}

function tabsInit() {
   let tabs = $(".map .map__name")
   let tabsContent = $(".map .map__tab")
   tabs.on('click', (e) => {
      let target = $(e.currentTarget)
      let tabIndex = target.data("tab");
      tabs.removeClass('active')
      tabsContent.addClass('hide')

      target.addClass('active')
      $(`.map [data-tab-content=${tabIndex}]`).removeClass('hide')
   })
}

function modalHandler() {
   $(".modal-link-full").click(function () {
      $(".modal-full").fadeIn(300);
   });
   $(".modal-link-price").click(function () {
      $(".modal-price").fadeIn(300);
   });
   $(".modal-link-callback").click(function () {
      console.log('here')
      $(".modal-callback").fadeIn(300);
   });

   $(".modal-bg").on('click', (e) => {
      if (e.target.closest('form')) {
         return
      }
      $(".modal-bg").fadeOut(300);
      $("progress.file-progress").addClass("hide")
      $(".file-send").addClass("hide")
   })

}

$('form').on('submit', send)
let inputFile = document.querySelectorAll('.form__file')
console.log(inputFile)
inputFile.forEach(input => {
   input.addEventListener('input', () => {
      let slash = input.value.lastIndexOf("fakepath")
      console.log(slash, input.value.substring(slash + 9))
      $(input).closest("form").find('.form__file-name').html(input.value.substring(slash + 9));
   })
})

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
            console.log(this.data);
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





// function initMap() {
//    var map, map2;
//    var responsiveLat = 55.654604;
//    var responsiveLng = 37.516493;
//    var zom = 11;
//    map = new google.maps.Map(document.getElementById("map"), {
//       center: {
//          lat: responsiveLat,
//          lng: responsiveLng
//       },
//       zoom: zom,
//       styles: [
//          {
//             featureType: "all",
//             elementType: "labels",
//             stylers: [
//                {
//                   visibility: "on"
//                }
//             ]
//          },
//          {
//             featureType: "all",
//             elementType: "labels.text",
//             stylers: [
//                {
//                   visibility: "on"
//                }
//             ]
//          },
//          {
//             featureType: "all",
//             elementType: "labels.text.fill",
//             stylers: [
//                {
//                   saturation: 36
//                },
//                {
//                   color: "#dee6f0"
//                },
//                {
//                   lightness: 40
//                },
//                {
//                   visibility: "on"
//                }
//             ]
//          },
//          {
//             featureType: "all",
//             elementType: "labels.text.stroke",
//             stylers: [
//                {
//                   visibility: "off"
//                },
//                {
//                   color: "#000000"
//                },
//                {
//                   lightness: 16
//                }
//             ]
//          },
//          {
//             featureType: "all",
//             elementType: "labels.icon",
//             stylers: [
//                {
//                   visibility: "off"
//                },
//                {
//                   hue: "#ff0000"
//                }
//             ]
//          },
//          {
//             featureType: "administrative",
//             elementType: "geometry.fill",
//             stylers: [
//                {
//                   color: "#353c44"
//                },
//                {
//                   lightness: 20
//                }
//             ]
//          },
//          {
//             featureType: "administrative",
//             elementType: "geometry.stroke",
//             stylers: [
//                {
//                   color: "#000000"
//                },
//                {
//                   lightness: 17
//                },
//                {
//                   weight: 1.2
//                }
//             ]
//          },
//          {
//             featureType: "landscape",
//             elementType: "geometry",
//             stylers: [
//                {
//                   color: "#000000"
//                },
//                {
//                   lightness: 20
//                }
//             ]
//          },
//          {
//             featureType: "landscape",
//             elementType: "geometry.fill",
//             stylers: [
//                {
//                   color: "#1c1e25"
//                }
//             ]
//          },
//          {
//             featureType: "landscape.man_made",
//             elementType: "labels.text",
//             stylers: [
//                {
//                   visibility: "on"
//                }
//             ]
//          },
//          {
//             featureType: "landscape.man_made",
//             elementType: "labels.icon",
//             stylers: [
//                {
//                   visibility: "on"
//                },
//                {
//                   hue: "#e0ff00"
//                }
//             ]
//          },
//          {
//             featureType: "poi",
//             elementType: "geometry",
//             stylers: [
//                {
//                   color: "#000000"
//                },
//                {
//                   lightness: 21
//                }
//             ]
//          },
//          {
//             featureType: "poi",
//             elementType: "geometry.fill",
//             stylers: [
//                {
//                   color: "#1e212b"
//                }
//             ]
//          },
//          {
//             featureType: "poi",
//             elementType: "labels.text",
//             stylers: [
//                {
//                   visibility: "on"
//                }
//             ]
//          },
//          {
//             featureType: "poi",
//             elementType: "labels.icon",
//             stylers: [
//                {
//                   visibility: "on"
//                }
//             ]
//          },
//          {
//             featureType: "road.highway",
//             elementType: "geometry.fill",
//             stylers: [
//                {
//                   color: "#00cebd"
//                },
//                {
//                   lightness: 17
//                },
//                {
//                   saturation: "11"
//                }
//             ]
//          },
//          {
//             featureType: "road.highway",
//             elementType: "geometry.stroke",
//             stylers: [
//                {
//                   color: "#000000"
//                },
//                {
//                   lightness: 29
//                },
//                {
//                   weight: 0.2
//                }
//             ]
//          },
//          {
//             featureType: "road.highway",
//             elementType: "labels.text.fill",
//             stylers: [
//                {
//                   visibility: "simplified"
//                }
//             ]
//          },
//          {
//             featureType: "road.highway",
//             elementType: "labels.icon",
//             stylers: [
//                {
//                   hue: "#ff7a00"
//                },
//                {
//                   saturation: "79"
//                },
//                {
//                   visibility: "on"
//                },
//                {
//                   lightness: "-33"
//                },
//                {
//                   gamma: "0.63"
//                }
//             ]
//          },
//          {
//             featureType: "road.arterial",
//             elementType: "geometry",
//             stylers: [
//                {
//                   color: "#000000"
//                },
//                {
//                   lightness: 18
//                }
//             ]
//          },
//          {
//             featureType: "road.arterial",
//             elementType: "geometry.fill",
//             stylers: [
//                {
//                   color: "#256a72"
//                },
//                {
//                   saturation: "61"
//                }
//             ]
//          },
//          {
//             featureType: "road.local",
//             elementType: "geometry",
//             stylers: [
//                {
//                   color: "#000000"
//                },
//                {
//                   lightness: 16
//                }
//             ]
//          },
//          {
//             featureType: "road.local",
//             elementType: "geometry.fill",
//             stylers: [
//                {
//                   gamma: "1"
//                },
//                {
//                   lightness: "0"
//                },
//                {
//                   color: "#2d414b"
//                }
//             ]
//          },
//          {
//             featureType: "transit",
//             elementType: "geometry",
//             stylers: [
//                {
//                   color: "#000000"
//                },
//                {
//                   lightness: 19
//                }
//             ]
//          },
//          {
//             featureType: "transit.line",
//             elementType: "geometry.fill",
//             stylers: [
//                {
//                   color: "#eb0202"
//                }
//             ]
//          },
//          {
//             featureType: "transit.station",
//             elementType: "geometry.fill",
//             stylers: [
//                {
//                   color: "#ff1d00"
//                },
//                {
//                   saturation: "-35"
//                },
//                {
//                   lightness: "-47"
//                }
//             ]
//          },
//          {
//             featureType: "transit.station",
//             elementType: "labels.icon",
//             stylers: [
//                {
//                   hue: "#00d4ff"
//                },
//                {
//                   visibility: "simplified"
//                },
//                {
//                   lightness: "0"
//                },
//                {
//                   saturation: "0"
//                },
//                {
//                   gamma: "0.5"
//                }
//             ]
//          },
//          {
//             featureType: "water",
//             elementType: "geometry",
//             stylers: [
//                {
//                   color: "#000000"
//                },
//                {
//                   lightness: 17
//                }
//             ]
//          }
//       ]
//    });
//
//    var locations = [
//       {
//          title: "Москва",
//          position: {
//             lat: 55.654604,
//             lng: 37.416493
//          },
//          icon: {
//             url: "img/13map/marker.png",
//             // scaledSize: new google.maps.Size(34, 50),
//             anchor: {
//                x: 12,
//                y: 30
//             }
//          }
//       }
//    ];
//    locations.forEach(function (element) {
//       var marker = new google.maps.Marker({
//          position: element.position,
//          map: map,
//          title: element.title,
//          icon: element.icon
//       });
//       marker.addListener("click", function () {
//          infowindow.open(map, marker);
//       });
//    });
// }
// window.initMap = initMap
