import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Stars } from 'lucide-react';

const achievements = [
  {
    year: "2024",
    title: "The Genesis",
    desc: "Commenced my engineering journey in Artificial Intelligence & Data Science at RIT.",
    icon: <Stars size={20} />
  },
  {
    year: "2024",
    title: "Infosys Techzooka Finalist",
    desc: "Secured a spot in the Top 5 at the prestigious national-level hackathon.",
    icon: <Trophy size={20} />
  },
  {
    year: "2024",
    title: "Hostel Hackathon Winner",
    desc: "Champions at Rajalakshmi Institute's specialized hostel management hackathon.",
    icon: <Award size={20} />
  },
  {
    year: "2024",
    title: "Google GDC & IBM Datathon",
    desc: "Engaged in global competitive challenges to push the boundaries of data analysis.",
    icon: <Award size={20} />
  }
];

const Achievements = () => {
  return (
    <section className="section">
      <div className="asymmetric-grid">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <label>Milestones</label>
          <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>The Journey <br /> So Far.</h2>
        </motion.div>
        
        <div>
          {achievements.map((item, i) => (
            <motion.div 
              key={item.title}
              className="timeline-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <span className="text-cyan font-serif" style={{ fontSize: '0.85rem', fontWeight: 700 }}>{item.year}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                <span className="text-coral">{item.icon}</span>
                <h3 style={{ fontSize: '1.5rem' }}>{item.title}</h3>
              </div>
              <p className="text-muted" style={{ marginTop: '1rem', maxWidth: '500px' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
