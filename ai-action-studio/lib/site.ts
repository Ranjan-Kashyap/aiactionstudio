export const SITE_NAME = "AI Action Studio";
export const SITE_URL = "https://aiactionstudio.com";
export const SITE_DESCRIPTOR = "AI systems, built and maintained.";
export const SITE_TAGLINE = "Learn AI. Use AI. Take Action.";
export const ONE_LINE_POSITIONING =
  "AI Action Studio builds and maintains the systems that take manual work off your team, from spreadsheets and WhatsApp to one connected, AI-assisted way of working.";

export const YOUTUBE_URL = "https://www.youtube.com/@ai.actionstudio";
// TODO(Ranjan): confirm the final ScaleLens URL if different from https://scalelens.app
export const SCALELENS_URL = "https://scalelens.app";

export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
export const SHOW_PRICING =
  process.env.SHOW_PRICING === "true" ||
  process.env.NEXT_PUBLIC_SHOW_PRICING === "true";

export const siteDescription =
  "AI systems, built and maintained. AI Action Studio is an AI automation agency that builds AI agents, workflow automations, custom software and integrations for growing businesses.";

export type SocialLink = {
  href: string;
  label: string;
  src: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.facebook.com/aiactionstudio",
    label: "AI Action Studio on Facebook",
    src: "/images/social/facebook.svg",
  },
  {
    href: "https://www.instagram.com/ai.actionstudio",
    label: "AI Action Studio on Instagram",
    src: "/images/social/instagram.svg",
  },
  {
    href: YOUTUBE_URL,
    label: "AI Action Studio on YouTube",
    src: "/images/social/youtube.svg",
  },
].filter((item) => Boolean(item.href && item.href !== "#"));

export type CarePlanTier = {
  name: string;
  summary: string;
  responseTime: string;
  includedHours: string;
  priceUsd?: string;
  priceInr?: string;
};

// TODO(Ranjan): confirm Care Plan tier names, response times, included monthly hours, and pricing before turning SHOW_PRICING on.
export const CARE_PLAN_TIERS: CarePlanTier[] = [
  {
    name: "Essential",
    summary: "For a single automation or AI agent that needs monitoring, alerts and fixes.",
    responseTime: "Within 1 business day",
    includedHours: "Up to 2 hours of small changes/month",
    priceUsd: "from $300/month",
    priceInr: "from ₹15,000/month",
  },
  {
    name: "Growth",
    summary: "For connected workflows across your CRM, WhatsApp, accounting or internal tools.",
    responseTime: "Same business day",
    includedHours: "Up to 6 hours of small changes/month",
    priceUsd: "from $750/month",
    priceInr: "from ₹35,000/month",
  },
  {
    name: "Partner",
    summary: "For custom software and multi-system setups that evolve every month.",
    responseTime: "Priority response",
    includedHours: "Up to 15 hours of changes & improvements/month",
    priceUsd: "from $1,500/month",
    priceInr: "from ₹75,000/month",
  },
];

// TODO(Ranjan): add YouTube embed URLs (e.g. "https://www.youtube.com/embed/VIDEO_ID") for build walkthrough videos on /work.
export const BUILD_VIDEOS: { title: string; embedUrl: string; summary?: string }[] = [];

/**
 * Last verified against official vendor pricing pages:
 * - ChatGPT: https://openai.com/chatgpt/pricing and OpenAI Help Center (Plus $20/mo; Pro $100 and $200 tiers)
 * - Gemini: https://gemini.google/subscriptions/ (Ultra $99.99 / $199.99; Pro listed ~$19.99 on Google AI plans)
 * - Claude: https://claude.com/pricing (Pro $20/mo or $17/mo annual; Max from $100)
 * - GitHub Copilot: https://docs.github.com/en/copilot/get-started/plans (Pro $10/mo; Pro+ $39/mo)
 * Re-check these pages before treating the numbers as current.
 */
export const PRICING_LAST_CHECKED = "September 15, 2026";
export const CONTENT_LAST_UPDATED = "September 15, 2026";
