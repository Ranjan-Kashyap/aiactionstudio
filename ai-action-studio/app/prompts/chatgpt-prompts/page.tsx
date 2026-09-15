import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "../../components/ArticlePage";

export const metadata: Metadata = {
  title: "10 ChatGPT Prompts That Actually Save You Time",
  description:
    "Ten ChatGPT prompts for real tasks — writing, research, planning and business — that people actually reuse, not generic one-liners.",
  alternates: { canonical: "/prompts/chatgpt-prompts" },
};

const prompts = [
  {
    title: "Turn a messy brain-dump into a clear plan",
    prompt: `Here are my messy notes about [TASK OR PROJECT]:

[PASTE YOUR NOTES]

Turn this into a clear action plan. Group related items, drop anything that isn't actually a next step, and rank the remaining actions as:
1) do this week
2) do this month
3) park or drop

Keep the plan in plain language. Don't add new work I didn't mention unless it's a missing prerequisite for something I already listed — and if you add that, label it as an assumption.`,
    why: "It gives ChatGPT a sorting job with a format, instead of asking it to \"make this better\" and hoping it guesses what you needed.",
  },
  {
    title: "Rewrite something in a specific tone",
    prompt: `Rewrite the text below so it matches this tone: [TONE, e.g. calm and direct / warm and informal / formal and brief].
Audience: [WHO WILL READ THIS].
Keep the original meaning. Don't add new claims, don't make it longer unless the original is unclear, and flag any sentence you had to interpret.

Original text:
[PASTE TEXT]`,
    why: "Naming the tone, the audience, and what must not change stops it from rewriting your meaning along with your wording.",
  },
  {
    title: "Summarize a long document into key points",
    prompt: `Summarize the following into exactly [NUMBER] key takeaways. Write each takeaway as a short paragraph — no bullets, no intro, no conclusion. If something is uncertain in the source, say so.

Text:
[PASTE OR DESCRIBE THE DOCUMENT]`,
    why: "A count and a format force a real condensation. \"Summarize this\" usually produces a slightly shorter version of the same mess.",
  },
  {
    title: "Draft a first version of an email you're dreading",
    prompt: `Draft an email I don't want to write.

Situation: [WHAT HAPPENED / WHAT I NEED TO SAY]
Recipient: [WHO THEY ARE AND OUR RELATIONSHIP]
Desired outcome: [WHAT I WANT THEM TO DO OR UNDERSTAND]
Constraints: [TONE, LENGTH, ANYTHING I MUST NOT SAY]

Write a subject line and a body I can send after a light edit. Be clear, not stiff. Don't apologize unless I asked you to.`,
    why: "The hard part of a difficult email is the context, not the sentences. Once that's in the prompt, the first draft is usually usable.",
  },
  {
    title: "Turn a rough idea into a content outline",
    prompt: `Turn this rough idea into a structured outline for a [blog post / video / presentation]: [TOPIC OR IDEA].

Audience: [WHO IT'S FOR]
Goal: [WHAT THEY SHOULD KNOW OR DO AFTER]
Length: [e.g. 1,200-word post / 8-minute video / 10-slide deck]

Give me: a working title, 5–8 sections with 2–3 bullets of what each section covers, and a suggested close. Don't write the full piece yet.`,
    why: "Asking for an outline first is faster than asking for a finished draft you'll throw away. You can steer the structure before any of the writing exists.",
  },
  {
    title: "Explain something complicated simply",
    prompt: `Explain [TOPIC] to someone who is [LEVEL, e.g. new to this / a busy manager / a high-school student]. Use plain English, short examples, and no jargon unless you define it in the same sentence. End with a 3-sentence recap I could repeat from memory.`,
    why: "\"Explain this\" defaults to a generic encyclopedia voice. A reader level and a recap tell it how simple, and how short, you actually need.",
  },
  {
    title: "Get honest feedback on your own writing",
    prompt: `Critique this writing. Don't compliment it unless a strength actually helps the reader. Focus on: clarity, tone, weak claims, and anything a [AUDIENCE] would bounce off.

What this is for: [PURPOSE]
Audience: [WHO]
Text:
[PASTE DRAFT]

Return: (1) the 3 biggest problems, (2) line-level notes on the weakest paragraphs, (3) a rewritten version of the opening only.`,
    why: "Without this, ChatGPT tends to praise the draft. You're asking it to edit, not to encourage you.",
  },
  {
    title: "Prep for a meeting or a difficult conversation",
    prompt: `Help me prep for [MEETING OR CONVERSATION] with [PERSON / GROUP].

Context: [WHAT'S GOING ON]
My goal: [WHAT I NEED FROM THIS]
Their likely goal: [WHAT I THINK THEY WANT]
Sensitivities: [ANY LANDMINES]

Give me: the 5 questions or objections I'm most likely to get, a short suggested response for each, and 3 questions I should ask. Don't script me into sounding robotic.`,
    why: "It turns vague anxiety into a short list of likely friction points — useful even if the actual conversation goes a different way.",
  },
  {
    title: "Turn a decision into a pros/cons breakdown",
    prompt: `I'm deciding whether to [DECISION]. Constraints: [BUDGET, TIME, PEOPLE, MUST-HAVES].

Lay out:
- Pros (with who benefits)
- Cons (with who pays the cost)
- Risks if I say yes
- Risks if I say no or delay
- What I'd need to know that I haven't given you

Don't pick a side unless I ask. If a point depends on an assumption, label it.`,
    why: "A decision prompt without constraints produces a balanced-looking list that ignores the tradeoffs you actually have. This one names them up front.",
  },
  {
    title: "Get unstuck when you don't know where to start",
    prompt: `I need help with [ROUGH TASK], but I'm not sure how to frame it yet. Don't try to complete the task yet. Ask me 3–5 clarifying questions that would most change the output. Wait for my answers before you do anything else.`,
    why: "When the task is fuzzy, a first attempt is usually wrong. Making it interview you first is faster than iterating on a draft that missed the point.",
  },
];

export default function ChatGptPromptsPage() {
  return (
    <ArticlePage
      eyebrow="Prompts"
      backHref="/prompts"
      backLabel="Prompts"
      heading="10 ChatGPT Prompts That Actually Save You Time"
      intro="Most prompt lists are 50 vague one-liners nobody opens twice. These are 10 — built around specific, real tasks, written so you can copy, paste, and swap in your own details."
      source="prompts-chatgpt"
    >
      {prompts.map((item, index) => (
        <article key={item.title} className="prompt-card">
          <p className="prompt-kicker">Prompt {index + 1}</p>
          <h2>{item.title}</h2>
          <pre className="prompt-text">{item.prompt}</pre>
          <p className="prompt-why">
            <strong>Why it works:</strong> {item.why}
          </p>
        </article>
      ))}

      <h2>Why these work</h2>
      <p>
        A good prompt is specific about the outcome, gives context the model wouldn&apos;t otherwise
        have, and asks for a format you can actually use. A generic one-liner does none of that —
        which is why it feels clever once and unused after. Copy any of the ten above, fill in the
        brackets, and treat the first reply as a draft you can steer.
      </p>
      <p>
        New to ChatGPT? Start with{" "}
        <Link href="/tutorials/how-to-use-chatgpt">How to Use ChatGPT</Link>. Or go back to{" "}
        <Link href="/prompts">Prompts</Link> for what&apos;s coming next.
      </p>
    </ArticlePage>
  );
}
