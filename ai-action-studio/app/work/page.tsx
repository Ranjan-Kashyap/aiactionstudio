import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";
import TalkToUsButton from "../components/TalkToUsButton";
import { getDisplayClientLabel, getPublishedCaseStudies } from "@/src/data/work";
import { BUILD_VIDEOS, SITE_URL } from "@/lib/site";

const fullTitle = "Our Work: AI Systems We've Built | AI Action Studio";
const description =
  "See the AI agents, workflow automations, custom tools and integrations built and maintained by AI Action Studio for growing businesses.";

export const metadata: Metadata = {
  title: "Our Work: AI Systems We've Built",
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    title: fullTitle,
    description,
    url: `${SITE_URL}/work`,
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

const primaryCtaClass =
  "inline-flex items-center justify-center rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";
const secondaryCtaClass =
  "inline-flex items-center justify-center rounded-lg border border-navy px-6 py-3 text-[15px] font-semibold text-navy transition hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export default function WorkPage() {
  const caseStudies = getPublishedCaseStudies();

  return (
    <>
      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Work", href: "/work" },
            ]}
          />
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            Our work
          </p>
          <h1 className="mt-3 max-w-4xl text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-navy">
            Systems we&apos;ve built
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-slate">
            Practical AI agents, workflow automations, custom web apps and integrations built in our
            clients&apos; own accounts and maintained after launch.
          </p>
        </div>
      </section>

      <section className="border-t border-sand bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {caseStudies.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/work/${study.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-sand bg-ivory p-6 md:p-8 transition hover:border-mint hover:bg-white"
                >
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
                      {getDisplayClientLabel(study)} &middot; {study.teamSize}
                    </p>
                    <h2 className="mt-2.5 text-[22px] font-semibold leading-snug text-navy">
                      {study.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate">
                      {study.problem}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {study.tools.map((tool) => (
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
                    Read case study &rarr;
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-3xl rounded-2xl border border-sand bg-ivory p-8 text-center md:p-12">
              <div className="mx-auto mb-4 h-0.5 w-12 bg-mint" aria-hidden />
              <h2 className="text-[24px] font-bold text-navy">
                We&apos;re publishing our first case studies now.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[17px] leading-relaxed text-slate">
                Want to see a live demo of a system like yours? Talk to us.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <TalkToUsButton location="work-empty-state" className={primaryCtaClass} />
                <Link href="/ai-score" className={secondaryCtaClass}>
                  Get your AI score
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Build videos section — hidden if BUILD_VIDEOS is empty */}
      {BUILD_VIDEOS.length > 0 ? (
        <section className="border-t border-sand bg-cream py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
              Build videos
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {BUILD_VIDEOS.map((vid) => (
                <article
                  key={vid.embedUrl}
                  className="overflow-hidden rounded-xl border border-sand bg-white p-5"
                >
                  <div className="aspect-video w-full overflow-hidden rounded-lg bg-navy">
                    <iframe
                      src={vid.embedUrl}
                      title={vid.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-4 text-[18px] font-semibold text-navy">
                    {vid.title}
                  </h3>
                  {vid.summary ? (
                    <p className="mt-2 text-[14px] leading-relaxed text-slate">
                      {vid.summary}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
