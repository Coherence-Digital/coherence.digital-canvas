import { Link } from 'react-router';
import SeoHead from '../components/SeoHead.jsx';
import DtsPromoBanner from '../components/DtsPromoBanner.jsx';
import { TEAM, SITE } from '../data/siteData.js';
import styles from './CompanyPage.module.css';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://${SITE.domain}/company`,
    name: 'Company',
    description: 'Meet the Coherence team. We bring together Strategy, Data, Experience Design, Creative, Marketing, Technology and Operations expertise.',
    url: `https://${SITE.domain}/company`,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: `https://${SITE.domain}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Company', item: `https://${SITE.domain}/company` },
    ],
  },
];

export default function CompanyPage() {
  return (
    <>
      <SeoHead
        title="Company"
        description="Meet the Coherence team. We bring together Strategy, Data, Experience Design, Creative, Marketing, Technology and Operations expertise."
        path="/company"
      
        jsonLd={jsonLd}
      />

      {/* ── Hero ──────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className="label label--pink reveal">About us</span>
          <h1 className="reveal">Our people. Your people.</h1>
          <p className={`${styles.heroSub} reveal`}>
            Coherence brings together expertise from Strategy, Data, Experience Design, Creative, Marketing, Technology and Operations to help clients realise their digital potential.
          </p>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="label label--pink reveal">Leadership</span>
          <h2 className="reveal" style={{ marginBottom: '48px' }}>Meet our team</h2>

          <div className={styles.teamGrid}>
            {TEAM.map(member => (
              <div key={member.name} className={`${styles.teamCard} reveal`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.teamAvatar}
                  loading="lazy"
                />
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.teamLink}
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    LinkedIn &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cohaesus Group ────────────────────────── */}
      <section className="section section--grey">
        <div className={`container ${styles.cohaesus}`}>
          <div className="reveal">
            <span className="label label--pink">Part of something bigger</span>
            <h2>Cohaesus Group</h2>
            <p>
              As a member of the multi-award-winning Cohaesus Group, Coherence has access to a vast network of specialist capabilities globally, spanning creativity, technology and marketing services.
            </p>
          </div>
        </div>
      </section>

      {/* ── DTS Podcast ────────────────────────────── */}
      <DtsPromoBanner />

      {/* ── CTA ───────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="reveal">Let&rsquo;s work together</h2>
          <p className="reveal" style={{ margin: '16px auto 32px', maxWidth: '480px' }}>
            We&rsquo;d love to hear about your challenges and see how we can help.
          </p>
          <Link to="/contact" className="btn btn--pink reveal">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
