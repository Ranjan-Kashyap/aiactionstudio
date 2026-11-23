import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroAiBackdrop from "./components/HeroAiBackdrop";
import LeadForm from "./components/LeadForm";
import ServiceCard from "./components/ServiceCard";
import TalkToUsButton from "./components/TalkToUsButton";
import CaseStudies from "./components/CaseStudies";
import { JsonLd, buildFaqSchema } from "./components/Breadcrumbs";
import { HOW_WE_WORK_STEPS, SERVICES } from "@/src/data/services";
import { SITE_URL, YOUTUBE_URL } from "@/lib/site";

const homeTitle = "AI Automation Agency for Business | AI Action Studio";
const homeDescription =
  "AI automation agency that builds AI agents, workflow automations and custom tools for growing businesses. Built, connected and maintained for you.";

export const metadata: Metadata = {
  title: {
    absolute: homeTitle,
  },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: SITE_URL,
    siteName: "AI Action Studio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI Action Studio — AI automation agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/opengraph-image"],
  },
};

const problemCards = [
  {
    title: "Work typed in twice",
    body: "The same data goes into the CRM, the accounts and three spreadsheets, by hand.",
  },
  {
    title: "Leads and requests slip through",
    body: "Enquiries wait for replies, follow-ups depend on memory, and nobody owns the inbox.",
  },
  {
    title: "Everything depends on one person",
    body: "Reports, approvals and onboarding stop when one key person is away.",
  },
];

// TODO: owner to confirm the 6,000+ hours figure before launch.
const whyBullets = [
  "We start with your process, not a tool. Sometimes the answer is a simple automation, and we'll say so.",
  "Built in your accounts, documented, and yours to keep.",
  "Least-privilege access and NDAs as standard.",
  "Founder-led: you work directly with Ranjan, who has 6,000+ hours of data, tracking and automation work behind him.",
];

const whoColumns = [
  {
    title: "Owner-led businesses",
    body: "that run on spreadsheets, WhatsApp and accounting tools like Tally, QuickBooks or Xero.",
  },
  {
    title: "Operations teams",
    body: "juggling CRMs, accounting and HR tools.",
  },
  {
    title: "Agencies",
    body: "buried in onboarding, proposals and follow-ups.",
  },
];

const freeResourceCards = [
  {
    href: "/tutorials",
    title: "Tutorials",
    body: "Step-by-step guides to use ChatGPT, Gemini, Claude and more.",
  },
  {
    href: "/tools",
    title: "AI Tools",
    body: "Tested tool picks and the free Automation ROI Calculator.",
  },
  {
    href: "/workflows",
    title: "Workflows",
    body: "Practical no-code automations you can set up yourself.",
  },
  {
    href: "/prompts",
    title: "Prompts",
    body: "Prompts built for real business and research tasks.",
  },
];

// TODO(owner): confirm the two-to-four-week timeframe in "How long does it take to build an AI agent or automation?" before publishing.
const homeFaqs = [
  {
    question: "What does an AI automation agency do?",
    answer:
      "We find the manual, repetitive work in your business and replace it with AI agents, automations, integrations or custom tools, then maintain them so they keep working.",
  },
  {
    question: "What are AI agents for business?",
    answer:
      "Software that can answer customers, qualify leads, book appointments, process documents or update your systems on its own, within rules you set. Ours connect to your existing tools.",
  },
  {
    question: "Do I need custom software, or will Zapier do?",
    answer:
      "For simple steps, a no-code tool is often enough, and we'll tell you. We build custom when the process needs logic, AI, a proper app or more reliability.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every project starts with a free audit, then a fixed-price blueprint and a fixed quote for the build. Ongoing care is a monthly plan sized to the system.",
  },
  {
    question: "Where are your clients based?",
    answer:
      "We work remotely with growing businesses worldwide, across time zones.",
  },
  {
    question: "How do I choose an AI automation agency?",
    answer:
      "Look for an agency that starts with your process rather than a tool, gives a fixed price before building, shows working progress every week, documents everything in your own accounts, and offers ongoing maintenance. Ask how they handle data access and what happens when something breaks.",
  },
  {
    question: "AI automation agency or freelancer: which is better?",
    answer:
      "A freelancer can be a good fit for a single, simple automation. An agency is usually better when several tools, people and processes are involved, or when the system needs to be maintained and improved over time.",
  },
  {
    question: "How long does it take to build an AI agent or automation?",
    answer:
      "A focused automation or AI agent often takes two to four weeks from blueprint to launch; larger custom software takes longer. We confirm the timeline in the fixed-price blueprint.",
  },
  {
    question: "Is my data safe with an AI automation agency?",
    answer:
      "We use least-privilege access, sign NDAs on request, build inside your own accounts where possible, and only send data to AI models where it is needed and allowed.",
  },
];

const primaryCtaClass =
  "inline-flex items-center justify-center rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";
