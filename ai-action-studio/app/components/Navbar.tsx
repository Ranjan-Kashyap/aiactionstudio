"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import Logo from "./Logo";
import TalkToUsButton from "./TalkToUsButton";

type NavLink = { href: string; label: string };
type ServicePhaseGroup = {
  phase: string;
  items: NavLink[];
};

const servicePhaseGroups: ServicePhaseGroup[] = [
  {
    phase: "Consult",
    items: [
      {
        href: "/services/ai-consulting",
        label: "AI Consulting & Readiness Audit",
      },
    ],
  },
  {
    phase: "Enable",
    items: [
      {
        href: "/services/ai-training",
        label: "AI Training & Claude for Business",
      },
    ],
  },
  {
    phase: "Build",
    items: [
      { href: "/services/workflow-automation", label: "Workflow Automation" },
      { href: "/services/ai-agents", label: "AI Agents & Chatbots" },
      {
        href: "/services/custom-software",
        label: "Custom Software & Internal Tools",
      },
      {
        href: "/services/finance-hr-automation",
        label: "Finance & HR Automation",
      },
      { href: "/services/integrations", label: "Integrations" },
      { href: "/services/whatsapp-automation", label: "WhatsApp Automation" },
    ],
  },
  {
    phase: "Run",
    items: [{ href: "/services/care-plans", label: "AI Care Plans" }],
  },
];

