import '../assets/css/Navbar.css';
import { useEffect, useState, useRef } from 'react';
import ScrambleBtn from '../helper/ScrambleBtn';

const navItems = [
  { id: 'hero', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'blog', label: 'blog' },
  { id: 'contact', label: 'contact' },
];

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";



export default function Navbar({ theme, language, languages, t, onChangeLanguage, onToggleTheme }) {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav" id="nav">
      <a className="logo" href="#hero">Talha Ahmad</a>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.id}>
            <a className={activeSection === item.id ? 'active' : ''} href={`#${item.id}`}>
              {t[item.label]}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <ScrambleBtn
          label={theme === 'dark' ? t.themeLight : t.themeDark}
          onClick={onToggleTheme}
          className="theme-toggle"
          ariaLabel="Toggle color theme"
        />
        <div className="language-switch" aria-label={t.languageLabel}>
          {languages.map((item) => (
            <button
              className={language === item.code ? 'active' : ''}
              type="button"
              onClick={() => onChangeLanguage(item.code)}
              aria-pressed={language === item.code}
              title={item.label}
              key={item.code}
            >
              <span aria-hidden="true">{item.code === 'en' ? 'A' : 'ع'}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="nav-progress" style={{ width: `${scrollWidth}%` }}></div>
    </nav>
  );
}