import type { Metadata } from "next";
import HubPage from "../components/HubPage";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Courses, templates, digital products, software and AI-powered tools from AI Action Studio — built to help you put AI to work.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <HubPage
      eyebrow="Products"
      heading="We're building useful things too."
      copy="AI Action Studio isn't just a content brand. Over time, we'll create products that help creators, professionals, entrepreneurs and businesses put AI to work. That may include courses, templates, digital products, software and AI-powered tools."
      supporting="Nothing is for sale here yet. Join the list to hear about new products first."
      source="products"
    />
  );
}
