import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/tools",
    "/workflows",
    "/resources",
    "/build",
    "/products",
    "/reviews",
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
