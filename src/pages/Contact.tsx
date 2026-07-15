import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const BASE_URL = 'https://ouantum.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OUANTUM',
  url: BASE_URL,
  sameAs: ['https://www.linkedin.com/company/ouantum/'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-7695827158',
    contactType: 'customer service',
    email: 'contact@ouantum.com',
    availableLanguage: ['English', 'Tamil'],
  },
};

const Contact: React.FC = () => {
  useSEO({
    title: 'Contact OUANTUM | Get in Touch with Our Team',
    description:
      'Contact OUANTUM to discuss platform integration, structural auditing requirements, or enterprise deployments. Get in touch with our team in Chennai.',
    keywords:
      'contact OUANTUM, OUANTUM email, structural audit demo, QA platform inquiry, civil engineering AI contact Chennai, OUANTUM phone number',
    canonicalPath: '/contact',
    jsonLd: [organizationSchema],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [ctaActive, setCtaActive] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isActive = (idx: number) => activeCard === idx;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', organization: '', message: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className="subpage-wrapper"
      style={{ background: '#000000', color: '#fff', minHeight: '100vh', paddingBottom: '80px' }}
    >
      {/* Hero */}
      <section className="hero" style={{ minHeight: '60vh', paddingTop: '120px' }} aria-label="Contact hero section">
        <div className="container hero-content">
          <div className="section-split hero-main-layout">
            <motion.div className="sidebar-info hero-left">
              <div className="hero-labels">
                <span className="hero-tech-label">
                  COMMUNICATION NODE · GLOBAL REACH
                </span>
              </div>
              <p className="side-description hero-description">
                INITIATE SECURE COMMUNICATIONS WITH OUR ENGINEERING TEAM.
              </p>
            </motion.div>

            <motion.div className="hero-right-content hero-right">
              <h1
                style={{
                  fontFamily: 'var(--font-adieu)',
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  lineHeight: 1.1,
                  marginBottom: '2rem',
                  textTransform: 'uppercase',
                }}
              >
                Get in Touch<br/>with OUANTUM
              </h1>
            </motion.div>
          </div>
          <p className="hero-subtext" style={{ marginTop: '2rem' }}>
            Whether you have a project enquiry, would like to learn more about our platform, explore collaboration opportunities, or require additional information, our team is here to help. Use the contact form below to submit your enquiry, and the appropriate team will review your request and respond through the contact details you provide.
          </p>
        </div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ height: '60vh' }}
        >
          <img
            src="/assets/images/contact-us-hero.jpg"
            alt="OUANTUM headquarters in Chennai — contact our civil engineering AI platform team"
            className="subpage-hero-image"
          />
          <div className="overlay-gradient" aria-hidden="true"></div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section
        className="container"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '4rem' }}
        aria-label="Contact options"
      >
        <div className="contact-grid">
          {/* Email */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setActiveCard(isActive(0) ? null : 0)}
            className={`contact-card animated-silver-bg ${isActive(0) ? 'active' : ''}`}
            role="button"
            tabIndex={0}
            aria-label="Email contact card"
            onKeyDown={(e) => e.key === 'Enter' && setActiveCard(isActive(0) ? null : 0)}
          >
            <a
              href="mailto:contact@ouantum.com"
              onClick={e => e.stopPropagation()}
              className="contact-link"
              aria-label="Send email to OUANTUM at contact@ouantum.com"
            >
              contact@ouantum.com
            </a>
            <p className="contact-label">RESPONSE WITHIN 12H</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setActiveCard(isActive(1) ? null : 1)}
            className={`contact-card animated-silver-bg ${isActive(1) ? 'active' : ''}`}
            role="button"
            tabIndex={0}
            aria-label="Phone contact card"
            onKeyDown={(e) => e.key === 'Enter' && setActiveCard(isActive(1) ? null : 1)}
          >
            <a
              href="tel:+917695827158"
              onClick={e => e.stopPropagation()}
              className="contact-link"
              style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}
              aria-label="Call OUANTUM at +91 7695827158"
            >
              +91 7695827158
            </a>
            <a
              href="tel:+918610805559"
              onClick={e => e.stopPropagation()}
              className="contact-link"
              style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}
              aria-label="Call OUANTUM at +91 8610805559"
            >
              +91 8610805559
            </a>
            <p className="contact-label">OPERATIONAL: 24/7</p>
          </motion.div>

          {/* Address */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setActiveCard(isActive(2) ? null : 2)}
            className={`contact-card animated-silver-bg ${isActive(2) ? 'active' : ''}`}
            role="button"
            tabIndex={0}
            aria-label="Office address card"
            onKeyDown={(e) => e.key === 'Enter' && setActiveCard(isActive(2) ? null : 2)}
          >
            <address className="contact-address" style={{ fontStyle: 'normal' }}>
              25, SILAMBU ST,<br />PADMANABHA NAGAR, CHOOLAIMEDU,<br />CHENNAI, TAMIL NADU 600094
            </address>
          </motion.div>
        </div>

        {/* Action Button */}
        <motion.a
          href="https://api.whatsapp.com/send/?phone=917695827158&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setCtaActive(v => !v)}
          className={`contact-cta ${ctaActive ? 'active' : ''}`}
          style={{ textDecoration: 'none', display: 'flex', marginBottom: '4rem' }}
          aria-label="Start a WhatsApp conversation with OUANTUM"
        >
          <span className="contact-cta-text">
            START WHATSAPP CHAT
          </span>
          <div className="contact-cta-icon" aria-hidden="true">
            <ArrowRight size={24} />
          </div>
        </motion.a>

        {/* Interactive Contact Form (CP-002) */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                background: '#070707',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '4rem 3rem',
                textAlign: 'center',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <CheckCircle2 size={48} color="#ffffff" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-adieu)', fontSize: '1.25rem', color: '#fff', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                Enquiry Sent
              </h3>
              <p style={{
                fontFamily: 'var(--font-main)',
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.75)',
                marginBottom: '2.5rem',
              }}>
                Thank you for contacting OUANTUM. Your enquiry has been received successfully. Our team will review your request and respond using the contact information you provided. If additional information is required, we will reach out to you directly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '8px',
                  padding: '0.75rem 1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  transition: 'border-color 0.2s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = '#ffffff')}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)')}
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: '#070707',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '3rem',
              }}
              noValidate
            >
              <p style={{
                fontFamily: 'var(--font-main)',
                fontSize: '0.88rem',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.55)',
                marginBottom: '2rem',
                marginTop: 0,
              }}>
                Please provide accurate contact information and a brief description of your enquiry to help us respond more efficiently.
              </p>

              {/* Form Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="name" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.75)' }}>
                    Name <span style={{ color: '#ffffff' }}>*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    style={{
                      background: '#000000',
                      border: errors.name ? '1px solid #ff4d4d' : '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      color: '#fff',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-main)',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => {
                      if (!errors.name) e.currentTarget.style.borderColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      if (!errors.name) e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    }}
                  />
                  {errors.name && <span style={{ color: '#ff4d4d', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{errors.name}</span>}
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.75)' }}>
                    Email <span style={{ color: '#ffffff' }}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    style={{
                      background: '#000000',
                      border: errors.email ? '1px solid #ff4d4d' : '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      color: '#fff',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-main)',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => {
                      if (!errors.email) e.currentTarget.style.borderColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      if (!errors.email) e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    }}
                  />
                  {errors.email && <span style={{ color: '#ff4d4d', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{errors.email}</span>}
                </div>
              </div>

              {/* Organization */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                <label htmlFor="organization" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.75)' }}>
                  Organization / Company <span style={{ color: 'rgba(255, 255, 255, 0.35)', fontSize: '0.7rem' }}>(Optional)</span>
                </label>
                <input
                  id="organization"
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your company name"
                  style={{
                    background: '#000000',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: '#fff',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-main)',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#ffffff')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                />
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2.5rem' }}>
                <label htmlFor="message" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.75)' }}>
                  Message / Project Enquiry <span style={{ color: '#ffffff' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your project or platform inquiry..."
                  rows={6}
                  style={{
                    background: '#000000',
                    border: errors.message ? '1px solid #ff4d4d' : '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    padding: '1rem',
                    color: '#fff',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-main)',
                    resize: 'vertical',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => {
                    if (!errors.message) e.currentTarget.style.borderColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    if (!errors.message) e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                />
                {errors.message && <span style={{ color: '#ff4d4d', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{errors.message}</span>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: isSubmitting ? 'rgba(255, 255, 255, 0.1)' : '#ffffff',
                  color: isSubmitting ? 'rgba(255, 255, 255, 0.5)' : '#000000',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '1rem 2rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s ease',
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = '#e6e6e6';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = '#ffffff';
                  }
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Contact;


