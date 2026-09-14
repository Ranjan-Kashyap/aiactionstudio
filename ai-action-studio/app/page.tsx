import type { Metadata } from "next";
import Link from "next/link";
import HeroAiBackdrop from "./components/HeroAiBackdrop";
import LeadForm from "./components/LeadForm";
import { siteDescription, YOUTUBE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "AI Action Studio — Learn AI. Use AI. Take Action.",
  },
  description: siteDescription,
  alternates: { canonical: "/" },
};

const findCards = [
  {
    title: "Learn",
    body: "Step-by-step tutorials that show you how to actually use AI tools and techniques.",
  },
  {
    title: "Work Smarter",
    body: "AI workflows, automation and productivity ideas that help you save time and reduce repetitive work.",
  },
  {
    title: "Discover",
    body: "Useful AI tools, comparisons, new capabilities and honest recommendations for specific needs.",
  },
  {
    title: "Build",
    body: "Explore how AI can help you create content, digital products, websites, systems, software and businesses.",
  },
  {
    title: "Get Resources",
    body: "Practical prompts, templates, guides, checklists and free tools you can use right away.",
  },
];

const resourceCards = [
  {
    title: "Free AI Tools",
    body: "Useful tools you can try without adding another unnecessary subscription.",
  },
  {
    title: "Prompts",
    body: "Practical prompts for real tasks and workflows.",
  },
  {
    title: "Templates",
    body: "Ready-to-use templates that help you get started faster.",
  },
  {
    title: "Guides & Checklists",
    body: "Simple resources for learning and implementing AI.",
  },
];

const primaryCtaClass =
  "inline-flex items-center justify-center rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";
const secondaryCtaClass =
  "inline-flex items-center justify-center rounded-lg border border-navy px-6 py-3 text-[15px] font-medium text-navy transition hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[calc(100vh-72px)] flex items-center bg-ivory">
        <HeroAiBackdrop />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="animate-fade-up text-[12px] font-semibold uppercase tracking-[0.18em] text-slate">
            AI Action Studio
          </p>
          <h1 className="animate-fade-up-delay-1 mt-4 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.15] text-navy">
            Learn AI. Use AI. Take Action.
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-[18px] leading-relaxed text-slate">
            Practical AI tutorials, workflows, tools and resources to help you work smarter, create
            more and build better. Whether you&apos;re a creator, freelancer, marketer, entrepreneur
            or business owner, AI Action Studio helps you turn AI into something useful — not just
            something you read about.
          </p>
          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <Link href="/resources" className={primaryCtaClass}>
              Explore AI Resources
            </Link>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryCtaClass}
            >
              Watch on YouTube
            </a>
          </div>
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
              <article
                key={item.title}
                className="rounded-xl border border-sand bg-white p-6 md:p-7"
              >
                <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
                <h3 className="text-[20px] font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">{item.body}</p>
              </article>
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
          <Link href="/tools" className={`${primaryCtaClass} mt-8`}>
            Explore AI Tools
          </Link>
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
              <article
                key={item.title}
                className="rounded-xl border border-sand bg-white p-6"
              >
                <h3 className="text-[18px] font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-slate">{item.body}</p>
              </article>
            ))}
          </div>
          <Link href="/resources" className={`${primaryCtaClass} mt-10`}>
            Explore Free Resources
          </Link>
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

      <section id="products" className="border-t border-sand bg-ivory py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            We&apos;re building useful things too.
          </h2>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-slate">
            AI Action Studio isn&apos;t just a content brand. Over time, we&apos;ll create products
            that help creators, professionals, entrepreneurs and businesses put AI to work. That may
            include courses, templates, digital products, software and AI-powered tools.
          </p>
          <Link href="/products" className={`${primaryCtaClass} mt-8`}>
            Explore Products
          </Link>
        </div>
      </section>

      <section id="creator" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[auto_1fr] lg:px-8">
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-cream text-[28px] font-bold text-navy"
            aria-hidden
          >
            R
          </div>
          <div>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
              Hi, I&apos;m Ranjan.
            </h2>
            <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-slate">
              I&apos;m the person behind AI Action Studio. I&apos;m interested in one simple
              question: How can we actually use AI to do things better? I explore AI tools,
              workflows and ideas, test them in real situations when useful, and share what I learn
              so you can apply it yourself. AI Action Studio is where that exploration becomes
              useful content, resources and products.
            </p>
            <Link href="/about" className={`${secondaryCtaClass} mt-8`}>
              Learn More About AI Action Studio
            </Link>
          </div>
        </div>
      </section>

      <section id="newsletter" className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-[clamp(1.75rem,3vw,2.35rem)] font-bold leading-tight text-navy">
              Stay ahead without chasing every AI update.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-slate">
              Get practical AI ideas, useful tools, workflows and resources delivered without the
              noise.
            </p>
          </div>
          <div className="rounded-xl border border-sand bg-white p-6 md:p-8">
            <LeadForm
              source="home-newsletter"
              submitLabel="Join the AI Action Studio List"
              successMessage="You're in. Watch your inbox for practical AI ideas."
            />
          </div>
        </div>
      </section>

      <section id="get-started" className="border-t border-sand bg-ivory py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Ready to put AI to work?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-slate">
            Learn something useful. Try it yourself. Then take action.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/resources" className={primaryCtaClass}>
              Explore AI Action Studio
            </Link>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryCtaClass}
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
