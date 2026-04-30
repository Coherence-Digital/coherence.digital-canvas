/**
 * MOL (Data & Search Practice) — Article content versioned from Coherence originals.
 * Each article is reframed for search experience, relevance and findability.
 */

export const ARTICLES = [
  {
    slug: 'your-search-experience-rebuilt-in-days',
    title: 'Your Search Experience Rebuilt in Days, Not Months',
    author: 'Julian Tedstone',
    date: '2026-03-16',
    image: '/coh/content/article-rebuilt-in-days.jpg',
    intro: 'Replatforming search used to mean months of integration work, migration headaches and a launch that was already out of date. Pop-up design systems change the equation entirely. Here is how we extract, build and deploy a governed search front end in days.',
    sections: [
      {
        heading: 'The Search Replatform Trap',
        body: 'Most organisations dread the phrase "search overhaul." It conjures images of six-month programmes, frozen feature roadmaps and a go-live that feels more like damage control than progress. The problem is not the search engine itself. It is the approach. Traditional search redesigns treat every results page, every filter panel, every autocomplete pattern as a bespoke construction project. Every component is debated. Every API integration becomes a blocker. By the time the new experience launches, query patterns have shifted, content has grown and the whole cycle feels overdue again. Meanwhile users are quietly abandoning your search and going straight to Google with a site: prefix. That is not a technology failure. It is an operational one. The organisations that break out of this cycle are the ones that stop treating search interfaces as monolithic projects and start treating them as composable, governed front ends that can be assembled from proven patterns and deployed against any search API.'
      },
      {
        heading: 'What a Pop-up Search Interface Actually Is',
        body: 'A pop-up design system for search starts with what you already have. We scan your live estate, extract its visual language into design tokens (colours, typography, spacing, grid) and generate a governed component library purpose-built for search experiences. That library includes results cards, faceted navigation panels, autocomplete dropdowns, zero-result states and filter controls. It is headless. It does not care whether the back end is Elasticsearch, Algolia, Solr or a bespoke API. It connects to anything that returns structured results. The front end renders consistently regardless of what powers the index behind it. Your search designers can iterate on result layouts, filter hierarchies and ranking displays without touching the indexing pipeline. Your engineers can swap or upgrade the search engine without redesigning the interface. The two concerns are cleanly separated, which means both teams move faster.'
      },
      {
        heading: 'Why This Matters for Complex Estates',
        body: 'If you manage a content estate with thousands of pages across multiple defined content types, the maths changes dramatically. Instead of building bespoke search experiences for each section or subdomain, you extract one search design system and deploy it everywhere. Results pages for documentation look consistent with results pages for news, for products, for support articles. Faceted navigation follows the same interaction patterns whether the user is filtering by date, by topic or by content type. For regulated industries and public sector organisations, this approach means accessibility compliance baked into every search component. WCAG standards are met by the system, not by individual developer diligence. When your content grows or your taxonomy evolves, the search interface adapts without a redesign. You update the facet configuration and the governed components handle the rest.'
      },
      {
        heading: 'The Five-Day Pattern',
        body: 'Day one: audit the existing search experience. Map query patterns, identify zero-result rates, document the current facet structure and review click-through data. Day two: generate the search component library from extracted design tokens and validate against brand guidelines. Day three: connect the headless search front end to the search API, configure facets and wire up analytics. Day four: populate test queries, validate result relevance, refine ranking display and test edge cases. Day five: go live with monitoring in place. This is not a thought experiment. It is a repeatable pipeline that runs the same way every time. The speed comes not from cutting corners but from eliminating the decisions that slow every traditional search project down. The search engine does its job. The design system does its job. The interface between them is clean, governed and fast to deploy.'
      },
    ],
  },
  {
    slug: 'why-your-search-ux-should-evolve-with-your-data',
    title: 'Why Your Search UX Should Evolve with Your Data',
    author: 'Julian Tedstone',
    date: '2026-03-16',
    image: '/coh/content/article-end-of-redesign.jpg',
    intro: 'The annual search redesign was never a technology problem. It was an operational one. Search relevance degrades as content grows, queries shift and user expectations change. Continuous improvement is not a philosophy. It is a delivery model.',
    sections: [
      {
        heading: 'The Relevance Decay Problem',
        body: 'Every search experience degrades over time. Not because the technology fails, but because the content it indexes changes faster than the configuration that governs it. New pages are published without proper metadata. Old content sits in the index long after it stops being useful. Synonyms drift as terminology evolves. The taxonomy that made sense eighteen months ago no longer reflects how users actually describe what they are looking for. Zero-result rates creep upward. Click-through rates on the first page of results start declining. Users learn that search does not work and stop using it, going directly to navigation or leaving the site entirely. By the time someone raises the alarm, the damage is already compounding. The conversation that follows is always the same: "We need to redesign search." But what you actually need is a model that prevents the decay in the first place.'
      },
      {
        heading: 'Why Continuous Improvement Is Different',
        body: 'Continuous search improvement is not the same as ongoing support. Support is reactive. Someone reports that a query returns irrelevant results, you investigate. Continuous improvement is proactive. It means reviewing search analytics every month and translating findings into prioritised tuning actions. It means monitoring zero-result rates weekly and adding synonyms or redirects before users accumulate frustration. It means tracking click-through patterns on results pages to identify where ranking is failing. It means auditing index coverage on a schedule, not when someone notices content is missing. The search experience is a product, not a project. It has a backlog of relevance improvements, a monthly cadence for tuning and a team that treats query analytics the way a product manager treats user research.'
      },
      {
        heading: 'The Tune, Measure, Adapt Model',
        body: 'We structure search improvement around three interlocking activities. Tune covers the hands-on relevance work: adjusting boost values, updating synonym dictionaries, refining facet hierarchies, adding promoted results for high-value queries. Measure is the analytics layer: zero-result rates, click-through rates, query refinement rates, search exit rates, time-to-result for key journeys. Adapt is the strategic review: monthly reporting on search health metrics, quarterly roadmap reviews that align search improvements with content strategy, and backlog prioritisation based on measured impact rather than opinion. Together these three activities mean your search experience gets measurably better every month. Not every year when someone finally commissions a redesign. Every month, in small increments that compound into genuinely better findability.'
      },
      {
        heading: 'What This Means for Your Investment',
        body: 'The total cost of continuous search improvement is typically lower than the boom-and-bust redesign cycle. Instead of a large capital outlay every few years to "fix search" (with diminishing returns between cycles), you invest a steady operational budget that delivers compounding relevance improvements. Your index never falls out of sync with your content. Your synonym dictionaries never become stale. Your facet structures evolve as your taxonomy grows. Users never have to endure a six-month period where search is acknowledged as broken but nobody has budget to fix it. The economics are better because you are preventing decay rather than remediating it. The outcomes are better because improvements are informed by data rather than assumptions. The experience is better because your users find what they need, consistently, every time they search.'
      },
    ],
  },
  {
    slug: 'when-your-crawl-index-and-analytics-agents-share-context',
    title: 'When Your Crawl, Index and Analytics Agents Share Context',
    author: 'Julian Tedstone',
    date: '2026-03-16',
    image: '/coh/content/article-agents-talk.jpg',
    intro: 'Most organisations running search pipelines have agents working in isolation. A crawler here, an enrichment process there, an analytics dashboard somewhere else. The real value unlocks when they share context across every handoff point.',
    sections: [
      {
        heading: 'The Search Pipeline Silo Problem',
        body: 'Organisations spent the last decade breaking down data silos between departments. Now the same pattern is repeating across the search pipeline. The crawl agent discovers content but does not know which pages the analytics agent has flagged as underperforming. The enrichment process extracts entities and metadata but does not know the indexing agent just rejected a batch due to schema changes. The query analytics dashboard shows rising zero-result rates but nobody connects that signal back to the crawler that stopped reaching a newly restructured subdomain. Each stage of the pipeline is individually competent but collectively blind. The crawl finds content. The enrichment process annotates it. The index stores it. The query engine retrieves it. The analytics layer measures it. Five stages, five separate systems, zero shared awareness. When something breaks, the symptom appears at query time but the cause is buried three stages back in the pipeline.'
      },
      {
        heading: 'What Shared Context Does for Search',
        body: 'Shared context across the search pipeline means every stage has visibility into what the others are doing and what they have found. When the crawler encounters a page that returns a 404, that signal propagates immediately to the index so stale content is flagged before a user searches for it. When the enrichment process detects that a document has changed significantly, the analytics agent is notified so it can monitor whether relevance metrics shift for related queries. When query analytics surfaces a spike in zero-result searches for a specific term, that signal feeds back to the crawl agent to check whether new content exists that has not yet been discovered. The pipeline becomes a closed loop rather than an assembly line. Problems are caught at source rather than at the point of user impact.'
      },
      {
        heading: 'A Practical Example',
        body: 'A content team publishes fifty new product pages as part of a catalogue refresh. Without shared context, here is what happens: the crawler picks them up on its next scheduled run, maybe tomorrow, maybe next week. The enrichment process classifies them when it gets to them. The index updates. Meanwhile, users searching for the new products hit zero results for days. With shared context, the publish event triggers the crawl agent immediately. The enrichment process receives the batch with metadata about the content type and target taxonomy. The index is updated within minutes. The analytics agent starts monitoring search queries for the new product names and reports back within 24 hours on whether users are finding them. If click-through is low, the relevance tuning agent adjusts boost values. What used to be a week of lag and manual intervention becomes a same-day, automated feedback loop.'
      },
      {
        heading: 'Why This Matters at Scale',
        body: 'For organisations managing large content estates with millions of indexed documents, the compounding effect of shared context is transformative. Every pipeline stage gets faster because it does not start from scratch. Every relevance decision is better because it is informed by the full picture, from crawl health through to user behaviour. Every audit is simpler because the decision log is comprehensive and automatic. You can answer questions that were previously impossible: which content was crawled but never searched for, which queries lead to results that are never clicked, which enrichment rules are generating metadata that the ranking algorithm ignores. Context is not a nice-to-have for search operations. For any organisation serious about findability at scale, it is the infrastructure that turns a collection of tools into a functioning search platform.'
      },
    ],
  },
  {
    slug: 'one-search-experience-across-a-fragmented-estate',
    title: 'One Search Experience Across a Fragmented Estate',
    author: 'Julian Tedstone',
    date: '2026-03-16',
    image: '/coh/content/article-one-design-system.jpg',
    intro: 'Large organisations accumulate content sources the way ships accumulate barnacles. Each one made sense at the time. Together they create a fragmented, inconsistent search experience that frustrates users and wastes investment. There is a better way.',
    sections: [
      {
        heading: 'How Content Estates Fragment',
        body: 'It usually starts innocently. A product team needs its own knowledge base. A regional office builds a local resource library. A campaign generates content that lives on a separate subdomain because the main CMS could not move fast enough. Five years later you have content scattered across a dozen platforms, three intranets, two knowledge bases and a SharePoint instance that nobody admits to owning. Each source has its own search, its own metadata schema, its own idea of what a "result" looks like. Users searching across the estate get inconsistent experiences depending on which source returns the result. Some results have rich snippets. Others are bare titles. Some sources are indexed in real time. Others lag by days. The user does not care where the content lives. They care whether they can find what they need. And right now, they cannot.'
      },
      {
        heading: 'The Consolidation Mistake',
        body: 'The instinct is to consolidate everything into one search engine. This is usually the right destination but the wrong first step. Traditional consolidation means a massive integration programme: audit every source, normalise every schema, build connectors for every platform, migrate metadata. It takes months. Content owners resist because they lose control. By the time you finish, two new content sources have appeared. The pattern repeats. The problem with starting at the engine level is that you are trying to solve a presentation problem with an infrastructure project. Users do not need all your content in one index (though that helps eventually). What they need first is a consistent, governed experience when they interact with search results, regardless of which source produced them.'
      },
      {
        heading: 'Search Design System as Unifying Layer',
        body: 'The alternative is to govern at the search interface level, not the index level. Build a portable, headless search design system that defines how results are displayed, how facets are presented, how filters behave and how zero-result states are handled. Deploy that system as the search front end for every content source. The content stays where it is. The content owners keep their tools. But every search interaction, whether it queries the main site, the knowledge base, the intranet or the product documentation, renders through a single governed component library. Consistency, accessibility compliance and interaction quality are enforced by the system, not by documentation that nobody reads. When you are ready to federate the indexes behind a single query engine, the front end is already unified. The migration becomes invisible to users.'
      },
      {
        heading: 'What Changes When Search Is Consistent',
        body: 'The search team gets a single source of truth for how results look and behave across every channel. The accessibility team audits one component library instead of twelve separate search implementations. Content owners keep their preferred platforms and publishing workflows. The analytics team can compare search performance across sources using consistent metrics because the interaction patterns are identical. Users build trust in search because it behaves predictably regardless of what they are looking for. And when the design evolves, when you add a new facet type or refine the result card layout, you update the design system once and every search experience reflects the change. Not in six months after a project team has been assembled. That afternoon, through a single deployment that touches every surface.'
      },
    ],
  },
  {
    slug: 'running-a-search-platform-not-just-an-index',
    title: 'Running a Search Platform, Not Just an Index',
    author: 'Julian Tedstone',
    date: '2026-03-16',
    image: '/coh/content/article-run-improve-govern.jpg',
    intro: 'Search support has barely changed in a decade. You configure an index, point a crawler at your content and hope for the best. When relevance degrades, someone raises a ticket. It is time for a better model.',
    sections: [
      {
        heading: 'The "Set and Forget" Problem',
        body: 'Traditional search management is a cost centre disguised as infrastructure. Organisations configure a search engine during a website build, tune it once based on a handful of test queries, and then leave it alone until complaints reach a critical mass. The conversation is always about index size and query latency rather than whether users actually find what they need. Teams treat search as a feature rather than a platform. There is no backlog of relevance improvements. There is no regular review of query analytics. There is no governance framework that connects search performance to business outcomes. Search stagnates. Users learn to work around it. The investment in search technology delivers a fraction of its potential value. Everyone senses this is not working, but the alternative has never been clearly defined. What does it actually look like to run search as a managed platform rather than a configured feature?'
      },
      {
        heading: 'Run: Query Performance, Index Health, Crawl Coverage',
        body: 'The Run layer covers everything needed to keep a search platform healthy, fast and comprehensive. Query performance monitoring means tracking response times under real load, not synthetic benchmarks. Index health means verifying that document counts match expectations, that schema changes have not silently dropped fields, that stale content is being expired on schedule. Crawl coverage means confirming that every content source is being discovered, that new pages are indexed within defined SLAs, that redirects and canonical tags are being respected. This also includes security and access control: ensuring that authenticated content is not leaking into public search results, that PII is not being indexed where it should not be, that API keys and crawl credentials are rotated on schedule. This is not glamorous work, but it is the foundation everything else depends on. If users cannot trust that search results are current, complete and fast, no amount of relevance tuning will recover their confidence.'
      },
      {
        heading: 'Improve: Analytics That Surface Relevance Gaps',
        body: 'The Improve layer is where value compounds. Each month we review search analytics and identify the highest-impact opportunities for relevance improvement. Zero-result queries tell you what users expect to find but cannot. High-refinement queries tell you where the first set of results is not good enough. Low click-through on top results tells you where ranking is failing. Search exit rates tell you where users gave up entirely. These signals are gold for anyone willing to act on them. Improvement might mean adding synonym mappings so "pricing" and "cost" return the same results. It might mean boosting recent content for time-sensitive queries. It might mean restructuring facets so users can narrow results more effectively. It might mean implementing promoted results for high-value queries that consistently underperform. The point is that improvement is systematic, prioritised by measured impact and delivered continuously. Not a wish list that sits in a backlog until the next redesign.'
      },
      {
        heading: 'Govern: Findability Metrics Tied to Business Outcomes',
        body: 'Governance is the layer most organisations are missing from their search operations. Monthly operational reports that show crawl coverage, index health, query performance and relevance metrics. Quarterly reviews that connect search analytics to business outcomes: did improved findability for product pages correlate with conversion improvements? Did reducing zero-result rates for support queries reduce call centre volume? Are content gaps identified through search analytics being addressed by the editorial team? Without governance, Run becomes routine maintenance and Improve becomes ad hoc tuning that nobody can prove was worthwhile. With governance, search becomes a managed business asset with clear metrics, defined ownership and demonstrable impact. That is the difference between running an index and running a search platform. The index stores documents. The platform delivers findability. And findability, measured and governed, is a conversation worth having at the executive level.'
      },
    ],
  },
];
