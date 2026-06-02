import { useEffect, useState } from 'react';
import './App.css';
import './assets/main.css';
import { initAnimations } from './assets/Main';

import Navbar from './layout/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './layout/Footer';
import Preloader from './components/Preloader';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const cleanup = initAnimations();
    return cleanup;
  }, []);

  useEffect(() => {
    const cur = document.querySelector('.cur');
    const ring = document.querySelector('.cur-ring');

    if (!cur || !ring) return undefined;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frameId;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cur.style.left = `${mouseX}px`;
      cur.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      frameId = requestAnimationFrame(animateRing);
    };

    const hoverIn = () => {
      cur.classList.add('active');
      ring.classList.add('active');
    };

    const hoverOut = () => {
      cur.classList.remove('active');
      ring.classList.remove('active');
    };

    const clickIn = () => {
      cur.classList.add('click');
      ring.classList.add('click');
    };

    const clickOut = () => {
      cur.classList.remove('click');
      ring.classList.remove('click');
    };

    animateRing();
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', clickIn);
    window.addEventListener('mouseup', clickOut);

    const hoverElements = document.querySelectorAll('button, a, .btn, input, textarea, select');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', hoverIn);
      el.addEventListener('mouseleave', hoverOut);
    });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', clickIn);
      window.removeEventListener('mouseup', clickOut);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', hoverIn);
        el.removeEventListener('mouseleave', hoverOut);
      });
    };
  }, []);

  return (
    <>
      <div id="cur" className="cur"></div>
      <div id="ring" className="cur-ring"></div>

      <Preloader />
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
