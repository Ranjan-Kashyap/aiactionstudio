import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="AI Action Studio home"
    >
      <Image
        src="/images/aias-logo-white.png"
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
