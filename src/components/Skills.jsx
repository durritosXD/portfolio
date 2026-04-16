import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Globe, Rocket } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "AI & Computer Vision",
      icon: <Brain className="text-cyan" />,
      skills: ["LLM Fine-tuning", "Neural Networks", "NLP", "YOLO / OpenCV", "PyTorch / TF"]
    },
    {
      title: "Software Engineering",
      icon: <Cpu className="text-coral" />,
      skills: ["Java (Distributed)", "Python", "API Architectures", "Real-time Sync", "Forensics"]
    },
    {
      title: "Interactive Web",
      icon: <Globe className="text-cyan" />,
      skills: ["React / Next.js", "Modern UI/UX", "Glassmorphism", "Motion Graphics", "Full Stack"]
    }
  ];

  return (
    <section id="skills" className="section bg-surface-low" style={{ margin: '8rem 0', borderRadius: '4rem 4rem 0 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '6rem' }}
      >
        <label>The Expertise</label>
        <h2 style={{ fontSize: '4rem', marginTop: '1.5rem', fontWeight: 700 }}>Technical <br /> <span className="text-coral">Arsenal.</span></h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem' }}>
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
               {cat.icon}
               <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.85rem', fontWeight: 700 }}>
                {cat.title}
               </h4>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={skill}
                  whileHover={{ x: 15, color: '#81ecff' }}
                  style={{ 
                    fontSize: '1.5rem', 
                    color: 'var(--on-surface-variant)', 
                    cursor: 'default',
                    fontFamily: 'var(--font-serif)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.03)'
                  }}
                >
                  {skill}
                  <Rocket size={14} style={{ opacity: 0.2 }} />
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
