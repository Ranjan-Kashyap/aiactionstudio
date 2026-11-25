"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  AI_SCORE_QUESTIONS,
  type CategoryScoreSummary,
  type ScoreRecommendation,
} from "@/content/ai-score";
import { trackEvent } from "@/lib/analytics";
import { BOOKING_URL, SITE_URL } from "@/lib/site";

type Step = "intro" | "questions" | "lead-form" | "results";

type CountryCodeOption = {
  code: string;
  label: string;
  localeHints: string[];
};

const COUNTRY_CODES: CountryCodeOption[] = [
  { code: "+1", label: "US / CA (+1)", localeHints: ["US", "CA"] },
  { code: "+44", label: "UK (+44)", localeHints: ["GB", "UK"] },
  { code: "+61", label: "AU (+61)", localeHints: ["AU"] },
  { code: "+91", label: "IN (+91)", localeHints: ["IN"] },
  { code: "+65", label: "SG (+65)", localeHints: ["SG"] },
  { code: "+971", label: "UAE (+971)", localeHints: ["AE"] },
];

const TEAM_SIZES = ["1–9", "10–49", "50–199", "200+"];

const COUNTRIES = [
  { value: "US", label: "United States" },
  { value: "UK", label: "United Kingdom" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "India", label: "India" },
  { value: "Other", label: "Other" },
];

type ServerScoreResponse = {
  ok: boolean;
  overall: number;
  band: string;
  bandMeaning: string;
  categories: CategoryScoreSummary[];
  recommendations: ScoreRecommendation[];
  emailSent?: boolean;
};

const labelClass =
  "mb-1.5 block text-[12px] font-semibold uppercase tracking-[1px] text-slate";
const inputClass =
  "w-full rounded-md border border-sand bg-ivory px-3.5 py-2.5 text-[15px] text-navy outline-none transition placeholder:text-slate/50 focus:border-mint focus:ring-2 focus:ring-[rgba(0,245,160,0.25)]";

