const { default: Header } = require("../components/Header.js");
const { default: Hero } = require("../components/Hero.js");
const { default: Parent } = require("../components/Parent.js");
const { default: Footer } = require("../components/footer/Footer.js");

const App = () => {
  Header();
  Hero();
  Parent();
  Footer();
};

export default App;
