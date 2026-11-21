import Link from "next/link";
import TalkToUsButton from "./TalkToUsButton";

type TalkToUsBannerProps = {
  heading?: string;
  location?: string;
  className?: string;
};

export default function TalkToUsBanner({
  heading = "Rather have it built for you?",
  location = "talk-to-us-banner",
  className = "mt-14",
}: TalkToUsBannerProps) {
  return (
    <div
      className={`rounded-xl border border-sand bg-cream p-6 md:p-8 ${className}`}
    >
      <h2 className="text-[22px] font-semibold leading-tight text-navy">
        {heading}
      </h2>
      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-slate">
        We design, build and maintain AI agents, automations and internal tools for growing businesses. Start with a free 30-minute systems audit.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <TalkToUsButton location={location} />
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-lg border border-navy px-6 py-3 text-[15px] font-medium text-navy transition hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
        >
          See our services
        </Link>
      </div>
    </div>
  );
}
