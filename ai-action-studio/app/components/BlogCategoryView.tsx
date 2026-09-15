import Link from "next/link";
import BlogCategoryNav from "./BlogCategoryNav";
import BlogPostCard from "./BlogPostCard";
import type { PostMeta } from "@/lib/blog";
import type { BlogCategory } from "@/lib/blog-categories";

type BlogCategoryViewProps = {
  category: BlogCategory;
  posts: PostMeta[];
};

export default function BlogCategoryView({ category, posts }: BlogCategoryViewProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-[14px] font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
        >
          ← Blog
        </Link>
        <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">
          Blog
        </p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-bold text-navy">{category.name}</h1>
        <p className="mt-4 max-w-xl text-[17px] text-slate">{category.description}</p>
        <BlogCategoryNav active={category.slug} />

        {posts.length === 0 ? (
          <p className="mt-12 text-[16px] text-slate">
            No posts in this category yet. See{" "}
            <Link
              href="/blog"
              className="font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
            >
              all notes from the studio
            </Link>
            .
          </p>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
