/**
 * Content data — Articles, Podcast episodes, Events.
 * Maps to Wagtail ArticlePage, PodcastEpisodePage, EventPage models.
 * Combined into a single feed, ordered by date.
 */

export const ARTICLES = [
  {
    slug: 'your-website-rebuilt-in-days-not-months',
    title: 'Your Website Rebuilt in Days, Not Months',
    author: 'Julian Tedstone',
    date: '2026-03-15',
    image: '/coh/content/article-rebuilt-in-days.jpg',
    intro: 'Replatforming used to mean eighteen months of discovery, migration headaches and a launch that was already out of date. Pop-up design systems change the equation entirely. Here is how we extract, build and deploy a governed front end in days.',
    sections: [
      { heading: 'The Replatforming Trap', body: 'Most organisations dread the word replatform. It conjures images of twelve-month programmes, frozen roadmaps and a go-live that feels more like a relief effort than a celebration. The problem is not the technology. It is the approach. Traditional migrations treat every site as a bespoke construction project. Every page is hand-built. Every component is debated. Every CMS quirk becomes a blocker. By the time the new site launches, the business has moved on and the whole cycle starts again.' },
      { heading: 'What a Pop-up Design System Actually Is', body: 'A pop-up design system starts with what you already have. We scan your live site, extract its visual language into design tokens (colours, typography, spacing, grid) and generate a governed component library. That library is headless. It does not care whether the back end is Drupal, Umbraco, Wagtail or a static API. It deploys anywhere that exposes content through an API. The result is a brand-consistent, accessible, performant front end that your editors can populate immediately. No six-month build. No waterfall handover. Days.' },
      { heading: 'Why This Matters for Enterprise and Public Sector', body: 'If you manage a complex web estate with multiple brands, markets or services, the maths changes dramatically. Instead of rebuilding each site individually, you extract one design system and deploy it across every channel. Bayer did this across 23 consumer health brands. National Grid consolidated four legacy CMSs into a single governed platform. For public sector organisations managing dozens of service sites under one brand, this approach means consistent citizen experiences, WCAG compliance baked in, and teams that can launch new services in days rather than quarters.' },
      { heading: 'The Five-Day Pattern', body: 'Day one: scan the live estate and extract tokens. Day two: generate the component library and validate against brand guidelines. Day three: connect the headless front end to the content API. Day four: populate, test, refine. Day five: go live. This is not a thought experiment. It is a repeatable pipeline we call CodeOps, and it runs the same way every time. The speed comes not from cutting corners but from eliminating the decisions that slow every traditional project down.' },
    ],
  },
  {
    slug: 'the-end-of-the-annual-redesign',
    title: 'The End of the Annual Redesign',
    author: 'Julian Tedstone',
    date: '2026-03-15',
    image: '/coh/content/article-end-of-redesign.jpg',
    intro: 'The three-year redesign cycle was never a technology problem. It was an operational one. Continuous improvement is not a philosophy. It is a delivery model. Here is what it looks like in practice.',
    sections: [
      { heading: 'The Redesign Cycle Is Broken', body: 'Every three to five years, organisations commission a major website redesign. The brief is always some version of "modernise the platform, improve the user experience, consolidate the technical debt." The agency delivers. Everyone celebrates. Then the slow decline begins. Small compromises accumulate. Content drifts from the design intent. Performance degrades. Accessibility regresses. Within eighteen months the conversation starts again: "We need a redesign."' },
      { heading: 'Why Continuous Improvement Is Different', body: 'Continuous improvement is not the same as ongoing support. Support is reactive. Someone reports a bug, you fix it. Continuous improvement is proactive. It means reviewing analytics every month and translating findings into prioritised enhancements. It means running accessibility audits on a schedule, not before a compliance deadline. It means optimising page speed as browsers and devices evolve, not as a one-off project. The website is a product, not a project. It has a backlog, a cadence and a team.' },
      { heading: 'The Run, Improve, Govern Model', body: 'We structure this around three interlocking activities. Run covers the operational basics: monitoring, patching, security updates, performance management. Improve is the proactive layer: user journey optimisation, content improvements, new feature development, all prioritised by impact. Govern provides the discipline: monthly reporting, quarterly roadmap reviews, backlog prioritisation. Together these three activities mean the website gets measurably better every month. Not every three years. Every month.' },
      { heading: 'What This Means for Your Budget', body: 'The total cost of continuous improvement is typically lower than the boom-and-bust redesign cycle. Instead of a large capital outlay every few years (with diminishing returns between cycles), you invest a steady operational budget that delivers compounding value. Your platform never falls behind. Your team never has to manage a painful migration. Your users never have to relearn an interface that changed overnight. The economics are better. The outcomes are better. The experience is better.' },
    ],
  },
  {
    slug: 'what-happens-when-your-agents-talk-to-each-other',
    title: 'What Happens When Your Agents Talk to Each Other',
    author: 'Julian Tedstone',
    date: '2026-03-15',
    image: '/coh/content/article-agents-talk.jpg',
    intro: 'Most organisations deploying AI have agents working in isolation. A content agent here, a security scanner there, a reporting bot somewhere else. The real value unlocks when they share context. We call that layer ContextOps.',
    sections: [
      { heading: 'The Silo Problem, Again', body: 'Organisations spent the last decade breaking down data silos between departments. Now the same pattern is repeating with AI agents. Marketing has a content generation tool. IT has a vulnerability scanner. Operations has a monitoring dashboard. None of them talk to each other. The content agent does not know the security team just patched a critical vulnerability on the page it is about to update. The monitoring system does not know a major content migration is underway, which is why traffic patterns look unusual. Each agent is individually useful but collectively blind.' },
      { heading: 'What ContextOps Does', body: 'ContextOps is the connective tissue between every pipeline we operate. It maintains a shared state: what has changed, what is being worked on, what decisions have been made, and why. When the CodeOps pipeline deploys a new component, ContextOps records it. When SecurityOps flags a dependency update, ContextOps routes that information to ContentOps so editors know which pages might be affected. When DecisionOps triages a new request, it already has the full picture of what is in flight.' },
      { heading: 'A Practical Example', body: 'A client asks us to add a new service page to their site. Without ContextOps, this triggers a chain of disconnected tasks: brief a copywriter, design the page, build it, test it, deploy it, monitor it. Each step waits for the last. With ContextOps, the request enters DecisionOps and is automatically enriched with context: the design system already has the right components, ContentOps has drafted initial copy based on existing service descriptions, SecurityOps has confirmed the deployment environment is clean. What used to take two weeks takes two days. Not because anyone rushed. Because nothing was repeated.' },
      { heading: 'Why This Matters at Scale', body: 'For organisations managing large digital estates, the compounding effect of shared context is transformative. Every pipeline gets faster because it does not start from scratch. Every decision is better because it is informed by the full picture. Every audit is simpler because the decision log is comprehensive and automatic. Context is not a nice-to-have. For any organisation serious about operating AI at scale, it is infrastructure.' },
    ],
  },
  {
    slug: '47-microsites-one-design-system',
    title: '47 Microsites, One Design System',
    author: 'Julian Tedstone',
    date: '2026-03-15',
    image: '/coh/content/article-one-design-system.jpg',
    intro: 'Large organisations accumulate microsites like barnacles on a hull. Each one made sense at the time. Together they create an ungovernable, inconsistent, expensive mess. There is a better way.',
    sections: [
      { heading: 'How We Got Here', body: 'It usually starts innocently. A campaign needs a landing page. A product launch needs its own site. A regional team builds something locally because the central platform cannot move fast enough. Five years later you have 47 microsites on six different platforms, three of which are no longer supported. Each has its own design, its own hosting, its own security posture. Nobody has a complete inventory. Updating the brand across all of them would take months of agency time. So it does not happen.' },
      { heading: 'The Consolidation Mistake', body: 'The instinct is to consolidate everything onto one platform. This is usually the right destination but the wrong approach. Traditional consolidation means a massive migration programme: audit everything, prioritise, migrate content, decommission old sites. It takes a year or more. Teams resist because they lose autonomy. By the time you finish, three new microsites have appeared. The pattern repeats.' },
      { heading: 'Design System as Governance Layer', body: 'The alternative is to govern at the design system level, not the platform level. Extract your brand into a portable, headless design system. Deploy that system as the front end for every site, regardless of what CMS sits behind it. The content stays where it is. The editors keep their tools. But every user-facing page now renders through a single, governed component library. Brand consistency, accessibility compliance and performance standards are enforced by the system, not by process documents that nobody reads.' },
      { heading: 'What Changes', body: 'The brand team gets a single source of truth for digital brand expression. The security team gets a unified front end to audit instead of 47 separate attack surfaces. The content teams keep their preferred CMS. The finance team stops paying for 47 sets of hosting, monitoring and maintenance. And when the brand evolves, you update the design system once and every site reflects the change. Not in six months. That afternoon.' },
    ],
  },
  {
    slug: 'run-improve-govern-a-new-model-for-website-operations',
    title: 'Run, Improve, Govern: A New Model for Website Operations',
    author: 'Julian Tedstone',
    date: '2026-03-15',
    image: '/coh/content/article-run-improve-govern.jpg',
    intro: 'Website support retainers have barely changed in twenty years. You pay a monthly fee. You raise tickets. Someone fixes things when they break. It is time for a better model.',
    sections: [
      { heading: 'The Support Retainer Problem', body: 'Traditional website support is a cost centre. Organisations pay for a bank of hours, use them reactively, and struggle to demonstrate value at renewal time. The conversation is always about utilisation rates and ticket volumes rather than outcomes. Teams end up hoarding hours for emergencies rather than investing them in improvements. The website stagnates. The retainer renews out of inertia rather than conviction. Everyone knows this is not working, but the alternative has never been clearly articulated.' },
      { heading: 'Run: Keeping the Lights On, Properly', body: 'The Run layer covers everything needed to keep a complex website secure, stable and performant. Proactive monitoring rather than waiting for users to report problems. Security patching on a defined schedule rather than when someone remembers. Performance tracking against real baselines rather than arbitrary targets. Backup and resilience management that is tested, not assumed. This is not glamorous work, but it is the foundation everything else depends on. Get it wrong and nothing else matters.' },
      { heading: 'Improve: Making It Better, Continuously', body: 'The Improve layer is where value compounds. Each month we review analytics, identify the highest-impact opportunities and implement improvements. That might mean optimising a key user journey that is leaking conversions. It might mean remediating accessibility issues before they become compliance problems. It might mean implementing structured data that improves search visibility. The point is that improvement is systematic, prioritised and continuous. Not a wish list. A backlog with clear criteria and measurable outcomes.' },
      { heading: 'Govern: The Discipline That Makes It Work', body: 'Governance is the layer most organisations are missing. Monthly operational reports that show what was done, what changed, and what it meant. Quarterly roadmap reviews that align improvement priorities with business objectives. Backlog prioritisation that balances quick wins with strategic investments. Without governance, run becomes routine and improve becomes ad hoc. With it, the website becomes a managed business asset that demonstrably improves over time. That is a conversation worth having at renewal.' },
    ],
  },
  {
    slug: 'a-special-message-from-coherence-santa',
    title: 'A special message from Coherence Santa',
    author: 'Coherence',
    date: '2025-12-09',
    image: '/coh/content/article-santa.png',
    intro: 'As 2025 draws to a close, the Coherence team reflects on an extraordinary year of growth, innovation and the partnerships that made it all possible.',
    sections: [
      { heading: 'A Year of Growth', body: 'From launching new digital platforms for global brands to expanding our team with some of the brightest minds in the industry, 2025 has been a year to remember. We\u2019ve delivered transformative projects across regulated industries, from financial services to the public sector, and we\u2019re proud of the impact our work has had.' },
      { heading: 'Looking Ahead', body: 'As we head into 2026, we\u2019re more excited than ever about the opportunities ahead. With new partnerships, expanded capabilities, and a renewed commitment to our 5C methodology, we\u2019re ready to help even more organisations navigate their digital transformation journeys. From all of us at Coherence \u2014 have a wonderful holiday season.' },
    ],
  },
  {
    slug: 'the-future-of-hospitality-technology-why-connection-matters',
    title: 'The Future of Hospitality Technology: Why Connection Matters',
    author: 'Julian Tedstone',
    date: '2025-10-07',
    image: '/coh/content/article-hospitality.png',
    intro: 'The hospitality industry is undergoing a technological revolution, but the most successful implementations keep human connection at the centre of every digital touchpoint.',
    sections: [
      { heading: 'Technology as an Enabler', body: 'In hospitality, technology should never replace the warmth of a personal welcome. Instead, it should enable staff to deliver exceptional experiences more consistently. From booking engines that remember guest preferences to CMS platforms that let local teams tell their own stories, the best tech is invisible to the end guest while empowering the people behind the scenes.' },
      { heading: 'The Connected Guest Journey', body: 'Modern guests expect a seamless journey from discovery to check-out. That means a website that performs beautifully on mobile, a booking flow that feels effortless, and communications that feel personal rather than automated. The properties that get this right see dramatic improvements in direct bookings and guest satisfaction scores.' },
      { heading: 'Building for the Future', body: 'Composable architecture is enabling hospitality brands to move faster than ever. By decoupling the content management layer from the booking engine and loyalty programme, operators can iterate on the guest experience without risking critical transactional systems. It\u2019s the kind of pragmatic architecture that delivers real competitive advantage.' },
    ],
  },
  {
    slug: 'design-systems-for-the-public-sector',
    title: 'Design Systems for the Public Sector \u2014 A Critical Tool for Modern Governance',
    author: 'Julian Tedstone',
    date: '2025-09-05',
    image: '/coh/content/article-design-systems.jpg',
    intro: 'Design systems are transforming how public sector organisations deliver digital services \u2014 ensuring consistency, accessibility and efficiency across hundreds of services and touchpoints.',
    sections: [
      { heading: 'Why Design Systems Matter in Government', body: 'Government digital services are used by everyone. Unlike commercial products where users can switch to a competitor, citizens have no choice but to use the services provided. That places a profound responsibility on the teams building these services to ensure they are accessible, consistent and trustworthy. A well-implemented design system is the foundation for meeting that responsibility at scale.' },
      { heading: 'Beyond a Component Library', body: 'A design system is far more than a collection of buttons and form fields. It codifies an organisation\u2019s design principles, accessibility standards and content patterns into a single source of truth. When done well, it reduces duplication of effort across teams, accelerates delivery, and ensures that every citizen interaction meets a consistent standard of quality.' },
      { heading: 'Implementation Challenges', body: 'The biggest challenge in public sector design systems isn\u2019t technical \u2014 it\u2019s organisational. Getting buy-in from multiple departments, each with their own priorities and legacy systems, requires patient stakeholder engagement and a clear demonstration of value. The organisations that succeed treat their design system as a product with its own roadmap, team and governance.' },
    ],
  },
  {
    slug: 'what-is-technical-debt',
    title: 'What is Technical Debt and Why Does it Kill Your Marketing Agility?',
    author: 'Julian Tedstone',
    date: '2025-09-05',
    image: '/coh/content/article-tech-debt.jpg',
    intro: 'Technical debt is the silent killer of marketing agility. Here\u2019s how to identify it, measure its impact, and build a business case for paying it down.',
    sections: [
      { heading: 'What is Technical Debt?', body: 'Technical debt is the accumulated cost of shortcuts, workarounds and deferred maintenance in your technology stack. Like financial debt, it accrues interest: every new feature takes longer to build, every change carries more risk, and your team spends more time fighting the platform than using it. For marketing teams, this manifests as campaigns that take weeks instead of days, content updates that require developer involvement, and integrations that simply don\u2019t work.' },
      { heading: 'The Marketing Impact', body: 'When your CMS is slow, your editors lose confidence. When your analytics pipeline is fragile, your data-driven decisions become guesswork. When your personalisation engine requires IT tickets to update segments, your customer experience falls behind competitors who can move in real time. Technical debt doesn\u2019t just slow down developers \u2014 it throttles the entire marketing operation.' },
      { heading: 'Building the Business Case', body: 'The key to addressing technical debt is making the invisible visible. Map the time your team wastes on workarounds. Quantify the campaigns that couldn\u2019t launch on time. Document the integrations that fail silently. Once leadership can see the cost in lost revenue and wasted effort, the investment in modernisation becomes an obvious business decision rather than a technical indulgence.' },
    ],
  },
  {
    slug: 'your-digital-transformation-needs-a-platform',
    title: 'Your Digital Transformation Needs a Platform',
    author: 'Julian Tedstone',
    date: '2019-03-11',
    image: '/coh/content/article-platform.jpg',
    intro: 'True digital transformation isn\u2019t about individual projects \u2014 it\u2019s about building a platform that enables continuous evolution and empowers every team in your organisation.',
    sections: [
      { heading: 'Projects vs Platforms', body: 'Most organisations approach digital transformation as a series of projects: redesign the website, implement a new CRM, migrate to the cloud. But projects have end dates, and when they finish, the organisation is left with a snapshot of what was needed at that moment. A platform approach instead creates the foundations for continuous improvement, giving teams the tools and infrastructure to evolve at their own pace.' },
      { heading: 'The Platform Mindset', body: 'A platform mindset means thinking about capabilities rather than deliverables. Instead of asking \u201cwhat website do we need?\u201d, ask \u201cwhat content management capabilities does the organisation need?\u201d Instead of specifying a CRM migration, define the customer data and insight capabilities that will drive growth. This shift in framing opens up architecture decisions and vendor choices that project-thinking would miss.' },
      { heading: 'Making It Real', body: 'Start by mapping your organisation\u2019s digital capabilities against maturity levels. Identify the gaps between where you are and where you need to be. Then build a roadmap that prioritises the capabilities with the highest impact, using composable architecture patterns that allow each capability to evolve independently. The result is a platform that grows with your organisation rather than constraining it.' },
    ],
  },
];

