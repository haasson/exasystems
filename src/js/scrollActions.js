import $ from "jquery";

function fixHeader() {
   window.onscroll = function () {
      if (window.pageYOffset > 800) {
         $(".header").addClass("header-fixed");
      } else {
         $(".header").removeClass("header-fixed");
      }
   };
}

function scrollToAnchor(behavior = 'smooth') {
   let links = document.querySelectorAll('.topline__item');

   links.forEach((item, i) => {
      item.addEventListener('click', function (e) {
         document.querySelector('.j-menu-switcher').click()

         let section = document.querySelector(`.${item.dataset.link}`).querySelector('.section-title')
         window.scrollTo({
            top: getCoords(section).top - 70,
            behavior
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

export {fixHeader, scrollToAnchor}
