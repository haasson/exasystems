export default class Quiz {
   constructor(props = {}) {
      console.log('here')
      const {selectors = {}, extraBlocksClass, inPopup, onFinish} = props
      this.quiz = document.querySelector(selectors.quiz || '.quiz')
      console.log(selectors)
      // this.inPopup = inPopup
      this.changeOnChoose = props.changeOnChoose
      this.form = this.quiz.querySelector('form')
      this.steps = this.quiz.querySelectorAll(selectors.question || '.quiz_question')
      this.mainBlock = this.quiz.querySelector(selectors.mainBlock || '.quiz_main')
      this.finalBlock = this.quiz.querySelector(selectors.finalBlock || '.quiz_final')
      this.progressSteps = this.quiz.querySelectorAll(selectors.progressStep || '.quiz_progress-step')
      this.progressBar = this.quiz.querySelector(selectors.progressBar || '.quiz_progress-bar')
      this.countCurrent = this.quiz.querySelector(selectors.counter || '.quiz_current-count')
      this.countTotal = this.quiz.querySelector(selectors.total || '.quiz_total-count')
      this.prevBtn = this.quiz.querySelector(selectors.btnPrev || '.quiz_btn-prev')
      this.nextBtn = this.quiz.querySelector(selectors.btnNext || '.quiz_btn-next')
      this.step = 0
      this.quizLength = this.steps.length
      this.extraBlocks = this.quiz.querySelectorAll(extraBlocksClass || '.quiz_extra')
      // this.finalForm = document.querySelector('#quiz-form-final')
      // this.takeBonusForm = document.querySelector('#take-bonus-form')
      this.onFinish = onFinish

      this.run()
   }

   run() {
      // this.steps = [...this.stepsBlock.children]
      // this.progressSteps = this.progressStepsBlock && [...this.progressStepsBlock.children]
      this.setEvents()
      this.setStep(0)
      this.hideBlock(this.finalBlock)
   }

   setEvents() {
      this.prevBtn && this.prevBtn.addEventListener('click', this.clickBtn.bind(this, 'prev'))
      this.nextBtn && this.nextBtn.addEventListener('click', this.clickBtn.bind(this, 'next'))
      if (this.changeOnChoose) {
         this.form.addEventListener('click', this.clickOnRadio.bind(this))
      }
   }

   clickBtn(btnType) {
      console.log(btnType)
      if(btnType === 'prev') {
         this.setStep(this.step - 1)
      } else {
         this.setStep(this.step + 1)
      }
   }

   clickOnRadio(e) {
      if (e.target.getAttribute('type') === 'radio') {
         setTimeout(() => {
            this.setStep(this.step + 1)
         }, 200);
      }
   }

   setStep(step) {
      if(step > this.quizLength - 1) {
         this.collectData()
         console.log(this.mainBlock, this.finalBlock)
         this.hideBlock(this.mainBlock)
         this.showBlock(this.finalBlock)
         return
      }
      this.step = step
      this.showSlide()

      if (this.countCurrent) {
         this.setCount()
      }
      if(this.progressBar) {
         this.actualizeProgressBar()
      }
      if(this.progressSteps) {
         this.actualizeProgressSteps()
      }
      if(this.extraBlocks.length) {
         this.showExtraBlock()
      }
      if (step !== 0) {
         // this.scrollTop()
      }
   }

   showSlide() {
      this.steps.forEach((item) => {
         this.hideBlock(item)
      })
      this.showBlock(this.steps[this.step])

      if(this.prevBtn) {
         this.step === 0 ? this.hideBlock(this.prevBtn) : this.showBlock(this.prevBtn)
      }
   }

   setCount() {
      if(!this.totalSet) {
         this.countTotal.innerHTML = this.quizLength
         this.totalSet = true
      }
      this.countCurrent.innerHTML = this.step + 1
   }

   scrollTop() {
      let startPosition = this.getCoords(this.progressBar).top
      if (document.documentElement.clientWidth <= 992) {
         window.scrollTo(0, startPosition - 30)
      }
   }

   getCoords(elem) {
      let box = elem.getBoundingClientRect();
      return {
         top: box.top + window.pageYOffset,
         left: box.left + window.pageXOffset
      }
   }

   hideBlock(block) {
      block.style.display = 'none'
   }

   showBlock(block) {
      block.style.display = 'block'
   }

   actualizeProgressBar() {
      let activeBar = this.progressBar.querySelector('div')
      let width = (this.step + 1) / this.steps.length * 100
      activeBar.style.width = `${width}%`
   }

   actualizeProgressSteps() {
      console.log(this.progressSteps, this.step)
      this.progressSteps.forEach((item, i) => {
         item.classList.remove('done', 'current')
         if (i < this.step) {
            item.classList.add('done')
         } else if (i === this.step) {
            item.classList.add('current')
         }
      })
   }

   showExtraBlock() {
      this.extraBlocks.forEach((item) => {
         let video = item.querySelector('video')
         item.classList.add('hide')
         if (video) {
            video.pause()
         }
         if(item.classList.contains(`advice__item_${this.step+1}`)) {
            item.classList.remove('hide')
         }
      })
   }

   collectData() {
      // this.formData = $(this.form).serialize();
      this.onFinish && this.onFinish()
   }
}
