import type { Metadata } from "next";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import Script from "next/script";
import { JsonLd, buildSiteWideGraphSchema } from "./components/Breadcrumbs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyMobileCta from "./components/StickyMobileCta";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import { siteDescription, SITE_URL } from "@/lib/site";
import "./globals.css";

const GTM_ID = "GTM-NM3KCZDD";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Automation Agency for Business | AI Action Studio",
    template: "%s | AI Action Studio",
  },
  description: siteDescription,
  openGraph: {
    title: "AI Automation Agency for Business | AI Action Studio",
    description: siteDescription,
    url: siteUrl,
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
    title: "AI Automation Agency for Business | AI Action Studio",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: siteUrl,
    languages: { "x-default": siteUrl },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${ibmPlexMono.variable} h-full antialiased`}>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <JsonLd data={buildSiteWideGraphSchema()} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <StickyMobileCta />
      </body>
    </html>
  );
}
