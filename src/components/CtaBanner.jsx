import { Link } from 'react-router';
import styles from './CtaBanner.module.css';

export default function CtaBanner({
  heading = '',
  subhead,
  cta,
  dark = false,
  align = 'center',
}) {
  const label = cta?.label?.trim() || 'Learn more';
  const href = cta?.href?.trim() || '#';
  const isInternal = href.startsWith('/');
  const alignClass = align === 'left' ? styles.alignLeft : styles.alignCenter;
  return (
    <div className={`${styles.root} ${dark ? styles.dark : styles.light} ${alignClass}`}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>
        {subhead ? <p className={styles.subhead}>{subhead}</p> : null}
        {isInternal ? (
          <Link to={href} className={styles.btn}>
            {label}
          </Link>
        ) : (
          <a href={href} className={styles.btn}>
            {label}
          </a>
        )}
      </div>
    </div>
  );
}
