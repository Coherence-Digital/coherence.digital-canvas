/**
 * Case study content — maps to Wagtail CaseStudyPage model.
 */

export const CASE_STUDIES = [
  {
    slug: 'marriottopia',
    title: 'The future of hospitality is here. Marriottopia.',
    client: 'Marriott',
    date: '2025-10-07',
    tags: ['Hospitality', 'AI', 'Innovation'],
    thumbnail: '/coh/marriottopia-thumb.png',
    heroImage: '/coh/images/case-studies/marriottopia-hero.png',
    intro: 'In March 2024, Marriott hosted Marriottopia, its inaugural major conference in six years, bringing together over 800 senior leaders to explore hospitality\u2019s future direction.',
    sections: [
      {
        heading: 'Introducing the Digital Human',
        body: 'Coherence developed an AI-driven, voice-interactive avatar embodying the \u201cCustomer of the Future.\u201d The system leveraged Marriott-specific training data to engage in spontaneous, contextually relevant conversations during live panel discussions.',
      },
      {
        heading: 'Technology Integration and Innovation',
        body: 'The solution integrated large language models, natural language processing, and custom middleware to maintain brand voice and personality. Response latency improved from 20 seconds to real-time. Audiovisual infrastructure was optimised for speech intelligibility and visual quality across a 20\u00d75 metre stage.',
      },
      {
        heading: 'Human-Machine Interaction',
        body: 'Panelists received specialised coaching to facilitate natural dialogue with the digital character, enabling authentic, unscripted exchanges that connected with attendees.',
      },
      {
        heading: 'Conference-Wide AI Hosting',
        body: 'A second avatar named Obaya served as digital master of ceremonies, introducing sessions, facilitating participant navigation, and handling logistical announcements with personality consistency.',
      },
    ],
    vimeoId: '1130220243',
    cta: { text: 'Ask us about Digital Humans', url: '/contact' },
    author: 'Julian Tedstone',
  },
  {
    slug: 'national-grid',
    title: 'Helping the UK\u2019s Drive to Net Zero by Enabling National Grid\u2019s Multi-Site Strategy',
    client: 'National Grid',
    date: '2025-09-02',
    tags: ['Energy', 'Infrastructure', 'Sustainability'],
    thumbnail: '/coh/natgrid-thumb.png',
    heroImage: '/coh/images/case-studies/national-grid-hero.png',
    intro: 'National Grid operated four separate Content Management Systems across business units, creating operational inefficiencies and inconsistent user experiences.',
    sections: [
      {
        heading: 'The Challenge',
        body: 'Their primary website suffered from poor mobile navigation, contained over 250 outdated pages, and lacked flexibility for rapid content updates. The organisation needed to consolidate these systems, improve usability, and reduce development costs while preparing infrastructure to migrate their US site to the same platform.',
      },
      {
        heading: 'Strategic Platform Consolidation',
        body: 'Rather than modifying existing infrastructure, a complete rebuild using Acquia\u2019s Site Studio was implemented. This eliminated technical debt and streamlined four CMS platforms into one consolidated system.',
      },
      {
        heading: 'Enhanced User Experience',
        body: 'Redesigned mobile navigation to eliminate overlapping issues. Removed 250+ outdated pages through comprehensive content audit. Implemented design consistency and UX standards platform-wide.',
      },
      {
        heading: 'Low-Code Development',
        body: 'Site Studio\u2019s visual interface enabled rapid page creation and editing, reduced development resource dependency, and allowed content teams to build complex layouts independently with reusable design patterns.',
      },
    ],
    quote: {
      text: 'The new platform provides us with the agility and scalability we need to continuously improve our user experience while significantly reducing our operational complexity. We now have a modern, future-proof foundation that enables us to focus on innovation rather than maintenance.',
      attribution: 'National Grid Digital Team',
    },
    technologies: ['Acquia', 'Amazon Web Services', 'Drupal'],
    author: 'Julian Tedstone',
  },
  {
    slug: 'british-business-bank',
    title: 'Empowering British Business Bank with Scalable and Unified Digital Experiences',
    client: 'British Business Bank',
    date: '2025-09-01',
    tags: ['Finance', 'Banking', 'Government'],
    thumbnail: '/coh/bbb-thumb.png',
    heroImage: '/coh/images/case-studies/british-business-bank-hero.png',
    intro: 'The UK\u2019s government-owned economic development bank supporting smaller businesses through loans, guarantees, and venture capital via subsidiaries including British Patient Capital.',
    sections: [
      {
        heading: 'The Challenge',
        body: 'The UK government announced a \u00a3365 million Future Fund: Breakthrough scheme in March 2021. British Patient Capital needed to launch the programme aligned with the Chancellor\u2019s Budget speech under strict confidentiality and an immovable deadline. Meanwhile, BBB\u2019s digital ecosystem was complex and inconsistent \u2014 multiple sites served different audiences creating fragmented experiences.',
      },
      {
        heading: 'Our Approach',
        body: 'Audience-centred design clarified information needs. A modular, component-based approach enabled rapid delivery and reusability. Discovery and audit phases included stakeholder interviews, technical analysis, and content audits to streamline navigation and create a unified platform vision.',
      },
      {
        heading: 'From Transformation to Optimisation',
        body: 'A single platform now powers the rationalised web estate with low-code editing for instantaneous publishing by non-technical editors. Decentralised publishing empowers business unit editing teams while centralised governance maintains brand, accessibility, UX, and technical oversight.',
      },
    ],
    quote: {
      text: 'From the outset, Coherence understood the time-sensitive, confidential nature of the project. They delivered on time and on budget with no complications.',
      attribution: 'Amanda Madigan, British Business Bank',
    },
    technologies: ['Acquia', 'Drupal'],
    author: 'Julian Tedstone',
  },
  {
    slug: 'bayer',
    title: 'Accelerating Bayer\u2019s Digital Transformation with a Global Primary Design System',
    client: 'Bayer',
    date: '2025-08-31',
    tags: ['Pharmaceuticals', 'Global', 'Design Systems'],
    thumbnail: '/coh/bayer-thumb.png',
    heroImage: '/coh/images/case-studies/bayer-hero.png',
    intro: 'Bayer modernised its digital ecosystem to support 23 brands and hundreds of localised sites worldwide. The company needed a unified solution delivering brand consistency, streamlined operations, and marketing agility while dramatically accelerating time-to-market.',
    sections: [
      {
        heading: 'The Challenge',
        body: 'As their legacy platform reached end-of-life, Bayer faced urgent modernisation needs. Decentralised hosting created inefficiencies and governance gaps. Inconsistent brand implementation diluted global standards. Site creation was slow, requiring developer support at every stage.',
      },
      {
        heading: 'Primary Design System',
        body: 'Built a scalable design system as single source of truth for branding. Introduced reusable layout patterns and templates. Enabled local customisation while maintaining global consistency.',
      },
      {
        heading: 'Acquia Site Studio Integration',
        body: 'Implemented low-code editing experience reducing developer reliance. Equipped marketers with real-time page building and publishing capabilities. Leveraged Style Guide Manager for multi-brand theming.',
      },
    ],
    stats: [
      { value: '460', label: 'sites re-platformed to a single codebase' },
      { value: '40%', label: 'increase in speed to market' },
      { value: '581%', label: 'increase in organic visibility' },
      { value: '$15m', label: 'saved over 3 years' },
    ],
    quote: {
      text: 'I have to say, Coherence really know what they\u2019re doing\u2026',
      attribution: 'David Addeo, Global Head of Consumer Platform, Bayer Consumer Health',
    },
    vimeoId: '707706198',
    technologies: ['Acquia', 'Drupal'],
    author: 'Julian Tedstone',
  },
];

export function getCaseStudy(slug) {
  return CASE_STUDIES.find(cs => cs.slug === slug) || null;
}
