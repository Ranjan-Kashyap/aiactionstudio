import Link from "next/link";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";

type BlogCategoryNavProps = {
  active?: string;
};

function chipClass(isActive: boolean) {
  return `rounded-lg border px-3 py-1.5 text-[13px] font-medium transition ${
    isActive
      ? "border-mint bg-white text-navy"
      : "border-sand bg-white text-slate hover:border-mint hover:text-navy"
  }`;
}

export default function BlogCategoryNav({ active }: BlogCategoryNavProps) {
  return (
    <nav aria-label="Blog categories" className="mt-8 flex flex-wrap gap-2">
      <Link href="/blog" className={chipClass(!active)}>
        All
      </Link>
      {BLOG_CATEGORIES.map((category) => (
        <Link
          key={category.slug}
          href={`/blog/${category.slug}`}
          className={chipClass(active === category.slug)}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
