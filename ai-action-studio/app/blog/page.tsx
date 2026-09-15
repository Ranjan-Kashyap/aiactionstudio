import type { Metadata } from "next";
import BlogCategoryNav from "../components/BlogCategoryNav";
import BlogPostCard from "../components/BlogPostCard";
import { getAllPostsMeta } from "@/lib/blog";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical AI tutorials, workflows, experiments, and notes from AI Action Studio.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">Blog</p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-bold text-navy">
          Notes from the studio
        </h1>
        <p className="mt-4 max-w-xl text-[17px] text-slate">
          Written companions to the tutorials, workflows and experiments — what worked, what
          didn&apos;t, and what to try next.
        </p>
        <BlogCategoryNav />

        {posts.length === 0 ? (
          <p className="py-20 text-center text-slate">No posts yet. Check back soon.</p>
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
