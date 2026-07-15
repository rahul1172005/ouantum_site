import { motion } from 'framer-motion';
import ScrollReveal from '@/components/common/ScrollReveal';

const stats = [
  {
    value: '5–14',
    unit: 'DAYS',
    label: 'To complete one manual structural assessment',
    index: '01',
  },
  {
    value: '150–300',
    unit: 'DATA POINTS',
    label: 'Collected per bi-weekly site visit on a large project',
    index: '02',
  },
  {
    value: '40–60',
    unit: 'HRS',
    label: 'Senior engineer time writing reports per fortnight',
    index: '03',
  },
];

const words = [
  { text: "OUANTUM", bold: true },
  { text: "is", bold: false },
  { text: "capable", bold: false },
  { text: "of", bold: false },
  { text: "automating", bold: true },
  { text: "quality", bold: true },
  { text: "assurance", bold: true },
  { text: "and", bold: true },
  { text: "structural", bold: true },
  { text: "auditing", bold: true },
  { text: "for", bold: false },
  { text: "infrastructure", bold: false },
  { text: "projects", bold: false },
  { text: "at", bold: true },
  { text: "any", bold: true },
  { text: "scale,", bold: true },
  { text: "enabling", bold: false },
  { text: "rapid", bold: true },
  { text: "inspection,", bold: true },
  { text: "AI-powered", bold: true },
  { text: "analysis,", bold: true },
  { text: "and", bold: false },
  { text: "same-day", bold: true },
  { text: "compliance", bold: true },
  { text: "reporting", bold: true },
  { text: "across", bold: false },
  { text: "buildings,", bold: false },
  { text: "housing", bold: false },
  { text: "developments,", bold: false },
  { text: "bridges,", bold: false },
  { text: "industrial", bold: false },
  { text: "facilities,", bold: false },
  { text: "and", bold: false },
  { text: "public", bold: false },
  { text: "infrastructure.", bold: false },
];

const Problem = () => {
  return (
    <section id="problem" style={{ background: '#000000', padding: '120px 0' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block', margin: '0 auto' }}>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
              The Problem
            </h2>
            {/* ILLUSTRATION 05: Adjust scale, translate X, and translate Y statically */}
            <img
              src="/assets/images/ox1_avatar/5.png"
              alt="The Problem illustration"
              className="title-avatar-img"
              style={{
                position: 'absolute',
                zIndex: 2, // Layer above the title
                width: '120px',
                height: '120px',
                objectFit: 'contain',
                top: '-40px',
                left: '290px',
                transform: 'scale(3.1) translate(-138px, 15px)',
                pointerEvents: 'none', // Prevents mouse/click blockages
              }}
            />
          </div>
          <ScrollReveal
            baseOpacity={0.1}
            style={{
              fontFamily: 'var(--font-main)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '750px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            India's infrastructure QA runs on manual processes that don't scale.
          </ScrollReveal>
        </div>

        {/* Stat Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '20px',
          overflow: 'hidden',
          marginBottom: '4rem',
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                padding: 'clamp(1.5rem, 5vw, 3.5rem)',
                position: 'relative',
                backgroundColor: '#000000',
              }}
            >
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{
                  fontFamily: 'var(--font-adieu)',
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  fontWeight: 400,
                  lineHeight: 0.9,
                  color: '#fff',
                  display: 'block',
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontFamily: 'var(--font-adieu)',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  letterSpacing: '0.15em',
                  color: 'rgba(255, 255, 255, 0.4)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginTop: '0.5rem',
                }}>
                  {stat.unit}
                </span>
              </div>

              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {stat.label}
              </p>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'rgba(0, 0, 0, 0.06)',
              }} />
            </motion.div>
          ))}
        </div>

        {/* Anchor copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              lineHeight: 1.5,
              maxWidth: '750px',
            }}
          >
            {words.map((w, index) => (
              <span
                key={index}
                style={{
                  fontWeight: w.bold ? 700 : 400,
                  color: 'rgba(255, 255, 255, 0.55)',
                  transition: 'color 0.3s ease',
                  cursor: 'default',
                  display: 'inline-block',
                  marginRight: '0.28em',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)';
                }}
              >
                {w.text}
              </span>
            ))}
          </p>


        </motion.div>

      </div>
    </section>
  );
};

export default Problem;


