/**
 * Third-party analytics scripts with Google Consent Mode v2.
 *
 * Scripts are NOT loaded until the user grants consent via the
 * CookieConsent component. This avoids third-party cookie requests
 * before consent, which Lighthouse flags as a best-practices issue.
 *
 * All inline scripts use static, hardcoded strings (no user input),
 * so dangerouslySetInnerHTML is safe here.
 *
 * Scripts included:
 *   - Google Analytics 4  (G-PWCYLNLHGL)
 *   - Google Tag          (GT-57SK3WK)
 *   - LinkedIn Insight Tag (partner 8190554)
 *   - Apollo.io Website Tracker (appId 69c59cd0f5ce170021ebfaac)
 *
 * reCAPTCHA is loaded only on the contact page where it's needed.
 */

const GA_ID = "G-PWCYLNLHGL";
const GT_ID = "GT-57SK3WK";
const LI_PARTNER_ID = "8190554";
const APOLLO_APP_ID = "69c59cd0f5ce170021ebfaac";

export default function Analytics() {
  return (
    <>
      {/* ── Consent handler — loads scripts only after consent ── */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
window.__updateConsent = function(prefs) {
  if (prefs.analytics && !window.__gaLoaded) {
    window.__gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: prefs.marketing ? 'granted' : 'denied',
      ad_user_data: prefs.marketing ? 'granted' : 'denied',
      ad_personalization: prefs.marketing ? 'granted' : 'denied'
    });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=${GT_ID}';
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', '${GT_ID}');
    gtag('config', '${GA_ID}', { send_page_view: false });
    gtag('event', 'page_view', { page_path: window.location.pathname });
  } else if (window.__gaLoaded && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: prefs.analytics ? 'granted' : 'denied',
      ad_storage: prefs.marketing ? 'granted' : 'denied',
      ad_user_data: prefs.marketing ? 'granted' : 'denied',
      ad_personalization: prefs.marketing ? 'granted' : 'denied'
    });
  }
  if (prefs.marketing && !window.__liLoaded) {
    window.__liLoaded = true;
    _linkedin_partner_id = "${LI_PARTNER_ID}";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    var b = document.createElement('script');
    b.type = 'text/javascript';
    b.async = true;
    b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    document.head.appendChild(b);
  }
  if (prefs.marketing && !window.__apolloLoaded) {
    window.__apolloLoaded = true;
    var n = Math.random().toString(36).substring(7);
    var a = document.createElement('script');
    a.async = true;
    a.defer = true;
    a.src = 'https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=' + n;
    a.onload = function() {
      if (window.trackingFunctions) {
        window.trackingFunctions.onLoad({ appId: '${APOLLO_APP_ID}' });
      }
    };
    document.head.appendChild(a);
  }
};`,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://px.ads.linkedin.com/collect/?pid=${LI_PARTNER_ID}&fmt=gif`}
        />
      </noscript>
    </>
  );
}