const resourceItems: NavLink[] = [
  { href: "/resources", label: "Free Resources" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/tools", label: "AI Tools" },
  { href: "/prompts", label: "Prompts" },
  { href: "/reviews", label: "Comparisons" },
  { href: "/workflows", label: "Workflows" },
  { href: "/build", label: "Build With AI" },
  { href: "/business", label: "AI for Small Business" },
  { href: "/blog", label: "Blog" },
];

const resourcePaths = [
  "/resources",
  "/tutorials",
  "/tools",
  "/prompts",
  "/reviews",
  "/workflows",
  "/build",
  "/business",
  "/blog",
  "/free-checklist",
];

function linkClass(active: boolean) {
  return `text-[14px] xl:text-[15px] font-medium tracking-[0.02em] transition-colors ${
    active ? "text-white hover:text-mint" : "text-[rgba(255,255,255,0.78)] hover:text-mint"
  }`;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ServicesMegaMenu({
  active,
  open,
  onToggle,
}: {
  active: boolean;
  open: boolean;
  onToggle: () => void;
}) {
  const menuId = useId();
  const buttonId = `${menuId}-button`;
  const [hover, setHover] = useState(false);
  const expanded = open || hover;

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center gap-0.5">
        <Link href="/services" className={linkClass(active)}>
          Services
        </Link>
        <button
          id={buttonId}
          type="button"
          className={`inline-flex h-8 w-7 items-center justify-center rounded-md ${
            active ? "text-white" : "text-[rgba(255,255,255,0.78)]"
          } hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint`}
          aria-label="Services menu"
          aria-haspopup="menu"
          aria-expanded={expanded}
          aria-controls={menuId}
          onClick={(event) => {
            event.preventDefault();
            onToggle();
          }}
        >
          <Chevron open={expanded} />
        </button>
      </div>
      {expanded ? (
        <div className="absolute left-0 top-full z-50 pt-2">
          <div
            id={menuId}
            role="menu"
            aria-labelledby={buttonId}
            className="w-[22rem] rounded-xl border border-[rgba(255,255,255,0.12)] bg-slate p-4 shadow-xl"
          >
            <div className="space-y-3">
              {servicePhaseGroups.map((group) => (
                <div key={group.phase}>
                  <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-mint">
                    {group.phase}
                  </p>
                  <ul className="mt-1 space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.href} role="none">
                        <Link
                          href={item.href}
                          role="menuitem"
                          className="block rounded-md px-2 py-1.5 text-[14px] font-medium text-[rgba(255,255,255,0.85)] transition-colors hover:bg-[rgba(255,255,255,0.08)] hover:text-mint"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-3 border-t border-[rgba(255,255,255,0.12)] pt-2.5">
              <Link
                href="/services"
                role="menuitem"
                className="block rounded-md px-2 py-1.5 text-[14px] font-semibold text-mint transition-colors hover:bg-[rgba(255,255,255,0.08)]"
              >
                All services &rarr;
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ResourcesDropdown({
  active,
  open,
  onToggle,
}: {
  active: boolean;
  open: boolean;
  onToggle: () => void;
}) {
  const menuId = useId();
  const buttonId = `${menuId}-button`;
  const [hover, setHover] = useState(false);
  const expanded = open || hover;

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center gap-0.5">
        <Link href="/resources" className={linkClass(active)}>
          Resources
        </Link>
        <button
          id={buttonId}
          type="button"
          className={`inline-flex h-8 w-7 items-center justify-center rounded-md ${
            active ? "text-white" : "text-[rgba(255,255,255,0.78)]"
          } hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint`}
          aria-label="Resources menu"
          aria-haspopup="menu"
          aria-expanded={expanded}
          aria-controls={menuId}
          onClick={(event) => {
            event.preventDefault();
            onToggle();
          }}
        >
          <Chevron open={expanded} />
        </button>
      </div>
      {expanded ? (
        <div className="absolute left-0 top-full z-50 pt-2">
          <ul
            id={menuId}
            role="menu"
            aria-labelledby={buttonId}
            className="min-w-[15rem] rounded-xl border border-[rgba(255,255,255,0.12)] bg-slate py-2 shadow-xl"
          >
            {resourceItems.map((child) => (
              <li key={child.href} role="none">
                <Link
                  href={child.href}
                  role="menuitem"
                  className="block px-4 py-2 text-[14px] font-medium text-[rgba(255,255,255,0.85)] transition-colors hover:bg-[rgba(255,255,255,0.08)] hover:text-mint"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

const emptySubscribe = () => () => {};

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>("services");
  const isEmbed = useSyncExternalStore(
    emptySubscribe,
    () =>
      pathname === "/ai-score" &&
      new URLSearchParams(window.location.search).get("embed") === "1",
    () => false,
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/resources") {
      return resourcePaths.some(
        (rp) => pathname === rp || pathname.startsWith(`${rp}/`),
      );
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    if (!desktopMenu) return;
    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDesktopMenu(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setDesktopMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [desktopMenu]);

  if (isEmbed) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-slate">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[76px] sm:px-6 lg:px-8">
        <Logo variant="onDark" showDescriptor />

        <nav
          ref={navRef}
          className="hidden items-center gap-5 whitespace-nowrap md:flex lg:gap-7"
          aria-label="Primary"
        >
          <ServicesMegaMenu
            active={isActive("/services")}
            open={desktopMenu === "services"}
            onToggle={() =>
              setDesktopMenu((curr) => (curr === "services" ? null : "services"))
            }
          />
          <Link href="/ai-score" className={linkClass(isActive("/ai-score"))}>
            AI Score
          </Link>
          <Link href="/work" className={linkClass(isActive("/work"))}>
            Our Work
          </Link>
          <ResourcesDropdown
            active={isActive("/resources")}
            open={desktopMenu === "resources"}
            onToggle={() =>
              setDesktopMenu((curr) => (curr === "resources" ? null : "resources"))
            }
          />
          <Link href="/about" className={linkClass(isActive("/about"))}>
            About
          </Link>
          <TalkToUsButton
            location="header-desktop"
            className="rounded-lg bg-mint px-4 py-2 text-[14px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <TalkToUsButton
            location="header-mobile-top"
            className="rounded-lg bg-mint px-3.5 py-2 text-[13px] font-semibold text-navy transition hover:brightness-110"
          />
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-50 flex flex-col justify-between overflow-y-auto border-t border-[rgba(255,255,255,0.08)] bg-navy px-4 py-5 sm:top-[76px] md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {/* Services accordion */}
            <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-slate/50 p-3">
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="text-[16px] font-semibold text-white hover:text-mint"
                >
                  Services
                </Link>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[rgba(255,255,255,0.78)] hover:text-mint"
                  aria-label="Toggle Services menu"
                  aria-expanded={mobileSection === "services"}
                  onClick={() =>
                    setMobileSection((c) => (c === "services" ? null : "services"))
                  }
                >
                  <Chevron open={mobileSection === "services"} />
                </button>
              </div>
              {mobileSection === "services" ? (
                <div className="mt-3 space-y-3 border-t border-[rgba(255,255,255,0.08)] pt-3">
                  {servicePhaseGroups.map((group) => (
                    <div key={group.phase}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-mint">
                        {group.phase}
                      </p>
                      <ul className="mt-1 space-y-1">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-md py-1.5 text-[14px] text-[rgba(255,255,255,0.85)] hover:text-mint"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="inline-block pt-1 text-[14px] font-semibold text-mint"
                  >
                    All services &rarr;
                  </Link>
                </div>
              ) : null}
            </div>

            <Link
              href="/ai-score"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl border border-[rgba(255,255,255,0.08)] px-4 py-3 text-[16px] font-semibold text-white hover:text-mint"
            >
              AI Score
            </Link>

            <Link
              href="/work"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl border border-[rgba(255,255,255,0.08)] px-4 py-3 text-[16px] font-semibold text-white hover:text-mint"
            >
              Our Work
            </Link>

            {/* Resources accordion */}
            <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-slate/50 p-3">
              <div className="flex items-center justify-between">
                <Link
                  href="/resources"
                  onClick={() => setMobileOpen(false)}
                  className="text-[16px] font-semibold text-white hover:text-mint"
                >
                  Resources
                </Link>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[rgba(255,255,255,0.78)] hover:text-mint"
                  aria-label="Toggle Resources menu"
                  aria-expanded={mobileSection === "resources"}
                  onClick={() =>
                    setMobileSection((c) => (c === "resources" ? null : "resources"))
                  }
                >
                  <Chevron open={mobileSection === "resources"} />
                </button>
              </div>
              {mobileSection === "resources" ? (
                <ul className="mt-3 space-y-1 border-t border-[rgba(255,255,255,0.08)] pt-2">
                  {resourceItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md py-1.5 text-[14px] text-[rgba(255,255,255,0.85)] hover:text-mint"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl border border-[rgba(255,255,255,0.08)] px-4 py-3 text-[16px] font-semibold text-white hover:text-mint"
            >
              About
            </Link>
          </nav>

          <div className="mt-6 flex flex-col gap-3 border-t border-[rgba(255,255,255,0.12)] pt-4">
            <TalkToUsButton
              location="header-mobile-menu"
              onClick={() => setMobileOpen(false)}
              className="w-full rounded-lg bg-mint px-4 py-3.5 text-center text-[15px] font-semibold text-navy transition hover:brightness-110"
            />
            <Link
              href="/ai-score"
              onClick={() => setMobileOpen(false)}
              className="w-full rounded-lg border border-mint px-4 py-3 text-center text-[15px] font-semibold text-mint transition hover:bg-mint hover:text-navy"
            >
              Get your AI score
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
