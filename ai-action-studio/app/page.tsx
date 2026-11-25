import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroAiBackdrop from "./components/HeroAiBackdrop";
import TalkToUsButton from "./components/TalkToUsButton";
import { JsonLd, buildFaqSchema } from "./components/Breadcrumbs";
import { HOW_WE_WORK_STEPS, SERVICE_PHASES } from "@/src/data/services";
import { getDisplayClientLabel, getPublishedCaseStudies } from "@/src/data/work";
import {
  ONE_LINE_POSITIONING,
  SCALELENS_URL,
  SITE_TAGLINE,
  SITE_URL,
  YOUTUBE_URL,
} from "@/lib/site";

const homeTitle = "AI Automation Agency for Business | AI Action Studio";
const homeDescription =
  "AI automation agency that builds and maintains AI agents, workflow automations, custom software and integrations for growing businesses. Start with a free audit.";

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

const problemStrip = [
  {
    title: "Your business outgrew Excel.",
    body: "Spreadsheets break when five people edit them at once and approvals happen in chat.",
    href: "/services/workflow-automation",
    cta: "Workflow automation",
  },
  {
    title: "Data typed into five tools by hand.",
    body: "The same customer and order details get copied between your CRM, sheets and accounting.",
    href: "/services/integrations",
    cta: "API integrations",
  },
  {
    title: "Leads waiting hours for a reply.",
    body: "Enquiries sit in WhatsApp, email or voicemails while your team is busy with delivery.",
    href: "/services/ai-agents",
    cta: "AI agents & chatbots",
  },
  {
    title: "Invoices, approvals and onboarding by email.",
    body: "Finance and HR admin runs on memory, inbox threads and manual chasing.",
    href: "/services/finance-hr-automation",
    cta: "Finance & HR automation",
  },
];

const namedSystems = [
  {
    title: "Sales & lead follow-up system",
    href: "/services/whatsapp-automation",
    description:
      "Capture every enquiry, qualify leads automatically, log chats in your CRM and trigger timely follow-ups.",
    tools: ["CRM", "WhatsApp / Email", "AI agent"],
  },
  {
    title: "Operations & order system",
    href: "/services/custom-software",
    description:
      "Track orders, stock, dispatch and approvals in one custom app built around your team's real workflow.",
    tools: ["Custom web app", "Database", "Integrations"],
  },
  {
    title: "HR & team system",
    href: "/services/workflow-automation",
    description:
      "Keep hiring pipelines, onboarding checklists, leave requests and daily team reports moving without chasing.",
    tools: ["Hiring", "Onboarding", "Leave", "Daily reports"],
  },
  {
    title: "Finance automation",
    href: "/services/finance-hr-automation",
    description:
      "Extract invoice data, route payables for human approval, send receivables reminders and sync with accounting.",
    tools: ["QuickBooks", "Xero", "Tally", "Zoho Books", "Document AI"],
  },
  {
    title: "AI agents",
    href: "/services/ai-agents",
    description:
      "Receptionist, support and lead-qualifying agents that answer questions and book appointments 24/7.",
    tools: ["Phone", "Website chat", "WhatsApp"],
  },
  {
    title: "Integrations",
    href: "/services/integrations",
    description:
      "Connect the software you already pay for so data is entered once and synced reliably everywhere.",
    tools: ["APIs", "Zapier", "Make", "n8n"],
  },
];

const whyUsObjections = [
  {
    question: "Paid a vendor before and it failed?",
    answer:
      "Small fixed-price start, weekly demos, maintained after launch.",
  },
  {
    question: "Worried about your data?",
    answer:
      "Built in your own accounts, least-privilege access, NDA, documentation you keep.",
  },
  {
    question: "Staff won't use new software?",
    answer:
      "We build around how they already work, often with WhatsApp as the front end.",
  },
  {
    question: "Could we just use Zapier?",
    answer:
      "For simple steps, yes, and we'll say so.",
  },
];

const learnAiCards = [
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
    href: "/prompts",
    title: "Prompts",
    body: "Prompts built for real business and research tasks.",
  },
  {
    href: "/blog",
    title: "Blog & Comparisons",
    body: "Practical articles, workflows and side-by-side AI tool comparisons.",
  },
];

