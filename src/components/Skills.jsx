import React from 'react';
import { portfolioData } from '../portfolioData';

export default function Skills() {
  const { categories } = portfolioData.skills;

  return (
    <section id="skills" className="container" style={{ position: 'relative' }}>
      <div className="section-header">
        <span className="section-subtitle">Capabilities</span>
        <h2 className="section-title">My Skillset</h2>
      </div>

      {/* Grid of skill categories */}
      <div className="grid-3" style={{ gap: '30px' }}>
        {categories.map((cat, catIdx) => (
          <div 
            key={catIdx}
            className="glass-card skill-cat-card"
            style={{
              padding: '35px',
              display: 'flex',
              flexDirection: 'column',
              gap: '25px'
            }}
          >
            <h3 
              style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                color: 'var(--text-primary)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '15px',
                marginBottom: '5px',
                letterSpacing: '0.02em'
              }}
            >
              {cat.name}
            </h3>

            {/* List of skills in category */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cat.skills.map((skill, skillIdx) => (
                <div key={skillIdx} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  
                  {/* Skill Metadata Label */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
                      {skill.name}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#fecfef' }}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Gradient Progress Bar */}
                  <div 
                    style={{
                      height: '8px',
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <div 
                      style={{
                        height: '100%',
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, #a55eea 0%, #e77f67 100%)',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(165, 94, 234, 0.5)'
                      }}
                      className="skill-progress-bar"
                    ></div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      <style>{`
        .skill-cat-card {
          position: relative;
          overflow: hidden;
        }
        .skill-cat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%);
          opacity: 0.7;
        }
        .skill-cat-card:hover {
          border-color: rgba(161, 140, 209, 0.2);
          box-shadow: 0 15px 40px rgba(161, 140, 209, 0.1);
        }
        
        /* Subtle transition for progress indicator bars */
        .skill-progress-bar {
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}
