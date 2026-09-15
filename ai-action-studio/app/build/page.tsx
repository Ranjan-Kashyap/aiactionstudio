import type { Metadata } from "next";
import HubPage from "../components/HubPage";

export const metadata: Metadata = {
  title: "Build With AI",
  description:
    "Build websites, apps and tools with AI — no-code builders, GitHub Copilot, and vibe coding tutorials.",
  alternates: { canonical: "/build" },
};

export default function BuildPage() {
  return (
    <HubPage
      eyebrow="Build With AI"
      heading="What can you build with AI?"
      subheading="No-code and code, from websites to full apps"
      copy="AI isn't only useful for asking questions or generating content. It can help you build websites, digital products, automations, internal tools and software. As AI Action Studio grows, we'll explore what is actually possible — and build useful things along the way."
      supporting="This section is growing. Join the list to follow new builds as they ship."
      teasers={[
        { title: "What Is Vibe Coding? (And How to Try It Today)", href: "/build/vibe-coding" },
        {
          title: "How to Use GitHub Copilot (Beginner Tutorial)",
          href: "/build/github-copilot-tutorial",
        },
      ]}
      blogLinks={[{ href: "/blog/build", label: "Read more build notes on the blog" }]}
      source="build"
    />
  );
}
