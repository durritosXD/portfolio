import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'revealing' | 'done'

  useEffect(() => {
    const duration = 2500;
    const steps = 100;
    const increment = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      // Eased counting — slow start, fast middle, slow end
      const eased = Math.round(easeInOutCubic(current / steps) * 100);
      setCount(eased);

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => setPhase('revealing'), 300);
        setTimeout(() => {
          setPhase('done');
          onComplete?.();
        }, 1400);
      }
    }, increment);

    return () => clearInterval(timer);
  }, [onComplete]);

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0a0a0a',
            overflow: 'hidden',
          }}
        >
          {/* Animated background lines */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute',
                  left: `${20 + i * 15}%`,
                  top: 0,
                  width: '1px',
                  height: '100%',
                  background: 'linear-gradient(180deg, transparent, rgba(129, 236, 255, 0.1), transparent)',
                  transformOrigin: 'top',
                }}
              />
            ))}
          </div>

          {/* Main initials */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', marginBottom: '3rem' }}
          >
            <motion.h1
              style={{
                fontSize: 'clamp(4rem, 12vw, 8rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                background: 'linear-gradient(135deg, #81ecff 0%, #ff7350 50%, #81ecff 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              S.K.
            </motion.h1>

            {/* Glow behind text */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(129, 236, 255, 0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
              zIndex: -1,
            }} />
          </motion.div>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.25rem',
              fontFamily: 'var(--font-sans)',
            }}
          >
            <span style={{
              fontSize: '3.5rem',
              fontWeight: 300,
              color: 'white',
              fontVariantNumeric: 'tabular-nums',
              letterSpacing: '-0.02em',
            }}>
              {count}
            </span>
            <span style={{
              fontSize: '1rem',
              color: 'var(--on-surface-variant)',
              fontWeight: 600,
            }}>
              %
            </span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              width: '200px',
              height: '1px',
              background: 'rgba(255,255,255,0.1)',
              marginTop: '2rem',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #81ecff, #ff7350)',
                borderRadius: '10px',
                width: `${count}%`,
                boxShadow: '0 0 20px rgba(129, 236, 255, 0.5)',
              }}
            />
          </motion.div>

          {/* Bottom label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.8 }}
            style={{
              position: 'absolute',
              bottom: '3rem',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              fontFamily: 'var(--font-sans)',
              color: 'var(--on-surface-variant)',
            }}
          >
            Loading Experience
          </motion.p>

          {/* Curtain reveal */}
          {phase === 'revealing' && (
            <>
              <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '50%',
                  height: '100%',
                  background: '#0a0a0a',
                  transformOrigin: 'top',
                  zIndex: 2,
                }}
              />
              <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '50%',
                  height: '100%',
                  background: '#0a0a0a',
                  transformOrigin: 'bottom',
                  zIndex: 2,
                }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
