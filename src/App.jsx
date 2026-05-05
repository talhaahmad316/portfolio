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

function App() {

  useEffect(() => {
    initAnimations();
  }, []);
  const [count, setCount] = useState(0)


  return (
    <>
      <div id="cur" className="cur"></div>
      <div id="ring" className="cur-ring"></div>

      <Navbar />
      <div>
        <Home />
      </div>
      <div>
        <About />
      </div>
    </>
  )
}

export default App
