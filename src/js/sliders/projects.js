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
      infinite: false,
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

   const galleryEl_5 = $('.projects__slide_5 .projects__gallery-slider');
   const imageEl5 = $('.projects__slide_5 .projects__photo')
   galleryEl_5.on('init', function(){
      galleryEl_5.removeClass("hide")
   });
   galleryEl_5.on('beforeChange', function(e, slider, prevSlide, currentSlide){
      imageEl5[0].setAttribute('src', `assets/img/6projects/5/${currentSlide + 1}.jpg`)
   });
   galleryEl_5.slick({
      slidesToShow: 5,
      arrows: false,
      focusOnSelect: true,
      responsive: [
         {
            breakpoint: 420,
            settings: {
               slidesToShow: 4,
            }
         },
      ]
   })

   const galleryEl_6 = $('.projects__slide_6 .projects__gallery-slider');
   const imageEl6 = $('.projects__slide_6 .projects__photo')
   galleryEl_6.on('init', function(){
      galleryEl_6.removeClass("hide")
   });
   galleryEl_6.on('beforeChange', function(e, slider, prevSlide, currentSlide){
      console.log(imageEl6)
      imageEl6[0].setAttribute('src', `assets/img/6projects/6/${currentSlide + 1}.jpg`)
   });
   galleryEl_6.slick({
      slidesToShow: 5,
      arrows: false,
      focusOnSelect: true,
      responsive: [
         {
            breakpoint: 420,
            settings: {
               slidesToShow: 4,
            }
         },
      ]
   })
}
