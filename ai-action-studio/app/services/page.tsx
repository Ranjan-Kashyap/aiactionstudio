import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  JsonLd,
  buildFaqSchema,
  buildServicesItemListSchema,
} from "../components/Breadcrumbs";
import PricingBlock from "../components/PricingBlock";
import ServiceCard from "../components/ServiceCard";
import TalkToUsButton from "../components/TalkToUsButton";
import {
  HOW_WE_WORK_STEPS,
  SERVICE_PHASES,
  getServicesByPhase,
} from "@/src/data/services";
import { SHOW_PRICING, SITE_URL } from "@/lib/site";

const fullTitle = "AI Automation Services for Businesses | AI Action Studio";
const description =
  "AI automation services for growing businesses: AI consulting, Claude team training, workflow automation, AI agents, custom software, integrations and care plans.";

export const metadata: Metadata = {
  title: "AI Automation Services for Businesses",
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: fullTitle,
    description,
    url: `${SITE_URL}/services`,
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
    title: fullTitle,
    description,
    images: ["/opengraph-image"],
  },
};

const servicesFaqs = [
  {
    question: "How do we know which service we need?",
    answer:
      "You don't have to pick in advance. Start with a free 30-minute systems audit or the 3-minute AI Readiness Scorecard, and we'll tell you whether a simple automation, an AI agent, training or custom software is the right move.",
  },
  {
    question: "How much does an AI automation project cost?",
    answer:
      "Every project starts with a free 30-minute audit, followed by a fixed-price blueprint (credited to the build) and a fixed quote for the build itself. Ongoing monitoring and maintenance is an optional monthly care plan.",
  },
  {
    question: "Can we start with just one process?",
    answer:
      "Yes — that's what we recommend. Pick one bottleneck that wastes hours every week, let us fix and prove that first, and expand only when it's working.",
  },
  {
    question: "Who owns the code, workflows and accounts?",
    answer:
      "You do. We build inside your company's accounts wherever possible, use least-privilege access, and hand over clear documentation.",
  },
  {
    question: "What happens after the system goes live?",
    answer:
      "With an AI Care Plan, we monitor your workflows and agents, fix breakages when APIs change, handle a set number of small improvements each month, and review everything with you monthly.",
  },
];

const primaryCtaClass =
  "inline-flex items-center justify-center rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";
const secondaryCtaClass =
  "inline-flex items-center justify-center rounded-lg border border-navy px-6 py-3 text-[15px] font-semibold text-navy transition hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd data={buildServicesItemListSchema()} />
      <JsonLd data={buildFaqSchema(servicesFaqs, `${SITE_URL}/services#faq`)} />

      {/* Hero */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
            ]}
          />
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            Services
          </p>
          <h1 className="mt-3 max-w-4xl text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-navy">
            AI automation services that take manual work off your team
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-slate">
            From your first process audit and team training to custom AI agents, workflow
            automations and monthly care plans — we design, build and maintain the systems your team
            runs on.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <TalkToUsButton location="services-hub-hero" className={primaryCtaClass} />
            <Link href="/ai-score" className={secondaryCtaClass}>
              Get your AI score
            </Link>
          </div>
        </div>
      </section>

      {/* Four phase sections (Consult, Enable, Build, Run) */}
      {SERVICE_PHASES.map((phaseInfo, index) => {
        const phaseServices = getServicesByPhase(phaseInfo.phase);
        const bgClass = index % 2 === 0 ? "bg-white" : "bg-cream";
        return (
          <section
            key={phaseInfo.phase}
            id={`phase-${phaseInfo.phase.toLowerCase()}`}
            className={`border-t border-sand ${bgClass} py-20 md:py-24`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-navy text-[13px] font-bold text-mint">
                  0{index + 1}
                </span>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
                  Phase 0{index + 1} &middot; {phaseInfo.phase}
                </p>
              </div>
              <h2 className="mt-3 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
                {phaseInfo.title}
              </h2>
              <p className="mt-3 max-w-3xl text-[17px] leading-relaxed text-slate">
                {phaseInfo.summary}
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {phaseServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} showBullets />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* How we work */}
      <section id="how-we-work" className="border-t border-sand bg-ivory py-20 md:py-24">
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

      {/* Engagement and pricing block, behind SHOW_PRICING (default false) */}
      {SHOW_PRICING ? <PricingBlock /> : null}

      {/* FAQ */}
      <section id="faq" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-4">
            {servicesFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-sand bg-ivory p-6 md:p-7"
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

      {/* Final CTA */}
      <section className="border-t border-sand bg-navy py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-white">
            Pick one process that wastes time every week. Let&apos;s fix that first.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-[rgba(255,255,255,0.78)]">
            Book a free 30-minute systems audit or take the 3-minute AI Readiness Scorecard.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <TalkToUsButton location="services-hub-final-cta" className={primaryCtaClass} />
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
