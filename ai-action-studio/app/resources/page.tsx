import type { Metadata } from "next";
import Link from "next/link";
import HubPage from "../components/HubPage";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "Practical prompts, templates, guides, checklists and free tools to help you put AI into action.",
  alternates: { canonical: "/resources" },
};

const resourceCards = [
  {
    href: "/tools/automation-roi-calculator",
    title: "Free AI Tools",
    body: "Useful tools you can try without adding another unnecessary subscription.",
  },
  {
    href: "/#newsletter",
    title: "Prompts",
    body: "Practical prompts for real tasks and workflows.",
  },
  {
    href: "/#newsletter",
    title: "Templates",
    body: "Ready-to-use templates that help you get started faster.",
  },
  {
    href: "/free-checklist",
    title: "Guides & Checklists",
    body: "Simple resources for learning and implementing AI.",
  },
];

export default function ResourcesPage() {
  return (
    <HubPage
      eyebrow="Resources"
      heading="Useful resources. Ready to use."
      copy="Get practical resources designed to help you put AI into action — prompts, templates, guides, checklists and free tools."
      source="resources"
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {resourceCards.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-xl border border-sand bg-white p-6 transition hover:border-mint"
          >
            <h2 className="text-[18px] font-semibold text-navy">{item.title}</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-slate">{item.body}</p>
          </Link>
        ))}
      </div>
    </HubPage>
  );
}
