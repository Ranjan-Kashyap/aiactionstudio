import type { Metadata } from "next";
import HubPage from "../components/HubPage";

export const metadata: Metadata = {
  title: "AI Prompts",
  description:
    "Practical ChatGPT prompts and prompt engineering techniques for real tasks — not generic prompt lists.",
  alternates: { canonical: "/prompts" },
};

export default function PromptsPage() {
  return (
    <HubPage
      eyebrow="Prompts"
      heading="AI Prompts That Actually Work"
      copy="Most 'prompt libraries' are 200 generic one-liners nobody actually uses. This is the opposite — prompts and prompt-engineering techniques built around real tasks: writing, research, business, and getting AI to actually do what you meant instead of what you typed."
      teasers={[
        "10 ChatGPT Prompts That Actually Save You Time",
        "Prompt Engineering 101",
        "ChatGPT Prompts for Business",
        "AI Image Prompts (Midjourney & Stable Diffusion)",
        "Fun ChatGPT Prompts Worth Trying",
      ]}
      source="prompts"
    />
  );
}
