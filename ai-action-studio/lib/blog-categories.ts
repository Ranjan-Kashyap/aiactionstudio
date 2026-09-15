export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
};

/** Keep slugs in sync with scripts/generate-blog.mjs ALLOWED_CATEGORIES. */
export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "tutorials",
    name: "Tutorials",
    description:
      "AI tutorials from the studio — how to actually use the tools, written as notes from real use.",
  },
  {
    slug: "prompts",
    name: "Prompts",
    description:
      "Practical prompt notes from AI Action Studio — what worked, what didn't, and what to reuse.",
  },
  {
    slug: "tools",
    name: "Tools",
    description:
      "Notes on AI tools from AI Action Studio — testing, picking, and using them without the hype.",
  },
  {
    slug: "comparisons",
    name: "Comparisons",
    description:
      "Head-to-head AI tool comparison notes from AI Action Studio — which option actually fits the job.",
  },
  {
    slug: "workflows",
    name: "Workflows",
    description:
      "AI workflow notes from AI Action Studio — combining tools into systems, not just collecting them.",
  },
  {
    slug: "automation",
    name: "Automation",
    description:
      "AI automation notes from AI Action Studio — no-code setups and the tasks worth automating.",
  },
  {
    slug: "business",
    name: "Business",
    description:
      "AI for small business notes from AI Action Studio — marketing, ops, and what actually pays off.",
  },
  {
    slug: "build",
    name: "Build",
    description:
      "Build-with-AI notes from AI Action Studio — vibe coding, Copilot, and shipping real things.",
  },
];

export const BLOG_CATEGORY_SLUGS = BLOG_CATEGORIES.map((category) => category.slug);

export function getBlogCategory(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((category) => category.slug === slug);
}
