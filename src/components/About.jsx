import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SplitText from './SplitText';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Section divider line */}
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
          background: 'linear-gradient(90deg, transparent, rgba(129,236,255,0.2), transparent)',
          transformOrigin: 'left',
        }}
      />

      <div className="asymmetric-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <label>Backstory</label>
          <h2 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>
            <SplitText type="words" animation="slideUp" stagger={0.08} delay={0.2}>
              The Kinetic
            </SplitText>
            <br />
            <span className="text-coral">
              <SplitText type="words" animation="slideUp" stagger={0.08} delay={0.4}>
                Curator.
              </SplitText>
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <p style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
            Currently pursuing my degree in <span className="text-cyan">Artificial Intelligence and Data Science</span> at Rajalakshmi Institute of Technology (2024–2028). I specialize in turning complex datasets into meaningful narratives and building intelligent systems that scale.
          </p>
          <p className="text-muted">
            My approach to engineering is editorial—stripping away the noise to find the signal. Whether it's developing robust backends or training deep learning models, I focus on the intersection of logic and creativity.
          </p>

          {/* Animated stat counters */}
          <div className="stats-grid" style={{ display: 'flex', gap: '4rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <div>
              <h4 className="text-cyan" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                <AnimatedCounter target="3" suffix="+" />
              </h4>
              <p className="text-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years of Code</p>
            </div>
            <div>
              <h4 className="text-cyan" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                <AnimatedCounter target="5" suffix="+" />
              </h4>
              <p className="text-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Hackathons</p>
            </div>
            <div>
              <h4 style={{ fontSize: '2.5rem', fontWeight: 700, background: 'linear-gradient(135deg, #81ecff, #ff7350)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                AI/DS
              </h4>
              <p className="text-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Specialization</p>
            </div>
          </div>

          {/* Education timeline mini */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              marginTop: '2rem',
              padding: '1.5rem 2rem',
              background: 'rgba(129, 236, 255, 0.03)',
              borderRadius: '1rem',
              border: '1px solid rgba(129, 236, 255, 0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle gradient accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '3px',
              height: '100%',
              background: 'linear-gradient(180deg, #81ecff, #ff7350)',
              borderRadius: '3px',
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span className="text-cyan" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>2024 — 2028</span>
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>B.Tech in AI & Data Science</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>Rajalakshmi Institute of Technology, Chennai</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
