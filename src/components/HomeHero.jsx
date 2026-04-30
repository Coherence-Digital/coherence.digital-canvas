import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router';
import styles from '../pages/HomePage.module.css';

/**
 * Segments: `{ text, pauseMs }` typed char-by-char; beat = pauseMs, then line break;
 * `nlAfter: true` on the opener = line break right after “Your …” (no beat there).
 */
const CAROUSEL_SLIDES = [
  {
    segments: [
      { text: 'Your website ', pauseMs: 0, nlAfter: true },
      { text: 'rebuilt in days.', pauseMs: 1040 },
      { text: 'Improved every week.', pauseMs: 1040 },
      { text: 'Governed always.', pauseMs: 0 },
    ],
  },
  {
    segments: [
      { text: 'Your content ', pauseMs: 0, nlAfter: true },
      { text: 'migrated & ', pauseMs: 0, nlAfter: true },
      { text: 'transformed.', pauseMs: 1040 },
      { text: 'Enriched & optimised.', pauseMs: 0 },
    ],
  },
  {
    segments: [
      { text: 'Your code ', pauseMs: 0, nlAfter: true },
      { text: 'known inside out.', pauseMs: 1040 },
      { text: 'Tuned for speed.', pauseMs: 1040 },
      { text: 'Bootstrapped for innovation.', pauseMs: 0 },
    ],
  },
  {
    segments: [
      { text: 'Your business ', pauseMs: 0, nlAfter: true },
      { text: 'powered by context.', pauseMs: 1040 },
      { text: 'Deciding on data.', pauseMs: 1040 },
      { text: 'Ready to pivot.', pauseMs: 0 },
    ],
  },
  {
    segments: [
      { text: 'Your brand ', pauseMs: 0, nlAfter: true },
      { text: 'Baked into your tech.', pauseMs: 1040 },
      { text: 'Consistent and scaled.', pauseMs: 0 },
    ],
  },
];

function slideFullText(slide) {
  const parts = [];
  for (const s of slide.segments) {
    parts.push(s.text ?? '');
    if (s.nlAfter) {
      parts.push('\n');
      continue;
    }
    if ((s.pauseMs ?? 0) > 0) {
      parts.push('\n');
    }
  }
  return parts.join('');
}

const CAROUSEL_ARIA_SUMMARY = CAROUSEL_SLIDES.map(slideFullText).join(' ');

/** One blink cycle matches `.heroCursor` animation (1s); intro = 3 blinks before typing */
const CURSOR_BLINK_CYCLE_MS = 1000;
const INTRO_CURSOR_BLINKS = 3;
const INTRO_CURSOR_MS = CURSOR_BLINK_CYCLE_MS * INTRO_CURSOR_BLINKS;
const CHAR_MS_MIN = 68;
const CHAR_MS_MAX = 104;
/** Pause after a slide is fully typed, before fade-out */
const HOLD_AFTER_SLIDE_MS = 4800;
/** Crossfade duration (soft) — must match CSS */
const CROSSFADE_MS = 1000;

function subscribeReducedMotion(callback) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function charDelayMs() {
  return CHAR_MS_MIN + Math.floor(Math.random() * (CHAR_MS_MAX - CHAR_MS_MIN + 1));
}

export default function HomeHero() {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [headline, setHeadline] = useState('');
  const [slideIndex, setSlideIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  /** Soft crossfade: false = dimmed (between slides), true = visible */
  const [carouselVisible, setCarouselVisible] = useState(true);
  const cancelled = useRef(false);

  const typeSlide = useCallback(async slide => {
    cancelled.current = false;
    await sleep(INTRO_CURSOR_MS);
    if (cancelled.current) return;
    let built = '';
    for (const seg of slide.segments) {
      const pauseAfter = seg.pauseMs ?? 0;
      for (let i = 0; i < seg.text.length; i++) {
        if (cancelled.current) return;
        built += seg.text[i];
        setHeadline(built);
        await sleep(charDelayMs());
      }
      if (cancelled.current) return;
      if (seg.nlAfter) {
        built += '\n';
        setHeadline(built);
        continue;
      }
      if (pauseAfter > 0) {
        await sleep(pauseAfter);
        if (cancelled.current) return;
        built += '\n';
        setHeadline(built);
      }
    }
    if (cancelled.current) return;
    setTypingDone(true);
  }, []);

  const runCarouselLoop = useCallback(async () => {
    cancelled.current = false;
    let idx = 0;
    while (!cancelled.current) {
      const slide = CAROUSEL_SLIDES[idx];
      setSlideIndex(idx);
      setHeadline('');
      setTypingDone(false);
      setCarouselVisible(true);
      await typeSlide(slide);
      if (cancelled.current) return;
      await sleep(HOLD_AFTER_SLIDE_MS);
      if (cancelled.current) return;
      setCarouselVisible(false);
      await sleep(CROSSFADE_MS);
      if (cancelled.current) return;
      idx = (idx + 1) % CAROUSEL_SLIDES.length;
    }
  }, [typeSlide]);

  useEffect(() => {
    cancelled.current = false;
    const startId = window.setTimeout(() => {
      if (reducedMotion) {
        setSlideIndex(0);
        setHeadline(slideFullText(CAROUSEL_SLIDES[0]));
        setTypingDone(true);
        setCarouselVisible(true);
        return;
      }
      void runCarouselLoop();
    }, 0);
    return () => {
      clearTimeout(startId);
      cancelled.current = true;
    };
  }, [reducedMotion, runCarouselLoop]);

  /** Reduced motion: rotate full slides on an interval with soft crossfade */
  useEffect(() => {
    if (!reducedMotion) return undefined;
    const ROTATE_MS = HOLD_AFTER_SLIDE_MS + CROSSFADE_MS;
    const id = window.setInterval(() => {
      setSlideIndex(i => {
        const next = (i + 1) % CAROUSEL_SLIDES.length;
        setHeadline(slideFullText(CAROUSEL_SLIDES[next]));
        return next;
      });
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [reducedMotion]);

  const ariaLabel = CAROUSEL_SLIDES[slideIndex]
    ? slideFullText(CAROUSEL_SLIDES[slideIndex])
    : CAROUSEL_ARIA_SUMMARY;

  return (
    <>
      <h1 className={styles.heroTitle} aria-label={ariaLabel}>
        <span
          className={`${styles.heroCarousel} ${carouselVisible ? styles.heroCarouselLit : styles.heroCarouselDim}`}
          aria-hidden="true"
        >
          <span className={styles.heroTypeface}>
            {headline}
            {!typingDone ? <span className={styles.heroCursor} role="presentation" /> : null}
          </span>
        </span>
      </h1>
      <p className={`${styles.heroSub} ${styles.heroFade} ${styles.heroFadeVisible}`}>
        We&apos;re a team of engineers, designers and strategists using code, context, experience and
        curiosity to build high-performance brand web portfolios.
      </p>
      <Link to="/capabilities" className={`btn btn--pink ${styles.heroFade} ${styles.heroFadeVisible}`}>
        Explore capabilities
      </Link>
    </>
  );
}
