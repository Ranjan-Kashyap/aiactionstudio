import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Action Studio tests AI tools honestly — with real workflows, operator credibility, and transparent results.",
  alternates: { canonical: "/about" },
};

const pillars = [
  "Honesty over hype — failed experiments are published, not hidden.",
  "Documentation, not preaching — learn with us in public.",
  "Operator credibility — tools tested in real business contexts.",
  "Skill + ecosystem — no tool prints money by itself.",
  "Transparency about AI — our avatar host is openly disclosed as AI-generated.",
];

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">About</p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-bold text-navy">
          Built for people tired of AI hype
        </h1>
        <p className="mt-6 text-[17px] leading-relaxed text-slate">
          AI Action Studio tests, reviews, and breaks down AI software, automation systems, and digital
          tools — honestly and with real workflows — so viewers can build genuine online income
          without wasting time or money on hype.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-slate">
          For freelancers, side hustlers, and business owners overwhelmed by AI noise, we&apos;re the
          channel that actually tests every tool and method on camera — backed by real marketing
          agency experience.
        </p>

        <h2 className="mt-12 text-[24px] font-semibold text-navy">Brand pillars</h2>
        <ul className="mt-5 space-y-3">
          {pillars.map((item) => (
            <li
              key={item}
              className="border-l-2 border-mint pl-4 text-[15px] leading-relaxed text-slate"
            >
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-[24px] font-semibold text-navy">Viewer promise</h2>
        <p className="mt-4 text-[17px] text-slate">
          Watch us test every method first, and copy only what works.
        </p>

        <h2 className="mt-12 text-[24px] font-semibold text-navy">Sister company</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate">
          The founder runs{" "}
          <a
            href="https://scalerise.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
          >
            ScaleRise
          </a>
          , a performance marketing agency. Business viewers who need operators — not another tool
          video — can explore ScaleRise separately. We never hard-sell agency services on this
          channel.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/free-checklist"
            className="rounded-lg bg-mint px-5 py-3 text-[15px] font-semibold text-navy hover:brightness-110"
          >
            Get Free Checklist
          </Link>
          <a
            href="https://youtube.com/@AIWealthBase"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-navy px-5 py-3 text-[15px] font-medium text-navy hover:bg-navy hover:text-white"
          >
            YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
}
