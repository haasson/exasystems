import $ from 'jquery'
import '../js/jquery.maskedinput'
import { scrollToAnchor, fixHeader } from './scrollActions'
import initSliders from "./sliders";
import formsInit from "./formActions";
import initModals from "./modalsActions";
import Quiz from './quiz'
import selectsInit from "./select2";
import rangeInit from "./rangeForm";


window.addEventListener('load', function () {
   simplePhoneMask()
   burgerHandler()
   tabsInit()

   initSliders()
   formsInit()
   initModals()
   selectsInit()
   rangeInit()

   scrollToAnchor()
   fixHeader()

   videoHandler()
   dateHandler()
   arrowPopular()


   if (document.querySelector('.quiz')) {
      new Quiz()
   }

   mapsInit()

   document.body.style.opacity  = 1
   document.body.classList.remove('loading')

})

function simplePhoneMask() {
   $("input[name='phone_f']").mask("+7 ( 999 ) 999 9999");
}

function burgerHandler() {
   let burger = document.querySelector(".j-menu-switcher")
   let menu = document.querySelector(".j-menu")
   burger.addEventListener("click", () => {
      menu.classList.toggle("active")
      burger.classList.toggle("active")
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

function videoHandler() {
   $(".video__item-bg").click((e) => {
      $(e.target).addClass('hide')
   })
}

function dateHandler() {
   const priceElements = document.querySelectorAll('.price-date')
   let today = new Date().getTime()

   while (new Date(today).getDay() < 3) {
      today -= 24 * 60 * 60 * 1000
   }

   const date = `${('0' + (new Date(today).getDate() - 1)).slice(-2)}.${('0' + (new Date(today).getMonth() + 1)).slice(-2)}.${new Date(today).getFullYear()}`

   priceElements.forEach(el => el.innerHTML = date)
}

function mapsInit() {
   console.log(ymaps)
   ymaps.ready(function () {
      console.log('here')
      let map = new ymaps.Map("map", {
         center: [55.654642387785984, 37.41653095681084],
         zoom: 11,
         behaviors: ['drag'],
         controls: ['zoomControl'],
      }, {
         zoomControlPosition: { left: 10, top: 250 },
      })
      if (document.documentElement.clientWidth <= 1300) {
         map.setCenter([55.654642387785984, 37.41653095681084])
      }
      if (document.documentElement.clientWidth <= 992) {
         map.setCenter([55.654642387785984, 37.41653095681084])
         map.behaviors.disable('drag')
         map.behaviors.enable('multiTouch')
      }
      let Placemark = new ymaps.Placemark([55.654642387785984, 37.41653095681084], {
         hintContent: 'Технология'
      }, {
         iconLayout: 'default#image',
         iconImageHref: 'assets/img/12map/marker.png',
         iconImageSize: [79, 96],
         iconImageOffset: [-40, -96]

      });
      console.log(Placemark)
      map.geoObjects.add(Placemark);
   });
}

function arrowPopular() {
   let popularInner = document.querySelector(".popular__inner")
   let toggleButton = document.querySelector(".popular__arrow")

   toggleButton.addEventListener("click", () => {
      popularInner.classList.toggle("active")
   })
}


