import { SITE } from '../data/siteData.js';
import { Link } from 'react-router';
import styles from './GuestPage.module.css';

const CAL_USERNAME = 'julian-tedstone';
const CAL_EVENT_SLUG = '25min';

const RECENT_GUESTS = [
  { name: 'Scott Brinker', role: 'VP Platform Ecosystem, HubSpot', youtube: 'H_r4geJXuAc', slug: 'scott-brinker-ai-agents-aeo' },
  { name: 'Tony Byrne', role: 'Founder, Real Story Group', youtube: 'fGOpP-EXYqM', slug: 'composability-consolidation-cms' },
  { name: 'Filip Bech-Larsen', role: 'CTO, Umbraco', youtube: 'vlLzx4yxq3k', slug: 'composable-complexity-umbraco-filip-bech-larsen' },
];

export default function GuestPage() {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <title>Guest on Digital Transformation Survivors | {SITE.name}</title>
      <meta name="description" content="Be a guest on the Digital Transformation Survivors podcast. Share your digital transformation story with our audience." />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.fallingQuotes} aria-hidden="true">
          <span className={styles.fq} style={{ '--fq-x': '5%', '--fq-delay': '-18s', '--fq-duration': '42s', '--fq-size': '3.5rem', '--fq-alpha': '0.1' }}>&ldquo;Freedom in a box.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '60%', '--fq-delay': '-32s', '--fq-duration': '48s', '--fq-size': '3rem', '--fq-alpha': '0.08' }}>&ldquo;Until they do.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '25%', '--fq-delay': '-8s', '--fq-duration': '50s', '--fq-size': '4rem', '--fq-alpha': '0.07' }}>&ldquo;A closed shop.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '75%', '--fq-delay': '-22s', '--fq-duration': '34s', '--fq-size': '1.8rem', '--fq-alpha': '0.16' }}>&ldquo;Simplify, standardize, and share.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '12%', '--fq-delay': '-28s', '--fq-duration': '38s', '--fq-size': '2rem', '--fq-alpha': '0.12' }}>&ldquo;My AI is talking to your AI.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '88%', '--fq-delay': '-12s', '--fq-duration': '24s', '--fq-size': '0.9rem', '--fq-alpha': '0.25' }}>&ldquo;It cannot be replaced by a single prompt.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '42%', '--fq-delay': '-6s', '--fq-duration': '26s', '--fq-size': '0.85rem', '--fq-alpha': '0.22' }}>&ldquo;The change just bounces off like a beach ball.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '50%', '--fq-delay': '-4s', '--fq-duration': '11s', '--fq-size': '0.4rem', '--fq-alpha': '0.18' }}>&ldquo;Read the goddamn thing.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '92%', '--fq-delay': '-7s', '--fq-duration': '13s', '--fq-size': '0.38rem', '--fq-alpha': '0.15' }}>&ldquo;Beach ball.&rdquo;</span>
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <img
            src="/coh/content/dts-jules-podcast.png"
            alt="Julian Tedstone - Digital Transformation Survivors"
            className={styles.heroBadge}
          />
          <h1 className={styles.heroTitle}>
            Guest on the show
          </h1>
          <p className={styles.heroSub}>
            Digital Transformation Survivors is a podcast about the real human side of
            technology change - the decisions, setbacks, and breakthroughs that define
            successful digital programmes.
          </p>
          <p className={styles.heroSub}>
            We're looking for practitioners, leaders, and specialists who have navigated
            complex transformations and want to share what they've learned - the highs,
            the lows, the funny and the - well - survivable!
          </p>
          <a href="#expect" className="btn btn--white">
            Learn more &darr;
          </a>
        </div>
      </section>

      {/* ── What to expect ─────────────────────────────────── */}
      <section id="expect" className={`section ${styles.expectSection}`}>
        <div className={`container ${styles.expectInner}`}>
          <span className="label label--pink">What to expect</span>
          <h2>A relaxed conversation, not an interview</h2>
          <div className={styles.expectGrid}>
            <div className={styles.expectCard}>
              <strong>25 minutes</strong>
              <p>Episodes are concise and focused. We respect your time and your audience's attention. That said, if there's time to chat we love to hear more.</p>
            </div>
            <div className={styles.expectCard}>
              <strong>Your story, your way</strong>
              <p>No scripts, no gotchas. We'll agree on a few themes in advance and let the conversation flow naturally.</p>
            </div>
            <div className={styles.expectCard}>
              <strong>Professional production</strong>
              <p>Recorded remotely via Riverside. Our production team handles editing, show notes, and distribution.</p>
            </div>
            <div className={styles.expectCard}>
              <strong>Multi-platform reach</strong>
              <p>Published on YouTube, Spotify, Apple Podcasts, and promoted across LinkedIn and our network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Recent guests ──────────────────────────────────── */}
      <section className={`section section--grey ${styles.guestsSection}`}>
        <div className="container">
          <span className="label label--pink">Recent guests</span>
          <h2 style={{ marginBottom: '32px' }}>You'd be in good company</h2>
          <div className={styles.guestGrid}>
            {RECENT_GUESTS.map(guest => (
              <div key={guest.slug} className={styles.guestCard}>
                <img
                  src={`https://i.ytimg.com/vi/${guest.youtube}/hqdefault.jpg`}
                  alt={guest.name}
                  className={styles.guestThumb}
                  loading="lazy"
                />
                <div className={styles.guestInfo}>
                  <strong>{guest.name}</strong>
                  <span>{guest.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Topics we cover ────────────────────────────────── */}
      <section className={`section ${styles.topicsSection}`}>
        <div className={`container ${styles.topicsInner}`}>
          <span className="label label--pink">Conversations our audience cares about</span>
          <h2>Technology, tactics, and human nature</h2>
          <p className={styles.topicsIntro}>
            Our guests talk about technology, tactics, and human nature. They have run either
            significant platform transformations, challenging business transformations, crisis
            communications, or plain simple cool stuff on the web. Here are some examples:
          </p>
          <ul className={styles.topicsList}>
            <li>Enterprise CMS and platform consolidation</li>
            <li>AI and agentic automation in regulated industries</li>
            <li>Digital strategy in government, financial services, healthcare, and energy</li>
            <li>Composable architecture and martech transformation</li>
            <li>Product leadership and organisational change</li>
            <li>The ethics and philosophy of technology</li>
            <li>Stakeholder management and transformation leadership</li>
          </ul>
          <p className={styles.topicsCta}>
            If this is interesting, let us suggest some times for you and Jules to speak.
            Or, if you prefer, <a href="#book">make your own choice below</a>.
          </p>
        </div>
      </section>

      {/* ── Book a conversation ────────────────────────────── */}
      <section id="book" className={`section ${styles.bookSection}`}>
        <div className={`container ${styles.bookInner}`}>
          <span className="label label--pink">Let's talk</span>
          <h2>Book a conversation</h2>
          <p>
            Start with a 25-minute introductory call with Julian Tedstone, the show's host
            and Strategy Director at Coherence. No commitment - just a conversation about
            whether there's a fit.
          </p>
          <div className={styles.calEmbed} style={{ minHeight: '600px', width: '100%' }}>
            <iframe
              src={`https://app.cal.com/${CAL_USERNAME}/${CAL_EVENT_SLUG}?layout=month_view&embed=true&theme=light`}
              style={{ width: '100%', height: '100%', minHeight: '600px', border: 'none' }}
              title="Book a conversation with Julian"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── About Coherence (light) ────────────────────────── */}
      <section className={`section ${styles.aboutSection}`}>
        <div className={`container ${styles.aboutInner}`}>
          <img
            src="/coh/content/dts-badge.png"
            alt="Digital Transformation Survivors"
            className={styles.aboutBadge}
          />
          <div>
            <h3>About Coherence</h3>
            <p>
              Coherence helps organisations in regulated industries unlock the full potential
              of marketing technology. We pair human expertise with agentic intelligence to
              deliver digital programmes that actually land.
            </p>
            <Link to="/company" className={styles.aboutLink}>
              Learn more about Coherence &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
