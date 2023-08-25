const { default: MainTitle } = require("./MainTitle.js");
const blogsStyle = require("../../public/css/blogs.css");
import blogOne from "../../public/images/blog-1.jpg";
import blogTwo from "../../public/images/blog-2.jpg";
import blogThree from "../../public/images/blog-3.jpg";

const dataBlogs = [
  {
    img: blogOne,
    dataUser: {
      iconUser: "fas fa-user color-orange pe-1",
      textUser: "By User",
      iconDate: "fas fa-calendar color-orange pe-1",
      textDate: "1st May,2022",
    },
    title: "Fresh And Organic Vegitables And Fruits",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.",
  },
  {
    img: blogTwo,
    dataUser: {
      iconUser: "fas fa-user color-orange pe-1",
      textUser: "By User",
      iconDate: "fas fa-calendar color-orange pe-1",
      textDate: "1st May,2022",
    },
    title: "Fresh And Organic Vegitables And Fruits",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.",
  },
  {
    img: blogThree,
    dataUser: {
      iconUser: "fas fa-user color-orange pe-1",
      textUser: "By User",
      iconDate: "fas fa-calendar color-orange pe-1",
      textDate: "1st May,2022",
    },
    title: "Fresh And Organic Vegitables And Fruits",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.",
  },
];

const Blogs = (Container) => {
  const sectionBlogs = document.createElement("section");
  sectionBlogs.id = "blogs";
  sectionBlogs.className = "text-center pt-5";

  MainTitle(sectionBlogs, "Our", "Blogs");

  // Boxs Blogs
  const parentBlogs = document.createElement("div");
  parentBlogs.className = "blog-boxes d-grid";

  dataBlogs.map((blog) => {
    const { img, dataUser, title, text } = blog;

    const containerBlogs = document.createElement("div");
    containerBlogs.className = "blog-box";
    const boxInnerBlog = document.createElement("div");
    boxInnerBlog.className = "inner-blog";
    const imgBlog = document.createElement("img");
    const dataUserList = document.createElement("ul");
    const user = document.createElement("li");
    const iconUser = document.createElement("i");
    const textUser = document.createElement("span");
    const date = document.createElement("li");
    const iconDate = document.createElement("i");
    const textDate = document.createElement("span");
    const titleBlog = document.createElement("h3");
    const textBlog = document.createElement("p");
    const btnBlog = document.createElement("button");

    imgBlog.src = img;
    imgBlog.alt = title;
    iconUser.className = dataUser.iconUser;
    textUser.textContent = dataUser.textUser;
    iconDate.className = dataUser.iconDate;
    textDate.textContent = dataUser.textDate;
    user.appendChild(iconUser);
    user.appendChild(textUser);
    date.appendChild(iconDate);
    date.appendChild(textDate);
    titleBlog.textContent = title;
    textBlog.textContent = text;
    btnBlog.textContent = "Read More";
    btnBlog.className = "bg-trans btn-shape";

    dataUserList.appendChild(user);
    dataUserList.appendChild(date);

    containerBlogs.appendChild(boxInnerBlog);
    containerBlogs.appendChild(imgBlog);
    containerBlogs.appendChild(dataUserList);
    containerBlogs.appendChild(titleBlog);
    containerBlogs.appendChild(textBlog);
    containerBlogs.appendChild(btnBlog);

    parentBlogs.appendChild(containerBlogs);
  });

  Container.appendChild(sectionBlogs);
  sectionBlogs.appendChild(parentBlogs);
};

export default Blogs;
