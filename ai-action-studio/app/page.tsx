import type { Metadata } from "next";
import { JsonLd, buildFaqSchema } from "./components/Breadcrumbs";
import HomeAfterShip from "./components/home/HomeAfterShip";
import ShipStory from "./components/home/ShipStory";
import { homeFaqs } from "./components/home/home-copy";
import { SITE_URL } from "@/lib/site";

const homeTitle = "AI Automation Agency for Business | AI Action Studio";
const homeDescription =
  "AI automation agency that builds and maintains AI agents, workflow automations, custom software and integrations for growing businesses. Start with a free audit.";

export const metadata: Metadata = {
  title: {
    absolute: homeTitle,
  },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: SITE_URL,
    siteName: "AI Action Studio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI Action Studio — AI automation agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/opengraph-image"],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(homeFaqs, `${SITE_URL}/#faq`)} />
      <ShipStory />
      <HomeAfterShip />
    </>
  );
}
