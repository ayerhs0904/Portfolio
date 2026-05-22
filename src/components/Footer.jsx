import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Footer() {
  const name = portfolioData.hero.name;

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        background: 'rgba(10, 6, 18, 0.95)',
        padding: '50px 0 30px 0',
        marginTop: '100px',
        position: 'relative'
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', textAlign: 'center', padding: '0 5%' }}>
        
        {/* Name / Logo */}
        <h3 
          style={{ 
            fontSize: '1.6rem', 
            fontWeight: '700',
            background: 'var(--grad-primary)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            fontFamily: "'Playfair Display', Georgia, serif"
          }}
        >
          {name}.
        </h3>

        <p style={{ maxWidth: '400px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
          Designed with absolute dedication to elegant software styling and deep computational foundations.
        </p>

        {/* Back To Top */}
        <button
          onClick={handleBackToTop}
          aria-label="Back to top"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-light)',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-smooth)'
          }}
          className="back-to-top-btn"
        >
          <ArrowUp size={20} />
        </button>

        {/* Copyright */}
        <div 
          style={{ 
            fontSize: '0.85rem', 
            color: 'var(--text-muted)', 
            borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
            width: '100%', 
            paddingTop: '20px',
            marginTop: '10px'
          }}
        >
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </div>

      </div>

      <style>{`
        .back-to-top-btn:hover {
          color: var(--text-primary);
          background: rgba(254, 207, 239, 0.1);
          border-color: var(--border-active);
          transform: translateY(-4px);
          box-shadow: 0 5px 15px rgba(254, 207, 239, 0.15);
        }
      `}</style>
    </footer>
  );
}
