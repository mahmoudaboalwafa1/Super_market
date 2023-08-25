const MainTitle = (section, text, title) => {
  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("fs-3");
  mainTitle.textContent = text;
  const mainTitleOrange = document.createElement("span");
  mainTitleOrange.className = "compo ms-3";
  mainTitleOrange.textContent = title;
  section.appendChild(mainTitle);
  mainTitle.appendChild(mainTitleOrange);
};

export default MainTitle;
