import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Marquee = ({
  items = [],
  speed = 25,
  direction = 'left',
  separator = '✦',
  className = '',
}) => {
  const { scrollY } = useScroll();

  // Speed up marquee based on scroll velocity
  const baseVelocity = direction === 'left' ? -1 : 1;

  // Create a repeating set (4x for seamless loop)
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`marquee-container ${className}`}
      style={{
        overflow: 'hidden',
        padding: '2.5rem 0',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        position: 'relative',
        background: 'linear-gradient(90deg, var(--background) 0%, rgba(26,26,26,0.5) 50%, var(--background) 100%)',
      }}
    >
      {/* Fade edges */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '150px',
        height: '100%',
        background: 'linear-gradient(90deg, var(--background), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '150px',
        height: '100%',
        background: 'linear-gradient(270deg, var(--background), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      <motion.div
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        style={{
          display: 'flex',
          gap: '3rem',
          whiteSpace: 'nowrap',
          width: 'fit-content',
        }}
      >
        {repeatedItems.map((item, i) => (
          <React.Fragment key={i}>
            <span
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.08)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                userSelect: 'none',
              }}
            >
              {item}
            </span>
            {i < repeatedItems.length - 1 && (
              <span
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(129, 236, 255, 0.2)',
                  alignSelf: 'center',
                }}
              >
                {separator}
              </span>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
