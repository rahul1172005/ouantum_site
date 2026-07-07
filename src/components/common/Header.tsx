import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    
    handleScroll();
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Core', href: '/#activities' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
  ];

  // Adjust logo scale, X-axis position, and Y-axis position directly here
  const logoScale = 15.0;
  const logoX = -1.3; // in pixels
  const logoY = 1.3; // in pixels

  return (
    <header
      className={`main-header ${isScrolled ? 'scrolled' : ''}`}
      style={isMenuOpen ? {
        backgroundColor: '#000000',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
      } : {}}
    >
      <div className="container header-container">
        <div className="logo">
          <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/assets/images/logo_horizontal.png"
              alt="Ouantum Logo"
              style={{
                height: '24px',
                width: 'auto',
                transform: `scale(${logoScale}) translate(${logoX}px, ${logoY}px)`,
                transformOrigin: 'left center',
                display: 'block',
                filter: 'invert(1)'
              }}
            />
          </a>
        </div>

        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{ fontFamily: 'var(--font-adieu)' }}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            onClick={() => navigate('/contact')}
            style={{
              fontFamily: 'var(--font-adieu)',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: isMobile ? '10px' : '10px 24px',
              fontWeight: 600,
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: isMobile ? '50%' : '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobile ? '38px' : 'auto',
              height: isMobile ? '38px' : 'auto',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#ffffff';
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            {isMobile ? <Phone size={16} /> : 'Contact Us'}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav style={{ width: '100%' }}>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={() => setIsMenuOpen(false)} style={{ fontFamily: 'var(--font-adieu)' }}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div style={{ marginTop: 'auto', width: '100%', paddingTop: '2rem' }}>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/contact');
                }}
                style={{
                  fontFamily: 'var(--font-adieu)',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '16px 32px',
                  fontWeight: 600,
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.25s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
