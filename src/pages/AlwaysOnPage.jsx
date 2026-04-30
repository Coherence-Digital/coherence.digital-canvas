import { useEffect } from 'react';
import SeoHead from '../components/SeoHead.jsx';
import { SITE } from '../data/siteData.js';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://${SITE.domain}/always-on`,
    name: 'Always On',
    description: 'Continuous website management, optimisation and governance by Coherence.',
    url: `https://${SITE.domain}/always-on`,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: `https://${SITE.domain}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Always On', item: `https://${SITE.domain}/always-on` },
    ],
  },
];

export default function AlwaysOnPage() {
  useEffect(() => {
    window.location.href = 'https://alwayson.coherence.digital';
  }, []);

  return (
    <>
      <SeoHead
        title="Always On"
        description="Continuous website management, optimisation and governance by Coherence."
        path="/always-on"
      
        jsonLd={jsonLd}
      />
      <section className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container">
          <p>Redirecting to Always On&hellip;</p>
        </div>
      </section>
    </>
  );
}
