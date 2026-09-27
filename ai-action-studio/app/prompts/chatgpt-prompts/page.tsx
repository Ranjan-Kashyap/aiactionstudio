import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "../../components/ArticlePage";
import CopyButton from "../../components/CopyButton";
import { YOUTUBE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "10 ChatGPT Prompts That Actually Save Me Hours Every Week",
  description:
    "The 10 ChatGPT prompts I use every week to run my businesses: competitor research, social posts, blog posts, images, ad data and proposals. Copy them free.",
  alternates: { canonical: "/prompts/chatgpt-prompts" },
};

type PromptStep = {
  label?: string;
  text: string;
};

type PromptItem = {
  title: string;
  useFor: string;
  steps: PromptStep[];
  why: string;
  watchOut?: string;
};

const prompts: PromptItem[] = [
  {
    title: "Competitor research doc",
    useFor:
      "Understanding what a competitor sells, how they position themselves and what they post, before you plan your own content.",
    steps: [
      {
        text: `Act as a market research analyst. Research [competitor name] ([website URL]) and their social channels ([LinkedIn / Instagram / YouTube URLs]).

Build a competitor brief with these sections:
1. What they sell and to whom (offers, and pricing if it's public)
2. Their positioning in one sentence, and the main promises on their homepage
3. Their content: topics and formats they post most, how often, and which posts get the most engagement
4. What they do well that we should learn from
5. Gaps: questions their audience asks that they don't answer well

Link the page or post behind every claim. If you can't verify something, say so instead of guessing. End with 5 content ideas we could make that they haven't.`,
      },
    ],
    why: "A fixed structure turns an afternoon of clicking around into one readable brief, and asking for a link behind every claim makes it easy to check.",
    watchOut:
      "Turn on web search (or Deep Research) first. It can still misread engagement or miss anything that isn't public, so open the links before you act on it.",
  },
  {
    title: "Social post + matching image",
    useFor: "Going from a topic to a ready-to-post update and its image in a few minutes.",
    steps: [
      {
        label: "Step 1 · the post",
        text: `Write a [LinkedIn / Instagram] post about [topic] for [audience].

First give me 3 hook options: one line each, stating a problem or a surprising fact.

Then write the post using the strongest hook: under 150 words, short paragraphs, and end with one question to the reader.`,
      },
      {
        label: "Step 2 · the image",
        text: `Now create a square image for this post.

Style: [clean, flat, minimal].
Use only these colours: [#hex, #hex, #hex].
Put the headline "[short headline]" in large, clean type. No other text.`,
      },
    ],
    why: "Asking for three hooks first means you choose the opening instead of accepting the first one it writes. Giving exact colours keeps the image on-brand.",
    watchOut: "AI images still misspell words sometimes. Check any text inside the image before you post it.",
  },
  {
    title: "LinkedIn post from a client case study",
    useFor: "Turning real results into a post people actually read, without exaggerating them.",
    steps: [
      {
        text: `Here's a client case study: [paste or upload].

Write a LinkedIn post for [audience, e.g. ecommerce founders].

Structure: a hook with the single most surprising number; the situation before; the one change we made; the result with exact numbers; one lesson other founders can apply; a question at the end.

No client names. Under 1,300 characters. Do not invent any number that isn't in the case study.`,
      },
    ],
    why: "Your best content comes from real results. The structure keeps the post focused on one change and one lesson, and the last line stops it from inventing numbers.",
  },
  {
    title: "Blog post, planned before it's written",
    useFor: "Writing SEO blog posts that answer the reader's question and still sound like you.",
    steps: [
      {
        label: "Step 1 · plan first",
        text: `Act as an SEO content writer. I want a blog post on [topic].

Primary keyword: [keyword].
Audience: [who they are and what they're trying to decide].

Before writing anything, give me: a title under 60 characters, a meta description under 155 characters, and an H2/H3 outline. Wait for my approval.`,
      },
      {
        label: "Step 2 · then write",
        text: `Now write it.

Answer the main question in the first 100 words. Use short paragraphs, one table where it helps, and an FAQ with 4 questions.

Wherever a personal story or a real number from my business should go, leave a [MY EXAMPLE] placeholder instead of making one up.`,
      },
    ],
    why: "Fixing the outline first is much faster than rewriting a finished draft that went the wrong way.",
    watchOut:
      "Those [MY EXAMPLE] placeholders are the most important part. Fill them with your own stories and numbers. That's what makes a post worth reading and worth ranking.",
  },
  {
    title: "Edit AI writing so it sounds like you",
    useFor: "Making an AI draft read like a real person wrote it, in your own voice.",
    steps: [
      {
        text: `Act as a professional human editor and rewrite the following text so it sounds naturally written by a real person instead of an AI system. Preserve the original meaning, but improve sentence rhythm, flow, transitions, emotional nuance, clarity, and conversational naturalness. Avoid robotic phrasing, repetitive sentence patterns, overly formal wording, and predictable structure.

Match my voice. Here's a sample of how I write: [paste 2–3 paragraphs you wrote yourself].
Keep every fact, number and name exactly as it is. Don't add new claims.

Here is the text: [paste text]`,
      },
    ],
    why: "A sample of your own writing gives it something real to match, and the last lines stop it from changing your facts while it rewrites.",
    watchOut:
      "Rewording helps, but it isn't what makes writing feel human. Your own stories and experience do, and no prompt can add those for you.",
  },
  {
    title: "Professional photo from one image",
    useFor: "A clean cut-out or a professional-looking headshot from a photo you already have.",
    steps: [
      {
        label: "Step 1 · clean cut-out",
        text: `Remove the background from this photo and give me a PNG with a transparent background.

Don't change my face, hair or clothes.`,
      },
      {
        label: "Step 2 · the headshot",
        text: `Using this same person, create a professional head-and-shoulders photo: [navy blazer], soft studio lighting, plain [light grey] background, looking at the camera, natural skin texture.

Keep the facial features identical to the original photo.`,
      },
    ],
    why: "Splitting it into two steps gives you a usable cut-out even if you don't like the headshot.",
    watchOut:
      "Faces can drift slightly in AI images. Compare the result closely before you use it, and only use photos of yourself.",
  },
  {
    title: "Brand-consistent slide images",
    useFor: "Illustrations for a presentation that look like one set, in your brand colours.",
    steps: [
      {
        text: `I'm making a presentation on [topic] for [audience]. Our brand colours are [Deep Navy #0A0F1D], [Electric Mint #00F5A0] and [Warm Ivory #FAF7F0], and our font is [Poppins].

First, give me a 10-slide outline: a title and one key message per slide.

Then create a 16:9 illustration for slides [2, 5 and 8] in a flat, minimal style, using only our brand colours and no text inside the images.`,
      },
    ],
    why: "Giving the same colours and style every time is what makes AI images look like they belong together.",
    watchOut:
      "Keep one style sentence and paste it into every image request, even in a new chat. That's the trick to a consistent set.",
  },
  {
    title: "Read my ad data",
    useFor: "Finding where your ad budget is being wasted from a raw export, in minutes.",
    steps: [
      {
        text: `I've uploaded a [Meta Ads] export for the last [30] days. Act as a performance marketer.

Tell me:
1. The 3 campaigns or ads wasting the most money
2. The 3 performing best
3. What you'd change this week, in order of impact

Show the numbers behind each point in a table. If a metric you need to judge profitability is missing (like revenue or margin), tell me instead of assuming.`,
      },
    ],
    why: "Asking for the numbers in a table lets you check every recommendation, and the last line stops it from guessing at profit.",
    watchOut:
      "It only sees what's in the file. Remove client names first, and double-check its conclusions in Ads Manager before changing budgets.",
  },
  {
    title: "Upwork proposal that gets read",
    useFor: "Replying to a job post in a way that stands out from dozens of copy-paste proposals.",
    steps: [
      {
        text: `Here's an Upwork job post: [paste].
Here's my background: [2–3 lines, plus one relevant result with a number].

Write a proposal under 150 words. The first line must show I understand their specific problem, not introduce me. Mention one relevant result with a number. End by suggesting a first step or asking one smart question about their project.

No "Dear Hiring Manager" and no list of all my skills.`,
      },
    ],
    why: "Clients read the first line and decide. Starting with their problem, not your introduction, is what gets the rest read.",
  },
  {
    title: "The line that makes every prompt better",
    useFor: "Add this to the end of any prompt above, or any prompt you write.",
    steps: [
      {
        label: "Add this to any prompt",
        text: `Before you write anything, ask me up to 5 questions you need answered to do this well. Ask them one at a time and wait for my answers.`,
      },
    ],
    why: "Most bad AI answers come from missing context. Making it ask first means it works from your details instead of guessing.",
  },
];

