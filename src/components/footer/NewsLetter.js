import imgCredit from "../../../public/images/payment.png";

const NewsLetter = (containerFooter) => {
  const sectionNews = document.createElement("div");
  const titleNews = document.createElement("h3");
  const textNews = document.createElement("p");
  const formNews = document.createElement("form");
  const inputEmail = document.createElement("input");
  const btnNews = document.createElement("button");
  const containerCards = document.createElement("div");
  const imgCards = document.createElement("img");

  sectionNews.classList.add("news-latter");
  containerCards.classList.add("cards");
  btnNews.className = "bg-trans btn-shape";
  containerCards.classList.add("cards");

  titleNews.textContent = "NewsLetter";
  textNews.textContent = "Subscribe For Latest Updates";
  inputEmail.type = "email";
  inputEmail.name = "email";
  inputEmail.placeholder = "Your Email";
  btnNews.textContent = "Subscribe";
  imgCards.src = imgCredit;
  imgCards.alt = "payment";

  sectionNews.appendChild(titleNews);
  sectionNews.appendChild(textNews);
  sectionNews.appendChild(formNews);
  formNews.appendChild(inputEmail);
  formNews.appendChild(btnNews);
  formNews.appendChild(containerCards);
  containerCards.appendChild(imgCards);
  containerFooter.appendChild(sectionNews);
};

export default NewsLetter;
