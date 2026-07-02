import React from 'react';
import { motion } from 'framer-motion';

const AuroraBackground = () => {
  return (
    <div
      className="aurora-bg"
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: -2,
      }}
    >
      {/* Primary cyan blob */}
      <motion.div
        animate={{
          x: ['-10%', '15%', '-5%', '10%', '-10%'],
          y: ['-15%', '10%', '-10%', '5%', '-15%'],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129, 236, 255, 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Secondary coral blob */}
      <motion.div
        animate={{
          x: ['10%', '-15%', '5%', '-10%', '10%'],
          y: ['10%', '-5%', '15%', '-10%', '10%'],
          scale: [1.1, 0.9, 1.2, 1, 1.1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 115, 80, 0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Tertiary accent blob */}
      <motion.div
        animate={{
          x: ['-5%', '10%', '-10%', '5%', '-5%'],
          y: ['5%', '-10%', '10%', '-5%', '5%'],
          scale: [0.8, 1.1, 0.9, 1.2, 0.8],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '30%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129, 236, 255, 0.03) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Dot grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.5,
        }}
      />
    </div>
  );
};

export default AuroraBackground;
