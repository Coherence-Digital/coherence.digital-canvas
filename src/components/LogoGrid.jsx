import styles from './LogoGrid.module.css';

export default function LogoGrid({ heading, logos = [], columns = '5' }) {
  const colClass =
    String(columns) === '3'
      ? styles.cols3
      : String(columns) === '4'
      ? styles.cols4
      : String(columns) === '6'
      ? styles.cols6
      : styles.cols5;
  return (
    <div className={styles.root}>
      {heading ? <h2 className={styles.heading}>{heading}</h2> : null}
      <div className={`${styles.grid} ${colClass}`}>
        {logos.map((logo, i) => {
          const src = logo?.image?.src?.trim();
          const alt = logo?.image?.alt ?? '';
          const href = logo?.link?.href?.trim();
          if (!src) return null;
          const img = <img src={src} alt={alt} className={styles.img} loading="lazy" />;
          return href ? (
            <a key={i} href={href} className={styles.cell} target="_blank" rel="noreferrer">
              {img}
            </a>
          ) : (
            <span key={i} className={styles.cell}>
              {img}
            </span>
          );
        })}
      </div>
    </div>
  );
}