const secondaryCtaClass =
  "inline-flex items-center justify-center rounded-lg border border-navy px-6 py-3 text-[15px] font-medium text-navy transition hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(homeFaqs, `${SITE_URL}/#faq`)} />

      {/* 3.1 Hero */}
      <section className="relative overflow-hidden min-h-[calc(100vh-72px)] flex items-center bg-ivory">
        <HeroAiBackdrop />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="animate-fade-up text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            AI automation agency
          </p>
          <h1 className="animate-fade-up-delay-1 mt-4 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.15] text-navy">
            The AI automation agency that builds AI agents for your business
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-[18px] leading-relaxed text-slate">
            We replace spreadsheets, copy-paste and chasing with AI agents, automations and custom
            tools that fit how your team already works. Then we keep them running.
          </p>
          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <TalkToUsButton location="home-hero" className={primaryCtaClass} />
            <Link href="/services" className={secondaryCtaClass}>
              See what we build
            </Link>
          </div>
          <p className="animate-fade-up-delay-3 mt-6 text-[13px] font-medium text-slate">
            Free 30-minute systems audit · Fixed-price start · Maintained after launch
          </p>
        </div>
      </section>

      {/* 3.2 Problem */}
      <section id="problem" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Your business outgrew spreadsheets and WhatsApp
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {problemCards.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-sand bg-ivory p-6 md:p-7"
              >
                <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
                <h3 className="text-[20px] font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3.3 What we build */}
      <section id="what-we-build" className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            What we build
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 3.4 How we work */}
      <section id="how-we-work" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            How we work
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_WE_WORK_STEPS.map((item) => (
              <article
                key={item.step}
                className="rounded-xl border border-sand bg-ivory p-6 md:p-7"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-mint text-[13px] font-bold text-navy">
                  {item.step}
                </span>
                <h3 className="mt-4 text-[18px] font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5.2 AI Action Studio at a glance */}
      <section id="at-a-glance" className="border-t border-sand bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-tight text-navy">
            AI Action Studio at a glance
          </h2>
          <dl className="mt-8 grid gap-4 rounded-xl border border-sand bg-white p-6 md:grid-cols-2 md:p-8">
            <div className="border-b border-sand pb-4 md:border-b-0 md:pb-0">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
                What we are
              </dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-navy">
                An AI automation agency that builds and maintains AI agents, automations, custom
                software and integrations.
              </dd>
            </div>
            <div className="border-b border-sand pb-4 md:border-b-0 md:pb-0">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
                Who we work with
              </dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-navy">
                Growing and owner-led businesses with roughly 10 to 500 people.
              </dd>
            </div>
            <div className="border-b border-sand pb-4 md:border-b-0 md:pb-0">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
                Where
              </dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-navy">
                Remote, for clients worldwide.
              </dd>
            </div>
            <div className="border-b border-sand pb-4 md:border-b-0 md:pb-0">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
                How projects work
              </dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-navy">
                Free 30-minute audit → fixed-price blueprint → build in weekly stages → monthly care
                plan.
              </dd>
            </div>
            <div className="border-b border-sand pb-4 md:border-b-0 md:pb-0">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
                Founder
              </dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-navy">
                <Link
                  href="/about"
                  className="font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
                >
                  Ranjan Kashyap
                </Link>
              </dd>
            </div>
            <div>
              <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
                Contact
              </dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-navy">
                hello@aiactionstudio.com ·{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
                >
                  Talk to us
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 3.5 Why AI Action Studio */}
      <section id="why-us" className="border-t border-sand bg-ivory py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Why businesses work with us
          </h2>
          <ul className="mt-10 grid max-w-4xl gap-4">
            {whyBullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-xl border border-sand bg-white p-5 border-l-4 border-l-mint text-[16px] leading-relaxed text-slate"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3.6 Who we work with */}
      <section id="who-we-work-with" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Built for growing teams
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whoColumns.map((col) => (
              <div
                key={col.title}
                className="rounded-xl border border-sand bg-ivory p-6 md:p-7"
              >
                <p className="text-[16px] leading-relaxed text-slate">
                  <strong className="font-semibold text-navy">{col.title}</strong> {col.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden CaseStudies component (renders nothing while empty) */}
      <CaseStudies />

      {/* 3.7 Founder */}
      <section id="creator" className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[auto_1fr] lg:px-8">
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 shrink-0 overflow-hidden rounded-2xl border border-sand bg-white shadow-[0_8px_24px_rgba(10,15,29,0.06)]">
            <Image
              src="/images/ranjan-kashyap.png"
              alt="Ranjan Kashyap — Founder of AI Action Studio"
              width={320}
              height={384}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
              Hi, I&apos;m Ranjan
            </h2>
            <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-slate">
              I run AI Action Studio. My background is data engineering, tracking and automation for
              agencies and growing businesses. We build the systems I wish every team had:
              practical, documented, and maintained. I also share what I learn on YouTube.
            </p>
            <div className="mt-8">
              <Link href="/about" className={secondaryCtaClass}>
                More about us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3.8 Free resources */}
      <section id="free-resources" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Prefer to learn it yourself?
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-slate">
            Our tutorials, tool comparisons, prompts and workflows are free.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {freeResourceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rounded-xl border border-sand bg-ivory p-6 transition hover:border-mint"
              >
                <h3 className="text-[18px] font-semibold text-navy">{card.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate">{card.body}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/resources"
              className="text-[15px] font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
            >
              All free resources &rarr;
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

      {/* 3.9 FAQ */}
      <section id="faq" className="border-t border-sand bg-ivory py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-4">
            {homeFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-sand bg-white p-6 md:p-7"
              >
                <h3 className="text-[18px] font-semibold text-navy">{faq.question}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.10 Final CTA */}
      <section id="final-cta" className="border-t border-sand bg-navy py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-white">
            Tell us what&apos;s slowing your team down
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-[rgba(255,255,255,0.78)]">
            Book a free 30-minute systems audit. You&apos;ll leave with a clear view of what to
            automate first.
          </p>
          <div className="mt-8 flex justify-center">
            <TalkToUsButton location="home-final-cta" className={primaryCtaClass} />
          </div>
        </div>
      </section>

      {/* 3.11 Newsletter */}
      <section id="newsletter" className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-[clamp(1.75rem,3vw,2.35rem)] font-bold leading-tight text-navy">
              Get practical AI notes by email
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
    </>
  );
}
