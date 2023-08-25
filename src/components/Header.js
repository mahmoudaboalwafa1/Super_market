const styleHeader = require("../../public/css/header.css");

const listHeader = [
  { href: "index.html", text: "Home" },
  { href: "#features", text: "Features" },
  { href: "#products", text: "Products" },
  { href: "#category", text: "Categories" },
  { href: "#review", text: "Review" },
  { href: "#blogs", text: "Blogs" },
];

const SpecialForAuserIcons = [
  "fas fa-bars menu",
  "fas fa-search search",
  "fas fa-shopping-cart",
  "fas fa-user",
];

const Header = () => {
  const containerHeader = document.createElement("div");
  containerHeader.classList.add("container");
  const headerElement = document.createElement("header");
  const headerTitle = document.createElement("h1");
  const basketIcon = document.createElement("i");
  basketIcon.className = "fas fa-shopping-basket color-orange pe-1";
  const textHeaderTitle = document.createTextNode("SuperMarket");

  headerTitle.appendChild(basketIcon);
  headerTitle.appendChild(textHeaderTitle);

  const navHeader = document.createElement("ul");
  navHeader.className = "hidden";

  listHeader.map((item) => {
    const { href, text } = item;
    const itemHeader = document.createElement("li");
    const linkHeader = document.createElement("a");

    linkHeader.href = href;
    linkHeader.textContent = text;

    itemHeader.appendChild(linkHeader);
    navHeader.appendChild(itemHeader);
  });

  const SpecialForAuser = document.createElement("ul");
  SpecialForAuserIcons.map((forUser, index) => {
    const liForUser = document.createElement("li");
    const iconForUser = document.createElement("i");

    iconForUser.className = forUser;

    SpecialForAuser.appendChild(liForUser);
    liForUser.appendChild(iconForUser);
  });

  headerElement.appendChild(headerTitle);
  headerElement.appendChild(navHeader);
  headerElement.appendChild(SpecialForAuser);
  document.body.appendChild(containerHeader);
  containerHeader.appendChild(headerElement);
};

export default Header;
