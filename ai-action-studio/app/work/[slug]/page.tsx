import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Breadcrumbs,
  JsonLd,
  buildArticleSchema,
} from "../../components/Breadcrumbs";
import TalkToUsButton from "../../components/TalkToUsButton";
import {
  getCaseStudyBySlug,
  getDisplayClientLabel,
  getPublishedCaseStudies,
} from "@/src/data/work";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  const published = getPublishedCaseStudies();
  return published.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case study not found" };

  return {
    title: study.title,
    description: study.problem,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: `${study.title} | AI Action Studio`,
      description: study.problem,
      url: `${SITE_URL}/work/${study.slug}`,
      siteName: "AI Action Studio",
      type: "article",
      locale: "en_US",
      images: [
        {
          url: study.coverImage || "/opengraph-image",
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | AI Action Studio`,
      description: study.problem,
      images: [study.coverImage || "/opengraph-image"],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const clientLabel = getDisplayClientLabel(study);

  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          headline: study.title,
          description: study.problem,
          url: `/work/${study.slug}`,
          datePublished: study.publishedDate,
          dateModified: study.publishedDate,
        })}
      />

      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Work", href: "/work" },
              { label: study.title, href: `/work/${study.slug}` },
            ]}
          />
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            {clientLabel} &middot; Team size: {study.teamSize}
          </p>
          <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-navy">
            {study.title}
          </h1>
          <p className="mt-4 text-[14px] text-slate">
            Timeline: <strong>{study.timeline}</strong>
          </p>
        </div>
      </section>

      <section className="border-t border-sand bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-sand bg-ivory p-6 md:p-8">
            <h2 className="text-[22px] font-semibold text-navy">The problem</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-slate">
              {study.problem}
            </p>
          </div>

          <div className="rounded-xl border border-sand bg-ivory p-6 md:p-8">
            <h2 className="text-[22px] font-semibold text-navy">
              The system we built
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-slate">
              {study.systemBuilt}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-sand bg-white px-3 py-1 text-[13px] font-medium text-navy"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {study.results.length > 0 ? (
            <div>
              <h2 className="text-[22px] font-semibold text-navy">Results</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {study.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-sand bg-cream p-6"
                  >
                    <p className="text-[28px] font-bold text-navy">
                      {res.value}{" "}
                      <span className="text-[16px] font-semibold text-slate">
                        {res.unit}
                      </span>
                    </p>
                    <p className="mt-2 text-[13px] text-slate">
                      Measured how: {res.measuredHow}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {study.clientQuote ? (
            <blockquote className="rounded-xl border-l-4 border-mint bg-ivory p-6 text-[17px] italic text-navy">
              &ldquo;{study.clientQuote}&rdquo;
              <footer className="mt-3 text-[14px] font-semibold not-italic text-slate">
                &mdash; {clientLabel}
              </footer>
            </blockquote>
          ) : null}

          <div className="rounded-xl border border-sand bg-navy p-8 text-center">
            <h2 className="text-[24px] font-bold text-white">
              Want a system like this for your team?
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <TalkToUsButton
                location={`case-study-${study.slug}`}
                className="inline-flex items-center justify-center rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110"
              />
              <Link
                href="/ai-score"
                className="inline-flex items-center justify-center rounded-lg border border-mint px-6 py-3 text-[15px] font-semibold text-mint transition hover:bg-mint hover:text-navy"
              >
                Get your AI score
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
