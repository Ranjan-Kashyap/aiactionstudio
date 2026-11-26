"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import TalkToUsButton from "../TalkToUsButton";
import SceneProgress from "./SceneProgress";
import ShipSvg from "./ShipSvg";
import {
  SHIP_STATE_LABELS,
  carePlanPoints,
  founderTrackCards,
  homePrimaryBtn,
  homeSecondaryOnDark,
  problemCards,
  processSteps,
  systemsWeBuild,
  whatWeDoPhases,
  whyUsCards,
  type ShipState,
} from "./home-copy";
import { useShipMotion } from "./useShipMotion";
import { useShipStoryScroll } from "./useShipStoryScroll";
import "./ship-story.css";

function SceneBlocks({
  scene,
  children,
}: {
  scene: ShipState;
  children: ReactNode;
}) {
  return (
    <div data-scene={scene}>
      <img
        className="story__scene-static"
        src={`/ship/ship-state-${scene}.svg`}
        alt={SHIP_STATE_LABELS[scene]}
        width={840}
        height={620}
      />
      {children}
    </div>
  );
}

export default function ShipStory() {
  const rootRef = useRef<HTMLElement>(null);
  const [state, setState] = useState<ShipState>(1);
  const [svg, setSvg] = useState<SVGSVGElement | null>(null);
  const palette = state === 5 ? "light" : "dark";

  const onReady = useCallback((node: SVGSVGElement) => {
    setSvg(node);
  }, []);

  useShipStoryScroll(rootRef, setState);
  useShipMotion(svg, state);

  return (
    <section
      ref={rootRef}
      className="story"
      data-palette={palette}
    >
      <div className="story__text">
        <SceneBlocks scene={1}>
          <div className="ship-block">
            <p className="ship-kicker">
              AI AUTOMATION AGENCY · AI SYSTEMS, BUILT AND MAINTAINED
            </p>
            <h1 className="text-[clamp(2.5rem,6vw,4.125rem)] font-semibold leading-[1.16]">
              Stop rowing.
              <br />
              Start steering.
            </h1>
            <p className="ship-lede max-w-[460px] text-[17px] leading-7">
              Your business should run on systems, not on people&apos;s memory.
              Right now your crew rows and pulls every rope by hand, and you, the
              captain, spend more time running between departments than steering.
              We are an AI automation agency: we come aboard, fit the systems and
              install the engine.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <TalkToUsButton location="home-hero" className={homePrimaryBtn} />
              <Link href="/ai-score" className={homeSecondaryOnDark}>
                Get your AI score →
              </Link>
            </div>
            <p className="ship-lede text-[13px]">
              For growing businesses in the US, UK, Canada, Australia and India.
            </p>
          </div>
        </SceneBlocks>

        <SceneBlocks scene={2}>
          <div className="ship-block">
            <p className="ship-kicker">01 · CONSULT</p>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.16]">
              First, we come aboard and see how your ship really runs.
            </h2>
            <p className="ship-lede max-w-[460px] text-[17px] leading-7">
              We walk every department with you, map who does what by hand, and
              mark where time and money leak out. You get the map and a fixed
              quote before anything is built.
            </p>
          </div>

          <div className="ship-block">
            <p className="ship-kicker">SOUND FAMILIAR?</p>
            <h2 className="text-[clamp(1.75rem,3.4vw,2.25rem)] font-semibold leading-[1.16]">
              Where manual work slows growing teams down
            </h2>
            <div className="ship-card-grid">
              {problemCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="ship-card ship-card--problem flex flex-col gap-2 rounded-[14px] border p-5 transition"
                >
                  <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] font-medium text-[#f59e0a]">
                    ● PROBLEM
                  </p>
                  <h3 className="text-[17px] font-semibold leading-snug">
                    {card.title}
                  </h3>
                  <p className="ship-lede text-[13px] leading-relaxed">
                    {card.body}
                  </p>
                  <span className="ship-card-cta mt-auto pt-1 text-[13px] font-medium">
                    {card.cta} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </SceneBlocks>

        <SceneBlocks scene={3}>
          <div className="ship-block">
            <p className="ship-kicker">02 · ENABLE &nbsp;&nbsp; 03 · BUILD</p>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.16]">
              Then we fit it out, department by department.
            </h2>
            <p className="ship-lede max-w-[460px] text-[17px] leading-7">
              We replace the rowing deck with an engine. Every department that
              runs by hand gets a system, your team learns to run it on real
              work, and you see progress in a demo every week.
            </p>
            <p className="ship-lede font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-medium tracking-[0.04em]">
              WHAT WE DO · FROM FIRST AUDIT TO DAILY OPERATIONS
            </p>
            <div className="w-full">
              {whatWeDoPhases.map((phase) => (
                <Link
                  key={phase.n}
                  href={phase.href}
                  className="ship-phase flex gap-4 border-t py-3.5 transition"
                >
                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[13px] font-medium text-mint">
                    {phase.n}
                  </span>
                  <span>
                    <span className="block text-[18px] font-semibold">
                      {phase.title}
                    </span>
                    <span className="ship-lede mt-1 block text-[14px] leading-relaxed">
                      {phase.body}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/services"
              className="ship-card-cta text-[14px] font-medium hover:underline"
            >
              Explore all services →
            </Link>
          </div>

          <div className="ship-block">
            <p className="ship-kicker">SYSTEMS WE BUILD</p>
            <h2 className="text-[clamp(1.75rem,3.4vw,2.125rem)] font-semibold leading-[1.15]">
              Connected systems built around how your team works
            </h2>
            <div className="ship-card-grid">
              {systemsWeBuild.map((sys) => (
                <Link
                  key={sys.href + sys.title}
                  href={sys.href}
                  className="ship-card flex flex-col gap-2 rounded-[14px] border p-5 transition"
                >
                  <h3 className="text-[17px] font-semibold">{sys.title}</h3>
                  <p className="ship-lede font-[family-name:var(--font-ibm-plex-mono)] text-[12px] leading-snug">
                    {sys.tags}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </SceneBlocks>

        <SceneBlocks scene={4}>
          <div className="ship-block">
            <p className="ship-kicker">04 · GO LIVE</p>
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.15]">
              Engine on.
            </h2>
            <p className="ship-lede max-w-[460px] text-[17px] leading-7">
              Built in your own accounts, tested until it&apos;s right, documented
              so you keep it. The oars come in, the sails come down, and the
              engine takes over.
            </p>
          </div>

          <div className="ship-block">
            <p className="ship-kicker">PROCESS</p>
            <h2 className="text-[clamp(1.75rem,3.4vw,2.125rem)] font-semibold">
              How we work
            </h2>
            <div className="flex w-full flex-col gap-3">
              {processSteps.map((step) => (
                <article
                  key={step.n}
                  className="ship-card flex flex-col gap-2 rounded-[14px] border p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-mint px-2.5 py-1 font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-medium text-navy">
                      {step.n}
                    </span>
                    <h3 className="text-[17px] font-semibold">{step.title}</h3>
                  </div>
                  <p className="ship-lede text-[14px] leading-relaxed">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="ship-block">
            <p className="ship-kicker">WHY AI ACTION STUDIO</p>
            <h2 className="text-[clamp(1.75rem,3.4vw,2.125rem)] font-semibold leading-[1.15]">
              Working systems, not AI theatre
            </h2>
            <div className="ship-card-grid">
              {whyUsCards.map((card) => (
                <article
                  key={card.question}
                  className="ship-card flex flex-col gap-2 rounded-[14px] border p-5"
                >
                  <h3 className="text-[15px] font-semibold leading-snug">
                    {card.question}
                  </h3>
                  <p className="ship-lede text-[13px] leading-relaxed">
                    {card.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </SceneBlocks>

        <SceneBlocks scene={5}>
          <div className="ship-block">
            <p className="ship-kicker ship-kicker--light">05 · RUN</p>
            <h2 className="text-[clamp(2rem,4vw,2.875rem)] font-semibold leading-[1.17]">
              Now you steer. The ship keeps running.
            </h2>
            <p className="max-w-[460px] text-[17px] leading-relaxed text-slate">
              A monthly care plan watches every system, fixes what breaks and
              makes small changes as you grow. Someone on leave? The work still
              gets done. Nothing depends on one person remembering.
            </p>
            <ul className="flex flex-col gap-2">
              {carePlanPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-[15px] text-navy"
                >
                  <span
                    className="size-2 shrink-0 rounded-full bg-[#009966]"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="ship-block">
            <p className="ship-kicker ship-kicker--light">FOUNDER TRACK RECORD</p>
            <h2 className="text-[clamp(1.75rem,3.4vw,2.125rem)] font-semibold leading-[1.15] text-navy">
              Built by someone who has run the ship
            </h2>
            {founderTrackCards.map((card) => (
              <article
                key={card.title}
                className="w-full rounded-2xl border border-sand bg-white p-6"
              >
                <h3 className="text-[18px] font-semibold text-navy">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-slate">
                  {card.body}
                </p>
              </article>
            ))}
            <Link
              href="/work"
              className="text-[15px] font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
            >
              See our work →
            </Link>
          </div>
        </SceneBlocks>
      </div>

      <div className="story__art">
        <div className="story__sticky">
          <ShipSvg state={state} palette={palette} onReady={onReady} />
          <SceneProgress active={state} />
        </div>
      </div>
    </section>
  );
}
