"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import TalkToUsButton from "./TalkToUsButton";

const emptySubscribe = () => () => {};

export default function StickyMobileCta() {
  const pathname = usePathname();
  const isEmbed = useSyncExternalStore(
    emptySubscribe,
    () =>
      pathname === "/ai-score" &&
      new URLSearchParams(window.location.search).get("embed") === "1",
    () => false,
  );

  if (isEmbed) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2.5 border-t border-[rgba(255,255,255,0.12)] bg-navy/95 px-4 py-2.5 backdrop-blur md:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <TalkToUsButton
        location="sticky-mobile-bar"
        className="flex-1 rounded-lg bg-mint px-4 py-2.5 text-center text-[14px] font-semibold text-navy transition hover:brightness-110"
      />
      <Link
        href="/ai-score"
        className="flex-1 rounded-lg border border-mint px-4 py-2.5 text-center text-[14px] font-semibold text-mint transition hover:bg-mint hover:text-navy"
      >
        AI Score
      </Link>
    </div>
  );
}
