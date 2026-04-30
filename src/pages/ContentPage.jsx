import { Link } from 'react-router';
import SeoHead from '../components/SeoHead.jsx';
import DtsPromoBanner from '../components/DtsPromoBanner.jsx';
import { getContentFeed } from '../data/contentData.js';
import styles from './ContentPage.module.css';
import { SITE } from '../data/siteData.js';

const TYPE_LABELS = {
  article: 'Article',
  podcast: 'Podcast',
  event: 'Event',
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://${SITE.domain}/content`,
    name: 'Content',
    description: 'Articles, podcast episodes and events from the Coherence team on digital transformation, marketing technology and regulated industries.',
    url: `https://${SITE.domain}/content`,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: `https://${SITE.domain}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Content', item: `https://${SITE.domain}/content` },
    ],
  },
];

export default function ContentPage() {
  const feed = getContentFeed();
  const midpoint = Math.ceil(feed.length / 2);
  const firstHalf = feed.slice(0, midpoint);
  const secondHalf = feed.slice(midpoint);

  return (
    <>
      <SeoHead
        title="Content"
        description="Articles, podcast episodes and events from the Coherence team on digital transformation, marketing technology and regulated industries."
        path="/content"

        jsonLd={jsonLd}
      />

      <section className={styles.hero}>
        <div className="container">
          <span className="label label--pink reveal">Insights</span>
          <h1 className="reveal">Content</h1>
          <p className={`${styles.heroSub} reveal`}>
            Articles, podcast episodes and events from the Coherence team on digital transformation, marketing technology and regulated industries.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.feedGrid}>
            {firstHalf.map((item, i) => (
              <FeedCard key={`${item.type}-${item.date}-${i}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      <DtsPromoBanner />

      <section className="section">
        <div className="container">
          <div className={styles.feedGrid}>
            {secondHalf.map((item, i) => (
              <FeedCard key={`${item.type}-${item.date}-${midpoint + i}`} item={item} />
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

function FeedCard({ item }) {
  const inner = (
    <>
      <div className={styles.feedImageWrap}>
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <div className={styles.feedBody}>
        <div className={styles.feedMeta}>
          <span className={styles.feedType} data-type={item.type}>{TYPE_LABELS[item.type]}</span>
          {item.label && <span className={styles.feedBadge}>{item.label}</span>}
          <time dateTime={item.date}>{formatDate(item.date)}</time>
        </div>
        <h2 className={styles.feedTitle}>{item.title}</h2>
        {item.author && <span className={styles.feedAuthor}>{item.author}</span>}
        {item.location && <span className={styles.feedLocation}>{item.location}</span>}
      </div>
    </>
  );

  if (item.type === 'article' && item.url) {
    return (
      <Link to={item.url} className={`${styles.feedCard} reveal`}>
        {inner}
      </Link>
    );
  }

  if (item.type === 'podcast' && item.url) {
    return (
      <Link to={item.url} className={`${styles.feedCard} reveal`}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={`${styles.feedCard} reveal`}>
      {inner}
    </div>
  );
}
