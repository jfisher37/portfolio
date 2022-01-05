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
let navSmallSelectBtn = document.getElementById("menu-select-s");

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
        link.setAttribute("class", "nav-link inactive");
      });
      link.setAttribute("class", "nav-link active");
      mainEl.innerHTML = mainBig();
    });
  });
};

const toggleTinyNavSelector = () => {
  if (navSmallSelectBtn.dataset.selector === "nav-tiny") {
    navSmallSelectBtn.setAttribute("data-selector", "close-nav-tiny");
  } else if (navSmallSelectBtn.dataset.selector === "close-nav-tiny") {
    navSmallSelectBtn.setAttribute("data-selector", "nav-tiny");
  }
};

navSmallSelectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (navSmallSelectBtn.dataset.selector === "nav-tiny") {
    mainEl.innerHTML = navTiny();
    linkEls = document.querySelectorAll(".nav-link");
    linksForSmall();
  } else {
    mainEl.innerHTML = mainBig();
  }
  toggleTinyNavSelector();
});

const linksForSmall = () => {
  linkEls.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
        activeLink = link.dataset.loc;
        mainEl.innerHTML = mainBig();
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
