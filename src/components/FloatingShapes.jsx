import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: -1 }}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            rotateZ: 0,
            scale: 0.5
          }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            rotateZ: 360,
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 20 + Math.random() * 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            position: 'absolute',
            width: '20vw',
            height: '20vw',
            border: '1px solid rgba(129, 236, 255, 0.05)',
            borderRadius: i % 2 === 0 ? '50%' : '2rem',
            background: 'radial-gradient(circle, rgba(129, 236, 255, 0.02) 0%, transparent 70%)',
            filter: 'blur(10px)'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
