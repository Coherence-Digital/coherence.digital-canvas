import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';
import styles from './CaseStudyHugeHero.module.css';

/**
 * Full-width case study hero with parallax background image.
 * Design system component: CaseStudyHugeHero
 * Mode: spec-evolve (new pattern — not in original source spec)
 */
export default function CaseStudyHugeHero({
  label = 'Case Study',
  title,
  subtitle,
  image,
  href,
  cta = 'Find out more',
}) {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    /* Gentle parallax: image moves at 30% of scroll speed */
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    function handleScroll() {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      /* Only compute when section is in viewport */
      if (rect.bottom < 0 || rect.top > windowH) return;
      setOffset((rect.top / windowH) * -60);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.hugeHero}>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${image})`,
          transform: `translate3d(0, ${offset}px, 0)`,
        }}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <span className={styles.label}>{label}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <Link to={href} className="btn btn--white">{cta}</Link>
      </div>
    </section>
  );
}
