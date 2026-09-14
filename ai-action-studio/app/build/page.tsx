import type { Metadata } from "next";
import HubPage from "../components/HubPage";

export const metadata: Metadata = {
  title: "Build With AI",
  description:
    "Explore how AI can help you build websites, digital products, automations, internal tools and software.",
  alternates: { canonical: "/build" },
};

export default function BuildPage() {
  return (
    <HubPage
      eyebrow="Build With AI"
      heading="What can you build with AI?"
      copy="AI isn't only useful for asking questions or generating content. It can help you build websites, digital products, automations, internal tools and software. As AI Action Studio grows, we'll explore what is actually possible — and build useful things along the way."
      supporting="This section is growing. Join the list to follow new builds as they ship."
      source="build"
    />
  );
}
