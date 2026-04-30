# Coherence Frontend — Production Notes

## Purpose
Standalone React (Vite) frontend that faithfully mirrors coherence.digital.
Intended to launch as a static HTML site tonight, then connect to Wagtail headlessly later.

## Architecture
- **Framework**: React 19 + Vite 8
- **Routing**: react-router-dom v7 (BrowserRouter)
- **SEO**: react-helmet-async for per-page meta, JSON-LD, Open Graph
- **Styling**: CSS Modules per component + global theme variables
- **Fonts**: Neue Haas Grotesk (headings), system sans-serif fallback
- **Build**: `npm run build` → `/dist` (static, deployable to any CDN)
- **Animations**: Intersection Observer scroll-reveal (ScrollReveal component)
- **A11y**: Skip link, focus-visible, semantic HTML, ARIA labels

## Component Tree
```
Layout
├── Nav (fixed header, dropdown, mobile burger, scroll-shrink)
├── <Outlet /> (page content)
├── Footer (4-col: brand, nav, contact, social + legal bar)
└── ScrollReveal (global IntersectionObserver)

Shared:
├── SeoHead (Helmet: title, description, OG, Twitter, JSON-LD)
└── PillarBanner (infinite marquee for accreditations/trust signals)
```

## Wagtail Field Mapping
Each page component maps to Wagtail page models for future headless integration:

| React Component | Wagtail Model | Key Fields |
|---|---|---|
| HomePage | HomePage | hero_heading, hero_subtitle, hero_cta_text, hero_cta_url, featured_case_studies, client_logos |
| CapabilitiesPage | StandardPage (slug=capabilities) | body (StreamField), accreditations |
| CaseStudiesIndex | CaseStudyIndexPage | title, intro, hero_image |
| CaseStudyDetail | CaseStudyPage | title, client, hero_image, body, stats, quote, technologies |
| CompanyPage | StandardPage (slug=company) | body (StreamField with heading, paragraph, image blocks) |
| ArticlesPage | ArticleListPage | title, hero_subtitle |
| PodcastPage | StandardPage (slug=podcast) | title, introduction, body |
| EventsPage | StandardPage (slug=events) | title, introduction, body |
| NetZeroPage | StandardPage (slug=net-zero) | title, introduction, body |
| ContactPage | FormPage | title, intro, form_fields |

## Pages (build order)
1. [x] App shell: routing, Layout, Nav, Footer
2. [x] HomePage (hero, BBB feature, Bayer stats, NG feature, client logos, contact CTA)
3. [x] CapabilitiesPage (disciplines, accreditations banner, tech partners)
4. [x] CaseStudiesIndex + CaseStudyDetail (×4: Marriottopia, National Grid, BBB, Bayer)
5. [x] CompanyPage (team grid, Cohaesus Group)
6. [x] Content sub-pages: Articles (5 articles with metadata), Podcast (21 episodes across 2 seasons), Events (2 events with full detail), Net Zero (23 tCO₂ baseline, 2030 target, 4 pillars, 7-point commitment)
7. [x] ContactPage (form + contact info sidebar)
8. [x] SEO: SeoHead component, JSON-LD (Organization, Article), llms.txt, OG/Twitter meta
9. [ ] Font self-hosting (Neue Haas Grotesk) — currently system fallback
10. [x] Download Squarespace CDN images to own hosting (done 2026-03-26 → /coh/images/)
11. [ ] Connect contact form to backend API (currently mailto: fallback)
12. [ ] Visual regression testing suite

## Content Sources
All content scraped from https://coherence.digital/ on 2026-03-12.
Images self-hosted under /coh/images/ (migrated from Squarespace CDN 2026-03-26).

## Design Tokens (from source site)
- Primary pink: #d12d6b
- Dark/black: #1a1a1a
- White: #ffffff
- Light grey bg: #f7f7f7
- Font heading: "Neue Haas Grotesk Display", sans-serif
- Font body: "Neue Haas Grotesk Text", sans-serif
- Nav height: ~80px (shrinks to 64px on scroll)
- Max content width: 1200px
- Section padding: clamp(48px, 8vw, 96px)

## Accreditations (PillarBanner component)
- Crown Commercial Services Supplier
- Cyber Essentials Plus
- Greenly
- ISO 9001
- Living Wage Employer
- MemberWise Recognised Supplier 2025

## Known Gaps vs Source
- Source font is served from Squarespace assets; currently using system fallback
- Contact form uses mailto: fallback instead of server-side submission
- Team photos not available — using initial avatars as placeholder
- Capabilities page missing "Empowering Digital Transformation" section with puzzle cube image
- Article detail pages not yet implemented (links go to /content/articles/:slug but no route/page)
- Podcast episode links to Spotify/Apple are generic (not episode-specific)

## File Structure
```
frontend/
├── public/
│   ├── favicon.svg
│   ├── llms.txt
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Nav.jsx + Nav.module.css
│   │   ├── Footer.jsx + Footer.module.css
│   │   ├── Layout.jsx
│   │   ├── ScrollReveal.jsx
│   │   ├── PillarBanner.jsx + PillarBanner.module.css
│   │   └── SeoHead.jsx
│   ├── data/
│   │   ├── siteData.js (SITE, NAV_ITEMS, DISCIPLINES, TECH_PARTNERS, etc.)
│   │   ├── caseStudies.js (CASE_STUDIES array + getCaseStudy helper)
│   │   └── contentData.js (ARTICLES, PODCAST_EPISODES, EVENTS)
│   ├── pages/
│   │   ├── HomePage.jsx + HomePage.module.css
│   │   ├── CapabilitiesPage.jsx + CapabilitiesPage.module.css
│   │   ├── CaseStudiesIndex.jsx + CaseStudiesIndex.module.css
│   │   ├── CaseStudyDetail.jsx + CaseStudyDetail.module.css
│   │   ├── CompanyPage.jsx + CompanyPage.module.css
│   │   ├── ArticlesPage.jsx
│   │   ├── PodcastPage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── NetZeroPage.jsx
│   │   ├── ContentPage.module.css (shared content sub-page styles)
│   │   └── ContactPage.jsx + ContactPage.module.css
│   ├── styles/
│   │   ├── variables.css (design tokens)
│   │   └── global.css (reset, typography, layout, buttons, a11y)
│   ├── main.jsx (HelmetProvider + BrowserRouter)
│   └── App.jsx (route definitions)
├── index.html
├── vite.config.js
└── package.json
```

## Resume Instructions
If context window runs out:
1. Read this file for architecture overview and current state
2. Check the Pages checklist above — all core pages are COMPLETE
3. Remaining work: font hosting, image migration, form backend, visual testing
4. All data lives in `src/data/` — edit there for content changes
5. Run `npm run build` to verify build, `npm run dev` for development
