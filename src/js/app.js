const { default: Header } = require("../components/Header.js");
const { default: Hero } = require("../components/Hero.js");
const { default: Parent } = require("../components/Parent.js");

const App = () => {
  Header();
  Hero();
  Parent();
};

export default App;
