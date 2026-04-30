import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  prerender: [
    "/",
    "/capabilities",
    "/case-studies",
    "/case-studies/marriottopia",
    "/case-studies/national-grid",
    "/case-studies/british-business-bank",
    "/case-studies/bayer",
    "/company",
    "/content",
    "/content/articles",
    "/content/podcast",
    "/content/events",
    "/content/net-zero",
    "/contact",
    "/always-on",
    "/privacy",
  ],
} satisfies Config;
