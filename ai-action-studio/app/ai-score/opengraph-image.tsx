import { ImageResponse } from "next/og";

export const alt = "How ready is your business for AI? Get your free score.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function AiScoreOpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0f1d",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "4px",
              backgroundColor: "#00f5a0",
            }}
          />
          <span
            style={{
              fontSize: "26px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            AI Action Studio &middot; AI Readiness Scorecard
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.12,
              color: "#ffffff",
            }}
          >
            How ready is your business for AI? Get your free score.
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#00f5a0",
            }}
          >
            10 questions &middot; 3 minutes &middot; Instant score &amp; action plan
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.14)",
            paddingTop: "24px",
            fontSize: "22px",
            color: "rgba(255, 255, 255, 0.72)",
          }}
        >
          <span>aiactionstudio.com/ai-score</span>
          <span>AI systems, built and maintained.</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
