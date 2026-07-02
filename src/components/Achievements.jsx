import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Stars, Zap } from 'lucide-react';
import SplitText from './SplitText';

const achievements = [
  {
    year: "2024",
    title: "The Genesis",
    desc: "Commenced my engineering journey in Artificial Intelligence & Data Science at Rajalakshmi Institute of Technology, Chennai.",
    icon: <Stars size={20} />,
    color: '#81ecff',
  },
  {
    year: "2024",
    title: "Hostel Hackathon Winner",
    desc: "Champions at Rajalakshmi Institute's specialized hostel management hackathon — built a winning full-stack solution.",
    icon: <Award size={20} />,
    color: '#4ade80',
  },
  {
    year: "2024",
    title: "Google GDC & IBM Datathon",
    desc: "Engaged in global competitive challenges to push the boundaries of data analysis and machine learning solutions.",
    icon: <Zap size={20} />,
    color: '#a78bfa',
  },
  {
    year: "2025",
    title: "Infosys Techzooka Finalist",
    desc: "Secured a spot as a Finalist at the prestigious Infosys Techzooka — a national-level hackathon attracting top engineering talent across India.",
    icon: <Trophy size={20} />,
    color: '#ff7350',
    featured: true,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="asymmetric-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <label>Milestones</label>
          <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>
            <SplitText type="words" animation="slideUp" stagger={0.1}>
              The Journey
            </SplitText>
            <br />
            <SplitText type="words" animation="slideUp" stagger={0.1} delay={0.2}>
              So Far.
            </SplitText>
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Animated timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              left: '-1px',
              top: 0,
              width: '1px',
              height: '100%',
              background: 'linear-gradient(180deg, rgba(129,236,255,0.3), rgba(255,115,80,0.3), transparent)',
              transformOrigin: 'top',
            }}
          />

          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              className="timeline-item"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={item.featured ? {
                background: `linear-gradient(135deg, ${item.color}08, transparent)`,
                borderRadius: '1rem',
                marginLeft: '-1rem',
                paddingLeft: '4rem',
                paddingTop: '1.5rem',
                paddingBottom: '2.5rem',
                border: `1px solid ${item.color}15`,
              } : {}}
            >
              {/* Animated timeline dot */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: item.featured ? 'calc(-1rem - 5px)' : '-5px',
                  top: item.featured ? '1.5rem' : 0,
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: item.color,
                  boxShadow: `0 0 12px ${item.color}60`,
                }}
                animate={{
                  boxShadow: [
                    `0 0 6px ${item.color}40`,
                    `0 0 18px ${item.color}80`,
                    `0 0 6px ${item.color}40`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="font-serif" style={{ fontSize: '0.85rem', fontWeight: 700, color: item.color }}>{item.year}</span>
                {item.featured && (
                  <span style={{
                    fontSize: '0.55rem',
                    padding: '0.2rem 0.6rem',
                    background: `${item.color}20`,
                    borderRadius: '100px',
                    color: item.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 700,
                    fontFamily: 'var(--font-sans)',
                  }}>
                    Featured
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                <motion.span
                  style={{ color: item.color }}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {item.icon}
                </motion.span>
                <h3 style={{ fontSize: '1.5rem' }}>{item.title}</h3>
              </div>

              <p className="text-muted" style={{ marginTop: '1rem', maxWidth: '500px', lineHeight: 1.7 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
