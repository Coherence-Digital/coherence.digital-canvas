import { Link } from 'react-router';
import SeoHead from '../components/SeoHead.jsx';
import { CASE_STUDIES } from '../data/caseStudies.js';
import styles from './CaseStudiesIndex.module.css';
import { SITE } from '../data/siteData.js';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://${SITE.domain}/case-studies`,
    name: 'Case Studies',
    description: 'Explore how Coherence has helped organisations like Bayer, National Grid, British Business Bank, and Marriott transform their digital presence.',
    url: `https://${SITE.domain}/case-studies`,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: `https://${SITE.domain}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `https://${SITE.domain}/case-studies` },
    ],
  },
];

export default function CaseStudiesIndex() {
  return (
    <>
      <SeoHead
        title="Case Studies"
        description="Explore how Coherence has helped organisations like Bayer, National Grid, British Business Bank, and Marriott transform their digital presence."
        path="/case-studies"
      
        jsonLd={jsonLd}
      />

      <section className={styles.hero}>
        <div className="container">
          <span className="label label--pink reveal">Our Work</span>
          <h1 className="reveal">Case Studies</h1>
          <p className={`${styles.heroSub} reveal`}>
            Real results for real organisations. See how we help clients simplify complexity and unlock potential.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {CASE_STUDIES.map(cs => (
              <Link
                key={cs.slug}
                to={`/case-studies/${cs.slug}`}
                className={`${styles.card} reveal`}
                aria-label={`Read case study: ${cs.title}`}
              >
                <div className={styles.cardImage}>
                  <img src={cs.thumbnail} alt={cs.title} loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.tags}>
                    {cs.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <h2 className={styles.cardTitle}>{cs.title}</h2>
                  <p className={styles.cardIntro}>{cs.intro}</p>
                  <span className={styles.readMore}>Read case study &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
