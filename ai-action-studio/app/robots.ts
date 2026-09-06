import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://aiactionstudio.com/sitemap.xml",
    host: "https://aiactionstudio.com",
  };
}
