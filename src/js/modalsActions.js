import $ from "jquery";

export default function initModals() {
   $("[data-modal]").click(function (e) {
      if (e.target.type !== 'submit') e.preventDefault()
      $(`.modal-${this.dataset.modal}`).fadeIn(300);
   });

   $(".modal-bg").on('click', (e) => {
      if (e.target.closest('.modal-content')) {
         return
      }
      closeModal()
   })
   $(".modal-bg .close").on('click', () => {
      closeModal()
   })
}

function closeModal() {
   $(".modal-bg").fadeOut(300);
   $("progress.file-progress").addClass("hide")
   $(".file-send").addClass("hide")
}
