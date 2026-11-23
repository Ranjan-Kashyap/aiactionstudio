import { ImageResponse } from "next/og";
import { SERVICES, getServiceBySlug } from "@/src/data/services";

export const alt = "AI Action Studio — AI automation services";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export default async function ServiceOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const headline = service?.h1 ?? "AI automation agency";

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
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            AI Action Studio
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
              fontSize: "54px",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#ffffff",
            }}
          >
            {headline}
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#00f5a0",
            }}
          >
            AI agents · Workflow automation · Custom software
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
          <span>aiactionstudio.com</span>
          <span>Free 30-minute systems audit</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
