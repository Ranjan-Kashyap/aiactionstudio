import type { Metadata } from "next";
import Link from "next/link";
import { YOUTUBE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ranjan is the person behind AI Action Studio — a practical, creator-led AI education and digital-product brand that helps you learn AI, use AI, and take action.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">About</p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-bold text-navy">
          Hi, I&apos;m Ranjan.
        </h1>
        <p className="mt-6 text-[17px] leading-relaxed text-slate">
          I&apos;m the person behind AI Action Studio. I&apos;m interested in one simple question:
          How can we actually use AI to do things better?
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-slate">
          I explore AI tools, workflows and ideas, test them in real situations when useful, and
          share what I learn so you can apply it yourself. AI Action Studio is where that
          exploration becomes useful content, resources and products.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-slate">
          This is a long-term AI education and digital-product brand — not a channel that exists
          only to review software. Tools and comparisons are one useful part of the work. The
          bigger aim is practical: help creators, freelancers, marketers, entrepreneurs and
          business owners learn AI, use AI, and take action.
        </p>

        <h2 className="mt-12 text-[24px] font-semibold text-navy">What AI Action Studio is for</h2>
        <ul className="mt-5 space-y-3">
          {[
            "Practical tutorials that show you how to actually use AI.",
            "Workflows and automation ideas that save time on real work.",
            "Useful tools, comparisons and recommendations when they answer a real question.",
            "Resources you can use right away — prompts, templates, guides and free tools.",
            "Building with AI: content, products, websites, systems and software.",
          ].map((item) => (
            <li
              key={item}
              className="border-l-2 border-mint pl-4 text-[15px] leading-relaxed text-slate"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/resources"
            className="rounded-lg bg-mint px-5 py-3 text-[15px] font-semibold text-navy hover:brightness-110"
          >
            Explore AI Resources
          </Link>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-navy px-5 py-3 text-[15px] font-medium text-navy hover:bg-navy hover:text-white"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
