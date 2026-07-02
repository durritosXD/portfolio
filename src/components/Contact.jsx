import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ExternalLink, Link, Mail, ArrowUpRight } from 'lucide-react';
import SplitText from './SplitText';
import MagneticButton from './MagneticButton';

const socials = [
  { name: 'GitHub', url: 'https://github.com/durritosXD', icon: <ExternalLink size={18} /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shanmuga-krishnan-s-m-6b7395340', icon: <Link size={18} /> },
  { name: 'Email', url: 'mailto:krishnaowoxd@gmail.com', icon: <Mail size={18} /> },
];

const Contact = () => {
  const [focused, setFocused] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: '4rem', position: 'relative' }}>
      {/* Section top gradient divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,115,80,0.2), transparent)',
          transformOrigin: 'center',
        }}
      />

      <div className="asymmetric-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <label>Initiate</label>
          <h2 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>
            <SplitText type="words" animation="slideUp" stagger={0.1}>
              Let's
            </SplitText>
            <br />
            <SplitText type="words" animation="slideUp" stagger={0.1} delay={0.2}>
              Connect.
            </SplitText>
          </h2>
          <p className="text-muted" style={{ marginTop: '2rem', maxWidth: '300px', lineHeight: 1.7 }}>
            Looking for collaborations in AI, ML development, or data visualization? Drop a message.
          </p>

          {/* Direct email CTA */}
          <motion.a
            href="mailto:krishnaowoxd@gmail.com"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '2rem',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
            whileHover={{ x: 5 }}
          >
            krishnaowoxd@gmail.com <ArrowUpRight size={14} />
          </motion.a>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}
          >
            {socials.map((social) => (
              <MagneticButton
                key={social.name}
                as="a"
                href={social.url}
                target={social.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                strength={0.4}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--surface-container)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: 'var(--on-surface-variant)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s, border-color 0.3s, box-shadow 0.3s',
                }}
                className="social-icon-btn"
              >
                {social.icon}
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            padding: '3rem',
            borderRadius: '1.5rem',
            background: 'var(--surface-container)',
            border: '1px solid rgba(255,255,255,0.04)',
          }}
          onSubmit={handleSubmit}
        >
          {[
            { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'hello@example.com' },
          ].map((field) => (
            <div key={field.name} style={{ position: 'relative' }}>
              <motion.label
                animate={{
                  color: focused === field.name ? '#81ecff' : 'var(--on-surface-variant)',
                  y: focused === field.name ? -2 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ display: 'block', marginBottom: '0.5rem' }}
              >
                {field.label}
              </motion.label>
              <div style={{ position: 'relative' }}>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused('')}
                  style={{ position: 'relative', zIndex: 1 }}
                />
                {/* Animated underline */}
                <motion.div
                  animate={{
                    scaleX: focused === field.name ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #81ecff, #ff7350)',
                    transformOrigin: 'center',
                    zIndex: 2,
                  }}
                />
              </div>
            </div>
          ))}

          <div style={{ position: 'relative' }}>
            <motion.label
              animate={{
                color: focused === 'message' ? '#81ecff' : 'var(--on-surface-variant)',
                y: focused === 'message' ? -2 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{ display: 'block', marginBottom: '0.5rem' }}
            >
              Message
            </motion.label>
            <div style={{ position: 'relative' }}>
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                style={{ position: 'relative', zIndex: 1 }}
              />
              <motion.div
                animate={{
                  scaleX: focused === 'message' ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #81ecff, #ff7350)',
                  transformOrigin: 'center',
                  zIndex: 2,
                }}
              />
            </div>
          </div>

          <MagneticButton
            className="btn-primary"
            style={{
              alignSelf: 'flex-start',
              padding: '1.25rem 3rem',
              position: 'relative',
            }}
          >
            {submitted ? (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                ✓ Sent!
              </motion.span>
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </MagneticButton>
        </motion.form>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          marginTop: '8rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '4rem',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 800, letterSpacing: '0.1em' }}>
              S.K.
            </h3>
            <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
              AI & Data Science Engineer
            </p>
          </div>

          <div style={{ display: 'flex', gap: '2.5rem' }}>
            {socials.map(social => (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                style={{
                  color: 'var(--on-surface-variant)',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                whileHover={{ color: '#81ecff', y: -2 }}
                transition={{ duration: 0.3 }}
              >
                {social.icon}
                <span className="footer-link-text">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.03)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p className="text-muted" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            &copy; {new Date().getFullYear()} Shanmuga Krishnan. All Rights Reserved.
          </p>
          <p className="text-muted" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Built with React & Framer Motion
          </p>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
