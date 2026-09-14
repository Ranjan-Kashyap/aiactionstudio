import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "../../components/ArticlePage";
import { PRICING_LAST_CHECKED } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Use GitHub Copilot (Beginner Tutorial)",
  description:
    "How to install, set up, and actually use GitHub Copilot in your code editor — a step-by-step beginner tutorial.",
  alternates: { canonical: "/build/github-copilot-tutorial" },
};

export default function GithubCopilotTutorialPage() {
  return (
    <ArticlePage
      eyebrow="Build With AI"
      backHref="/build"
      backLabel="Build"
      heading="How to Use GitHub Copilot (Beginner Tutorial)"
      intro="GitHub Copilot is the most widely used AI coding assistant, built into the editor you're probably already using. Here's how to actually set it up and use it well, not just turn it on and hope."
      lastChecked={PRICING_LAST_CHECKED}
      source="build-copilot"
    >
      <h2>What it does</h2>
      <p>
        Copilot suggests code as you type (autocomplete on steroids), and has a chat mode where you
        can describe what you want in plain English and it writes or edits code for you directly in
        your editor.
      </p>

      <h2>Getting started (step by step)</h2>
      <ol>
        <li>Make sure you have a GitHub account (free to create at github.com).</li>
        <li>
          Install a supported editor if you don&apos;t already use one — VS Code is the most common
          starting point.
        </li>
        <li>Install the GitHub Copilot extension from the editor&apos;s extension marketplace.</li>
        <li>Sign in with your GitHub account when prompted.</li>
        <li>
          Start typing in a code file — Copilot will show gray &quot;ghost text&quot; suggestions;
          press Tab to accept one.
        </li>
        <li>
          Open the Copilot Chat panel to ask it to explain, write, or fix code in plain English
          instead of just autocompleting.
        </li>
      </ol>

      <h2>Pricing (as of Sept 2026)</h2>
      <p>
        A free tier includes a limited number of completions and chat messages per month. Pro (about
        $10/month) is GitHub&apos;s main individual plan. Pro+ (about $39/month) adds a higher usage
        allowance and access to premium/frontier models for more complex tasks. Business and
        Enterprise tiers add team management and admin controls. GitHub also lists a Copilot Max
        plan at $100/month for heavier individual usage — check GitHub&apos;s current plans page
        before you subscribe, as sign-ups for some paid Copilot plans have been paused at times in
        2026.
      </p>

      <h2>Tips for actually using it well</h2>
      <ul>
        <li>Write a clear comment describing what you want before you start typing code — Copilot uses it as context.</li>
        <li>Don&apos;t blindly accept suggestions on logic you don&apos;t understand — read before you Tab.</li>
        <li>
          Use Copilot Chat for &quot;explain this code&quot; or &quot;why is this failing&quot; as
          much as for writing new code.
        </li>
        <li>
          It&apos;s strongest on common, well-documented patterns and weaker on unusual or highly
          specific business logic.
        </li>
        <li>
          Treat it like a fast junior collaborator, not an authority — review everything that touches
          production or real data.
        </li>
      </ul>

      <h2>What to try next</h2>
      <p>
        Copilot is one piece of a bigger shift — see{" "}
        <Link href="/build/vibe-coding">what vibe coding is</Link>. Or{" "}
        <Link href="/tools">browse more AI build tools</Link>.
      </p>
    </ArticlePage>
  );
}
