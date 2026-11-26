"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { ShipState } from "./home-copy";

const ROTATORS =
  "#gear-large, #gear-small, #flywheel, #propeller, #gauge-needle, #wheel-spin, #oar-1, #oar-2, #oar-3, #oar-4, #oar-5, #oar-6";

const OAR_PORTS = [274, 334, 394, 454, 514, 574] as const;
const CRAFT = "#helicopter, #rotor";
const HOVER = "#helicopter, #rotor, #ladder";

function strokeLength(el: Element): number {
  const geo = el as SVGGeometryElement;
  if (typeof geo.getTotalLength === "function") {
    try {
      const len = geo.getTotalLength();
      if (len > 0) return len;
    } catch {
      /* fall through */
    }
  }
  return 80;
}

function drawIn(root: Element | null, duration = 0.5) {
  const tl = gsap.timeline();
  if (!root) return tl;
  const nodes = root.querySelectorAll("path, rect, circle, ellipse, line");
  const targets = nodes.length ? [...nodes] : [root];
  targets.forEach((node) => {
    const len = strokeLength(node);
    tl.set(node, { strokeDasharray: len, strokeDashoffset: len }, 0);
    tl.to(node, { strokeDashoffset: 0, duration, ease: "power2.out" }, 0);
  });
  return tl;
}

function isMobile() {
  return window.matchMedia("(max-width: 899px)").matches;
}

function startRotorLoops() {
  gsap.fromTo(
    "#rotor path",
    { scaleX: 1, svgOrigin: "190 47" },
    {
      scaleX: 0.15,
      svgOrigin: "190 47",
      duration: 0.14,
      ease: "none",
      yoyo: true,
      repeat: -1,
    },
  );
  gsap.to("#tail-rotor", {
    rotation: 360,
    svgOrigin: "102 64",
    duration: 0.4,
    ease: "none",
    repeat: -1,
  });
}

function startHoverLoop() {
  gsap.set("#ladder", { scaleY: 1, svgOrigin: "191 92" });
  gsap.fromTo(
    HOVER,
    { y: -3 },
    {
      y: 3,
      duration: 1.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      overwrite: false,
    },
  );
}

function playScene2(fromState: ShipState | null) {
  const mobile = isMobile();
  const arrive = mobile ? 0.7 : 1.2;
  const ladderDur = mobile ? 0.5 : 0.8;
  const teamDur = mobile ? 0.4 : 0.5;
  const fromRight = fromState === 3;

  gsap.set("#team-1, #team-2", { opacity: 0, y: -6 });
  gsap.set("#ladder", { scaleY: 0, svgOrigin: "191 92", y: 0 });
  gsap.set(
    "#problem-sales, #problem-operations, #problem-finance, #problem-people, #problem-rowing",
    { opacity: 0 },
  );
  gsap.set(CRAFT, {
    x: fromRight ? 300 : -260,
    y: fromRight ? -120 : -80,
    opacity: 0,
  });

  const tl = gsap.timeline();
  startRotorLoops();

  tl.to(CRAFT, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: arrive,
    ease: "power2.out",
  });
  tl.to("#ladder", {
    scaleY: 1,
    svgOrigin: "191 92",
    duration: ladderDur,
    ease: "power1.out",
  });
  tl.add(() => {
    startHoverLoop();
  });
  tl.to("#team-1, #team-2", {
    opacity: 1,
    y: 0,
    duration: teamDur,
    stagger: 0.3,
    ease: "power1.out",
  });
  tl.to(
    "#problem-sales, #problem-operations, #problem-finance, #problem-people, #problem-rowing",
    {
      opacity: 1,
      duration: 0.35,
      stagger: 0.12,
      ease: "power1.out",
    },
  );
}

function leaveScene2(toState: ShipState) {
  gsap.set(CRAFT, { x: 0, y: 0, opacity: 1 });
  gsap.set("#ladder", { scaleY: 1, svgOrigin: "191 92", opacity: 1 });
  gsap.set("#team-1, #team-2", { opacity: 1, y: 0 });

  const tl = gsap.timeline();
  tl.to("#team-1, #team-2", { opacity: 0, duration: 0.25, ease: "power1.in" });
  tl.to(
    "#ladder",
    { scaleY: 0, svgOrigin: "191 92", duration: 0.4, ease: "power1.in" },
    0,
  );
  if (toState === 3) {
    tl.to(
      CRAFT,
      { x: 300, y: -120, opacity: 0, duration: 1, ease: "power2.in" },
      0.2,
    );
  } else {
    tl.to(
      CRAFT,
      { x: -260, y: -80, opacity: 0, duration: 0.8, ease: "power2.in" },
      0.15,
    );
  }
  return tl;
}

