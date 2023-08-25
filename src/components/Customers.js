const { default: MainTitle } = require("./MainTitle.js");
const styleCustomers = require("../../public/css/customers.css");
import customerOne from "../../public/images/pic-1.png";
import customerTwo from "../../public/images/pic-2.png";
import customerThree from "../../public/images/pic-3.png";
import customerFour from "../../public/images/pic-4.png";

const dataCustomers = [
  {
    img: customerOne,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod ab aperiam veritatis. Ab facilis consectetur nulla sapiente",
    title: "John Doe",
    stars: [
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star-half-alt",
    ],
  },
  {
    img: customerTwo,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod ab aperiam veritatis. Ab facilis consectetur nulla sapiente",
    title: "John Doe",
    stars: [
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star-half-alt",
    ],
  },
  {
    img: customerThree,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod ab aperiam veritatis. Ab facilis consectetur nulla sapiente",
    stars: [
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star-half-alt",
    ],
  },
  {
    img: customerFour,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod ab aperiam veritatis. Ab facilis consectetur nulla sapiente",
    stars: [
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star",
      "fas fa-star-half-alt",
    ],
  },
];

const Customers = (Container) => {
  const sectionCustomers = document.createElement("section");
  sectionCustomers.id = "review";
  sectionCustomers.className = "text-center pt-5";

  MainTitle(sectionCustomers, "Customer 's", "Review");
  Container.appendChild(sectionCustomers);

  // Boxes Customers
  const ContainerCustomers = document.createElement("div");
  ContainerCustomers.className = "customrs pt-5";

  dataCustomers.map((customer) => {
    const { img, text, title, stars } = customer;

    const parentCustomer = document.createElement("div");
    parentCustomer.classList.add("content");
    const imgCustomer = document.createElement("img");
    const containerStars = document.createElement("div");
    containerStars.classList.add("stars");
    imgCustomer.src = img;
    imgCustomer.alt = title;

    const textCustomer = document.createElement("p");
    textCustomer.textContent = text;

    const nameCustomer = document.createElement("h2");
    nameCustomer.textContent = title;

    stars.map((star) => {
      const iconStar = document.createElement("i");
      iconStar.className = star;

      containerStars.appendChild(iconStar);
    });

    parentCustomer.appendChild(imgCustomer);
    parentCustomer.appendChild(textCustomer);
    parentCustomer.appendChild(nameCustomer);
    parentCustomer.appendChild(containerStars);
    ContainerCustomers.appendChild(parentCustomer);
  });
  sectionCustomers.appendChild(ContainerCustomers);
};

export default Customers;