export default function AiScoreQuiz() {
  const [step, setStep] = useState<Step>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  // Lead form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneLocal, setPhoneLocal] = useState("");
  const [company, setCompany] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [country, setCountry] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState<ServerScoreResponse | null>(null);
  const [copied, setCopied] = useState(false);

  const trackingRef = useRef({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    fbclid: "",
    gclid: "",
    referrer: "",
    pageUrl: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const readOrStore = (key: string) => {
      const val = params.get(key);
      const storageKey = `aias_${key}`;
      if (val) {
        try {
          window.sessionStorage.setItem(storageKey, val);
        } catch {
          // ignore
        }
        return val;
      }
      try {
        return window.sessionStorage.getItem(storageKey) || "";
      } catch {
        return "";
      }
    };

    trackingRef.current = {
      utm_source: readOrStore("utm_source"),
      utm_medium: readOrStore("utm_medium"),
      utm_campaign: readOrStore("utm_campaign"),
      utm_content: readOrStore("utm_content"),
      utm_term: readOrStore("utm_term"),
      fbclid: readOrStore("fbclid"),
      gclid: readOrStore("gclid"),
      referrer: document.referrer || "",
      pageUrl: window.location.origin + window.location.pathname,
    };
  }, []);

  function startQuiz() {
    // Default dial code and country from browser locale on start
    try {
      const lang = typeof navigator !== "undefined" ? navigator.language || "" : "";
      const region = lang.split("-")[1]?.toUpperCase() || "";
      const matched = COUNTRY_CODES.find((c) =>
        c.localeHints.includes(region),
      );
      if (matched) {
        setCountryCode(matched.code);
      }
      if (!country) {
        if (region === "IN") setCountry("India");
        else if (region === "US") setCountry("US");
        else if (region === "GB") setCountry("UK");
        else if (region === "CA") setCountry("Canada");
        else if (region === "AU") setCountry("Australia");
      }
    } catch {
      // ignore
    }

    trackEvent("ai_score_start");
    setStep("questions");
    setCurrentIndex(0);
  }

  function selectOption(questionId: number, optionIndex: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    trackEvent("ai_score_question_answered", {
      question_number: currentIndex + 1,
    });

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = prefersReducedMotion ? 0 : 250;
    window.setTimeout(() => {
      if (currentIndex < AI_SCORE_QUESTIONS.length - 1) {
        setCurrentIndex((idx) => idx + 1);
      } else {
        setStep("lead-form");
      }
    }, delay);
  }

  function handleBack() {
    if (step === "lead-form") {
      setStep("questions");
      setCurrentIndex(AI_SCORE_QUESTIONS.length - 1);
      return;
    }
    if (currentIndex > 0) {
      setCurrentIndex((idx) => idx - 1);
    } else {
      setStep("intro");
    }
  }

  function handleNext() {
    const q = AI_SCORE_QUESTIONS[currentIndex];
    if (answers[q.id] === undefined) return;
    if (currentIndex < AI_SCORE_QUESTIONS.length - 1) {
      setCurrentIndex((idx) => idx + 1);
    } else {
      setStep("lead-form");
    }
  }

  function buildE164Phone(): string {
    const rawLocal = phoneLocal.trim().replace(/[^\d+]/g, "");
    if (rawLocal.startsWith("+")) {
      return rawLocal;
    }
    const digitsOnly = rawLocal.replace(/^0+/, "");
    const prefix = countryCode.trim().startsWith("+")
      ? countryCode.trim()
      : `+${countryCode.trim().replace(/[^\d]/g, "")}`;
    return `${prefix}${digitsOnly}`;
  }

  async function onSubmitLead(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    const fullPhone = buildE164Phone();
    if (!/^\+[1-9]\d{6,14}$/.test(fullPhone)) {
      setErrorMessage(
        "Please enter a valid phone / WhatsApp number in international E.164 format (e.g. +1 415 555 2671 or +91 98765 43210).",
      );
      return;
    }

    if (!consent) {
      setErrorMessage("Please tick the consent box to view and receive your score.");
      return;
    }

    const orderedAnswers = AI_SCORE_QUESTIONS.map((q) => answers[q.id]);
    if (orderedAnswers.some((a) => a === undefined)) {
      setErrorMessage("Please answer all 10 questions before submitting.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/ai-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone: fullPhone,
          company,
          teamSize,
          country,
          consent,
          honeypot,
          answers: orderedAnswers,
          ...trackingRef.current,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setErrorMessage(
          data.error || "Something went wrong while calculating your score. Please try again.",
        );
        setSubmitting(false);
        return;
      }

      setResult(data as ServerScoreResponse);
      setStep("results");
      setSubmitting(false);

      // Fire analytics (no PII)
      trackEvent("ai_score_lead_submitted", {
        score_band: data.band,
        overall_score: data.overall,
      });
      if (
        typeof window !== "undefined" &&
        typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq ===
          "function"
      ) {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq(
          "track",
          "Lead",
        );
      }
    } catch {
      setErrorMessage(
        "Network error. Your answers are saved — please tap retry.",
      );
      setSubmitting(false);
    }
  }

  function handleRetake() {
    setAnswers({});
    setResult(null);
    setErrorMessage("");
    setCurrentIndex(0);
    setStep("intro");
  }

  async function handleShare() {
    const shareUrl = `${SITE_URL}/ai-score`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  }

  function getBookingHref(): string {
    if (!BOOKING_URL) return "/contact";
    try {
      const url = new URL(BOOKING_URL);
      const fullName = `${firstName} ${lastName}`.trim();
      if (fullName) url.searchParams.set("name", fullName);
      if (email) url.searchParams.set("email", email);
      return url.toString();
    } catch {
      return BOOKING_URL;
    }
  }

  const currentQuestion = AI_SCORE_QUESTIONS[currentIndex];
  const progressPercent = Math.round(
    ((currentIndex + 1) / AI_SCORE_QUESTIONS.length) * 100,
  );

  // 1. INTRO SCREEN
  if (step === "intro") {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-sand bg-white p-6 shadow-[0_8px_24px_rgba(10,15,29,0.05)] sm:p-10">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
          10 questions &middot; about 3 minutes &middot; free
        </p>
        <h1 className="mt-3 text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-tight text-navy">
          How ready is your business for AI? Get your score in 3 minutes
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-slate">
          Find out where manual work, disconnected tools or undocumented processes are holding your
          team back — and get a practical, prioritised action plan.
        </p>

        <div className="mt-8 rounded-xl border border-sand bg-ivory p-6">
          <h2 className="text-[16px] font-semibold text-navy">
            What you&apos;ll learn:
          </h2>
          <ul className="mt-4 space-y-3 text-[15px] text-slate">
            <li className="flex items-start gap-3">
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-mint"
                aria-hidden
              />
              <span>
                Your overall <strong>AI Readiness Score out of 100</strong> and readiness band
                (Manual-first to AI-ready).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-mint"
                aria-hidden
              />
              <span>
                Your score breakdown across four pillars: <strong>Systems &amp; data</strong>,{" "}
                <strong>Processes</strong>, <strong>People &amp; AI use</strong>, and{" "}
                <strong>Risk &amp; security</strong>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-mint"
                aria-hidden
              />
              <span>
                Your <strong>top three tailored recommendations</strong> on what to automate or
                standardise first.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={startQuiz}
            className="inline-flex items-center justify-center rounded-lg bg-mint px-8 py-3.5 text-[16px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          >
            Start
          </button>
          <span className="text-[13px] text-slate">
            No credit card &middot; Instant score &amp; email report
          </span>
        </div>
      </div>
    );
  }

  // 2. QUESTIONS SCREEN
  if (step === "questions" && currentQuestion) {
    const selectedOptionIndex = answers[currentQuestion.id];

    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-sand bg-white p-6 shadow-[0_8px_24px_rgba(10,15,29,0.05)] sm:p-10">
        <div className="flex items-center justify-between text-[13px] font-semibold text-slate">
          <span>
            Question {currentIndex + 1} of {AI_SCORE_QUESTIONS.length}
          </span>
          <span className="uppercase tracking-[0.12em] text-navy">
            {currentQuestion.categoryLabel}
          </span>
        </div>

        <div
          className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-cream"
          role="progressbar"
          aria-label={`Question ${currentIndex + 1} of ${AI_SCORE_QUESTIONS.length}`}
          aria-valuenow={currentIndex + 1}
          aria-valuemin={1}
          aria-valuemax={AI_SCORE_QUESTIONS.length}
        >
          <div
            className="h-full bg-mint transition-all duration-200"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <fieldset className="mt-8">
          <legend className="text-[clamp(1.35rem,2.8vw,1.85rem)] font-bold leading-snug text-navy">
            {currentQuestion.question}
          </legend>

          <div
            className="mt-6 space-y-3"
            role="radiogroup"
            aria-label={currentQuestion.question}
          >
            {currentQuestion.options.map((opt, idx) => {
              const isSelected = selectedOptionIndex === idx;
              return (
                <button
                  key={opt.label}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => selectOption(currentQuestion.id, idx)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                      e.preventDefault();
                      const nextIdx = (idx + 1) % currentQuestion.options.length;
                      selectOption(currentQuestion.id, nextIdx);
                    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                      e.preventDefault();
                      const prevIdx =
                        (idx - 1 + currentQuestion.options.length) %
                        currentQuestion.options.length;
                      selectOption(currentQuestion.id, prevIdx);
                    }
                  }}
                  className={`flex w-full items-center justify-between rounded-xl border p-4 text-left text-[16px] font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint sm:p-5 ${
                    isSelected
                      ? "border-navy bg-navy text-white"
                      : "border-sand bg-ivory text-navy hover:border-mint hover:bg-white"
                  }`}
                >
                  <span className="pr-4">{opt.label}</span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                      isSelected
                        ? "border-mint bg-mint text-navy"
                        : "border-slate/40 bg-white"
                    }`}
                    aria-hidden="true"
                  >
                    {isSelected ? (
                      <span className="h-2.5 w-2.5 rounded-full bg-navy" />
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-8 flex items-center justify-between border-t border-sand pt-5">
          <button
            type="button"
            onClick={handleBack}
            className="rounded-lg border border-sand px-4 py-2 text-[14px] font-semibold text-slate transition hover:border-navy hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint"
          >
            &larr; Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={selectedOptionIndex === undefined}
            className="rounded-lg bg-navy px-5 py-2 text-[14px] font-semibold text-white transition hover:bg-slate disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint"
          >
            {currentIndex === AI_SCORE_QUESTIONS.length - 1
              ? "Continue to score"
              : "Next"}{" "}
            &rarr;
          </button>
        </div>
      </div>
    );
  }

  // 3. LEAD FORM SCREEN
  if (step === "lead-form") {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-sand bg-white p-6 shadow-[0_8px_24px_rgba(10,15,29,0.05)] sm:p-10">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            All 10 questions completed
          </p>
          <button
            type="button"
            onClick={handleBack}
            className="text-[13px] font-semibold text-slate underline hover:text-navy"
          >
            &larr; Review answers
          </button>
        </div>

        <h2 className="mt-2 text-[clamp(1.6rem,3vw,2.25rem)] font-bold leading-tight text-navy">
          Your score is ready. Where should we send your full report?
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate">
          Enter your details below to unlock your score on screen immediately and receive a copy of
          your report and recommendations by email.
        </p>

        <form onSubmit={onSubmitLead} className="mt-8 space-y-5">
          {/* Hidden honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="ai_score_hp">Company Website</label>
            <input
              id="ai_score_hp"
              name="ai_score_hp"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="score-first-name" className={labelClass}>
                First name *
              </label>
              <input
                id="score-first-name"
                type="text"
                required
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={inputClass}
                placeholder="First name"
              />
            </div>

            <div>
              <label htmlFor="score-last-name" className={labelClass}>
                Last name *
              </label>
              <input
                id="score-last-name"
                type="text"
                required
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={inputClass}
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="score-email" className={labelClass}>
                Work email *
              </label>
              <input
                id="score-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="score-phone" className={labelClass}>
                Phone / WhatsApp *
              </label>
              <div className="flex gap-2">
                <input
                  id="score-country-code"
                  type="text"
                  aria-label="Country dial code"
                  list="country-dial-codes"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-24 shrink-0 rounded-md border border-sand bg-ivory px-2.5 py-2.5 text-[15px] text-navy outline-none focus:border-mint"
                  placeholder="+1"
                />
                <datalist id="country-dial-codes">
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </datalist>
                <input
                  id="score-phone"
                  type="tel"
                  required
                  autoComplete="tel-national"
                  value={phoneLocal}
                  onChange={(e) => setPhoneLocal(e.target.value)}
                  className={inputClass}
                  placeholder="9876543210"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label htmlFor="score-company" className={labelClass}>
                Company name *
              </label>
              <input
                id="score-company"
                type="text"
                required
                autoComplete="organization"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={inputClass}
                placeholder="Your company"
              />
            </div>

            <div>
              <label htmlFor="score-team-size" className={labelClass}>
                Team size *
              </label>
              <select
                id="score-team-size"
                required
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                className={inputClass}
              >
                <option value="" disabled>
                  Select size
                </option>
                {TEAM_SIZES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="score-country" className={labelClass}>
                Country *
              </label>
              <select
                id="score-country"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={inputClass}
              >
                <option value="" disabled>
                  Select country
                </option>
                {COUNTRIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="rounded-lg border border-sand bg-ivory p-4">
            <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-slate">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded border-sand accent-navy"
              />
              <span>
                I agree that AI Action Studio may contact me about my score by email or WhatsApp.
                See our{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="font-semibold text-navy underline decoration-mint underline-offset-4"
                >
                  Privacy Policy
                </Link>
                . *
              </span>
            </label>
          </div>

          {errorMessage ? (
            <div
              className="rounded-lg border border-[var(--error)] bg-white p-4 text-[14px] text-[var(--error)]"
              role="alert"
            >
              <p>{errorMessage}</p>
            </div>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-mint px-6 py-3.5 text-[16px] font-semibold text-navy transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          >
            {submitting ? "Calculating your score…" : "Show my AI Readiness Score"}
          </button>
        </form>
      </div>
    );
  }

  // 4. RESULTS SCREEN
  if (step === "results" && result) {
    const bookingHref = getBookingHref();
    const isExternalBooking = bookingHref.startsWith("http");

    // SVG gauge ring params
    const radius = 56;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset =
      circumference - (Math.min(100, Math.max(0, result.overall)) / 100) * circumference;

    return (
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Main score card */}
        <div className="rounded-2xl border border-sand bg-white p-6 shadow-[0_8px_24px_rgba(10,15,29,0.05)] sm:p-10">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="flex flex-col items-center justify-center md:col-span-4">
              <div className="relative flex h-36 w-36 items-center justify-center">
                <svg className="h-36 w-36 -rotate-90" viewBox="0 0 132 132">
                  <circle
                    cx="66"
                    cy="66"
                    r={radius}
                    fill="none"
                    stroke="#EDE8DC"
                    strokeWidth="12"
                  />
                  <circle
                    cx="66"
                    cy="66"
                    r={radius}
                    fill="none"
                    stroke="#00F5A0"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-[36px] font-bold leading-none text-navy">
                    {result.overall}
                  </span>
                  <span className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-slate">
                    out of 100
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
                Your AI Readiness Band
              </p>
              <h2 className="mt-1 text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-navy">
                {result.band}
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-slate">
                {result.bandMeaning}
              </p>
              {result.emailSent ? (
                <p className="mt-4 rounded-lg border border-sand bg-ivory px-4 py-2.5 text-[14px] font-medium text-navy">
                  We&apos;ve also emailed your full report to <strong>{email}</strong>.
                </p>
              ) : null}
            </div>
          </div>

          {/* 4 Category bars */}
          <div className="mt-10 border-t border-sand pt-8">
            <h3 className="text-[18px] font-semibold text-navy">
              Category breakdown
            </h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {result.categories.map((cat) => (
                <div
                  key={cat.key}
                  className="rounded-xl border border-sand bg-ivory p-4"
                >
                  <div className="flex items-center justify-between text-[14px] font-semibold text-navy">
                    <span>{cat.label}</span>
                    <span>{cat.percentage}%</span>
                  </div>
                  <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-white">
                    <div
                      className="h-full bg-mint"
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top 3 Recommendations */}
        <div className="rounded-2xl border border-sand bg-white p-6 shadow-[0_8px_24px_rgba(10,15,29,0.05)] sm:p-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
            Where to start
          </p>
          <h3 className="mt-2 text-[22px] font-bold text-navy">
            Your top three recommendations
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {result.recommendations.map((rec, idx) => (
              <div
                key={`${rec.category}-${idx}`}
                className="flex flex-col justify-between rounded-xl border border-sand bg-ivory p-5"
              >
                <div>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-navy text-[12px] font-bold text-mint">
                    0{idx + 1}
                  </span>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate">
                    {rec.categoryLabel}
                  </p>
                  <p className="mt-2 text-[15px] font-medium leading-relaxed text-navy">
                    {rec.text}
                  </p>
                </div>
                <Link
                  href={rec.serviceHref}
                  className="mt-5 inline-flex items-center text-[13px] font-semibold text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
                >
                  {rec.serviceLabel} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA & Secondary actions */}
        <div className="rounded-2xl border border-sand bg-navy p-6 text-center sm:p-10">
          <h3 className="text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">
            Turn your score into a clear system blueprint
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-[16px] leading-relaxed text-[rgba(255,255,255,0.78)]">
            Pick one manual process from your results and we&apos;ll map it together in 30 minutes.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            {isExternalBooking ? (
              <a
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("ai_score_book_audit_click")}
                className="inline-flex items-center justify-center rounded-lg bg-mint px-7 py-3.5 text-[15px] font-semibold text-navy transition hover:brightness-110"
              >
                Book your free 30-minute systems audit
              </a>
            ) : (
              <Link
                href={bookingHref}
                onClick={() => trackEvent("ai_score_book_audit_click")}
                className="inline-flex items-center justify-center rounded-lg bg-mint px-7 py-3.5 text-[15px] font-semibold text-navy transition hover:brightness-110"
              >
                Book your free 30-minute systems audit
              </Link>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[14px] text-[rgba(255,255,255,0.78)]">
            <button
              type="button"
              onClick={handleShare}
              className="font-medium underline decoration-mint underline-offset-4 hover:text-white"
            >
              {copied ? "Link copied to clipboard!" : "Share your score"}
            </button>
            <button
              type="button"
              onClick={handleRetake}
              className="font-medium underline decoration-mint underline-offset-4 hover:text-white"
            >
              Retake scorecard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
