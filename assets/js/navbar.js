let hamburgerButton = document.getElementById("hamburgerButton");
let menuList = document.getElementById("menuList");

hamburgerButton.addEventListener("click", () => {
  menuList.classList.toggle("hide-menu");
  menuList.classList.toggle("show-menu");
});
