import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "react-router";
import Analytics from "./components/Analytics";
import CookieConsent from "./components/CookieConsent";
import CalFloatingButton from "./components/CalFloatingButton";
import "./styles/global.css";

export function meta() {
  return [
    { title: "Coherence Digital — Technology Consultancy" },
    { name: "description", content: "Coherence Digital is a technology consultancy delivering digital transformation, AI solutions and enterprise software." },
    { property: "og:site_name", content: "Coherence Digital" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://storage.googleapis.com/core-dorada-media-stg/coh/logo.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@coherencedigit" },
    { name: "theme-color", content: "#0f172a" },
  ];
}

export function Layout({ children }) {
  const location = useLocation();
  // /canvas-preview is rendered inside an iframe by the Loki canvas builder.
  // Suppress site chrome (cookie banner, cal button, analytics, skip link)
  // so only the page content is visible in the frame.
  const isCanvasPreview = location?.pathname?.startsWith("/canvas-preview");
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate" hrefLang="en-GB" href="https://coherence.digital/" />
        <link rel="alternate" hrefLang="x-default" href="https://coherence.digital/" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <Meta />
        <Links />
      </head>
      <body>
        {!isCanvasPreview && (
          <a className="skip-link" href="#main-content">Skip to main content</a>
        )}
        {children}
        {!isCanvasPreview && <Analytics />}
        {!isCanvasPreview && <CookieConsent />}
        {!isCanvasPreview && <CalFloatingButton />}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
