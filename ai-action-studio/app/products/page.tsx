import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";
import LeadForm from "../components/LeadForm";
import { SITE_URL } from "@/lib/site";

const fullTitle = "Products | AI Action Studio";
const description =
  "We're focusing on building AI systems for businesses right now. Free resources are still available, and courses and templates may return later.";

export const metadata: Metadata = {
  title: "Products",
  description,
  alternates: { canonical: "/products" },
  openGraph: {
    title: fullTitle,
    description,
    url: `${SITE_URL}/products`,
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

export default function ProductsPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
          ]}
        />
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
          Products
        </p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-navy">
          Products are on pause
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-slate">
          We&apos;re focusing on building AI systems for businesses right now. Free resources are
          still available, and courses and templates may return later.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          >
            See our services
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center justify-center rounded-lg border border-navy px-6 py-3 text-[15px] font-medium text-navy transition hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          >
            Free resources
          </Link>
        </div>

        <div className="mt-12 rounded-xl border border-sand bg-white p-6 md:p-8">
          <h2 className="text-[20px] font-semibold text-navy">Join the list to hear first</h2>
          <p className="mt-2 mb-6 text-[14px] text-slate">
            Get practical AI ideas, useful tools, workflows and resources — without the noise.
          </p>
          <LeadForm
            source="products"
            submitLabel="Join the AI Action Studio List"
            successMessage="You're in. Watch your inbox for practical AI ideas."
          />
        </div>
      </div>
    </section>
  );
}
