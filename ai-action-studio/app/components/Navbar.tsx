"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import Logo from "./Logo";

type NavLink = { href: string; label: string };
type NavChild = NavLink | { divider: true };
type NavItem = NavLink & { children?: NavChild[] };

const navItems: NavItem[] = [
  {
    href: "/tutorials",
    label: "Tutorials",
    children: [
      { href: "/tutorials/how-to-use-chatgpt", label: "How to Use ChatGPT" },
      { href: "/tutorials/what-is-generative-ai", label: "What Is Generative AI?" },
      { divider: true },
      { href: "/blog/tutorials", label: "See all Tutorials posts" },
    ],
  },
  {
    href: "/tools",
    label: "Tools",
    children: [
      { href: "/tools", label: "Best AI Tools in 2026" },
      { href: "/tools/best-ai-website-builders", label: "Best AI Website Builders" },
      { href: "/tools/automation-roi-calculator", label: "Automation ROI Calculator" },
      { divider: true },
      { href: "/blog/tools", label: "See all Tools posts" },
    ],
  },
  {
    href: "/prompts",
    label: "Prompts",
    children: [
      {
        href: "/prompts/chatgpt-prompts",
        label: "10 ChatGPT Prompts That Actually Save You Time",
      },
      { divider: true },
      { href: "/blog/prompts", label: "See all Prompts posts" },
    ],
  },
  {
    href: "/reviews",
    label: "Comparisons",
    children: [
      { href: "/reviews/chatgpt-vs-gemini", label: "ChatGPT vs Gemini" },
      { href: "/reviews/chatgpt-vs-claude", label: "ChatGPT vs Claude" },
      { divider: true },
      { href: "/blog/comparisons", label: "See all Comparisons posts" },
    ],
  },
  {
    href: "/workflows",
    label: "Workflows",
    children: [
      { href: "/workflows/ai-automation-no-code", label: "Build Your First AI Automation" },
      { divider: true },
      { href: "/blog/workflows", label: "See all Workflows posts" },
      { href: "/blog/automation", label: "See all Automation posts" },
    ],
  },
  {
    href: "/build",
    label: "Build",
    children: [
      { href: "/build/vibe-coding", label: "What Is Vibe Coding?" },
      { href: "/build/github-copilot-tutorial", label: "How to Use GitHub Copilot" },
      { divider: true },
      { href: "/blog/build", label: "See all Build posts" },
    ],
  },
  { href: "/business", label: "Business" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

function isNavLink(item: NavChild): item is NavLink {
  return "href" in item;
}

function linkClass(active: boolean, compact = false) {
  return `${compact ? "text-[13px]" : "text-[14px] xl:text-[15px]"} font-medium tracking-[0.02em] transition-colors ${
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

function DesktopDropdown({
  item,
  active,
  open,
  onToggle,
}: {
  item: NavItem;
  active: boolean;
  open: boolean;
  onToggle: () => void;
}) {
  const menuId = useId();
  const buttonId = `${menuId}-button`;
  const children = item.children ?? [];
  const [hover, setHover] = useState(false);
  const expanded = open || hover;

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center gap-0.5">
        <Link href={item.href} className={linkClass(active, true)}>
          {item.label}
        </Link>
        <button
          id={buttonId}
          type="button"
          className={`inline-flex h-8 w-7 items-center justify-center rounded-md ${
            active ? "text-white" : "text-[rgba(255,255,255,0.78)]"
          } hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint`}
          aria-label={`${item.label} menu`}
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
            className="min-w-[17.5rem] rounded-lg border border-[rgba(255,255,255,0.1)] bg-slate py-2 shadow-lg"
          >
          {children.map((child, index) =>
            isNavLink(child) ? (
              <li key={child.href} role="none">
                <Link
                  href={child.href}
                  role="menuitem"
                  className="block px-4 py-2 text-[14px] font-medium text-[rgba(255,255,255,0.82)] transition-colors hover:bg-[rgba(255,255,255,0.08)] hover:text-mint"
                >
                  {child.label}
                </Link>
              </li>
            ) : (
              <li
                key={`divider-${index}`}
                role="separator"
                className="my-1 h-px bg-[rgba(255,255,255,0.12)]"
              />
            ),
          )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopMenu(null);
    setMobileSection(null);
  }, [pathname]);

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

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-slate">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <Logo variant="onDark" />

        <nav
          ref={navRef}
          className="hidden items-center gap-2 whitespace-nowrap min-[1400px]:flex min-[1400px]:gap-3"
          aria-label="Primary"
        >
          {navItems.map((item) =>
            item.children ? (
              <DesktopDropdown
                key={item.href}
                item={item}
                active={isActive(item.href)}
                open={desktopMenu === item.href}
                onToggle={() =>
                  setDesktopMenu((current) => (current === item.href ? null : item.href))
                }
              />
            ) : (
              <Link key={item.href} href={item.href} className={linkClass(isActive(item.href), true)}>
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/#newsletter"
            className="rounded-lg bg-mint px-4 py-2 text-[13px] font-medium text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          >
            Join the List
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white min-[1400px]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[rgba(255,255,255,0.08)] bg-slate px-4 py-4 min-[1400px]:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <div key={item.href}>
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex-1 rounded-md px-3 py-3 text-[15px] font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-[rgba(255,255,255,0.08)] text-white hover:text-mint"
                        : "text-[rgba(255,255,255,0.78)] hover:text-mint"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <button
                      type="button"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[rgba(255,255,255,0.78)] hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint"
                      aria-label={`${mobileSection === item.href ? "Collapse" : "Expand"} ${item.label} links`}
                      aria-expanded={mobileSection === item.href}
                      onClick={() =>
                        setMobileSection((current) => (current === item.href ? null : item.href))
                      }
                    >
                      <Chevron open={mobileSection === item.href} />
                    </button>
                  ) : null}
                </div>
                {item.children && mobileSection === item.href ? (
                  <ul className="mb-2 ml-3 border-l border-[rgba(255,255,255,0.12)] pl-3">
                    {item.children.map((child, index) =>
                      isNavLink(child) ? (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-3 py-2 text-[14px] text-[rgba(255,255,255,0.78)] hover:text-mint"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ) : (
                        <li
                          key={`divider-${item.href}-${index}`}
                          className="my-1 h-px bg-[rgba(255,255,255,0.12)]"
                          aria-hidden="true"
                        />
                      ),
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
            <Link
              href="/#newsletter"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-mint px-4 py-3 text-center text-[15px] font-medium text-navy"
            >
              Join the List
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
