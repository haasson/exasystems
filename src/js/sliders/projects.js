import $ from "jquery";

export default function sliderProjects() {
   const sliderEl = $('.projects__slider');
   if (!sliderEl) return

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
