import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import TiltCard from './TiltCard';
import SplitText from './SplitText';
import MagneticButton from './MagneticButton';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 0.5], ['0%', '30%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-10%']);

  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', perspective: '1000px' }}>

      {/* Parallax Background Image */}
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
          y: bgY,
          scale: bgScale,
          opacity: bgOpacity,
        }}
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

      <motion.div
        className="asymmetric-grid"
        style={{
          width: '100%',
          zIndex: 1,
          gridTemplateColumns: '1.2fr 1fr',
          y: contentY,
        }}
      >
        <TiltCard style={{ display: 'flex' }}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ paddingTop: '4rem', transformStyle: 'preserve-3d' }}
          >
            {/* Animated label */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden', marginBottom: '1.5rem', transform: 'translateZ(20px)' }}
            >
              <label style={{ display: 'block', whiteSpace: 'nowrap' }}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  AI & Data Science Student
                </motion.span>
              </label>
            </motion.div>

            {/* Split text animated name */}
            <h1 style={{
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              lineHeight: 0.9,
              marginBottom: '2.5rem',
              letterSpacing: '-0.04em',
              transform: 'translateZ(50px)',
            }}>
              <SplitText delay={0.5} stagger={0.04} animation="slideUp">
                Shanmuga
              </SplitText>
              <br />
              <span className="text-cyan">
                <SplitText delay={0.9} stagger={0.04} animation="slideUp">
                  Krishnan
                </SplitText>
              </span>
            </h1>

            {/* Animated description */}
            <motion.p
              className="text-muted"
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 1.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                maxWidth: '450px',
                fontSize: '1.2rem',
                lineHeight: 1.7,
                transform: 'translateZ(30px)',
              }}
            >
              Curating intelligence through data. Engineering the future with AI.
              Based in Chennai, studying at Rajalakshmi Institute of Technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              style={{ display: 'flex', gap: '1.5rem', marginTop: '3.5rem', transform: 'translateZ(40px)', flexWrap: 'wrap' }}
            >
              <MagneticButton
                className="btn-primary hero-cta"
                style={{ padding: '1.25rem 3rem' }}
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
                  padding: '1.25rem 3rem',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  transition: 'border-color 0.4s, box-shadow 0.4s',
                }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </MagneticButton>
            </motion.div>
          </motion.div>
        </TiltCard>

        {/* Right side quote */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '2rem' }}
          >
            <p className="font-serif" style={{ fontSize: '1.5rem', opacity: 0.6, fontStyle: 'italic' }}>
              "Data is the new canvas; <br /> AI is the brush."
            </p>
          </motion.div>

          {/* Status indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            style={{
              marginTop: '3rem',
              display: 'flex',
              gap: '2rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div className="pulse-dot" style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 12px rgba(74, 222, 128, 0.5)',
              }} />
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--on-surface-variant)' }}>
                Available for work
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
        }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{
          fontSize: '0.6rem',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: 'var(--on-surface-variant)',
          fontFamily: 'var(--font-sans)',
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} color="var(--primary)" />
        </motion.div>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(180deg, var(--primary), transparent)',
        }} />
      </motion.div>

      {/* Background kinetic detail */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          fontSize: '12rem',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.02)',
          fontFamily: 'var(--font-serif)',
          zIndex: 0,
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        ARTIFICIAL
      </motion.div>
    </section>
  );
};

export default Hero;
