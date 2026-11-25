import { NextResponse } from "next/server";

const GHL_WEBHOOK_URL = process.env.GHL_LEAD_WEBHOOK_URL ?? "";
const AI_SCORE_WEBHOOK_URL = process.env.AI_SCORE_WEBHOOK_URL ?? "";
const NOTIFY_EMAIL = process.env.LEAD_NOTIFY_EMAIL ?? "ranjan@scalerise.io";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM =
  process.env.LEAD_NOTIFY_FROM ??
  "AI Action Studio <noreply@aiactionstudio.com>";

// Simple IP rate limit: max 5 requests per minute
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

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  source?: string;
  company?: string;
  country?: string;
  teamSize?: string;
  tools?: string;
  automateGoal?: string;
  hearAbout?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  landing_page?: string;
  referrer?: string;
  honeypot?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderEmailField(label: string, value: string): string {
  if (!value) return "";
  return `
            <p style="margin:0 0 6px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#00F5A0;">${escapeHtml(label)}</p>
            <p style="margin:0 0 16px;font-size:15px;white-space:pre-wrap;">${escapeHtml(value)}</p>`;
}

async function sendNotificationEmail(fields: {
  name: string;
  email: string;
  phone?: string;
  source: string;
  isContact: boolean;
  company?: string;
  country?: string;
  teamSize?: string;
  tools?: string;
  automateGoal?: string;
  hearAbout?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  landing_page?: string;
  referrer?: string;
}) {
  if (!RESEND_API_KEY) {
    console.warn(
      "RESEND_API_KEY is not set — skipping lead notification email.",
    );
    return { sent: false as const, reason: "missing_api_key" };
  }

  const headerSubtitle = fields.isContact
    ? "New audit request"
    : "New checklist lead";

  const extraFieldsHtml = fields.isContact
    ? [
        renderEmailField("Phone / WhatsApp", fields.phone ?? ""),
        renderEmailField("Company", fields.company ?? ""),
        renderEmailField("Country", fields.country ?? ""),
        renderEmailField("Team size", fields.teamSize ?? ""),
        renderEmailField("Tools you use", fields.tools ?? ""),
        renderEmailField(
          "What would you like to automate?",
          fields.automateGoal ?? "",
        ),
        renderEmailField("How did you hear about us?", fields.hearAbout ?? ""),
        renderEmailField("UTM Source", fields.utm_source ?? ""),
        renderEmailField("UTM Medium", fields.utm_medium ?? ""),
        renderEmailField("UTM Campaign", fields.utm_campaign ?? ""),
        renderEmailField("UTM Content", fields.utm_content ?? ""),
        renderEmailField("UTM Term", fields.utm_term ?? ""),
        renderEmailField("fbclid", fields.fbclid ?? ""),
        renderEmailField("gclid", fields.gclid ?? ""),
        renderEmailField("Landing page", fields.landing_page ?? ""),
        renderEmailField("Referrer", fields.referrer ?? ""),
      ].join("")
    : "";

  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#0A0F1D;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr><td align="center">
      <table width="560" style="max-width:560px;background:#1E293B;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background:#00F5A0;padding:24px 32px;text-align:center;">
            <p style="margin:0;color:#0A0F1D;font-size:18px;font-weight:700;">AI Action Studio</p>
            <p style="margin:8px 0 0;color:#0A0F1D;font-size:13px;">${escapeHtml(headerSubtitle)}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;color:#fff;">
            ${renderEmailField("Name", fields.name)}
            ${renderEmailField("Email", fields.email)}
            ${extraFieldsHtml}
            ${renderEmailField("Source", fields.source)}
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const subject = fields.isContact
    ? `New audit request — ${fields.company || fields.name}`
    : `New AI Action Studio lead — ${fields.name}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [NOTIFY_EMAIL],
      reply_to: fields.email,
      subject,
      html: htmlBody,
    }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    console.error("Resend lead email error:", res.status, JSON.stringify(data));
    return { sent: false as const, reason: "resend_error" };
  }

  return { sent: true as const };
}

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

  let body: LeadPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (body.honeypot && body.honeypot.trim() !== "") {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim() ?? "";
  const source = body.source?.trim() || "website";
  const isContact = source === "contact";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 400 },
    );
  }

  const company = body.company?.trim() ?? "";
  const country = body.country?.trim() ?? "";
  const teamSize = body.teamSize?.trim() ?? "";
  const tools = body.tools?.trim() ?? "";
  const automateGoal = body.automateGoal?.trim() ?? "";
  const hearAbout = body.hearAbout?.trim() ?? "";
  const utm_source = body.utm_source?.trim() ?? "";
  const utm_medium = body.utm_medium?.trim() ?? "";
  const utm_campaign = body.utm_campaign?.trim() ?? "";
  const utm_content = body.utm_content?.trim() ?? "";
  const utm_term = body.utm_term?.trim() ?? "";
  const fbclid = body.fbclid?.trim() ?? "";
  const gclid = body.gclid?.trim() ?? "";
  const landing_page = body.landing_page?.trim() ?? "";
  const referrer = body.referrer?.trim() ?? "";

  if (isContact) {
    if (!company || !country || !teamSize || !automateGoal || !phone) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }
  }

  const nameParts = name.split(/\s+/);
  const payload = isContact
    ? {
        name,
        firstName: nameParts[0] ?? name,
        lastName: nameParts.slice(1).join(" "),
        email,
        phone,
        company,
        country,
        teamSize,
        tools,
        automateGoal,
        hearAbout,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term,
        fbclid,
        gclid,
        landing_page,
        referrer,
        timestamp: new Date().toISOString(),
        source: "contact",
        formSource: "AI Action Studio — Contact / Free Systems Audit",
      }
    : {
        name,
        firstName: nameParts[0] ?? name,
        lastName: nameParts.slice(1).join(" "),
        email,
        source,
        formSource: "AI Action Studio — AI Tool Stack Checklist",
      };

  const webhookTarget = GHL_WEBHOOK_URL || AI_SCORE_WEBHOOK_URL;
  if (webhookTarget) {
    const ghlResponse = await fetch(webhookTarget, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!ghlResponse.ok) {
      const errorText = await ghlResponse.text();
      console.error("Webhook error:", ghlResponse.status, errorText);
      return NextResponse.json(
        { error: "Failed to submit form. Please try again." },
        { status: 502 },
      );
    }
  } else {
    console.log(
      "Lead captured (no webhook configured):",
      JSON.stringify(payload),
    );
  }

  try {
    await sendNotificationEmail({
      name,
      email,
      phone,
      source,
      isContact,
      company,
      country,
      teamSize,
      tools,
      automateGoal,
      hearAbout,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      fbclid,
      gclid,
      landing_page,
      referrer,
    });
  } catch (err) {
    console.error("Lead notification email failed:", err);
  }

  return NextResponse.json({ success: true });
}
