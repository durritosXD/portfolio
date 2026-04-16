import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0, scale: 0.9, rotateX: -20 }}
      animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="glass"
      style={{ 
        position: 'fixed',
        top: '1.5rem',
        left: '50%',
        x: '-50%',
        zIndex: 100,
        padding: '1rem 3rem',
        borderRadius: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        transformStyle: 'preserve-3d'
      }}
    >
      <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
        <a href="#" className="font-serif" style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '0.1em' }}>
          S.K.
        </a>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted"
              style={{ 
                textDecoration: 'none', 
                fontSize: '0.7rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em',
                fontWeight: 600
              }}
              whileHover={{ color: 'white', y: -2 }}
              transition={{ duration: 0.3 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
