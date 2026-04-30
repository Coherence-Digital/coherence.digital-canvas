import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import ScrollReveal from './ScrollReveal.jsx';

export default function Layout() {
  const { pathname } = useLocation();

  /* Scroll to top + track page view on route change */
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", { page_path: pathname });
    }
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main" style={{ paddingTop: 'var(--coh-nav-height)' }}>
        <Outlet />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
