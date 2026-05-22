import React from 'react';
import { Sparkles, Terminal, Palette, Award } from 'lucide-react';
import { portfolioData } from '../portfolioData';

// Map icons dynamically to core values
const valueIcons = [
  <Terminal size={24} className="value-icon" />,
  <Award size={24} className="value-icon" />,
  <Palette size={24} className="value-icon" />
];

export default function About() {
  const { bio, stats, values } = portfolioData.about;

  return (
    <section id="about" className="container" style={{ position: 'relative' }}>
      <div className="section-header">
        <span className="section-subtitle">Biography</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        {/* Biography Text and Stats Grid */}
        <div className="grid-2" style={{ alignItems: 'center', gap: '50px' }}>
          
          {/* Biography text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '500', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              Solving complex algorithms, <br />designing premium interfaces <Sparkles size={20} style={{ color: '#fecfef' }} />
            </h3>
            <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              {bio}
            </p>
          </div>

          {/* Stats Cards Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="stats-grid">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="glass-card stat-card"
                style={{
                  padding: '30px 15px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <span 
                  style={{
                    fontSize: '2.4rem',
                    fontWeight: '700',
                    background: 'var(--grad-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: "'Outfit', sans-serif"
                  }}
                  className="stat-value"
                >
                  {stat.value}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '500' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Pillars / Values Section */}
        <div style={{ marginTop: '30px' }}>
          <h3 style={{ fontSize: '1.6rem', textAlign: 'center', marginBottom: '35px', fontWeight: '500', color: 'var(--text-primary)' }}>
            Core Pillars of My Work
          </h3>
          <div className="grid-3">
            {values.map((val, idx) => (
              <div 
                key={idx}
                className="glass-card value-card"
                style={{
                  padding: '35px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                <div 
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '16px',
                    background: 'rgba(165, 94, 234, 0.1)',
                    border: '1px solid rgba(165, 94, 234, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fecfef'
                  }}
                >
                  {valueIcons[idx % valueIcons.length]}
                </div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                  {val.title}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .stats-grid {
            margin-top: 10px;
          }
        }
        @media (max-width: 576px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          .stat-card {
            padding: 20px 10px !important;
          }
        }
        
        .stat-card:hover {
          border-color: rgba(254, 207, 239, 0.25);
          box-shadow: 0 10px 30px rgba(161, 140, 209, 0.1);
        }
        
        .value-card:hover {
          border-color: rgba(231, 127, 103, 0.2);
          box-shadow: 0 15px 40px rgba(231, 127, 103, 0.08);
        }
      `}</style>
    </section>
  );
}
