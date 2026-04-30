import { useEffect } from 'react';

export default function CalFloatingButton() {
  useEffect(() => {
    // Cal.com floating-popup embed
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          let s = d.head.appendChild(d.createElement('script'));
          s.src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ['initNamespace', namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    window.Cal('init', '25min', { origin: 'https://app.cal.com' });
    window.Cal.ns['25min']('floatingButton', {
      calLink: 'julian-tedstone/25min',
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
      buttonText: 'Book a chat',
    });
    window.Cal.ns['25min']('ui', { hideEventTypeDetails: false, layout: 'month_view' });

    // GA4 event tracking for Cal.com bookings
    window.Cal.ns['25min']('on', {
      action: 'bookingSuccessful',
      callback: function (e) {
        if (typeof window.gtag === 'function') {
          var eventType = (e.detail && e.detail.data && e.detail.data.eventType && e.detail.data.eventType.slug) || '25min';
          window.gtag('event', 'cal_booking', {
            event_type: eventType,
            cal_link: 'julian-tedstone/' + eventType,
            event_category: 'engagement',
          });
        }
      },
    });
  }, []);

  return null;
}
