import { useState } from 'react';
import { WordHover } from '@/components/common/WordHover';

const steps = [
  {
    num: '01',
    title: 'FIELD DATA IN',
    sub: 'MOBILE ENTRY · STRUCTURED INTAKE',
    description: 'Field engineer opens Ouantum on-site. Selects project → block → structural element. Enters test readings - rebound values, UPV transit times, carbonation depths - tied to the exact location.',
    detail: 'Works on 4G. No paper. No back-office transcription.',
    image: '/assets/images/c55952a9-3cc9-47ba-be6d-62e56e0cee61.png',
  },
  {
    num: '02',
    title: 'AI ANALYSIS',
    sub: 'IS CODE · MULTI-MODEL CONSENSUS',
    description: 'Deterministic calculations run instantly - SonReb correlation, carbonation service life, chloride diffusion. Three AI models independently validate against IS codes and structural context.',
    detail: (
      <>
        All three must agree.
        <br />
        Disagreement triggers expert review.
      </>
    ),
    image: '/assets/images/df6e20f2-a007-43fa-8723-8944b53f30b6.png',
  },
  {
    num: '03',
    title: 'REPORT OUT',
    sub: 'GOVERNMENT-FORMAT · SAME DAY',
    description: 'Full government-format PDF auto-generated. Element findings, IS code compliance status, condition grading, and recommendations. Ready for senior engineer review and digital sign-off within the hour.',
    detail: 'Amaravati format. TNHB format. ADB format. Auto-selected.',
    image: '/assets/images/47766f42-6372-4a45-8a66-6043acfde415.png',
  },
];

const FlipCard = ({ step }: { step: typeof steps[0] }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        perspective: '1200px',
        cursor: 'pointer',
        height: '520px',
      }}
    >
      {/* Card wrapper — rotates on flip */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          borderRadius: '20px',
        }}
      >
        {/* ── FRONT FACE ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '20px',
          }}
        >
          {/* Full image */}
          <img
            src={step.image}
            alt={step.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />

          {/* Bottom gradient overlay with title */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2rem 2rem 1.75rem',
              background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
            }}
          >

            <h3 style={{
              fontFamily: 'var(--font-adieu)',
              fontSize: '1.6rem',
              color: '#fff',
              margin: 0,
              letterSpacing: '0.02em',
            }}>
              {step.title}
            </h3>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.1em',
              marginTop: '0.4rem',
              display: 'block',
            }}>
              Click to reveal ↗
            </span>
          </div>
        </div>

        {/* ── BACK FACE ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: '#000000',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '20px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Back header */}
          <div>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.4)',
              display: 'block',
              marginBottom: '0.75rem',
            }}>
              {step.sub}
            </span>
            <h3 style={{
              fontFamily: 'var(--font-adieu)',
              fontSize: '1.5rem',
              color: '#fff',
              margin: '0 0 1.5rem 0',
              letterSpacing: '0.02em',
            }}>
              {step.title}
            </h3>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
              margin: 0,
            }}>
              <WordHover text={step.description} />
            </p>
          </div>

          {/* Back footer */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.6)',
              flex: 1,
              lineHeight: '1.4',
            }}>
              + <WordHover>{step.detail}</WordHover>
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.1em',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              marginTop: '0.15rem',
            }}>
              ↩ click to flip
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding" style={{ background: '#000' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.35)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem',
            }}>
              THE FLOW
            </span>
            <h2 style={{
              fontFamily: 'var(--font-adieu)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              lineHeight: 1,
              color: '#fff',
              margin: 0
            }}>
              HOW IT WORKS
            </h2>
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.05em',
          }}>
            Click any card to explore ↗
          </span>
        </div>

        {/* Flip Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {steps.map((step, i) => (
            <FlipCard key={i} step={step} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
