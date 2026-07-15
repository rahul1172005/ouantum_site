import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useSEO from '../hooks/useSEO';
import aiEngineerImages from '../data/aiEngineerImages';
import dataEngineerImages from '../data/dataEngineerImages';
import fullStackDeveloperImages from '../data/fullStackDeveloperImages';
import { CanvasMarquee } from '../components/CanvasMarquee';

const BASE_URL = 'https://ouantum.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OUANTUM',
  url: BASE_URL,
  sameAs: ['https://www.linkedin.com/company/ouantum/'],
  founders: [
    {
      '@type': 'Person',
      name: 'Balakumaran D',
      jobTitle: 'President',
      description: 'Built OUANTUM with a vision to transform manual QA into a single efficient workflow.',
    },
    {
      '@type': 'Person',
      name: 'Rahul',
      jobTitle: 'Chief Executive Officer',
      description: 'Leads commercial and strategic direction, shaping go-to-market across government infrastructure projects.',
    },
  ],
};

const team = [
  {
    role: 'PRESIDENT',
    name: 'Balakumaran D',
    image: '/assets/images/Balakumaran_CEO_Profile_Pic.png',
    initials: 'BD',
    bio: 'Balakumaran is the Founder & CEO of Cybercom and Etherence. He stands as the backbone of the entire AI systems at OUANTUM, shaping the core architectures and resolving complex technical issues that remain unsolved by others.\n\nHe leads the product engineering teams to ensure that all platforms maintain high standards of deterministic quality assurance and structural validation.\nReach him at +91 7695827158.',
  },
  {
    role: 'CHIEF EXECUTIVE OFFICER',
    name: 'Rahul',
    image: '/assets/images/rahul.jpeg',
    initials: 'RA',
    bio: 'Rahul is the CEO of OUANTUM and the one who had the initial idea of implementing AI in industrial domains. He leads the commercial and strategic direction of OUANTUM, shaping the go-to-market across the globe.\n\nHis focus is on delivering reliable same-day outcomes for every client.\nReach him at +91 861 080 5559.',
  },
  {
    role: 'CHIEF MARKETING OFFICER',
    name: 'Raghu',
    image: '/assets/images/raghu.png',
    initials: 'RG',
    bio: 'Raghu handles the legal framework and compliance structures that underpin OUANTUM\'s government-grade report generation. He also contributes to the AI pipeline — ensuring every automated output is legally defensible and technically sound.\n\nHis dual role bridges the gap between engineering precision and regulatory compliance.',
  },
  {
    role: 'CHIEF FINANCIAL OFFICER',
    name: 'Sabari Raja',
    image: '/assets/images/sabari.jpeg',
    initials: 'SR',
    bio: 'Sabari Raja is the Founder & CEO of Zapsters. Sabari is the frontline interface between OUANTUM and every civil engineering firm we serve. He qualifies projects, maps client pain to our capability stack, and ensures the right team is in the room before a single rupee changes hands.\n\nIf you are evaluating OUANTUM for your next project, Sabari is your first call.',
  },
];

const FOOTER_H = 88;

