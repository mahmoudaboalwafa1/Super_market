import MainTitle from "./MainTitle";
import imgProductOne from "../../public/images/product-1.png";
import imgProductTwo from "../../public/images/product-2.png";
import imgProductThree from "../../public/images/product-3.png";
import imgProductFour from "../../public/images/product-4.png";
import imgProductFive from "../../public/images/product-5.png";
import imgProductSix from "../../public/images/product-6.png";
import imgProductSeven from "../../public/images/product-7.png";
import imgProductEight from "../../public/images/product-8.png";

const productsStyle = require("../../public/css/products.css");

const dataBoxesProducts = [
  {
    img: imgProductOne,
    title: "Fresh Orange",
    price: "$4.99/- - 10.99/-",
    stars: [
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
    ],
  },
  {
    img: imgProductTwo,
    title: "Fresh Onion",
    price: "$4.99/- - 10.99/-",
    stars: [
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
    ],
  },
  {
    img: imgProductThree,
    title: "Fresh Meat",
    price: "$4.99/- - 10.99/-",
    stars: [
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
    ],
  },
  {
    img: imgProductFour,
    title: "Fresh Cabbage",
    price: "$4.99/- - 10.99/-",
    stars: [
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
    ],
  },
  {
    img: imgProductFive,
    title: "Fresh Potato",
    price: "$4.99/- - 10.99/-",
    stars: [
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
    ],
  },
  {
    img: imgProductSix,
    title: "Fresh Avocado",
    price: "$4.99/- - 10.99/-",
    stars: [
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
    ],
  },
  {
    img: imgProductSeven,
    title: "Fresh Carrot",
    price: "$4.99/- - 10.99/-",
    stars: [
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
    ],
  },
  {
    img: imgProductEight,
    title: "Fresh Lemon",
    price: "$4.99/- - 10.99/-",
    stars: [
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
    ],
  },
];

const Products = (Container) => {
  const sectionProducts = document.createElement("section");
  sectionProducts.id = "products";
  sectionProducts.className = "text-center pt-5 pb-5";
  MainTitle(sectionProducts, "Our", "Products");

  const ContainerBoxes = document.createElement("ul");
  ContainerBoxes.classList.add("d-grid");
  dataBoxesProducts.map((box) => {
    const { img, title, price, stars } = box;

    const boxParent = document.createElement("div");
    const imgBox = document.createElement("img");
    const titleBox = document.createElement("h2");
    const priceBox = document.createElement("p");
    const containerStars = document.createElement("div");
    const buttonBox = document.createElement("button");

    boxParent.className = "content border-rd-6";
    buttonBox.className = "bg-trans btn-shape";

    imgBox.src = img;
    titleBox.textContent = title;
    priceBox.textContent = price;
    buttonBox.textContent = "Add To Cart";

    ContainerBoxes.appendChild(boxParent);
    boxParent.appendChild(imgBox);
    boxParent.appendChild(titleBox);
    boxParent.appendChild(priceBox);

    containerStars.classList.add("stars");

    stars.map((star) => {
      const starBox = document.createElement("i");
      starBox.className = star;
      containerStars.appendChild(starBox);
    });

    boxParent.appendChild(containerStars);
    boxParent.appendChild(buttonBox);
  });

  Container.appendChild(sectionProducts);
  sectionProducts.appendChild(ContainerBoxes);
};

export default Products;
