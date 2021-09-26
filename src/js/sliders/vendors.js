import $ from "jquery";

export default function vendorsSlider() {
   const sliderEl = $('.vendors__slider');
   if (!sliderEl) return

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
