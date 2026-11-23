import Link from "next/link";
import { CONTENT_LAST_UPDATED } from "@/lib/site";
import {
  JsonLd,
  buildArticleSchema,
  buildBreadcrumbSchema,
} from "./Breadcrumbs";
import LeadForm from "./LeadForm";
import TalkToUsBanner from "./TalkToUsBanner";

const SOURCE_TO_PATH: Record<string, string> = {
  business: "/business",
  tools: "/tools",
  "tools-website-builders": "/tools/best-ai-website-builders",
  "tutorial-chatgpt": "/tutorials/how-to-use-chatgpt",
  "tutorial-generative-ai": "/tutorials/what-is-generative-ai",
  "workflow-no-code": "/workflows/ai-automation-no-code",
  "prompts-chatgpt": "/prompts/chatgpt-prompts",
  "review-chatgpt-claude": "/reviews/chatgpt-vs-claude",
  "review-chatgpt-gemini": "/reviews/chatgpt-vs-gemini",
  "build-vibe-coding": "/build/vibe-coding",
  "build-copilot": "/build/github-copilot-tutorial",
};

type ArticlePageProps = {
  eyebrow: string;
  backHref: string;
  backLabel: string;
  heading: string;
  intro: string;
  lastUpdated?: string;
  lastChecked?: string;
  datePublished?: string;
  dateModified?: string;
  canonicalPath?: string;
  source: string;
  bannerHeading?: string;
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
  datePublished = CONTENT_LAST_UPDATED,
  dateModified,
  canonicalPath,
  source,
  bannerHeading,
  children,
}: ArticlePageProps) {
  const pagePath = canonicalPath ?? SOURCE_TO_PATH[source] ?? `/${source}`;
  const effectiveDateModified = dateModified ?? lastUpdated ?? CONTENT_LAST_UPDATED;

  const breadcrumbItems =
    backHref === "/"
      ? [
          { label: "Home", href: "/" },
          { label: heading, href: pagePath },
        ]
      : [
          { label: "Home", href: "/" },
          { label: backLabel, href: backHref },
          { label: heading, href: pagePath },
        ];

  return (
    <article className="bg-ivory py-16 md:py-24">
      <JsonLd data={buildBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={buildArticleSchema({
          type: "Article",
          headline: heading,
          description: intro,
          url: pagePath,
          datePublished,
          dateModified: effectiveDateModified,
        })}
      />
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
        <p className="mt-3 text-[13px] text-slate/70">
          Updated {effectiveDateModified} · By{" "}
          <Link
            href="/about"
            className="font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
          >
            Ranjan Kashyap
          </Link>
          {lastChecked
            ? ` · Prices last checked ${lastChecked} against official vendor pages. Confirm on the vendor's site before you subscribe.`
            : null}
        </p>
        <p className="mt-6 text-[17px] leading-relaxed text-slate">{intro}</p>
        <div className="prose-awb mt-10">{children}</div>
        <TalkToUsBanner
          heading={bannerHeading}
          location={`banner-${source}`}
          className="mt-14"
        />
        <div className="mt-12 rounded-xl border border-sand bg-white p-6 md:p-8">
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
