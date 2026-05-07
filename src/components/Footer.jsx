import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-color)',
      paddingTop: '6rem',
      borderTop: '2px solid #f3f4f6',
      marginTop: 'auto',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '4rem',
          marginBottom: '6rem'
        }}>

          {/* Column 1: Socials & Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-main)' }}>
              <a href="yourfavouritengineer@gmail.com" aria-label="Email"><FaEnvelope size={20} /></a>
              <a href="https://x.com/yfe_embedded" aria-label="Twitter"><FaTwitter size={20} /></a>
              <a href="https://www.linkedin.com/company/yfe-embedded/" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              <a href="https://www.instagram.com/your.fav.engr/" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="https://www.youtube.com/@YourFavouriteEngineer/videos" aria-label="Instagram"><FaYoutube size={20} /></a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <p>Copyright &copy; {new Date().getFullYear()} YFE</p>
              <a href="#" style={{ textDecoration: 'none' }}>Terms of Use</a>
              <a href="#" style={{ textDecoration: 'none' }}>Privacy Policy</a>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: '700' }}>Navigate</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link></li>
              <li><Link to="/workshops" style={{ color: 'var(--text-muted)' }}>Workshops</Link></li>
              <li><Link to="/team" style={{ color: 'var(--text-muted)' }}>Team</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: '700' }}>Connect</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link to="/contact" style={{ color: 'var(--text-muted)' }}>Contact Form</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: '700' }}>Contact</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>yourfavouritengineer@gmail.com</p>
          </div>

        </div>

      </div>

      {/* Massive Text at Bottom */}
      <div style={{
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        lineHeight: 0.8,
        paddingTop: '2rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(5rem, 15vw, 25rem)',
          fontWeight: 800,
          color: 'var(--accent-blue)',
          margin: 0,
          whiteSpace: 'nowrap',
          fontFamily: 'Outfit',
          letterSpacing: '-0.05em',
          transform: 'translateY(15%)' // Push it slightly down so it clips nicely
        }}>
          YFE EMBEDDED
        </h1>
      </div>

    </footer>
  );
}
