"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type LeadCaptureFormProps = {
  taskName: string;
  hoursSavedPerYear: number;
  dollarsSavedPerYear: number;
};

type Status = "idle" | "loading" | "success" | "error";

export default function LeadCaptureForm({
  taskName,
  hoursSavedPerYear,
  dollarsSavedPerYear,
}: LeadCaptureFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      taskName,
      hoursSavedPerYear,
      dollarsSavedPerYear,
    };

    trackEvent("lead_form_submit", {
      source: "automation-roi-calculator",
      taskName,
      hoursSavedPerYear,
      dollarsSavedPerYear,
    });

    try {
      const res = await fetch("/api/roi-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage(json.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setMessage("Check your inbox — we're sending your automation ROI report.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="roi-name"
            className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[1px] text-slate"
          >
            Name
          </label>
          <input
            id="roi-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-md border border-sand bg-ivory px-3.5 py-2.5 text-[15px] text-navy outline-none transition placeholder:text-slate/50 focus:border-mint focus:ring-2 focus:ring-[rgba(0,245,160,0.25)]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="roi-email"
            className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[1px] text-slate"
          >
            Email
          </label>
          <input
            id="roi-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-md border border-sand bg-ivory px-3.5 py-2.5 text-[15px] text-navy outline-none transition placeholder:text-slate/50 focus:border-mint focus:ring-2 focus:ring-[rgba(0,245,160,0.25)]"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
      >
        {status === "loading" ? "Sending…" : "Email me this ROI report"}
      </button>
      {message && (
        <p
          className={`text-[14px] ${status === "success" ? "text-navy" : "text-[var(--error)]"}`}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
