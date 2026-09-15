import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { getBlogCategory } from "@/lib/blog-categories";

export default function BlogPostCard({ post }: { post: PostMeta }) {
  const category = getBlogCategory(post.category);

  return (
    <article className="flex flex-col rounded-xl border border-sand bg-white p-6 transition hover:border-mint">
      {category ? (
        <Link
          href={`/blog/${category.slug}`}
          className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-slate hover:text-navy"
        >
          {category.name}
        </Link>
      ) : null}
      <h2 className="text-[20px] font-semibold text-navy">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate">{post.excerpt}</p>
      <p className="mt-4 text-[13px] text-slate/60">{post.formattedDate}</p>
    </article>
  );
}
