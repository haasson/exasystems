import $ from 'jquery'
import '../js/jquery.maskedinput'
import { scrollToAnchor, fixHeader } from './scrollActions'
import initSliders from "./sliders";
import formsInit from "./formActions";
import initModals from "./modalsActions";

window.addEventListener('load', function () {
   simplePhoneMask()
   burgerHandler()
   tabsInit()

   initSliders()
   initModals()
   formsInit()

   scrollToAnchor()
   fixHeader()
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
