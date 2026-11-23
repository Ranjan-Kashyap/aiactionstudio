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
  HOW_WE_WORK_STEPS,
  SERVICES,
  getRelatedServices,
  getServiceBySlug,
} from "@/src/data/services";
import { SITE_URL } from "@/lib/site";

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
  "inline-flex items-center justify-center rounded-lg border border-navy px-6 py-3 text-[15px] font-medium text-navy transition hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

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

      {/* Hero */}
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

          {/* 5.1 Quick answer block */}
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
            <a href="#how-we-build-it" className={secondaryCtaClass}>
              See how we work
            </a>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {service.sections.map((sec) => (
              <article
                key={sec.heading}
                className="rounded-xl border border-sand bg-ivory p-6 md:p-8"
              >
                <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
                <h2 className="text-[22px] font-semibold leading-snug text-navy">
                  {sec.heading}
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-slate">
                  {sec.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we build it */}
      <section
        id="how-we-build-it"
        className="border-t border-sand bg-cream py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            How we build it
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

      {/* FAQ */}
      <section className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-4">
            {service.faqs.map((faq) => (
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

      {/* Related services & 5.5 Visible trust signals */}
      <section className="border-t border-sand bg-ivory py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
              Related services
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
            . · Last updated {service.lastUpdated}
          </p>
        </div>
      </section>

      {/* Final CTA */}
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
            <TalkToUsButton
              location={`service-final-cta-${service.slug}`}
              className={primaryCtaClass}
            />
          </div>
        </div>
      </section>
    </>
  );
}