// TODO(Ranjan): confirm the two-to-four-week timeframe in "How long does it take to build an AI agent or automation?" before publishing.
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
      "We work remotely with growing businesses in the US, UK, Canada, Australia and India, across time zones.",
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
  "inline-flex items-center justify-center rounded-lg border border-navy px-6 py-3 text-[15px] font-semibold text-navy transition hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export default function HomePage() {
  const caseStudies = getPublishedCaseStudies();

  return (
    <>
      <JsonLd data={buildFaqSchema(homeFaqs, `${SITE_URL}/#faq`)} />

      {/* 1. Hero */}
      <section className="relative flex min-h-[calc(100vh-76px)] items-center overflow-hidden bg-ivory">
        <HeroAiBackdrop />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="animate-fade-up text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            AI automation agency
          </p>
          <h1 className="animate-fade-up-delay-1 mt-4 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.15] text-navy">
            The AI automation agency that builds AI agents for your business
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-[18px] leading-relaxed text-slate">
            {ONE_LINE_POSITIONING}
          </p>
          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <TalkToUsButton location="home-hero" className={primaryCtaClass} />
            <Link href="/ai-score" className={secondaryCtaClass}>
              Get your AI score
            </Link>
          </div>
          <p className="animate-fade-up-delay-3 mt-6 text-[13px] font-medium text-slate">
            Serving growing businesses in the US, UK, Canada, Australia and India.
          </p>
        </div>
      </section>

      {/* 2. Problem strip */}
      <section id="problem" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            Sound familiar?
          </p>
          <h2 className="mt-2 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Where manual work slows growing teams down
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problemStrip.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col justify-between rounded-xl border border-sand bg-ivory p-6 transition hover:border-mint hover:bg-white"
              >
                <div>
                  <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
                  <h3 className="text-[19px] font-semibold leading-snug text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate">
                    {item.body}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center text-[14px] font-semibold text-navy underline decoration-mint underline-offset-4 group-hover:decoration-navy">
                  {item.cta} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What we do, in four phases */}
      <section id="phases" className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
                What we do
              </p>
              <h2 className="mt-2 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
                From first audit to daily operations, in four phases
              </h2>
            </div>
            <Link
              href="/services"
              className="text-[15px] font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
            >
              Explore all services &rarr;
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PHASES.map((item, idx) => (
              <Link
                key={item.phase}
                href={item.defaultHref}
                className="group flex flex-col justify-between rounded-xl border border-sand bg-white p-6 md:p-7 transition hover:border-mint"
              >
                <div>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-navy text-[13px] font-bold text-mint">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-4 text-[22px] font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-slate">
                    {item.summary}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center text-[14px] font-semibold text-navy underline decoration-mint underline-offset-4 group-hover:decoration-navy">
                  Learn about {item.title} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Named systems grid (six Build cards) */}
      <section id="what-we-build" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            Systems we build
          </p>
          <h2 className="mt-2 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Connected systems built around how your team works
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {namedSystems.map((sys) => (
              <Link
                key={sys.title}
                href={sys.href}
                className="group flex flex-col justify-between rounded-xl border border-sand bg-ivory p-6 md:p-7 transition hover:border-mint hover:bg-white"
              >
                <div>
                  <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
                  <h3 className="text-[20px] font-semibold text-navy">
                    {sys.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate">
                    {sys.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {sys.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-sand bg-white px-2.5 py-1 text-[12px] font-medium text-slate"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="mt-6 inline-flex items-center text-[14px] font-semibold text-navy underline decoration-mint underline-offset-4 group-hover:decoration-navy">
                  See service details &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How we work */}
      <section id="how-we-work" className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            Process
          </p>
          <h2 className="mt-2 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            How we work
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_WE_WORK_STEPS.map((item) => (
              <article
                key={item.step}
                className="rounded-xl border border-sand bg-white p-6 md:p-7"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-mint text-[13px] font-bold text-navy">
                  {item.step}
                </span>
                <h3 className="mt-4 text-[18px] font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why us (objection handling) */}
      <section id="why-us" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            Why AI Action Studio
          </p>
          <h2 className="mt-2 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Built for teams that want working systems, not AI theatre
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyUsObjections.map((item) => (
              <article
                key={item.question}
                className="rounded-xl border border-sand bg-ivory p-6 md:p-8"
              >
                <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
                <h3 className="text-[20px] font-semibold text-navy">
                  {item.question}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-slate">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AI Score banner */}
      <section id="ai-score-banner" className="border-t border-sand bg-navy py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint">
              Free 3-minute assessment
            </p>
            <h2 className="mt-2 text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-white">
              How ready is your business for AI? Answer 10 questions and get your score.
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[rgba(255,255,255,0.78)]">
              See your score across Systems &amp; Data, Processes, People &amp; AI Use, and Risk &amp;
              Security, plus your top three recommendations.
            </p>
          </div>
          <Link href="/ai-score" className={primaryCtaClass}>
            Get your AI score &rarr;
          </Link>
        </div>
      </section>

      {/* 8. Proof section */}
      <section id="proof" className="border-t border-sand bg-ivory py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
                Track record
              </p>
              <h2 className="mt-2 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
                {caseStudies.length > 0 ? "Systems we've built" : "Founder track record"}
              </h2>
            </div>
            <Link
              href="/work"
              className="text-[15px] font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
            >
              See our work &rarr;
            </Link>
          </div>

          {caseStudies.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/work/${study.slug}`}
                  className="group rounded-xl border border-sand bg-white p-6 md:p-7 transition hover:border-mint"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
                    {getDisplayClientLabel(study)}
                  </p>
                  <h3 className="mt-2 text-[20px] font-semibold text-navy">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate">
                    {study.problem}
                  </p>
                  <span className="mt-5 inline-block text-[14px] font-semibold text-navy underline decoration-mint underline-offset-4 group-hover:decoration-navy">
                    Read case study &rarr;
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            /* TODO(Ranjan): add verified metrics for ScaleRise agency, ScaleLens, Upwork rating/earnings and systems built when ready. */
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <article className="rounded-xl border border-sand bg-white p-6 md:p-7">
                <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
                <h3 className="text-[20px] font-semibold text-navy">
                  ScaleRise agency experience
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">
                  Years of hands-on data engineering, tracking and workflow automation for agencies
                  and growing businesses across the US, UK, Canada, Australia and India.
                </p>
              </article>
              <article className="rounded-xl border border-sand bg-white p-6 md:p-7">
                <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
                <h3 className="text-[20px] font-semibold text-navy">
                  Built ScaleLens
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">
                  Built and run{" "}
                  <a
                    href={SCALELENS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
                  >
                    ScaleLens
                  </a>
                  , our sister product focused on custom reporting dashboards and BI for growing
                  teams.
                </p>
              </article>
              <article className="rounded-xl border border-sand bg-white p-6 md:p-7">
                <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
                <h3 className="text-[20px] font-semibold text-navy">
                  Live walkthroughs available
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">
                  We&apos;re publishing our first written case studies now. Want to see a live demo
                  of a system like yours? Ask us on your audit call.
                </p>
              </article>
            </div>
          )}
        </div>
      </section>

      {/* 9. Founder block */}
      <section id="founder" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 rounded-xl border border-sand bg-ivory p-8 md:grid-cols-12 md:p-10">
            <div className="flex justify-center md:col-span-4">
              {/* TODO(Ranjan): update founder photo if a new headshot is preferred */}
              <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-sand bg-white shadow-[0_8px_24px_rgba(10,15,29,0.06)] sm:h-52 sm:w-52">
                <Image
                  src="/images/ranjan-kashyap.png"
                  alt="Ranjan Kashyap — Founder of AI Action Studio"
                  width={260}
                  height={310}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
                Founder-led
              </p>
              <h2 className="mt-2 text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
                Ranjan Kashyap
              </h2>
              {/* TODO(Ranjan): review and finalise two-line bio details */}
              <p className="mt-4 text-[17px] leading-relaxed text-slate">
                I run AI Action Studio, ScaleRise and ScaleLens. My background is data engineering,
                tracking and workflow automation for growing businesses — building practical systems
                that are documented, owned by the client, and maintained after launch.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <TalkToUsButton
                  location="home-founder"
                  className={primaryCtaClass}
                >
                  Talk to Ranjan
                </TalkToUsButton>
                <Link
                  href="/about"
                  className="text-[15px] font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
                >
                  More about us &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Action Studio at a glance (AEO/GEO entity block) */}
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
                Remote, for clients in the US, UK, Canada, Australia and India.
              </dd>
            </div>
            <div className="border-b border-sand pb-4 md:border-b-0 md:pb-0">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
                How projects work
              </dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-navy">
                Free 30-minute audit &rarr; fixed-price blueprint &rarr; build in weekly stages
                &rarr; monthly care plan.
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
                <Link
                  href="/contact"
                  className="font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
                >
                  aiactionstudio.com/contact
                </Link>{" "}
                &middot; hello@aiactionstudio.com
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 10. Existing content ("Learn AI": tutorials, tools, prompts, blog) */}
      <section id="learn-ai" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
                {SITE_TAGLINE}
              </p>
              <h2 className="mt-2 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
                Learn AI: free tutorials, tools, prompts and blog
              </h2>
              <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-slate">
                Prefer to learn and experiment yourself? Our tutorials, tool comparisons, prompts
                and workflows are free.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learnAiCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-xl border border-sand bg-ivory p-6 transition hover:border-mint hover:bg-white"
              >
                <div className="mb-3 h-0.5 w-8 bg-mint" aria-hidden />
                <h3 className="text-[18px] font-semibold text-navy group-hover:underline decoration-mint underline-offset-4">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate">
                  {card.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                <h3 className="text-[18px] font-semibold text-navy">
                  {faq.question}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA band */}
      <section id="final-cta" className="border-t border-sand bg-navy py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-tight text-white">
            Pick one process that wastes time every week. Let&apos;s fix that first.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-[rgba(255,255,255,0.78)]">
            Book a free 30-minute systems audit, or take our 3-minute AI Readiness Scorecard first.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <TalkToUsButton location="home-final-cta" className={primaryCtaClass} />
            <Link
              href="/ai-score"
              className="inline-flex items-center justify-center rounded-lg border border-mint px-6 py-3 text-[15px] font-semibold text-mint transition hover:bg-mint hover:text-navy"
            >
              Get your AI score
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
