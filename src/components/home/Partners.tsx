import { motion } from 'framer-motion';
import { WordHover } from '../common/WordHover';

const partners = [
  {
    id: '01',
    role: 'DOMAIN PARTNER',
    name: 'AMITH CIVIL & ALLIED ENGINEERING (ACAES) PVT LTD',
    description: 'Providing the foundational 30-year civil engineering and structural auditing methodologies embedded within the platform\'s validation models.',
  },
  {
    id: '02',
    role: 'TRAINING & SUPPORT PARTNER',
    name: 'ZAPSTERS IT SOLUTIONS PVT LTD',
    description: 'Providing comprehensive user training, onboarding support, and technical implementation assistance to ensure seamless adoption of the OUANTUM platform on-site.',
  },
  {
    id: '03',
    role: 'TECHNOLOGY & CYBERSECURITY PARTNER',
    name: 'ETHERENCE IT SOLUTIONS',
    description: 'Engineering the multi-model AI consensus layer, deterministic calculation engine, scalable IT infrastructure, and robust cybersecurity protocols.',
  }
];

const Partners = () => {
  return (
    <section id="partners" style={{ background: '#000000', padding: '120px 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            color: 'rgba(255, 255, 255, 0.35)',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1.5rem',
          }}>
            INSTITUTIONAL TRUST
          </span>
          <div style={{ position: 'relative', display: 'inline-block', margin: '0 auto' }}>
            <h2 className="section-title" style={{ position: 'relative', zIndex: 1 }}>
              DOMAIN & TECHNOLOGY<br />PARTNERS
            </h2>
            {/* ILLUSTRATION 01: Adjust scale, translate X, and translate Y statically */}
            <img
              src="/assets/images/ox1_avatar/1.png"
              alt="Domain and Technology Partners illustration"
              className="title-avatar-img"
              style={{
                position: 'absolute',
                zIndex: 2,
                width: '120px',
                height: '120px',
                objectFit: 'contain',
                top: '-40px',
                left: '290px',
                transform: 'scale(3.2) translate(290px, 40px)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </motion.div>

        {/* Partners Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              className="animated-silver-bg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                padding: '3rem',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative',
                minHeight: '280px',
              }}
            >
              {/* Role label */}
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
              }}>
                {partner.role}
              </span>

              {/* Partner name — sized to always show in full */}
              <h3 style={{
                fontFamily: 'var(--font-adieu)',
                fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
                color: '#fff',
                lineHeight: 1.45,
                textTransform: 'uppercase',
                margin: 0,
              }}>
                {partner.name}
              </h3>

              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.4)',
                lineHeight: 1.7,
                letterSpacing: '0.03em',
                marginTop: 'auto',
              }}>
                <WordHover text={partner.description} />
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;


