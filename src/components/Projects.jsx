import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Terminal, Code2, X, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';
import SplitText from './SplitText';
import MagneticButton from './MagneticButton';

const projects = [
  {
    title: "Cold Case Study",
    id: "cold_case_study",
    description: "An investigative analysis tool leveraging data forensics to uncover hidden patterns in historical datasets.",
    longDesc: "Built during a deep-dive into digital investigation techniques, Cold Case Study uses advanced CSS layouts and Python-driven analysis to present data in an editorial, high-stakes forensic theme. It bridges the gap between raw data and storytelling.",
    tech: ["Python", "Pandas", "Analysis", "Forensics"],
    link: "https://github.com/durritosXD/cold_case_study",
    color: '#81ecff',
  },
  {
    title: "SlackDetect",
    id: "slack_detect",
    description: "Real-time activity monitoring and automated classification for Slack workspaces.",
    longDesc: "SlackDetect uses LLM-powered classification to monitor workspace health and automate reporting. It processes thousands of messages per hour with high precision, ensuring that critical events never go unnoticed.",
    tech: ["Python", "LLM", "Slack API", "Monitoring"],
    link: "https://github.com/durritosXD/SlackDetect",
    color: '#ff7350',
  },
  {
    title: "ESYNC",
    id: "esync",
    description: "Distributed data synchronization engine built with high-performance Java.",
    longDesc: "ESYNC was designed to solve the problem of real-time state synchronization across multiple nodes. It implements a robust event-driven architecture to ensure zero data loss during high-load periods.",
    tech: ["Java", "Distributed Systems", "Real-time"],
    link: "https://github.com/durritosXD/ESYNC",
    color: '#a78bfa',
  },
  {
    title: "Rem",
    id: "rem",
    description: "A sophisticated personal assistant bot designed for task automation and workflow optimization.",
    longDesc: "Rem is my personal command center. Integrated with dozens of APIs, it automates my daily workflows, from managing schedules to analyzing code snippets on the fly using fine-tuned models.",
    tech: ["Python", "Automation", "NLP", "API Integration"],
    link: "https://github.com/durritosXD/Rem",
    color: '#81ecff',
  },
  {
    title: "Smart Resume Screener",
    id: "smart_resume",
    description: "AI-driven application tracking system for automated talent acquisition.",
    longDesc: "This project leverages LLMs and NLP to parse complex resumes and rank candidates based on job descriptions. It automates the most time-consuming part of the hiring process with high accuracy.",
    tech: ["Python", "NLP", "LLM", "Data Processing"],
    link: "https://github.com/durritosXD/smart-resume-screening",
    color: '#ff7350',
  }
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '6rem' }}
      >
        <label>Selected Case Studies</label>
        <h2 style={{ fontSize: '4rem', margin: '1.5rem 0', fontWeight: 700 }}>
          <SplitText type="words" animation="slideUp" stagger={0.1}>
            Cinematic
          </SplitText>
          <br />
          <span className="text-cyan">
            <SplitText type="words" animation="slideUp" stagger={0.1} delay={0.2}>
              Works
            </SplitText>
          </span>
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))',
        gap: '3rem',
      }}>
        {projects.map((project, index) => (
          <TiltCard
            key={project.id}
            onClick={() => setSelected(project)}
            style={{ display: 'flex' }}
          >
            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover="hovered"
              style={{
                padding: '3.5rem',
                borderRadius: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1,
                minHeight: '400px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--surface-container)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                transition: 'border-color 0.5s, box-shadow 0.5s',
              }}
            >
              {/* Animated gradient border glow on hover */}
              <motion.div
                className="card-glow"
                variants={{
                  hovered: { opacity: 1 },
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: 'absolute',
                  inset: '-1px',
                  borderRadius: '2rem',
                  background: `conic-gradient(from 0deg, ${project.color}33, transparent, ${project.color}22, transparent, ${project.color}33)`,
                  zIndex: -1,
                  animation: 'spin 4s linear infinite',
                }}
              />

              {/* Inner glow */}
              <motion.div
                variants={{
                  hovered: { opacity: 0.08 },
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '100%',
                  height: '100%',
                  background: `radial-gradient(circle, ${project.color}, transparent 70%)`,
                  pointerEvents: 'none',
                }}
              />

              {/* Background number detail */}
              <div style={{
                position: 'absolute',
                top: '-1rem',
                right: '-1rem',
                fontSize: '10rem',
                fontWeight: 900,
                opacity: 0.02,
                pointerEvents: 'none',
                fontFamily: 'var(--font-serif)',
              }}>
                0{index + 1}
              </div>

              <div>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{
                      fontSize: '0.6rem',
                      padding: '0.35rem 0.9rem',
                      background: 'var(--surface-container-highest)',
                      borderRadius: '100px',
                      color: project.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      border: `1px solid ${project.color}15`,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>{project.title}</h3>
                <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>{project.description}</p>
              </div>

              <motion.div
                style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: project.color, fontWeight: 600, fontSize: '0.9rem' }}
                variants={{
                  hovered: { x: 10, gap: '1rem' },
                }}
                transition={{ duration: 0.3 }}
              >
                View Details
                <motion.span
                  variants={{ hovered: { x: 5 } }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.div>
            </motion.div>
          </TiltCard>
        ))}
      </div>

      {/* Project Detail Modal — Slide from right (drawer style) */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(null)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 1000,
              }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="project-drawer"
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '100%',
                maxWidth: '700px',
                height: '100vh',
                background: 'var(--surface-container-high)',
                zIndex: 1001,
                overflowY: 'auto',
                padding: '4rem 3rem',
                borderLeft: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '-20px 0 60px rgba(0,0,0,0.5)',
              }}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setSelected(null)}
                style={{
                  position: 'sticky',
                  top: '1rem',
                  float: 'right',
                  background: 'var(--surface-container-highest)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'white',
                  cursor: 'pointer',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                }}
                whileHover={{ scale: 1.1, borderColor: 'rgba(129,236,255,0.3)' }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label style={{ color: selected.color }}>Project Detail</label>
                <h2 style={{ fontSize: '3.5rem', margin: '1rem 0 2rem', lineHeight: 1 }}>{selected.title}</h2>

                {/* Tech pills */}
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                  {selected.tech.map(t => (
                    <span key={t} style={{
                      fontSize: '0.65rem',
                      padding: '0.4rem 1rem',
                      background: `${selected.color}10`,
                      borderRadius: '100px',
                      color: selected.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      border: `1px solid ${selected.color}20`,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                <h4 style={{ color: selected.color, marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em' }}>Challenge & Solution</h4>
                <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: 'var(--on-surface-variant)' }}>
                  {selected.longDesc}
                </p>

                <div style={{ marginTop: '4rem' }}>
                  <MagneticButton
                    as="a"
                    href={selected.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ textDecoration: 'none', display: 'inline-flex', padding: '1rem 2rem' }}
                  >
                    <ExternalLink size={18} /> View on GitHub
                  </MagneticButton>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
