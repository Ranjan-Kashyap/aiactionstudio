import type { MetadataRoute } from "next";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";
import { getAllPostsMeta } from "@/lib/blog";
import { CONTENT_LAST_UPDATED, SITE_URL } from "@/lib/site";
import { SERVICES } from "@/src/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceMap = new Map(SERVICES.map((service) => [service.href, service]));
  const serviceRoutes = SERVICES.map((service) => service.href);
  const allPosts = getAllPostsMeta();
  const postMap = new Map(allPosts.map((post) => [`/blog/${post.slug}`, post]));

  const agencyUpdatedDate = new Date(
    SERVICES[0]?.lastUpdated ?? "November 23, 2026",
  );
  const staticContentDate = new Date(CONTENT_LAST_UPDATED);

  const routes = [
    "",
    "/services",
    ...serviceRoutes,
    "/contact",
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
    "/reviews",
    "/reviews/chatgpt-vs-gemini",
    "/reviews/chatgpt-vs-claude",
    "/free-checklist",
    "/tools/automation-roi-calculator",
    "/blog",
    ...BLOG_CATEGORIES.map((category) => `/blog/${category.slug}`),
    ...allPosts.map((post) => `/blog/${post.slug}`),
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer",
  ];

  return routes.map((route) => {
    let priority = 0.7;
    if (route === "") {
      priority = 1;
    } else if (
      route === "/services" ||
      serviceRoutes.includes(route) ||
      route === "/resources" ||
      route === "/tools" ||
      route === "/tools/automation-roi-calculator" ||
      route === "/tools/best-ai-website-builders"
    ) {
      priority = 0.9;
    } else if (route === "/contact") {
      priority = 0.8;
    }

    const service = serviceMap.get(route);
    const post = postMap.get(route);

    let lastModified = staticContentDate;
    if (service) {
      lastModified = new Date(service.lastUpdated);
    } else if (post) {
      lastModified = new Date(post.date);
    } else if (
      route === "" ||
      route === "/services" ||
      route === "/contact" ||
      route === "/about" ||
      route === "/resources"
    ) {
      lastModified = agencyUpdatedDate;
    }

    return {
      url: `${SITE_URL}${route}`,
      lastModified,
      changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
      priority,
    };
  });
}
