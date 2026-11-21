import type { Metadata } from "next";
import { Breadcrumbs } from "../components/Breadcrumbs";
import ContactForm from "./ContactForm";
import { SITE_URL } from "@/lib/site";

const fullTitle = "Contact & Free Systems Audit | AI Action Studio";
const description =
  "Book a free 30-minute systems audit. Tell us about your business and the manual work you want gone, and we'll show you what to automate first.";

export const metadata: Metadata = {
  title: "Contact & Free Systems Audit",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: fullTitle,
    description,
    url: `${SITE_URL}/contact`,
    siteName: "AI Action Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
  },
};

const nextSteps = [
  "We review your note.",
  "30-minute call to map one process.",
  "You get a clear recommendation, whether or not you work with us.",
];

export default function ContactPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
          Contact
        </p>
        <h1 className="mt-3 max-w-3xl text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-navy">
          Talk to us
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-slate">
          Tell us a little about your business. We&apos;ll reply within one business day and book a
          free 30-minute systems audit.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-xl border border-sand bg-white p-6 md:p-8">
              <h2 className="text-[20px] font-semibold text-navy">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-mint text-[13px] font-bold text-navy">
                      {index + 1}
                    </span>
                    <span className="mt-0.5 text-[15px] leading-relaxed text-slate">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 border-t border-sand pt-6">
                <p className="text-[12px] font-semibold uppercase tracking-[1px] text-slate">
                  Email
                </p>
                <p className="mt-1.5 text-[15px] font-medium text-navy">
                  hello@aiactionstudio.com
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
