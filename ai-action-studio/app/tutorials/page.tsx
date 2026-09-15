import type { Metadata } from "next";
import HubPage from "../components/HubPage";

export const metadata: Metadata = {
  title: "AI Tutorials",
  description:
    "Step-by-step AI tutorials for beginners — how to use ChatGPT, Gemini, Claude, Midjourney and more, no jargon.",
  alternates: { canonical: "/tutorials" },
};

export default function TutorialsPage() {
  return (
    <HubPage
      eyebrow="Tutorials"
      heading="AI Tutorials: How to Actually Use ChatGPT, Gemini, Claude & More"
      copy="Most AI tutorials assume you already know what a prompt is. These don't. Clear, step-by-step walkthroughs for actually using ChatGPT, Gemini, Claude, Midjourney and the other tools everyone's talking about — written for people getting started, not people showing off."
      teasers={[
        {
          title: "How to Use ChatGPT (Complete Beginner's Guide)",
          href: "/tutorials/how-to-use-chatgpt",
        },
        {
          title: "What Is Generative AI? (Explained Simply)",
          href: "/tutorials/what-is-generative-ai",
        },
        "What Is Artificial Intelligence? (Explained Simply)",
        "How to Use Gemini AI",
        "How to Use Claude AI",
        "How to Use Midjourney",
      ]}
      source="tutorials"
    />
  );
}
