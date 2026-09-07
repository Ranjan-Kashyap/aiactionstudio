import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "AI tool verdicts, income experiments, and honest workflow notes from AI Action Studio.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate">Blog</p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-bold text-navy">
          Verdicts &amp; notes
        </h1>
        <p className="mt-4 max-w-xl text-[17px] text-slate">
          Written companion pieces to our on-camera tests — what worked, what failed, and what
          we&apos;d do next.
        </p>

        {posts.length === 0 ? (
          <p className="py-20 text-center text-slate">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-xl border border-sand bg-white p-6 transition hover:border-mint"
              >
                {post.tags.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold uppercase tracking-wide text-slate"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="text-[20px] font-semibold text-navy">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-[13px] text-slate/60">{post.formattedDate}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
