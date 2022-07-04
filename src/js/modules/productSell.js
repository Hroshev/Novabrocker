const cardsProduct = [
  {
    isAvaliable: true,
    imgUrl: "img/productWeSell/img1.png",
    title: "Couch Cartoon",
    text: "Lorem Iipsum is simple and dumy text",
    price: 159,
    rating: "img/productWeSell/3.5star.png",
  },
  {
    isAvaliable: true,
    imgUrl: "img/productWeSell/img2.png",
    title: "Cuero Chair",
    text: "Lorem Iipsum is simple and dumy text",
    price: 199,
    rating: "img/productWeSell/2.5star.png",
  },
  {
    isAvaliable: true,
    imgUrl: "img/productWeSell/img3.png",
    title: "Bedroom Bed",
    text: "Lorem Iipsum is simple and dumy text",
    price: 359,
    rating: "img/productWeSell/4.5star.png",
  },
  {
    isAvaliable: false,
    imgUrl: "img/productWeSell/img4.png",
    title: "Outdoor Table",
    text: "Lorem Iipsum is simple and dumy text",
    price: 99,
    rating: "img/productWeSell/3.5star.png",
  },
  {
    isAvaliable: true,
    imgUrl: "img/productWeSell/img5.png",
    title: "Wooden Drawer",
    text: "Lorem Iipsum is simple and dumy text",
    price: 299,
    rating: "img/productWeSell/2.5star.png",
  },
];

const makeElement = function (tagName, className, text) {
  const element = document.createElement(tagName);

  text ? (element.textContent = text) : "";
  className ? element.classList.add(className) : "";

  return element;
};

const createCard = function (product) {
  const listItem = makeElement("div", "swiper-slide");

  const picture = makeElement("img", "swiper-slide__relative");
  picture.src = product.imgUrl;
  listItem.appendChild(picture);

  const background = makeElement("div", "swiper-slide__background");
  listItem.appendChild(background);

  const title = makeElement("h3", "", product.title);
  listItem.appendChild(title);

  const star = makeElement("img");
  star.src = product.rating;
  listItem.appendChild(star);

  const price = makeElement("p", "", "$" + product.price);
  listItem.appendChild(price);

  const text = makeElement("h4", "", product.text);
  listItem.appendChild(text);

  const button = makeElement("a", "btn__min");
  button.href = "#";
  !product.isAvaliable ? (button.textContent = "Sold") : (button.textContent = "Add To Cart");
  listItem.appendChild(button);

  !product.isAvaliable ? listItem.classList.add("products__avaliable") : "";

  return listItem;
};

//Перебор массива
const cardList = document.querySelector(".swiper-wrapper");

for (let i = 0; i < cardsProduct.length; i++) {
  const cardItem = createCard(cardsProduct[i]);
  cardList.appendChild(cardItem);
}