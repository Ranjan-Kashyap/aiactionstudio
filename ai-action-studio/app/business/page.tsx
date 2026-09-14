import type { Metadata } from "next";
import HubPage from "../components/HubPage";

export const metadata: Metadata = {
  title: "AI for Business",
  description:
    "Practical AI for teams, operators and business owners — tools, workflows and ideas you can put to work.",
  alternates: { canonical: "/business" },
};

export default function BusinessPage() {
  return (
    <HubPage
      eyebrow="Business"
      heading="AI for business."
      copy="Practical AI for teams, operators and business owners. This section is growing."
      supporting="Join the list to hear about new business resources first."
      source="business"
    />
  );
}
