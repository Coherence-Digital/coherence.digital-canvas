import SeoHead from '../components/SeoHead.jsx';
import styles from './ContentPage.module.css';
import { SITE } from '../data/siteData.js';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://${SITE.domain}/content/net-zero`,
    name: 'Net Zero Commitment',
    description: 'Coherence is committed to achieving net zero carbon emissions by 2030. Learn about our sustainability principles and actions.',
    url: `https://${SITE.domain}/content/net-zero`,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: `https://${SITE.domain}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Net Zero Commitment', item: `https://${SITE.domain}/content/net-zero` },
    ],
  },
];

export default function NetZeroPage() {
  return (
    <>
      <SeoHead
        title="Net Zero Commitment"
        description="Coherence is committed to achieving net zero carbon emissions by 2030. Learn about our sustainability principles and actions."
        path="/content/net-zero"
      
        jsonLd={jsonLd}
      />

      <section className={styles.hero}>
        <div className="container">
          <span className="label label--pink reveal">Sustainability</span>
          <h1 className="reveal">Our Net Zero Commitment</h1>
          <p className={`${styles.heroSub} reveal`}>
            We are committed to reducing our environmental impact and achieving net zero carbon emissions by 2030.
          </p>
        </div>
      </section>

      {/* ── Baseline & Target ─────────────────────────── */}
      <section className="section">
        <div className={`container ${styles.prose}`}>
          <div className="reveal">
            <h2>Where We Stand</h2>
            <p>
              Our measured carbon baseline is 23 tCO₂e, tracked and verified through Greenly, our carbon accounting partner. Our target is to reach net zero by 2030 through a structured reduction and offsetting programme.
            </p>
          </div>

          <div className={styles.statsRow + ' reveal'}>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>23</span>
              <span className={styles.statLabel}>tCO₂e baseline</span>
            </div>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>2030</span>
              <span className={styles.statLabel}>Net zero target</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Four Pillars ──────────────────────────────── */}
      <section className="section section--grey">
        <div className="container">
          <span className="label label--pink reveal">Framework</span>
          <h2 className="reveal" style={{ marginBottom: '32px' }}>Our Four Pillars</h2>
          <div className={`${styles.pillarGrid} grid grid--2`}>
            {[
              {
                title: 'Measure',
                text: 'Comprehensive carbon accounting across Scope 1, 2 and 3 emissions using Greenly, giving us a clear and verified picture of our footprint.',
              },
              {
                title: 'Reduce',
                text: 'Active reduction of emissions from operations, travel, digital infrastructure and supply chain through targeted initiatives and policy changes.',
              },
              {
                title: 'Offset',
                text: 'Residual emissions are offset through verified carbon removal projects, while we continue to drive absolute reductions year on year.',
              },
              {
                title: 'Advocate',
                text: 'We integrate sustainability into our technology recommendations, favouring energy-efficient infrastructure and optimised digital experiences.',
              },
            ].map((pillar) => (
              <div key={pillar.title} className={`${styles.pillarCard} reveal`}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commitments ───────────────────────────────── */}
      <section className="section">
        <div className={`container ${styles.prose}`}>
          <div className="reveal">
            <h2>Our Seven-Point Commitment</h2>
            <ol className={styles.commitmentList}>
              <li>Measure and publicly report our carbon footprint annually</li>
              <li>Reduce absolute emissions by at least 50% before 2030</li>
              <li>Prioritise renewable energy across all offices and infrastructure</li>
              <li>Minimise business travel and favour low-carbon alternatives</li>
              <li>Integrate sustainability criteria into procurement decisions</li>
              <li>Offset remaining emissions through verified carbon removal</li>
              <li>Support our clients in reducing their own digital carbon footprint</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
