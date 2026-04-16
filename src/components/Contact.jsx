import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ paddingBottom: '12rem' }}>
      <div className="asymmetric-grid">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <label>Initiate</label>
          <h2 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>Let's <br /> Connect.</h2>
          <p className="text-muted" style={{ marginTop: '2rem', maxWidth: '300px' }}>
            Looking for collaborations in AI, ML development, or data visualization? Drop a message.
          </p>
        </motion.div>
        
        <motion.form
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
           onSubmit={(e) => e.preventDefault()}
        >
          <div style={{ position: 'relative' }}>
            <label>Full Name</label>
            <input type="text" placeholder="SHANMUGA KRISHNAN S M" />
          </div>
          
          <div style={{ position: 'relative' }}>
            <label>Email Address</label>
            <input type="email" placeholder="hello@example.com" />
          </div>
          
          <div style={{ position: 'relative' }}>
            <label>Message</label>
            <textarea rows="4" placeholder="Tell me about your project..." />
          </div>
          
          <motion.button 
            type="submit" 
            className="btn-primary"
            style={{ alignSelf: 'flex-start', padding: '1.25rem 3rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
      
      <div style={{ marginTop: '8rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between' }}>
        <p className="text-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          &copy; 2024 Shanmuga Krishnan. All Rights Reserved.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['GitHub', 'LinkedIn', 'Twitter'].map(social => (
            <a key={social} href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
