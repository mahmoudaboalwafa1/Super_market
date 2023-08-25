const { default: Social } = require("./Social.js");
const { default: Contact } = require("./Contact.js");
const { default: Quick } = require("./Quick.js");
const { default: NewsLetter } = require("./NewsLetter.js");
const styleFooter = require("../../../public/css/footer.css");

// Start Footer
const Footer = () => {
  const sectionFooter = document.createElement("footer");
  const containerFooter = document.createElement("div");
  const boxCopyright = document.createElement("div");
  const spanCopyRight = document.createElement("span");
  const textCopyRight = document.createElement("span");

  containerFooter.classList.add("container");
  boxCopyright.classList.add("copy-right");
  spanCopyRight.classList.add("color-orange");

  boxCopyright.textContent = "Created By ";
  spanCopyRight.textContent = "Mahmoud Abo Alwafa";
  textCopyRight.textContent = " | All Rights Reserved";

  Social(containerFooter);
  Contact(containerFooter);
  Quick(containerFooter);
  NewsLetter(containerFooter);

  sectionFooter.appendChild(containerFooter);
  sectionFooter.appendChild(boxCopyright);
  boxCopyright.appendChild(spanCopyRight);
  boxCopyright.appendChild(textCopyRight);
  document.body.appendChild(sectionFooter);
};

export default Footer;
