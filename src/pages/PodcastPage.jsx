import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import SeoHead from '../components/SeoHead.jsx';
import { SITE, CLIENT_LOGOS } from '../data/siteData.js';
import { PODCAST_EPISODES, getAllEpisodes } from '../data/contentData.js';
import styles from './PodcastPage.module.css';

const FEATURED_GUESTS = [
  {
    name: 'Scott Brinker',
    role: 'VP Platform Ecosystem, HubSpot',
    youtube: 'H_r4geJXuAc',
    slug: 'scott-brinker-ai-agents-aeo',
  },
  {
    name: 'Tony Byrne',
    role: 'Founder, Real Story Group',
    youtube: 'fGOpP-EXYqM',
    slug: 'composability-consolidation-cms',
  },
  {
    name: 'Filip Bech-Larsen',
    role: 'CTO, Umbraco',
    youtube: 'vlLzx4yxq3k',
    slug: 'composable-complexity-umbraco-filip-bech-larsen',
  },
];

const CAL_USERNAME = 'julian-tedstone';
const CAL_EVENT_SLUG = '25min';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://${SITE.domain}/content/podcast`,
    name: 'Digital Transformation Survivors - Podcast by Coherence',
    description: 'Real conversations about the challenges, triumphs and hard lessons of digital transformation in regulated industries. Hosted by Julian Tedstone.',
    url: `https://${SITE.domain}/content/podcast`,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: `https://${SITE.domain}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'PodcastSeries',
    name: 'Digital Transformation Survivors',
    description: 'Real conversations about the challenges, triumphs and hard lessons of digital transformation in regulated industries.',
    url: `https://${SITE.domain}/content/podcast`,
    author: { '@type': 'Person', name: 'Julian Tedstone' },
    publisher: { '@type': 'Organization', name: 'Coherence' },
  },
];

