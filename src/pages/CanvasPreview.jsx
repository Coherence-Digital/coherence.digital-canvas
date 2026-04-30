import { useEffect, useState, useRef } from 'react';
import yaml from 'js-yaml';
import { YamlPage } from '../lib/YamlPage.jsx';
import '../styles/global.css';

/**
 * /canvas-preview/:slug — bare-bones page that renders pages/<slug>.yaml from
 * the same repo (or accepts a YAML string via postMessage from a parent
 * window, used by the Loki canvas builder iframe).
 *
 * Two render paths:
 *  1) URL ?yaml=<base64> on initial load (handy for direct testing)
 *  2) postMessage { source: "canvas", type: "load", doc: PageDocument }
 *     from window.parent — preferred path used by the canvas iframe.
 *
 * On click of any section we postMessage back
 *  { source: "canvas-preview", type: "select" | "hover" | "hoverend",
 *    sectionId, pattern }
 *
 * NB: this page deliberately renders OUTSIDE the standard site Layout —
 * no Nav, no Footer, no analytics. The canvas iframe must show only the
 * rendered page content.
 */

export function meta() {
  return [{ title: 'Canvas Preview · Coherence POC' }];
}

export default function CanvasPreview() {
  const [doc, setDoc] = useState(null);
  const [error, setError] = useState(null);
  const readyPosted = useRef(false);

  // Initial load — try URL ?yaml=, else send "ready" and wait for postMessage.
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const inline = url.searchParams.get('yaml');
      if (inline) {
        // atob returns binary string; coerce through UTF-8 so em-dashes etc. survive.
        const binary = atob(inline);
        const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
        const decoded = new TextDecoder('utf-8').decode(bytes);
        const parsed = yaml.load(decoded);
        if (parsed && typeof parsed === 'object') setDoc(parsed);
      }
    } catch (err) {
      setError(`Failed to parse inline YAML: ${err.message}`);
    }
    if (window.parent && window.parent !== window && !readyPosted.current) {
      window.parent.postMessage({ source: 'canvas-preview', type: 'ready' }, '*');
      readyPosted.current = true;
    }
  }, []);

  // Listen for parent → iframe messages.
  useEffect(() => {
    const onMessage = (e) => {
      const data = e.data;
      if (!data || data.source !== 'canvas') return;
      if (data.type === 'load') {
        try {
          // doc may arrive as either a parsed object or a yaml string
          if (typeof data.doc === 'string') {
            setDoc(yaml.load(data.doc));
          } else {
            setDoc(data.doc);
          }
          setError(null);
        } catch (err) {
          setError(`Failed to parse YAML: ${err.message}`);
        }
      } else if (data.type === 'highlight') {
        // Future: scroll to / outline a specific section
        const el = document.querySelector(`[data-canvas-section-id="${data.sectionId}"]`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  // Broadcast section rects to parent so it can overlay chrome (labels,
  // drag handles, drop zones) on top of the iframe at the right positions.
  // Re-broadcast on doc change, window resize, and scroll.
  useEffect(() => {
    if (!doc) return undefined;
    const broadcast = () => {
      if (!window.parent || window.parent === window) return;
      const els = document.querySelectorAll('[data-canvas-section-id]');
      const rects = Array.from(els).map((el) => {
        const r = el.getBoundingClientRect();
        return {
          sectionId: el.getAttribute('data-canvas-section-id'),
          pattern: el.getAttribute('data-canvas-pattern'),
          top: r.top + window.scrollY,
          left: r.left,
          width: r.width,
          height: r.height,
        };
      });
      window.parent.postMessage(
        {
          source: 'canvas-preview',
          type: 'rects',
          rects,
          documentHeight: document.documentElement.scrollHeight,
          scrollY: window.scrollY,
          viewportHeight: window.innerHeight,
        },
        '*'
      );
    };
    // First broadcast after layout settles
    const id = setTimeout(broadcast, 50);
    const id2 = setTimeout(broadcast, 300);
    const onResize = () => broadcast();
    const onScroll = () => broadcast();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(id);
      clearTimeout(id2);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, [doc]);

  if (error) {
    return (
      <div style={{ padding: '4rem 2rem', fontFamily: 'system-ui, sans-serif' }}>
        <h1 style={{ fontSize: '1.5rem', color: '#b91c1c' }}>Canvas preview error</h1>
        <pre style={{ background: '#fef2f2', padding: '1rem', borderRadius: 4, fontSize: '0.85rem' }}>
          {error}
        </pre>
      </div>
    );
  }

  if (!doc) {
    return (
      <div
        style={{
          padding: '4rem 2rem',
          fontFamily: 'system-ui, sans-serif',
          color: '#6b7280',
          textAlign: 'center',
        }}
      >
        Waiting for canvas to send page data…
      </div>
    );
  }

  return (
    <main id="main-content" style={{ background: 'white' }}>
      <YamlPage pageData={doc} canvasMode />
    </main>
  );
}
