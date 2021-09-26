import $ from "jquery";

export default function reviewsSlider() {
   const sliderEl = $('.reviews__slider');
   if (!sliderEl) return
   
   sliderEl.on('init', function(){
      sliderEl.removeClass("hide")
   });
   sliderEl.slick({
      arrows: false,
      slidesToShow: 1,
      variableWidth: true,
      infinite: false
   })
}
