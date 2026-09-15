import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "../../components/ArticlePage";
import { PRICING_LAST_CHECKED } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Use ChatGPT: A Complete Beginner's Guide",
  description:
    "New to ChatGPT? Here's exactly how to sign up, write your first prompt, and avoid the mistakes most beginners make — no jargon.",
  alternates: { canonical: "/tutorials/how-to-use-chatgpt" },
};

export default function HowToUseChatGptPage() {
  return (
    <ArticlePage
      eyebrow="Tutorials"
      backHref="/tutorials"
      backLabel="Tutorials"
      heading="How to Use ChatGPT (Complete Beginner's Guide)"
      intro="ChatGPT is the fastest way most people start using AI — and also the easiest to use wrong. This guide skips the hype and walks through exactly what to do: how to sign up, how to write a prompt that actually gets you something useful, and the handful of mistakes that trip up almost every beginner."
      lastChecked={PRICING_LAST_CHECKED}
      source="tutorial-chatgpt"
    >
      <h2>What ChatGPT actually is</h2>
      <p>
        ChatGPT is a conversational AI made by OpenAI — you type what you want in plain English, and
        it responds. It can write, explain, summarize, brainstorm, analyze, and increasingly generate
        images and analyze files. It is not connected to the live internet by default on every plan,
        and it can be confidently wrong. Treat it as a very fast, very well-read assistant that still
        needs a fact-check.
      </p>

      <h2>Getting started (step by step)</h2>
      <ol>
        <li>
          Go to chatgpt.com and sign up with an email, Google, or Apple account — no credit card
          required for the free plan.
        </li>
        <li>Verify your account and log in.</li>
        <li>
          You&apos;ll land in a blank chat window — type a question or task directly into the message
          box at the bottom.
        </li>
        <li>
          ChatGPT replies in seconds. Ask a follow-up in the same conversation and it remembers the
          context.
        </li>
      </ol>

      <h2>Free vs. paid — what you actually get</h2>
      <p>
        Free gives full access to core chat with usage limits and slower access during peak times.
        Plus (about $20/month) removes most of those limits and adds faster responses, more image
        generation, and priority access to newer models. Pro (~$200/month) is built for heavy daily
        users and researchers who need the least-restricted access. Most beginners should start free
        and only upgrade once they hit a limit that actually bothers them.
      </p>

      <h2>How to write a prompt that works</h2>
      <ul>
        <li>
          Be specific about the outcome you want, not just the topic. &quot;Write a 3-sentence
          LinkedIn post announcing a product launch for a small SaaS company&quot; beats &quot;write
          me a post about my product.&quot;
        </li>
        <li>
          Give it context it wouldn&apos;t otherwise have — your audience, your tone, constraints
          like word count.
        </li>
        <li>Ask it to ask you clarifying questions first if the task is complex.</li>
        <li>
          Iterate — treat the first response as a draft, not a final answer, and tell it what to
          change.
        </li>
        <li>
          For anything factual (numbers, dates, quotes, legal or medical specifics), verify
          independently before you use it.
        </li>
      </ul>

      <h2>Common beginner mistakes</h2>
      <ul>
        <li>Trusting factual claims without checking them.</li>
        <li>Writing one-line prompts and expecting a finished, polished result.</li>
        <li>Not telling it who the audience is or what tone you want.</li>
        <li>Starting a new chat for every follow-up instead of continuing the conversation.</li>
        <li>
          Pasting sensitive personal or business data into prompts without thinking about where that
          data goes.
        </li>
      </ul>

      <h2>What to try next</h2>
      <p>
        Once you can get a useful first draft, steal from people who already solved the prompt
        problem: see{" "}
        <Link href="/prompts/chatgpt-prompts">10 ChatGPT Prompts That Actually Save You Time</Link>.
        Not sure ChatGPT is the right fit? See how it compares in{" "}
        <Link href="/reviews/chatgpt-vs-gemini">ChatGPT vs Gemini</Link> and{" "}
        <Link href="/reviews/chatgpt-vs-claude">ChatGPT vs Claude</Link>.
      </p>
    </ArticlePage>
  );
}
