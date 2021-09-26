import $ from "jquery";
import slick from 'slick-slider'
import sliderProducts from './products'
import sliderProjects from './projects'
import vendorsSlider from './vendors'
import reviewsSlider from './reviews'



export default function initSliders() {
   sliderProducts()
   sliderProjects()
   vendorsSlider()
   reviewsSlider()

   sliderControlsHandler()
}

function sliderControlsHandler() {
   $('.slider-line__arrows').on('click', (e) => {
      let slider = $(e.target).closest('.wrapper').find('.slider')
      if (e.target.classList.contains('slider-line__prev')) {
         slider.slick('slickPrev');
      } else if (e.target.classList.contains('slider-line__next')) {
         slider.slick('slickNext');
      }
   })
}
