const links = [
  { href: "#", icon: "fab fa-facebook-f" },
  { href: "#", icon: "fab fa-twitter" },
  { href: "#", icon: "fab fa-instagram" },
  { href: "#", icon: "fab fa-linkedin" },
];

const Social = (containerFooter) => {
  const socialBox = document.createElement("div");
  const titleSocial = document.createElement("h3");
  const textSocial = document.createElement("p");
  const containerSocial = document.createElement("div");
  const textTitleSocial = document.createElement("span");
  const iconTitleSocial = document.createElement("i");

  socialBox.classList.add("social");
  textSocial.classList.add("ln-2");
  containerSocial.classList.add("media");
  textTitleSocial.classList.add("pe-1");
  iconTitleSocial.className = "fas fa-shopping-basket color-orange";

  textTitleSocial.textContent = "SuperMarket";
  textSocial.textContent =
    "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Aliquam, Saepe.";

  containerFooter.appendChild(socialBox);
  socialBox.appendChild(titleSocial);
  titleSocial.appendChild(textTitleSocial);
  titleSocial.appendChild(iconTitleSocial);
  socialBox.appendChild(textSocial);
  socialBox.appendChild(containerSocial);

  links.map((link) => {
    const { href, icon } = link;
    const linkSocial = document.createElement("a");
    const iconSocial = document.createElement("i");
    linkSocial.href = href;
    iconSocial.className = icon;
    containerSocial.appendChild(linkSocial);
    linkSocial.appendChild(iconSocial);
  });

  titleSocial.appendChild(textTitleSocial);
  titleSocial.appendChild(iconTitleSocial);
};

export default Social;
