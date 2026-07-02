import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sakura petal paths (varied shapes)
const petalPaths = [
  "M10,0 C15,5 20,10 10,20 C0,10 5,5 10,0",
  "M10,0 C18,3 22,12 10,22 C-2,12 2,3 10,0",
  "M10,2 C16,0 22,8 14,18 C8,24 0,16 4,8 C6,4 8,3 10,2",
];

const SakuraPetal = ({ id }) => {
  const startX = Math.random() * 100;
  const duration = 6 + Math.random() * 8;
  const delay = Math.random() * 5;
  const size = 8 + Math.random() * 14;
  const path = petalPaths[id % petalPaths.length];
  const driftX = (Math.random() - 0.5) * 200;

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '-30px',
        left: `${startX}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      initial={{ y: -30, x: 0, rotate: 0, opacity: 0 }}
      animate={{
        y: ['0vh', '110vh'],
        x: [0, driftX],
        rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
        opacity: [0, 0.7, 0.7, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
        opacity: { times: [0, 0.1, 0.9, 1] },
      }}
    >
      <svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={path} fill="rgba(255, 182, 193, 0.6)" />
        <path d={path} fill="rgba(255, 150, 170, 0.3)" transform="scale(0.7) translate(3,3)" />
      </svg>
    </motion.div>
  );
};

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('loading');
  const [glitchName, setGlitchName] = useState('SHANMUGA KRISHNAN S M');

  useEffect(() => {
    const duration = 3000;
    const steps = 100;
    const increment = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const eased = Math.round(easeInOutCubic(current / steps) * 100);
      setCount(eased);

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => setPhase('revealing'), 400);
        setTimeout(() => {
          setPhase('done');
          onComplete?.();
        }, 1600);
      }
    }, increment);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Glitch name effect
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const original = 'SHANMUGA KRISHNAN S M';
    let frame = 0;
    const interval = setInterval(() => {
      if (frame < 20) {
        setGlitchName(
          original.split('').map((char, i) =>
            char === ' ' ? ' ' : (Math.random() < 0.3 ? chars[Math.floor(Math.random() * chars.length)] : char)
          ).join('')
        );
      } else {
        setGlitchName(original);
        clearInterval(interval);
      }
      frame++;
    }, 80);

    // Re-trigger glitch occasionally
    const glitchTimer = setInterval(() => {
      frame = 0;
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(glitchTimer);
    };
  }, []);

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  const scanlineStyle = {
    position: 'absolute',
    inset: 0,
    background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 2px)',
    pointerEvents: 'none',
    zIndex: 1,
  };

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#080808',
            overflow: 'hidden',
          }}
        >
          {/* CRT scanlines */}
          <div style={scanlineStyle} />

          {/* Falling sakura petals */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {[...Array(20)].map((_, i) => <SakuraPetal key={i} id={i} />)}
          </div>

          {/* Vertical scan grid lines */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute',
                  left: `${(i + 1) * 12.5}%`,
                  top: 0,
                  width: '1px',
                  height: '100%',
                  background: 'linear-gradient(180deg, transparent, rgba(129,236,255,0.06), transparent)',
                  transformOrigin: 'center',
                }}
              />
            ))}
          </div>

          {/* Corner decorations */}
          {[
            { top: '2rem', left: '2rem', borderTop: '2px solid', borderLeft: '2px solid' },
            { top: '2rem', right: '2rem', borderTop: '2px solid', borderRight: '2px solid' },
            { bottom: '2rem', left: '2rem', borderBottom: '2px solid', borderLeft: '2px solid' },
            { bottom: '2rem', right: '2rem', borderBottom: '2px solid', borderRight: '2px solid' },
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              style={{
                position: 'absolute',
                width: '24px',
                height: '24px',
                borderColor: 'rgba(129,236,255,0.3)',
                ...pos,
              }}
            />
          ))}

          {/* Main name — glitch effect */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', marginBottom: '1rem', textAlign: 'center' }}
          >
            {/* Glitch layer behind */}
            <motion.div
              animate={{ x: [-2, 2, -1, 0], opacity: [0.4, 0.2, 0.4, 0] }}
              transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 2 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: '#ff7350',
                clipPath: 'inset(30% 0 40% 0)',
                userSelect: 'none',
              }}
            >
              SHANMUGA KRISHNAN S M
            </motion.div>

            <h1
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                background: 'linear-gradient(135deg, #ffffff 0%, #81ecff 50%, #ffffff 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative',
              }}
            >
              {glitchName}
            </h1>

            {/* Glow */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px', height: '80px',
              background: 'radial-gradient(ellipse, rgba(129,236,255,0.12) 0%, transparent 70%)',
              filter: 'blur(20px)',
              zIndex: -1,
            }} />
          </motion.div>

          {/* Sub label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.6 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.35em',
              color: 'var(--primary)',
              marginBottom: '3rem',
            }}
          >
            AI & Data Science Engineer
          </motion.p>

          {/* Scanning line */}
          <motion.div
            animate={{ top: ['-5%', '110%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
            style={{
              position: 'absolute',
              left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(129,236,255,0.4), transparent)',
              boxShadow: '0 0 15px rgba(129,236,255,0.3)',
              pointerEvents: 'none',
            }}
          />

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', fontFamily: 'var(--font-sans)' }}
          >
            <span style={{
              fontSize: '4rem', fontWeight: 200, color: 'white',
              fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.04em',
            }}>
              {String(count).padStart(3, '0')}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700 }}>%</span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              width: '280px', height: '1px',
              background: 'rgba(255,255,255,0.06)',
              marginTop: '1.5rem', borderRadius: '10px', overflow: 'hidden',
              position: 'relative',
            }}
          >
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #81ecff, #ff7350)',
                borderRadius: '10px',
                width: `${count}%`,
                boxShadow: '0 0 20px rgba(129,236,255,0.6)',
              }}
            />
            {/* Moving shimmer on bar */}
            <motion.div
              animate={{ x: ['-100%', '400%'] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '30%', height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              }}
            />
          </motion.div>

          {/* Status text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ delay: 0.9 }}
            style={{
              position: 'absolute', bottom: '3rem',
              fontSize: '0.6rem', textTransform: 'uppercase',
              letterSpacing: '0.3em', fontFamily: 'var(--font-sans)',
              color: 'var(--on-surface-variant)',
            }}
          >
            Initializing Portfolio
          </motion.p>

          {/* Curtain reveal */}
          {phase === 'revealing' && (
            <>
              <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
                style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', background: '#080808', transformOrigin: 'top', zIndex: 3 }}
              />
              <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1.1, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
                style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: '#080808', transformOrigin: 'bottom', zIndex: 3 }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
