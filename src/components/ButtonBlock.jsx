import { Link } from 'react-router';
import styles from './ButtonBlock.module.css';

export default function ButtonBlock({ cta, variant = 'pink', align = 'left' }) {
  const label = cta?.label?.trim() || 'Learn more';
  const href = cta?.href?.trim() || '#';
  const variantClass =
    variant === 'dark' ? styles.dark : variant === 'outline' ? styles.outline : styles.pink;
  const alignClass = align === 'center' ? styles.alignCenter : styles.alignLeft;
  const isInternal = href.startsWith('/');
  return (
    <div className={`${styles.root} ${alignClass}`}>
      {isInternal ? (
        <Link to={href} className={`${styles.btn} ${variantClass}`}>
          {label}
        </Link>
      ) : (
        <a href={href} className={`${styles.btn} ${variantClass}`}>
          {label}
        </a>
      )}
    </div>
  );
}
