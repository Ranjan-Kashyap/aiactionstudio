import type { MetadataRoute } from "next";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";
import { getAllSlugs } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/tutorials",
    "/tutorials/how-to-use-chatgpt",
    "/tutorials/what-is-generative-ai",
    "/tools",
    "/tools/best-ai-website-builders",
    "/prompts",
    "/prompts/chatgpt-prompts",
    "/workflows",
    "/workflows/ai-automation-no-code",
    "/resources",
    "/build",
    "/build/vibe-coding",
    "/build/github-copilot-tutorial",
    "/business",
    "/products",
    "/reviews",
    "/reviews/chatgpt-vs-gemini",
    "/reviews/chatgpt-vs-claude",
    "/free-checklist",
    "/tools/automation-roi-calculator",
    "/blog",
    ...BLOG_CATEGORIES.map((category) => `/blog/${category.slug}`),
    ...getAllSlugs().map((slug) => `/blog/${slug}`),
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/resources" ||
            route === "/tools" ||
            route === "/tools/automation-roi-calculator" ||
            route === "/tools/best-ai-website-builders"
          ? 0.9
          : 0.7,
  }));
}
