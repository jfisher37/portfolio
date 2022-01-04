const navSmall = () => {
  return `      
    <div id="nav-contain-s">
    <p1 id="joey-s">Joey Fisher</p1>
    <div id="nav-selector-s" tabindex="0">
    <ul id="nav-list-s">
        <li class="nav-link nav-link-s active-s" data-loc="about" tabindex="0">
            About Me
        </li>
        <li class="nav-link nav-link-s inactive-s" data-loc="work" tabindex="0">
            My Work
        </li>
        <li class="nav-link nav-link-s inactive-s" data-loc="contact" tabindex="0">
            Contact Me
       </li>
        <li class="nav-link nav-link-s"><a class="inactive-s" href="#" tabindex="0">
            Resume
        </a></li>
    </ul>
    <span id="menu-select-s">^</span>
</div>
</div>
`;
};

export default navSmall;
