import '../assets/css/About.css';

export default function About({ t }) {
  return (
    <section id="about" className="about-sec">
      <div className="container">
        <div className="rv">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2 className="sec-title">{t.title}</h2>
        </div>

        <div className="about-grid about-grid-compact">
          <div className="rl">
            <div className="ap-wrap">
              <div className="ap">
                <img src="/talha.png" alt="Talha Ahmad" />
                <div className="ap-deco"></div>
              </div>
              <div className="astats">
                <div className="astat"><div className="astat-n">3+</div><div className="astat-l">{t.stats[0]}</div></div>
                <div className="astat"><div className="astat-n">20+</div><div className="astat-l">{t.stats[1]}</div></div>
                <div className="astat"><div className="astat-n">15+</div><div className="astat-l">{t.stats[2]}</div></div>
                <div className="astat"><div className="astat-n">99%</div><div className="astat-l">{t.stats[3]}</div></div>
              </div>
            </div>
          </div>

          <div className="rr ac about-card">
            <h3>{t.heading}</h3>
            {t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            <div className="adetails compact-details">
              <div className="di"><span className="di-icon">@</span><div><div className="dl">{t.labels.email}</div><div className="dv"><a href="mailto:talhaahmad316@gmail.com">talhaahmad316@gmail.com</a></div></div></div>
              <div className="di"><span className="di-icon">#</span><div><div className="dl">{t.labels.location}</div><div className="dv">{t.locationValue}</div></div></div>
              <div className="di"><span className="di-icon">in</span><div><div className="dl">{t.labels.linkedin}</div><div className="dv"><a href="https://www.linkedin.com/in/talha-ahmad-153286150/" target="_blank" rel="noreferrer">talha-ahmad</a></div></div></div>
              <div className="di"><span className="di-icon">gh</span><div><div className="dl">{t.labels.github}</div><div className="dv"><a href="https://github.com/talhaahmad316" target="_blank" rel="noreferrer">talhaahmad316</a></div></div></div>
            </div>

            <div className="about-actions">
              <a className="btn-p" href="/Talha Ahmad.pdf" download>{t.downloadCv}</a>
              <a className="btn-o" href="#contact">{t.letsTalk}</a>
            </div>

            {/* <div className="github-panel">
              <div>
                <div className="github-eyebrow">{t.github.eyebrow}</div>
                <h4>{t.github.title}</h4>
                <p>{t.github.subtitle}</p>
              </div>
              <div className="github-images">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=talhaahmad316&show_icons=true&hide_border=true&theme=transparent&title_color=60a5fa&text_color=8892a4&icon_color=22d3ee"
                  alt={t.github.statsAlt}
                  loading="lazy"
                />
                <img
                  src="https://github-readme-streak-stats.herokuapp.com?user=talhaahmad316&hide_border=true&background=00000000&ring=3B82F6&fire=22D3EE&currStreakLabel=60A5FA&sideLabels=8892A4&dates=8892A4&sideNums=F0F4FF&currStreakNum=F0F4FF"
                  alt={t.github.contributionsAlt}
                  loading="lazy"
                />
              </div>
              <a className="github-link" href="https://github.com/talhaahmad316" target="_blank" rel="noreferrer">{t.github.profile}</a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
