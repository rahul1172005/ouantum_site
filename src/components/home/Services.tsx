import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import { WordHover } from '@/components/common/WordHover';

const activityItems = [
  {
    id: '01',
    title: 'NON-DESTRUCTIVE TESTING ANALYSIS',
    category: 'NDT Analysis Engine',
    tags: ['SonReb Method', 'IS 13311', 'Strength Profiling'],
    description: 'Automates the processing of rebound hammer index numbers and Ultrasonic Pulse Velocity (UPV) values logged directly from the field. Runs SonReb correlation curves to calculate concrete compressive strength in real-time.',
    route: '/capabilities/ndt-analysis-engine'
  },
  {
    id: '02',
    title: 'IS CODE COMPLIANCE AUDITING',
    category: 'IS Code Compliance',
    tags: ['IS 456 Audits', 'IS 1786', 'IS 383 Grading'],
    description: 'Automates codal compliance checking for reinforced concrete and aggregate test readings. Instantly evaluates mix proportions (IS 456), reinforcement yield strength (IS 1786), and aggregate grading (IS 383).',
    route: '/capabilities/is-code-compliance'
  },
  {
    id: '03',
    title: 'MULTI-MODEL AI CONSENSUS',
    category: 'Consensus Engine',
    tags: ['Triple-Model Audit', 'Consensus Verification', 'Compliance Verdict'],
    description: 'Implements a multi-model AI consensus layer where three independent auditing algorithms evaluate structural readings. A compliance verdict is only signed off once all three models reach a unified consensus.',
    route: '/capabilities/multi-model-consensus'
  },
  {
    id: '04',
    title: 'SERVICE LIFE PREDICTION MODELING',
    category: 'Service Life Prediction',
    tags: ['Chloride Diffusion', 'Carbonation Rate', 'Tuutti Model'],
    description: 'Provides detailed quantitative forecasting of reinforcement corrosion progression rates. Combines chloride profiles and carbonation depth measurements to model concrete service life and estimate remaining lifespan.',
    route: '/capabilities/service-life-prediction'
  }
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="activities" className="section-padding services-section">
      <div className="container">

        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-header"
          style={{ position: 'relative' }}
        >
          <h2 className="section-title services-main-title" style={{ position: 'relative', zIndex: 1 }}>
            HOW OUANTUM<br />WORKS
          </h2>

          {/* ILLUSTRATION 04: Adjust scale, translate X, and translate Y statically */}
          <img
            src="/assets/images/ox1_avatar/4.png"
            alt="How OUANTUM works illustration"
            style={{
              position: 'absolute',
              zIndex: 2, // Layer above the title
              width: '180px',
              height: '180px',
              objectFit: 'contain',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(2.05) translate(280px, 38px)', // Centering + customizable offset
              pointerEvents: 'none', // Prevents mouse/click blockages
            }}
          />

          <p className="section-subtitle">
            <WordHover text="Our domain-specific AI platform automates quality assurance workflows, compressing weeks of manual analysis into a single working day." />
          </p>
        </motion.div>

        {/* Full-width 2×2 Card Grid */}
        <div className="services-grid">
          {activityItems.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => navigate(item.route)}
                className="service-card animated-silver-bg"
                style={{ cursor: 'pointer' }}
              >
                <div>
                  {/* ID number placeholder */}
                  <div className="service-card-id"></div>
                  <div>
                    <h3 className="service-card-title">
                      {item.title}
                    </h3>
                    <p className="service-card-description">
                      <WordHover text={item.description} />
                    </p>
                    <Link
                      to={item.route}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        color: 'inherit',
                        textDecoration: 'underline',
                        marginTop: '1.5rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        textTransform: 'uppercase',
                        transition: 'opacity 0.2s',
                      }}
                      className="read-more-link"
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                      EXPLORE {item.category} <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Footer: tags + arrow */}
                <div className="service-card-footer">
                  <div className="service-tags">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tag-item">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="service-arrow-wrapper">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
