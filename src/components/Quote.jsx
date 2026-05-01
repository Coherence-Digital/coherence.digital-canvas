import styles from './Quote.module.css';

export default function Quote({ text = '', attribution, role, align = 'center' }) {
  const alignClass = align === 'left' ? styles.alignLeft : styles.alignCenter;
  return (
    <figure className={`${styles.root} ${alignClass}`}>
      <blockquote className={styles.quote}>
        <span className={styles.mark} aria-hidden="true">
          “
        </span>
        {text}
        <span className={styles.markEnd} aria-hidden="true">
          ”
        </span>
      </blockquote>
      {(attribution || role) ? (
        <figcaption className={styles.cite}>
          {attribution ? <span className={styles.who}>{attribution}</span> : null}
          {role ? <span className={styles.role}>{role}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
