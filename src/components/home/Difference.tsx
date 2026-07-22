import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'

interface DifferenceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Difference = () => {
  const [activeId, setActiveId] = useState<string>('01');

  const items: DifferenceItem[] = [
    {
      id: '1',
      title: 'NOT A DATA PROBLEM',
      description: "Most AI tools treat construction testing as a data problem. It isn't. It's a contextual judgment problem requiring multi-variable structural validation.",
      image: '/assets/images/img1.png',
    },
    {
      id: '2',
      title: 'CONTEXT IS EVERYTHING',
      description: "A reading of 32 means something completely different on a 30-year-old coastal building versus a freshly cast M25 column inland.",
      image: '/assets/images/img2.png',
    },
    {
      id: '3',
      title: 'VARIABLES REQUIRED',
      description: "Every variable is a required input. The system refuses to give you a result without the context that makes the result meaningful.",
      image: '/assets/images/img3.png',
    },
    {
      id: '4',
      title: 'EMBEDDED EXPERTISE',
      description: "That's not a software decision. That's a 30-year-structural-engineer decision, embedded directly into standard compliance workflows.",
      image: '/assets/images/img4.png',
    },
  ];

  return (
    <section id="difference" className="difference section-padding" style={{ background: '#f5f5f7', color: '#111111' }}>
      <div className="container">
        <h2
          className="section-title"
          style={{
            fontFamily: 'var(--font-adieu)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 0.9,
            color: '#111111',
            marginBottom: '4rem',
            textTransform: 'none',
          }}
        >
          Why Choose<br />OUANTUM
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {items.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                style={{
                  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                  paddingTop: '24px',
                  paddingBottom: '24px',
                  transition: 'background 0.3s ease',
                }}
              >
                {/* Header Row */}
                <button
                  onClick={() => setActiveId(isOpen ? '' : item.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.95rem',
                        color: 'rgba(0, 0, 0, 0.4)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item.id}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-adieu)',
                        fontSize: 'clamp(1.2rem, 2.8vw, 2.2rem)',
                        fontWeight: 400,
                        color: '#111111',
                        letterSpacing: '-0.01em',
                        margin: 0,
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: isOpen ? '#e5e5e7' : '#111111',
                      color: isOpen ? '#111111' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? (
                      <ArrowDown size={20} />
                    ) : (
                      <ArrowUpRight size={20} />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ paddingTop: '20px', paddingLeft: 'clamp(0px, 4vw, 54px)' }}>
                        <p
                          style={{
                            fontFamily: 'var(--font-main)',
                            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                            lineHeight: 1.6,
                            color: 'rgba(0, 0, 0, 0.65)',
                            maxWidth: '720px',
                            marginBottom: '32px',
                          }}
                        >
                          {item.description}
                        </p>

                        <div
                          style={{
                            width: '100%',
                            maxHeight: '480px',
                            borderRadius: '28px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                          }}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              maxHeight: '480px',
                              objectFit: 'cover',
                              display: 'block',
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)' }} />
        </div>
      </div>
    </section>
  );
};

export default Difference;


