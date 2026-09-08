import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  variant?: "color" | "white" | "onDark";
};

export default function Logo({ className = "", variant = "color" }: LogoProps) {
  const src =
    variant === "white"
      ? "/images/aias-logo-white.png"
      : variant === "onDark"
        ? "/images/aias-logo-on-dark.png"
        : "/images/aias-logo.png";
  const size = variant === "onDark" ? { width: 3000, height: 512 } : { width: 2500, height: 400 };

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="AI Action Studio home"
    >
      <Image
        src={src}
        alt="AI Action Studio"
        width={size.width}
        height={size.height}
        className="h-8 w-auto object-contain sm:h-9"
        style={{ width: "auto" }}
        priority
      />
    </Link>
  );
}
