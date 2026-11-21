import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";
import LeadForm from "../components/LeadForm";
import TalkToUsBanner from "../components/TalkToUsBanner";
import { SITE_URL, YOUTUBE_URL } from "@/lib/site";

const fullTitle = "Free AI Resources & Tutorials | AI Action Studio";
const description =
  "Free AI tutorials, tool comparisons, prompts, workflows and checklists from AI Action Studio, to learn AI and put it to work yourself.";

export const metadata: Metadata = {
  title: "Free AI Resources & Tutorials",
  description,
  alternates: { canonical: "/resources" },
  openGraph: {
    title: fullTitle,
    description,
    url: `${SITE_URL}/resources`,
    siteName: "AI Action Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
  },
};

const findCards = [
  {
    title: "Learn",
    href: "/tutorials",
    body: "Step-by-step tutorials that show you how to actually use AI tools and techniques.",
  },
  {
    title: "Work Smarter",
    href: "/workflows",
    body: "AI workflows, automation and productivity ideas that help you save time and reduce repetitive work.",
  },
  {
    title: "Discover",
    href: "/reviews",
    body: "Useful AI tools, comparisons, new capabilities and honest recommendations for specific needs.",
  },
  {
    title: "Build",
    href: "/build",
    body: "Explore how AI can help you create content, digital products, websites, systems, software and businesses.",
  },
  {
    title: "Get Resources",
    href: "/prompts",
    body: "Practical prompts, templates, guides, checklists and free tools you can use right away.",
  },
];

// TODO: owner to confirm "Templates" link destination (/free-checklist used until templates exist).
const resourceCards = [
  {
    title: "Free AI Tools",
    href: "/tools",
    body: "Useful tools you can try without adding another unnecessary subscription.",
    extraHref: "/tools/automation-roi-calculator",
    extraLabel: "Try the Automation ROI Calculator →",
  },
  {
    title: "Prompts",
    href: "/prompts",
    body: "Practical prompts for real tasks and workflows.",
  },
  {
    title: "Templates",
    href: "/free-checklist",
    body: "Ready-to-use templates that help you get started faster.",
  },
  {
    title: "Guides & Checklists",
    href: "/free-checklist",
    body: "Simple resources for learning and implementing AI.",
  },
];

const primaryCtaClass =
  "inline-flex items-center justify-center rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
            ]}
          />
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            Resources
          </p>
          <h1 className="mt-3 max-w-4xl text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-navy">
            Free AI resources to learn it yourself
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-slate">
            Get practical resources designed to help you put AI into action — tutorials, tool
            comparisons, prompts, workflows, checklists and free tools.
          </p>
        </div>
      </section>

      <section id="core-idea" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            AI is only useful when you actually use it.
          </h2>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-slate">
            AI is moving fast. New tools appear every day, but knowing about AI is not the same as
            knowing what to do with it. AI Action Studio focuses on the practical side: how to use
            AI to solve real problems, save time, create better work, automate repetitive tasks and
            build new things.
          </p>
          <p className="mt-8 text-[18px] font-semibold tracking-tight text-navy">
            Less hype. More action.
          </p>
        </div>
      </section>

      <section id="what-youll-find" className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Practical AI for real work
          </h2>
          <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-slate">
            From simple tutorials to advanced workflows, everything is designed to help you move
            from &quot;I wonder if AI can do this&quot; to &quot;I just did it.&quot;
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {findCards.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl border border-sand bg-white p-6 md:p-7 transition hover:border-mint"
              >
                <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
                <h3 className="text-[20px] font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="youtube" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
              See AI in action.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-slate">
              No endless theory. No need to understand every new AI buzzword. The YouTube channel
              focuses on useful tutorials, workflows, experiments, comparisons and practical ideas
              that you can follow and apply.
            </p>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${primaryCtaClass} mt-8`}
            >
              Watch AI Action Studio on YouTube
            </a>
          </div>
          <div className="rounded-xl border border-sand bg-ivory p-10 md:p-14">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex aspect-video items-center justify-center rounded-xl bg-white shadow-[0_8px_24px_rgba(10,15,29,0.06)] transition hover:shadow-[0_8px_24px_rgba(10,15,29,0.1)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint text-navy">
                <svg className="ml-1 h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5.14v13.72L19.14 12 8 5.14z" />
                </svg>
                <span className="sr-only">Watch AI Action Studio on YouTube</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="tools" className="border-t border-sand bg-ivory py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Find AI tools worth using.
          </h2>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-slate">
            There are thousands of AI tools. You don&apos;t need all of them. Explore useful tools,
            discover what they can actually do, compare options and find the right tool for the job.
          </p>
          <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-slate">
            AI Action Studio may review or test tools when it helps answer a real question — but the
            goal is not to test everything. The goal is to help you choose and use AI better.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/tools" className={primaryCtaClass}>
              Explore AI Tools
            </Link>
            <Link
              href="/tools/automation-roi-calculator"
              className="text-[15px] font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
            >
              Automation ROI Calculator &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section id="workflows" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Don&apos;t just collect tools. Build workflows.
          </h2>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-slate">
            The real power of AI often comes from combining tools and processes. Learn practical
            workflows for research, content creation, marketing, productivity, automation and
            business.
          </p>
          <Link href="/workflows" className={`${primaryCtaClass} mt-8`}>
            Explore Workflows
          </Link>
        </div>
      </section>

      <section id="resources" className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Useful resources. Ready to use.
          </h2>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-slate">
            Get practical resources designed to help you put AI into action.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resourceCards.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-xl border border-sand bg-white p-6"
              >
                <div>
                  <Link href={item.href} className="group block">
                    <h3 className="text-[18px] font-semibold text-navy group-hover:underline decoration-mint underline-offset-4">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate">{item.body}</p>
                </div>
                <div className="mt-4 space-y-2">
                  <Link
                    href={item.href}
                    className="block text-[14px] font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
                  >
                    Open {item.title} &rarr;
                  </Link>
                  {item.extraHref && item.extraLabel ? (
                    <Link
                      href={item.extraHref}
                      className="block text-[13px] font-medium text-slate underline decoration-mint underline-offset-4 hover:text-navy"
                    >
                      {item.extraLabel}
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="build" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            What can you build with AI?
          </h2>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-slate">
            AI isn&apos;t only useful for asking questions or generating content. It can help you
            build websites, digital products, automations, internal tools and software. As AI Action
            Studio grows, we&apos;ll explore what is actually possible — and build useful things
            along the way.
          </p>
          <Link href="/build" className={`${primaryCtaClass} mt-8`}>
            Explore Build With AI
          </Link>
        </div>
      </section>

      <section className="border-t border-sand bg-ivory py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <TalkToUsBanner location="resources-page" className="mt-0" />

          <div className="mt-12 rounded-xl border border-sand bg-white p-6 md:p-8">
            <h2 className="text-[20px] font-semibold text-navy">Stay in the loop</h2>
            <p className="mt-2 mb-6 text-[14px] text-slate">
              Get practical AI ideas, useful tools, workflows and resources — without the noise.
            </p>
            <LeadForm
              source="resources"
              submitLabel="Join the AI Action Studio List"
              successMessage="You're in. Watch your inbox for practical AI ideas."
            />
          </div>
        </div>
      </section>
    </>
  );
}
