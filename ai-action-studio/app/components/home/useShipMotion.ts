"use client";

import { useEffect } from "react";
import gsap from "gsap";
import type { ShipState } from "./home-copy";

const ROTATORS =
  "#gear-large, #gear-small, #flywheel, #propeller, #gauge-needle, #wheel-spin, #oar-1, #oar-2, #oar-3, #oar-4, #oar-5, #oar-6";

const OAR_PORTS = [274, 334, 394, 454, 514, 574] as const;

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

function playState(svg: SVGSVGElement, state: ShipState) {
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

  if (state === 2) {
    gsap.fromTo(
      "#boat, #team-1, #team-2, #team-3",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, stagger: 0.12, ease: "power1.out" },
    );
  }

  if (state === 3) {
    const enter = gsap.timeline();
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
    const rod = svg.querySelector("#piston-rod") ?? svg.querySelector("#piston path:last-of-type");
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
  useEffect(() => {
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      playState(svg, state);
    }, svg);

    return () => ctx.revert();
  }, [svg, state]);
}
