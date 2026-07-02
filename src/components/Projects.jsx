import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';
import SplitText from './SplitText';
import MagneticButton from './MagneticButton';

const projects = [
  {
    title: "ReadX Listen",
    id: "readx_listen",
    description: "Converts written content into audio — turn articles, PDFs, and web pages into listenable narrations.",
    longDesc: "ReadX Listen is a tool that bridges the gap between reading and listening. Feed it any text or document and it turns it into clean, natural audio output. Built to save time and make content more accessible.",
    tech: ["Python", "TTS", "NLP", "Automation"],
    link: "https://github.com/durritosXD/readX-listen",
    color: '#81ecff',
  },
  {
    title: "Rem",
    id: "rem",
    description: "A personal assistant bot built for task automation and workflow optimization.",
    longDesc: "Rem is my personal command center. Integrated with various APIs, it automates daily workflows — from quick lookups to running scripts on the fly. A bot that grows with your habits.",
    tech: ["Python", "Automation", "API Integration"],
    link: "https://github.com/durritosXD/Rem",
    color: '#ff7350',
  },
  {
    title: "LeganPanion",
    id: "leganpanion",
    description: "A legal companion tool to help users understand documents, clauses, and legal jargon in plain language.",
    longDesc: "LeganPanion uses LLM-powered text analysis to break down complex legal documents into plain, understandable language. Aimed at making legal knowledge accessible to everyone, not just lawyers.",
    tech: ["Python", "LLM", "NLP", "Legal AI"],
    link: "https://github.com/durritosXD/LeganPanion",
    color: '#a78bfa',
  },
  {
    title: "RealitySynth",
    id: "realitysynth",
    description: "Synthesizes realistic data and scenarios for training and testing AI/ML models.",
    longDesc: "RealitySynth generates synthetic but realistic datasets and simulation scenarios, solving the constant problem of not having enough quality training data for ML pipelines. Built for researchers and hobbyists alike.",
    tech: ["Python", "Data Synthesis", "ML", "Simulation"],
    link: "https://github.com/durritosXD/RealitySynth",
    color: '#4ade80',
  },
  {
    title: "CompetitiveClaw",
    id: "competitiveclaw",
    description: "Tracks and aggregates competitive programming contest data across platforms.",
    longDesc: "CompetitiveClaw scrapes and consolidates contest schedules, ratings, and problem sets from multiple platforms into one place. Useful for competitive programmers who want to keep up without switching tabs constantly.",
    tech: ["Python", "Scraping", "Data Aggregation"],
    link: "https://github.com/durritosXD/CompetitiveClaw",
    color: '#ff7350',
  },
  {
    title: "Shorts Automation",
    id: "shorts_automation",
    description: "Pipeline that converts YouTube video links into short-form clips automatically.",
    longDesc: "This pipeline takes a YouTube video URL, identifies the most engaging segments, and outputs ready-to-upload short clips. Built to automate the repetitive process of creating Shorts from long-form content.",
    tech: ["Python", "FFmpeg", "YouTube API", "Automation"],
    link: "https://github.com/durritosXD/yt-link-to-shorts-pipeline",
    color: '#81ecff',
  },
  {
    title: "Bingable",
    id: "bingable",
    description: "Curates and recommends binge-worthy content based on your mood and watch history.",
    longDesc: "Bingable is a content recommendation engine that goes beyond generic suggestions. It factors in mood signals and viewing patterns to surface shows and movies you'll actually watch — not just algorithmically safe picks.",
    tech: ["Python", "Recommendation Systems", "Data"],
    link: "https://github.com/durritosXD/Bingable",
    color: '#a78bfa',
  },
  {
    title: "67 Challenge",
    id: "challenge_67",
    description: "A personal 67-day discipline and self-improvement tracker with streaks and accountability.",
    longDesc: "The 67 Challenge is a personal project built around building habits. Track daily tasks, maintain streaks, and hold yourself accountable over 67 days. Simple, clean, no-nonsense — because the hard part is the doing, not the app.",
    tech: ["Python", "Habit Tracking", "Personal Project"],
    link: "https://github.com/durritosXD/67_challenge",
    color: '#4ade80',
  },
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
          <SplitText type="words" animation="slideUp" stagger={0.1}>Cinematic</SplitText>
          <br />
          <span className="text-cyan">
            <SplitText type="words" animation="slideUp" stagger={0.1} delay={0.2}>Works</SplitText>
          </span>
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
        gap: '2.5rem',
      }}>
          <motion.div
            key={project.id}
            onClick={() => setSelected(project)}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover="hovered"
            style={{
              padding: '2.5rem',
              borderRadius: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '320px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--surface-container)',
              border: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            {/* Rotating gradient border on hover */}
            <motion.div
              className="card-glow"
              variants={{ hovered: { opacity: 1 } }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                position: 'absolute', inset: '-1px', borderRadius: '1.5rem',
                background: `conic-gradient(from 0deg, ${project.color}33, transparent, ${project.color}22, transparent, ${project.color}33)`,
                zIndex: -1, animation: 'spin 4s linear infinite',
              }}
            />

            {/* Inner glow */}
            <motion.div
              variants={{ hovered: { opacity: 0.07 } }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute', top: '-50%', right: '-50%',
                width: '100%', height: '100%',
                background: `radial-gradient(circle, ${project.color}, transparent 70%)`,
                pointerEvents: 'none',
              }}
            />

            {/* Background index */}
            <div style={{
              position: 'absolute', top: '-0.5rem', right: '1rem',
              fontSize: '6rem', fontWeight: 900, opacity: 0.025,
              pointerEvents: 'none', fontFamily: 'var(--font-serif)',
              color: project.color,
            }}>
              {String(index + 1).padStart(2, '0')}
            </div>

            <div>
              <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    fontSize: '0.58rem', padding: '0.3rem 0.8rem',
                    background: 'var(--surface-container-highest)',
                    borderRadius: '100px', color: project.color,
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    border: `1px solid ${project.color}18`,
                  }}>{t}</span>
                ))}
              </div>
              <motion.h3
                variants={{ hovered: { color: project.color } }}
                transition={{ duration: 0.3 }}
                style={{ fontSize: '1.8rem', marginBottom: '1rem', lineHeight: 1.1, color: '#ffffff' }}
              >
                {project.title}
              </motion.h3>
              <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{project.description}</p>
            </div>

            <motion.div
              style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: project.color, fontWeight: 600, fontSize: '0.85rem' }}
              variants={{ hovered: { x: 8 } }}
              transition={{ duration: 0.3 }}
            >
              View Details <ArrowRight size={16} />
            </motion.div>
          </motion.div>
      </div>

      {/* Project drawer */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(null)}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 1000,
              }}
            />
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="project-drawer"
              style={{
                position: 'fixed', top: 0, right: 0,
                width: '100%', maxWidth: '600px', height: '100vh',
                background: 'var(--surface-container-high)',
                zIndex: 1001, overflowY: 'auto',
                padding: '4rem 3rem',
                borderLeft: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '-20px 0 60px rgba(0,0,0,0.5)',
              }}
            >
              <motion.button
                onClick={() => setSelected(null)}
                style={{
                  position: 'sticky', top: '1rem', float: 'right',
                  background: 'var(--surface-container-highest)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'white', cursor: 'pointer',
                  width: '40px', height: '40px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={18} />
              </motion.button>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <label style={{ color: selected.color }}>Project Detail</label>
                <h2 style={{ fontSize: '3rem', margin: '1rem 0 2rem', lineHeight: 1 }}>{selected.title}</h2>

                <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                  {selected.tech.map(t => (
                    <span key={t} style={{
                      fontSize: '0.62rem', padding: '0.35rem 0.9rem',
                      background: `${selected.color}10`,
                      borderRadius: '100px', color: selected.color,
                      textTransform: 'uppercase', letterSpacing: '0.1em',
                      border: `1px solid ${selected.color}20`,
                    }}>{t}</span>
                  ))}
                </div>

                <h4 style={{ color: selected.color, marginBottom: '1.25rem', textTransform: 'uppercase', fontSize: '0.72rem', letterSpacing: '0.15em' }}>
                  About This Project
                </h4>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'var(--on-surface-variant)' }}>{selected.longDesc}</p>

                <div style={{ marginTop: '3rem' }}>
                  <MagneticButton
                    as="a" href={selected.link} target="_blank" rel="noreferrer"
                    className="btn-primary"
                    style={{ textDecoration: 'none', display: 'inline-flex', padding: '1rem 2rem' }}
                  >
                    <ExternalLink size={16} /> View on GitHub
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
