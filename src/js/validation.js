class ValidateForm {
   constructor(props) {
      this.form = document.querySelector(`#${props.formID}`)
      this.submitBtn = this.form.querySelector('[type="submit"]');
      this.inputs = props.inputs
      this.inputsCount = this.form.querySelectorAll('.inp-validate').length
      this.validInputs = new Map()

      this.run()
   }

   run() {
      this.validate()
      this.submit()
   }

   validate() {
      for (const item in this.inputs) {
         let obj = this.inputs[item]
         let inputs = this.form.querySelectorAll(`.inp-validate input[type=${obj.type}]`)

         inputs.forEach(input => {
            let inputParent = input.closest('.form__line')
            input.addEventListener('focus', () => {
               inputParent.classList.remove('inp-error')
            })

            if (obj.type === 'tel') {
               input.addEventListener('keyup', () => {
                  console.log(input.value.indexOf('_'));
                  if (input.value.indexOf('_') === -1) {
                     this.setInputOk(inputParent)
                  } else {
                     this.setInputError(inputParent)
                  }
               })
            }
            else {
               input.addEventListener('keyup', () => {
                  if (input.value.match(obj.pattern)) {
                     this.setInputOk(inputParent)
                  }
                  else {
                     this.setInputError(inputParent)
                  }
               })
            }
         })
      }
   }

   setInputOk(input) {
      input.classList.add('inp-ok')
      this.validInputs.set(input, null)
      this.checkValidInputsCount()
   }

   setInputError(input) {
      input.classList.remove('inp-ok')
      this.validInputs.delete(input, null)
      this.checkValidInputsCount()
   }

   checkValidInputsCount() {
      if (this.inputsCount == this.validInputs.size) {
         this.submitBtn.classList.add('form-valid')
      }
      else {
         this.submitBtn.classList.remove('form-valid')
      }
   }

   submit() {
      this.form.addEventListener('submit', (e) => {
         e.preventDefault()

         if (this.submitBtn.classList.contains('form-valid')) {
            submitForm(this.form)
         }
         else {
            let inputs = this.form.querySelectorAll('.inp-validate')
            inputs.forEach(input => {
               if (!input.classList.contains('inp-ok')) {
                  input.classList.add('inp-error')
               }
            })
         }
      })
   }
}
