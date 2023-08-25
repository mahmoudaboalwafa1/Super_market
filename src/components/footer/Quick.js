/* Start Quick */

const LinksQuick = [
  { icon: "fas fa-arrow-right color-orange pe-1", href: "#Home", text: "Home" },
  {
    icon: "fas fa-arrow-right color-orange pe-1",
    href: "#features",
    text: "Features",
  },
  {
    icon: "fas fa-arrow-right color-orange pe-1",
    href: "#products",
    text: "Products",
  },
  {
    icon: "fas fa-arrow-right color-orange pe-1",
    href: "#category",
    text: "Category",
  },
  {
    icon: "fas fa-arrow-right color-orange pe-1",
    href: "#review",
    text: "Review",
  },
  {
    icon: "fas fa-arrow-right color-orange pe-1",
    href: "#blogs",
    text: "Blogs",
  },
];

const Quick = (containerFooter) => {
  const sectionQuick = document.createElement("div");
  const titleQuick = document.createElement("h3");

  sectionQuick.appendChild(titleQuick);

  sectionQuick.classList.add("quick");
  titleQuick.textContent = "Quick Links";

  LinksQuick.map((link) => {
    const { href, icon, text } = link;
    const ParentLinkQuick = document.createElement("p");
    const iconQuick = document.createElement("i");
    const linkQuick = document.createElement("a");

    iconQuick.className = icon;

    linkQuick.href = href;
    linkQuick.textContent = text;

    sectionQuick.appendChild(ParentLinkQuick);
    ParentLinkQuick.appendChild(iconQuick);
    ParentLinkQuick.appendChild(linkQuick);
  });

  containerFooter.appendChild(sectionQuick);
};

export default Quick;

/* End Quick */
