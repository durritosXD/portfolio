import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import TiltCard from './TiltCard';
import SplitText from './SplitText';
import MagneticButton from './MagneticButton';
import { ChevronDown } from 'lucide-react';

// Sleek, high-tech orbital ring animation (modern AI/DS theme, not corny)
const TechOrbit = () => {
  return (
    <div style={{ position: 'absolute', inset: '-30px', pointerEvents: 'none', zIndex: 0 }}>
      {/* Outer thin dashed ring rotating clockwise */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '1px dashed rgba(129, 236, 255, 0.2)',
        }}
      />
      
      {/* Inner solid ring with gaps rotating counter-clockwise */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: '15px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 115, 80, 0.15)',
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
        }}
      />

      {/* Modern pulsing glow dot at the top edge */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: '-5px',
          borderRadius: '50%',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '6px',
          height: '6px',
          background: 'var(--primary)',
          borderRadius: '50%',
          boxShadow: '0 0 10px var(--primary)',
          transform: 'translateX(-50%)',
        }} />
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  // Clean scroll link transitions for Hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      
      <motion.div
        className="asymmetric-grid"
        style={{
          width: '100%',
          zIndex: 1,
          gridTemplateColumns: '1.2fr 1fr',
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
      >
        {/* Left column - No TiltCard wrapper around text to avoid text warping */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ paddingTop: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          {/* Animated label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ marginBottom: '1.5rem' }}
          >
            <label style={{ display: 'block', letterSpacing: '0.2em' }}>
              AI & Data Science Student
            </label>
          </motion.div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            lineHeight: 0.95,
            marginBottom: '2rem',
            letterSpacing: '-0.04em',
            fontWeight: 800,
            fontFamily: 'var(--font-sans)',
          }}>
            <SplitText delay={0.2} stagger={0.03} animation="slideUp">
              Shanmuga
            </SplitText>
            <br />
            <span className="text-cyan">
              <SplitText delay={0.5} stagger={0.03} animation="slideUp">
                Krishnan
              </SplitText>
            </span>
            <br />
            <span style={{ fontSize: '0.45em', opacity: 0.6, letterSpacing: '0.05em' }}>
              <SplitText delay={0.8} stagger={0.05} animation="fade">
                S M
              </SplitText>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            className="text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: '420px', fontSize: '1.1rem', lineHeight: 1.7 }}
          >
            Curating intelligence through data. Engineering the future with AI.
            Based in Chennai, studying at Rajalakshmi Institute of Technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: '1.25rem', marginTop: '3rem', flexWrap: 'wrap' }}
          >
            <MagneticButton
              className="btn-primary hero-cta"
              style={{ padding: '1.1rem 2.5rem' }}
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Portfolio
            </MagneticButton>

            <MagneticButton
              className="btn-outline hero-cta"
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                padding: '1.1rem 2.5rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right column - Framed Photo Card and Quote */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '520px', paddingBottom: '2rem' }}>
          
          {/* Framed Photo Container (Smaller, fits in frame, pops out) */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, position: 'relative' }}>
            <TechOrbit />

            <TiltCard style={{ width: '240px', height: '300px', zIndex: 1 }}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover="hovered"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  position: 'relative',
                  background: 'var(--surface-container-high)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Pop out effect on image */}
                <motion.img
                  src={profileImg}
                  alt="Shanmuga Krishnan S M"
                  variants={{
                    hovered: { scale: 1.08, filter: 'grayscale(0) contrast(1.05)' }
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'grayscale(0.2) contrast(1.02) brightness(0.9)',
                  }}
                />
                
                {/* Clean vignette overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }} />

                {/* Subtle border glow inside */}
                <motion.div
                  variants={{
                    hovered: { opacity: 0.8 }
                  }}
                  initial={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: '1px solid var(--primary)',
                    borderRadius: '1.5rem',
                    pointerEvents: 'none',
                  }}
                />
              </motion.div>
            </TiltCard>

            {/* Behind-frame glow */}
            <motion.div
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: '280px',
                height: '340px',
                background: 'radial-gradient(circle, rgba(129, 236, 255, 0.12) 0%, transparent 70%)',
                filter: 'blur(30px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Quote & Status Indicator */}
          <div style={{ marginTop: '2rem' }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}
            >
              <p className="font-serif" style={{ fontSize: '1.25rem', opacity: 0.65, fontStyle: 'italic', lineHeight: 1.5 }}>
                "Data is the new canvas; <br /> AI is the brush."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <div className="pulse-dot" style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#4ade80', boxShadow: '0 0 12px rgba(74,222,128,0.5)',
              }} />
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--on-surface-variant)', fontWeight: 600 }}>
                Available for work
              </span>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer',
        }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-sans)' }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={16} color="var(--primary)" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
