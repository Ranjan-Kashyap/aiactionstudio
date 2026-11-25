"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { BOOKING_URL } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "India",
  "Other",
];

const TEAM_SIZES = ["1–9", "10–49", "50–199", "200+"];

const HEAR_OPTIONS = ["Google", "YouTube", "LinkedIn", "Referral", "Other"];

const labelClass =
  "mb-1.5 block text-[12px] font-semibold uppercase tracking-[1px] text-slate";
const inputClass =
  "w-full rounded-md border border-sand bg-ivory px-3.5 py-2.5 text-[15px] text-navy outline-none transition placeholder:text-slate/50 focus:border-mint focus:ring-2 focus:ring-[rgba(0,245,160,0.25)]";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const trackingRef = useRef({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    fbclid: "",
    gclid: "",
    landing_page: "",
    referrer: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);

    const readOrStore = (key: string, valueFromUrl: string | null) => {
      const storageKey = `aias_${key}`;
      if (valueFromUrl) {
        try {
          window.sessionStorage.setItem(storageKey, valueFromUrl);
        } catch {
          // ignore storage restriction
        }
        return valueFromUrl;
      }
      try {
        return window.sessionStorage.getItem(storageKey) || "";
      } catch {
        return "";
      }
    };

    const utm_source = readOrStore("utm_source", params.get("utm_source"));
    const utm_medium = readOrStore("utm_medium", params.get("utm_medium"));
    const utm_campaign = readOrStore("utm_campaign", params.get("utm_campaign"));
    const utm_content = readOrStore("utm_content", params.get("utm_content"));
    const utm_term = readOrStore("utm_term", params.get("utm_term"));
    const fbclid = readOrStore("fbclid", params.get("fbclid"));
    const gclid = readOrStore("gclid", params.get("gclid"));

    let landing_page = "";
    try {
      landing_page =
        window.sessionStorage.getItem("aias_landing_page") ||
        window.location.origin + window.location.pathname;
      if (!window.sessionStorage.getItem("aias_landing_page")) {
        window.sessionStorage.setItem("aias_landing_page", landing_page);
      }
    } catch {
      landing_page = window.location.origin + window.location.pathname;
    }

    let referrer = "";
    try {
      referrer =
        window.sessionStorage.getItem("aias_referrer") ||
        document.referrer ||
        "";
      if (!window.sessionStorage.getItem("aias_referrer") && referrer) {
        window.sessionStorage.setItem("aias_referrer", referrer);
      }
    } catch {
      referrer = document.referrer || "";
    }

    trackingRef.current = {
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      fbclid,
      gclid,
      landing_page,
      referrer,
    };
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const t = trackingRef.current;

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      company: String(data.get("company") || "").trim(),
      country: String(data.get("country") || "").trim(),
      teamSize: String(data.get("teamSize") || "").trim(),
      tools: String(data.get("tools") || "").trim(),
      automateGoal: String(data.get("automateGoal") || "").trim(),
      hearAbout: String(data.get("hearAbout") || "").trim(),
      utm_source: t.utm_source,
      utm_medium: t.utm_medium,
      utm_campaign: t.utm_campaign,
      utm_content: t.utm_content,
      utm_term: t.utm_term,
      fbclid: t.fbclid,
      gclid: t.gclid,
      landing_page: t.landing_page,
      referrer: t.referrer,
      honeypot: String(data.get("website_url_hp") || "").trim(),
      source: "contact",
    };

    try {
      const res = await fetch("/api/lead-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          json.error || "Something went wrong. Please try again.",
        );
        return;
      }
      setStatus("success");
      trackEvent("contact_form_submit", {
        country: payload.country,
        teamSize: payload.teamSize,
      });
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-xl border border-sand bg-white p-6 md:p-8"
        role="status"
      >
        <div className="mb-4 h-0.5 w-12 bg-mint" aria-hidden />
        <h2 className="text-[22px] font-semibold text-navy">
          Thanks. We&apos;ll be in touch within one business day.
        </h2>
        {BOOKING_URL ? (
          <p className="mt-4 text-[16px] leading-relaxed text-slate">
            Prefer to pick a time now?{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
            >
              Book your free 30-minute audit
            </a>
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-xl border border-sand bg-white p-6 shadow-[0_8px_24px_rgba(10,15,29,0.05)] md:p-8"
    >
      {BOOKING_URL ? (
        <div className="rounded-lg border border-sand bg-ivory p-4 text-[14px] text-slate">
          Prefer to book directly on the calendar?{" "}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
          >
            Pick a 30-minute slot now &rarr;
          </a>
        </div>
      ) : null}

      {/* Hidden honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url_hp">Website</label>
        <input
          id="website_url_hp"
          name="website_url_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Work email *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone / WhatsApp *
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="+1 415 555 2671 or +91 98765 43210"
          />
        </div>

        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Business / Company name *
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={inputClass}
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-country" className={labelClass}>
            Country *
          </label>
          <select
            id="contact-country"
            name="country"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select country
            </option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-team-size" className={labelClass}>
            Team size *
          </label>
          <select
            id="contact-team-size"
            name="teamSize"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select team size
            </option>
            {TEAM_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-tools" className={labelClass}>
          Tools you use
        </label>
        <input
          id="contact-tools"
          name="tools"
          type="text"
          className={inputClass}
          placeholder="e.g. Excel, Tally, WhatsApp, HubSpot, QuickBooks"
        />
      </div>

      <div>
        <label htmlFor="contact-automate" className={labelClass}>
          What problem or manual process would you like to fix? *
        </label>
        <textarea
          id="contact-automate"
          name="automateGoal"
          required
          rows={4}
          className={inputClass}
          placeholder="Tell us about the manual work or process slowing your team down."
        />
      </div>

      <div>
        <label htmlFor="contact-hear" className={labelClass}>
          How did you hear about us?
        </label>
        <select
          id="contact-hear"
          name="hearAbout"
          defaultValue=""
          className={inputClass}
        >
          <option value="">Select an option (optional)</option>
          {HEAR_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
      >
        {status === "loading" ? "Sending…" : "Request my free audit"}
      </button>

      <p className="text-center text-[13px] text-slate">
        Or take the 3-minute{" "}
        <Link
          href="/ai-score"
          className="font-semibold text-navy underline decoration-mint underline-offset-4"
        >
          AI Readiness Scorecard
        </Link>{" "}
        first.
      </p>

      {errorMessage ? (
        <p className="text-[14px] text-[var(--error)]" role="status">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
