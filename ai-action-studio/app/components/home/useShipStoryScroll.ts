"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, type Dispatch, type RefObject, type SetStateAction } from "react";
import type { ShipState } from "./home-copy";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useShipStoryScroll(
  root: RefObject<HTMLElement | null>,
  setState: Dispatch<SetStateAction<ShipState>>,
) {
  useLayoutEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    return () => {
      html.style.scrollBehavior = prev;
    };
  }, []);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const scenes = el.querySelectorAll<HTMLElement>("[data-scene]");
      scenes.forEach((scene) => {
        const n = Number(scene.dataset.scene) as ShipState;
        ScrollTrigger.create({
          trigger: scene,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => setState(n),
          onEnterBack: () => setState(n),
        });
      });
    },
    { scope: root, dependencies: [setState] },
  );
}
