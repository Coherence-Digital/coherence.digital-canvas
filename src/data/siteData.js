/**
 * Coherence site content — single source of truth.
 * Maps 1:1 to Wagtail fields for future headless integration.
 */

/** Contact gateway — submissions stored, emailed to hello@coherence.digital, then forwarded to Formspree */
export const FORM_ACTION =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CONTACT_GATEWAY_URL) ||
  'https://forms.coherence.digital/api/v1/submit';

export const SITE = {
  name: 'Coherence',
  tagline: 'We make it make sense.',
  email: 'hello@coherence.digital',
  phone: '+44 7822 011613',
  address: {
    street: '11 Slingsby Place',
    city: 'London',
    country: 'United Kingdom',
    postcode: 'WC2E 9AB',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/coherence-digital/',
    youtube: 'https://www.youtube.com/@DigitalTransformationSurvivors',
  },
  legal: 'Coherence is a trading name of Coherence Consulting Limited. Our company is registered in the UK, Registration #13606667. Our registered offices are at: Towngate House, 2-8 Parkstone Road, Poole, Dorset, BH15 2PW. We are registered for VAT. VAT # GB389732637. E&OE',
};

export const NAV_ITEMS = [
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Company', path: '/company' },
  { label: 'Content', path: '/content' },
  { label: 'Always On', path: '/always-on' },
];

export const DISCIPLINES = [
  {
    key: 'consulting',
    title: 'Consulting',
    subtitle: 'Understand',
    description: 'Human strategists and AI agents map your stakeholders, audiences and market \u2014 then keep that picture current, continuously. Not a one-off audit; a living understanding of your organisation.',
  },
  {
    key: 'concept',
    title: 'Concept',
    subtitle: 'Design',
    description: 'Research-led propositions shaped by human creativity and validated by data agents that test, learn and refine. From insight to prototype, every decision backed by evidence.',
  },
  {
    key: 'code',
    title: 'Code',
    subtitle: 'Build',
    description: 'Secure technology platforms assembled by engineers, maintained by automated pipelines that monitor, patch and optimise around the clock. Your platform rebuilt in days, not months.',
  },
  {
    key: 'context',
    title: 'Context',
    subtitle: 'Measure',
    description: 'Real-time dashboards and decision agents that surface what\u2019s working, what isn\u2019t, and what to do about it \u2014 not quarterly, but always. Every metric tied to a business outcome.',
  },
  {
    key: 'care',
    title: 'Care',
    subtitle: 'Run',
    description: 'Your digital platform is never finished. Our operations layer keeps it secure, performant and continuously improving \u2014 agent-assisted, human-governed.',
  },
];

export const PIPELINES = [
  {
    key: 'code-ops',
    title: 'Code Ops',
    description: 'Site migration, design system extraction, headless builds and enrichment.',
    value: 'Your website rebuilt in days not months \u2014 scanned, extracted, rebuilt and enriched by agents, reviewed by humans.',
  },
  {
    key: 'content-ops',
    title: 'Content Ops',
    description: 'Content migration, research, drafting, enrichment and evaluation.',
    value: 'Content that writes itself \u2014 researched, drafted and optimised by AI, approved by your team.',
  },
  {
    key: 'decision-ops',
    title: 'Decision Ops',
    description: 'Request routing, task estimation, value assessment and prioritisation.',
    value: 'Every request triaged, estimated and routed in minutes \u2014 not stuck in an inbox.',
  },
  {
    key: 'security-ops',
    title: 'Security Ops',
    description: 'Monitoring, patching, permissions and compliance scanning.',
    value: 'Continuous security, not annual audits \u2014 vulnerabilities found and fixed before they matter.',
  },
  {
    key: 'context-ops',
    title: 'Context Ops',
    description: 'Shared state, knowledge graphs and cross-pipeline intelligence.',
    value: 'Every agent knows what every other agent knows \u2014 no silos, no repeated questions.',
  },
];

export const TECH_PARTNERS = [
  {
    name: 'Wagtail',
    description: 'The leading Python CMS built on Django. We use Wagtail to deliver fast, flexible, accessible websites with structured content models and a best-in-class editorial experience.',
    logo: '/coh/partners/wagtail.png',
  },
  {
    name: 'Amazon Web Services',
    description: 'We are experts in auto-scaling cloud infrastructure, serverless solutions and agentic artificial intelligence platforms on one of the world\u2019s biggest hosting platforms.',
    logo: '/coh/partners/aws.png',
  },
  {
    name: 'Drupal',
    description: 'The open source .php behemoth behind countless high profile websites. We use Drupal DXP to power multi-site applications at a single codebase.',
    logo: '/coh/partners/drupal.webp',
  },
  {
    name: 'Google Cloud',
    description: 'As Google Cloud Partners, we offer scalable, secure, enterprise AI solutions.',
    logo: '/coh/partners/google-cloud.png',
  },
  {
    name: 'Umbraco',
    description: 'Scalable, secure, enterprise open source DXP solutions on the .NET Azure platform.',
    logo: '/coh/partners/umbraco.png',
  },
];

export const ACCREDITATIONS = [
  { name: 'Crown Commercial Services Supplier', image: '/coh/badges/crown-commercial.png' },
  { name: 'Cyber Essentials Plus', image: '/coh/badges/cyber-essentials.png' },
  { name: 'Greenly', image: '/coh/badges/greenly.png' },
  { name: 'ISO 9001', image: '/coh/badges/iso-9001.webp' },
  { name: 'Living Wage Employer', image: '/coh/badges/living-wage.png' },
  { name: 'MemberWise Recognised Supplier 2025', image: '/coh/badges/memberwise-2025.jpg' },
];

export const CLIENT_LOGOS = [
  { name: 'Bayer', src: '/coh/images/clients/bayer.webp' },
  { name: 'ParalympicsGB', src: '/coh/images/clients/paralympicsgb.png' },
  { name: 'National Grid', src: '/coh/images/clients/national-grid.png' },
];

export const TEAM = [
  { name: 'Julian Tedstone', role: 'Strategy', image: '/coh/team/julian-tedstone.png', linkedin: 'https://www.linkedin.com/in/juliantedstone/' },
  { name: 'Natalie Osborn', role: 'Operations', image: '/coh/team/natalie-osborn.png', linkedin: 'https://www.linkedin.com/in/natalie-osborn/' },
  { name: 'Isidro Garrido', role: 'Technology', image: '/coh/team/isidro-garrido.png', linkedin: 'https://www.linkedin.com/in/isidro-garrido/' },
  { name: 'Ali Moore', role: 'Delivery', image: '/coh/team/ali-moore.png', linkedin: 'https://www.linkedin.com/in/alisonmoore/' },
  { name: 'Emily Baines', role: 'Marketing', image: '/coh/team/emily-baines.png', linkedin: 'https://www.linkedin.com/in/emilybaines/' },
];
