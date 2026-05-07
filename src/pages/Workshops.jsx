import React from 'react';
import { motion } from 'framer-motion';

export default function Workshops() {
  return (
    <div className="container" style={{ paddingBottom: '100px' }}>
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3.5rem', color: 'var(--accent-purple)', marginBottom: '1rem' }}
        >
          Ongoing Workshops
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}
        >
          Elevate your engineering skills with our intensive, hands-on embedded systems workshops.
        </motion.p>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="chamfer-lg bg-alt"
          style={{
            padding: '4rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            backgroundColor: 'var(--accent-blue)',
            opacity: 0.1,
            transform: 'rotate(45deg)'
          }} />

          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{
              display: 'inline-block',
              width: '12px',
              height: '40px',
              backgroundColor: 'var(--accent-blue)'
            }}></span>
            Embedded Systems Masterclass
          </h2>

          <div style={{ margin: '2rem auto 0', maxWidth: '600px' }}>
            <img
              src="src/assets/workshop-image.jpg"
              alt="Workshop preview"
              style={{
                width: '100%',
                borderRadius: '1rem',
                objectFit: 'cover',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginTop: '3rem'
          }}>
            {/* Tier 1 */}
            <div className="chamfer" style={{
              backgroundColor: 'white',
              padding: '3rem',
              border: '2px solid #e5e7eb',
              position: 'relative'
            }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Core Tier</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-blue)', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>
                ₦35,000 / $35
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-blue)' }}>✓</span> Guided technical instruction
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-blue)' }}>✓</span> Assignments and implementation tasks
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-blue)' }}>✓</span> Access to a focused engineering learning environment
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-muted)' }}>
                  <span>✗</span> Weekly 1-on-1 Clarity Sessions & LinkedIn Profile Optimization
                </li>
              </ul>
              <button className="chamfer-btn bg-blue" style={{ width: '100%', padding: '1rem' }}>
                Enroll Now
              </button>
            </div>

            {/* Tier 2 */}
            <div className="chamfer" style={{
              backgroundColor: 'var(--accent-purple)',
              color: 'white',
              padding: '3rem',
              position: 'relative',
              transform: 'scale(1.05)',
              zIndex: 10,
              boxShadow: '0 20px 25px -5px rgba(79, 45, 127, 0.4)'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                right: '20px',
                backgroundColor: 'var(--accent-blue)',
                padding: '0.5rem 1rem',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)'
              }}>
                RECOMMENDED
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Pro Tier</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>
                ₦50,000 / $50
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-blue)' }}>✓</span> Everything in Core
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-blue)' }}>✓</span> Weekly 1-on-1 Clarity Sessions
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-blue)' }}>✓</span> LinkedIn Profile Optimization
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-blue)' }}>✓</span> Personal Brand & Content Strategy Guidance
                </li>
              </ul>
              <button className="chamfer-btn bg-blue" style={{ width: '100%', padding: '1rem' }}>
                Enroll Now
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
