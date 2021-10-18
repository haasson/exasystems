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
   initModals()
   formsInit()
   selectsInit()
   rangeInit()

   scrollToAnchor()
   fixHeader()

   videoHandler()
   dateHandler()


   if (document.querySelector('.quiz')) {
      new Quiz()
   }


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
