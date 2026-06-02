import '../assets/css/Home.css';

export default function Home() {
  return (
    <section className="hero" id="hero">
      <div className="grid-bg"></div>
      <div className="glow1"></div>
      <div className="glow2"></div>

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="badge"><span className="dot"></span>Available for Projects</div>
          <p className="hero-kicker">Full Stack Developer</p>
          <h1>
            Hi, I'm <span className="grad">Talha Ahmad</span>
          </h1>
          <p className="tagline">React and Laravel developer who turns business ideas into polished, reliable web applications.</p>
          <p className="hero-p">
            I build fast frontends, clean APIs, and dashboard experiences for SaaS, ERP, marketplace, and automation products.
          </p>

          <div className="pills">
            <span className="pill">React.js</span>
            <span className="pill">JavaScript</span>
            <span className="pill">Laravel</span>
            <span className="pill">REST APIs</span>
            <span className="pill">MySQL</span>
          </div>

          <div className="hero-btns">
            <a className="btn-p" href="#projects">View My Work</a>
            <a className="btn-o" href="/Talha Ahmad.pdf" download>Download CV</a>
          </div>
        </div>

        <div className="photo-wrap">
          <div className="photo-card">
            <img src="/talha.png" alt="Talha Ahmad - Full Stack Developer" />
            <div className="photo-ov"></div>
            <div className="photo-info">
              <div className="av">TA</div>
              <div>
                <div className="pn">Talha Ahmad</div>
                <div className="pr">Lahore, PK - Remote Friendly</div>
              </div>
            </div>
          </div>
          <div className="ftag e"><span className="ftag-n">3+</span>Years Exp.</div>
          <div className="ftag p"><span className="ftag-n">20+</span>Projects</div>
        </div>
      </div>
    </section>
  );
}