function playState(
  svg: SVGSVGElement,
  state: ShipState,
  prev: ShipState | null,
) {
  gsap.set(ROTATORS, { clearProps: "transform" });
  gsap.set(
    "#gear-large, #gear-small, #flywheel, #propeller, #gauge-needle, #wheel-spin",
    { rotation: 0 },
  );

  ["wave-1", "wave-2", "wave-3", "wave-4"].forEach((id, i) => {
    gsap.to(`#${id}`, {
      x: 16,
      duration: 3.4 + i * 0.3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  if (state === 1 || state === 2) {
    OAR_PORTS.forEach((x, i) => {
      gsap.to(`#oar-${i + 1}`, {
        rotation: 6,
        svgOrigin: `${x} 434`,
        duration: 1.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.1,
      });
    });
  }

  if (state !== 2 && !(state === 1 && prev === 2) && !(state === 3 && prev === 2)) {
    gsap.set(HOVER + ", #team-1, #team-2", { opacity: 0, x: 0, y: 0, scaleY: 1 });
  }

  if (state === 1 && prev === 2) {
    leaveScene2(1);
  }

  if (state === 2) {
    playScene2(prev);
  }

  if (state === 3) {
    if (prev === 2) {
      leaveScene2(3);
    }
    const enter = gsap.timeline({ delay: prev === 2 ? 0.35 : 0 });
    enter.to(
      "#crew-rooms-manual, #worker-sales, #worker-operations, #worker-finance, #worker-people",
      { opacity: 0, duration: 0.4, ease: "power1.out" },
    );
    [
      "#machine-sales",
      "#machine-operations",
      "#machine-finance",
      "#machine-people",
    ].forEach((id) => {
      enter.add(drawIn(svg.querySelector(id), 0.45));
    });
    enter.add(drawIn(svg.querySelector("#engine-box"), 0.5));
    enter.fromTo(
      "#gear-large, #gear-small, #piston, #flywheel, #gauge, #shaft, #propeller",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" },
    );
    enter.add(drawIn(svg.querySelector("#wire"), 0.55));
  }

  if (state === 4 || state === 5) {
    gsap.to("#gear-large", {
      rotation: 360,
      svgOrigin: "306 426",
      duration: 6,
      ease: "none",
      repeat: -1,
    });
    gsap.to("#gear-small", {
      rotation: -360,
      svgOrigin: "332 426",
      duration: 4.5,
      ease: "none",
      repeat: -1,
    });
    gsap.to("#flywheel", {
      rotation: 360,
      svgOrigin: "418 438",
      duration: 3,
      ease: "none",
      repeat: -1,
    });
    gsap.to("#propeller", {
      rotation: 360,
      svgOrigin: "118 500",
      duration: 1.2,
      ease: "none",
      repeat: -1,
    });
    const rod =
      svg.querySelector("#piston-rod") ??
      svg.querySelector("#piston path:last-of-type");
    if (rod) {
      gsap.to(rod, { x: 4, duration: 0.55, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }
    gsap
      .timeline()
      .fromTo(
        "#gauge-needle",
        { rotation: 0, svgOrigin: "458 418" },
        { rotation: 35, svgOrigin: "458 418", duration: 0.7, ease: "power2.out" },
      )
      .to("#gauge-needle", {
        rotation: 25,
        svgOrigin: "458 418",
        duration: 0.35,
        ease: "power1.inOut",
      });
    gsap.to("#steam-1, #steam-2, #steam-3", {
      opacity: 0.2,
      duration: 2,
      stagger: 0.2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }

  if (state === 5) {
    gsap.to("#wheel-spin", {
      rotation: 4,
      svgOrigin: "112 246",
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }
}

export function useShipMotion(svg: SVGSVGElement | null, state: ShipState) {
  const prevRef = useRef<ShipState | null>(null);

  useEffect(() => {
    if (!svg) return;
    const prev = prevRef.current;
    prevRef.current = state;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      playState(svg, state, prev);
    }, svg);

    return () => ctx.revert();
  }, [svg, state]);
}
