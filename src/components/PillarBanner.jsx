import styles from './PillarBanner.module.css';

/**
 * Scrolling accreditations / partner / trust-signal banner.
 * @param {{ items: string[], dark?: boolean }} props
 */
export default function PillarBanner({ items, dark = false }) {
  /* Double items for infinite scroll illusion */
  const doubled = [...items, ...items];

  return (
    <div className={`${styles.banner} ${dark ? styles.dark : ''}`} role="marquee" aria-label="Trust signals">
      <div className={styles.track} aria-live="off">
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot} aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
