import { useParams, Link, Navigate } from 'react-router';
import SeoHead from '../components/SeoHead.jsx';
import { getEpisode, getAllEpisodes } from '../data/contentData.js';
import styles from './PodcastDetail.module.css';
import { SITE } from '../data/siteData.js';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://${SITE.domain}/content/podcast/:slug`,
    name: 'Content > Podcast > :Slug',
    description: '',
    url: `https://${SITE.domain}/content/podcast/:slug`,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: `https://${SITE.domain}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Content > Podcast > :Slug', item: `https://${SITE.domain}/content/podcast/:slug` },
    ],
  },
];

export default function PodcastDetail() {
  const { slug } = useParams();
  const episode = getEpisode(slug);

  if (!episode) return <Navigate to="/content" replace />;

  const allEps = getAllEpisodes();
  const idx = allEps.findIndex(ep => ep.slug === slug);
  const next = allEps[(idx + 1) % allEps.length];

  const label = `S${episode.season} E${episode.episode}`;
  const thumbnail = `https://i.ytimg.com/vi/${episode.youtube}/hqdefault.jpg`;

  return (
    <>
      <SeoHead
        title={`${label}: ${episode.title}`}
        description={`Digital Transformation Survivors ${label} — ${episode.title}`}
        path={`/content/podcast/${episode.slug}`}
        image={thumbnail}
        type="article"
      
        jsonLd={jsonLd}
      />

      {/* ── Hero ──────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <Link to="/content" className={styles.back}>&larr; All content</Link>
          <div className={styles.meta}>
            <span className={styles.typeBadge}>Podcast</span>
            <span className={styles.episodeLabel}>{label}</span>
            <time dateTime={episode.date}>
              {new Date(episode.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>
          <h1 className="reveal">{episode.title}</h1>
          <p className={`${styles.seriesName} reveal`}>Digital Transformation Survivors</p>
        </div>
      </section>

      {/* ── YouTube embed ─────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.videoWrap}`}>
          <div className={`${styles.videoFrame} reveal`}>
            <iframe
              src={`https://www.youtube.com/embed/${episode.youtube}`}
              title={episode.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── Description ─────────────────────────────── */}
      {episode.description && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className={`container ${styles.videoWrap}`}>
            <p className={`${styles.description} reveal`}>{episode.description}</p>
          </div>
        </section>
      )}

      {/* ── Listen on ─────────────────────────────── */}
      <section className="section section--grey">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="reveal">Listen on your favourite platform</h2>
          <div className={`${styles.platformLinks} reveal`}>
            <a
              href={`https://www.youtube.com/watch?v=${episode.youtube}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              YouTube &rarr;
            </a>
            <a
              href="https://open.spotify.com/show/digitaltransformationsurvivors"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              Spotify &rarr;
            </a>
            <a
              href="https://podcasts.apple.com/gb/podcast/digital-transformation-survivors/id1795945558"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              Apple Podcasts &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── About the podcast ────────────────────── */}
      <section className={`section ${styles.aboutPodcast}`}>
        <div className="container">
          <div className={styles.aboutInner}>
            <div className={styles.aboutCopy}>
              <img
                src="/coh/content/dts-badge.png"
                alt="Digital Transformation Survivors"
                className={`${styles.aboutBadge} reveal`}
              />
              <h2 className="reveal">Meet the Digital Transformation Survivors</h2>
              <p className="reveal">
                Coherence&rsquo;s Strategy Director, Julian Tedstone, meets with icons, giants, legends and pioneers of digital transformation to elicit insights from their vast experience that you can apply to your own digital transformation journey.
              </p>
              <p className={`${styles.aboutCta} reveal`}>
                <Link to="/contact" className="btn btn--pink">
                  Interested in a guest spot? &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Next episode ──────────────────────────── */}
      <section className={`section ${styles.nextEpisode}`}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="label">Next episode</span>
          <h3>
            <Link to={`/content/podcast/${next.slug}`}>
              S{next.season} E{next.episode}: {next.title} &rarr;
            </Link>
          </h3>
        </div>
      </section>
    </>
  );
}
