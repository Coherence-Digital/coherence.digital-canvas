import { Link } from 'react-router';
import styles from './CardGrid.module.css';

export default function CardGrid({ heading, cards = [], columns = '3' }) {
  const colClass =
    String(columns) === '2' ? styles.cols2 : String(columns) === '4' ? styles.cols4 : styles.cols3;
  return (
    <div className={styles.root}>
      {heading ? <h2 className={styles.heading}>{heading}</h2> : null}
      <div className={`${styles.grid} ${colClass}`}>
        {cards.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
    </div>
  );
}

function Card({ card }) {
  const src = card?.image?.src?.trim();
  const alt = card?.image?.alt ?? '';
  const linkLabel = card?.link?.label?.trim();
  const linkHref = card?.link?.href?.trim();
  const isInternal = linkHref?.startsWith('/');
  return (
    <article className={styles.card}>
      {src ? <img src={src} alt={alt} className={styles.img} loading="lazy" /> : null}
      <div className={styles.body}>
        <h3 className={styles.title}>{card?.title ?? ''}</h3>
        {card?.description ? <p className={styles.desc}>{card.description}</p> : null}
        {linkLabel && linkHref ? (
          isInternal ? (
            <Link to={linkHref} className={styles.link}>
              {linkLabel} →
            </Link>
          ) : (
            <a href={linkHref} className={styles.link}>
              {linkLabel} →
            </a>
          )
        ) : null}
      </div>
    </article>
  );
}
