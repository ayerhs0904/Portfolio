import React, { useState } from 'react';
import { Mail, MapPin, Briefcase, Send, CheckCircle } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Contact() {
  const { email, address, availability } = portfolioData.contact;
  
  // State for form fields
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, sending, success

  // Form input validation logic
  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message content is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');

    // Simulate sending email via API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset back to idle after 4 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }, 2000);
  };

  return (
    <section id="contact" className="container" style={{ position: 'relative' }}>
      <div className="section-header">
        <span className="section-subtitle">Connect</span>
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div className="grid-2" style={{ gap: '50px', alignItems: 'stretch' }}>
        
        {/* Contact Info Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <h3 style={{ fontSize: '1.8rem', fontWeight: '500', marginBottom: '10px' }}>
            Let's discuss a new project or role
          </h3>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '20px' }}>
            I am always excited to connect with developers, managers, and clients. Feel free to shoot a message via the form or through my email channel directly!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Availability Detail */}
            <div className="glass-card contact-info-card">
              <Briefcase size={20} style={{ color: '#fecfef' }} />
              <div>
                <h4>Status</h4>
                <p>{availability}</p>
              </div>
            </div>

            {/* Email Detail */}
            <div className="glass-card contact-info-card">
              <Mail size={20} style={{ color: '#a18cd1' }} />
              <div>
                <h4>Direct Email</h4>
                <a href={`mailto:${email}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.2s' }} className="email-hover">
                  {email}
                </a>
              </div>
            </div>

            {/* Location Detail */}
            <div className="glass-card contact-info-card">
              <MapPin size={20} style={{ color: '#e77f67' }} />
              <div>
                <h4>Location</h4>
                <p>{address}</p>
              </div>
            </div>

          </div>

        </div>

        {/* Contact Form */}
        <div className="glass-card" style={{ padding: '40px', borderRadius: '24px' }}>
          
          {status === 'success' ? (
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                height: '100%',
                textAlign: 'center',
                animation: 'fadeUp 0.5s ease'
              }}
            >
              <CheckCircle size={60} style={{ color: '#fecfef' }} />
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', margin: 0 }}>
                Message Sent Successfully!
              </h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
                Thank you for reaching out, Shreya will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              
              {/* Name field */}
              <div className="input-group">
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  placeholder=" " 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                />
                <label htmlFor="name" className="form-label">Your Name</label>
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              {/* Email field */}
              <div className="input-group">
                <input 
                  type="text" 
                  name="email"
                  id="email"
                  placeholder=" " 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
                <label htmlFor="email" className="form-label">Email Address</label>
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              {/* Message field */}
              <div className="input-group">
                <textarea 
                  name="message"
                  id="message"
                  placeholder=" " 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                ></textarea>
                <label htmlFor="message" className="form-label">Message Details</label>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ 
                  width: '100%', 
                  justifyContent: 'center', 
                  padding: '16px',
                  borderRadius: '12px',
                  marginTop: '10px'
                }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span className="spinner"></span> Sending...
                  </span>
                ) : (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    Send Message <Send size={16} />
                  </span>
                )}
              </button>

            </form>
          )}

        </div>

      </div>

      <style>{`
        .contact-info-card {
          padding: 24px 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          border-radius: 16px !important;
          transition: var(--transition-smooth);
        }
        
        .contact-info-card h4 {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .contact-info-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .contact-info-card:hover {
          border-color: rgba(254, 207, 239, 0.2);
          box-shadow: 0 10px 25px rgba(254, 207, 239, 0.08);
          transform: translateX(4px);
        }

        .email-hover:hover {
          color: #fecfef !important;
          text-shadow: 0 0 8px rgba(254, 207, 239, 0.3);
        }

        /* Spinner for loading state */
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
