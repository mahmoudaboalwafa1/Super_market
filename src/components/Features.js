import featureImgOne from "../../public/images/feature-img-1.png";
import featureImgTwo from "../../public/images/feature-img-2.png";
import featureImgThree from "../../public/images/feature-img-3.png";
import MainTitle from "./MainTitle";
const tyleFeatures = require("../../public/css/Features.css");

const boxesDataFeatures = [
  {
    img: featureImgOne,
    title: "Fresh And Organic",
    text: "Fresh natural fruits from the soil for the market",
  },
  {
    img: featureImgTwo,
    title: "Free Delivery",
    text: "The fastest delivery you may get is available only with us",
  },
  {
    img: featureImgThree,
    title: "Easy Payments",
    text: "Payment is easy and uncomplicated",
  },
];

const Features = (Container) => {
  const sectionFeatures = document.createElement("section");
  sectionFeatures.id = "features";
  sectionFeatures.className = "text-center pt-5";
  MainTitle(sectionFeatures, "Our", "Features");

  // Features Boxes
  const containerBoxes = document.createElement("ul");
  containerBoxes.className = "mt-4 d-grid";

  Container.appendChild(sectionFeatures);

  sectionFeatures.appendChild(containerBoxes);
  boxesDataFeatures.map((box) => {
    const { img, title, text } = box;
    const divContentBox = document.createElement("div");
    const imgBox = document.createElement("img");
    const titleBox = document.createElement("h3");
    const textBox = document.createElement("p");
    const btnBox = document.createElement("button");
    divContentBox.className = "content";
    imgBox.src = img;
    imgBox.alt = text;
    titleBox.textContent = title;
    textBox.textContent = text;
    btnBox.textContent = "Read More";
    btnBox.className = "bg-trans btn-shape fw-bold";

    containerBoxes.appendChild(divContentBox);
    divContentBox.appendChild(imgBox);
    divContentBox.appendChild(titleBox);
    divContentBox.appendChild(textBox);
    divContentBox.appendChild(btnBox);
  });
};

export default Features;
