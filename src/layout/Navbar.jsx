import '../assets/css/Navbar.css';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'hero', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'blog', label: 'blog' },
  { id: 'contact', label: 'contact' },
];

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
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Toggle color theme">
          <span>{theme === 'dark' ? t.themeLight : t.themeDark}</span>
        </button>
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
