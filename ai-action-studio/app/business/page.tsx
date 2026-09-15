import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "../components/ArticlePage";

export const metadata: Metadata = {
  title: "AI for Small Business: Tools, Marketing & Automation That Pay Off",
  description:
    "Practical AI for small business owners — marketing tools, automation and lead generation that actually save time and money.",
  alternates: { canonical: "/business" },
};

export default function BusinessPage() {
  return (
    <ArticlePage
      eyebrow="Business"
      backHref="/"
      backLabel="Home"
      heading="AI for Small Business: Tools, Marketing & Automation That Pay Off"
      intro="Most 'AI for business' content is written for enterprises with a data science team. This isn't. It's for a small business owner or solo operator deciding whether a specific AI tool or workflow is worth the money and the setup time."
      source="business"
    >
      <h2>Where AI actually pays off for a small business</h2>
      <ul>
        <li>
          <strong>Marketing content</strong> — drafting social posts, ad copy, and email campaigns
          faster, then editing rather than starting from a blank page.
        </li>
        <li>
          <strong>Customer-facing chat</strong> — answering common customer questions automatically
          before a human needs to step in.
        </li>
        <li>
          <strong>Lead follow-up</strong> — drafting and sending timely follow-up messages to leads
          who&apos;d otherwise go cold.
        </li>
        <li>
          <strong>Admin and reporting</strong> — summarizing sales data, generating first-draft
          reports, and drafting routine business documents.
        </li>
        <li>
          <strong>Content repurposing</strong> — turning one piece of content (a video, a blog post)
          into multiple formats for different channels.
        </li>
      </ul>

      <h2>A simple way to decide what to automate</h2>
      <p>
        Before you pay for a tool or build a workflow, it&apos;s worth putting a number on what the
        manual version actually costs you. Our free{" "}
        <Link href="/tools/automation-roi-calculator">Automation ROI Calculator</Link> estimates the
        hours and dollars a repetitive task costs you every year — a quick gut-check before you
        commit to anything.
      </p>

      <h2>Getting started without overcomplicating it</h2>
      <ul>
        <li>
          Pick ONE repetitive task you already do weekly and try automating just that, not your
          whole operation.
        </li>
        <li>Use the free tier of a tool before paying for anything.</li>
        <li>
          Measure whether it actually saved time after 2–4 weeks before deciding to keep it.
        </li>
        <li>
          Don&apos;t rebuild a whole system around AI on day one — layer it into what already works.
        </li>
      </ul>

      <h2>What to explore next</h2>
      <p>
        If you want the how-to, start with{" "}
        <Link href="/workflows/ai-automation-no-code">Build Your First AI Automation (No-Code)</Link>
        . To browse tools by job, see{" "}
        <Link href="/tools">Best AI Tools in 2026</Link>. And if you still don&apos;t know whether a
        task is worth the setup, run the{" "}
        <Link href="/tools/automation-roi-calculator">Automation ROI Calculator</Link> first.
      </p>
    </ArticlePage>
  );
}
