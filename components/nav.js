const nav = () => {
    return `      
    <div id="nav-contain">
    <p1 id="joey">Joey Fisher</p1>
    <ul id="nav-list">
        <li class="nav-link active" data-loc="about" tabindex="0">
            About Me
        </li>
        <li class="nav-link inactive" data-loc="work" tabindex="0">
            My Work
        </li>
        <li class="nav-link inactive" data-loc="contact" tabindex="0">
            Contact Me
        </li>
        <li class="nav-link"><a class="inactive" href="#" tabindex="0">
            Resume
        </a></li>
    </ul>
</div>
`
}

export default nav;