import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import AuroraBackground from './components/AuroraBackground';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Marquee from './components/Marquee';

function App() {
  const [loaded, setLoaded] = useState(false);

  const marqueeItems = [
    'Artificial Intelligence',
    'Data Science',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Full Stack Development',
    'Python',
    'React',
    'Neural Networks',
  ];

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />

      <div className="App" style={{ position: 'relative', opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}>
        <AuroraBackground />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />

          <Marquee
            items={marqueeItems}
            speed={30}
            direction="left"
          />

          <About />
          <Achievements />

          <Marquee
            items={['Cold Case Study', 'SlackDetect', 'ESYNC', 'Rem', 'Smart Resume Screener', 'Portfolio']}
            speed={25}
            direction="right"
            separator="→"
          />

          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Film grain overlay */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0.015,
          background: 'url(https://grainy-gradients.vercel.app/noise.svg)',
          mixBlendMode: 'overlay',
        }} />

        <BackToTop />
      </div>
    </>
  );
}

export default App;
