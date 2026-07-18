import { useRef, useState, useEffect } from "react";
import '../assets/css/About.css';
import ScrambleBtn from '../helper/ScrambleBtn';

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const STATS_CONFIG = [
  { value: 3, suffix: '+' },
  { value: 20, suffix: '+' },
  { value: 15, suffix: '+' },
  { value: 99, suffix: '%' },
];

function AnimatedCounter({ end, suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const wrapRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setInView(true);

          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic — fast start, smooth settle at the end
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div className={`astat-n ${inView ? 'astat-n-pop' : ''}`} ref={wrapRef}>
      {count}{suffix}
    </div>
  );
}

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
                {/* <img src="/talha.png" alt="Talha Ahmad" /> */}
                <div className="ap-deco"></div>
              </div>
              <div className="astats">
                {STATS_CONFIG.map((stat, i) => (
                  <div className="astat" key={i}>
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={1400 + i * 180}
                    />
                    <div className="astat-l">{t.stats[i]}</div>
                  </div>
                ))}
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