import nav from "./components/nav.js";
import navSmall from "./components/navSmall.js";
import about from "./pages/about.js";
import aboutSmall from "./pages/aboutSmall.js";
import work from "./pages/work.js";
import contact from "./pages/contact.js";

const navEl = document.getElementById("nav");
const mainEl = document.getElementById("main");
let linkEls = document.querySelectorAll(".nav-link");

let activeLink = "about";

// const generateElements = () => {
//     linkEls = document.querySelectorAll(".nav-link");
// }

const mainBig = () => {
  switch (activeLink) {
    case "about":
      return about();
    case "work":
        return work();
    case "contact":
        return contact();
    default:
      break;
  }
};

const mainSmall = () => {
  switch (activeLink) {
    case "about":
      return aboutSmall();
    // case "work":
    //     return workSmall();
    // case "contact":
        // return contactSmall();
    default:
      break;
  }
};

// const generateLinks = () => {
    linkEls.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        activeLink = link.dataset.loc;
        mainEl.innerHTML = mainBig();
      });
    });
//   };

// const sizeChecker = () => {
//   const winWidth = window.innerWidth;

//   if (winWidth <= 790) {
//     navEl.innerHTML = navSmall();
//     mainEl.innerHTML = mainSmall();
//     generateElements();
//     generateLinks();
//   } else {
//     navEl.innerHTML = nav();
//     mainEl.innerHTML = mainBig();
//     generateElements();
//     generateLinks();
//   }
// };



window.onload = () => {
    mainEl.innerHTML = mainBig();
};

// window.onresize = () => {
//   sizeChecker();
// };
