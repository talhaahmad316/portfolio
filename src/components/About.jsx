import { useRef, useState } from "react";
import '../assets/css/About.css';
import ScrambleBtn from '../helper/ScrambleBtn';

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";



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
              <ScrambleBtn label={t.downloadCv} href="/Talha Ahmad.pdf" className="btn-p" download />
              <ScrambleBtn label={t.letsTalk} href="#contact" className="btn-o" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}