export default function ChatGptPromptsPage() {
  return (
    <ArticlePage
      eyebrow="Prompts"
      backHref="/prompts"
      backLabel="Prompts"
      heading="10 ChatGPT Prompts That Actually Save Me Hours Every Week"
      intro="I run three businesses, mostly on my own. These are the ten prompts I use every week to do it: for research, content, images, ad data and proposals. Copy any of them, swap in your own details in the [brackets], and treat the first reply as a draft you can steer."
      source="prompts-chatgpt"
    >
      <p>
        Prefer to see them in action? I walk through all ten on real work in the video on our{" "}
        <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
          YouTube channel
        </a>
        .
      </p>

      {prompts.map((item, index) => (
        <article key={item.title} className="prompt-card">
          <p className="prompt-kicker">Prompt {String(index + 1).padStart(2, "0")}</p>
          <h2>{item.title}</h2>
          <p className="prompt-use">{item.useFor}</p>
          {item.steps.map((step) => (
            <div key={step.text.slice(0, 40)} className="prompt-step">
              <div className="prompt-step-head">
                <span className="prompt-step-label">{step.label ?? "Prompt"}</span>
                <CopyButton text={step.text} />
              </div>
              <pre className="prompt-text">{step.text}</pre>
            </div>
          ))}
          <p className="prompt-why">
            <strong>Why it works:</strong> {item.why}
          </p>
          {item.watchOut ? (
            <p className="prompt-why prompt-watch">
              <strong>Watch out:</strong> {item.watchOut}
            </p>
          ) : null}
        </article>
      ))}

      <h2>If you only use one</h2>
      <p>
        Start with number ten. Adding &quot;ask me questions first&quot; to any prompt fixes the most
        common problem with AI answers: it didn&apos;t have enough context, so it guessed.
      </p>
      <p>
        New to ChatGPT? Start with{" "}
        <Link href="/tutorials/how-to-use-chatgpt">How to Use ChatGPT</Link>. Or go back to{" "}
        <Link href="/prompts">Prompts</Link> for more.
      </p>
    </ArticlePage>
  );
}
