const workFocusToggler = (isMobile) => {
  const articleEls = document.getElementsByTagName("article");
  const gridContainEl = document.getElementById("grid-contain");
  const stylesEl = document.styleSheets[5];
  const toggledStyles = [
      "#grid-contain article:hover > .work-img, #grid-contain article:focus > .work-img { filter: blur(0px) grayscale(100%); }",
      "#grid-contain article:hover > .work-title, #grid-contain article:focus > .work-title { transform: translateY(-80%); color: var(--main); background-color: black; }",
      "#grid-contain article:hover > .role-stack, #grid-contain article:focus > .role-stack, #grid-contain article:hover > .role-stack-mobile, #grid-contain article:focus > .role-stack-mobile { display: flex; z-index: 2; opacity: 1; }"
];

// gets rid of grid-contain hover and focus for mobile devices
  if (isMobile && stylesEl.rules[50].cssText === toggledStyles[0]) {
      console.log("MOBILE")
      stylesEl.deleteRule(50);
      stylesEl.deleteRule(51);
      stylesEl.deleteRule(52);
      console.log(toggledStyles);
  } 

// This is entirely for someone messing in the dev tools (toggling between mobile and not)
  if (!isMobile && stylesEl.rules[50].cssText !== toggledStyles[0]) {

      stylesEl.insertRule(toggledStyles[0], 50);
      stylesEl.insertRule(toggledStyles[1], 52);
      stylesEl.insertRule(toggledStyles[2], 54);
  }

  Array.from(articleEls).forEach((article) => {
    article.addEventListener("click", function articleClick(e) {
      e.preventDefault();
      const articleCopy = article;
      const linksEl = articleCopy.querySelector(".work-links");
      const descEl = articleCopy.querySelector(".work-desc");
      const roleStackEl = articleCopy.querySelector(".role-stack");
      const titleEl = articleCopy.querySelector(".work-title");
      const imgEl = articleCopy.querySelector(".work-img");
      let devEl;
      let initDevStyle;

      if (roleStackEl.querySelector(".in-development")) {
        devEl = roleStackEl.querySelector(".in-development");
        initDevStyle = devEl.getAttribute("style");
        devEl.setAttribute("style", `margin-bottom: 0%; margin-top: 4%; `);
      }

      for (let i = 0; i < articleEls.length; i++) {
        articleEls[i].setAttribute("style", "display: none;");
      }

      gridContainEl.setAttribute(
        "style",
        "grid-template-columns: [first] 70% [second]; grid-template-rows: [first] 500px [second];"
      );
      gridContainEl.classList.add("zoom");

      imgEl.setAttribute("style", "filter: blur(0px) grayscale(100%);");

      if (isMobile) {
        titleEl.setAttribute(
          "style",
          "width: 235px; transform:translateY(-140%); color: var(--main); background-color: black;"
        );
        roleStackEl.setAttribute(
          "style",
          "width: 235px; height: 250px; display: flex; z-index: 2; opacity: 1; justify-content: space-evenly; line-height: .9em"
        );
      } else {
        titleEl.setAttribute(
          "style",
          "width: 80%; transform:translateY(-140%); color: var(--main); background-color: black;"
        );
        roleStackEl.setAttribute(
          "style",
          "width: 80%; height: 250px; display: flex; z-index: 2; opacity: 1;"
        );
      }

      linksEl.setAttribute("style", "display: flex");
      descEl.setAttribute("style", "display: initial");

      const exitBtnEl = document.createElement("button");
      exitBtnEl.innerHTML = `<i class="fas fa-arrow-circle-left"></i>`;
      exitBtnEl.setAttribute("class", "exit-btn");

      articleCopy.appendChild(exitBtnEl);

      gridContainEl.appendChild(articleCopy);
      articleCopy.setAttribute(
        "style",
        `grid-column-start: first; grid-column-end: second; grid-row-start: first; grid-row-end: second; height: 100%; width: 100%; animation: 1.2s ease 0.1s normal forwards 1 fade-in;
            `
      );

      articleCopy.removeEventListener("click", articleClick);

      exitBtnEl.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        imgEl.removeAttribute("style");
        titleEl.removeAttribute("style");
        roleStackEl.removeAttribute("style");
        linksEl.removeAttribute("style");
        descEl.removeAttribute("style");

        if (devEl) {
          devEl.setAttribute("style", initDevStyle);
        }

        articleCopy.addEventListener("click", articleClick);
        articleCopy.removeChild(exitBtnEl);
        gridContainEl.removeChild(articleCopy);
        gridContainEl.appendChild(article);
        for (let i = 0; i < articleEls.length; i++) {
          articleEls[i].setAttribute(
            "style",
            "display: flex; opacity: 1; animation: none;"
          );
        }
        gridContainEl.removeAttribute("style");
        gridContainEl.classList.remove("zoom");
      });
    });
  });
};

export default workFocusToggler;
