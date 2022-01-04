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
    if (navSmallSelectEl.dataset.loc === "nav-tiny"){
        navSmallSelectEl.removeAttribute("data-loc");
        navSmallSelectEl.setAttribute("data-loc", "close-nav-tiny");
    } else {
        navSmallSelectEl.removeAttribute("data-loc");
        navSmallSelectEl.setAttribute("data-loc", "nav-tiny");
    }
}

const linksForBig = (link) => {
    activeLink = link.dataset.loc;
    mainEl.innerHTML = mainBig();
    if (activeLink === "nav-tiny"){
        linkEls = document.querySelectorAll(".nav-link");
        generateLinks();
        activeLink = ""
    }
    console.log(linkEls);
}

const linksForSmall = (link) => {
    if (link.dataset.loc !== "close-nav-tiny" && link.dataset.loc !== "nav-tiny"){
        console.log("reg")
    activeLink = link.dataset.loc;
    mainEl.innerHTML = mainBig();
    toggleTinyNavSelector();
};
if (link.dataset.loc === "close-nav-tiny"){
    console.log("close")
    mainEl.innerHTML = mainBig();
    toggleTinyNavSelector();
} if (link.dataset.loc === "nav-tiny"){
    console.log("nav")
    mainEl.innerHTML = navTiny()
    toggleTinyNavSelector();
    linkEls = document.querySelectorAll(".nav-link");
    generateLinks();
};
};

const generateLinks = () => {
    const winWidth = window.innerWidth;
    linkEls.forEach((link) => {
      link.addEventListener("click",  (e) => {
        e.preventDefault();
  if (winWidth <= 790) {
        linksForSmall(link);
    } else {
        linksForBig(link);
    }
      });
    });
  };

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
    const winWidth = window.innerWidth
    if (winWidth === 789 || winWidth === 791) {
        mainEl.innerHTML = mainBig();
        generateLinks()
    }
};
