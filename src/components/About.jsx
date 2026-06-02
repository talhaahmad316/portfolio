import '../assets/css/About.css';

export default function About() {
  return (
    <section id="about" className="about-sec">
      <div className="container">
        <div className="rv">
          <div className="eyebrow">Who I Am</div>
          <h2 className="sec-title">About Me</h2>
        </div>

        <div className="about-grid about-grid-compact">
          <div className="rl">
            <div className="ap-wrap">
              <div className="ap">
                <img src="/talha.png" alt="Talha Ahmad" />
                <div className="ap-deco"></div>
              </div>
              <div className="astats">
                <div className="astat"><div className="astat-n">3+</div><div className="astat-l">Years Experience</div></div>
                <div className="astat"><div className="astat-n">20+</div><div className="astat-l">Projects Done</div></div>
                <div className="astat"><div className="astat-n">15+</div><div className="astat-l">Happy Clients</div></div>
                <div className="astat"><div className="astat-n">99%</div><div className="astat-l">Satisfaction</div></div>
              </div>
            </div>
          </div>

          <div className="rr ac about-card">
            <h3>React, JavaScript, Laravel and MySQL for real web products.</h3>
            <p>I am a full stack developer based in Lahore, Pakistan, focused on building clean React interfaces and dependable Laravel backends.</p>
            <p>I create SaaS dashboards, ERP modules, marketplaces, APIs, and admin systems that are practical, responsive, and easy to maintain.</p>
            <p>I am looking for freelance or full-time work where I can help teams ship polished web applications faster.</p>

            <div className="adetails compact-details">
              <div className="di"><span className="di-icon">@</span><div><div className="dl">Email</div><div className="dv"><a href="mailto:talhaahmad316@gmail.com">talhaahmad316@gmail.com</a></div></div></div>
              <div className="di"><span className="di-icon">#</span><div><div className="dl">Location</div><div className="dv">Lahore, Pakistan</div></div></div>
              <div className="di"><span className="di-icon">in</span><div><div className="dl">LinkedIn</div><div className="dv"><a href="https://www.linkedin.com/in/talha-ahmad-153286150/" target="_blank" rel="noreferrer">talha-ahmad</a></div></div></div>
              <div className="di"><span className="di-icon">gh</span><div><div className="dl">GitHub</div><div className="dv"><a href="https://github.com/talhaahmad316" target="_blank" rel="noreferrer">talhaahmad316</a></div></div></div>
            </div>

            <div className="about-actions">
              <a className="btn-p" href="/Talha Ahmad.pdf" download>Download CV</a>
              <a className="btn-o" href="#contact">Let's Talk</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
