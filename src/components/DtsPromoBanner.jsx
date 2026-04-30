import { Link } from 'react-router';
import styles from './DtsPromoBanner.module.css';

export default function DtsPromoBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.quotes} aria-hidden="true">
        <span className={styles.fq} style={{ '--fq-x': '5%', '--fq-delay': '-18s', '--fq-duration': '40s', '--fq-size': '3rem', '--fq-alpha': '0.1' }}>&ldquo;Freedom in a box.&rdquo;</span>
        <span className={styles.fq} style={{ '--fq-x': '70%', '--fq-delay': '-25s', '--fq-duration': '35s', '--fq-size': '1.6rem', '--fq-alpha': '0.15' }}>&ldquo;Simplify, standardize, and share.&rdquo;</span>
        <span className={styles.fq} style={{ '--fq-x': '40%', '--fq-delay': '-10s', '--fq-duration': '28s', '--fq-size': '0.8rem', '--fq-alpha': '0.25' }}>&ldquo;My AI is talking to your AI.&rdquo;</span>
        <span className={styles.fq} style={{ '--fq-x': '88%', '--fq-delay': '-8s', '--fq-duration': '22s', '--fq-size': '0.4rem', '--fq-alpha': '0.18' }}>&ldquo;A closed shop.&rdquo;</span>
        <span className={styles.fq} style={{ '--fq-x': '20%', '--fq-delay': '-5s', '--fq-duration': '30s', '--fq-size': '0.42rem', '--fq-alpha': '0.2' }}>&ldquo;Beach ball.&rdquo;</span>
      </div>
      <div className={`container ${styles.content}`}>
        <img
          src="/coh/content/dts-jules-podcast.png"
          alt="Julian Tedstone — Digital Transformation Survivors"
          className={styles.badge}
        />
        <div className={styles.copy}>
          <span className="label label--pink reveal">Podcast</span>
          <h2 className="reveal">Digital Transformation Survivors</h2>
          <p className="reveal">
            Real conversations with the practitioners, leaders and specialists who have navigated
            complex digital transformations — and lived to tell the tale.
          </p>
          <Link to="/content/podcast" className="btn btn--white reveal">
            Listen now &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
