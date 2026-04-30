import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { NAV_ITEMS, SITE } from '../data/siteData.js';
import styles from './Nav.module.css';

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  /* Close mobile nav on route change */
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  /* Shrink header on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} ref={navRef}>
      <nav className={`${styles.nav} container`} aria-label="Main navigation">
        <Link to="/" className={styles.logo} aria-label={`${SITE.name} home`}>
          {/* Local copy from cms/media/coh/original_images/coh-header-logo.png */}
          <img src="/coh/original_images/coh-header-logo.png" alt="" className={styles.logoImg} width="160" height="44" />
        </Link>

        <button
          className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-expanded={mobileOpen}
          aria-controls="primary-nav"
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul id="primary-nav" className={`${styles.links} ${mobileOpen ? styles.linksOpen : ''}`}>
          {NAV_ITEMS.map(item => (
            <li key={item.path} className={item.children ? styles.hasDropdown : ''}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? styles.active : ''}
                {...(item.children ? { 'aria-haspopup': 'true' } : {})}
              >
                {item.label}
              </NavLink>
              {item.children && (
                <ul className={styles.dropdown} role="list">
                  {item.children.map(child => (
                    <li key={child.path}>
                      <NavLink to={child.path}>{child.label}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link to="/contact" className={`btn btn--pink ${styles.cta}`}>Get in touch</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
