import { useParams, Link, Navigate } from 'react-router';
import SeoHead from '../components/SeoHead.jsx';
import { getArticle, ARTICLES } from '../data/contentData.js';
import styles from './ArticleDetail.module.css';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) return <Navigate to="/content" replace />;

  const idx = ARTICLES.findIndex(a => a.slug === slug);
  const next = ARTICLES[(idx + 1) % ARTICLES.length];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    author: { '@type': 'Person', name: article.author },
    datePublished: article.date,
    publisher: { '@type': 'Organization', name: 'Coherence' },
    image: article.image,
    description: article.intro,
  };

  return (
    <>
      <SeoHead
        title={article.title}
        description={article.intro}
        path={`/content/articles/${article.slug}`}
        image={article.image}
        type="article"
        jsonLd={jsonLd}
      />

      {/* ── Hero ──────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <Link to="/content" className={styles.back}>&larr; All content</Link>
          <div className={styles.meta}>
            <span className={styles.typeBadge}>Article</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span className={styles.author}>{article.author}</span>
          </div>
          <h1 className="reveal">{article.title}</h1>
        </div>
      </section>

      {/* ── Hero image ────────────────────────────── */}
      <div className={`container ${styles.heroImageWrap}`}>
        <img src={article.image} alt={article.title} className={`${styles.heroImage} reveal`} />
      </div>

      {/* ── Intro ─────────────────────────────────── */}
      <section className="section">
        <div className={`container ${styles.prose}`}>
          <p className={`${styles.intro} reveal`}>{article.intro}</p>
        </div>
      </section>

      {/* ── Body sections ─────────────────────────── */}
      {article.sections && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className={`container ${styles.prose}`}>
            {article.sections.map(section => (
              <div key={section.heading} className={`${styles.bodySection} reveal`}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Next article ──────────────────────────── */}
      <section className={`section ${styles.nextArticle}`}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="label">Next article</span>
          <h3>
            <Link to={`/content/articles/${next.slug}`}>
              {next.title} &rarr;
            </Link>
          </h3>
        </div>
      </section>
    </>
  );
}
