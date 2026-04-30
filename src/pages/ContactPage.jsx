import { useState } from 'react';
import SeoHead from '../components/SeoHead.jsx';
import { SITE, FORM_ACTION } from '../data/siteData.js';
import styles from './ContactPage.module.css';

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Coherence',
  mainEntity: {
    '@type': 'Organization',
    name: 'Coherence',
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postcode,
      addressCountry: 'GB',
    },
  },
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      await fetch(FORM_ACTION, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
    } catch { /* allow offline graceful degradation */ }
    setSubmitted(true);
  };

  return (
    <>
      <SeoHead
        title="Contact"
        description="Get in touch with Coherence. We'd love to hear about your challenges and explore how we can help."
        path="/contact"
        jsonLd={contactJsonLd}
      />

      <section className={styles.hero}>
        <div className="container">
          <span className="label label--pink reveal">Get in touch</span>
          <h1 className="reveal">We&rsquo;d love to hear from you.</h1>
          <p className={`${styles.heroSub} reveal`}>
            Do you have a question about our services or need to discuss a new project with our team? We&rsquo;re here to help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          {/* ── Form ──────────────────────────────── */}
          <div className="reveal">
            {submitted ? (
              <div className={styles.success}>
                <h2>Thank you!</h2>
                <p>Someone from our team will be in touch with you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input type="hidden" name="_head" value="coh" />
                <input type="hidden" name="_site" value="coherence.digital" />
                <input type="hidden" name="_subject" value="Enquiry from coherence.digital" />
                <div className={styles.field}>
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required autoComplete="name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required autoComplete="email" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="6" required />
                </div>
                <button type="submit" className="btn btn--pink">Send message</button>
              </form>
            )}
          </div>

          {/* ── Contact info ──────────────────────── */}
          <aside className={`${styles.info} reveal`}>
            <div className={styles.infoBlock}>
              <h3>Email</h3>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div className={styles.infoBlock}>
              <h3>Call</h3>
              <a href={`tel:${SITE.phone.replace(/\s/g,'')}`}>{SITE.phone}</a>
            </div>
            <div className={styles.infoBlock}>
              <h3>WhatsApp</h3>
              <a href={`https://wa.me/${SITE.phone.replace(/[\s+]/g, '')}`} target="_blank" rel="noopener noreferrer">
                Message us on WhatsApp &rarr;
              </a>
            </div>
            <div className={styles.infoBlock}>
              <h3>Address</h3>
              <p>
                {SITE.address.street}<br />
                {SITE.address.city}<br />
                {SITE.address.country}<br />
                {SITE.address.postcode}
              </p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Connect</h3>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn &rarr;
              </a>
            </div>
          </aside>
        </div>
      </section>
      {/* ── Offices ──────────────────────────────── */}
      <section className="section section--grey">
        <div className="container">
          <span className="label label--pink reveal">Our Offices</span>
          <h2 className="reveal" style={{ marginBottom: '48px' }}>Where to find us</h2>
          <div className={`${styles.offices} grid grid--2`}>
            {[
              { city: 'London', address: 'Rivvia, 11 Slingsby Place, London, WC2E 9AB', transport: 'Covent Garden Tube — 3 min' },
              { city: 'Edinburgh', address: 'Jamaica Yard, 3 Jamaica Street, Edinburgh, EH3 6HH', transport: 'Edinburgh Waverley — 6 min' },
              { city: 'New York', address: '500 7th Avenue, New York, NY 10018', transport: 'Madison Square Garden — 8 min' },
              { city: 'Bournemouth', address: 'SmartBase, Aviation Park West, Christchurch, BH23 6NW', transport: 'Bournemouth Station — 25 min' },
            ].map(office => (
              <div key={office.city} className={`${styles.officeCard} reveal`}>
                <h3>{office.city}</h3>
                <p>{office.address}</p>
                <p className={styles.transport}>{office.transport}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
