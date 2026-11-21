"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import type { ServiceItem } from "@/src/data/services";

type ServiceCardProps = {
  service: ServiceItem;
  showBullets?: boolean;
  headingLevel?: "h2" | "h3";
};

export default function ServiceCard({
  service,
  showBullets = false,
  headingLevel = "h3",
}: ServiceCardProps) {
  const HeadingTag = headingLevel;

  return (
    <Link
      href={service.href}
      onClick={() => trackEvent("service_card_click", { slug: service.slug })}
      className="group flex flex-col justify-between rounded-xl border border-sand bg-white p-6 md:p-7 transition hover:border-mint"
    >
      <div>
        <div className="mb-3 h-0.5 w-10 bg-mint" aria-hidden />
        <HeadingTag className="text-[20px] font-semibold text-navy group-hover:text-slate transition-colors">
          {service.cardTitle}
        </HeadingTag>
        <p className="mt-3 text-[15px] leading-relaxed text-slate">
          {service.shortDescription}
        </p>
        {showBullets && service.hubBullets.length > 0 ? (
          <ul className="mt-4 space-y-1.5 text-[14px] text-slate">
            {service.hubBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <span className="mt-5 inline-flex items-center text-[14px] font-semibold text-navy underline decoration-mint underline-offset-4 group-hover:decoration-navy">
        Learn more &rarr;
      </span>
    </Link>
  );
}
