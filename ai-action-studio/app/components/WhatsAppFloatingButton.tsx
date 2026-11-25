"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { trackEvent } from "@/lib/analytics";
import { WHATSAPP_NUMBER } from "@/lib/site";

const emptySubscribe = () => () => {};

export default function WhatsAppFloatingButton() {
  const pathname = usePathname();
  const isEmbed = useSyncExternalStore(
    emptySubscribe,
    () =>
      pathname === "/ai-score" &&
      new URLSearchParams(window.location.search).get("embed") === "1",
    () => false,
  );

  const cleanedNumber = WHATSAPP_NUMBER.replace(/[^\d]/g, "");
  if (!cleanedNumber || isEmbed) {
    return null;
  }

  const text = encodeURIComponent(
    "Hi, I'd like to talk about automating a process in our business.",
  );
  const href = `https://wa.me/${cleanedNumber}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AI Action Studio on WhatsApp"
      onClick={() => trackEvent("whatsapp_floating_click", { pathname })}
      className="fixed bottom-16 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-mint px-4 py-3 text-[14px] font-semibold text-navy shadow-lg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint md:bottom-6 md:right-6"
    >
      <svg
        className="h-5 w-5 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.05c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.82-.11-.42-.14-.97-.32-1.66-.62-2.92-1.26-4.82-4.2-4.97-4.4-.15-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.01-2.42.27-.29.59-.36.79-.36.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.84 2.05.91 2.2.07.15.12.32.02.51-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.15.46.12.63-.07.17-.2.74-.86.94-1.16.2-.29.39-.24.66-.15.27.1 1.71.81 2 1.95.29.15.49.22.56.34.07.13.07.73-.17 1.41z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}
