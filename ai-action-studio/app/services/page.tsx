import type { Metadata } from "next";
import {
  Breadcrumbs,
  JsonLd,
  buildFaqSchema,
} from "../components/Breadcrumbs";
import ServiceCard from "../components/ServiceCard";
import TalkToUsButton from "../components/TalkToUsButton";
import { HOW_WE_WORK_STEPS, SERVICES } from "@/src/data/services";
import { SITE_URL } from "@/lib/site";

const fullTitle = "AI Automation Services for Businesses | AI Action Studio";
const description =
  "AI automation services: AI agents, workflow automation, custom software, finance and HR automation and integrations, built and maintained for you.";

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
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
  },
};

const servicesHubFaqs = [
  {
    question: "Which service should I start with?",
    answer:
      "Start with the free audit. We'll pick the one process where automation saves the most hours first.",
  },
  {
    question: "Do you only build with AI?",
    answer:
      "No. We use AI where it's reliable and useful, and plain automation or software where that's better.",
  },
];

const primaryCtaClass =
  "inline-flex items-center justify-center rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(servicesHubFaqs)} />

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
            We design, build and maintain the systems behind a calmer business: AI agents that
            answer and follow up, workflows that run themselves, and tools that connect everything
            you already use.
          </p>
          <div className="mt-8">
            <TalkToUsButton location="services-hub-hero" className={primaryCtaClass} />
          </div>
        </div>
      </section>

      {/* 1. Our services */}
      <section className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Our services
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} showBullets />
            ))}
          </div>
        </div>
      </section>

      {/* 2. How every project runs */}
      <section className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            How every project runs
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
                <h3 className="mt-4 text-[18px] font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Business automation services, not just tools & 4. Need dashboards and reporting? */}
      <section className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-xl border border-sand bg-ivory p-6 md:p-8">
            <h2 className="text-[24px] font-semibold leading-tight text-navy">
              Business automation services, not just tools
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-slate">
              Anyone can sell you a tool subscription. We take responsibility for the outcome: the
              process mapped, the system built, your team trained and the whole thing maintained.
            </p>
          </div>

          <div className="rounded-xl border border-sand bg-ivory p-6 md:p-8">
            <h2 className="text-[24px] font-semibold leading-tight text-navy">
              Need dashboards and reporting?
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-slate">
              Our sister company{" "}
              <a
                href="https://scalelens.app"
                className="font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
              >
                ScaleLens
              </a>{" "}
              builds custom dashboards on your data.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="border-t border-sand bg-ivory py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-4">
            {servicesHubFaqs.map((faq) => (
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

      {/* 6. Final CTA */}
      <section className="border-t border-sand bg-navy py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-white">
            Tell us what&apos;s slowing your team down
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-[rgba(255,255,255,0.78)]">
            Book a free 30-minute systems audit. You&apos;ll leave with a clear view of what to
            automate first.
          </p>
          <div className="mt-8 flex justify-center">
            <TalkToUsButton location="services-hub-final-cta" className={primaryCtaClass} />
          </div>
        </div>
      </section>
    </>
  );
}
