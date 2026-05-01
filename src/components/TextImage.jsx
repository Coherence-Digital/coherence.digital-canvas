import { Link } from 'react-router';
import styles from './TextImage.module.css';

export default function TextImage({
  heading,
  body = '',
  image,
  cta,
  image_position = 'right',
}) {
  const paragraphs = String(body)
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
  const src = image?.src?.trim();
  const alt = image?.alt ?? '';
  const ctaLabel = cta?.label?.trim();
  const ctaHref = cta?.href?.trim();
  const isInternal = ctaHref?.startsWith('/');
  const reverse = image_position === 'left';

  return (
    <div className={`${styles.root} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.text}>
        {heading ? <h2 className={styles.heading}>{heading}</h2> : null}
        {paragraphs.map((p, i) => (
          <p key={i} className={styles.paragraph}>
            {p}
          </p>
        ))}
        {ctaLabel && ctaHref ? (
          isInternal ? (
            <Link to={ctaHref} className={styles.btn}>
              {ctaLabel}
            </Link>
          ) : (
            <a href={ctaHref} className={styles.btn}>
              {ctaLabel}
            </a>
          )
        ) : null}
      </div>
      <div className={styles.media}>
        {src ? (
          <img src={src} alt={alt} className={styles.img} loading="lazy" />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            No image
          </div>
        )}
      </div>
    </div>
  );
}
