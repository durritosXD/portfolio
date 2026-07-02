import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // Use a state to track visibility
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="back-to-top"
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--surface-container-high)',
            color: 'var(--primary)',
            boxShadow: '0 4px 30px rgba(129, 236, 255, 0.15), inset 0 0 0 1px rgba(129, 236, 255, 0.2)',
          }}
        >
          {/* Rotating gradient border */}
          <div className="gradient-border-spinner" style={{
            position: 'absolute',
            inset: '-2px',
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, #81ecff, #ff7350, #81ecff)',
            animation: 'spin 3s linear infinite',
            zIndex: -1,
            opacity: 0.6,
          }} />
          <div style={{
            position: 'absolute',
            inset: '1px',
            borderRadius: '50%',
            background: 'var(--surface-container-high)',
            zIndex: -1,
          }} />
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
