import type { Metadata } from "next";
import HubPage from "../components/HubPage";

export const metadata: Metadata = {
  title: "AI Workflows & Automation",
  description:
    "AI workflows and automation for research, content, marketing and business — build systems, not just prompts.",
  alternates: { canonical: "/workflows" },
};

export default function WorkflowsPage() {
  return (
    <HubPage
      eyebrow="Workflows"
      heading="Don't just collect tools. Build workflows."
      subheading="Workflows & Automation"
      copy="The real power of AI often comes from combining tools and processes. Learn practical workflows for research, content creation, marketing, productivity, automation and business."
      supporting="This section is growing. Join the list to get new workflows as they publish."
      teasers={[
        {
          title: "Build Your First AI Automation (No-Code)",
          href: "/workflows/ai-automation-no-code",
        },
      ]}
      source="workflows"
    />
  );
}
