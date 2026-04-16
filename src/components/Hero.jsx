import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import TiltCard from './TiltCard';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', perspective: '1000px' }}>
      {/* Blended Background Image */}
      <motion.div 
        style={{
          position: 'absolute',
          right: '-10%',
          top: '0',
          width: '70%',
          height: '100%',
          zIndex: -1,
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)',
          transformStyle: 'preserve-3d'
        }}
        initial={{ opacity: 0, scale: 1.1, rotateY: 20 }}
        animate={{ opacity: 0.6, scale: 1, rotateY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img 
          src={profileImg} 
          alt="" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(1) contrast(1.2) brightness(0.8)',
          }}
        />
      </motion.div>

      <div className="asymmetric-grid" style={{ width: '100%', zIndex: 1, gridTemplateColumns: '1.2fr 1fr' }}>
        <TiltCard style={{ display: 'flex' }}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ paddingTop: '4rem', transformStyle: 'preserve-3d' }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ transform: 'translateZ(20px)' }}
            >
              <label style={{ marginBottom: '1.5rem', display: 'block' }}>AI & Data Science Student</label>
            </motion.div>
            
            <h1 style={{ 
              fontSize: 'clamp(4rem, 10vw, 8rem)', 
              lineHeight: 0.9, 
              marginBottom: '2.5rem',
              letterSpacing: '-0.04em',
              transform: 'translateZ(50px)'
            }}>
              Shanmuga <br />
              <span className="text-cyan">Krishnan</span>
            </h1>
            
            <p className="text-muted" style={{ maxWidth: '450px', fontSize: '1.2rem', lineHeight: 1.7, transform: 'translateZ(30px)' }}>
              Curating intelligence through data. Engineering the future with AI.
              Based in Chennai, studying at Rajalakshmi Institute of Technology.
            </p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ display: 'flex', gap: '2rem', marginTop: '3.5rem', transform: 'translateZ(40px)' }}
            >
              <button 
                className="btn-primary" 
                style={{ padding: '1.25rem 3rem' }}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Portfolio
              </button>
              <button 
                className="btn-secondary" 
                style={{ 
                  background: 'transparent', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  color: 'white',
                  padding: '1.25rem 3rem',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => e.target.style.borderColor = 'var(--primary)'}
                onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
              >
                Download CV
              </button>
            </motion.div>
          </motion.div>
        </TiltCard>
        
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '4rem' }}>
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.2 }}
             style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '2rem' }}
          >
             <p className="font-serif italic" style={{ fontSize: '1.5rem', opacity: 0.6 }}>
               "Data is the new canvas; <br /> AI is the brush."
             </p>
          </motion.div>
        </div>
      </div>

      {/* Background kinetic detail */}
      <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          fontSize: '12rem',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.03)',
          fontFamily: 'var(--font-serif)',
          zIndex: 0,
          pointerEvents: 'none',
          whiteSpace: 'nowrap'
      }}>
          ARTIFICIAL
      </div>
    </section>
  );
};

export default Hero;
