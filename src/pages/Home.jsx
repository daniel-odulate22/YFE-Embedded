import React from 'react';
import { motion } from 'framer-motion';
import RobotCanvas from '../components/RobotCanvas';

export default function Home() {
  return (
    <>
      <div className="container" style={{ position: 'relative', minHeight: '100vh', paddingBottom: '100px' }}>

        {/* Hero Section */}
        <section style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '4rem',
          paddingBottom: '4rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ zIndex: 10 }}
            >
              <h1 style={{
                fontSize: '4.5rem',
                lineHeight: 1.1,
                color: 'var(--text-main)',
                marginBottom: '1.5rem'
              }}>
                <span className="text-purple">Building</span> Engineers,<br />
                who <span className="text-blue">build</span> the future.
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'var(--text-muted)',
                marginBottom: '2.5rem',
                maxWidth: '80%'
              }}>
                Equipping builders in embedded systems and CAD. Join the new era of engineering excellence.
              </p>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="chamfer-btn bg-purple" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                  Explore Workshops
                </button>
                <button className="chamfer-btn bg-alt" style={{ padding: '1rem 2rem', fontSize: '1.1rem', color: 'var(--accent-purple)' }}>
                  Meet the Team
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="chamfer-lg"
              style={{
                position: 'relative',
                height: '500px',
                width: '100%',
                overflow: 'hidden',
                boxShadow: '20px 20px 0px var(--bg-alt)'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--accent-blue)',
                opacity: 0.1,
                zIndex: 1
              }} />
              {/* Group Image */}
              <img
                src="/group-photo.jpg"
                alt="YFE Embedded Team"
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
                backgroundColor: '#e5e7eb',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                fontFamily: 'Outfit',
                fontSize: '1.5rem',
                textAlign: 'center',
                padding: '2rem'
              }}>
                [Place group-photo.jpg in public folder]
              </div>
            </motion.div>
          </div>
        </section>

        {/* Extended Section with Sticky Robot */}
        <section style={{ position: 'relative', paddingTop: '4rem', display: 'flex', gap: '4rem', alignItems: 'flex-start' }} className="responsive-robot-grid">

          {/* Left Column: Sticky Robot */}
          <div style={{
            position: 'sticky',
            top: '100px', // Below the navbar
            height: '80vh',
            width: '45%',
            zIndex: 0
          }} className="robot-container">
            <RobotCanvas />
          </div>

          {/* Right Column: Scrolling Content */}
          <div style={{ width: '55%', display: 'flex', flexDirection: 'column', gap: '6rem', paddingBottom: '4rem', zIndex: 1 }} className="content-container">

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 style={{ fontSize: '3rem', color: 'var(--accent-purple)', marginBottom: '1.5rem' }}>
                State of the <span className="text-blue">Art</span> Embedded Systems
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Our curriculum bridges the gap between hardware and software. We provide hands-on experience with real-world CAD designs and embedded controllers like the Arduino chassis featured here.
              </p>
            </motion.div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '2rem' }}>
                What We Teach
              </h2>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div className="chamfer bg-alt" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-blue)' }}>Arduino & Microcontrollers</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Master the core of embedded systems. Program microcontrollers to read sensors, control motors, and automate processes.</p>
                </div>
                <div className="chamfer bg-alt" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-purple)' }}>Circuit Design & Prototyping</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Learn how to read schematics, solder components, and build reliable physical circuits for your projects.</p>
                </div>
                <div className="chamfer bg-alt" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-blue)' }}>CAD & 3D Modeling</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Design custom parts and robot chassis using industry-standard Computer-Aided Design software.</p>
                </div>
              </div>
            </motion.div>

            {/* Perks of Joining Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '2rem' }}>
                Perks of Joining YFE
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="chamfer bg-purple" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Hands-On Experience</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)' }}>Less theory, more building. You build real projects.</p>
                </div>
                <div className="chamfer bg-blue" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Expert Mentorship</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)' }}>Guidance from professionals who have built the future.</p>
                </div>
                <div className="chamfer bg-blue" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Networking</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)' }}>Connect with a community of driven, like-minded engineers.</p>
                </div>
                <div className="chamfer bg-purple" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Career Growth</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)' }}>Portfolio-ready projects that impress employers.</p>
                </div>
              </div>
            </motion.div>

            {/* News and Events */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-purple)', marginBottom: '1.5rem' }}>
                News & Events
              </h2>
              <div className="chamfer-lg bg-alt" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Celebrating 1 Year of Engineering Excellence!</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Last month, YFE Embedded officially turned one! It's been an incredible year of building, teaching, and empowering the next generation of engineers. Check out some highlights from our journey.</p>
                </div>

                <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }} className="chamfer">
                  <img
                    src="/collage.jpg"
                    alt="YFE 1 Year Anniversary Collage"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{
                    display: 'none',
                    width: '100%',
                    height: '300px',
                    backgroundColor: 'var(--accent-purple)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'Outfit',
                    fontSize: '1.2rem',
                    textAlign: 'center',
                    padding: '2rem'
                  }}>
                    [Place collage.jpg in public folder]
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Aurora Robotics Partner Section */}
        <section style={{ paddingTop: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="chamfer-lg bg-green"
            style={{
              padding: '4rem',
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: '4rem',
              alignItems: 'center'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>Official Partner</h3>
              <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1.5rem' }}>Aurora Robotics</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: '2rem' }}>
                We are proud to partner with Aurora Robotics, a pioneer in advanced robotics and automation. Together, we are bridging the gap between education and cutting-edge industry standards, providing our students with unparalleled opportunities and resources.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Outfit' }}>Bakel Bakel</span>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>CTO & Founder, Aurora Robotics</span>
              </div>
            </div>

            <div style={{
              width: '100%',
              height: '400px',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }} className="chamfer">
              <img
                src="/bakel.jfif"
                alt="Bakel Bakel - CTO & Founder of Aurora Robotics"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{
                display: 'none',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                fontFamily: 'Outfit',
                fontSize: '1.2rem',
                textAlign: 'center',
                padding: '2rem',
                width: '100%',
                height: '100%'
              }}>
                <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</span>
                <span>[Place bakel.jpg in public folder]</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Location Section */}
        <section style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="chamfer-lg"
            style={{ overflow: 'hidden', border: '4px solid var(--accent-blue)' }}
          >
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-alt)', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Find Us Here</h2>
              <p style={{ color: 'var(--text-muted)' }}>Gwarinpa, Abuja, Nigeria</p>
            </div>
            {/* Google Maps iframe provided by user */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31516.474495102804!2d7.378260803953478!3d9.103847596785034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e756e877080fb%3A0xa9cbe3f96accde4e!2sGwarinpa%20Estate%2C%20Abuja%20900108%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1777696136377!5m2!1sen!2sng" width="600" height="450" style={{ border: 0, display: 'block' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </motion.div>
        </section>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 968px) {
          section > div { grid-template-columns: 1fr !important; }
          h1 { fontSize: 3rem !important; }
          .responsive-robot-grid { flex-direction: column !important; }
          .robot-container { width: 100% !important; height: 50vh !important; position: relative !important; top: 0 !important; }
          .content-container { width: 100% !important; }
        }
      `}} />
    </>
  );
}