const TeamCard = ({ member, index }: { member: typeof team[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      onClick={() => setExpanded(e => !e)}
      className="about-team-card"
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-label={`${member.name}, ${member.role} — click to view biography`}
      onKeyDown={(e) => e.key === 'Enter' && setExpanded(v => !v)}
    >
      {/* ── PORTRAIT ── */}
      <div
        className="about-team-portrait"
        style={{ transform: expanded ? 'translateY(-100%)' : 'translateY(0)' }}
        aria-hidden="true"
      >
        {member.image && !imgError ? (
          <img
            src={member.image}
            alt={`${member.name}, ${member.role} at OUANTUM`}
            onError={() => setImgError(true)}
            className="about-team-portrait-img"
            loading="lazy"
          />
        ) : (
          <div className="about-team-initials-bg">
            <span className="about-team-initials">{member.initials}</span>
          </div>
        )}
        <div className="about-team-tap-hint">TAP</div>
      </div>

      {/* ── BIO PANEL ── */}
      <div
        className="about-team-bio-panel"
        style={{ transform: expanded ? 'translateY(0)' : 'translateY(100%)' }}
      >
        {/* LEFT — passport photo */}
        <div className="about-team-bio-photo-col">
          <div className="about-team-bio-thumb">
            {member.image && !imgError ? (
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="about-team-portrait-img"
                loading="lazy"
              />
            ) : (
              <div className="about-team-bio-thumb-placeholder">
                <span>{member.initials}</span>
              </div>
            )}
          </div>
          <p className="about-team-profile-label">PROFILE</p>
        </div>

        {/* RIGHT — bio text */}
        <div className="about-team-bio-text-col">
          <p className="about-team-bio-header">BIOGRAPHY</p>
          <div className="about-team-bio-paragraphs">
            {member.bio.split('\n\n').map((para, i) => (
              <p key={i} className="about-team-bio-para">{para}</p>
            ))}
          </div>
          <p className="about-team-tap-close">TAP TO CLOSE ↑</p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div className="about-team-footer" style={{ height: FOOTER_H }}>
        <p className="about-team-footer-role">{member.role}</p>
        <h3 className="about-team-footer-name">{member.name}</h3>
      </div>
    </motion.div>
  );
};

const EngineerSection = ({
  images,
  title,
  eyebrow,
}: {
  images: string[];
  title: string;
  eyebrow: string;
}) => {
  const marqueeImages = images.map((src, i) => ({ src, alt: `${title} ${i + 1}` }));

  return (
    <section className="about-engineers-section" aria-label={`${title} team`}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        className="about-team-eyebrow"
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="about-team-heading"
      >
        {title}
      </motion.h2>

      <div className="about-team-rule" aria-hidden="true" />

      <div className="about-eng-marquee-outer" aria-hidden="true">
        <CanvasMarquee
          images={marqueeImages}
          imageWidth={200}
          imageHeight={300}
          gap={16}
          speed={60}
          borderRadius={16}
        />
      </div>
    </section>
  );
};

const About: React.FC = () => {
  useSEO({
    title: 'About OUANTUM | Team, Mission & Partner Ecosystem',
    description:
      'Meet the core team behind OUANTUM — civil engineers, AI specialists, and structural auditors building deterministic quality assurance for India\'s critical infrastructure.',
    keywords:
      'OUANTUM team, Balakumaran D, about OUANTUM, civil engineering AI team, structural auditing company India, Etherence, Zapsters, Amith',
    canonicalPath: '/about',
    jsonLd: [organizationSchema],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="subpage-wrapper"
      style={{ background: '#000000', color: '#fff', minHeight: '100vh', paddingBottom: '80px' }}
    >
      {/* Hero */}
      <section
        className="hero"
        style={{ minHeight: '60vh', paddingTop: '120px' }}
        aria-label="About OUANTUM hero section"
      >
        <div className="container hero-content">
          <div className="section-split hero-main-layout">
            <motion.div className="sidebar-info hero-left">
              <div className="hero-labels">
                <span className="hero-tech-label">THE ORGANIZATION · ARCHIVE · INFRASTRUCTURE</span>
              </div>
              <p className="side-description hero-description">
                ARCHIVING THE MINDS BEHIND THE DETERMINISTIC INTELLIGENCE ENGINE.
              </p>
            </motion.div>
            <motion.div className="hero-right-content hero-right">
              <h1
                style={{
                  fontFamily: 'var(--font-adieu)',
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  lineHeight: 1.1,
                  marginBottom: '2rem',
                  textTransform: 'uppercase',
                }}
              >
                About<br />OUANTUM
              </h1>
            </motion.div>
          </div>
          <p className="hero-subtext" style={{ marginTop: '2rem' }}>
            OUANTUM is a technology company focused on improving quality assurance within the civil infrastructure sector. By combining engineering knowledge with artificial intelligence, the platform helps organisations simplify inspections, structural assessments, quality monitoring, and standards-based reporting through a unified digital solution.
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
            src="/assets/images/about-hero.jpg"
            alt="Civil infrastructure site — background image for OUANTUM About page"
            className="subpage-hero-image"
          />
          <div className="overlay-gradient" aria-hidden="true" />
        </motion.div>
      </section>

      {/* Content */}
      <div className="about-content-outer">
        <div className="about-content-stack">

          {/* OVERVIEW INTRO */}
          <section style={{ marginBottom: '80px' }} aria-label="OUANTUM Overview">
            <p style={{
              fontFamily: 'var(--font-main)',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: 1.85,
              color: 'rgba(255, 255, 255, 0.75)',
              margin: 0,
            }}>
              The organisation works to improve how infrastructure projects are inspected, monitored, and documented by providing practical digital tools that support engineering teams, consultants, contractors, and public sector organisations throughout the quality assurance process.
            </p>
          </section>

          {/* OUR EXPERTISE */}
          <section style={{ marginBottom: '80px' }} aria-label="Our Expertise">
            <h2 className="about-team-heading" style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-adieu)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', textTransform: 'uppercase' }}>Our Expertise</h2>
            <div className="about-team-rule" aria-hidden="true" />
            <p style={{
              fontFamily: 'var(--font-main)',
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0,
            }}>
              OUANTUM focuses on improving quality assurance processes within the civil infrastructure sector through practical digital technologies. The organisation's work centres on inspection workflows, structural assessments, quality monitoring, engineering documentation, and standards-based reporting, helping organisations manage quality assurance activities more efficiently and consistently. By combining engineering knowledge with digital solutions, OUANTUM aims to simplify complex quality assurance processes while supporting informed decision-making across infrastructure projects.
            </p>
          </section>

          {/* CORE CAPABILITIES */}
          <section style={{ marginBottom: '80px' }} aria-label="Core Capabilities">
            <h2 className="about-team-heading" style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-adieu)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', textTransform: 'uppercase' }}>Core Capabilities</h2>
            <div className="about-team-rule" aria-hidden="true" />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: '2.5rem',
            }}>
              {[
                {
                  title: 'NDT Analysis Engine',
                  desc: 'Calculates concrete compressive strength in real-time using rebound hammer and UPV readings.',
                  link: '/capabilities/ndt-analysis-engine',
                },
                {
                  title: 'IS Code Compliance',
                  desc: 'Automates structural compliance auditing against Indian standards (IS 456, IS 1786, IS 383).',
                  link: '/capabilities/is-code-compliance',
                },
                {
                  title: 'Multi-Model Consensus',
                  desc: 'Implements a triple-model AI consensus mechanism to verify compliance audits.',
                  link: '/capabilities/multi-model-consensus',
                },
                {
                  title: 'Service Life Prediction',
                  desc: 'Forecasts reinforcement corrosion rates and remaining structure life.',
                  link: '/capabilities/service-life-prediction',
                },
                {
                  title: 'On-Site Data Acquisition',
                  desc: 'Simplifies mobile-first field data logging and eliminates paper records on site.',
                  link: null,
                },
                {
                  title: 'Standards-Based Reporting',
                  desc: 'Generates structured, compliant reports for faster engineering approvals.',
                  link: null,
                },
              ].map((cap, i) => (
                <div
                  key={i}
                  className="animated-silver-bg"
                  style={{
                    padding: '2rem',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    background: '#070707',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-adieu)',
                      fontSize: '0.95rem',
                      color: '#ffffff',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      {cap.title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      color: 'rgba(255, 255, 255, 0.55)',
                      margin: 0,
                    }}>
                      {cap.desc}
                    </p>
                  </div>
                  {cap.link && (
                    <div style={{ marginTop: '1.5rem' }}>
                      <Link
                        to={cap.link}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: '#ffffff',
                          textDecoration: 'underline',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          fontWeight: 600,
                        }}
                      >
                        Explore Capability →
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* WHO WE SUPPORT */}
          <section style={{ marginBottom: '80px' }} aria-label="Who We Support">
            <h2 className="about-team-heading" style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-adieu)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', textTransform: 'uppercase' }}>Who We Support</h2>
            <div className="about-team-rule" aria-hidden="true" />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: '2.5rem',
            }}>
              {[
                {
                  title: 'Government Agencies',
                  desc: 'Enables public infrastructure owners and departments to automate compliance checks, secure independent quality audits, and maintain bulletproof records.',
                },
                {
                  title: 'Engineering Consultants',
                  desc: 'Accelerates field report reviews and auditing tasks, letting structural audit teams verify onsite tests and compile compliant reports in hours.',
                },
                {
                  title: 'Contractors & Project Teams',
                  desc: 'Helps quality engineers monitor concrete strength development, check aggregate grading instantly, and resolve deviations before they turn into costly rework.',
                },
              ].map((target, i) => (
                <div
                  key={i}
                  style={{
                    padding: '2rem',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    background: '#070707',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-adieu)',
                    fontSize: '0.95rem',
                    color: '#ffffff',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    {target.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-main)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.55)',
                    margin: 0,
                  }}>
                    {target.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* LEADERSHIP */}
          <section aria-label="Leadership team">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              className="about-team-eyebrow"
            >
              THE TEAM
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="about-team-heading"
            >
              Meet The Core Team
            </motion.h2>

            <div className="about-team-rule" aria-hidden="true" />

            <div className="about-team-grid">
              {team.map((member, i) => (
                <TeamCard key={i} member={member} index={i} />
              ))}
            </div>
          </section>

          {/* AI ENGINEERS MARQUEE */}
          <EngineerSection
            images={aiEngineerImages}
            title="AI Engineers"
            eyebrow="THE ENGINEERS"
          />

          {/* DATA ENGINEERS MARQUEE */}
          <EngineerSection
            images={dataEngineerImages}
            title="Data Engineers"
            eyebrow="THE ENGINEERS"
          />

          {/* FULL STACK DEVELOPERS MARQUEE */}
          <EngineerSection
            images={fullStackDeveloperImages}
            title="Full Stack Developers"
            eyebrow="THE DEVELOPERS"
          />

          {/* PARTNER ECOSYSTEM */}
          <section className="about-partners-section" aria-label="Partner ecosystem">
            <h2 className="about-partners-heading">
              PARTNER ECOSYSTEM
            </h2>
            <div className="about-partners-grid">
              {[
                { name: 'ETHERENCE', desc: 'TECHNOLOGY & CYBERSECURITY', url: 'https://etherence.com', label: 'etherence.com' },
                { name: 'ZAPSTERS', desc: 'TRAINING & SUPPORT', url: 'https://zapsters.in', label: 'zapsters.in' },
                { name: 'AMITH', desc: 'CIVIL & ALLIED ENGINEERING', url: 'https://amith.in.net', label: 'amith.in.net' },
              ].map(p => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-partner-link"
                  aria-label={`Visit ${p.name} — ${p.desc} partner of OUANTUM`}
                >
                  <div className="animated-silver-bg about-partner-card">
                    <h3 className="about-partner-name">{p.name}</h3>
                    <p className="about-partner-desc">{p.desc}</p>
                    <span className="about-partner-url">{p.label} ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default About;


