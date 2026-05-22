import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { portfolioData } from '../portfolioData';

// Custom inline SVGs for robust brand icons in modern Lucide versions
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Hero() {
  const { name, title, tagline, avatarUrl, socials } = portfolioData.hero;


  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '100px',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }}>
          
          {/* Hero Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '30px',
                background: 'rgba(254, 207, 239, 0.08)',
                border: '1px solid rgba(254, 207, 239, 0.15)',
                width: 'fit-content'
              }}
            >
              <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff9a9e' }}></span>
              <span style={{ fontSize: '0.85rem', fontWeight: '500', color: '#fecfef', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Open to Opportunities
              </span>
            </div>

            <h1 style={{ fontSize: '4rem', lineHeight: '1.1', margin: 0 }}>
              Hi, I'm <br />
              <span style={{ 
                background: 'var(--grad-primary)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                fontSize: '5.2rem',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: '700'
              }} className="text-glow">
                {name}
              </span>
            </h1>

            <h2 style={{ 
              fontSize: '1.8rem', 
              fontWeight: '400', 
              color: 'var(--text-secondary)',
              fontFamily: "'Outfit', sans-serif"
            }}>
              {title}
            </h2>

            <p style={{ fontSize: '1.15rem', maxWidth: '580px', color: 'var(--text-secondary)' }}>
              {tagline}
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href={socials.email} className="social-icon-btn" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
                <TwitterIcon />
              </a>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '20px', flexWrap: 'wrap' }}>
              <a 
                href="#projects" 
                onClick={(e) => handleScrollTo(e, 'projects')} 
                className="btn-primary"
              >
                Explore Projects <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScrollTo(e, 'contact')} 
                className="btn-secondary"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Hero Profile Image / Graphic */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="avatar-frame-container" style={{ position: 'relative', width: '320px', height: '320px' }}>
              
              {/* Rotating glowing rings */}
              <div className="rotating-ring ring-outer"></div>
              <div className="rotating-ring ring-inner"></div>
              
              {/* Main Avatar Container */}
              <div 
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  width: '290px',
                  height: '290px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid rgba(254, 207, 239, 0.2)',
                  boxShadow: '0 0 40px rgba(161, 140, 209, 0.3)',
                  zIndex: 2,
                  background: 'var(--bg-deep)'
                }}
              >
                <img 
                  src={avatarUrl} 
                  alt={name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="avatar-img"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-grid {
          grid-template-columns: 1.2fr 0.8fr;
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 40px !important;
          }
          .hero-grid > div {
            align-items: center !important;
            justify-content: center !important;
          }
          .hero-grid p {
            margin: 0 auto;
          }
          .hero-grid div {
            margin-left: auto;
            margin-right: auto;
          }
        }
        
        /* Social icon styling */
        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }
        .social-icon-btn:hover {
          color: var(--text-primary);
          background: rgba(254, 207, 239, 0.1);
          border-color: var(--border-active);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(254, 207, 239, 0.15);
        }

        /* Avatar rotating ring animations */
        .rotating-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .ring-outer {
          top: 0;
          left: 0;
          width: 320px;
          height: 320px;
          border: 2px dashed rgba(161, 140, 209, 0.3);
          animation: spin-clockwise 35s linear infinite;
        }
        .ring-inner {
          top: 8px;
          left: 8px;
          width: 304px;
          height: 304px;
          border: 1px dashed rgba(231, 127, 103, 0.3);
          animation: spin-counter-clockwise 25s linear infinite;
        }

        .avatar-img:hover {
          transform: scale(1.06);
        }

        .pulse-dot {
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }

        @keyframes spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-counter-clockwise {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </section>
  );
}
