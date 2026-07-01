import '../assets/css/Navbar.css';
import { useEffect, useState } from 'react';
import ScrambleBtn from '../helper/ScrambleBtn';

const navItems = [
  { id: 'hero', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'blog', label: 'blog' },
  { id: 'contact', label: 'contact' },
];

export default function Navbar({ theme, t, onToggleTheme }) {
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
      </div>

      <div className="nav-progress" style={{ width: `${scrollWidth}%` }}></div>
    </nav>
  );
}