export default function PodcastPage() {
  const allEpisodes = getAllEpisodes();
  const crewRef = useRef(null);

  useEffect(() => {
    const el = crewRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add(styles.crewBarVisible); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <SeoHead
        title="Digital Transformation Survivors - Podcast"
        description="Real conversations about the challenges, triumphs and hard lessons of digital transformation in regulated industries. Hosted by Julian Tedstone, Strategy Director at Coherence."
        path="/content/podcast"
        jsonLd={jsonLd}
      />

      {/* ── Takeover Hero ────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.fallingQuotes} aria-hidden="true">
          {/* ── Giant / slow - foreground depth ──────────────── */}
          <span className={styles.fq} style={{ '--fq-x': '2%', '--fq-delay': '-20s', '--fq-duration': '45s', '--fq-size': '4rem', '--fq-alpha': '0.12' }}>&ldquo;Freedom in a box.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '55%', '--fq-delay': '-35s', '--fq-duration': '50s', '--fq-size': '3.5rem', '--fq-alpha': '0.1' }}>&ldquo;Until they do.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '30%', '--fq-delay': '-10s', '--fq-duration': '55s', '--fq-size': '5rem', '--fq-alpha': '0.08' }}>&ldquo;A closed shop.&rdquo;</span>

          {/* ── Large / steady ──────────────────────────────── */}
          <span className={styles.fq} style={{ '--fq-x': '70%', '--fq-delay': '-25s', '--fq-duration': '36s', '--fq-size': '2rem', '--fq-alpha': '0.18' }}>&ldquo;Simplify, standardize, and share.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '10%', '--fq-delay': '-30s', '--fq-duration': '40s', '--fq-size': '2.4rem', '--fq-alpha': '0.14' }}>&ldquo;My AI is talking to your AI.&rdquo;</span>

          {/* ── Medium ──────────────────────────────────────── */}
          <span className={styles.fq} style={{ '--fq-x': '85%', '--fq-delay': '-15s', '--fq-duration': '26s', '--fq-size': '1rem', '--fq-alpha': '0.28' }}>&ldquo;It cannot be replaced by a single prompt.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '40%', '--fq-delay': '-8s', '--fq-duration': '28s', '--fq-size': '0.9rem', '--fq-alpha': '0.25' }}>&ldquo;You&rsquo;re in the transformation yourself.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '22%', '--fq-delay': '-18s', '--fq-duration': '24s', '--fq-size': '1.1rem', '--fq-alpha': '0.3' }}>&ldquo;The change just bounces off like a beach ball.&rdquo;</span>

          {/* ── Small / fast - background depth ─────────────── */}
          <span className={styles.fq} style={{ '--fq-x': '92%', '--fq-delay': '-5s', '--fq-duration': '12s', '--fq-size': '0.45rem', '--fq-alpha': '0.2' }}>&ldquo;When do the humans actually do the work?&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '50%', '--fq-delay': '-7s', '--fq-duration': '10s', '--fq-size': '0.38rem', '--fq-alpha': '0.16' }}>&ldquo;Read the goddamn thing.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '15%', '--fq-delay': '-3s', '--fq-duration': '11s', '--fq-size': '0.4rem', '--fq-alpha': '0.18' }}>&ldquo;Philosophers don&rsquo;t matter.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '78%', '--fq-delay': '-9s', '--fq-duration': '13s', '--fq-size': '0.42rem', '--fq-alpha': '0.15' }}>&ldquo;A single prompt.&rdquo;</span>
          <span className={styles.fq} style={{ '--fq-x': '35%', '--fq-delay': '-4s', '--fq-duration': '9s', '--fq-size': '0.35rem', '--fq-alpha': '0.2' }}>&ldquo;Beach ball.&rdquo;</span>
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <img
            src="/coh/content/dts-jules-podcast.png"
            alt="Julian Tedstone - Digital Transformation Survivors"
            className={styles.heroBadge}
          />
          <h1 className={`${styles.heroTitle} reveal`}>
            Digital Transformation Survivors
          </h1>
          <p className={`${styles.heroSub} reveal`}>
            Real conversations with the practitioners, leaders and specialists who have navigated
            complex digital transformations - and lived to tell the tale. Hosted by Julian Tedstone.
          </p>

          {/* Guest montage */}
          <div className={`${styles.guestMontage} reveal`}>
            {FEATURED_GUESTS.map(guest => (
              <Link
                key={guest.slug}
                to={`/content/podcast/${guest.slug}`}
                className={styles.guestCard}
              >
                <img
                  src={`https://i.ytimg.com/vi/${guest.youtube}/hqdefault.jpg`}
                  alt={guest.name}
                  className={styles.guestThumb}
                  loading="lazy"
                />
                <span className={styles.guestName}>{guest.name}</span>
                <span className={styles.guestRole}>{guest.role}</span>
              </Link>
            ))}
          </div>

          <div className={`${styles.platformLinks} reveal`}>
            <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" className="btn btn--white">
              YouTube &rarr;
            </a>
            <a href="https://open.spotify.com/show/digitaltransformationsurvivors" target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              Spotify &rarr;
            </a>
            <a href="https://podcasts.apple.com/gb/podcast/digital-transformation-survivors/id1795945558" target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              Apple Podcasts &rarr;
            </a>
          </div>

          <div className={`${styles.heroAnchors} reveal`}>
            <a href="#book" className={styles.heroAnchor}>
              <span>Be a guest on the show</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#coherence" className={styles.heroAnchor}>
              <span>Find out about Coherence</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── About the Podcast ────────────────────────────── */}
      <section className={`section ${styles.aboutSection}`}>
        <div className={`container ${styles.aboutInner}`}>
          <div className={`${styles.aboutCopy} reveal`}>
            <span className="label label--pink">About the show</span>
            <h2>Strategy meets reality</h2>
            <p>
              Digital Transformation Survivors explores the real human side of technology change.
              From strategy to execution, we cover the decisions, setbacks, and breakthroughs
              that define successful digital programmes in highly regulated environments.
            </p>
            <p>
              Each episode features candid conversations with people who've led large-scale
              transformations across government, financial services, healthcare, energy and
              global enterprise - sharing the lessons that don't make it into the case studies.
            </p>
            <p>
              Whether you're a CTO wrestling with legacy platforms, a marketer navigating
              composable architectures, or a programme leader trying to make agile actually work,
              this podcast is for the people in the trenches.
            </p>
          </div>
          <div className={`${styles.aboutImage} reveal`}>
            <img
              src="/coh/content/dts-badge.png"
              alt="Digital Transformation Survivors podcast"
              style={{ padding: '40px', background: '#f7f7f7' }}
            />
          </div>
        </div>
      </section>

      {/* ── Meet the Crew (horizontal slider bar) ─────────── */}
      <section ref={crewRef} className={styles.crewBar}>
        <div className={styles.crewBarInner}>
          <div className={styles.crewArrow}>
            <span className={styles.crewArrowText}>Meet the team</span>
            <svg className={styles.crewArrowIcon} viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12H44M44 12L34 2M44 12L34 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className={styles.crewCards}>
            <p className={styles.crewBlurb}>
              DTS is backed by one of the hottest podcast production crews on the scene.
            </p>

            <div className={styles.crewCard}>
              <img src="/coh/team/emily-baines.png" alt="Emily Baines" className={styles.crewPhoto} />
              <div className={styles.crewInfo}>
                <strong>Emily Baines</strong>
                <span>Marketing Manager</span>
                <span className={styles.crewRole}>Executive Producer</span>
              </div>
            </div>

            <div className={styles.crewCard}>
              <img src="/coh/team/natalie-osborn.png" alt="Natalie Osborn" className={styles.crewPhoto} />
              <div className={styles.crewInfo}>
                <strong>Natalie Osborn</strong>
                <span>Operations Manager</span>
                <span className={styles.crewRole}>Production Supervisor</span>
              </div>
            </div>

            <div className={styles.crewCard}>
              <img src="/coh/team/rich-bundock.png" alt="Rich Bundock" className={styles.crewPhoto} />
              <div className={styles.crewInfo}>
                <strong>Rich Bundock</strong>
                <span>Cohaesus Group CEO</span>
                <span className={styles.crewRole}>Wardrobe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Season 2 Episodes ────────────────────────────── */}
      <section className="section section--grey">
        <div className="container">
          <span className="label label--pink reveal">Season 2</span>
          <h2 className="reveal" style={{ marginBottom: '32px' }}>Latest Episodes</h2>
          <div className={styles.episodeGrid}>
            {PODCAST_EPISODES.season2.map((ep, i) => (
              <Link
                key={ep.slug}
                to={`/content/podcast/${ep.slug}`}
                className={`${styles.episodeCard} reveal`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${ep.youtube}/hqdefault.jpg`}
                  alt={ep.title}
                  className={styles.episodeThumb}
                  loading="lazy"
                />
                <div className={styles.episodeContent}>
                  <span className={styles.episodeLabel}>S2 E{PODCAST_EPISODES.season2.length - i}</span>
                  <h3>{ep.title}</h3>
                  <time dateTime={ep.date}>
                    {new Date(ep.date).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'long', year: 'numeric',
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Ticker ──────────────────────────────────── */}
      <section className={styles.tickerBar}>
        <div className={styles.tickerTrack}>
          <div className={styles.tickerSlide}>
            {[
              { q: 'People think philosophers don\u2019t matter. Until they do.', who: 'Blay Whitby', slug: null },
              { q: 'It was 2,000 sites. Simplify, standardize, and share.', who: 'Antonella Severo, Nestl\u00e9', slug: 'nestle-drupal-journey-antonella-severo' },
              { q: 'My AI is talking to your AI. When do the humans actually do the work?', who: 'Alan Perestrello, HartSquare', slug: 'membership-organisations-digital-future' },
              { q: 'The change just bounces off like a beach ball.', who: 'Paul Taylor, Worldline', slug: 'product-leadership-payments' },
              { q: 'It cannot be replaced by a single prompt.', who: 'Antonella Severo, Nestl\u00e9', slug: 'nestle-drupal-journey-antonella-severo' },
              { q: 'Now it\u2019s a closed shop. Even the people at OpenAI don\u2019t understand what\u2019s underneath.', who: 'Dr. Jonathan Sykes', slug: 'reimagining-digital-services-government' },
              { q: 'You\u2019re not doing unto the people \u2014 you\u2019re in the transformation yourself.', who: 'Paul Taylor, Worldline', slug: 'product-leadership-payments' },
              { q: 'Half the conversation at the kitchen table is about how to manage teams.', who: 'Alessandra Canavesi, AXA IM', slug: 'alessandra-canavesi-digital-marketing' },
              { q: 'The power Google has to create truth is something the Catholic Church could only dream of.', who: 'Blay Whitby', slug: null },
              { q: 'I actually have to read the goddamn thing.', who: 'Alan Perestrello, HartSquare', slug: 'membership-organisations-digital-future' },
            ].map((item, i) => {
              const inner = (
                <span className={styles.tickerItem} key={i}>
                  <span className={styles.tickerQuote}>&ldquo;{item.q}&rdquo;</span>
                  <span className={styles.tickerAttr}>- {item.who}</span>
                </span>
              );
              return item.slug ? (
                <Link to={`/content/podcast/${item.slug}`} key={i} className={styles.tickerLink}>{inner}</Link>
              ) : (
                inner
              );
            })}
          </div>
          <div className={styles.tickerSlide} aria-hidden="true">
            {[
              { q: 'People think philosophers don\u2019t matter. Until they do.', who: 'Blay Whitby', slug: null },
              { q: 'It was 2,000 sites. Simplify, standardize, and share.', who: 'Antonella Severo, Nestl\u00e9', slug: 'nestle-drupal-journey-antonella-severo' },
              { q: 'My AI is talking to your AI. When do the humans actually do the work?', who: 'Alan Perestrello, HartSquare', slug: 'membership-organisations-digital-future' },
              { q: 'The change just bounces off like a beach ball.', who: 'Paul Taylor, Worldline', slug: 'product-leadership-payments' },
              { q: 'It cannot be replaced by a single prompt.', who: 'Antonella Severo, Nestl\u00e9', slug: 'nestle-drupal-journey-antonella-severo' },
              { q: 'Now it\u2019s a closed shop. Even the people at OpenAI don\u2019t understand what\u2019s underneath.', who: 'Dr. Jonathan Sykes', slug: 'reimagining-digital-services-government' },
              { q: 'You\u2019re not doing unto the people \u2014 you\u2019re in the transformation yourself.', who: 'Paul Taylor, Worldline', slug: 'product-leadership-payments' },
              { q: 'Half the conversation at the kitchen table is about how to manage teams.', who: 'Alessandra Canavesi, AXA IM', slug: 'alessandra-canavesi-digital-marketing' },
              { q: 'The power Google has to create truth is something the Catholic Church could only dream of.', who: 'Blay Whitby', slug: null },
              { q: 'I actually have to read the goddamn thing.', who: 'Alan Perestrello, HartSquare', slug: 'membership-organisations-digital-future' },
            ].map((item, i) => {
              const inner = (
                <span className={styles.tickerItem} key={`dup-${i}`}>
                  <span className={styles.tickerQuote}>&ldquo;{item.q}&rdquo;</span>
                  <span className={styles.tickerAttr}>- {item.who}</span>
                </span>
              );
              return item.slug ? (
                <Link to={`/content/podcast/${item.slug}`} key={`dup-${i}`} className={styles.tickerLink}>{inner}</Link>
              ) : (
                inner
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Schedule a Conversation ──────────────────────── */}
      <section id="book" className={`section ${styles.scheduleSection}`}>
        <div className={`container ${styles.scheduleInner}`}>
          <span className="label label--pink reveal">Interested in guesting?</span>
          <h2 className="reveal">Get in touch</h2>
          <p className="reveal">
            We're always interested in talking with new people. If you'd like to guest,
            or think you know someone who would be perfect, get in touch.
          </p>
          <div id="cal-podcast-embed" className={`${styles.calEmbed} reveal`} style={{ minHeight: '600px', width: '100%' }}>
            <iframe
              src={`https://app.cal.com/${CAL_USERNAME}/${CAL_EVENT_SLUG}?layout=month_view&embed=true&theme=light`}
              style={{ width: '100%', height: '100%', minHeight: '600px', border: 'none' }}
              title="Book a conversation"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Season 1 Episodes ────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="label label--pink reveal">Season 1</span>
          <h2 className="reveal" style={{ marginBottom: '32px' }}>Where it all began</h2>
          <div className={styles.episodeGrid}>
            {PODCAST_EPISODES.season1.map((ep, i) => (
              <Link
                key={ep.slug}
                to={`/content/podcast/${ep.slug}`}
                className={`${styles.episodeCard} reveal`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${ep.youtube}/hqdefault.jpg`}
                  alt={ep.title}
                  className={styles.episodeThumb}
                  loading="lazy"
                />
                <div className={styles.episodeContent}>
                  <span className={styles.episodeLabel}>S1 E{PODCAST_EPISODES.season1.length - i}</span>
                  <h3>{ep.title}</h3>
                  <time dateTime={ep.date}>
                    {new Date(ep.date).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'long', year: 'numeric',
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Coherence ──────────────────────────────── */}
      <section id="coherence" className={`section ${styles.coherencePanel}`}>
        <div className={`container ${styles.coherencePanelInner}`}>
          <span className="label label--pink reveal">About Coherence</span>
          <h2 className="reveal">We make it make sense</h2>
          <p className="reveal">
            Coherence helps organisations in regulated industries unlock the full potential
            of existing and emerging marketing technologies. We pair human expertise with
            agentic intelligence - specialist AI agents and automated pipelines that work
            alongside our team, continuously.
          </p>
          <p className="reveal">
            Design systems that travel. Pipelines that never stop. Human judgement where it matters.
          </p>

          {/* Client logos */}
          <div className={`${styles.clientLogos} reveal`}>
            {CLIENT_LOGOS.map(logo => (
              <img key={logo.name} src={logo.src} alt={logo.name} className={styles.clientLogo} loading="lazy" />
            ))}
          </div>

          <div className={`${styles.coherenceStats} reveal`}>
            <div className={styles.coherenceStat}>
              <strong>460 sites</strong>
              <span>re-platformed for Bayer Consumer Health</span>
            </div>
            <div className={styles.coherenceStat}>
              <strong>4 CMSs<br />to 1</strong>
              <span>National Grid consolidated</span>
            </div>
            <div className={styles.coherenceStat}>
              <strong>&pound;365m</strong>
              <span>Future Fund launched for British Business Bank</span>
            </div>
          </div>

          {/* Featured case study */}
          <Link to="/case-studies/national-grid" className={`${styles.featuredCase} reveal`}>
            <img
              src="/coh/images/case-studies/national-grid-hero.png"
              alt="National Grid case study"
              className={styles.featuredCaseImage}
              loading="lazy"
            />
            <div className={styles.featuredCaseContent}>
              <span className={styles.featuredCaseLabel}>Featured case study</span>
              <h3>Helping the UK&rsquo;s Drive to Net Zero by Enabling National Grid&rsquo;s Multi-Site Strategy</h3>
              <p>4 CMSs consolidated to 1 platform, 250+ outdated pages retired, mobile-first redesign across all business units.</p>
              <span className={styles.featuredCaseLink}>Read the case study &rarr;</span>
            </div>
          </Link>

          {/* Contact CTA */}
          <div className={`${styles.coherenceCta} reveal`}>
            <p>Need help with your digital transformation?</p>
            <Link to="/contact" className="btn btn--pink btn--lg">
              Get in touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
