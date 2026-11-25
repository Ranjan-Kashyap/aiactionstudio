import Image from "next/image";
import Link from "next/link";
import { SITE_DESCRIPTOR } from "@/lib/site";

type LogoProps = {
  className?: string;
  variant?: "color" | "white" | "onDark";
  showDescriptor?: boolean;
};

export default function Logo({
  className = "",
  variant = "color",
  showDescriptor = false,
}: LogoProps) {
  const src =
    variant === "white"
      ? "/images/aias-logo-white.png"
      : variant === "onDark"
        ? "/images/aias-logo-on-dark.png"
        : "/images/aias-logo.png";
  const size =
    variant === "onDark" || variant === "white"
      ? { width: 2963, height: 512 }
      : { width: 2500, height: 400 };

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 flex-col items-start ${className}`}
      aria-label="AI Action Studio home"
    >
      <Image
        src={src}
        alt="AI Action Studio"
        width={size.width}
        height={size.height}
        className="h-7 w-auto object-contain sm:h-8"
        style={{ width: "auto" }}
        priority
      />
      {showDescriptor ? (
        <span
          className={`mt-0.5 text-[11px] font-medium tracking-[0.02em] ${
            variant === "onDark" || variant === "white"
              ? "text-[rgba(255,255,255,0.68)]"
              : "text-slate"
          }`}
        >
          {SITE_DESCRIPTOR}
        </span>
      ) : null}
    </Link>
  );
}
