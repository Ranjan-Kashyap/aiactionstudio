import type { Metadata } from "next";
import Link from "next/link";
import HubPage from "../components/HubPage";

export const metadata: Metadata = {
  title: "AI Tools",
  description:
    "Explore useful AI tools, discover what they can actually do, compare options and find the right tool for the job.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <HubPage
      eyebrow="AI Tools"
      heading="Find AI tools worth using."
      copy="There are thousands of AI tools. You don't need all of them. Explore useful tools, discover what they can actually do, compare options and find the right tool for the job."
      supporting="AI Action Studio may review or test tools when it helps answer a real question — but the goal is not to test everything. The goal is to help you choose and use AI better."
      source="tools"
    >
      <div className="mt-10 grid gap-4">
        <Link
          href="/tools/automation-roi-calculator"
          className="rounded-xl border border-sand bg-white p-6 transition hover:border-mint"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
            Free tool
          </p>
          <h2 className="mt-2 text-[20px] font-semibold text-navy">Automation ROI Calculator</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate">
            See how many hours and dollars a repetitive task costs you every year — then decide if
            it&apos;s worth automating.
          </p>
        </Link>
        <Link
          href="/reviews"
          className="rounded-xl border border-sand bg-white p-6 transition hover:border-mint"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate">
            Comparisons
          </p>
          <h2 className="mt-2 text-[20px] font-semibold text-navy">
            Useful tools and recommendations
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate">
            Comparisons and recommendations for specific needs — when they help you choose and use
            AI better.
          </p>
        </Link>
      </div>
    </HubPage>
  );
}
