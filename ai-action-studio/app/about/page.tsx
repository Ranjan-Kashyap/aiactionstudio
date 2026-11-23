import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, JsonLd, buildAboutPageSchema } from "../components/Breadcrumbs";
import TalkToUsButton from "../components/TalkToUsButton";
import { SITE_URL } from "@/lib/site";

const fullTitle = "About AI Action Studio | Founder-Led AI Automation Agency";
const description =
  "AI Action Studio is a founder-led AI automation agency. Meet Ranjan Kashyap and see how we build, connect and maintain AI systems for businesses.";

export const metadata: Metadata = {
  title: {
    absolute: fullTitle,
  },
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: fullTitle,
    description,
    url: `${SITE_URL}/about`,
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

const beliefs = [
  "Start with the process, not the tool.",
  "Use AI where it's reliable; use simple automation where that's better.",
  "Build in the client's accounts and document everything.",
  "Maintain what we build.",
];

export default function AboutPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <JsonLd data={buildAboutPageSchema()} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ]}
        />
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">About</p>
        <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border border-sand bg-white shadow-[0_8px_24px_rgba(10,15,29,0.06)]">
            <Image
              src="/images/ranjan-kashyap.png"
              alt="Ranjan Kashyap — Founder of AI Action Studio"
              width={224}
              height={268}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-navy">
              Hi, I&apos;m Ranjan.
            </h1>
          </div>
        </div>
        <p className="mt-6 text-[17px] leading-relaxed text-slate">
          I&apos;m Ranjan Kashyap, founder of AI Action Studio. We&apos;re an AI automation agency:
          we build AI agents, automations, custom tools and integrations for growing businesses, and
          we maintain them after launch.
        </p>

        <h2 className="mt-10 text-[24px] font-semibold text-navy">What we do</h2>
        <p className="mt-3 text-[16px] leading-relaxed text-slate">
          Most teams don&apos;t need more tools; they need the tools they have to work together, and
          the repetitive work taken off their plate. That&apos;s what we build.
        </p>

        <h2 className="mt-10 text-[24px] font-semibold text-navy">How we got here</h2>
        <p className="mt-3 text-[16px] leading-relaxed text-slate">
          My background is data engineering, tracking and automation for agencies and growing
          businesses. I also run{" "}
          <a
            href="https://scalelens.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
          >
            ScaleLens
          </a>
          , which builds custom dashboards, and I share practical AI tutorials on YouTube.
        </p>

        <h2 className="mt-10 text-[24px] font-semibold text-navy">What we believe</h2>
        <ul className="mt-4 space-y-3">
          {beliefs.map((item) => (
            <li
              key={item}
              className="border-l-2 border-mint pl-4 text-[16px] leading-relaxed text-slate"
            >
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-[24px] font-semibold text-navy">Free resources</h2>
        <p className="mt-3 text-[16px] leading-relaxed text-slate">
          We still publish{" "}
          <Link
            href="/resources"
            className="font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
          >
            free tutorials, tool comparisons, prompts and workflows
          </Link>
          .
        </p>

        <div className="mt-12">
          <TalkToUsButton location="about-page" />
        </div>
      </div>
    </section>
  );
}
