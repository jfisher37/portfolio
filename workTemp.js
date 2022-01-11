const workFocusToggler = () => {
    const articleEls = document.getElementsByTagName("article");
    const gridContainEl = document.getElementById("grid-contain")
    
    Array.from(articleEls).forEach((article) => {
        article.addEventListener("click", (e) => {
            e.preventDefault();
            for (let i = 0; i < articleEls.length; i++) {
                if(articleEls[i] !== article){
                    articleEls[i].setAttribute("style", "display: none;");
                }
            }
            console.log(gridContainEl);
            article.setAttribute("style", "grid-column-start: first; grid-column-end: second; grid-row-start: first; grid-row-end: second;");
            // gridContainEl.setAttribute("style", "grid-template-columns: [first] 70% [second]; grid-template-rows: [first] 500px [second];");
            gridContainEl.classList.add("zoom");
            article.classList.add("art-zoom");
        })
    })

}

workFocusToggler();