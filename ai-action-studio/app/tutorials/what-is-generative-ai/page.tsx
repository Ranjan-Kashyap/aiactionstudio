import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "../../components/ArticlePage";

export const metadata: Metadata = {
  title: "What Is Generative AI? (Explained Simply)",
  description:
    "Generative AI explained in plain English — what it actually is, how it's different from other AI, and where you already use it.",
  alternates: { canonical: "/tutorials/what-is-generative-ai" },
};

export default function WhatIsGenerativeAiPage() {
  return (
    <ArticlePage
      eyebrow="Tutorials"
      backHref="/tutorials"
      backLabel="Tutorials"
      heading="What Is Generative AI? (Explained Simply)"
      intro="Generative AI is the term behind ChatGPT, Midjourney, and most of what people mean when they say 'AI' in 2026. Here's what it actually means, without the jargon."
      source="tutorial-generative-ai"
    >
      <h2>The plain-English definition</h2>
      <p>
        Generative AI refers to AI systems trained to create new content — text, images, audio,
        video, or code — rather than just analyzing or classifying existing data. Traditional AI
        might sort emails into spam or not-spam; generative AI writes you a new email from scratch.
      </p>
      <p>
        It works by learning patterns from huge amounts of existing content, then generating new
        content that follows those patterns based on what you ask for. That&apos;s why the same kind
        of tool can draft a post, sketch an image, or suggest a line of code: it is predicting the
        next useful piece of output, not looking up a stored answer.
      </p>

      <h2>How it&apos;s different from &quot;regular&quot; AI</h2>
      <p>
        Older, narrower AI is typically built for one specific task — recommend a product, detect
        fraud, sort a photo into a category. Generative AI is built to produce open-ended new output
        in response to a prompt, and the same model can write an email, summarize a document, and
        explain a concept without being separately built for each task.
      </p>

      <h2>Where you&apos;re probably already using it</h2>
      <ul>
        <li>
          ChatGPT, Claude, or Gemini for writing, brainstorming, and answering questions
        </li>
        <li>Midjourney and DALL·E-style tools for generating images from a description</li>
        <li>
          AI features inside tools you already use, like Google Docs, Notion, or Canva
        </li>
        <li>Code-completion tools like GitHub Copilot, suggesting the next lines as you type</li>
        <li>Voice and video tools that generate speech or video from text</li>
      </ul>

      <h2>What it&apos;s good at (and not)</h2>
      <p>
        <strong>Good at:</strong> first drafts, brainstorming, summarizing, explaining, repetitive
        writing and coding tasks, and working faster on things you already know how to do.
      </p>
      <p>
        <strong>Not reliable for:</strong> being your only source of truth on facts; anything where
        being wrong is costly (legal, medical, or financial specifics) without verification; and
        tasks that need genuine judgment about your specific, unique situation.
      </p>
      <p>
        Treat it as a fast assistant that still needs a human who understands the work — not as a
        replacement for checking the output.
      </p>

      <h2>Where to go next</h2>
      <p>
        If you want a hands-on starting point, read{" "}
        <Link href="/tutorials/how-to-use-chatgpt">How to Use ChatGPT</Link>. To browse tools built
        on generative AI, see <Link href="/tools">Best AI Tools in 2026</Link>.
      </p>
    </ArticlePage>
  );
}
