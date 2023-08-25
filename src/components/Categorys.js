const { default: MainTitle } = require("./MainTitle");
const styleCategory = require("../../public/css/category.css");
import CategoriesImgOne from "../../public/images/cat-1.png";
import CategoriesImgTwo from "../../public/images/cat-2.png";
import CategoriesImgThree from "../../public/images/cat-3.png";
import CategoriesImgFour from "../../public/images/cat-4.png";

const dataCategory = [
  {
    img: CategoriesImgOne,
    title: "Vegitables",
    text: "Upto 45% Off",
    btn: "Shop Now",
  },
  {
    img: CategoriesImgTwo,
    title: "Fresh Fruits",
    text: "Upto 45% Off",
    btn: "Shop Now",
  },
  {
    img: CategoriesImgThree,
    title: "Dairy Products",
    text: "Upto 45% Off",
    btn: "Shop Now",
  },
  {
    img: CategoriesImgFour,
    title: "Fresh Meat",
    text: "Upto 45% Off",
    btn: "Shop Now",
  },
];

const Categorys = (Container) => {
  const sectionCategorys = document.createElement("section");
  sectionCategorys.id = "category";
  sectionCategorys.className = "text-center pt-5";
  MainTitle(sectionCategorys, "Product", "Categories");

  // Boxes Category
  const containerBoxes = document.createElement("div");
  containerBoxes.className = "boxes-category d-grid";
  sectionCategorys.appendChild(containerBoxes);

  dataCategory.map((box) => {
    const { img, title, text, btn } = box;

    const boxContent = document.createElement("div");
    boxContent.classList.add("content");
    const imgBox = document.createElement("img");
    const titleBox = document.createElement("h2");
    const textBox = document.createElement("p");
    const btnBox = document.createElement("button");
    imgBox.src = img;
    imgBox.alt = title;
    titleBox.textContent = title;
    textBox.textContent = text;
    btnBox.textContent = btn;
    btnBox.className = "bg-trans btn-shape";

    boxContent.appendChild(imgBox);
    boxContent.appendChild(titleBox);
    boxContent.appendChild(textBox);
    boxContent.appendChild(btnBox);
    containerBoxes.appendChild(boxContent);
  });

  Container.appendChild(sectionCategorys);
};

export default Categorys;
