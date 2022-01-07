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
const footerEl = document.getElementById("footer");


let activeLink = "about";
let initWidth = window.innerWidth;

//generates pages based on activeLink

const mainBig = () => {
  switch (activeLink) {
    case "about":
        footerEl.setAttribute("class", "footer-about");
      return about();
    case "work":
        footerEl.setAttribute("class", "work-footer");
      return work();
    case "contact":
        footerEl.setAttribute("class", "footer-contact");
      return contact();
    default:
      break;
  }
};

// makes form handler for contact form

const contactFormHandler = (name, email, message) => {
    console.log(name);
    console.log(email);
    console.log(message);
}

// creates form elements and the submit event

const createForm = () => {
const formEl = document.getElementById("contact-form");
const nameInputEl = document.getElementById ("name-input");
const emailInputEl = document.getElementById("email-input");
const messageInputEl = document.getElementById("message-input");
const formBtn = document.getElementById("contact-button");
    console.log(formEl);
    console.log(mainEl);
formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        contactFormHandler(nameInputEl.value, emailInputEl.value, messageInputEl.value);
        formBtn.setAttribute("class", "submitted");
        formBtn.disabled = true;
        formBtn.innerHTML = "Thank You!"
})
}

// unfocuses work a el on click

const createWorkClasses = () => {
    const workPageEl = document.getElementById("work-page");
    const aTagEls = workPageEl.querySelectorAll("a");
    const gridContainEl = document.getElementById("grid-contain");
    const workLabelEl = document.getElementById("work-label");
    console.log(aTagEls);

    workLabelEl.addEventListener("focus", () => {
        console.log("HERE!!!")
    })


    aTagEls.forEach((tag) => {
        const roleStackEl = tag.querySelector(".role-stack");
        const workImgEl = tag.querySelector(".work-img");
        const workTitleEl = tag.querySelector(".work-title");
        tag.addEventListener("click", (e) => {
            console.log(roleStackEl);
            console.log(workImgEl);
            console.log(workTitleEl);
            console.log(linkEls);
            workLabelEl.focus();
        })
    })
}

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
    console.log(linkEls)
  linkEls.forEach((link) => {
    if (activeLink === link.dataset.loc){
        link.setAttribute("class", "nav-link active");
    } else {link.setAttribute("class", "nav-link inactive")};
    link.addEventListener("click", (e) => {
      e.preventDefault();
      activeLink = link.dataset.loc;
      linkEls.forEach((link) => {
        link.setAttribute("class", "nav-link inactive");
      });
      link.setAttribute("class", "nav-link active");
      mainEl.innerHTML = mainBig();
      if (link.dataset.loc === "contact"){
          createForm();
      };
      if (link.dataset.loc === "work"){
        createWorkClasses();
    };
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
