import { Fragment } from 'react';
import { getPatternComponent } from './pattern-registry.jsx';

/**
 * Render a parsed page YAML by mapping each section to its registered React
 * component. Used both by canvas-preview (live) and (eventually) by
 * production pages once head-forge emits page YAMLs.
 *
 * Props:
 *   - pageData: { slug, sections: [{ id, pattern, content }, ...] }
 *   - canvasMode: when true, wraps each section with selection markers and
 *     emits postMessage events to the parent (used by /canvas-preview).
 */
export function YamlPage({ pageData, canvasMode = false }) {
  if (!pageData) return null;
  const sections = Array.isArray(pageData.sections) ? pageData.sections : [];

  return (
    <Fragment>
      {sections.map((section) => {
        const Component = getPatternComponent(section.pattern);
        const content = section.content ?? {};
        if (!Component) {
          return canvasMode ? (
            <UnknownPattern key={section.id} sectionId={section.id} pattern={section.pattern} />
          ) : null;
        }
        const inner = <Component content={content} canvasMode={canvasMode} />;
        if (!canvasMode) return <Fragment key={section.id}>{inner}</Fragment>;
        return (
          <CanvasSectionFrame key={section.id} sectionId={section.id} pattern={section.pattern}>
            {inner}
          </CanvasSectionFrame>
        );
      })}
    </Fragment>
  );
}

function CanvasSectionFrame({ sectionId, pattern, children }) {
  const post = (type) => {
    if (typeof window === 'undefined' || !window.parent) return;
    window.parent.postMessage({ source: 'canvas-preview', type, sectionId, pattern }, '*');
  };
  return (
    <div
      data-canvas-section-id={sectionId}
      data-canvas-pattern={pattern}
      onMouseEnter={() => post('hover')}
      onMouseLeave={() => post('hoverend')}
      onClick={(e) => {
        // Stop link clicks etc bubbling up while in canvas mode
        e.preventDefault();
        e.stopPropagation();
        post('select');
      }}
      style={{ position: 'relative', cursor: 'pointer' }}
    >
      {children}
    </div>
  );
}

function UnknownPattern({ sectionId, pattern }) {
  return (
    <div
      data-canvas-section-id={sectionId}
      style={{
        padding: '3rem 2rem',
        background: '#fef3c7',
        color: '#78350f',
        textAlign: 'center',
        borderTop: '1px dashed #fbbf24',
        borderBottom: '1px dashed #fbbf24',
      }}
    >
      <strong>Unknown pattern:</strong> {pattern}
      <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.7 }}>
        Add it to <code>src/lib/pattern-registry.js</code>.
      </div>
    </div>
  );
}
