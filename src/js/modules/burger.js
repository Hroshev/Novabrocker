
let menu = document.querySelector(".header__burger");
let menuBtn = document.querySelector(".burger-btn");
let closeBtn = document.querySelector(".close__burger");
let mask = document.querySelector(".burger__mask");

menuBtn.addEventListener("click", function () {
  mask.style.display = "block";
  document.body.style.overflow = "hidden";
  menu.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  mask.style.display = "none";
  document.body.style.overflow = "visible";
  menu.classList.remove("active");
});

mask.addEventListener("click", function () {
  mask.style.display = "none";
  document.body.style.overflow = "visible";
  menu.classList.remove("active");
});

for (let elem of document.querySelectorAll(".nav__button")) {
  elem.addEventListener("click", function () {
    document.body.style.overflow = "visible";
    mask.style.display = "none";
    menu.classList.remove("active");
  });
}