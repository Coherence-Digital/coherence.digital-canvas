import styles from './Divider.module.css';

export default function Divider({ variant = 'thin', width = 'wide' }) {
  const widthClass =
    width === 'narrow' ? styles.narrow : width === 'full' ? styles.full : styles.wide;
  const variantClass = variant === 'thick' ? styles.thick : styles.thin;
  return (
    <div className={`${styles.root} ${widthClass}`}>
      <hr className={`${styles.rule} ${variantClass}`} />
    </div>
  );
}
