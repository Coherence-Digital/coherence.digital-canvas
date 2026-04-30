import { useState, useEffect } from "react";

const STORAGE_KEY = "cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const prefs = JSON.parse(stored);
        window.__updateConsent?.(prefs);
      } catch { /* ignore corrupt storage */ }
    } else {
      setVisible(true);
    }
  }, []);

  function accept(analytics, marketing) {
    const prefs = { analytics, marketing };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    window.__updateConsent?.(prefs);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div role="dialog" aria-label="Cookie consent" style={styles.banner}>
      <div style={styles.inner}>
        <p style={styles.text}>
          We use cookies for analytics and marketing. You can accept all or only
          essential cookies.{" "}
          <a href="/privacy" style={styles.link}>Privacy policy</a>
        </p>
        <div style={styles.buttons}>
          <button onClick={() => accept(true, true)} style={styles.btnPrimary}>
            Accept all
          </button>
          <button onClick={() => accept(false, false)} style={styles.btnSecondary}>
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  banner: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
  },
  inner: {
    maxWidth: "520px",
    width: "100%",
    background: "rgba(26, 26, 26, 0.98)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(209, 45, 107, 0.2)",
    borderRadius: "16px",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    color: "#fff",
    fontSize: "0.875rem",
    lineHeight: 1.5,
    boxShadow: "0 24px 48px rgba(0, 0, 0, 0.3)",
  },
  text: { margin: 0 },
  link: { color: "#d12d6b", textDecoration: "underline" },
  buttons: { display: "flex", gap: "0.75rem" },
  btnSecondary: {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    padding: "0.5rem 1.25rem",
    borderRadius: "100px",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: 600,
  },
  btnPrimary: {
    background: "#d12d6b",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1.25rem",
    borderRadius: "100px",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: 600,
  },
};
