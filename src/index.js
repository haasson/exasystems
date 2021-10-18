import 'promise-polyfill/src/polyfill';
import '@babel/polyfill/dist/polyfill.js'
import 'slick-slider/slick/slick.css'

let stylesPath
if (document.body.classList.contains('sks')) {
   stylesPath = 'sks'
} else {
   stylesPath = 'default'
}


import './js/main'
import(`./sass/pages/${stylesPath}.sass`)
import './js/svg-common'



window.addEventListener('load', function () {
})


