import nav from "./components/nav.js";
import navSmall from "./components/navSmall.js";
import about from "./pages/about.js";
import aboutSmall from "./pages/aboutSmall.js";
import work from "./pages/work.js";
import contact from "./pages/contact.js";
import navTiny from "./pages/navTiny.js";

const navEl = document.getElementById("nav");
const mainEl = document.getElementById("main");
let linkEls = document.querySelectorAll(".nav-link");
const navSmallSelectEl = document.getElementById("menu-select-s");

let activeLink = "about";
// let prevLink = "about";
let initWidth =  window.innerWidth;

// const generateTinyNav = () => {
//     return navTiny();
//     ;
// }

const mainBig = () => {
  switch (activeLink) {
    case "about":
      return about();
    case "work":
      return work();
    case "contact":
      return contact();
    // case "nav-tiny":
    //     return navTiny();
    // case "close-nav-tiny":
    //     activeLink = prevLink;
    //     return mainBig();
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

const toggleTinyNavSelector = () => {
  if (navSmallSelectEl.dataset.loc === "nav-tiny") {
    // navSmallSelectEl.removeAttribute("data-loc");
    navSmallSelectEl.setAttribute("data-loc", "close-nav-tiny");
    console.log("SET CLOSE")
  } else {
    // navSmallSelectEl.removeAttribute("data-loc");
    navSmallSelectEl.setAttribute("data-loc", "nav-tiny");
    console.log("SET OPEN");
  }
};

const linksForBig = () => {
    linkEls.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
  activeLink = link.dataset.loc;
  mainEl.innerHTML = mainBig();
  if (activeLink === "nav-tiny") {
    linkEls = document.querySelectorAll(".nav-link");
    generateLinks();
    activeLink = "";
  }
  console.log(linkEls);
});
    })};

const linksForSmall = () => {
    linkEls.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
    console.log(link);
    const loc = link.dataset.loc;
    console.log(loc);
    // if (loc !== loca){
    //     console.log(loc);
    //     console.log(loca);
    //     return;
    // }
  if (
    loc !== "close-nav-tiny" &&
    loc !== "nav-tiny"
  ) {
    console.log("reg");
    activeLink = link.dataset.loc;
    mainEl.innerHTML = mainBig();
    toggleTinyNavSelector();
  }
  if (loc === "close-nav-tiny") {
    console.log("close");
    mainEl.innerHTML = mainBig();
    toggleTinyNavSelector();
  }
  if (loc === "nav-tiny") {
    console.log("nav");
    mainEl.innerHTML = navTiny();
    toggleTinyNavSelector();
    linkEls = document.querySelectorAll(".nav-link");
    generateLinks();
  }
});
});
};

const generateLinks = () => {
  const winWidth = window.innerWidth;
      if (winWidth <= 790) {
          console.log("SMALL!!!!")
        linksForSmall();
      } else {
          console.log("BIG!!")
        linksForBig();
      }
    }

//   linkEls.forEach((link) => {
//       link.addEventListener("click", (e) => {
//     e.preventDefault();

// })
//   });

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
  generateLinks();
};

window.onresize = () => {
  const initDiff = initWidth - 790;
  const winWidth = window.innerWidth;
  const currentDiff = winWidth - 790;
  if (initDiff*currentDiff < 0) {
    initWidth = window.innerWidth;
    generateLinks();
  }
};
