import $ from 'jquery'
import slick from 'slick-slider'

window.addEventListener('load', function () {
   burgerHandler()
   sliderProducts()
   sliderProjects()
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
      // centerMode: true,
      // centerPadding: '60px',
      // variableWidth: true
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
      // centerMode: true,
      // centerPadding: '60px',
      // variableWidth: true,
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
      // centerMode: true,
      // centerPadding: '60px',
      // variableWidth: true,
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
