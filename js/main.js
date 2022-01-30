const navBtn = document.querySelector("#mobileNav__btn");
const navMenu = document.querySelector("#mobileNav__menu");
const navSeperator = document.querySelector("#mobileNav__hr");

navBtn.addEventListener("click", (event) => {
  navMenu.classList.toggle("--open");
  navSeperator.classList.toggle("--open");
});
