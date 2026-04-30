import { useEffect } from 'react';
import PodcastPage from './PodcastPage.jsx';

/**
 * Campaign wrapper — renders the full podcast page but fires a tracking
 * pixel with the unique campaign code. The code is generated per-contact
 * in Loki and lets us identify who clicked the InMail link.
 */
export default function PodcastCampaign({ code }) {
  useEffect(() => {
    if (!code) return;

    /* Fire tracking beacon to Loki Insight */
    const payload = {
      code,
      page: 'podcast',
      referrer: document.referrer,
      ua: navigator.userAgent,
      ts: new Date().toISOString(),
    };

    /* Use sendBeacon for reliability (fires even on quick navigations) */
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        'https://insight.coherence.digital/api/campaign/track',
        new Blob([JSON.stringify(payload)], { type: 'application/json' })
      );
    } else {
      fetch('https://insight.coherence.digital/api/campaign/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    }
  }, [code]);

  return <PodcastPage />;
}
