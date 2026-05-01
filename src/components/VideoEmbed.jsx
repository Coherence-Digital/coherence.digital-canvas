import styles from './VideoEmbed.module.css';

/** Normalise a share URL to an embed URL.
 *  Returns null if the URL is unsupported or empty. */
function toEmbedUrl(raw) {
  if (!raw) return null;
  const url = raw.trim();
  if (!url) return null;
  // youtu.be/<id>
  let m = url.match(/^https?:\/\/youtu\.be\/([\w-]{6,})/i);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;
  // youtube.com/watch?v=<id>
  m = url.match(/^https?:\/\/(?:www\.)?youtube\.com\/watch\?[^#]*v=([\w-]{6,})/i);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;
  // youtube.com/embed/<id> already
  if (/^https?:\/\/(?:www\.)?youtube\.com\/embed\//i.test(url)) return url;
  // vimeo.com/<id>
  m = url.match(/^https?:\/\/(?:www\.)?vimeo\.com\/(\d{4,})/i);
  if (m) return `https://player.vimeo.com/video/${m[1]}`;
  // player.vimeo.com/video/<id> already
  if (/^https?:\/\/player\.vimeo\.com\/video\//i.test(url)) return url;
  return null;
}

export default function VideoEmbed({ url, caption, width = 'wide' }) {
  const embed = toEmbedUrl(url);
  const widthClass =
    width === 'narrow' ? styles.narrow : width === 'full' ? styles.full : styles.wide;
  return (
    <figure className={`${styles.root} ${widthClass}`}>
      <div className={styles.frame}>
        {embed ? (
          <iframe
            src={embed}
            title={caption || 'Video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.iframe}
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            Paste a YouTube or Vimeo URL
          </div>
        )}
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
