import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/common/ScrollReveal';

const PlatformIntro: React.FC = () => {
  return (
    <section id="platform-intro" style={{ background: '#000000', padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">
            What is OUANTUM?
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <ScrollReveal
            baseOpacity={0.08}
            style={{
              fontFamily: 'var(--font-main)',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: 1.85,
              color: 'rgba(255,255,255,0.75)',
              fontWeight: 400,
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            OUANTUM is an AI-assisted quality assurance platform developed for the civil infrastructure sector. It supports engineers, consultants, infrastructure organisations, and government agencies by simplifying inspection workflows, structural assessments, quality monitoring, and standards-based reporting. The platform helps teams collect field information, review project quality, and generate structured reports from a single system.
          </ScrollReveal>
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
            <Link
              to="/about"
              style={{
                fontFamily: 'var(--font-adieu)',
                fontSize: '0.78rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: '#ffffff',
                textDecoration: 'underline',
                transition: 'opacity 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
                onMouseOver={(e) => { e.currentTarget.style.opacity = '0.8'; }}
                onMouseOut={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                Learn More About OUANTUM <span style={{ fontSize: '1rem' }}>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
};

export default PlatformIntro;


