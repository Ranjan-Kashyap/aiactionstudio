import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumbs,
  JsonLd,
  buildAboutPageSchema,
} from "../components/Breadcrumbs";
import TalkToUsButton from "../components/TalkToUsButton";
import { SITE_URL } from "@/lib/site";

const fullTitle = "About Ranjan Kashyap & AI Action Studio";
const description =
  "Meet Ranjan Kashyap, founder of AI Action Studio and ScaleRise. We build, connect and maintain practical AI systems and automations for growing businesses.";

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

const values = [
  {
    title: "Practical over hype",
    body: "We start with your process, not a shiny tool. If a simple rule-based automation or off-the-shelf tool solves it, we tell you.",
  },
  {
    title: "Small fixed-price starts",
    body: "Every engagement begins with a free 30-minute audit and a fixed-price blueprint credited to the build, followed by weekly working demos.",
  },
  {
    title: "We stay after launch",
    body: "Software and automations drift when APIs change. Our monthly Care Plans keep your systems monitored, fixed and improving.",
  },
  {
    title: "Your data stays in your accounts",
    body: "We build inside your company accounts with least-privilege access, sign NDAs on request, and document everything so you own it.",
  },
];

export default function AboutPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <JsonLd data={buildAboutPageSchema()} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ]}
        />
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
          About AI Action Studio
        </p>

        <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-center">
          {/* TODO(Ranjan): replace /images/ranjan-kashyap.png if a newer photo is preferred */}
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-sand bg-white shadow-[0_8px_24px_rgba(10,15,29,0.06)] sm:h-32 sm:w-32">
            <Image
              src="/images/ranjan-kashyap.png"
              alt="Ranjan Kashyap — Founder of AI Action Studio"
              width={256}
              height={304}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-navy">
              Built by an operator, not a hype merchant
            </h1>
            <p className="mt-2 text-[15px] font-medium text-slate">
              Ranjan Kashyap &middot; Founder, AI Action Studio
            </p>
          </div>
        </div>

        {/* TODO(Ranjan): fill in exact years running businesses, clients served count, Upwork rating & earnings (if verifiable), and total systems built count. */}
        <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-slate">
          <p>
            I&apos;m Ranjan Kashyap, founder of AI Action Studio. We build and maintain the
            systems that take manual work off growing teams — from spreadsheets and WhatsApp to
            connected workflow automations, AI agents and custom internal tools.
          </p>
          <p>
            Before starting AI Action Studio, I ran <strong>ScaleRise</strong>, an agency focused
            on data engineering, analytics tracking and workflow automation for agencies and
            growing businesses across the US, UK, Canada, Australia and India.
          </p>
          <p>
            Most teams don&apos;t need another AI subscription or a 50-page consulting deck. They
            need the tools they already pay for to talk to each other, the repetitive data entry
            taken off their plate, and a partner who stays around after launch to keep things
            running. That&apos;s why we exist.
          </p>
        </div>

        {process.env.NODE_ENV === "development" ? (
          <div className="mt-6 rounded-lg border border-[var(--warning)] bg-white p-4 text-[13px] text-navy">
            <strong>Dev note — TODO(Ranjan):</strong> Add exact years running businesses, clients
            served, Upwork track record (rating &amp; earnings), and total systems built in{" "}
            <code>app/about/page.tsx</code>.
          </div>
        ) : null}

        <h2 className="mt-14 text-[26px] font-bold text-navy">
          What we stand for
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {values.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-sand bg-white p-6 md:p-7"
            >
              <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
              <h3 className="text-[19px] font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-slate">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-sand bg-white p-6 md:p-8">
          <h2 className="text-[22px] font-semibold text-navy">
            Free learning resources
          </h2>
          <p className="mt-2 text-[16px] leading-relaxed text-slate">
            We also share what we learn through{" "}
            <Link
              href="/resources"
              className="font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
            >
              free tutorials, tool comparisons, prompts and workflows
            </Link>{" "}
            and on YouTube.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <TalkToUsButton
            location="about-page"
            className="inline-flex items-center justify-center rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          />
          <Link
            href="/ai-score"
            className="inline-flex items-center justify-center rounded-lg border border-navy px-6 py-3 text-[15px] font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            Get your AI score
          </Link>
        </div>
      </div>
    </section>
  );
}
