import { useEffect } from 'react';

/**
 * Global Intersection-Observer that adds `.visible` to any `.reveal` element
 * once it scrolls into view. Mounted once from Layout.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
    };

    observe();

    /* Re-observe after route changes (MutationObserver catches new DOM) */
    const mutObs = new MutationObserver(observe);
    mutObs.observe(document.getElementById('main'), { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutObs.disconnect();
    };
  }, []);

  return null;
}
