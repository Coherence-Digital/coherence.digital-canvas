import { Link } from 'react-router';
import SeoHead from '../components/SeoHead.jsx';
import { ARTICLES } from '../data/contentData.js';
import styles from './ContentPage.module.css';
import { SITE } from '../data/siteData.js';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://${SITE.domain}/content/articles`,
    name: 'Articles',
    description: 'Insights, analysis and thought leadership from the Coherence team on digital transformation, marketing technology and regulated industries.',
    url: `https://${SITE.domain}/content/articles`,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: `https://${SITE.domain}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `https://${SITE.domain}/content/articles` },
    ],
  },
];

export default function ArticlesPage() {
  return (
    <>
      <SeoHead
        title="Articles"
        description="Insights, analysis and thought leadership from the Coherence team on digital transformation, marketing technology and regulated industries."
        path="/content/articles"
      
        jsonLd={jsonLd}
      />

      <section className={styles.hero}>
        <div className="container">
          <span className="label label--pink reveal">Content</span>
          <h1 className="reveal">Articles</h1>
          <p className={`${styles.heroSub} reveal`}>
            Insights, analysis and thought leadership from the Coherence team on digital transformation, marketing technology and regulated industries.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.articleList}>
            {ARTICLES.map((article) => (
              <article key={article.slug} className={`${styles.articleCard} reveal`}>
                <div className={styles.articleMeta}>
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <span className={styles.articleAuthor}>{article.author}</span>
                </div>
                <h2 className={styles.articleTitle}>
                  <Link to={`/content/articles/${article.slug}`}>{article.title}</Link>
                </h2>
                <Link to={`/content/articles/${article.slug}`} className={styles.articleLink}>
                  Read article &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ──────────────────────────────── */}
      <section className="section section--grey">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="reveal">Stay in the loop</h2>
          <p className="reveal" style={{ margin: '16px auto 32px', maxWidth: '480px' }}>
            Follow us on LinkedIn for the latest articles, podcast episodes and insights from the Coherence team.
          </p>
          <a
            href="https://www.linkedin.com/company/coherencedigital/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--pink reveal"
          >
            Follow on LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
