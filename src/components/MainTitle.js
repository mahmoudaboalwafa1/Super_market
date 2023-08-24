const MainTitle = (section, title) => {
  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("fs-3");
  mainTitle.textContent = "Our";
  const mainTitleOrange = document.createElement("span");
  mainTitleOrange.className = "compo ms-3";
  mainTitleOrange.textContent = title;
  section.appendChild(mainTitle);
  mainTitle.appendChild(mainTitleOrange);
};

export default MainTitle;
