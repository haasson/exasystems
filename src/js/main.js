window.addEventListener('load', function () {

   let burger = document.querySelector(".j-menu-switcher")
   let menu = document.querySelector(".j-menu")
   burger.addEventListener("click", () => {
      menu.classList.toggle("active")
      burger.classList.toggle("active")
   })
})
