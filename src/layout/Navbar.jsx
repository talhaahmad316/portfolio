import { useEffect, useState } from "react";

export default function Navbar() {

    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {

        const handleScroll = () => {

            const scrollTop = window.scrollY;

            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const scrollPercent = (scrollTop / docHeight) * 100;

            setScrollWidth(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <>
            <nav className="nav" id="nav">

                <div className="logo">Talha Ahmad</div>

                <ul className="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <button
                    className="hire-btn"
                    onClick={() =>
                        document
                            .getElementById("contact")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                >
                    Hire Me
                </button>

                {/* Progress Line */}
                <div
                    className="nav-progress"
                    style={{ width: `${scrollWidth}%` }}
                ></div>

            </nav>
        </>
    );
}