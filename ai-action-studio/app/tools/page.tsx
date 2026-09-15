import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "../components/ArticlePage";
import { CONTENT_LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best AI Tools in 2026 (Tested, Not Hyped)",
  description:
    "The AI tools actually worth using in 2026, organized by category — writing, coding, images, productivity, and business.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <ArticlePage
      eyebrow="AI Tools"
      backHref="/"
      backLabel="Home"
      heading="Best AI Tools in 2026 (Tested, Not Hyped)"
      intro="Most 'best AI tools' lists are recycled from the last one, or paid placements dressed up as recommendations. This one only includes tools we'd actually point a friend to, organized by what you're trying to do — not by who has the biggest affiliate payout."
      lastUpdated={CONTENT_LAST_UPDATED}
      source="tools"
    >
      <h2>Writing &amp; content</h2>
      <ul>
        <li>
          <strong>ChatGPT</strong> — the default general-purpose writing and editing assistant, with
          the largest ecosystem of guides and integrations. Start here if you want one tool most
          people already understand. See{" "}
          <Link href="/tutorials/how-to-use-chatgpt">How to Use ChatGPT</Link>.
        </li>
        <li>
          <strong>Claude</strong> — another general-purpose writing assistant, with an edge on
          longer, more nuanced writing and careful tone. Compare it in{" "}
          <Link href="/reviews/chatgpt-vs-claude">ChatGPT vs Claude</Link>.
        </li>
      </ul>

      <h2>Coding &amp; building</h2>
      <ul>
        <li>
          <strong>GitHub Copilot</strong> — in-editor AI coding assistance that suggests code as you
          type and can chat about your file. See the{" "}
          <Link href="/build/github-copilot-tutorial">GitHub Copilot beginner tutorial</Link>.
        </li>
        <li>
          <strong>Cursor</strong> — an AI-first code editor for people who still want to see and
          edit the code. Useful if you&apos;re leaning into{" "}
          <Link href="/build/vibe-coding">vibe coding</Link>.
        </li>
      </ul>

      <h2>Websites</h2>
      <ul>
        <li>
          <strong>AI website builders</strong> — compared by who they&apos;re actually for, from a
          fast local-business site to a polished SaaS landing page. See{" "}
          <Link href="/tools/best-ai-website-builders">Best AI Website Builders in 2026</Link>.
        </li>
      </ul>

      <h2>Images &amp; design</h2>
      <ul>
        <li>
          <strong>Midjourney</strong> — AI image generation via prompts, widely used for concept art
          and visual content.
        </li>
      </ul>

      <h2>Voice &amp; presentations</h2>
      <ul>
        <li>
          <strong>ElevenLabs</strong> — an AI voice generator for realistic speech, narration, and
          voice cloning.
        </li>
        <li>
          <strong>Gamma</strong> — an AI presentation tool that turns an outline into a formatted
          deck.
        </li>
      </ul>

      <h2>Productivity &amp; automation</h2>
      <ul>
        <li>
          <strong>Zapier</strong> — a no-code automation platform for connecting apps and moving
          work between them without writing code.
        </li>
        <li>
          <strong>Make</strong> — a visual automation builder for more complex, multi-step workflows
          between tools.
        </li>
        <li>
          <strong>n8n</strong> — an automation tool, often self-hosted, for teams that want more
          control over how automations run. For how these pieces fit together, see{" "}
          <Link href="/workflows">Workflows</Link>.
        </li>
      </ul>

      <h2>How we test</h2>
      <p>
        We don&apos;t try to test every tool. When a comparison answers a real question, we look at
        actual tasks, friction, and whether we&apos;d point a friend to it — the same approach as{" "}
        <Link href="/blog/how-we-test-ai-tools">How We Test AI Tools</Link>. More tools notes live in
        the{" "}
        <Link href="/blog/tools">Tools</Link> category on the blog. Rankings in this
        category shift fast, so this page should be refreshed roughly every quarter.
      </p>

      <div className="mt-10 grid gap-4">
        <Link
          href="/tools/automation-roi-calculator"
          className="block rounded-xl border border-sand bg-white p-6 no-underline transition hover:border-mint"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
            Free tool
          </p>
          <h3 className="mt-2 text-[20px] font-semibold text-navy">Automation ROI Calculator</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-slate">
            See how many hours and dollars a repetitive task costs you every year — then decide if
            it&apos;s worth automating.
          </p>
        </Link>
        <Link
          href="/tools/best-ai-website-builders"
          className="block rounded-xl border border-sand bg-white p-6 no-underline transition hover:border-mint"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
            Comparison
          </p>
          <h3 className="mt-2 text-[20px] font-semibold text-navy">
            Best AI Website Builders in 2026
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-slate">
            Wix, Framer, Hostinger, 10Web, Durable, and Squarespace — compared by what you&apos;re
            actually building.
          </p>
        </Link>
        <Link
          href="/reviews"
          className="block rounded-xl border border-sand bg-white p-6 no-underline transition hover:border-mint"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
            Comparisons
          </p>
          <h3 className="mt-2 text-[20px] font-semibold text-navy">
            ChatGPT vs Gemini vs Claude
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-slate">
            Head-to-head comparisons for the assistants most people actually choose between.
          </p>
        </Link>
      </div>
    </ArticlePage>
  );
}
