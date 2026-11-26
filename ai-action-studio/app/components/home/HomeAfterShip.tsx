import Image from "next/image";
import Link from "next/link";
import TalkToUsButton from "../TalkToUsButton";
import HomeFaqAccordion from "./HomeFaqAccordion";
import {
  glanceRows,
  homePrimaryBtnSm,
  homeSecondaryOnDarkSm,
  homeSecondaryOnLight,
  learnAiCards,
} from "./home-copy";
import { YOUTUBE_URL } from "@/lib/site";
import "./ship-story.css";

export default function HomeAfterShip() {
  return (
    <div className="bg-ivory">
      <section
        id="ai-score-banner"
        className="bg-ivory px-5 py-[60px] md:px-20"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 rounded-[24px] bg-navy px-6 py-10 md:flex-row md:items-center md:px-14 md:py-12">
          <div className="max-w-[600px]">
            <p className="ship-kicker">FREE 3-MINUTE ASSESSMENT</p>
            <h2 className="mt-3.5 text-[clamp(1.75rem,3vw,2.125rem)] font-semibold leading-tight text-white">
              How ready is your business for AI?
            </h2>
            <p className="mt-3.5 text-[16px] leading-relaxed text-[#94a3b8]">
              Ten questions. A score out of 100 across systems and data,
              processes, people and AI use, and risk and security, with three
              recommendations.
            </p>
          </div>
          <Link href="/ai-score" className={`${homePrimaryBtnSm} shrink-0`}>
            Get your AI score →
          </Link>
        </div>
      </section>

      <section id="founder" className="bg-cream px-5 py-16 md:px-20 md:py-[110px]">
        <div className="mx-auto flex max-w-[996px] flex-col items-center gap-10 md:flex-row md:gap-14">
          <div className="relative h-[280px] w-[240px] shrink-0 overflow-hidden rounded-[24px] bg-sand sm:h-[360px] sm:w-[320px]">
            <Image
              src="/images/ranjan-kashyap.png"
              alt="Ranjan Kashyap — Founder of AI Action Studio"
              width={320}
              height={360}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="flex max-w-[620px] flex-col items-start gap-4">
            <p className="ship-kicker ship-kicker--light">FOUNDER-LED</p>
            <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-semibold text-navy">
              Ranjan Kashyap
            </h2>
            <p className="text-[17px] leading-relaxed text-slate">
              Founder of ScaleRise, a data analytics and performance marketing
              agency. After years inside client businesses, I kept seeing the
              same manual work, so I now build and maintain AI systems that
              remove it. You talk to the person who designs your system.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <TalkToUsButton
                location="home-founder"
                className={homePrimaryBtnSm}
              >
                Talk to Ranjan
              </TalkToUsButton>
              <Link href="/about" className={homeSecondaryOnLight}>
                More about us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="at-a-glance"
        className="bg-ivory px-5 py-16 md:px-20 md:py-[110px]"
      >
        <div className="mx-auto max-w-[1280px]">
          <p className="ship-kicker ship-kicker--light">AT A GLANCE</p>
          <h2 className="mt-3.5 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-navy">
            AI Action Studio at a glance
          </h2>
          <dl className="mt-9 overflow-hidden rounded-2xl border border-sand bg-white">
            {glanceRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 border-b border-sand px-5 py-[18px] last:border-b-0 md:grid-cols-[240px_1fr] md:gap-6 md:px-7"
              >
                <dt className="text-[15px] font-semibold text-navy">
                  {row.label}
                </dt>
                <dd className="text-[15px] text-slate">{row.value}</dd>
              </div>
            ))}
            <div className="grid gap-2 border-b border-sand px-5 py-[18px] md:grid-cols-[240px_1fr] md:gap-6 md:px-7">
              <dt className="text-[15px] font-semibold text-navy">Founder</dt>
              <dd className="text-[15px] text-slate">
                <Link
                  href="/about"
                  className="font-medium underline decoration-mint underline-offset-4 hover:decoration-navy"
                >
                  Ranjan Kashyap
                </Link>
              </dd>
            </div>
            <div className="grid gap-2 px-5 py-[18px] md:grid-cols-[240px_1fr] md:gap-6 md:px-7">
              <dt className="text-[15px] font-semibold text-navy">Contact</dt>
              <dd className="text-[15px] text-slate">
                <Link
                  href="/contact"
                  className="font-medium underline decoration-mint underline-offset-4 hover:decoration-navy"
                >
                  Talk to us
                </Link>{" "}
                ·{" "}
                <a
                  href="mailto:hello@aiactionstudio.com"
                  className="underline decoration-mint underline-offset-4 hover:decoration-navy"
                >
                  hello@aiactionstudio.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        id="learn-ai"
        className="bg-cream px-5 py-16 md:px-20 md:py-[110px]"
      >
        <div className="mx-auto max-w-[1280px]">
          <p className="ship-kicker ship-kicker--light">
            LEARN AI. USE AI. TAKE ACTION.
          </p>
          <h2 className="mt-3.5 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-navy">
            Free tutorials, tools, prompts and blog
          </h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {learnAiCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="flex flex-col gap-2.5 rounded-2xl border border-sand bg-white p-6 transition hover:border-navy"
              >
                <h3 className="text-[18px] font-semibold text-navy">
                  {card.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-slate">
                  {card.body}
                </p>
                <span className="mt-auto pt-2 text-[14px] font-medium text-navy">
                  Open →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/resources" className={homeSecondaryOnLight}>
              All free resources →
            </Link>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={homeSecondaryOnLight}
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-ivory px-5 py-16 md:px-20 md:py-[110px]">
        <div className="mx-auto max-w-[1280px]">
          <p className="ship-kicker ship-kicker--light">FAQ</p>
          <h2 className="mt-3.5 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-navy">
            Frequently asked questions
          </h2>
          <div className="mt-9">
            <HomeFaqAccordion />
          </div>
        </div>
      </section>

      <section
        id="final-cta"
        className="bg-ivory px-5 py-10 md:px-20"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 rounded-[28px] bg-navy px-6 py-16 text-center md:px-20 md:py-16">
          <h2 className="max-w-[760px] text-[clamp(1.75rem,3.4vw,2.375rem)] font-semibold leading-tight text-white">
            Pick one department that still runs by hand. Let&apos;s fix that
            first.
          </h2>
          <div className="flex flex-wrap justify-center gap-3.5">
            <TalkToUsButton
              location="home-final-cta"
              className={homePrimaryBtnSm}
            >
              Book a free 30-minute audit
            </TalkToUsButton>
            <Link href="/ai-score" className={homeSecondaryOnDarkSm}>
              Get your AI score →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
