import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe } from 'lucide-react';
import SplitText from './SplitText';

const Skills = () => {
  const categories = [
    {
      title: "AI & Machine Learning",
      icon: <Database size={20} />,
      color: '#81ecff',
      skills: [
        { name: "Python", level: 80 },
        { name: "NLP & Text Processing", level: 70 },
        { name: "LLM Integration (APIs)", level: 68 },
        { name: "Data Analysis (Pandas)", level: 65 },
        { name: "Basic Neural Networks", level: 55 },
      ]
    },
    {
      title: "Software & Tools",
      icon: <Code2 size={20} />,
      color: '#ff7350',
      skills: [
        { name: "API Scripting & Automation", level: 78 },
        { name: "Git & Version Control", level: 75 },
        { name: "Java (Intermediate)", level: 60 },
        { name: "Shell Scripting", level: 55 },
        { name: "FFmpeg / Media Tools", level: 50 },
      ]
    },
    {
      title: "Web & Frontend",
      icon: <Globe size={20} />,
      color: '#a78bfa',
      skills: [
        { name: "React", level: 65 },
        { name: "HTML & CSS", level: 72 },
        { name: "Basic Full Stack", level: 55 },
        { name: "Framer Motion / UI", level: 60 },
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
          <SplitText type="words" animation="slideUp" stagger={0.1}>Technical</SplitText>
          <br />
          <span className="text-coral">
            <SplitText type="words" animation="slideUp" stagger={0.1} delay={0.2}>Arsenal.</SplitText>
          </span>
        </h2>
        <p className="text-muted" style={{ marginTop: '1.5rem', maxWidth: '500px', fontSize: '0.95rem', lineHeight: 1.7 }}>
          Honest snapshot of what I can actually do right now — based on real projects, not buzzwords.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
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
              position: 'absolute', top: 0, left: '2rem', right: '2rem', height: '2px',
              background: `linear-gradient(90deg, transparent, ${cat.color}40, transparent)`,
            }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }} style={{ color: cat.color }}>
                {cat.icon}
              </motion.div>
              <h4 style={{
                textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.78rem', fontWeight: 700,
                background: `linear-gradient(135deg, ${cat.color}, white)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
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
                  transition={{ delay: i * 0.1 + si * 0.07, duration: 0.5 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <motion.span
                      whileHover={{ color: cat.color, x: 5 }}
                      style={{ fontSize: '0.95rem', color: 'var(--on-surface-variant)', cursor: 'default', fontFamily: 'var(--font-serif)', transition: 'color 0.3s' }}
                    >
                      {skill.name}
                    </motion.span>
                    <span style={{ fontSize: '0.65rem', color: cat.color, opacity: 0.65, fontWeight: 600, fontFamily: 'var(--font-sans)' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1 + si * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${cat.color}70, ${cat.color})`,
                        borderRadius: '10px',
                        boxShadow: `0 0 8px ${cat.color}30`,
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
