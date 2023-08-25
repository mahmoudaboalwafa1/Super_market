const style = require("../../public/css/style.css");
const all = require("../../public/css/all.css");

const { default: App } = require("./app");

App();

// Start Header

// End Header

// Start Products
// let ProductsImg = document.querySelectorAll("#products div img");
// let ProductsTitle = document.querySelectorAll("#products div h2");
// let contentsProducts = [
//   {
//     boxImg1: "../static/product-1.png",
//     boxTitle: "Fresh Orange",
//   },
//   {
//     boxImg1: "../static/product-2.png",
//     boxTitle: "Fresh Onion",
//   },
//   {
//     boxImg1: "../static/product-3.png",
//     boxTitle: "Fresh Meat",
//   },
//   {
//     boxImg1: "../static/product-4.png",
//     boxTitle: "Fresh Cabbage",
//   },
//   {
//     boxImg1: "../static/product-5.png",
//     boxTitle: "Fresh Potato",
//   },
//   {
//     boxImg1: "../static/product-6.png",
//     boxTitle: "Fresh Avocado",
//   },
//   {
//     boxImg1: "../static/product-7.png",
//     boxTitle: "Fresh Carrot",
//   },
//   {
//     boxImg1: "../static/product-8.png",
//     boxTitle: "Fresh Lemon",
//   },
// ];

// for (let i = 0; i < ProductsImg.length; i++) {
//   setInterval(() => {
//     let rand1 = Math.floor(Math.random() * ProductsImg.length);
//     let rand2 = Math.floor(Math.random() * ProductsImg.length);

//     ProductsImg[rand1].src = contentsProducts[rand2].boxImg1;
//     ProductsTitle[rand1].textContent = contentsProducts[rand2].boxTitle;
//   }, 3000);
// }
// End Products
