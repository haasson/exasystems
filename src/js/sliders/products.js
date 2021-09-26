import $ from "jquery";

export default function sliderProducts() {
   const sliderEl = $('.products__slider');
   if (!sliderEl) return

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
