import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '2px solid var(--accent-purple)',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img 
            src="/logo.png" 
            alt="YFE Embedded Logo" 
            style={{ height: '40px', objectFit: 'contain' }} 
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <span style={{ 
            fontFamily: 'Outfit', 
            fontWeight: 800, 
            fontSize: '1.2rem',
            color: 'var(--text-main)',
            textTransform: 'uppercase'
          }}>
            YFE <span style={{ color: 'var(--accent-blue)' }}>Embedded</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                color: location.pathname === link.path ? 'var(--accent-blue)' : 'var(--text-main)',
                transition: 'color 0.2s',
                borderBottom: location.pathname === link.path ? '2px solid var(--accent-purple)' : 'none',
                paddingBottom: '4px'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <button style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: 'var(--accent-purple)',
              color: 'white',
            }} className="chamfer-btn">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }} onClick={toggleMenu}>
          {isOpen ? <X color="var(--accent-purple)" /> : <Menu color="var(--accent-purple)" />}
        </div>
      </div>

      {/* Internal CSS for simple responsive handling */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; cursor: pointer; }
        }
      `}} />
    </nav>
  );
}
