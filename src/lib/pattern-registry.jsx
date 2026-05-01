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
import RichText from '../components/RichText.jsx';
import homeStyles from '../pages/HomePage.module.css';

/** Hero section — uses the live `.hero` / `.heroInner` classes so canvas
 *  rendering matches production exactly (light background, brand type scale). */
function HeroSection({ content, canvasMode }) {
  return (
    <section className={homeStyles.hero}>
      <div className={`container ${homeStyles.heroInner}`}>
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

/** Plain-text typographic block — heading + body paragraphs. */
function RichTextSection({ content }) {
  return (
    <section className="section">
      <RichText
        heading={content?.heading}
        body={content?.body}
        align={content?.align}
        width={content?.width}
      />
    </section>
  );
}

export const PATTERN_REGISTRY = {
  hero: HeroSection,
  'five-pillars': FivePillarsSection,
  'pillar-banner': PillarBannerSection,
  'rich-text': RichTextSection,
};

export function getPatternComponent(name) {
  return PATTERN_REGISTRY[name] ?? null;
}
