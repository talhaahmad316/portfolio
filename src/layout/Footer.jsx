import '../assets/css/Footer.css';
import SocialIcon from '../components/SocialIcon';

export default function Footer({ t }) {
    return (
        <>
            {/* <!-- FOOTER --> */}
            <footer>
                <div className="fsoc">
                    <a href="https://github.com/talhaahmad316" target="_blank" title="GitHub" aria-label="GitHub"><SocialIcon name="github" /></a>
                    <a href="https://www.linkedin.com/in/talha-ahmad-153286150/" target="_blank" title="LinkedIn" aria-label="LinkedIn"><SocialIcon name="linkedin" /></a>
                    <a href="https://www.facebook.com/talhaahmad316" title="Facebook" target="_blank" rel="noreferrer" aria-label="Facebook"><SocialIcon name="facebook" /></a>
                    <a
                        href="mailto:talhaahmad316@gmail.com?subject=Hello%20Talha&body=I%20visited%20your%20portfolio"
                        title="Email"
                        aria-label="Email"
                    >
                        <SocialIcon name="email" />
                    </a>
                </div>
                <p>{t.crafted} <span>♥</span> {t.by} <span>Talha Ahmad</span> · {t.role} · © 2026</p>
                <p style={{ marginTop: ".3rem", fontSize: ".74rem" }}>{t.stack}</p>
            </footer>
        </>
    )
}
