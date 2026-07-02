import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Globe } from 'lucide-react';
import SplitText from './SplitText';

const Skills = () => {
  const categories = [
    {
      title: "AI & Computer Vision",
      icon: <Brain size={22} />,
      color: '#81ecff',
      skills: [
        { name: "LLM Fine-tuning", level: 85 },
        { name: "Neural Networks", level: 80 },
        { name: "NLP", level: 78 },
        { name: "YOLO / OpenCV", level: 75 },
        { name: "PyTorch / TF", level: 72 },
      ]
    },
    {
      title: "Software Engineering",
      icon: <Cpu size={22} />,
      color: '#ff7350',
      skills: [
        { name: "Java (Distributed)", level: 80 },
        { name: "Python", level: 92 },
        { name: "API Architectures", level: 78 },
        { name: "Real-time Sync", level: 70 },
        { name: "Data Forensics", level: 65 },
      ]
    },
    {
      title: "Interactive Web",
      icon: <Globe size={22} />,
      color: '#a78bfa',
      skills: [
        { name: "React / Next.js", level: 82 },
        { name: "Modern UI/UX", level: 85 },
        { name: "Glassmorphism", level: 90 },
        { name: "Motion Graphics", level: 78 },
        { name: "Full Stack", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '6rem' }}
      >
        <label>The Expertise</label>
        <h2 style={{ fontSize: '4rem', marginTop: '1.5rem', fontWeight: 700 }}>
          <SplitText type="words" animation="slideUp" stagger={0.1}>
            Technical
          </SplitText>
          <br />
          <span className="text-coral">
            <SplitText type="words" animation="slideUp" stagger={0.1} delay={0.2}>
              Arsenal.
            </SplitText>
          </span>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            style={{
              padding: '2.5rem',
              borderRadius: '1.5rem',
              background: 'var(--surface-container)',
              border: '1px solid rgba(255,255,255,0.04)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top accent line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '2rem',
              right: '2rem',
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${cat.color}40, transparent)`,
            }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                style={{ color: cat.color }}
              >
                {cat.icon}
              </motion.div>
              <h4 style={{
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontSize: '0.8rem',
                fontWeight: 700,
                background: `linear-gradient(135deg, ${cat.color}, white)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {cat.title}
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + si * 0.08, duration: 0.5 }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                  }}>
                    <motion.span
                      whileHover={{ color: cat.color, x: 5 }}
                      style={{
                        fontSize: '1rem',
                        color: 'var(--on-surface-variant)',
                        cursor: 'default',
                        fontFamily: 'var(--font-serif)',
                        transition: 'color 0.3s',
                      }}
                    >
                      {skill.name}
                    </motion.span>
                    <span style={{
                      fontSize: '0.7rem',
                      color: cat.color,
                      opacity: 0.7,
                      fontWeight: 600,
                      fontFamily: 'var(--font-sans)',
                    }}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated skill bar */}
                  <div style={{
                    width: '100%',
                    height: '3px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.1 + si * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${cat.color}80, ${cat.color})`,
                        borderRadius: '10px',
                        boxShadow: `0 0 10px ${cat.color}40`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
