export default function Navbar() {
    return (
        <>


            {/* <!-- NAV --> */}
            <nav className="nav" id="nav">
                <div className="logo">Talha Ahmad</div>
                <ul className="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="hire-btn" onClick={() => scrollTo('contact')}>Hire Me</button>
            </nav>
        </>)
}