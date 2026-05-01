import styles from './Heading.module.css';

export default function Heading({
  text = '',
  level = 'h2',
  size = 'lg',
  align = 'left',
  width = 'wide',
}) {
  const Tag = level === 'h3' ? 'h3' : level === 'h4' ? 'h4' : 'h2';
  const widthClass =
    width === 'narrow' ? styles.narrow : width === 'full' ? styles.full : styles.wide;
  const sizeClass =
    size === 'sm' ? styles.sm : size === 'md' ? styles.md : size === 'xl' ? styles.xl : styles.lg;
  const alignClass = align === 'center' ? styles.alignCenter : styles.alignLeft;
  return (
    <div className={`${styles.root} ${widthClass} ${alignClass}`}>
      <Tag className={`${styles.heading} ${sizeClass}`}>{text}</Tag>
    </div>
  );
}
