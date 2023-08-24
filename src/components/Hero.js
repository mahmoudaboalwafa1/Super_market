const styleHero = require("../../public/css/hero.css");
import bannerImg from "../../public/images/banner-bg.webp";

const Hero = () => {
  const mainElement = document.createElement("main");
  const divBanner = document.createElement("div");
  divBanner.className = "text-banner text-center margin-center main";
  const titleHero = document.createElement("h2");
  titleHero.textContent = "Fresh And Organic Products For Your";
  titleHero.className = "fs-3";
  const textHero = document.createElement("p");
  textHero.textContent =
    "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Aliquam Libero Nostrum Veniam Facere Tempore Nisi.";
  textHero.className = "color-light ln-2 fs-2";
  const btnHero = document.createElement("button");
  btnHero.textContent = "Shop Now";
  btnHero.className = "bg-trans btn-shape";

  document.body.appendChild(mainElement);
  mainElement.appendChild(divBanner);
  divBanner.appendChild(titleHero);
  divBanner.appendChild(textHero);
  divBanner.appendChild(btnHero);
  mainElement.style.backgroundImage = `url("${bannerImg}")`;
};

export default Hero;
