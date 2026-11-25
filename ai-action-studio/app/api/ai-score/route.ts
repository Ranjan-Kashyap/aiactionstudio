import { NextResponse } from "next/server";
import {
  calculateScore,
  type CalculatedScoreResult,
} from "@/content/ai-score";
import { SITE_URL } from "@/lib/site";

const AI_SCORE_WEBHOOK_URL = process.env.AI_SCORE_WEBHOOK_URL ?? "";
const AI_SCORE_WEBHOOK_SECRET = process.env.AI_SCORE_WEBHOOK_SECRET ?? "";
const GHL_WEBHOOK_URL = process.env.GHL_LEAD_WEBHOOK_URL ?? "";
const NOTIFY_EMAIL = process.env.LEAD_NOTIFY_EMAIL ?? "ranjan@scalerise.io";
const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const RESEND_FROM =
  process.env.LEAD_NOTIFY_FROM ??
  "AI Action Studio <noreply@aiactionstudio.com>";
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";

const VALID_TEAM_SIZES = new Set(["1–9", "10–49", "50–199", "200+"]);
const VALID_COUNTRIES = new Set([
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "India",
  "Other",
  "US",
  "UK",
]);

// Simple in-memory IP rate limit: max 5 requests per minute
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const ipHits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const prev = ipHits.get(ip) ?? [];
  const recent = prev.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    ipHits.set(ip, recent);
    return true;
  }
  recent.push(now);
  ipHits.set(ip, recent);
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function computeHmacSha256(secret: string, body: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(body));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function buildLeadReportEmails(params: {
  firstName: string;
  score: CalculatedScoreResult;
  bookingUrl: string;
}): { subject: string; text: string; html: string } {
  const { firstName, score, bookingUrl } = params;
  const subject = `Your AI Readiness Score: ${score.overall}/100 (${score.band})`;
  const ctaHref = bookingUrl || `${SITE_URL}/contact`;

  const categoriesText = score.categories
    .map((c) => `- ${c.label}: ${c.percentage}% (${c.points}/${c.maxPoints})`)
    .join("\n");

  const recsText = score.recommendations
    .map(
      (r, idx) =>
        `${idx + 1}. [${r.categoryLabel}] ${r.text}\n   ${SITE_URL}${r.serviceHref}`,
    )
    .join("\n\n");

  const text = `Hi ${firstName},

Here is your AI Readiness Score from AI Action Studio:

Overall Score: ${score.overall}/100 — ${score.band}
${score.bandMeaning}

Category Breakdown:
${categoriesText}

Your Top 3 Recommendations:
${recsText}

Want to map one manual process together?
Book your free 30-minute systems audit: ${ctaHref}

Best,
Ranjan Kashyap
AI Action Studio
${SITE_URL}
`;

  const categoriesHtml = score.categories
    .map(
      (c) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #EDE8DC;color:#0A0F1D;font-size:14px;font-weight:600;">${escapeHtml(c.label)}</td>
        <td style="padding:10px 0;border-bottom:1px solid #EDE8DC;color:#1E293B;font-size:14px;text-align:right;font-weight:700;">${c.percentage}%</td>
      </tr>`,
    )
    .join("");

  const recsHtml = score.recommendations
    .map(
      (r) => `
      <li style="margin-bottom:14px;line-height:1.5;color:#1E293B;font-size:15px;">
        <strong style="color:#0A0F1D;">${escapeHtml(r.categoryLabel)}:</strong> ${escapeHtml(r.text)}
        <br />
        <a href="${SITE_URL}${r.serviceHref}" style="color:#0A0F1D;font-weight:600;text-decoration:underline;">See ${escapeHtml(r.serviceLabel)} &rarr;</a>
      </li>`,
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#FAF7F0;font-family:Arial,sans-serif;color:#0A0F1D;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:36px 16px;">
    <tr><td align="center">
      <table width="580" style="max-width:580px;background:#FFFFFF;border:1px solid #EDE8DC;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background:#0A0F1D;padding:24px 32px;">
            <p style="margin:0;color:#00F5A0;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;">AI Action Studio</p>
            <p style="margin:6px 0 0;color:#FFFFFF;font-size:20px;font-weight:700;">Your AI Readiness Score: ${score.overall}/100</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;">
            <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#1E293B;">Hi ${escapeHtml(firstName)},</p>
            <div style="background:#FAF7F0;border:1px solid #EDE8DC;border-radius:10px;padding:20px;margin-bottom:24px;">
              <p style="margin:0;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#1E293B;font-weight:700;">Overall Band</p>
              <p style="margin:6px 0 8px;font-size:24px;font-weight:700;color:#0A0F1D;">${score.overall}/100 &middot; ${escapeHtml(score.band)}</p>
              <p style="margin:0;font-size:15px;line-height:1.5;color:#1E293B;">${escapeHtml(score.bandMeaning)}</p>
            </div>

            <h2 style="margin:0 0 12px;font-size:16px;color:#0A0F1D;">Category scores</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              ${categoriesHtml}
            </table>

            <h2 style="margin:0 0 12px;font-size:16px;color:#0A0F1D;">Your top three recommendations</h2>
            <ol style="margin:0 0 28px;padding-left:20px;">
              ${recsHtml}
            </ol>

            <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="background:#00F5A0;border-radius:8px;padding:14px 24px;">
                  <a href="${escapeHtml(ctaHref)}" style="color:#0A0F1D;font-size:15px;font-weight:700;text-decoration:none;display:inline-block;">
                    Book your free 30-minute systems audit
                  </a>
                </td>
              </tr>
            </table>

            <p style="margin:0;font-size:14px;line-height:1.6;color:#1E293B;">
              Best,<br />
              <strong style="color:#0A0F1D;">Ranjan Kashyap</strong><br />
              AI Action Studio
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}

type AiScoreRequestBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  teamSize?: string;
  country?: string;
  consent?: boolean;
  honeypot?: string;
  answers?: number[];
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  referrer?: string;
  pageUrl?: string;
};

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp =
    request.headers.get("cf-connecting-ip") ??
    (forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown");

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a minute and try again." },
      { status: 429 },
    );
  }

  let body: AiScoreRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (body.honeypot && body.honeypot.trim() !== "") {
    return NextResponse.json(
      { error: "Invalid submission." },
      { status: 400 },
    );
  }

  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim().replace(/[\s()-]/g, "") ?? "";
  const company = body.company?.trim() ?? "";
  const teamSize = body.teamSize?.trim() ?? "";
  const country = body.country?.trim() ?? "";
  const consent = body.consent === true;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !company ||
    !teamSize ||
    !country
  ) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid work email address." },
      { status: 400 },
    );
  }

  if (!/^\+[1-9]\d{6,14}$/.test(phone)) {
    return NextResponse.json(
      {
        error:
          "Please enter a valid phone / WhatsApp number with country code (e.g. +14155552671 or +919876543210).",
      },
      { status: 400 },
    );
  }

  if (!VALID_TEAM_SIZES.has(teamSize)) {
    return NextResponse.json(
      { error: "Please select a valid team size." },
      { status: 400 },
    );
  }

  if (!VALID_COUNTRIES.has(country)) {
    return NextResponse.json(
      { error: "Please select a valid country." },
      { status: 400 },
    );
  }

  if (!consent) {
    return NextResponse.json(
      { error: "Please tick the consent box to receive your score report." },
      { status: 400 },
    );
  }

  let score: CalculatedScoreResult;
  try {
    score = calculateScore(body.answers ?? []);
  } catch (err) {
    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "Please answer all 10 scorecard questions.",
      },
      { status: 400 },
    );
  }

  const timestamp = new Date().toISOString();
  const userAgent = request.headers.get("user-agent") ?? "";

  const fullPayload = {
    source: "ai-score",
    formSource: "AI Action Studio — AI Readiness Scorecard",
    lead: {
      firstName,
      lastName,
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      company,
      teamSize,
      country,
      consent: true,
    },
    overall: score.overall,
    band: score.band,
    bandMeaning: score.bandMeaning,
    categories: score.categories,
    recommendations: score.recommendations,
    answers: score.answeredDetails,
    tracking: {
      utm_source: body.utm_source?.trim() ?? "",
      utm_medium: body.utm_medium?.trim() ?? "",
      utm_campaign: body.utm_campaign?.trim() ?? "",
      utm_content: body.utm_content?.trim() ?? "",
      utm_term: body.utm_term?.trim() ?? "",
      fbclid: body.fbclid?.trim() ?? "",
      gclid: body.gclid?.trim() ?? "",
      referrer: body.referrer?.trim() ?? "",
      pageUrl: body.pageUrl?.trim() ?? "",
      timestamp,
      userAgent,
    },
  };

  if (
    !AI_SCORE_WEBHOOK_URL &&
    !GHL_WEBHOOK_URL &&
    !RESEND_API_KEY
  ) {
    console.warn(
      "[ai-score] Warning: none of AI_SCORE_WEBHOOK_URL, GHL_LEAD_WEBHOOK_URL or RESEND_API_KEY are configured. Score calculated and logged only.",
    );
    console.log("[ai-score] Lead payload:", JSON.stringify(fullPayload));
  }

  // 1. Optional AI_SCORE_WEBHOOK_URL delivery with HMAC signature
  if (AI_SCORE_WEBHOOK_URL) {
    try {
      const jsonBody = JSON.stringify(fullPayload);
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (AI_SCORE_WEBHOOK_SECRET) {
        headers["X-AI-Score-Signature"] = await computeHmacSha256(
          AI_SCORE_WEBHOOK_SECRET,
          jsonBody,
        );
      }
      const whRes = await fetch(AI_SCORE_WEBHOOK_URL, {
        method: "POST",
        headers,
        body: jsonBody,
      });
      if (!whRes.ok) {
        console.error(
          "[ai-score] AI_SCORE_WEBHOOK_URL error:",
          whRes.status,
          await whRes.text().catch(() => ""),
        );
      }
    } catch (err) {
      console.error("[ai-score] AI_SCORE_WEBHOOK_URL request failed:", err);
    }
  }

  // 2. Existing GHL_LEAD_WEBHOOK_URL integration if set
  if (GHL_WEBHOOK_URL) {
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          name: `${firstName} ${lastName}`.trim(),
          email,
          phone,
          company,
          teamSize,
          country,
          aiScoreOverall: score.overall,
          aiScoreBand: score.band,
          source: "ai-score",
          formSource: "AI Action Studio — AI Readiness Scorecard",
          ...fullPayload.tracking,
        }),
      });
    } catch (err) {
      console.error("[ai-score] GHL webhook request failed:", err);
    }
  }

  // 3. Resend email delivery: (a) report to lead and (b) notification to LEAD_NOTIFY_EMAIL
  let emailSent = false;
  if (RESEND_API_KEY) {
    try {
      let prefilledBookingUrl = BOOKING_URL;
      if (BOOKING_URL) {
        try {
          const u = new URL(BOOKING_URL);
          u.searchParams.set("name", `${firstName} ${lastName}`.trim());
          u.searchParams.set("email", email);
          prefilledBookingUrl = u.toString();
        } catch {
          prefilledBookingUrl = BOOKING_URL;
        }
      }

      const reportEmail = buildLeadReportEmails({
        firstName,
        score,
        bookingUrl: prefilledBookingUrl,
      });

      const leadRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: RESEND_FROM,
          to: [email],
          subject: reportEmail.subject,
          text: reportEmail.text,
          html: reportEmail.html,
        }),
      });

      if (leadRes.ok) {
        emailSent = true;
      } else {
        console.error(
          "[ai-score] Resend lead report email error:",
          leadRes.status,
          await leadRes.text().catch(() => ""),
        );
      }

      // Send notification to LEAD_NOTIFY_EMAIL
      const notifyText = `New AI Readiness Scorecard Lead:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${company} (${teamSize}, ${country})
Overall Score: ${score.overall}/100 (${score.band})

Categories:
${score.categories.map((c) => `- ${c.label}: ${c.percentage}%`).join("\n")}

Answers:
${score.answeredDetails.map((a) => `Q${a.questionId}. ${a.question} -> ${a.optionLabel} (${a.points} pts)`).join("\n")}
`;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: RESEND_FROM,
          to: [NOTIFY_EMAIL],
          reply_to: email,
          subject: `New AI Score Lead (${score.overall}/100) — ${company}`,
          text: notifyText,
        }),
      });
    } catch (err) {
      console.error("[ai-score] Resend email error:", err);
    }
  }

  return NextResponse.json({
    ok: true,
    overall: score.overall,
    categories: score.categories,
    band: score.band,
    bandMeaning: score.bandMeaning,
    recommendations: score.recommendations,
    emailSent,
  });
}
