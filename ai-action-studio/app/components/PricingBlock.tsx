"use client";

import { useState } from "react";

type Currency = "USD" | "INR";

// TODO(Ranjan): confirm starting USD and INR pricing tiers before setting SHOW_PRICING=true.
const PRICING_ROWS = [
  {
    step: "Systems audit (30 min)",
    usd: "Free",
    inr: "Free",
  },
  {
    step: "Blueprint",
    usd: "from $500",
    inr: "from ₹15,000",
  },
  {
    step: "Build",
    usd: "from $3,000",
    inr: "from ₹1.5 lakh",
  },
  {
    step: "Care plan",
    usd: "from $300/month",
    inr: "from ₹15,000/month",
  },
];

export default function PricingBlock() {
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <section
      id="pricing"
      className="border-t border-sand bg-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
              Transparent engagement
            </p>
            <h2 className="mt-2 text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy">
              Engagement and starting prices
            </h2>
            <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-slate">
              Every project starts with a free audit and a fixed-price blueprint
              credited to the build.
            </p>
          </div>

          <div
            className="inline-flex rounded-lg border border-sand bg-ivory p-1"
            role="group"
            aria-label="Select currency"
          >
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              aria-pressed={currency === "USD"}
              className={`rounded-md px-3.5 py-1.5 text-[13px] font-semibold transition ${
                currency === "USD"
                  ? "bg-navy text-white"
                  : "text-slate hover:text-navy"
              }`}
            >
              International (USD)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("INR")}
              aria-pressed={currency === "INR"}
              className={`rounded-md px-3.5 py-1.5 text-[13px] font-semibold transition ${
                currency === "INR"
                  ? "bg-navy text-white"
                  : "text-slate hover:text-navy"
              }`}
            >
              India (INR)
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-sand bg-ivory">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-sand bg-cream">
                <th className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-slate">
                  Step
                </th>
                <th className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-slate">
                  {currency === "USD" ? "International (USD)" : "India (INR)"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand bg-white">
              {PRICING_ROWS.map((row) => (
                <tr key={row.step}>
                  <td className="px-6 py-4 text-[16px] font-semibold text-navy">
                    {row.step}
                  </td>
                  <td className="px-6 py-4 text-[16px] font-medium text-slate">
                    {currency === "USD" ? row.usd : row.inr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