export function getArticle(slug) {
  return ARTICLES.find(a => a.slug === slug) || null;
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const PODCAST_EPISODES = {
  season2: [
    {
      title: 'Scott Brinker on AI agents, AEO and the new buyer journey',
      date: '2025-11-19', youtube: 'H_r4geJXuAc', slug: 'scott-brinker-ai-agents-aeo',
      description: 'The godfather of Martech joins the show. Scott Brinker unpacks the seismic shift from SEO to Answer Engine Optimisation, explains why AI agents are about to reshape the buyer journey, and shares what the next era of marketing technology really looks like \u2014 from someone who\u2019s been mapping it for two decades.',
    },
    {
      title: 'From 2,000 Sites to One: Nestl\u00e9\u2019s Drupal Journey with Antonella Severo',
      date: '2025-11-04', youtube: 'GOWfeF5H5qg', slug: 'nestle-drupal-journey-antonella-severo',
      description: 'How do you wrangle 2,000 websites into something manageable? Ask Antonella Severo. As the driving force behind Nestl\u00e9\u2019s global web platform, she took on one of the biggest Drupal consolidation projects on the planet \u2014 and lived to tell the tale. From building \u2018Lightness\u2019 (Nestl\u00e9\u2019s bespoke Drupal distribution) to giving markets \u2018freedom in a box\u2019, this is digital at the scale of the world\u2019s largest food company.',
    },
    {
      title: 'How Membership Organisations Shape Their Digital Future',
      date: '2025-10-22', youtube: 'B0TicinpJjM', slug: 'membership-organisations-digital-future',
      description: 'Alan Perestrello from HartSquare has spent years helping membership organisations and charities navigate the minefield of Martech and CRM. He pulls no punches on why so many digital transformations in the sector go sideways, what \u2018good\u2019 really looks like when you\u2019re building for members, and why the rise of AI-generated content is creating a flood of what he diplomatically calls \u2018slop\u2019.',
    },
    {
      title: 'Building the House, Furnishing 43 Markets: Helga Eriksson on Global Web and AI Shift',
      date: '2025-10-09', youtube: 'O7eSL0OBo7U', slug: 'helga-eriksson-global-web-ai',
      description: 'Helga Eriksson knows what it takes to build a global digital presence \u2014 she\u2019s done it across 43 markets. She shares the architecture decisions behind a truly scalable web platform, why local autonomy and global consistency don\u2019t have to be at odds, and how AI is quietly reshaping the way global teams work.',
    },
    {
      title: 'Leading with Empathy: Alessandra Canavesi on Digital Marketing for Global Investors',
      date: '2025-09-18', youtube: 'wrWX2NbW8iE', slug: 'alessandra-canavesi-digital-marketing',
      description: 'Alessandra Canavesi leads digital marketing at AXA Investment Managers with something refreshingly rare in financial services: genuine empathy. She opens up about leading multicultural teams across borders, bridging generational divides in the workplace, and why the best digital strategies start with understanding people \u2014 not platforms.',
    },
    {
      title: 'Cutting Through the Noise: Agility, MVPs, and Methods That Matter',
      date: '2025-09-17', youtube: 'B7C7__gaLLk', slug: 'agility-mvps-methods-that-matter',
      description: 'A no-nonsense look at what agility actually means when you strip away the buzzwords. We dig into why MVPs have become deeply misunderstood, which methods genuinely move the needle, and what separates teams that ship from teams that just sprint.',
    },
    {
      title: 'Sheep-Dip Agile and the Cost of Doing It Wrong',
      date: '2025-07-09', youtube: 'xd3viI34VEA', slug: 'sheep-dip-agile-cost',
      description: 'What happens when organisations \u2018do agile\u2019 without actually being agile? We coined a term for it: sheep-dip agile. This episode explores the real cost of transformation theatre \u2014 when the ceremonies are there but the culture isn\u2019t, and why going through the motions can be worse than not trying at all.',
    },
    {
      title: 'From Consultant to Catalyst: Rethinking Transformation with Purpose',
      date: '2025-07-11', youtube: 'iEBqcQuKRqo', slug: 'consultant-to-catalyst-transformation',
      description: 'The consulting industry has a problem: too many decks, not enough doing. This episode explores what happens when consultants stop advising and start catalysing \u2014 and why the best transformation partners are the ones trying to make themselves redundant.',
    },
    {
      title: 'Composability, Consolidation, and the CMS You Really Need',
      date: '2025-07-14', youtube: 'fGOpP-EXYqM', slug: 'composability-consolidation-cms',
      description: 'The CMS landscape is fracturing \u2014 or is it consolidating? We cut through the composability hype to ask what organisations actually need from their content platforms, and why the answer is almost never \u2018more tools\u2019.',
    },
    {
      title: 'Thriving Through Change: Product Leadership in Payments Space',
      date: '2025-06-17', youtube: '0xbhdV3Yjmo', slug: 'product-leadership-payments',
      description: 'Paul Taylor has spent 14 years in the trenches of digital payments at Worldline \u2014 and he\u2019s got the battle scars to prove it. He shares how he built a product-led culture inside a legacy payments giant, why OKRs only work when people actually believe in them, and what happens when transformation hits the brick wall of organisational muscle memory.',
    },
  ],
  season1: [
    {
      title: 'People, Process, Platform: The Real Work of Digital Evolution',
      date: '2025-05-12', youtube: 'x6JRmI7UjyA', slug: 'people-process-platform',
      description: 'The classic trio \u2014 people, process, platform \u2014 but in the right order. We explore why most digital transformations fail because they start with the platform and work backwards, and what it looks like when you get the sequence right.',
    },
    {
      title: 'Balancing Local Execution and Global Strategy in Digital Experience Platforms',
      date: '2025-04-12', youtube: 'xKX5bS6WZeI', slug: 'local-execution-global-strategy',
      description: 'How do you maintain a coherent global digital strategy while giving local teams the freedom to execute? We unpack the tensions, trade-offs, and surprisingly human challenges of running digital experience platforms across multiple markets.',
    },
    {
      title: 'Balancing Brand, Culture, and Clarity in a Global Comms Strategy',
      date: '2025-04-11', youtube: 'G0QmbOS_JZQ', slug: 'brand-culture-clarity-comms',
      description: 'Brand, culture, and clarity \u2014 three things that should be inseparable in a global comms strategy, and three things that almost never are. A conversation about what happens when the message gets lost between HQ and the frontline.',
    },
    {
      title: 'Building Digital for Everyone: National Grid\u2019s Shift to Product Thinking',
      date: '2025-04-10', youtube: '7uEN9QcKg8I', slug: 'national-grid-product-thinking',
      description: 'Simon Sanett takes us inside National Grid\u2019s shift from project-based delivery to product thinking \u2014 a transformation that changed not just how they build digital services, but how they think about the people using them. A story about infrastructure in every sense of the word.',
    },
    {
      title: 'Balancing Agility and Governance at the British Business Bank',
      date: '2025-04-09', youtube: '47eYP00DK5c', slug: 'agility-governance-british-business-bank',
      description: 'Adam Bird from the British Business Bank shares how a public institution can embrace agility without throwing governance out the window. A refreshingly honest look at the tensions between moving fast and staying accountable when public money is on the line.',
    },
    {
      title: 'What\u2019s the Key to Robust User Research & Responsible AI in Digital Transformation?',
      date: '2025-03-31', youtube: '-Yq60att7n0', slug: 'user-research-responsible-ai',
      description: 'In the final instalment with Dr. Jon Sykes, we tackle the big questions: how do you do proper user research when your users span 200+ countries? And as AI starts making its way into government, how do you deploy it responsibly when the stakes are geopolitical? A conversation about truth, trust, and the future of the digital state.',
    },
    {
      title: 'What\u2019s the Power of Human-Centred Design in UK Government Digital Transformation?',
      date: '2025-03-30', youtube: 'UNnrjXTtBCI', slug: 'human-centred-design-government',
      description: 'Dr. Jon Sykes digs into why human-centred design isn\u2019t just a nice-to-have in government \u2014 it\u2019s the difference between services people actually use and expensive digital white elephants. Hard-won lessons from putting users at the centre of FCDO\u2019s digital strategy, and why the biggest barrier to good design is rarely the technology.',
    },
    {
      title: 'Reimagining Digital Services in Government \u2014 With People at the Center',
      date: '2025-03-28', youtube: 'YmCmCwUZWmg', slug: 'reimagining-digital-services-government',
      description: 'Dr. Jon Sykes has been at the sharp end of government digital transformation at the FCDO. In part one of our three-part conversation, he lifts the lid on what it really means to reimagine public services in an institution that predates the internet by a few centuries. It\u2019s less about technology and more about convincing very smart people to change how they work.',
    },
    {
      title: 'Behind the Scenes of a Multilingual Platform: Insights from AuPairWorld',
      date: '2025-03-27', youtube: 'VfelccWq99A', slug: 'multilingual-platform-aupairworld',
      description: 'Sara Redondo Pizarro from AuPairWorld reveals the hidden complexity behind building a platform that works seamlessly in multiple languages. Beyond simple translation, this is a story about cultural nuance, technical architecture, and making digital experiences feel native in every market.',
    },
    {
      title: 'Why Editor Empowerment and Sustainability Matter in Modern CMS Strategy',
      date: '2025-02-27', youtube: 'QtyO5G4nWOY', slug: 'editor-empowerment-sustainability-cms',
      description: 'Why does the CMS your editors actually enjoy using matter more than the one with the best feature list? Filip Bech-Larsen from Umbraco makes the case for editor empowerment and sustainable content strategies that outlast the hype cycle.',
    },
    {
      title: 'Navigating Composable Complexity with Umbraco\u2019s CTO Filip Bech-Larsen',
      date: '2025-02-20', youtube: 'vlLzx4yxq3k', slug: 'composable-complexity-umbraco-filip-bech-larsen',
      description: 'Umbraco\u2019s CTO Filip Bech-Larsen kicks off Season 1 with a deep dive into composable architecture \u2014 the promise, the pitfalls, and the pragmatic middle ground. If you\u2019ve been told \u2018go composable\u2019 without being told what that actually means, this one\u2019s for you.',
    },
  ],
};

/**
 * Flat list of all podcast episodes with season/episode metadata.
 */
export function getAllEpisodes() {
  return [
    ...PODCAST_EPISODES.season2.map((ep, i) => ({ ...ep, season: 2, episode: PODCAST_EPISODES.season2.length - i })),
    ...PODCAST_EPISODES.season1.map((ep, i) => ({ ...ep, season: 1, episode: PODCAST_EPISODES.season1.length - i })),
  ];
}

export function getEpisode(slug) {
  return getAllEpisodes().find(ep => ep.slug === slug) || null;
}

export const EVENTS = [
  {
    title: 'Hospitality Tech Expo',
    dates: 'Sep 30 \u2013 Oct 1, 2025',
    date: '2025-09-30',
    time: '09:00 \u2013 18:00',
    location: 'Excel London, E16 1XL',
    image: '/coh/content/event-hospitality-expo.webp',
  },
  {
    title: 'TechSmart',
    dates: 'Sep 23, 2025',
    date: '2025-09-23',
    time: '08:20 \u2013 18:00',
    location: 'Leonardo Royal St Paul\u2019s, 10 Godliman Street, London EC4V 5AJ',
    image: '/coh/content/event-techsmart.png',
  },
];

/**
 * Combined content feed — all content types merged and sorted by date.
 */
export function getContentFeed() {
  const items = [];

  ARTICLES.forEach(a => items.push({
    type: 'article',
    title: a.title,
    date: a.date,
    image: a.image,
    author: a.author,
    slug: a.slug,
    url: `/content/articles/${a.slug}`,
  }));

  getAllEpisodes().forEach(ep => items.push({
    type: 'podcast',
    title: ep.title,
    date: ep.date,
    image: `https://i.ytimg.com/vi/${ep.youtube}/hqdefault.jpg`,
    label: `S${ep.season} E${ep.episode}`,
    youtube: ep.youtube,
    slug: ep.slug,
    url: `/content/podcast/${ep.slug}`,
  }));

  EVENTS.forEach(ev => items.push({
    type: 'event',
    title: ev.title,
    date: ev.date,
    image: ev.image,
    dates: ev.dates,
    location: ev.location,
  }));

  items.sort((a, b) => new Date(b.date) - new Date(a.date));
  return items;
}
