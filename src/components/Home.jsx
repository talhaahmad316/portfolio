export default function Home() {
    return (
        <>
            <section className="hero" id="hero">
                <div className="grid-bg"></div>
                <div className="glow1"></div>
                <div className="glow2"></div>
                <div className="hero-inner">
                    <div>
                        <div className="badge"><span className="dot"></span>Available for Projects</div>
                        <h1>
                            Hi, I'm <span className="grad">Talha</span> —<br />
                            Full Stack<br />
                            <span className="grad">Developer</span>
                        </h1>
                        <p className="hero-p">3 years crafting scalable web products by bridging elegant Laravel backends with high-performance React frontends. Based in Lahore, Pakistan — working globally.</p>
                        <div className="pills">
                            <span className="pill">PHP / Laravel</span>
                            <span className="pill">React.js</span>
                            <span className="pill">REST APIs</span>
                            <span className="pill">MySQL</span>
                            <span className="pill">Tailwind CSS</span>
                            <span className="pill">Bootstrap</span>
                        </div>
                        <div className="hero-btns" style={{textDecoration:"none"}}>

                            <a className="btn-p" href="#projects">View My Work</a>
                            <a className="btn-o" href="#contact">Get in Touch</a>
                        </div>
                    </div>

                    {/* <!-- PHOTO --> */}
                    <div className="photo-wrap">
                        <div className="photo-card">
                            <img src="/talha.png" alt="Talha Ahmad – Full Stack Developer" />
                            <div className="photo-ov"></div>
                            <div className="photo-info">
                                <div className="av">A</div>
                                <div>
                                    <div className="pn">Talha Ahmad</div>
                                    <div className="pr">Full Stack Developer · Lahore, PK</div>
                                </div>
                            </div>
                        </div>
                        <div className="ftag e"><span className="ftag-n">3+</span>Years Exp.</div>
                        <div className="ftag p"><span className="ftag-n">20+</span>Projects</div>
                    </div>
                </div>
            </section>
        </>
    )
}