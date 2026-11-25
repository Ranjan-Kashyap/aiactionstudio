import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Breadcrumbs,
  JsonLd,
  buildFaqSchema,
  buildServiceSchema,
} from "../../components/Breadcrumbs";
import ServiceCard from "../../components/ServiceCard";
import TalkToUsButton from "../../components/TalkToUsButton";
import {
  SERVICES,
  getRelatedServices,
  getServiceBySlug,
} from "@/src/data/services";
import { CARE_PLAN_TIERS, SHOW_PRICING, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: service.href },
    openGraph: {
      title: service.fullTitle,
      description: service.metaDescription,
      url: `${SITE_URL}${service.href}`,
      siteName: "AI Action Studio",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${service.href}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: service.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.fullTitle,
      description: service.metaDescription,
      images: [`${service.href}/opengraph-image`],
    },
  };
}

const primaryCtaClass =
  "inline-flex items-center justify-center rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";
const secondaryCtaClass =
  "inline-flex items-center justify-center rounded-lg border border-navy px-6 py-3 text-[15px] font-semibold text-navy transition hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);

  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: service.cardTitle,
          description: service.metaDescription,
          url: service.href,
          serviceType: service.primaryKeyword,
        })}
      />
      <JsonLd data={buildFaqSchema(service.faqs, `${SITE_URL}${service.href}#faq`)} />

      {/* 1. Hero */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.navLabel, href: service.href },
            ]}
          />
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            {service.eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-navy">
            {service.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-slate">
            {service.intro}
          </p>

          {service.note ? (
            <p className="mt-4 inline-flex items-center rounded-md border border-sand bg-white px-3.5 py-1.5 text-[14px] font-semibold text-navy">
              {service.note}
            </p>
          ) : null}

          {/* Quick answer block (AEO/GEO) */}
          <div className="mt-8 max-w-3xl rounded-xl border border-sand bg-white p-6 md:p-7">
            <div className="mb-2.5 h-0.5 w-10 bg-mint" aria-hidden />
            <h2 className="text-[18px] font-semibold text-navy">In short</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">
              {service.quickAnswer}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <TalkToUsButton
              location={`service-hero-${service.slug}`}
              className={primaryCtaClass}
            />
            <Link href="/ai-score" className={secondaryCtaClass}>
              Get your AI score
            </Link>
          </div>
        </div>
      </section>

      {/* 2. "Sound familiar?" pains */}
      <section id="pains" className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            The problem
          </p>
          <h2 className="mt-2 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Sound familiar?
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.pains.map((pain) => (
              <div
                key={pain}
                className="rounded-xl border border-sand bg-ivory p-6"
              >
                <div className="mb-3 h-0.5 w-8 bg-mint" aria-hidden />
                <p className="text-[16px] font-medium leading-relaxed text-navy">
                  &ldquo;{pain}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "What we build" deliverables */}
      <section id="deliverables" className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            Deliverables
          </p>
          <h2 className="mt-2 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            {service.slug === "care-plans"
              ? "What our Care Plans cover"
              : service.slug === "ai-consulting" || service.slug === "ai-training"
                ? "What you get"
                : "What we build"}
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {service.sections.map((sec) => (
              <article
                key={sec.heading}
                className="rounded-xl border border-sand bg-white p-6 md:p-8"
              >
                <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
                <h3 className="text-[22px] font-semibold leading-snug text-navy">
                  {sec.heading}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-slate">
                  {sec.body}
                </p>
              </article>
            ))}
          </div>

          {service.slug === "ai-consulting" ? (
            <div className="mt-8 rounded-xl border border-sand bg-white p-6 md:p-7">
              <p className="text-[16px] leading-relaxed text-slate">
                Want a self-serve starting point first?{" "}
                <Link
                  href="/ai-score"
                  className="font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
                >
                  Take the 3-minute AI Readiness Scorecard &rarr;
                </Link>
              </p>
            </div>
          ) : null}

          {/* Care Plans 3 tiers */}
          {service.slug === "care-plans" ? (
            <div className="mt-14">
              <h3 className="text-[24px] font-bold text-navy">
                Care Plan tiers
              </h3>
              <p className="mt-2 max-w-2xl text-[16px] text-slate">
                Sized to the complexity of your system and how fast your processes change.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {CARE_PLAN_TIERS.map((tier) => (
                  <article
                    key={tier.name}
                    className="flex flex-col justify-between rounded-xl border border-sand bg-white p-6 md:p-7"
                  >
                    <div>
                      <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
                      <h4 className="text-[20px] font-semibold text-navy">
                        {tier.name}
                      </h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-slate">
                        {tier.summary}
                      </p>
                      <dl className="mt-5 space-y-2.5 border-t border-sand pt-4 text-[14px]">
                        <div>
                          <dt className="font-semibold text-navy">Response target</dt>
                          <dd className="text-slate">{tier.responseTime}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-navy">Monthly changes</dt>
                          <dd className="text-slate">{tier.includedHours}</dd>
                        </div>
                        {SHOW_PRICING && tier.priceUsd ? (
                          <div>
                            <dt className="font-semibold text-navy">Starting price</dt>
                            <dd className="text-slate">
                              {tier.priceUsd} ({tier.priceInr})
                            </dd>
                          </div>
                        ) : null}
                      </dl>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* 4. "How it works" */}
      <section
        id="how-it-works"
        className="border-t border-sand bg-white py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            Process
          </p>
          <h2 className="mt-2 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            How it works
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.howItWorks.map((item) => (
              <article
                key={item.step}
                className="rounded-xl border border-sand bg-ivory p-6 md:p-7"
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

      {/* 5. "Typical tools" + 6. "After launch" */}
      <section className="border-t border-sand bg-ivory py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
              Stack
            </p>
            <h2 className="mt-2 text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-tight text-navy">
              Typical tools
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate">
              We work with the tools you already use and pick the simplest stack that will stay
              reliable.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {service.typicalTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-sand bg-white px-3.5 py-2 text-[14px] font-medium text-navy"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-sand bg-white p-6 md:p-8">
              <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
              <h2 className="text-[22px] font-semibold text-navy">
                After launch
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">
                {service.afterLaunch}
              </p>
              {service.slug !== "care-plans" ? (
                <Link
                  href="/services/care-plans"
                  className="mt-5 inline-flex items-center text-[14px] font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
                >
                  See AI Care Plans &rarr;
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Related systems & visible trust signals */}
      <section className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
              Related systems
            </h2>
            <Link
              href="/services"
              className="text-[15px] font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
            >
              All services &rarr;
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((rel) => (
              <ServiceCard key={rel.slug} service={rel} />
            ))}
          </div>

          <p className="mt-12 border-t border-sand pt-6 text-[14px] leading-relaxed text-slate">
            Built and maintained by AI Action Studio, a founder-led AI automation agency. Led by{" "}
            <Link
              href="/about"
              className="font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
            >
              Ranjan Kashyap
            </Link>
            . &middot; Last updated {service.lastUpdated}
          </p>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-4">
            {service.faqs.map((faq) => (
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

      {/* 9. AI Score banner + final CTA */}
      <section className="border-t border-sand bg-ivory py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl border border-sand bg-white p-8 sm:px-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
              Self-serve assessment
            </p>
            <h2 className="mt-2 text-[24px] font-bold leading-snug text-navy">
              How ready is your business for AI? Answer 10 questions and get your score.
            </h2>
          </div>
          <Link href="/ai-score" className={secondaryCtaClass}>
            Get your AI score &rarr;
          </Link>
        </div>
      </section>

      <section className="border-t border-sand bg-navy py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-white">
            Pick one process that wastes time every week. Let&apos;s fix that first.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-[rgba(255,255,255,0.78)]">
            Book a free 30-minute systems audit. You&apos;ll leave with a clear view of what to
            automate first.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <TalkToUsButton
              location={`service-final-cta-${service.slug}`}
              className={primaryCtaClass}
            />
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
