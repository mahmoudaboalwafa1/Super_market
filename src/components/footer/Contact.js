const linksContact = [
  {
    href: "tel: +201285817158",
    text: "012858517158",
    icon: "fas fa-phone color-orange pe-1",
  },
  {
    href: "tel: +201001181167",
    text: "01001181167",
    icon: "fas fa-phone color-orange pe-1",
  },
  {
    href: "mailto:112mahmoudsayed@gmail.com",
    text: "112mahmoudsayed@gmail.com",
    icon: "fas fa-envelope color-orange pe-1",
  },
  {
    text: "Fakous,Ash-Sharkia,Egypt",
    icon: "fas fa-map-marker-alt color-orange pe-1",
  },
];

const Contact = (containerFooter) => {
  const sectionContact = document.createElement("div");
  const titleContact = document.createElement("h3");
  const containerContacts = document.createElement("div");

  titleContact.textContent = "Contact Info";

  linksContact.map((link) => {
    const { icon, href, text } = link;
    const linkContact = document.createElement("a");
    const iconContact = document.createElement("i");
    const textContact = document.createElement("span");

    linkContact.href = href ? href : "";

    linkContact.classList.add("d-block");
    iconContact.className = icon;

    containerContacts.appendChild(linkContact);
    linkContact.appendChild(iconContact);
    linkContact.appendChild(textContact);
    containerContacts.appendChild(linkContact);

    textContact.textContent = text;
  });

  sectionContact.classList.add("contact");
  containerContacts.classList.add("contacts");

  containerFooter.appendChild(sectionContact);
  sectionContact.appendChild(titleContact);
  sectionContact.appendChild(containerContacts);
};

export default Contact;
