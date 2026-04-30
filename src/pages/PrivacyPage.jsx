import SeoHead from '../components/SeoHead.jsx';
import { SITE } from '../data/siteData.js';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://${SITE.domain}/privacy`,
    name: 'Privacy Policy',
    description: 'Privacy policy for coherence.digital — how we collect, use and protect your data.',
    url: `https://${SITE.domain}/privacy`,
    about: 'privacy policy',
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: `https://${SITE.domain}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `https://${SITE.domain}/privacy` },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SeoHead
        title="Privacy Policy"
        description="Privacy policy for coherence.digital — how we collect, use and protect your data."
        path="/privacy"
      
        jsonLd={jsonLd}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h1 className="reveal">Privacy Policy</h1>

          <h2>Who we are</h2>
          <p>
            Coherence is a trading name of Coherence Consulting Limited, registered in the United Kingdom (Company No. 13606667).
            Our registered office is at Towngate House, 2-8 Parkstone Road, Poole, Dorset, BH15 2PW.
          </p>

          <h2>What data we collect</h2>
          <p>
            When you use our contact form we collect your name, email address and message content solely to respond to your enquiry.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            We use cookies to understand how visitors interact with our site. When you first visit, analytics and marketing cookies are
            disabled by default. You can choose to accept all cookies or use only essential cookies via the consent banner.
          </p>
          <p>
            <strong>Analytics cookies</strong> — We use Google Analytics 4 to measure page views and site usage. Data is processed by Google
            in accordance with their <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>.
          </p>
          <p>
            <strong>Marketing cookies</strong> — We use the LinkedIn Insight Tag to measure the effectiveness of our LinkedIn campaigns.
            Data is processed by LinkedIn in accordance with their <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>.
          </p>
          <p>
            You can withdraw consent at any time by clearing your browser cookies and revisiting the site.
          </p>

          <h2>How we use your data</h2>
          <p>
            Personal data submitted through our contact form is used exclusively to respond to your enquiry.
            We do not sell, rent or share your personal data with third parties for marketing purposes.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain contact form submissions for up to 12 months after the enquiry has been resolved, after which they are securely deleted.
          </p>

          <h2>Your rights</h2>
          <p>
            Under UK GDPR you have the right to access, rectify or erase your personal data, restrict processing, and data portability.
            To exercise any of these rights, contact us at{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this policy, email us at{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
