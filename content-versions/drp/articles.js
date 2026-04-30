/**
 * DRP (Drupster) versioned articles.
 * Adapted from Coherence originals for Drupal team services positioning.
 */

export const DRP_ARTICLES = [
  {
    slug: 'your-drupal-site-rebuilt-in-days-not-months',
    title: 'Your Drupal Site Rebuilt in Days, Not Months',
    author: 'Julian Tedstone',
    date: '2026-03-16',
    image: 'article-rebuilt-in-days.jpg',
    intro: 'Drupal migrations have a reputation for taking forever. Content audits, module rewrites, theme rebuilds, data migrations that drag on for months. It does not have to be this way. By extracting design tokens from your existing Drupal site and deploying a governed headless front end, we turn CMS migration into a front-end swap rather than a content nightmare.',
    sections: [
      {
        heading: 'The Drupal Migration Trap',
        body: 'Upgrading from Drupal 7 or 8 to Drupal 11 is not a simple version bump. The architecture changed fundamentally between major versions. Configuration management replaced the features module. Twig replaced PHPTemplate. Media handling was rewritten from scratch. Most agencies treat this as a ground-up rebuild, and the project balloons accordingly. Content editors are locked out for months while the new theme is built. The content model gets reworked because someone decided the old one was not clean enough. By the time the new site launches, the backlog of unpublished content is enormous and the team is exhausted. The irony is that the content model was usually fine. The problem was always the presentation layer, not the data.'
      },
      {
        heading: 'Extracting Tokens from Your Live Drupal Site',
        body: 'We start by scanning your production Drupal site and extracting its visual language into design tokens. Colours, typography scales, spacing values, grid structures, border treatments, shadow definitions. Everything that makes your site look like your brand gets captured as structured, version-controlled data. This is not a manual audit. We use automated tooling that crawls your pages, analyses computed styles and produces a token set that represents your current design intent. The result is a machine-readable description of your brand as it appears on screen today. From there we generate a component library that consumes those tokens. The components are headless. They do not care whether Drupal, a static API or any other back end is serving the content. They render consistently because they are governed by the token set, not by a Drupal theme.'
      },
      {
        heading: 'Drupal 11 as a Content API',
        body: 'Drupal 11 ships with JSON:API enabled by default. Your content model, your entity references, your media library, your taxonomy vocabularies are all available as structured API endpoints without writing a single line of custom code. This makes Drupal 11 an excellent headless CMS. Your editors keep the admin interface they know. Your content workflows, moderation states and permissions remain exactly as they were. The only thing that changes is the front end. Instead of a Twig theme tightly coupled to the Drupal render pipeline, you get a governed component library that pulls content through the API and renders it with the performance, accessibility and consistency guarantees that a modern front-end framework provides. The content model stays the same. The editorial experience stays the same. The user-facing site gets dramatically better.'
      },
      {
        heading: 'The Five-Day Pattern for Drupal',
        body: 'Day one: scan the live Drupal site, extract design tokens and audit the content model via JSON:API. Day two: generate the component library, validate against brand guidelines and map components to Drupal content types. Day three: connect the headless front end to the Drupal 11 API layer. Day four: populate, test across devices, refine edge cases. Day five: deploy. This is not theoretical. It is a repeatable pipeline we run through CodeOps, and it produces the same reliable result every time. The speed does not come from cutting corners. It comes from eliminating the decisions that slow every traditional Drupal migration down. You are not debating information architecture. You are not redesigning the content model. You are swapping the presentation layer for something modern, governed and fast. Your content stays exactly where it is.'
      }
    ]
  },
  {
    slug: 'your-drupal-site-is-never-finished',
    title: 'Your Drupal Site Is Never Finished',
    author: 'Julian Tedstone',
    date: '2026-03-16',
    image: 'article-end-of-redesign.jpg',
    intro: 'Drupal ships a new minor release every six months. Security advisories land weekly. Contributed modules update constantly. Yet most Drupal teams treat upgrades as Big Bang events, stockpiling changes until the pain of not upgrading outweighs the fear of breaking something. There is a better way to ride the release train.',
    sections: [
      {
        heading: 'The Big Bang Upgrade Problem',
        body: 'Most Drupal teams defer upgrades until they absolutely cannot wait any longer. A security advisory forces their hand, or Drupal 10 reaches end of life, or a critical contributed module drops support for their version. The result is a high-stakes migration that bundles months or years of deferred changes into a single terrifying deployment. Configuration drifts. Composer dependencies conflict. Custom modules that nobody documented need rewriting. The team scrambles, the site breaks, everyone vows to do better next time. Then the cycle repeats. This pattern is not a technology problem. It is an operational one. Drupal is designed for incremental updates. Composer makes dependency management predictable. Configuration management makes environment parity achievable. The tooling supports continuous improvement. The team just needs a process that uses it.'
      },
      {
        heading: 'Riding the Release Train',
        body: 'Drupal minor releases follow a predictable six-month cadence. Each one brings new features, deprecates old APIs and improves performance. Security releases arrive on a published schedule. Contributed module updates flow continuously. A well-run Drupal operation treats each of these as a routine event, not a crisis. That means maintaining a staging environment that mirrors production. It means running automated tests that catch regressions before they reach users. It means applying security patches within the published advisory window, not three months later when someone notices. It means reviewing the release notes for each minor version and planning the adoption of new features into the regular improvement cadence. None of this is revolutionary. It is simply disciplined operations applied to a platform that was built to support them.'
      },
      {
        heading: 'Monthly Cadence, Compounding Value',
        body: 'We structure Drupal operations around a monthly improvement cycle. Each month includes a defined window for core and contrib updates, a review of analytics to identify UX improvement opportunities, and a prioritised set of enhancements from the backlog. The analytics review is critical. Most Drupal teams have access to rich behavioural data but no process for translating it into action. Which content types drive the most engagement? Where do users abandon key journeys? Which search terms return poor results? These questions have answers in the data. Turning those answers into monthly improvements means the site gets measurably better every thirty days. Not every three years when someone commissions a redesign, but every single month as a matter of routine.'
      },
      {
        heading: 'What This Means for Budget and Risk',
        body: 'Continuous improvement on Drupal costs less than the boom-and-bust redesign cycle. A steady monthly investment replaces the large capital outlay every few years. Risk is distributed across small, reversible changes rather than concentrated in a single high-stakes deployment. Your Drupal site never falls so far behind that upgrading feels impossible. Your team never has to manage a painful, months-long migration. Your editors never lose access to their CMS while the new theme is built. The platform stays current, the experience stays fresh, and the budget stays predictable. When renewal conversations happen, you are not justifying the cost of standing still. You are demonstrating twelve months of documented, measurable improvement.'
      }
    ]
  },
  {
    slug: 'when-your-drupal-modules-talk-to-your-pipelines',
    title: 'When Your Drupal Modules Talk to Your Pipelines',
    author: 'Julian Tedstone',
    date: '2026-03-16',
    image: 'article-agents-talk.jpg',
    intro: 'Drupal has always been an integration platform. Its hook system, event subscribers, and API-first architecture make it a natural backbone for automated pipelines. When you connect content staging, security scanning and deployment orchestration through a shared context layer, the result is not just automation. It is a Drupal operation that gets smarter with every deployment.',
    sections: [
      {
        heading: 'Drupal as an Integration Platform',
        body: 'Long before headless and API-first became industry buzzwords, Drupal was built around the idea that modules should be able to talk to each other. The hook system lets any module react to events anywhere in the application. Entity events fire when content is created, updated or deleted. The plugin system provides clean extension points for authentication, storage, media handling and dozens of other capabilities. Drupal 11 takes this further with JSON:API, GraphQL support and a mature REST framework. Your content is available as structured data to any system that needs it. Your editorial workflows can trigger external processes. Your deployment pipeline can interact with Drupal programmatically. This is not bolted-on integration. It is the architecture Drupal was designed around. The question is whether your operations are taking advantage of it.'
      },
      {
        heading: 'ContextOps and the Shared State',
        body: 'Most Drupal operations run their tools in isolation. The CI pipeline does not know what the content team is working on. The security scanner does not know that a deployment is about to land. The monitoring system does not know that a content migration is underway, which is why traffic patterns look unusual. ContextOps solves this by maintaining a shared state across every pipeline. When a Drupal module is updated, the context layer records it and notifies downstream systems. When SecurityOps flags a vulnerable dependency in composer.lock, ContextOps routes that information to the deployment pipeline so it blocks the release until the patch is applied. When ContentOps schedules a major content update, the monitoring system adjusts its baselines accordingly. Each system becomes more useful because it has the full picture, not just its own narrow view.'
      },
      {
        heading: 'Content Staging with Pipeline Awareness',
        body: 'Drupal content staging is a solved problem at the CMS level. Content moderation, workspaces and deploy modules handle editorial workflows well. But staging is only half the story. The other half is what happens between the editorial "publish" action and the content appearing on the live site. In a headless Drupal architecture, publishing triggers a build or cache invalidation on the front end. That process needs to know whether the deployment environment is healthy, whether any dependency updates are pending, and whether the security posture is clean. With pipeline-aware staging, the publish action does not just push content. It checks the full context. Is the front-end build green? Are there any unresolved security advisories? Has the performance baseline shifted? If everything is clear, the content goes live. If not, the pipeline flags the issue and routes it to the right team. No broken deploys. No silent failures.'
      },
      {
        heading: 'Why This Matters for Drupal Teams',
        body: 'Drupal teams are typically good at running Drupal. They understand the CMS, the module ecosystem and the deployment toolchain. What they often lack is the connective tissue between these systems. A Composer update happens in isolation from the content calendar. A security patch is applied without checking whether it affects the modules the content team relies on. A performance regression is noticed weeks after the deployment that caused it. Pipeline integration through ContextOps eliminates these blind spots. Every change is logged, contextualised and routed. Every deployment is informed by the full state of the operation. Every team member can see what is in flight, what has changed and what decisions were made. For organisations running Drupal at scale, this is the difference between a CMS and a content operation.'
      }
    ]
  },
  {
    slug: 'one-design-system-every-drupal-multisite',
    title: 'One Design System, Every Drupal Multisite',
    author: 'Julian Tedstone',
    date: '2026-03-16',
    image: 'article-one-design-system.jpg',
    intro: 'Drupal multisite and Site Studio solve the platform layer. They give you shared infrastructure, shared modules and shared configuration across every site in your estate. But the front end is where brand consistency actually lives or dies. Adding a headless design system means every site gets brand updates, accessibility fixes and performance improvements from a single deployment.',
    sections: [
      {
        heading: 'The Multisite Promise and Its Limits',
        body: 'Drupal multisite is a powerful capability. A single codebase serves multiple sites, each with its own content, configuration and domain. Acquia Site Studio extends this further by letting site builders create layouts and components through a visual interface, reducing the dependency on front-end developers. For large organisations managing ten, twenty or fifty sites, these tools solve real problems. Shared security patches. Centralised module management. Consistent content modelling. But they solve the platform layer. The front-end layer often remains fragmented. Each site gets its own theme, its own CSS, its own component implementations. A brand update means touching every theme individually. An accessibility fix needs applying site by site. Performance improvements are local, not systemic. The platform is consolidated. The user experience is not.'
      },
      {
        heading: 'Governing the Front End',
        body: 'A headless design system sits above the CMS layer and governs the front end across every site in the estate. It consumes content from each Drupal site through JSON:API and renders it through a single, shared component library. The components are controlled by design tokens that encode the brand: colours, typography, spacing, grid behaviour, motion, elevation. When the brand evolves, you update the tokens. Every site reflects the change immediately. When an accessibility issue is identified in a component, you fix it once in the design system. Every site benefits. When a performance optimisation lands in the rendering layer, every site gets faster. This is governance through architecture rather than through process documents and brand guidelines that nobody reads after the first week.'
      },
      {
        heading: 'How It Works with Site Studio',
        body: 'Site Studio provides a visual page building experience within Drupal. Site builders assemble pages from components without writing code. The question is where those components come from. In a traditional Site Studio setup, components are defined within the Drupal theme layer. They are powerful but coupled to the Drupal rendering pipeline. In a headless design system model, Site Studio defines the content structure and layout intent. The headless front end handles the rendering. Site builders still use the familiar drag-and-drop interface to assemble pages. But the components they place are rendered by the design system, not by Drupal Twig templates. This means site builders retain their autonomy and their tools. The design system provides the visual governance. Both layers do what they are best at. Content management stays in Drupal. Brand consistency is enforced by the design system.'
      },
      {
        heading: 'What Changes Across the Estate',
        body: 'The brand team gets a single source of truth for digital brand expression across every Drupal site. When the brand guidelines change, the design tokens update and every site reflects the new direction without individual theme work. The security team gets a unified front-end surface to audit. Instead of reviewing fifty different themes with fifty different dependency trees, they audit one component library. The content teams keep their Drupal admin interface, their workflows and their Site Studio layouts. Nothing changes in their daily experience. The finance team stops paying for individual theme maintenance across dozens of sites. The accessibility team fixes issues once and knows the fix applies everywhere. And when a new site needs to join the estate, it inherits the full design system on day one. Not after a six-week theming sprint. On day one.'
      }
    ]
  },
  {
    slug: 'running-drupal-properly',
    title: 'Running Drupal Properly',
    author: 'Julian Tedstone',
    date: '2026-03-16',
    image: 'article-run-improve-govern.jpg',
    intro: 'Drupal is a serious platform that demands serious operations. Security advisories, contributed module patching, PHP and Drupal core upgrades, Composer dependency management. The operational requirements are specific and non-negotiable. Yet most Drupal support contracts measure success by ticket counts rather than platform health. Here is what proper Drupal operations look like.',
    sections: [
      {
        heading: 'The Run Layer: Security and Stability',
        body: 'Running Drupal properly starts with the fundamentals. Security advisories from the Drupal Security Team need applying within the published advisory window, not whenever someone gets around to it. Contributed module updates need reviewing and deploying on a defined schedule. PHP version upgrades need planning before the current version reaches end of life, not after. Composer dependency management needs to be clean, with a locked dependency tree that produces identical builds across environments. Database updates, configuration imports, cache rebuilds: these are not optional maintenance tasks. They are the operational baseline. Proactive monitoring means watching application logs, not just uptime pings. It means tracking error rates, slow queries and memory consumption. It means knowing that the Drupal cron is running, that the search index is current and that the cache hit ratio is healthy. This is not glamorous work. But when the Run layer is neglected, everything else falls apart.'
      },
      {
        heading: 'The Improve Layer: Analytics-Driven UX',
        body: 'Improvement on a Drupal site means using data to drive decisions, not opinion. Which content types are your users actually engaging with? Where do they drop off in key journeys? Which Views pages have poor engagement despite high traffic? Are your Drupal search results helping people find what they need, or pushing them to Google? Every month we review the analytics and translate findings into prioritised enhancements. That might mean restructuring a taxonomy that is confusing users. It might mean optimising a Views display that loads too slowly. It might mean adding structured data to content types that should be performing better in search. It might mean reworking a webform that has a high abandonment rate. The point is that improvement is systematic and evidence-based. It is driven by what users actually do on your site, not by what stakeholders assume they do. Every enhancement has a measurable objective and a defined success criterion.'
      },
      {
        heading: 'The Govern Layer: Platform Health Reporting',
        body: 'Governance is where most Drupal operations fall short. Traditional support contracts report on ticket volumes and response times. These metrics tell you how busy the support team is. They tell you nothing about the health of the platform or the quality of the user experience. Proper governance for Drupal means monthly reporting on metrics that matter. Core and contrib currency: how many versions behind is the site, and what is the plan to close the gap? Security posture: are all advisories addressed within the defined window? Performance baselines: are page load times trending in the right direction? Accessibility compliance: what is the current WCAG conformance level, and where are the gaps? Content freshness: how much content is stale, orphaned or underperforming? These metrics provide an honest picture of platform health. They drive informed conversations about investment priorities. And they ensure that when budget discussions happen, the team can demonstrate the value of operational discipline rather than simply counting tickets.'
      },
      {
        heading: 'Why Discipline Matters on Drupal',
        body: 'Drupal rewards disciplined operations and punishes neglect. A well-maintained Drupal site is secure, performant and stable. A neglected one accumulates technical debt at an alarming rate. Modules fall behind. Configuration drifts between environments. Custom code that nobody documented becomes impossible to maintain. The gap between the current version and the latest release widens until upgrading feels impossible. The Run, Improve, Govern model prevents this decay. Run keeps the platform current and secure. Improve ensures the site gets better every month based on real evidence. Govern provides the visibility and accountability that keeps the whole operation honest. This is not a philosophy. It is a delivery model with defined activities, measurable outcomes and regular reporting. For any organisation that depends on Drupal, this is what proper operations look like. Not a ticket queue. Not a retainer you forget about. A managed, improving, governed digital platform.'
      }
    ]
  }
];
