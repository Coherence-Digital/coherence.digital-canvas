import styles from './ImageBlock.module.css';

/**
 * ImageBlock — single image with optional caption.
 *
 * @param {{
 *   image?: { src?: string, alt?: string },
 *   caption?: string,
 *   width?: 'narrow' | 'wide' | 'full',
 *   aspect?: 'auto' | '16/9' | '4/3',
 * }} props
 */
export default function ImageBlock({
  image,
  caption,
  width = 'wide',
  aspect = 'auto',
}) {
  const widthClass =
    width === 'narrow' ? styles.narrow : width === 'full' ? styles.full : styles.wide;
  const aspectClass =
    aspect === '16/9' ? styles.aspect16x9 : aspect === '4/3' ? styles.aspect4x3 : styles.aspectAuto;
  const src = image?.src?.trim();
  const alt = image?.alt ?? '';

  return (
    <figure className={`${styles.root} ${widthClass}`}>
      <div className={`${styles.frame} ${aspectClass}`}>
        {src ? (
          <img src={src} alt={alt} className={styles.img} loading="lazy" />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            No image set
          </div>
        )}
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
