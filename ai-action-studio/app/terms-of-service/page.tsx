import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, buildBreadcrumbSchema } from "../components/Breadcrumbs";

// TODO(legal): review Terms of Service wording with legal counsel.
export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for AI Action Studio (AIActionStudio.com).",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsPage() {
  return (
    <section className="py-16 md:py-20">
      <JsonLd
        data={buildBreadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Terms of Service", href: "/terms-of-service" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-[14px] font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
        >
          &larr; Home
        </Link>
        <h1 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-navy">
          Terms of Service
        </h1>
        <p className="mt-2 text-[13px] text-slate/70">Last updated: November 26, 2026</p>
        <div className="prose-awb mt-8">
          {process.env.NODE_ENV === "development" ? (
            <div className="mb-6 rounded-lg border border-[var(--warning)] bg-ivory p-4 text-[13px] text-navy">
              <strong>Dev note — TODO(legal):</strong> Have final Terms of Service wording reviewed
              by legal counsel.
            </div>
          ) : null}

          <p>
            By using AIActionStudio.com, you agree to these terms. If you do not agree, please do
            not use the site.
          </p>
          <h2>Services &amp; educational content</h2>
          <p>
            Content, calculators and self-serve assessments (such as the AI Readiness Scorecard) on
            this site are for informational purposes. Client agency engagements (blueprints, custom
            software, automations and care plans) are governed by a separate written statement of
            work and agreement.
          </p>
          <h2>Accounts &amp; communications</h2>
          <p>
            If you submit a form or join our email list, you agree to receive the requested report
            or follow-up communication. You may unsubscribe or request data deletion at any time.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Site content, branding, and materials are owned by AI Action Studio unless otherwise
            noted. Client systems built under a paid engagement are owned by the client as specified
            in their client agreement.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            We are not liable for losses arising from use of this site, third-party tools, or
            actions you take based on free informational content.
          </p>
          <h2>Contact</h2>
          <p>
            <Link href="/contact">Contact us</Link> (hello@aiactionstudio.com)
          </p>
        </div>
      </div>
    </section>
  );
}
