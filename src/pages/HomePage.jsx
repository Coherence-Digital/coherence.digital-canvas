import { Link } from 'react-router';
import SeoHead from '../components/SeoHead.jsx';
import HomeHero from '../components/HomeHero.jsx';
import CaseStudyHugeHero from '../components/CaseStudyHugeHero.jsx';
import DtsPromoBanner from '../components/DtsPromoBanner.jsx';
import { SITE, CLIENT_LOGOS } from '../data/siteData.js';
import { CASE_STUDIES } from '../data/caseStudies.js';
import styles from './HomePage.module.css';

const bayer = CASE_STUDIES.find(cs => cs.slug === 'bayer');
const bbb = CASE_STUDIES.find(cs => cs.slug === 'british-business-bank');
const ng = CASE_STUDIES.find(cs => cs.slug === 'national-grid');

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: 'https://coherence.digital',
  logo: 'https://coherence.digital/logo.png',
  contactPoint: { '@type': 'ContactPoint', telephone: SITE.phone, contactType: 'sales' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    postalCode: SITE.address.postcode,
    addressCountry: 'GB',
  },
  sameAs: [SITE.social.linkedin, SITE.social.youtube],
};

export default function HomePage() {
  return (
    <>
      <SeoHead
        description="Coherence helps organisations in regulated industries unlock the full potential of existing and emerging marketing technologies."
        path="/"
        jsonLd={orgJsonLd}
      />

      {/* ── Hero ────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <HomeHero />
        </div>
      </section>

      {/* ── Proof strip ──────────────────────────────── */}
      <section className={`section ${styles.proofStrip}`}>
        <div className="container">
          <div className={styles.proofGrid}>
            <div className={`${styles.proofCard} reveal`}>
              <span className={styles.proofStat}>460 sites</span>
              <span className={styles.proofLabel}>re-platformed to one design system for Bayer Consumer Health</span>
            </div>
            <div className={`${styles.proofCard} reveal`}>
              <span className={styles.proofStat}>4 CMSs to 1</span>
              <span className={styles.proofLabel}>National Grid consolidated onto a single governed platform</span>
            </div>
            <div className={`${styles.proofCard} reveal`}>
              <span className={styles.proofStat}>&pound;365m</span>
              <span className={styles.proofLabel}>Future Fund launched on time under strict confidentiality for British Business Bank</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BBB Huge Hero ────────────────────────────── */}
      <CaseStudyHugeHero
        label="Case Study"
        title="Future-proofing British business"
        subtitle="Empowering British Business Bank to empower small UK businesses"
        image="/coh/bbb-hero-bg.jpg"
        href={`/case-studies/${bbb.slug}`}
        cta="Find out more"
      />

      {/* ── How it works ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={`${styles.pillarsIntro} reveal`}>
            <h2>How it works</h2>
            <p>
              We pair human expertise with agentic intelligence. Specialist AI agents and automated pipelines work alongside our team, continuously. The result: faster decisions, better outcomes, and a digital presence that never stands still.
            </p>
          </div>
          <div className={styles.mechanismGrid}>
            <div className={`${styles.mechanismCard} reveal`}>
              <div className={styles.mechanismIcon}>
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M4 16h40" stroke="currentColor" strokeWidth="2.5" />
                  <rect x="10" y="22" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                  <rect x="26" y="22" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                  <circle cx="8" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
                  <circle cx="13" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
                </svg>
              </div>
              <h3>Pop-up Design Systems</h3>
              <p>We extract your brand into a portable design system. Deploy it to any CMS, any channel, in hours. Not months.</p>
              <Link to="/content/articles/your-website-rebuilt-in-days-not-months" className={styles.mechanismLink}>Read more &rarr;</Link>
            </div>
            <div className={`${styles.mechanismCard} reveal`}>
              <div className={styles.mechanismIcon}>
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6 24h8m20 0h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <rect x="14" y="14" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M24 20v8M20 24h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="6" cy="24" r="2" fill="currentColor" opacity="0.3" />
                  <circle cx="42" cy="24" r="2" fill="currentColor" opacity="0.3" />
                  <path d="M24 6v8M24 34v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="24" cy="6" r="2" fill="currentColor" opacity="0.3" />
                  <circle cx="24" cy="42" r="2" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
              <h3>Agent Pipelines</h3>
              <p>Five always-on pipelines monitor, patch, draft, route and measure. Continuously. Not project-to-project.</p>
              <Link to="/content/articles/what-happens-when-your-agents-talk-to-each-other" className={styles.mechanismLink}>Read more &rarr;</Link>
            </div>
            <div className={`${styles.mechanismCard} reveal`}>
              <div className={styles.mechanismIcon}>
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M24 6v12M24 30v12M6 24h12M30 24h12" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                  <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                  <circle cx="34" cy="34" r="3" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                </svg>
              </div>
              <h3>Context Layer</h3>
              <p>Every agent knows what every other agent knows. No silos. No repeated questions. Decisions are traceable.</p>
              <Link to="/content/articles/what-happens-when-your-agents-talk-to-each-other" className={styles.mechanismLink}>Read more &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bayer Stats ────────────────────────────── */}
      <section className="section section--dark">
        <div className="container">
          <div className={`${styles.statsHeader} reveal`}>
            <span className="label label--pink">Case Study</span>
            <h2>This is how we do it</h2>
            <p>
              Our work with Bayer Consumer Health is a typical example of helping regulated industry clients simplify complexity and reduce technical debt.
            </p>
          </div>

          <dl className={`${styles.statsGrid} reveal`}>
            {bayer.stats.map(stat => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.statsCta}>
            <Link to={`/case-studies/${bayer.slug}`} className="btn btn--white">Read the full Bayer case study</Link>
          </div>
        </div>
      </section>

      {/* ── Always On promo ─────────────────────────── */}
      <section className={`section ${styles.alwaysOn}`}>
        <div className="container">
          <div className={styles.alwaysOnInner}>
            <div className={`${styles.alwaysOnContent} reveal`}>
              <img
                src="/coh/partners/alwayson-logo.png"
                alt="Always On by Coherence"
                className={styles.alwaysOnLogo}
              />
              <h2>Your website is never finished</h2>
              <p>
                We run and continuously improve complex websites so they remain secure, performant and valuable to your organisation. Rather than periodic redesigns, Always On treats your website as a living digital platform &mdash; with continuous operational discipline, proactive optimisation and data-driven improvement.
              </p>
              <div className={styles.alwaysOnPillars}>
                <div className={styles.alwaysOnPillar}>
                  <strong>Run</strong>
                  <span>Proactive monitoring, security updates, performance and resilience management</span>
                </div>
                <div className={styles.alwaysOnPillar}>
                  <strong>Improve</strong>
                  <span>Continuous optimisation of user journeys, accessibility, performance and outcomes</span>
                </div>
                <div className={styles.alwaysOnPillar}>
                  <strong>Govern</strong>
                  <span>Monthly reporting, backlog prioritisation and quarterly roadmap reviews</span>
                </div>
              </div>
              <Link to="/always-on" className="btn btn--pink">
                Discover Always On &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DTS Podcast ──────────────────────────────── */}
      <DtsPromoBanner />

      {/* ── National Grid ──────────────────────────── */}
      <section className={`section ${styles.feature} ${styles.featureReverse}`}>
        <div className={`container ${styles.featureInner}`}>
          <div className={`${styles.featureText} reveal`}>
            <span className="label label--pink">Case Study</span>
            <h2>Plugged in to the winds of change</h2>
            <p>
              Transforming National Grid&rsquo;s Digital Foundation: A Complete Website Rebuild for Enhanced User Experience and Operational Efficiency.
            </p>
            {ng.quote && (
              <blockquote className={styles.quote}>
                <p>&ldquo;{ng.quote.text}&rdquo;</p>
                <cite>&mdash; {ng.quote.attribution}</cite>
              </blockquote>
            )}
            <Link to={`/case-studies/${ng.slug}`} className="btn btn--outline">Read case study</Link>
          </div>
          <div className={`${styles.featureImage} reveal`}>
            <img src={ng.heroImage} alt={ng.title} loading="lazy" />
          </div>
        </div>
      </section>

      {/* ── Client logos ───────────────────────────── */}
      <section className="section section--grey">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="label reveal">Clients include</span>
          <div className={`${styles.logos} reveal`}>
            {CLIENT_LOGOS.map(logo => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className={styles.clientLogo}
                loading="lazy"
              />
            ))}
          </div>
          <Link to="/case-studies" className="btn btn--outline reveal">View Case Studies</Link>
        </div>
      </section>

      {/* ── Contact CTA ────────────────────────────── */}
      <section className="section">
        <div className={`container ${styles.contactCta}`}>
          <h2 className="reveal">Contact Us</h2>
          <p className="reveal">
            Interested in working together? Fill out some info and we will be in touch shortly. We can&rsquo;t wait to hear from you!
          </p>
          <Link to="/contact" className="btn btn--pink reveal">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
