import { Link, redirect } from 'react-router';
import SeoHead from '../components/SeoHead.jsx';
import redirects from '../data/redirects.js';

export function loader({ request }) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/?$/, '/').toLowerCase();
  const pathNoSlash = url.pathname.replace(/\/+$/, '').toLowerCase();
  const target = redirects[path] || redirects[pathNoSlash];
  if (target) {
    return redirect(target, 301);
  }
  throw new Response("Not Found", { status: 404 });
}

export function meta() {
  return [
    { title: "Page not found" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Coherence" },
  ];
}

export default function NotFoundPage() {
  return (
    <>
      <SeoHead title="Page not found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container">
          <h1>404</h1>
          <p style={{ margin: '16px auto 32px', maxWidth: '480px' }}>
            Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>
          <Link to="/" className="btn btn--pink">Back to homepage</Link>
        </div>
      </section>
    </>
  );
}
