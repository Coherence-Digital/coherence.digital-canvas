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
import ImageBlock from '../components/ImageBlock.jsx';
import Heading from '../components/Heading.jsx';
import ButtonBlock from '../components/ButtonBlock.jsx';
import Spacer from '../components/Spacer.jsx';
import Divider from '../components/Divider.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import TextImage from '../components/TextImage.jsx';
import CardGrid from '../components/CardGrid.jsx';
import Quote from '../components/Quote.jsx';
import Faq from '../components/Faq.jsx';
import LogoGrid from '../components/LogoGrid.jsx';
import VideoEmbed from '../components/VideoEmbed.jsx';
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

/** Single image with optional caption. */
function ImageBlockSection({ content }) {
  return (
    <section className="section">
      <ImageBlock
        image={content?.image}
        caption={content?.caption}
        width={content?.width}
        aspect={content?.aspect}
      />
    </section>
  );
}

/** Standalone heading. */
function HeadingSection({ content }) {
  return (
    <section className="section">
      <Heading
        text={content?.text}
        level={content?.level}
        size={content?.size}
        align={content?.align}
        width={content?.width}
      />
    </section>
  );
}

/** Standalone CTA button. */
function ButtonSection({ content }) {
  return (
    <section className="section">
      <ButtonBlock cta={content?.cta} variant={content?.variant} align={content?.align} />
    </section>
  );
}

/** Vertical whitespace. */
function SpacerSection({ content }) {
  return <Spacer size={content?.size} />;
}

/** Horizontal divider. */
function DividerSection({ content }) {
  return (
    <section className="section">
      <Divider variant={content?.variant} width={content?.width} />
    </section>
  );
}

/** Full-bleed CTA banner. */
function CtaBannerSection({ content }) {
  return (
    <CtaBanner
      heading={content?.heading}
      subhead={content?.subhead}
      cta={content?.cta}
      dark={content?.dark}
      align={content?.align}
    />
  );
}

/** Text + image side-by-side. */
function TextImageSection({ content }) {
  return (
    <section className="section">
      <TextImage
        heading={content?.heading}
        body={content?.body}
        image={content?.image}
        cta={content?.cta}
        image_position={content?.image_position}
      />
    </section>
  );
}

/** Card grid. */
function CardGridSection({ content }) {
  return (
    <section className="section">
      <CardGrid heading={content?.heading} cards={content?.cards} columns={content?.columns} />
    </section>
  );
}

/** Pull quote. */
function QuoteSection({ content }) {
  return (
    <section className="section">
      <Quote
        text={content?.text}
        attribution={content?.attribution}
        role={content?.role}
        align={content?.align}
      />
    </section>
  );
}

/** FAQ accordion list. */
function FaqSection({ content }) {
  return (
    <section className="section">
      <Faq heading={content?.heading} items={content?.items} />
    </section>
  );
}

/** Logo grid. */
function LogoGridSection({ content }) {
  return (
    <section className="section">
      <LogoGrid heading={content?.heading} logos={content?.logos} columns={content?.columns} />
    </section>
  );
}

/** Embedded video. */
function VideoSection({ content }) {
  return (
    <section className="section">
      <VideoEmbed url={content?.url} caption={content?.caption} width={content?.width} />
    </section>
  );
}

export const PATTERN_REGISTRY = {
  hero: HeroSection,
  'five-pillars': FivePillarsSection,
  'pillar-banner': PillarBannerSection,
  'rich-text': RichTextSection,
  image: ImageBlockSection,
  heading: HeadingSection,
  button: ButtonSection,
  spacer: SpacerSection,
  divider: DividerSection,
  'cta-banner': CtaBannerSection,
  'text-image': TextImageSection,
  'card-grid': CardGridSection,
  quote: QuoteSection,
  faq: FaqSection,
  'logo-grid': LogoGridSection,
  video: VideoSection,
};

export function getPatternComponent(name) {
  return PATTERN_REGISTRY[name] ?? null;
}
