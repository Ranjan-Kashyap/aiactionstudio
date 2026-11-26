"use client";

import { useEffect, useRef, useState } from "react";
import { SHIP_MASTER_SVG } from "./ship-master-html";
import { SHIP_STATE_LABELS, type ShipState } from "./home-copy";

type ShipSvgProps = {
  state: ShipState;
  palette?: "dark" | "light";
  className?: string;
  onReady?: (svg: SVGSVGElement) => void;
};

const MASTER_MARKUP = SHIP_MASTER_SVG.replace(/<style>[\s\S]*?<\/style>/, "")
  .replace(/\sstyle="transform-origin:[^"]*"/g, "")
  .replace(
    '<path d="M372 440 L406 444"',
    '<path id="piston-rod" d="M372 440 L406 444"',
  );

export default function ShipSvg({
  state,
  palette = "dark",
  className,
  onReady,
}: ShipSvgProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [ready, setReady] = useState(false);
  const extra = className ? ` ${className}` : "";

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (!svgRef.current) {
      host.innerHTML = MASTER_MARKUP;
      svgRef.current = host.querySelector("svg");
      if (svgRef.current) {
        onReady?.(svgRef.current);
        setReady(true);
      }
    }
  }, [onReady]);

  useEffect(() => {
    const svg = svgRef.current ?? hostRef.current?.querySelector("svg");
    if (!svg) return;
    svg.setAttribute("data-state", String(state));
    svg.setAttribute("data-palette", palette);
    svg.setAttribute("aria-label", SHIP_STATE_LABELS[state]);
    svg.setAttribute("role", "img");
  }, [state, palette]);

  return (
    <>
      <img
        className={`${ready ? "ship-svg--static" : "ship-svg--ssr"}${extra}`}
        src={`/ship/ship-state-${state}.svg`}
        alt={SHIP_STATE_LABELS[state]}
        width={840}
        height={620}
      />
      <div ref={hostRef} className={`ship-svg-host${extra}`} />
    </>
  );
}
