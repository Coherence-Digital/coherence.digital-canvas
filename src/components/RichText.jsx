import styles from './RichText.module.css';

/**
 * RichText — simple typographic block. Optional heading, body copy split
 * into paragraphs on blank lines.
 *
 * Body is rendered as plain text (no HTML) for safety. Future iteration:
 * markdown via a sanitiser, or a structured rich-text JSON shape.
 *
 * @param {{
 *   heading?: string,
 *   body?: string,
 *   align?: 'left' | 'center',
 *   width?: 'narrow' | 'wide' | 'full',
 * }} props
 */
export default function RichText({
  heading,
  body = '',
  align = 'left',
  width = 'wide',
}) {
  const alignClass = align === 'center' ? styles.alignCenter : styles.alignLeft;
  const widthClass =
    width === 'narrow' ? styles.narrow : width === 'full' ? styles.full : styles.wide;

  const paragraphs = String(body)
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className={`${styles.root} ${alignClass} ${widthClass}`}>
      {heading ? <h2 className={styles.heading}>{heading}</h2> : null}
      {paragraphs.map((p, i) => (
        <p key={i} className={styles.paragraph}>
          {p.split('\n').map((line, j, arr) => (
            <span key={j}>
              {line}
              {j < arr.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}
