import '../assets/css/Navbar.css';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
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
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Toggle color theme">
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
        <button
          className="hire-btn"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Hire Me
        </button>
      </div>

      <div className="nav-progress" style={{ width: `${scrollWidth}%` }}></div>
    </nav>
  );
}
