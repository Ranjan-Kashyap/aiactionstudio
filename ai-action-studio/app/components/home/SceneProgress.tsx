import type { ShipState } from "./home-copy";

const STEPS: { state: ShipState; n: string; label: string }[] = [
  { state: 1, n: "01", label: "Old ship" },
  { state: 2, n: "02", label: "Consult" },
  { state: 3, n: "03", label: "Build" },
  { state: 4, n: "04", label: "Go live" },
  { state: 5, n: "05", label: "Run" },
];

export default function SceneProgress({ active }: { active: ShipState }) {
  return (
    <ol className="story-progress" aria-label="Story progress">
      {STEPS.map((step) => (
        <li
          key={step.state}
          data-active={step.state === active ? "true" : "false"}
        >
          {step.n} {step.label}
        </li>
      ))}
    </ol>
  );
}
