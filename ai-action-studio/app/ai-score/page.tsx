import type { Metadata } from "next";
import AiScoreQuiz from "./AiScoreQuiz";
import { SITE_URL } from "@/lib/site";

// TODO(SEO): validate draft primary keyword "ai readiness assessment"
const fullTitle = "Free AI Readiness Scorecard | AI Action Studio";
const description =
  "Take our free 3-minute AI readiness assessment: answer 10 questions to get your business AI score out of 100 and your top three automation recommendations.";

export const metadata: Metadata = {
  title: "Free AI Readiness Scorecard",
  description,
  alternates: { canonical: "/ai-score" },
  openGraph: {
    title: fullTitle,
    description,
    url: `${SITE_URL}/ai-score`,
    siteName: "AI Action Studio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/ai-score/opengraph-image",
        width: 1200,
        height: 630,
        alt: "How ready is your business for AI? Get your free score.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["/ai-score/opengraph-image"],
  },
};

export default function AiScorePage() {
  return (
    <section className="min-h-[calc(100vh-76px)] bg-ivory py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AiScoreQuiz />
      </div>
    </section>
  );
}
