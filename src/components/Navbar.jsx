import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import MagneticButton from './MagneticButton';

const navItems = ['About', 'Achievements', 'Projects', 'Skills', 'Contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const diff = latest - lastScrollY.current;
    if (diff > 5 && latest > 100) {
      setHidden(true);
    } else if (diff < -5) {
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -40% 0px' }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (item) => {
    setMobileOpen(false);
    const el = document.getElementById(item.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0, scale: 0.9 }}
        animate={{
          y: hidden ? -120 : 0,
          opacity: hidden ? 0 : 1,
          scale: 1,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass"
        style={{
          position: 'fixed',
          top: '1.5rem',
          left: '50%',
          x: '-50%',
          zIndex: 200,
          padding: '0.85rem 2.5rem',
          borderRadius: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}
      >
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <motion.a
            href="#"
            className="font-serif"
            style={{
              textDecoration: 'none',
              color: 'var(--primary)',
              fontWeight: 800,
              fontSize: '1.25rem',
              letterSpacing: '0.1em',
            }}
            whileHover={{ scale: 1.1 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            S.K.
          </motion.a>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ display: 'flex', gap: '0.25rem' }}>
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                style={{
                  textDecoration: 'none',
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontWeight: 600,
                  color: activeSection === item.toLowerCase() ? 'white' : 'var(--on-surface-variant)',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  position: 'relative',
                  transition: 'color 0.3s',
                }}
                whileHover={{ color: '#ffffff' }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                {/* Active indicator pill */}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeNavPill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(129, 236, 255, 0.1)',
                      borderRadius: '1rem',
                      border: '1px solid rgba(129, 236, 255, 0.15)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1 }}>{item}</span>

                {/* Animated underline on hover */}
                <motion.div
                  className="nav-underline"
                  style={{
                    position: 'absolute',
                    bottom: '4px',
                    left: '50%',
                    right: '50%',
                    height: '1px',
                    background: 'var(--primary)',
                  }}
                  whileHover={{ left: '20%', right: '20%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Hamburger button - mobile only */}
          <motion.button
            className="nav-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 201,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <div style={{ width: '24px', height: '18px', position: 'relative' }}>
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  background: mobileOpen ? 'var(--primary)' : 'white',
                  borderRadius: '2px',
                  top: 0,
                  transition: 'background 0.3s',
                }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                style={{
                  position: 'absolute',
                  width: '70%',
                  height: '2px',
                  background: 'white',
                  borderRadius: '2px',
                  top: '8px',
                }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  background: mobileOpen ? 'var(--primary)' : 'white',
                  borderRadius: '2px',
                  bottom: 0,
                  transition: 'background 0.3s',
                }}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 199,
              background: 'rgba(10, 10, 10, 0.95)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  textDecoration: 'none',
                  fontSize: '2.5rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  color: activeSection === item.toLowerCase() ? 'var(--primary)' : 'rgba(255,255,255,0.6)',
                  padding: '0.75rem 2rem',
                  letterSpacing: '-0.02em',
                }}
                whileHover={{ color: '#81ecff', x: 20 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                <span style={{
                  fontSize: '0.7rem',
                  color: 'var(--primary)',
                  fontFamily: 'var(--font-sans)',
                  marginRight: '1rem',
                  opacity: 0.5,
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                }}>
                  0{i + 1}
                </span>
                {item}
              </motion.a>
            ))}

            {/* Social links in mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                marginTop: '3rem',
                display: 'flex',
                gap: '2rem',
              }}
            >
              {[
                { name: 'GitHub', url: 'https://github.com/durritosXD' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shanmuga-krishnan-s-m-6b7395340' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: 'var(--on-surface-variant)',
                    textDecoration: 'none',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--on-surface-variant)'}
                >
                  {social.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
