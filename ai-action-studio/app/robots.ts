import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const AI_AND_SEARCH_BOTS = [
  "Googlebot", "Bingbot", "DuckDuckBot", "Slurp", "YandexBot", "Applebot",
  "Google-Extended", "GoogleOther", "Applebot-Extended",
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User", "anthropic-ai",
  "PerplexityBot", "Perplexity-User",
  "Amazonbot", "meta-externalagent", "CCBot", "cohere-ai", "MistralAI-User", "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: AI_AND_SEARCH_BOTS, allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
