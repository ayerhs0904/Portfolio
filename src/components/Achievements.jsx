import React from 'react';
import { Award, Target, Calendar } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Achievements() {
  const achievements = portfolioData.achievements;

  return (
    <section id="achievements" className="container" style={{ position: 'relative' }}>
      <div className="section-header">
        <span className="section-subtitle">Milestones</span>
        <h2 className="section-title">Achievements</h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="timeline-container" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '20px 0' }}>
        
        {/* Vertical Timeline Line */}
        <div 
          className="timeline-line"
          style={{
            position: 'absolute',
            left: '31px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #a55eea 0%, #e77f67 100%)',
            opacity: 0.6
          }}
        ></div>

        {/* Timeline Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {achievements.map((ach, idx) => (
            <div 
              key={idx} 
              className="timeline-item"
              style={{
                display: 'flex',
                gap: '30px',
                position: 'relative'
              }}
            >
              {/* Timeline Bullet Node */}
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--bg-deep)',
                  border: '2px solid rgba(165, 94, 234, 0.5)',
                  boxShadow: '0 0 20px rgba(165, 94, 234, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fecfef',
                  zIndex: 3,
                  flexShrink: 0
                }}
                className="timeline-node"
              >
                <Award size={24} />
              </div>

              {/* Timeline Card */}
              <div 
                className="glass-card timeline-card"
                style={{
                  flexGrow: 1,
                  padding: '30px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                {/* Meta details */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      color: '#fecfef',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    <Calendar size={14} />
                    <span>{ach.date}</span>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                    {ach.institution}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  style={{ 
                    fontSize: '1.35rem', 
                    fontWeight: '600', 
                    color: 'var(--text-primary)',
                    fontFamily: "'Playfair Display', Georgia, serif"
                  }}
                >
                  {ach.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {ach.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .timeline-card {
          position: relative;
          transition: var(--transition-smooth);
        }
        
        .timeline-card::after {
          content: '';
          position: absolute;
          left: -10px;
          top: 22px;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid var(--border-light);
          pointer-events: none;
        }

        /* Hover animation triggers */
        .timeline-item:hover .timeline-node {
          border-color: rgba(254, 207, 239, 0.8) !important;
          box-shadow: 0 0 30px rgba(254, 207, 239, 0.45) !important;
          transform: scale(1.08);
          transition: var(--transition-smooth);
        }

        .timeline-item:hover .timeline-card {
          border-color: rgba(254, 207, 239, 0.25);
          box-shadow: 0 15px 40px rgba(161, 140, 209, 0.12);
          transform: translateX(8px);
        }

        @media (max-width: 576px) {
          .timeline-line {
            left: 20px !important;
          }
          .timeline-node {
            width: 42px !important;
            height: 42px !important;
            border-width: 1px !important;
          }
          .timeline-node svg {
            width: 16px !important;
            height: 16px !important;
          }
          .timeline-card {
            padding: 20px !important;
          }
          .timeline-card::after {
            display: none !important;
          }
          .timeline-item {
            gap: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}
