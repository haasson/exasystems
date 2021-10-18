import * as noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import 'nouislider/dist/nouislider.css';

export default () => {
   console.log(noUiSlider)
   const rangeEl = document.querySelector('[type=range]')
   const rangeCount = document.querySelector('.range-count')
   const fakeRange = document.querySelector('.fake-range')
   if (fakeRange) {
      let uiSlider = noUiSlider.create(fakeRange, {
         start: 10,
         range: {
            'min': 1,
            'max': 100
         },
         step: 1,
         format: wNumb({
            decimals: 0,
            thousand: " "
         }),
      })
      uiSlider.on('update', (values) => {
         rangeEl.setAttribute('value', values[0])
         rangeCount.innerHTML = values[0]
      });
   }
}




class FormRange {
   constructor(props) {
      this.form = document.querySelector(props.formSelector)
      this.tooltips = props.tooltips || false
      this.decimals = props.decimals || 0
      this.endpoints = props.endpoints
      this.additionalTooltip = props.additionalTooltip
      this.run()
   }

   run() {
      this.createRange()
   }

   createRange() {
      let rangesList = this.form.querySelectorAll('input[type=range]')
      rangesList.forEach(item => {
         let name = item.getAttribute('name')
         let min = +(item.getAttribute('min'))
         let max = +(item.getAttribute('max'))
         let start = +(item.getAttribute('value'))
         let step = +(item.getAttribute('step'))
         let className = item.getAttribute('class')

         let rangeBlock = document.createElement('div')
         rangeBlock.classList.add(className, `${className}_${name}`)
         item.insertAdjacentHTML('afterend', rangeBlock.outerHTML);
         item.classList.add('hide')

         if (this.additionalTooltip) {
            this.setAdditionalValue(item, start)
         }


         if (this.endpoints) {
            this.addEndpoint(item, min, max)
         }

      })
   }

   addEndpoint(item, min, max) {
      let endpoints = item.closest('.form__input').querySelectorAll('.form__input-endpoint')
      let format = wNumb({ thousand: ' ' });

      endpoints.forEach(endpoint => {
         if (endpoint.classList.contains('start')) {
            endpoint.innerHTML = format.to(min)
         } else if (endpoint.classList.contains('end')) {
            endpoint.innerHTML = format.to(max)
         }
      })
   }

   setAdditionalValue(item, value) {
      let block = item.closest('.form__input').querySelector('.form__range-table')
      block.innerHTML = value
   }
}
