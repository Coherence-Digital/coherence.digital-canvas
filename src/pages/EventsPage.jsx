import SeoHead from '../components/SeoHead.jsx';
import { SITE } from '../data/siteData.js';
import { EVENTS } from '../data/contentData.js';
import styles from './ContentPage.module.css';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://${SITE.domain}/content/events`,
    name: 'Events',
    description: 'Upcoming events, conferences and speaking engagements from the Coherence team.',
    url: `https://${SITE.domain}/content/events`,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: `https://${SITE.domain}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Events', item: `https://${SITE.domain}/content/events` },
    ],
  },
];

export default function EventsPage() {
  return (
    <>
      <SeoHead
        title="Events"
        description="Upcoming events, conferences and speaking engagements from the Coherence team."
        path="/content/events"
      
        jsonLd={jsonLd}
      />

      <section className={styles.hero}>
        <div className="container">
          <span className="label label--pink reveal">Content</span>
          <h1 className="reveal">Events</h1>
          <p className={`${styles.heroSub} reveal`}>
            Conferences, speaking engagements and industry events where you can connect with the Coherence team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.eventGrid}>
            {EVENTS.map((event, i) => (
              <div key={i} className={`${styles.eventCard} reveal`}>
                <h2>{event.title}</h2>
                <div className={styles.eventMeta}>
                  <div className={styles.eventDetail}>
                    <strong>Date</strong>
                    <span>{event.dates}</span>
                  </div>
                  <div className={styles.eventDetail}>
                    <strong>Time</strong>
                    <span>{event.time}</span>
                  </div>
                  <div className={styles.eventDetail}>
                    <strong>Location</strong>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LinkedIn CTA ──────────────────────────────── */}
      <section className="section section--grey">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="reveal">Don&rsquo;t miss us</h2>
          <p className="reveal" style={{ margin: '16px auto 32px', maxWidth: '480px' }}>
            Follow us on LinkedIn for event announcements, recaps and industry insights.
          </p>
          <a
            href={SITE.social.linkedin}
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
