import $ from 'jquery'
import slick from 'slick-slider'

window.addEventListener('load', function () {
   burgerHandler()
   sliderProducts()
   console.log(slick)
})

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
   const slider = sliderEl.slick({
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
            breakpoint: 568,
            settings: {
               centerMode: false,
               initialSlide: 0,
               slidesToShow: 1,
            }
         },
      ]
   });

}
