const home = document.getElementById("home");
home.onclick = () => {
  let box = document.querySelector(".header");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const footerHome = document.getElementById("footerHome");
footerHome.onclick = () => {
  let box = document.querySelector(".header");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const shop = document.getElementById("shop");
shop.onclick = () => {
  let box = document.querySelector(".productSell");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const blog = document.getElementById("blog");
blog.onclick = () => {
  let box = document.querySelector(".blog");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const footerblog = document.getElementById("footerblog");
footerblog.onclick = () => {
  let box = document.querySelector(".blog");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const aboutUs = document.getElementById("aboutUs");
aboutUs.onclick = () => {
  let box = document.querySelector(".about");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const footerAboutUs = document.getElementById("footerAboutUs");
footerAboutUs.onclick = () => {
  let box = document.querySelector(".about");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const product = document.getElementById("product");
product.onclick = () => {
  let box = document.querySelector(".featured");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};

const footerProduct = document.getElementById("footerProduct");
footerProduct.onclick = () => {
  let box = document.querySelector(".featured");
  window.scrollTo({
    top: box.offsetTop,
    behavior: "smooth",
  });
};