import { Link } from 'react-router';
import SeoHead from '../components/SeoHead.jsx';
import DtsPromoBanner from '../components/DtsPromoBanner.jsx';
import { DISCIPLINES, PIPELINES, TECH_PARTNERS, ACCREDITATIONS } from '../data/siteData.js';
import styles from './CapabilitiesPage.module.css';

/* ── 5C SVG icons — dramatic, oversized line art ──────── */
const ICONS = {
  consulting: (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="36" r="18" stroke="currentColor" strokeWidth="3" />
      <path d="M18 100c0-17.673 14.327-32 32-32s32 14.327 32 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M80 24l16-16m0 0h-12m12 0v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="36" r="6" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  ),
  concept: (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M60 8a34 34 0 0 1 20 61.5V80a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4v-10.5A34 34 0 0 1 60 8z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M44 92h32M48 100h24M52 108h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="42" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path d="M60 34v-8M52 42h-8M68 42h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M36 30L8 60l28 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M84 30l28 30-28 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M72 12L48 108" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="60" r="4" fill="currentColor" opacity="0.2" />
    </svg>
  ),
  context: (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="10" width="100" height="100" rx="8" stroke="currentColor" strokeWidth="3" />
      <path d="M10 38h100M38 38v72" stroke="currentColor" strokeWidth="3" />
      <rect x="50" y="52" width="20" height="28" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <rect x="80" y="64" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <circle cx="82" cy="82" r="14" stroke="currentColor" strokeWidth="2.5" />
      <path d="M92 92l10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 20h6M28 20h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
  care: (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M60 108S12 78 12 42a24 24 0 0 1 48-6 24 24 0 0 1 48 6c0 36-48 66-48 66z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M42 54l12 12 24-24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 108S12 78 12 42a24 24 0 0 1 48-6 24 24 0 0 1 48 6c0 36-48 66-48 66z" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeDasharray="6 4" />
    </svg>
  ),
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: { '@type': 'Organization', name: 'Coherence' },
  name: 'Digital Transformation Services',
  description: 'Coherence combines human expertise with agentic intelligence to understand, design, build, measure and run digital platforms for regulated industries.',
  serviceType: 'Digital Consulting',
  areaServed: 'GB',
};

export default function CapabilitiesPage() {
  return (
    <>
      <SeoHead
        title="Capabilities"
        description="Coherence combines human expertise with agentic intelligence to understand, design, build, measure and run digital platforms for regulated industries."
        path="/capabilities"
        jsonLd={serviceJsonLd}
      />

      {/* ── Hero ────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className="label label--pink reveal">What we do</span>
          <h1 className="reveal">An operating system for your business.</h1>
          <p className={`${styles.heroSub} reveal`}>
            We combine human expertise with agentic intelligence &mdash; specialist AI agents and automated pipelines working alongside our team to run, improve and govern your digital platforms continuously.
          </p>
          <Link to="/contact" className="btn btn--pink reveal" style={{ marginTop: '24px' }}>Let us know how we can help you</Link>
        </div>
      </section>

      {/* ── 5C Disciplines ─────────────────────────── */}
      <section className="section">
        <div className="container">
          {DISCIPLINES.map((d, i) => (
            <div
              key={d.key}
              className={`${styles.discipline} ${i % 2 === 1 ? styles.disciplineReverse : ''} reveal`}
            >
              <div className={styles.disciplineText}>
                <span className={styles.disciplineSubtitle}>{d.subtitle}</span>
                <h2>{d.title}</h2>
                <p>{d.description}</p>
              </div>
              <div className={styles.disciplineIcon}>
                {ICONS[d.key]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Accreditations ────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.accreditHeader}>
            <span className="label label--pink reveal">Accreditations</span>
            <h2 className="reveal">Trusted &amp; certified</h2>
          </div>
          <ul className={styles.accreditGrid} role="list">
            {ACCREDITATIONS.map(a => (
              <li key={a.name} className={`${styles.accreditCard} reveal`}>
                <img src={a.image} alt={a.name} loading="lazy" />
                <span>{a.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Technology Partners ─────────────────────── */}
      <section className="section section--grey">
        <div className="container">
          <div className={styles.partnersHeader}>
            <span className="label label--pink reveal">Our Partners</span>
            <h2 className="reveal">Technology Partners</h2>
          </div>
          <div className={styles.partners}>
            {TECH_PARTNERS.map(p => (
              <div key={p.name} className={`${styles.partnerCard} reveal`}>
                <div className={`${styles.partnerLogo}${p.name === 'Drupal' ? ` ${styles.partnerLogoDrupal}` : ''}`}>
                  <img src={p.logo} alt={p.name} loading="lazy" />
                </div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coherence Pipelines ─────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.pipelinesHeader}>
            <span className="label label--pink reveal">Coherence Pipelines</span>
            <h2 className="reveal">Pipelines that power everything we do</h2>
            <p className={`${styles.pipelinesSub} reveal`}>
              Automated, transparent, continuous. Every pipeline combines AI agents with human oversight &mdash; so you get speed without sacrificing control.
            </p>
          </div>
          <div className={styles.pipelinesGrid}>
            {PIPELINES.map(p => (
              <div key={p.key} className={`${styles.pipelineCard} reveal`}>
                <h3 className={styles.pipelineTitle}>{p.title}</h3>
                <p className={styles.pipelineDesc}>{p.description}</p>
                <p className={styles.pipelineValue}>{p.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DTS Podcast ──────────────────────────────── */}
      <DtsPromoBanner />

      {/* ── CTA ────────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="reveal">Ready to make it make sense?</h2>
          <p className="reveal" style={{ margin: '16px auto 32px', maxWidth: '480px' }}>
            Let&rsquo;s discuss how we can help transform your digital presence.
          </p>
          <Link to="/contact" className="btn btn--pink reveal">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
