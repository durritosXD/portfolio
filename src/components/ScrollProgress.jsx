import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #81ecff, #ff7350, #81ecff)',
        backgroundSize: '200% 100%',
        transformOrigin: '0%',
        scaleX,
        zIndex: 10001,
      }}
      animate={{
        backgroundPosition: ['0% 0%', '200% 0%'],
      }}
      transition={{
        backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' },
      }}
    >
      {/* Glow effect at the leading edge */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: '-4px',
        width: '80px',
        height: '12px',
        background: 'radial-gradient(ellipse at right, rgba(129, 236, 255, 0.8), transparent)',
        filter: 'blur(4px)',
      }} />
    </motion.div>
  );
};

export default ScrollProgress;
