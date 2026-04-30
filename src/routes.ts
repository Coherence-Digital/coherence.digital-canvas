import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  // API resource routes (no UI)
  route("api/cal-webhook", "./pages/api.cal-webhook.js"),

  layout("./components/Layout.jsx", [
    index("./pages/HomePage.jsx"),
    route("capabilities", "./pages/CapabilitiesPage.jsx"),
    route("case-studies", "./pages/CaseStudiesIndex.jsx"),
    route("case-studies/:slug", "./pages/CaseStudyDetail.jsx"),
    route("company", "./pages/CompanyPage.jsx"),
    route("content", "./pages/ContentPage.jsx"),
    route("content/articles", "./pages/ArticlesPage.jsx"),
    route("content/articles/:slug", "./pages/ArticleDetail.jsx"),
    route("content/podcast", "./pages/PodcastPage.jsx"),
    route("content/podcast/:slug", "./pages/PodcastCampaignOrDetail.jsx"),
    route("content/events", "./pages/EventsPage.jsx"),
    route("content/net-zero", "./pages/NetZeroPage.jsx"),
    route("contact", "./pages/ContactPage.jsx"),
    route("always-on", "./pages/AlwaysOnPage.jsx"),
    route("guest-on-our-podcast", "./pages/GuestPage.jsx"),
    route("privacy", "./pages/PrivacyPage.jsx"),
    route("terms", "./pages/TermsPage.jsx"),
    route("*", "./pages/NotFoundPage.jsx"),
  ]),
] satisfies RouteConfig;
