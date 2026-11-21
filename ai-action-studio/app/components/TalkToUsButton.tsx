"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type TalkToUsButtonProps = {
  location: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function TalkToUsButton({
  location,
  className = "inline-flex items-center justify-center rounded-lg bg-mint px-6 py-3 text-[15px] font-semibold text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint",
  children = "Talk to us",
  onClick,
}: TalkToUsButtonProps) {
  return (
    <Link
      href="/contact"
      onClick={() => {
        trackEvent("cta_talk_to_us_click", { location });
        onClick?.();
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
