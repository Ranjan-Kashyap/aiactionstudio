import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  variant?: "color" | "white";
};

export default function Logo({ className = "", variant = "color" }: LogoProps) {
  const src = variant === "white" ? "/images/aias-logo-white.png" : "/images/aias-logo.png";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="AI Action Studio home"
    >
      <Image
        src={src}
        alt="AI Action Studio"
        width={2500}
        height={400}
        className="h-8 w-auto object-contain sm:h-9"
        style={{ width: "auto" }}
        priority
      />
    </Link>
  );
}
