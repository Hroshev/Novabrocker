const header = document.getElementById("header");
header.onclick = () => {
  let box = document.querySelector(".modal"); //секция на которую будет переход
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const promo = document.getElementById("promo");
promo.onclick = () => {
  let box = document.querySelector(".modal"); //секция на которую будет переход
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};