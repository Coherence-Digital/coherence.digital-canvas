import styles from './Faq.module.css';

export default function Faq({ heading, items = [] }) {
  return (
    <div className={styles.root}>
      {heading ? <h2 className={styles.heading}>{heading}</h2> : null}
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            <details>
              <summary className={styles.summary}>
                <span>{item?.question ?? ''}</span>
                <span className={styles.icon} aria-hidden="true">
                  +
                </span>
              </summary>
              <div className={styles.answer}>{item?.answer ?? ''}</div>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
