import React from 'react';
import { motion } from 'framer-motion';

export default function Team() {
  return (
    <div className="container" style={{ paddingBottom: '100px' }}>
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3.5rem', color: 'var(--accent-blue)', marginBottom: '1rem' }}
        >
          Meet the Team
        </motion.h1>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="chamfer-lg bg-alt"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '4rem',
            padding: '0',
            overflow: 'hidden'
          }}
        >
          <div style={{ height: '600px', backgroundColor: 'var(--accent-purple)' }}>
            {/* Founder Image */}
            <img
              src="/founder.jpg"
              alt="Founder of YFE Embedded"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div style={{
              display: 'none',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontFamily: 'Outfit',
              fontSize: '1.2rem',
              textAlign: 'center',
              padding: '2rem'
            }}>
              [Place founder.jpg in public folder]
            </div>
          </div>

          <div style={{ padding: '4rem 4rem 4rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              The Founder
            </h2>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-purple)', marginBottom: '2rem' }}>
              Visionary Engineer & Educator
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              With a passion for teaching and a deep expertise in embedded systems and CAD design, the founder of YFE Embedded started this initiative to bridge the gap between theoretical knowledge and practical engineering.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              "Building Engineers, who build the future" is more than just a motto—it's the guiding philosophy. Through rigorous workshops and hands-on projects, she has empowered countless students to realize their potential in robotics, circuit design, and programming.
            </p>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
              <div style={{
                width: '50px', height: '50px', backgroundColor: 'var(--accent-blue)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
              }} className="chamfer">
                In
              </div>
              <div style={{
                width: '50px', height: '50px', backgroundColor: 'var(--accent-purple)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
              }} className="chamfer">
                X
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section style={{ paddingTop: '6rem' }}>
        <h2 style={{ fontSize: '3rem', color: 'var(--text-main)', marginBottom: '3rem', textAlign: 'center' }}>
          The Core Team
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {/* Placeholder 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="chamfer bg-alt"
            style={{ padding: '2rem', textAlign: 'center' }}
          >
            <div style={{ width: '150px', height: '150px', margin: '0 auto 1.5rem', backgroundColor: '#e5e7eb', borderRadius: '50%', overflow: 'hidden' }}>
              <img src="/team-1.jpg" alt="Team Member 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
              <div style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>Photo</div>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Hiro Hamada</h3>
            <p style={{ color: 'var(--accent-blue)', fontWeight: 'bold', marginBottom: '1rem' }}>Lead Hardware Engineer</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Specializes in embedded systems architecture and high-speed PCB design.</p>
          </motion.div>

          {/* Placeholder 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="chamfer bg-alt"
            style={{ padding: '2rem', textAlign: 'center' }}
          >
            <div style={{ width: '150px', height: '150px', margin: '0 auto 1.5rem', backgroundColor: '#e5e7eb', borderRadius: '50%', overflow: 'hidden' }}>
              <img src="/team-2.jpg" alt="Team Member 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
              <div style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>Photo</div>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Bola Ahmed Tinubu (B.A.T)</h3>
            <p style={{ color: 'var(--accent-purple)', fontWeight: 'bold', marginBottom: '1rem' }}>Software Lead...or something</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Expert in C/C++, RTOS, and writing highly optimized firmware.</p>
          </motion.div>

          {/* Placeholder 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="chamfer bg-alt"
            style={{ padding: '2rem', textAlign: 'center' }}
          >
            <div style={{ width: '150px', height: '150px', margin: '0 auto 1.5rem', backgroundColor: '#e5e7eb', borderRadius: '50%', overflow: 'hidden' }}>
              <img src="/team-3.jpg" alt="Team Member 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
              <div style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>Photo</div>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Avatar Korra</h3>
            <p style={{ color: 'var(--accent-blue)', fontWeight: 'bold', marginBottom: '1rem' }}>CAD & Mechatronics</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Designing the physical enclosures and complex robotic linkages.</p>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 968px) {
          section > div { grid-template-columns: 1fr !important; }
          section > div > div:nth-child(2) { padding: 3rem !important; }
          section > div > div:nth-child(1) { height: 400px !important; }
        }
      `}} />
    </div>
  );
}
