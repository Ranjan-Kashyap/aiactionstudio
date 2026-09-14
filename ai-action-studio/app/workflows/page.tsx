import type { Metadata } from "next";
import HubPage from "../components/HubPage";

export const metadata: Metadata = {
  title: "Workflows",
  description:
    "Learn practical AI workflows for research, content creation, marketing, productivity, automation and business.",
  alternates: { canonical: "/workflows" },
};

export default function WorkflowsPage() {
  return (
    <HubPage
      eyebrow="Workflows"
      heading="Don't just collect tools. Build workflows."
      copy="The real power of AI often comes from combining tools and processes. Learn practical workflows for research, content creation, marketing, productivity, automation and business."
      supporting="This section is growing. Join the list to get new workflows as they publish."
      source="workflows"
    />
  );
}
