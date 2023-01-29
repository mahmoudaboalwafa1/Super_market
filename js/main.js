// Start Header
let btnMenu = document.querySelector(".menu");
let navBar = document.querySelector("header ul:first-of-type");
let seacrh = document.querySelector(".search");
let formSearch = document.querySelector(
  "header ul:last-child li:nth-child(2) form"
);
let basketIcon = document.querySelector("header ul:last-child li:nth-child(3)");
let basket = document.querySelector(".basket");
let btnUser = document.querySelector("header ul:last-child li:nth-child(4)");
let menuUser = document.querySelector("form.user");

btnMenu.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
  navBar.classList.toggle("show");
  formSearch.classList.remove("form");
  basket.classList.remove("show");
  menuUser.classList.remove("show");
});

seacrh.onclick = () => {
  formSearch.classList.toggle("form");
  navBar.classList.remove("show");
  navBar.classList.add("hidden");
  basket.classList.remove("show");
  menuUser.classList.remove("show");
};

basketIcon.onclick = () => {
  basket.classList.toggle("show");
  formSearch.classList.remove("form");
  navBar.classList.remove("show");
  navBar.classList.add("hidden");
  menuUser.classList.remove("show");
};

btnUser.onclick = () => {
  menuUser.classList.toggle("show");
  basket.classList.remove("show");
  formSearch.classList.remove("form");
  navBar.classList.remove("show");
  navBar.classList.add("hidden");
};

window.onscroll = () => {
  navBar.classList.remove("show");
  navBar.classList.add("hidden");
  formSearch.classList.remove("form");
  basket.classList.remove("show");
  menuUser.classList.remove("show");
};

// End Header

// Start Products
let ProductsImg = document.querySelectorAll("#products div img");
let ProductsTitle = document.querySelectorAll("#products div h2");
let contentsProducts = [
  {
    boxImg1: "../static/product-1.png",
    boxTitle: "Fresh Orange",
  },
  {
    boxImg1: "../static/product-2.png",
    boxTitle: "Fresh Onion",
  },
  {
    boxImg1: "../static/product-3.png",
    boxTitle: "Fresh Meat",
  },
  {
    boxImg1: "../static/product-4.png",
    boxTitle: "Fresh Cabbage",
  },
  {
    boxImg1: "../static/product-5.png",
    boxTitle: "Fresh Potato",
  },
  {
    boxImg1: "../static/product-6.png",
    boxTitle: "Fresh Avocado",
  },
  {
    boxImg1: "../static/product-7.png",
    boxTitle: "Fresh Carrot",
  },
  {
    boxImg1: "../static/product-8.png",
    boxTitle: "Fresh Lemon",
  },
];

for (let i = 0; i < ProductsImg.length; i++) {
  setInterval(() => {
    let rand1 = Math.floor(Math.random() * ProductsImg.length);
    let rand2 = Math.floor(Math.random() * ProductsImg.length);

    ProductsImg[rand1].src = contentsProducts[rand2].boxImg1;
    ProductsTitle[rand1].textContent = contentsProducts[rand2].boxTitle;
  }, 3000);
}
// End Products
