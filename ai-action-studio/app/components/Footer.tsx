import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import LeadForm from "./LeadForm";
import { SERVICES } from "@/src/data/services";
import { YOUTUBE_URL } from "@/lib/site";

const socials = [
  {
    href: "https://www.facebook.com/aiactionstudio",
    label: "AI Action Studio on Facebook",
    src: "/images/social/facebook.svg",
  },
  {
    href: "https://www.instagram.com/ai.actionstudio",
    label: "AI Action Studio on Instagram",
    src: "/images/social/instagram.svg",
  },
  {
    href: YOUTUBE_URL,
    label: "AI Action Studio on YouTube",
    src: "/images/social/youtube.svg",
  },
];

const serviceLinks = [
  ...SERVICES.map((service) => ({
    href: service.href,
    label: service.navLabel,
  })),
  { href: "/services", label: "All services" },
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

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[rgba(255,255,255,0.08)] bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="onDark" />
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-[rgba(255,255,255,0.68)]">
              AI Action Studio is an AI automation agency that builds AI agents, workflow automations, custom software and integrations for growing businesses.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-[rgba(255,255,255,0.68)]">
              Need dashboards and reporting? See our sister company{" "}
              <a
                href="https://scalelens.app"
                className="font-medium text-white underline decoration-mint underline-offset-4 transition hover:text-mint"
              >
                ScaleLens
              </a>
              .
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg transition hover:bg-[rgba(255,255,255,0.08)]"
                >
                  <Image src={item.src} alt="" width={24} height={24} className="h-6 w-6" />
                </a>
              ))}
            </div>
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
