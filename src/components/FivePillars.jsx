import { DISCIPLINES } from '../data/siteData.js';
import styles from './FivePillars.module.css';

const ICONS = {
  consulting: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="14" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 10l6-6m0 0h-5m5 0v5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  concept: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 4a14 14 0 0 1 8 25.42V34a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-4.58A14 14 0 0 1 24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M18 40h12M20 44h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 14l-10 10 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 14l10 10-10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 6L20 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  context: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 18h36M18 18v24" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="30" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M36 34l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  care: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 42S6 30 6 18a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 12-18 24-18 24z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M18 22l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function FivePillars({ pillars } = {}) {
  const items = Array.isArray(pillars) && pillars.length > 0
    ? pillars.map((p, i) => ({
        key: p.icon ?? p.key ?? `pillar-${i}`,
        icon: p.icon,
        title: p.title ?? '',
        subtitle: p.subtitle ?? '',
        description: p.description ?? '',
      }))
    : DISCIPLINES;

  return (
    <div className={styles.grid}>
      {items.map((d, i) => (
        <div key={d.key ?? i} className={`${styles.card} reveal`}>
          <div className={styles.icon}>{ICONS[d.icon ?? d.key] ?? null}</div>
          <h3 className={styles.title}>{d.title}</h3>
          {d.subtitle && <span className={styles.subtitle}>{d.subtitle}</span>}
          <p className={styles.description}>{d.description}</p>
        </div>
      ))}
    </div>
  );
}
