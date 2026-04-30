import { SITE } from '../data/siteData.js';

/**
 * Per-page SEO: title, description, OG, JSON-LD.
 * Uses React 19 native <title>/<meta>/<link> hoisting — no Helmet needed.
 */
export default function SeoHead({ title, description, path = '/', type = 'website', image, jsonLd }) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  const url = `https://coherence.digital${path}`;
  const ogImage = image || 'https://coherence.digital/og-default.jpg';

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description || ''} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="fb:app_id" content="314192535267336" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@coherencedigit" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || ''} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD — data is hardcoded constants from our source, not user input */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
}
