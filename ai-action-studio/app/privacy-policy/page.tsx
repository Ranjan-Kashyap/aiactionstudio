import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, buildBreadcrumbSchema } from "../components/Breadcrumbs";

// TODO(legal): have legal counsel review final DPDP Act (India) and UK/EU GDPR wording.
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for AI Action Studio (aiactionstudio.com), including how we handle AI Readiness Scorecard and contact form data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="November 26, 2026">
      {process.env.NODE_ENV === "development" ? (
        <div className="mb-6 rounded-lg border border-[var(--warning)] bg-ivory p-4 text-[13px] text-navy">
          <strong>Dev note — TODO(legal):</strong> Have final Privacy Policy wording reviewed for
          India&apos;s DPDP Act and UK/EU GDPR compliance.
        </div>
      ) : null}

      <p>
        AI Action Studio (&quot;we,&quot; &quot;us&quot;) operates AIActionStudio.com. This policy
        explains what personal information we collect, why we collect it, how long we keep it, and
        how you can exercise your data rights (including under India&apos;s Digital Personal Data
        Protection Act and UK/EU data protection laws).
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>AI Readiness Scorecard (/ai-score):</strong> When you submit the scorecard lead
          form to receive your report, we collect your first name, last name, work email address,
          phone / WhatsApp number, company name, team size, country, your answers to the 10
          scorecard questions, your calculated score and band, and session campaign parameters (such
          as UTM tags, referrer and timestamp). Your quiz answers remain in your browser until you
          submit the form.
        </li>
        <li>
          <strong>Contact &amp; Systems Audit form (/contact):</strong> When you request a systems
          audit, we collect your name, work email, phone / WhatsApp number, company name, country,
          team size, tools used, and the process or problem you describe.
        </li>
        <li>
          <strong>Newsletter &amp; free resources:</strong> When you download a checklist or join
          our email list, we collect your name, email address, and the page/source of the
          submission.
        </li>
        <li>
          <strong>Analytics:</strong> We collect basic, non-personally-identifiable usage events
          (such as pages visited, scorecard completion step, and approximate device/location) via
          analytics tools. We do not send your name, email or phone number to analytics platforms or
          put personal data in URLs.
        </li>
      </ul>

      <h2>Why we collect and use this information</h2>
      <ul>
        <li>
          To calculate, display and email your AI Readiness Scorecard report and tailored
          recommendations.
        </li>
        <li>
          To contact you by email or WhatsApp (where you have given consent) about your score or
          your systems audit request.
        </li>
        <li>
          To deliver requested checklists, templates and educational updates.
        </li>
        <li>To improve our website, tools and services.</li>
      </ul>

      <h2>How long we keep your data</h2>
      <p>
        We retain scorecard submissions and audit enquiries for up to <strong>24 months</strong>{" "}
        from our last interaction with you (unless we enter into a client engagement, in which case
        project records are kept for legal and accounting compliance), or until you ask us to delete
        your data.
      </p>

      <h2>Sharing and processors</h2>
      <p>
        We use trusted service providers (such as email delivery, CRM and workflow automation
        processors) strictly to store contacts and deliver your report or respond to your enquiry.
        We do not sell or rent your personal information to third parties.
      </p>

      <h2>Your rights and how to request deletion</h2>
      <p>
        You may withdraw your consent, request a copy of the personal data we hold about you, or ask
        us to correct or permanently delete your data at any time. To request deletion or exercise
        any data right, email <strong>hello@aiactionstudio.com</strong> with the subject line{" "}
        <em>&quot;Data Deletion Request&quot;</em> or message us via our{" "}
        <Link href="/contact">Contact page</Link>. We respond to all requests within 15 business
        days.
      </p>

      <h2>Cookies</h2>
      <p>
        We use cookies and session storage for basic analytics, campaign attribution (UTM tags), and
        site performance. You can control or clear cookies at any time through your browser
        settings.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or privacy requests: <Link href="/contact">Contact us</Link>{" "}
        (hello@aiactionstudio.com)
      </p>
    </LegalShell>
  );
}

function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 md:py-20">
      <JsonLd
        data={buildBreadcrumbSchema([
          { label: "Home", href: "/" },
          { label: title, href: "/privacy-policy" },
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
          {title}
        </h1>
        <p className="mt-2 text-[13px] text-slate/70">Last updated: {updated}</p>
        <div className="prose-awb mt-8">{children}</div>
      </div>
    </section>
  );
}
