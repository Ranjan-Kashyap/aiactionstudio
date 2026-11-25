"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import Logo from "./Logo";
import LeadForm from "./LeadForm";
import {
  ONE_LINE_POSITIONING,
  SCALELENS_URL,
  SITE_TAGLINE,
  SOCIAL_LINKS,
} from "@/lib/site";

const serviceLinks = [
  { href: "/services/ai-consulting", label: "AI Consulting & Readiness Audit" },
  { href: "/services/ai-training", label: "AI Training & Claude for Business" },
  { href: "/services/workflow-automation", label: "Workflow Automation" },
  { href: "/services/ai-agents", label: "AI Agents & Chatbots" },
  { href: "/services/custom-software", label: "Custom Software & Internal Tools" },
  { href: "/services/finance-hr-automation", label: "Finance & HR Automation" },
  { href: "/services/integrations", label: "Integrations" },
  { href: "/services/whatsapp-automation", label: "WhatsApp Automation" },
  { href: "/services/care-plans", label: "AI Care Plans" },
  { href: "/services", label: "All services" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Our Work" },
  { href: "/ai-score", label: "AI Readiness Scorecard" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
];

const resourceLinks = [
  { href: "/resources", label: "Free Resources" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/tools", label: "AI Tools" },
  { href: "/prompts", label: "Prompts" },
  { href: "/reviews", label: "Comparisons" },
  { href: "/workflows", label: "Workflows" },
  { href: "/build", label: "Build With AI" },
  { href: "/business", label: "AI for Small Business" },
  { href: "/blog", label: "Blog" },
  { href: "/free-checklist", label: "Free Checklist" },
];

const emptySubscribe = () => () => {};

export default function Footer() {
  const pathname = usePathname();
  const isEmbed = useSyncExternalStore(
    emptySubscribe,
    () =>
      pathname === "/ai-score" &&
      new URLSearchParams(window.location.search).get("embed") === "1",
    () => false,
  );

  if (isEmbed) return null;

  return (
    <footer className="mt-auto border-t border-[rgba(255,255,255,0.08)] bg-navy pb-20 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="onDark" showDescriptor />
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-[rgba(255,255,255,0.68)]">
              {ONE_LINE_POSITIONING}
            </p>
            <p className="mt-2 text-[13px] font-medium text-mint">
              {SITE_TAGLINE}
            </p>
            {SCALELENS_URL ? (
              <p className="mt-4 text-[14px] leading-relaxed text-[rgba(255,255,255,0.68)]">
                Sister company:{" "}
                <a
                  href={SCALELENS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white underline decoration-mint underline-offset-4 transition hover:text-mint"
                >
                  ScaleLens
                </a>{" "}
                (dashboards &amp; BI).
              </p>
            ) : null}

            {SOCIAL_LINKS.length > 0 ? (
              <div className="mt-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
                  Connect
                </p>
                <div className="mt-3 flex items-center gap-3">
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg transition hover:bg-[rgba(255,255,255,0.08)]"
                    >
                      <Image
                        src={item.src}
                        alt=""
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
                Services
              </p>
              <ul className="mt-4 space-y-2.5 text-[14px] text-[rgba(255,255,255,0.68)]">
                {serviceLinks.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link href={link.href} className="transition hover:text-mint">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
                Company
              </p>
              <ul className="mt-4 space-y-2.5 text-[14px] text-[rgba(255,255,255,0.68)]">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-mint">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
                Resources
              </p>
              <ul className="mt-4 space-y-2.5 text-[14px] text-[rgba(255,255,255,0.68)]">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-mint">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-sand bg-white p-5">
              <p className="text-[15px] font-semibold text-navy">
                Get practical AI notes by email
              </p>
              <p className="mt-1 mb-4 text-[13px] text-slate">
                Tutorials, tool notes and workflow ideas from the studio.
              </p>
              <LeadForm
                source="footer-newsletter"
                submitLabel="Join the List"
                successMessage="You're in. Watch your inbox for practical AI ideas."
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[rgba(255,255,255,0.08)] pt-6 text-[13px] text-[rgba(255,255,255,0.45)]">
          <p>© {new Date().getFullYear()} AI Action Studio. All rights reserved.</p>
          <p className="mt-2 max-w-3xl leading-relaxed">
            Some links may be affiliate links. If you buy through them, we may earn a commission at
            no extra cost to you. Results vary — putting AI to work still takes skill, effort, and
            judgment.
          </p>
        </div>
      </div>
    </footer>
  );
}
