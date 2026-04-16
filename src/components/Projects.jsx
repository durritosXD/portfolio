import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Terminal, Code2, X, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

const projects = [
  {
    title: "Cold Case Study",
    id: "cold_case_study",
    description: "An investigative analysis tool leveraging data forensics to uncover hidden patterns in historical datasets.",
    longDesc: "Built during a deep-dive into digital investigation techniques, Cold Case Study uses advanced CSS layouts and Python-driven analysis to present data in an editorial, high-stakes forensic theme. It bridges the gap between raw data and storytelling.",
    tech: ["Python", "Pandas", "Analysis", "Forensics"],
    link: "https://github.com/durritosXD/cold_case_study"
  },
  {
    title: "SlackDetect",
    id: "slack_detect",
    description: "Real-time activity monitoring and automated classification for Slack workspaces.",
    longDesc: "SlackDetect uses LLM-powered classification to monitor workspace health and automate reporting. It processes thousands of messages per hour with high precision, ensuring that critical events never go unnoticed.",
    tech: ["Python", "LLM", "Slack API", "Monitoring"],
    link: "https://github.com/durritosXD/SlackDetect"
  },
  {
    title: "ESYNC",
    id: "esync",
    description: "Distributed data synchronization engine built with high-performance Java.",
    longDesc: "ESYNC was designed to solve the problem of real-time state synchronization across multiple nodes. It implements a robust event-driven architecture to ensure zero data loss during high-load periods.",
    tech: ["Java", "Distributed Systems", "Real-time"],
    link: "https://github.com/durritosXD/ESYNC"
  },
  {
    title: "Rem",
    id: "rem",
    description: "A sophisticated personal assistant bot designed for task automation and workflow optimization.",
    longDesc: "Rem is my personal command center. Integrated with dozens of APIs, it automates my daily workflows, from managing schedules to analyzing code snippets on the fly using fine-tuned models.",
    tech: ["Python", "Automation", "NLP", "API Integration"],
    link: "https://github.com/durritosXD/Rem"
  },
  {
    title: "Smart Resume Screener",
    id: "smart_resume",
    description: "AI-driven application tracking system for automated talent acquisition.",
    longDesc: "This project leverages LLMs and NLP to parse complex resumes and rank candidates based on job descriptions. It automates the most time-consuming part of the hiring process with high accuracy.",
    tech: ["Python", "NLP", "LLM", "Data Processing"],
    link: "https://github.com/durritosXD/smart-resume-screening"
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
        <h2 style={{ fontSize: '4rem', margin: '1.5rem 0', fontWeight: 700 }}>Cinematic <br /> <span className="text-cyan">Works</span></h2>
      </motion.div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', 
        gap: '4rem' 
      }}>
        {projects.map((project, index) => (
          <TiltCard
            key={project.id}
            onClick={() => setSelected(project)}
            style={{ display: 'flex' }}
          >
            <motion.div
              className="bg-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              style={{ 
                padding: '3.5rem', 
                borderRadius: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1,
                minHeight: '400px',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background number detail */}
              <div style={{ 
                position: 'absolute', 
                top: '-1rem', 
                right: '-1rem', 
                fontSize: '10rem', 
                fontWeight: 900, 
                opacity: 0.02,
                pointerEvents: 'none'
              }}>
                  0{index + 1}
              </div>

              <div>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{ 
                      fontSize: '0.6rem', 
                      padding: '0.3rem 0.8rem', 
                      background: 'var(--surface-container-highest)',
                      borderRadius: '100px',
                      color: 'var(--primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>{project.title}</h3>
                <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>{project.description}</p>
              </div>
              
              <motion.div 
                 style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600 }}
                 whileHover={{ x: 10 }}
              >
                 View Details <ArrowRight size={20} />
              </motion.div>
            </motion.div>
          </TiltCard>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <div className="modal-overlay glass" onClick={() => setSelected(null)}>
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelected(null)}
                style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer', opacity: 0.5 }}
              >
                <X size={32} />
              </button>

              <label className="text-cyan">Project Detail</label>
              <h2 style={{ fontSize: '4rem', margin: '1rem 0 3rem' }}>{selected.title}</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.75rem' }}>Challenge & Solution</h4>
                  <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--on-surface-variant)' }}>
                    {selected.longDesc}
                  </p>
                  
                  <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem' }}>
                    <a href={selected.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <Terminal size={20} /> View Github
                    </a>
                  </div>
                </div>
                
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1rem' }}>
                  <h4 style={{ marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.75rem' }}>Tech Stack</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {selected.tech.map(t => (
                      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                         <Code2 size={16} className="text-cyan" />
                         <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
