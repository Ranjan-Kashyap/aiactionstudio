import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/tutorials",
    "/tutorials/how-to-use-chatgpt",
    "/tools",
    "/prompts",
    "/workflows",
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
            route === "/tools/automation-roi-calculator"
          ? 0.9
          : 0.7,
  }));
}
