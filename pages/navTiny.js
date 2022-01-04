const navTiny = () => {
    return `      
    <ul id="nav-tiny">
        <li class="nav-link" data-loc="about" tabindex="0">
            About Me
        </li>
        <li class="nav-link" data-loc="work" tabindex="0">
            My Work
        </li>
        <li class="nav-link" data-loc="contact" tabindex="0">
            Contact Me
        </li>
        <li class="nav-link"><a class="inactive" href="#" tabindex="0">
            Resume
        </a></li>
    </ul>
  `;
  };
  
  export default navTiny;


//   if (link.dataset.loc !== "close-nav-tiny" && link.dataset.loc !== "nav-tiny"){
//     console.log("reg")
// activeLink = link.dataset.loc;
// mainEl.innerHTML = mainBig();
// toggleTinyNavSelector();
// };
// if (link.dataset.loc === "close-nav-tiny"){
// console.log("close")
// mainEl.innerHTML = mainBig();
// toggleTinyNavSelector();
// } if (link.dataset.loc === "nav-tiny"){
// console.log("nav")
// mainEl.innerHTML = navTiny()
// toggleTinyNavSelector();
// linkEls = document.querySelectorAll(".nav-link");
// generateLinks();
// }

// const generateLinks = () => {
//     linkEls.forEach((link) => {
//       link.addEventListener("click", async (e) => {
//         e.preventDefault();
//         activeLink = link.dataset.loc;
//         mainEl.innerHTML = await mainBig();
//         if (activeLink === "nav-tiny"){
//             linkEls = document.querySelectorAll(".nav-link");
//             generateLinks();
//             activeLink = ""
//         }
//         console.log(linkEls);
//       });
//     });
//   };