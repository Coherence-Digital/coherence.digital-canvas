/**
 * Pattern → React component map.
 *
 * Each entry maps a pattern name (as it appears in `pages/<slug>.yaml`'s
 * `sections[*].pattern` and in `patterns/<name>.yaml`'s `name` field) to the
 * React component that renders it. The wrapper layer (section background,
 * `.section` class, container etc.) is handled here, not in the inner
 * component, so the same component can be embedded with different surrounds.
 */

import HomeHero from '../components/HomeHero.jsx';
import FivePillars from '../components/FivePillars.jsx';
import PillarBanner from '../components/PillarBanner.jsx';

/** Ambient hero section — full-bleed dark background, container-padded inner. */
function HeroSection({ content, canvasMode }) {
  return (
    <section style={{ background: '#0f172a', color: 'white', padding: '6rem 0' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <HomeHero {...content} staticRender={canvasMode} />
      </div>
    </section>
  );
}

/** Five pillars on a muted surface. */
function FivePillarsSection({ content }) {
  return (
    <section className="section">
      <div className="container">
        <FivePillars {...content} />
      </div>
    </section>
  );
}

/** Pillar banner is full-bleed, no container. */
function PillarBannerSection({ content }) {
  return <PillarBanner items={content?.items ?? []} dark={!!content?.dark} />;
}

export const PATTERN_REGISTRY = {
  hero: HeroSection,
  'five-pillars': FivePillarsSection,
  'pillar-banner': PillarBannerSection,
};

export function getPatternComponent(name) {
  return PATTERN_REGISTRY[name] ?? null;
}
