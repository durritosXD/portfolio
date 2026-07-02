import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import TiltCard from './TiltCard';
import SplitText from './SplitText';
import MagneticButton from './MagneticButton';
import { ChevronDown } from 'lucide-react';

// Sakura petal for the aura ring around the photo
const SakuraOrbit = ({ count = 12 }) => {
  return (
    <div style={{ position: 'absolute', inset: '-40px', pointerEvents: 'none' }}>
      {[...Array(count)].map((_, i) => {
        const angle = (i / count) * 360;
        const radius = 50 + Math.sin(i * 1.7) * 10; // slight variation in radius
        const size = 6 + Math.random() * 8;
        const duration = 8 + (i % 4) * 2;
        const delay = -(i / count) * duration;

        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: `${size}px`,
              height: `${size}px`,
              marginTop: `-${size / 2}px`,
              marginLeft: `-${size / 2}px`,
            }}
            animate={{
              rotate: [angle, angle + 360],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'linear',
              delay,
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                left: `${radius}%`,
                top: 0,
                width: `${size}px`,
                height: `${size}px`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            >
              <svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <path
                  d="M10,0 C15,5 20,10 10,20 C0,10 5,5 10,0"
                  fill={i % 3 === 0 ? 'rgba(255,150,170,0.7)' : i % 3 === 1 ? 'rgba(255,182,193,0.6)' : 'rgba(255,200,210,0.5)'}
                />
              </svg>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 0.5], ['0%', '30%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-10%']);

  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', perspective: '1000px' }}>

      {/* Parallax Background Image — SMALLER (50% width, less intrusive) */}
      <motion.div
        style={{
          position: 'absolute',
          right: '0%',
          top: '0',
          width: '50%',
          height: '100%',
          zIndex: -1,
          maskImage: 'linear-gradient(to left, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0) 80%)',
          y: bgY,
          scale: bgScale,
          opacity: bgOpacity,
        }}
      >
        {/* Sakura orbit around photo */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={profileImg}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'grayscale(0.3) contrast(1.1) brightness(0.75)',
            }}
          />

          {/* Sakura aura centered on photo */}
          <div style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px',
          }}>
            <SakuraOrbit count={16} />
            {/* Soft glow behind the orbit */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,150,170,0.15) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="asymmetric-grid"
        style={{
          width: '100%',
          zIndex: 1,
          gridTemplateColumns: '1.3fr 1fr',
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
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                  AI & Data Science Student
                </motion.span>
              </label>
            </motion.div>

            {/* Split text animated name */}
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
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
              <br />
              <span style={{ fontSize: '0.45em', opacity: 0.5, letterSpacing: '0.05em' }}>
                <SplitText delay={1.3} stagger={0.06} animation="fade">
                  S M
                </SplitText>
              </span>
            </h1>

            {/* Animated description */}
            <motion.p
              className="text-muted"
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 1.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ maxWidth: '420px', fontSize: '1.1rem', lineHeight: 1.7, transform: 'translateZ(30px)' }}
            >
              Curating intelligence through data. Engineering the future with AI.
              Based in Chennai, studying at Rajalakshmi Institute of Technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
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
            <p className="font-serif" style={{ fontSize: '1.4rem', opacity: 0.6, fontStyle: 'italic' }}>
              "Data is the new canvas; <br /> AI is the brush."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div className="pulse-dot" style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#4ade80', boxShadow: '0 0 12px rgba(74,222,128,0.5)',
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
          position: 'absolute', bottom: '3rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer',
        }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-sans)' }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={18} color="var(--primary)" />
        </motion.div>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, var(--primary), transparent)' }} />
      </motion.div>

      {/* Background kinetic word */}
      <motion.div
        style={{
          position: 'absolute', bottom: '10%', left: '5%',
          fontSize: '10rem', fontWeight: 900,
          color: 'rgba(255,255,255,0.02)',
          fontFamily: 'var(--font-serif)', zIndex: 0,
          pointerEvents: 'none', whiteSpace: 'nowrap',
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
