import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-surface-low" style={{ margin: '8rem 0' }}>
      <div className="asymmetric-grid">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <label>Backstory</label>
          <h2 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>The <span className="text-coral">Kinetic</span> <br /> Curator.</h2>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <p style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
            Currently pursuing my degree in <span className="text-cyan">Artificial Intelligence and Data Science</span> at Rajalakshmi Institute of Technology. I specialize in turning complex datasets into meaningful narratives and building intelligent systems that scale.
          </p>
          <p className="text-muted">
            My approach to engineering is editorial—stripping away the noise to find the signal. Whether it's developing robust backends or training deep learning models, I focus on the intersection of logic and creativity.
          </p>
          
          <div style={{ display: 'flex', gap: '4rem', marginTop: '2rem' }}>
            <div>
              <h4 className="text-cyan">03+</h4>
              <p className="text-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>Years of Code</p>
            </div>
            <div>
              <h4 className="text-cyan">12+</h4>
              <p className="text-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>Github Repos</p>
            </div>
            <div>
              <h4 className="text-cyan">AI/DS</h4>
              <p className="text-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>Specialization</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
