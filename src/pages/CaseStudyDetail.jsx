import { useParams, Link, Navigate } from 'react-router';
import SeoHead from '../components/SeoHead.jsx';
import { getCaseStudy, CASE_STUDIES } from '../data/caseStudies.js';
import styles from './CaseStudyDetail.module.css';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = getCaseStudy(slug);

  if (!cs) return <Navigate to="/case-studies" replace />;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: cs.title,
    author: { '@type': 'Person', name: cs.author },
    datePublished: cs.date,
    publisher: { '@type': 'Organization', name: 'Coherence' },
    image: cs.heroImage,
    description: cs.intro,
  };

  /* Find next / prev for navigation */
  const idx = CASE_STUDIES.findIndex(c => c.slug === slug);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

  return (
    <>
      <SeoHead
        title={cs.title}
        description={cs.intro}
        path={`/case-studies/${cs.slug}`}
        image={cs.heroImage}
        type="article"
        jsonLd={jsonLd}
      />

      {/* ── Hero ──────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <Link to="/case-studies" className={styles.back}>&larr; All case studies</Link>
          <div className={styles.tags}>
            {cs.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <h1 className="reveal">{cs.title}</h1>
          <p className={`${styles.client} reveal`}>{cs.client}</p>
        </div>
      </section>

      {/* ── Hero image ────────────────────────────── */}
      <div className={`container ${styles.heroImageWrap}`}>
        <img src={cs.heroImage} alt={cs.title} className={`${styles.heroImage} reveal`} />
      </div>

      {/* ── Vimeo video (if present) ────────────────── */}
      {cs.vimeoId && (
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className={`${styles.videoWrap} reveal`}>
              <iframe
                src={`https://player.vimeo.com/video/${cs.vimeoId}?h=0&title=0&byline=0&portrait=0`}
                className={styles.videoIframe}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={`${cs.title} case study video`}
              />
            </div>
          </div>
        </section>
      )}

      {/* ── Intro ─────────────────────────────────── */}
      <section className="section">
        <div className={`container ${styles.prose}`}>
          <p className={`${styles.intro} reveal`}>{cs.intro}</p>
        </div>
      </section>

      {/* ── Stats (if present) ────────────────────── */}
      {cs.stats && (
        <section className="section section--dark">
          <div className="container">
            <dl className={`${styles.statsGrid} reveal`}>
              {cs.stats.map(stat => (
                <div key={stat.label} className={styles.stat}>
                  <dd className={styles.statValue}>{stat.value}</dd>
                  <dt className={styles.statLabel}>{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ── Body sections ─────────────────────────── */}
      <section className="section">
        <div className={`container ${styles.prose}`}>
          {cs.sections.map(section => (
            <div key={section.heading} className={`${styles.bodySection} reveal`}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote (if present) ────────────────────── */}
      {cs.quote && (
        <section className="section section--grey">
          <div className="container">
            <blockquote className={`${styles.blockquote} reveal`}>
              <p>&ldquo;{cs.quote.text}&rdquo;</p>
              <cite>&mdash; {cs.quote.attribution}</cite>
            </blockquote>
          </div>
        </section>
      )}

      {/* ── Technologies ──────────────────────────── */}
      {cs.technologies && (
        <section className="section">
          <div className={`container ${styles.techRow}`}>
            <span className="label">Technologies</span>
            <div className={styles.techTags}>
              {cs.technologies.map(t => (
                <span key={t} className={styles.techTag}>{t}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA (if present) ──────────────────────── */}
      {cs.cta && (
        <section className="section section--dark">
          <div className="container" style={{ textAlign: 'center' }}>
            <Link to={cs.cta.url} className="btn btn--pink reveal">{cs.cta.text}</Link>
          </div>
        </section>
      )}

      {/* ── Next case study ────────────────────────── */}
      <section className={`section ${styles.nextStudy}`}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="label">Next case study</span>
          <h3><Link to={`/case-studies/${next.slug}`}>{next.title} &rarr;</Link></h3>
        </div>
      </section>
    </>
  );
}
