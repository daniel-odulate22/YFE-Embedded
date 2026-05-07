import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="container" style={{ paddingBottom: '100px' }}>
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3.5rem', color: 'var(--accent-purple)', marginBottom: '1rem' }}
        >
          Get In Touch
        </motion.h1>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="chamfer-lg bg-alt"
          style={{ padding: '4rem' }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-main)' }}>First Name</label>
                <input 
                  type="text" 
                  className="chamfer-btn"
                  style={{ 
                    padding: '1rem', 
                    border: '1px solid #d1d5db',
                    outline: 'none',
                    fontFamily: 'Inter'
                  }} 
                  placeholder="Hiro"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-main)' }}>Last Name</label>
                <input 
                  type="text" 
                  className="chamfer-btn"
                  style={{ 
                    padding: '1rem', 
                    border: '1px solid #d1d5db',
                    outline: 'none',
                    fontFamily: 'Inter'
                  }} 
                  placeholder="Hamada"
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontWeight: '600', color: 'var(--text-main)' }}>Email</label>
              <input 
                type="email" 
                className="chamfer-btn"
                style={{ 
                  padding: '1rem', 
                  border: '1px solid #d1d5db',
                  outline: 'none',
                  fontFamily: 'Inter'
                }} 
                placeholder="hiro@example.com"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontWeight: '600', color: 'var(--text-main)' }}>Message</label>
              <textarea 
                className="chamfer-btn"
                style={{ 
                  padding: '1rem', 
                  border: '1px solid #d1d5db',
                  outline: 'none',
                  fontFamily: 'Inter',
                  minHeight: '150px',
                  resize: 'vertical'
                }} 
                placeholder="How can we help you build the future?"
              ></textarea>
            </div>

            <button 
              className="chamfer-btn bg-blue" 
              style={{ 
                padding: '1rem 2rem', 
                fontSize: '1.1rem',
                marginTop: '1rem',
                alignSelf: 'flex-start'
              }}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}} />
    </div>
  );
}
