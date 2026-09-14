import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Tool Comparisons",
  description:
    "Head-to-head AI tool comparisons — ChatGPT vs Gemini, Claude vs ChatGPT and more, tested on real tasks.",
  alternates: { canonical: "/reviews" },
};

const upcoming = [
  {
    slug: "ai-chatbots-sales-recovery",
    title: "AI chatbots for sales recovery",
    category: "AI for Business",
    status: "In progress",
    summary:
      "Testing chatbot stacks against real abandoned-cart and lead-response workflows — with honest friction points.",
  },
  {
    slug: "freelancer-automation-stack",
    title: "Automation stack for freelancers",
    category: "Workflow Tutorials",
    status: "Queued",
    summary:
      "Make vs Zapier vs n8n for client delivery pipelines. Clear recommendation by volume and budget.",
  },
  {
    slug: "ai-writing-tools-comparison",
    title: "AI writing tools that pay rent",
    category: "Tool Battles",
    status: "Queued",
    summary:
      "Head-to-head on real deliverables — not demo prompts. Speed, edit quality, and client readiness.",
  },
  {
    slug: "12-ai-money-methods",
    title: "12 AI Money Methods in 12 Weeks",
    category: "Income Experiments",
    status: "Flagship series",
    summary:
      "One method per week with transparent results — including failures. The launch series for this channel.",
  },
];

export default function ReviewsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">AI Tools</p>
        <h1 className="mt-3 max-w-3xl text-[clamp(2rem,4vw,3rem)] font-bold text-navy">
          AI Tool Comparisons: ChatGPT vs Gemini vs Claude &amp; More
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] text-slate">
          Explore useful tools, discover what they can actually do, and find the right option for a
          specific job. We may review or compare tools when it helps answer a real question — not
          because every tool needs a verdict.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {upcoming.map((item) => (
            <article
              key={item.slug}
              className="rounded-xl border border-sand bg-white p-6 md:p-7"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate">
                  {item.category}
                </span>
                <span className="text-[12px] text-slate/60">{item.status}</span>
              </div>
              <h2 className="mt-3 text-[22px] font-semibold text-navy">{item.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">
                {item.summary}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-sand bg-cream p-8 text-center">
          <h2 className="text-[22px] font-semibold text-navy">Want practical resources while this grows?</h2>
          <p className="mx-auto mt-2 max-w-lg text-[15px] text-slate">
            Grab the free AI Tool Stack Checklist and get useful ideas when we publish.
          </p>
          <Link
            href="/free-checklist"
            className="mt-6 inline-flex rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy hover:brightness-110"
          >
            Get Free Checklist
          </Link>
        </div>
      </div>
    </section>
  );
}
