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
const navSmallSelectBtn = document.getElementById("menu-select-s");
const menuIconEl = document.getElementById("icon-container");

let activeLink = "about";
let initWidth = window.innerWidth;

//generates pages based on activeLink

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

// the actual function that changes the small nav menu icon's appearance

const changeIcon = (btn) => {
    btn.classList.toggle("change");
  }

// adds function to change appearance of small nav menu icon on click

menuIconEl.addEventListener("click", (e) => {
    e.preventDefault();
    changeIcon(menuIconEl);
})


// creates links on for bigger screen sizes.

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

// toggels small nav menu button as to whether it's opening or closing the menu 

const toggleTinyNavSelector = () => {
  if (navSmallSelectBtn.dataset.selector === "nav-tiny") {
    navSmallSelectBtn.setAttribute("data-selector", "close-nav-tiny");
  } else if (navSmallSelectBtn.dataset.selector === "close-nav-tiny") {
    navSmallSelectBtn.setAttribute("data-selector", "nav-tiny");
  }
};

// creates functionality for small nav menu button

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

// creates links for small screen nav items

const linksForSmall = () => {
  linkEls.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
        activeLink = link.dataset.loc;
        mainEl.innerHTML = mainBig();
      toggleTinyNavSelector();
      changeIcon(menuIconEl);
    });
  });
};

// generates links based on screen size

const generateLinks = () => {
  const winWidth = window.innerWidth;
  if (winWidth <= 790) {
    linksForSmall();
  } else {
    linksForBig();
  }
};

// what to do on load

window.onload = () => {
  mainEl.innerHTML = mainBig();
  generateLinks();
};

// what to do if windo crosses 790 threshold

window.onresize = () => {
  const navTinyEl = document.getElementById("nav-tiny");
  const initDiff = initWidth - 790;
  const winWidth = window.innerWidth;
  const currentDiff = winWidth - 790;
  if (initDiff * currentDiff < 0) {
    initWidth = window.innerWidth;
    generateLinks();
    if (winWidth > 790 && navTinyEl){
        mainEl.innerHTML = mainBig();
        navSmallSelectBtn.setAttribute("data-selector", "nav-tiny");
        menuIconEl.removeAttribute("class");
    }
  }
};
