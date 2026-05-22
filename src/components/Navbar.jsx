import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scrolling to shrink header and toggle background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll offset
      const scrollPosition = window.scrollY + 120; // offset
      for (const item of navigationItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className={`navbar-glass ${scrolled ? 'navbar-scrolled' : ''}`} style={{ padding: '20px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5%' }}>
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          style={{ 
            fontSize: '1.8rem', 
            fontWeight: '700', 
            textDecoration: 'none', 
            background: 'var(--grad-primary)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            fontFamily: "'Playfair Display', Georgia, serif"
          }}
        >
          {portfolioData.hero.name}.
        </a>

        {/* Desktop Menu */}
        <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', alignItems: 'center' }} className="desktop-menu-list">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                style={{ fontSize: '0.95rem', letterSpacing: '0.05em' }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className="btn-primary" 
              style={{ padding: '8px 20px', fontSize: '0.9rem' }}
            >
              Let's Talk <ArrowUpRight size={14} />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'none'
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          className="glass-card" 
          style={{
            position: 'fixed',
            top: '79px',
            left: '5%',
            width: '90%',
            padding: '30px',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  style={{ fontSize: '1.2rem', display: 'block' }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')} 
            className="btn-primary" 
            style={{ justifyContent: 'center', marginTop: '10px' }}
          >
            Contact Me <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      {/* Injecting CSS Media Queries specifically for layout toggling to remain purely in Vanilla CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu-list {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}
