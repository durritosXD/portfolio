import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import FloatingShapes from './components/FloatingShapes';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <FloatingShapes />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Visual noise/grain effect for premium feel */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9998,
        opacity: 0.02,
        background: 'url(https://grainy-gradients.vercel.app/noise.svg)',
      }} />
    </div>
  );
}

export default App;
