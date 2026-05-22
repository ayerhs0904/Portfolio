import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { portfolioData } from '../portfolioData';

// Custom inline Github SVG to avoid package missing-export issues
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="container" style={{ position: 'relative' }}>
      <div className="section-header">
        <span className="section-subtitle">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      {/* Grid of project cards */}
      <div className="grid-2" style={{ gap: '35px' }}>
        {projects.map((proj, idx) => (
          <div 
            key={idx}
            className="glass-card project-card"
            style={{
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
              position: 'relative'
            }}
          >
            {/* Top Row: Tech icon and Links */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div 
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(254, 207, 239, 0.07)',
                  border: '1px solid rgba(254, 207, 239, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fecfef'
                }}
              >
                <Code size={20} />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon />
                </a>
                <a 
                  href={proj.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn"
                  aria-label="Live Site"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Core Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 
                style={{ 
                  fontSize: '1.6rem', 
                  fontWeight: '600', 
                  color: 'var(--text-primary)',
                  fontFamily: "'Playfair Display', Georgia, serif"
                }}
                className="project-title"
              >
                {proj.title}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {proj.desc}
              </p>
            </div>

            {/* Tech Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
              {proj.tech.map((t, tIdx) => (
                <span 
                  key={tIdx}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    color: '#fecfef',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    letterSpacing: '0.02em'
                  }}
                  className="tech-badge"
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

      <style>{`
        .project-card:hover {
          border-color: rgba(254, 207, 239, 0.25);
          box-shadow: 0 15px 45px rgba(254, 207, 239, 0.12);
        }
        
        .project-card:hover .project-title {
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .project-link-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .project-link-btn:hover {
          color: var(--text-primary);
          background: rgba(231, 127, 103, 0.1);
          border-color: rgba(231, 127, 103, 0.3);
          transform: translateY(-2px);
        }

        .tech-badge {
          transition: var(--transition-fast);
        }
        
        .project-card:hover .tech-badge {
          background: rgba(254, 207, 239, 0.05);
          border-color: rgba(254, 207, 239, 0.15);
        }
      `}</style>
    </section>
  );
}
