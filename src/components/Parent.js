const { default: Features } = require("../components/Features.js");
const { default: Products } = require("../components/Products.js");

const Parent = () => {
  const Parent = document.createElement("div");
  Parent.className = "bg-light pb-2";
  const Container = document.createElement("div");
  Container.classList.add("container");
  Features(Container);
  Products(Container);

  document.body.appendChild(Parent);
  Parent.appendChild(Container);
};

export default Parent;
