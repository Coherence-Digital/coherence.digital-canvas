/**
 * Legacy URL → new URL redirect map for coherence.digital.
 *
 * Old site was Webflow-based with different URL structure.
 * Each key is the old path (lowercase, with trailing slash).
 * The NotFoundPage loader issues a 301 redirect when a match is found.
 */
const redirects = {
  // Old top-level paths → new equivalents
  "/articles/": "/content/articles/",
  "/articles": "/content/articles/",
  "/blog/": "/content/articles/",
  "/blog": "/content/articles/",
  "/insights/": "/content/articles/",
  "/insights": "/content/articles/",
  "/news/": "/content/articles/",
  "/news": "/content/articles/",
  "/resources/": "/content/",
  "/resources": "/content/",
  "/content-1/": "/content/",
  "/content-1": "/content/",

  // Old service/about paths
  "/about/": "/company/",
  "/about": "/company/",
  "/team/": "/company/",
  "/team": "/company/",
  "/services/": "/capabilities/",
  "/services": "/capabilities/",
  "/what-we-do/": "/capabilities/",
  "/what-we-do": "/capabilities/",
  "/how-we-work/": "/capabilities/",
  "/how-we-work": "/capabilities/",

  // Old work/portfolio paths
  "/work/": "/case-studies/",
  "/work": "/case-studies/",
  "/projects/": "/case-studies/",
  "/projects": "/case-studies/",
  "/portfolio/": "/case-studies/",
  "/portfolio": "/case-studies/",
  "/our-work/": "/case-studies/",
  "/our-work": "/case-studies/",
  "/clients/": "/case-studies/",
  "/clients": "/case-studies/",

  // Old case study tag pages
  "/case-studies/tag/energy/": "/case-studies/",
  "/case-studies/tag/energy": "/case-studies/",
  "/case-studies/tag/infrastructure/": "/case-studies/",
  "/case-studies/tag/infrastructure": "/case-studies/",
  "/case-studies/tag/sustainability/": "/case-studies/",
  "/case-studies/tag/sustainability": "/case-studies/",

  // Chat → contact
  "/chat/": "/contact/",
  "/chat": "/contact/",

  // Careers
  "/careers/": "/company/",
  "/careers": "/company/",
  "/jobs/": "/company/",
  "/jobs": "/company/",
  "/culture/": "/company/",
  "/culture": "/company/",

  // Events
  "/events/": "/content/events/",
  "/events": "/content/events/",

  // Old Webflow article slugs (with random suffixes)
  "/articles/blog-post-title-one-h8lw4-4h82j/": "/content/articles/",
  "/articles/blog-post-title-one-h8lw4-4h82j": "/content/articles/",

  // Old event slugs
  "/events/event-one-hkx2l-7cd36/": "/content/events/",
  "/events/event-one-hkx2l-7cd36": "/content/events/",
  "/events/hospitality-tech-expo/": "/content/events/",
  "/events/hospitality-tech-expo": "/content/events/",

  // Old podcast paths (Webflow structure)
  "/podcast/": "/content/podcast/",
  "/podcast": "/content/podcast/",
  "/podcast/season-2/": "/content/podcast/",
  "/podcast/season-2": "/content/podcast/",
  "/podcast/v/episode-8-simon-sanett-national-grid/": "/content/podcast/national-grid-product-thinking/",
  "/podcast/v/episode-8-simon-sanett-national-grid": "/content/podcast/national-grid-product-thinking/",
  "/podcast/v/3m368jbzfpk3a7cpj7g6cndntyxhjj/": "/content/podcast/",
  "/podcast/v/3m368jbzfpk3a7cpj7g6cndntyxhjj": "/content/podcast/",
  "/podcast/v/4x956rhjsgdtsaff9ryd3pjpswnp8s/": "/content/podcast/",
  "/podcast/v/4x956rhjsgdtsaff9ryd3pjpswnp8s": "/content/podcast/",
  "/podcast/v/daily-calm-yyhd4-4lb4r/": "/content/podcast/",
  "/podcast/v/daily-calm-yyhd4-4lb4r": "/content/podcast/",
  "/podcast/v/how-to-create-an-under-construction-page-nmhkn-et8z6-24zkf/": "/content/podcast/",
  "/podcast/v/how-to-create-an-under-construction-page-nmhkn-et8z6-24zkf": "/content/podcast/",
  "/podcast/v/pjhlkdf4m7hh6sx592md2paxrt252w/": "/content/podcast/",
  "/podcast/v/pjhlkdf4m7hh6sx592md2paxrt252w": "/content/podcast/",

  "/podcast/v/everything-to-sell-anything-427ge-88xsk-fz95s": "/content/podcast/",
  "/podcast/v/it-is-nhsde-3akh4-fac23": "/content/podcast/",
  "/podcast/v/john-mcenroe-does-voice-over-now-zpk5h-tc9nt-9f34r": "/content/podcast/",
  "/podcast/v/planet-earth-mejnx-d2a8y-cz48y": "/content/podcast/",
  "/podcast/v/xge8krwcb4a9nm2dxy5dyyc3gpl8th": "/content/podcast/",
  "/podcast/season-1": "/content/podcast/",

  // Old /work/ paths
  "/work/national-grid-eso/": "/case-studies/national-grid/",
  "/work/national-grid-eso": "/case-studies/national-grid/",

  // Old net-zero path (now under /content/)
  "/net-zero/": "/content/net-zero/",
  "/net-zero": "/content/net-zero/",

  // Misc
  "/home/": "/",
  "/home": "/",
};

export default redirects;
