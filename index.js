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
let navSmallSelectEl = document.getElementById("menu-select-s");


let activeLink = "about";
let initWidth = window.innerWidth;

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

const linksForBig = () => {
  linkEls.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      activeLink = link.dataset.loc;
      linkEls.forEach((link) => {
          link.setAttribute("class", "nav-link inactive")
      });
      link.setAttribute("class", "nav-link active");
      mainEl.innerHTML = mainBig();
    });
  });
};

const toggleTinyNavSelector = () => {
    const navTinyEl = document.getElementById("nav-tiny");
    console.log("HERE!")
  if (navSmallSelectEl.dataset.loc === "nav-tiny" && navTinyEl) {
    navSmallSelectEl.setAttribute("data-loc", "close-nav-tiny");
    console.log("SET CLOSE");
  } else if (navSmallSelectEl.dataset.loc === "close-nav-tiny" && !navTinyEl){
    navSmallSelectEl.setAttribute("data-loc", "nav-tiny");
    console.log("SET OPEN");
  } else {console.log("WHAT IS HAPPENING?")}
//   else {
//       console.log("NOW WHAT");
//     const navTinyEl = document.getElementById("nav-tiny");
//     if (navTinyEl) {
//         navSmallSelectEl.setAttribute("data-loc", "close-nav-tiny");
//     } else {
//         navSmallSelectEl.setAttribute("data-loc", "nav-tiny");
//     }
//   }
};


const linksForSmall = () => {
  linkEls.forEach((link) => {
    link.addEventListener("click",  (e) => {
      e.preventDefault();
       console.log(link);
      console.log(link.dataset.loc);
      const loc = link.dataset.loc;
    //   navSmallSelectEl.removeAttribute("data-loc");
      console.log(loc);
      if (loc !== "close-nav-tiny" && loc !== "nav-tiny") {
        activeLink = link.dataset.loc;
        mainEl.innerHTML = mainBig();
      }
      if (loc === "close-nav-tiny") {
        mainEl.innerHTML = mainBig();
      }
      if (loc === "nav-tiny") {
        mainEl.innerHTML = navTiny();
        linkEls = document.querySelectorAll(".nav-link");
        linksForSmall();
    }
      toggleTinyNavSelector();
    });
  });
};

const generateLinks = () => {
  const winWidth = window.innerWidth;
  if (winWidth <= 790) {
    linksForSmall();
  } else {
    linksForBig();
  }
};

window.onload = () => {
  mainEl.innerHTML = mainBig();
  generateLinks();
};

window.onresize = () => {
  const initDiff = initWidth - 790;
  const winWidth = window.innerWidth;
  const currentDiff = winWidth - 790;
  if (initDiff * currentDiff < 0) {
    initWidth = window.innerWidth;
    generateLinks();
  }
};
