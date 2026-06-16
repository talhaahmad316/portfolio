import { useRef, useState } from "react";
import '../assets/css/Home.css';
import ScrambleBtn from '../helper/ScrambleBtn';

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";


export default function Home({ t }) {
  return (
    <section className="hero" id="hero">
      <div className="grid-bg"></div>
      <div className="glow1"></div>
      <div className="glow2"></div>

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-badges">
            <div className="badge"><span className="dot"></span>{t.badge}</div>
            <div className="work-badge">{t.openToWork}</div>
          </div>
          <p className="hero-kicker"><span>{t.role}</span></p>
          <h1>
            {t.intro} <span className="grad">Talha Ahmad</span>
          </h1>
          <p className="tagline">{t.tagline}</p>
          <p className="hero-p">
            {t.description}
          </p>

          <div className="current-work">
            <span>{t.currentLabel}</span>
            <strong>{t.currentText}</strong>
          </div>

          <div className="pills">
            <span className="pill">React.js</span>
            <span className="pill">JavaScript</span>
            <span className="pill">Laravel</span>
            <span className="pill">REST APIs</span>
            <span className="pill">MySQL</span>
          </div>

          <div className="hero-btns">
            <ScrambleBtn label={t.viewWork} href="#projects" className="btn-p" />
            <ScrambleBtn label={t.downloadCv} href="/Talha Ahmad.pdf" className="btn-o" download />
          </div>
        </div>

        <div className="photo-wrap">
          <div className="photo-card">
            <img src="/talha.png" alt={t.imageAlt} />
            <div className="photo-ov"></div>
            <div className="photo-info">
              <div className="av">TA</div>
              <div>
                <div className="pn">Talha Ahmad</div>
                <div className="pr">{t.location}</div>
              </div>
            </div>
          </div>
          <div className="ftag e"><span className="ftag-n">3+</span>{t.years}</div>
          <div className="ftag p"><span className="ftag-n">20+</span>{t.projects}</div>
        </div>
      </div>
    </section>
  );
}