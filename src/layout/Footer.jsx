import '../assets/css/Footer.css';
export default function Footer() {
    return (
        <>
            {/* <!-- FOOTER --> */}
            <footer>
                <div className="fsoc">
                    <a href="https://github.com/talhaahmad316" target="_blank" title="GitHub">🐙</a>
                    <a href="https://www.linkedin.com/in/talha-ahmad-153286150/" target="_blank" title="LinkedIn">🔗</a>
                    <a href="https://www.facebook.com/talhaahmad316" title="Facebook" target="_blank" rel="noreferrer">📘</a>
                    <a
                        href="mailto:talhaahmad316@gmail.com?subject=Hello%20Talha&body=I%20visited%20your%20portfolio"
                        title="Email"
                    >
                        ✉️
                    </a>
                </div>
                <p>Crafted with <span>♥</span> by <span>Talha Ahmad</span> · Full Stack Developer · © 2026</p>
                <p style={{ marginTop: ".3rem", fontSize: ".74rem" }}>Laravel · React · Tailwind · MySQL · Bootstrap</p>
            </footer>
        </>
    )
}