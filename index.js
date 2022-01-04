import nav from "./components/nav.js";

const navEl = document.getElementById("nav");

const sizeChecker = () => {
  const winWidth = window.innerWidth;

  if (winWidth <= 790) {
    navEl.innerHTML = "AHHHHH";
  } else {
    navEl.innerHTML = nav();
  }
};

window.onload = () => {
  sizeChecker();
};

window.onresize = () => {
  sizeChecker();
};
