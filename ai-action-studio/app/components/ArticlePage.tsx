import Link from "next/link";
import LeadForm from "./LeadForm";

type ArticlePageProps = {
  eyebrow: string;
  backHref: string;
  backLabel: string;
  heading: string;
  intro: string;
  lastUpdated?: string;
  lastChecked?: string;
  source: string;
  children: React.ReactNode;
};

export default function ArticlePage({
  eyebrow,
  backHref,
  backLabel,
  heading,
  intro,
  lastUpdated,
  lastChecked,
  source,
  children,
}: ArticlePageProps) {
  return (
    <article className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href={backHref}
          className="text-[14px] font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
        >
          ← {backLabel}
        </Link>
        <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-tight text-navy">
          {heading}
        </h1>
        {lastUpdated || lastChecked ? (
          <p className="mt-3 text-[13px] text-slate/70">
            {lastUpdated ? `Last updated ${lastUpdated}. ` : null}
            {lastChecked
              ? `Prices last checked ${lastChecked} against official vendor pages. Confirm on the vendor's site before you subscribe.`
              : null}
          </p>
        ) : null}
        <p className="mt-6 text-[17px] leading-relaxed text-slate">{intro}</p>
        <div className="prose-awb mt-10">{children}</div>
        <div className="mt-14 rounded-xl border border-sand bg-white p-6 md:p-8">
          <h2 className="text-[20px] font-semibold text-navy">Stay in the loop</h2>
          <p className="mt-2 mb-6 text-[14px] text-slate">
            Get practical AI ideas, useful tools, workflows and resources — without the noise.
          </p>
          <LeadForm
            source={source}
            submitLabel="Join the AI Action Studio List"
            successMessage="You're in. Watch your inbox for practical AI ideas."
          />
        </div>
      </div>
    </article>
  );
}
