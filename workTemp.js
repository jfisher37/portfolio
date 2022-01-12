const workFocusToggler = () => {
    const articleEls = document.getElementsByTagName("article");
    const gridContainEl = document.getElementById("grid-contain");
    
    Array.from(articleEls).forEach((article) => {
        article.addEventListener("click", function articleClick(e) {
            e.preventDefault();
            const articleCopy = article;
            for (let i = 0; i < articleEls.length; i++) {
                    articleEls[i].setAttribute("style", "display: none;");
            }
            console.log(articleCopy);
            gridContainEl.setAttribute("style", "grid-template-columns: [first] 70% [second]; grid-template-rows: [first] 500px [second];");
            gridContainEl.classList.add("zoom");

            const exitBtnEl = document.createElement("button");
            exitBtnEl.innerHTML = `<i class="fas fa-arrow-circle-left"></i>`
            exitBtnEl.setAttribute("class", "exit-btn");

            articleCopy.appendChild(exitBtnEl);

            gridContainEl.appendChild(articleCopy);
            articleCopy.setAttribute("style", `grid-column-start: first; grid-column-end: second; grid-row-start: first; grid-row-end: second; height: 100%; width: 100%; animation: 1.2s ease 0.1s normal forwards 1 fade-in;
            `);

            exitBtnEl.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
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