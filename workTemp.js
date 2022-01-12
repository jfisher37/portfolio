const workFocusToggler = () => {
    const articleEls = document.getElementsByTagName("article");
    const gridContainEl = document.getElementById("grid-contain");
    
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
            if (roleStackEl.querySelector(".in-development")){
                devEl = roleStackEl.querySelector(".in-development");
                initDevStyle = devEl.getAttribute("style");
                devEl.setAttribute("style", `margin-bottom: 0%; margin-top: 4%; `)
            }

            for (let i = 0; i < articleEls.length; i++) {
                    articleEls[i].setAttribute("style", "display: none;");
            }
            console.log(articleCopy);
            gridContainEl.setAttribute("style", "grid-template-columns: [first] 70% [second]; grid-template-rows: [first] 500px [second];");
            gridContainEl.classList.add("zoom");

            imgEl.setAttribute("style", "filter: blur(0px) grayscale(100%);");
            titleEl.setAttribute("style", "width: 80%; transform:translateY(-140%); color: var(--main); background-color: black;");
            roleStackEl.setAttribute("style", "width: 80%; height: 250px; display: flex; z-index: 2; opacity: 1;");

            linksEl.setAttribute("style", "display: flex");
            descEl.setAttribute("style", "display: initial");


            const exitBtnEl = document.createElement("button");
            exitBtnEl.innerHTML = `<i class="fas fa-arrow-circle-left"></i>`
            exitBtnEl.setAttribute("class", "exit-btn");

            articleCopy.appendChild(exitBtnEl);

            gridContainEl.appendChild(articleCopy);
            articleCopy.setAttribute("style", `grid-column-start: first; grid-column-end: second; grid-row-start: first; grid-row-end: second; height: 100%; width: 100%; animation: 1.2s ease 0.1s normal forwards 1 fade-in;
            `);

            articleCopy.removeEventListener("click", articleClick);

            exitBtnEl.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                imgEl.removeAttribute("style");
                titleEl.removeAttribute("style");
                roleStackEl.removeAttribute("style");
                linksEl.removeAttribute("style");
                descEl.removeAttribute("style");
                devEl.setAttribute("style", initDevStyle);

                articleCopy.addEventListener("click", articleClick);
                articleCopy.removeChild(exitBtnEl);
                gridContainEl.removeChild(articleCopy);
                gridContainEl.appendChild(article);
                for (let i = 0; i < articleEls.length; i++) {
                    articleEls[i].setAttribute("style", "display: flex; opacity: 1; animation: none;");
            }
            gridContainEl.removeAttribute("style");
            gridContainEl.classList.remove("zoom");
            })
           
        })
    })

}

workFocusToggler();