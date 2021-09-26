import $ from "jquery";

export default function initModals() {
   $(".modal-link-full").click(function () {
      $(".modal-full").fadeIn(300);
   });
   $(".modal-link-price").click(function () {
      $(".modal-price").fadeIn(300);
   });
   $(".modal-link-callback").click(function () {
      $(".modal-callback").fadeIn(300);
   });

   $(".modal-bg").on('click', (e) => {
      if (e.target.closest('form')) {
         return
      }
      $(".modal-bg").fadeOut(300);
      $("progress.file-progress").addClass("hide")
      $(".file-send").addClass("hide")
   })
}
