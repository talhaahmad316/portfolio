import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './assets/main.css'
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

  useEffect(() => {
    initAnimations();
  }, []);
  const [count, setCount] = useState(0)

  // CURSOR EFFECT
  useEffect(() => {
    const cur = document.querySelector(".cur");
    const ring = document.querySelector(".cur-ring");

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

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

      requestAnimationFrame(animateRing);
    };

    animateRing();

    window.addEventListener("mousemove", moveCursor);

    // BUTTON HOVER EFFECT
    const hoverElements = document.querySelectorAll(
      "button, a, .btn, input, textarea"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cur.classList.add("active");
        ring.classList.add("active");
      });

      el.addEventListener("mouseleave", () => {
        cur.classList.remove("active");
        ring.classList.remove("active");
      });
    });

    // CLICK EFFECT
    window.addEventListener("mousedown", () => {
      cur.classList.add("click");
      ring.classList.add("click");
    });

    window.addEventListener("mouseup", () => {
      cur.classList.remove("click");
      ring.classList.remove("click");
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div id="cur" className="cur"></div>
      <div id="ring" className="cur-ring"></div>

      <Preloader />

      <div><Navbar /></div>
      <div><Home /></div>
      <div><About /></div>
      <div><Skills /></div>
      <div><Projects /></div>
      <div><Contact /></div>
      <div><Footer /></div>
    </>
  )
}

export default App
