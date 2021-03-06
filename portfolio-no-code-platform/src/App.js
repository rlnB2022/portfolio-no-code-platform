import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import HeroInfo from './components/HeroInfo';
import Footer from './components/Footer';
import "./styles/styles.css";
import { useState, useEffect } from 'react';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };

  }, []);

  return (
    <div className="app">
      <Hero appWidth={width} />
      <Features />
      <HowItWorks />
      <HeroInfo />
      <Footer />
    </div>
  );
}

export default App;
