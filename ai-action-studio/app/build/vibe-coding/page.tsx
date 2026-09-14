import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "../../components/ArticlePage";

export const metadata: Metadata = {
  title: "What Is Vibe Coding? (And How to Try It Today)",
  description:
    "Vibe coding means describing what you want in plain English and letting AI write the code. Here's what it actually is, the tools to try, and when it works.",
  alternates: { canonical: "/build/vibe-coding" },
};

export default function VibeCodingPage() {
  return (
    <ArticlePage
      eyebrow="Build With AI"
      backHref="/build"
      backLabel="Build"
      heading="What Is Vibe Coding? (And How to Try It Today)"
      intro="Vibe coding is the term for building software by describing what you want in plain English and letting an AI tool write, run, and fix the code — with little or no hand-written code from you. It went from a niche term to one of the most-searched phrases in AI in 2026. Here's what it actually means, which tools are worth trying, and where it breaks down."
      source="build-vibe-coding"
    >
      <h2>What &quot;vibe coding&quot; actually means</h2>
      <p>
        Instead of writing code line by line, you describe the outcome — &quot;build me a landing
        page with a signup form that emails me new subscribers&quot; — and an AI coding tool generates,
        runs, and iterates on the code for you, often in natural-language back-and-forth. The term
        was coined to describe leaning fully into AI-generated code and iterating by feel and results
        rather than reading every line — hence &quot;vibe.&quot;
      </p>

      <h2>Tools people use for vibe coding</h2>
      <ul>
        <li>
          <strong>Cursor</strong> — an AI-first code editor built on top of familiar code-editor
          conventions, popular with developers who still want to see and edit the code.
        </li>
        <li>
          <strong>Claude Code</strong> and similar terminal-based AI coding agents — describe your
          task in a terminal and the AI writes, tests, and iterates on code directly in your project.
        </li>
        <li>
          <strong>Replit, Bolt, Lovable, v0</strong> — browser-based &quot;describe an app, get a
          working app&quot; builders aimed at non-developers and fast prototyping.
        </li>
      </ul>

      <h2>Who it&apos;s actually good for</h2>
      <ul>
        <li>Non-developers prototyping an idea fast, before deciding whether to invest in a &quot;real&quot; build.</li>
        <li>
          Developers automating the boring, well-understood parts of a build so they can focus on
          the hard parts.
        </li>
        <li>Founders and solo builders validating an idea without hiring a developer first.</li>
      </ul>

      <h2>Where it breaks down</h2>
      <ul>
        <li>Security and data-handling code still needs a human who understands what&apos;s actually happening.</li>
        <li>
          AI-generated code can work while being subtly wrong or inefficient — fine for a prototype,
          risky for anything handling real user data or money.
        </li>
        <li>
          It&apos;s easy to end up with something that &quot;works&quot; but that nobody, including
          you, can maintain or debug later.
        </li>
      </ul>

      <h2>How to actually try it</h2>
      <ol>
        <li>Pick one small, real task — not a full product.</li>
        <li>
          Describe the outcome in plain language to a tool like Cursor or a browser-based builder.
        </li>
        <li>Run it, see what breaks, and iterate by describing the fix rather than debugging line-by-line.</li>
        <li>Treat the first result as a draft.</li>
      </ol>

      <p>
        Copilot is one piece of this same shift — see{" "}
        <Link href="/build/github-copilot-tutorial">How to Use GitHub Copilot</Link>. Or{" "}
        <Link href="/tools">browse more AI build tools</Link>.
      </p>
    </ArticlePage>
  );
}
