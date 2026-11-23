import Link from "next/link";
import { SITE_NAME, SITE_URL, YOUTUBE_URL } from "@/lib/site";
import { SERVICES, type ServiceItem } from "@/src/data/services";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${SITE_URL}/about#ranjan-kashyap`;

export const AREA_SERVED_COUNTRIES = [
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Country", name: "Canada" },
  { "@type": "Country", name: "Australia" },
  { "@type": "Country", name: "India" },
];

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href.startsWith("http") ? item.href : `${SITE_URL}${item.href}`,
    })),
  };
}

export function buildFaqSchema(
  faqs: { question: string; answer: string }[],
  id?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(id ? { "@id": id } : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// TODO(owner): add the company LinkedIn URL and the founder's LinkedIn URL to sameAs when available.
export function buildSiteWideGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/images/aias-logo.png`,
        image: `${SITE_URL}/opengraph-image`,
        description:
          "AI automation agency that builds and maintains AI agents, workflow automations, custom software and integrations for growing businesses.",
        email: "hello@aiactionstudio.com",
        founder: { "@id": FOUNDER_ID },
        areaServed: AREA_SERVED_COUNTRIES,
        knowsAbout: [
          "AI automation",
          "AI agents",
          "Business process automation",
          "Workflow automation",
          "Custom software development",
          "API integration",
          "Accounts payable automation",
          "HR automation",
          "WhatsApp automation",
          "Zapier",
          "Make",
          "n8n",
        ],
        sameAs: [
          YOUTUBE_URL,
          "https://www.instagram.com/ai.actionstudio",
          "https://www.facebook.com/aiactionstudio",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "hello@aiactionstudio.com",
          url: `${SITE_URL}/contact`,
          availableLanguage: ["English", "Hindi"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI automation services",
          itemListElement: SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@id": `${SITE_URL}${service.href}#service`,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
      },
    ],
  };
}

export function buildServiceSchema({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${fullUrl}#service`,
    name,
    serviceType,
    description,
    url: fullUrl,
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED_COUNTRIES,
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Growing businesses with 10 to 500 employees",
    },
  };
}

export function buildServicesItemListSchema(services: ServiceItem[] = SERVICES) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI automation services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.cardTitle,
      url: `${SITE_URL}${service.href}`,
    })),
  };
}

// TODO(owner): add the LinkedIn URL to sameAs.
export function buildAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: "About AI Action Studio | Founder-Led AI Automation Agency",
    about: { "@id": ORG_ID },
    mainEntity: {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Ranjan Kashyap",
      jobTitle: "Founder",
      worksFor: { "@id": ORG_ID },
      url: `${SITE_URL}/about`,
      image: `${SITE_URL}/images/ranjan-kashyap.png`,
      knowsAbout: [
        "Data engineering",
        "Marketing analytics",
        "Tracking",
        "Automation",
        "AI agents",
      ],
      sameAs: [YOUTUBE_URL],
    },
  };
}

export function buildContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: "Contact & Free Systems Audit | AI Action Studio",
    about: { "@id": ORG_ID },
  };
}

function toIsoDateString(dateStr: string): string {
  if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) {
    return dateStr;
  }
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) {
    return dateStr;
  }
  const year = parsed.getFullYear();
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function buildArticleSchema({
  type = "Article",
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: {
  type?: "Article" | "BlogPosting";
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
}) {
  const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
  const fullImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}/opengraph-image`;

  return {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    description,
    url: fullUrl,
    image: fullImage,
    author: { "@id": FOUNDER_ID },
    publisher: { "@id": ORG_ID },
    datePublished: toIsoDateString(datePublished),
    dateModified: toIsoDateString(dateModified),
    inLanguage: "en",
  };
}

export function Breadcrumbs({
  items,
  className = "mb-6",
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-slate/80">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {idx > 0 ? <span aria-hidden="true">›</span> : null}
                {isLast ? (
                  <span className="font-medium text-navy" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
