import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCategoryView from "../../components/BlogCategoryView";
import {
  JsonLd,
  buildArticleSchema,
  buildBreadcrumbSchema,
} from "../../components/Breadcrumbs";
import TalkToUsBanner from "../../components/TalkToUsBanner";
import { getAllSlugs, getPostBySlug, getPostsByCategory } from "@/lib/blog";
import { BLOG_CATEGORIES, getBlogCategory } from "@/lib/blog-categories";

export const dynamic = "force-static";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [
    ...BLOG_CATEGORIES.map((category) => ({ slug: category.slug })),
    ...getAllSlugs().map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getBlogCategory(slug);
  if (category) {
    return {
      title: { absolute: `${category.name} | AI Action Studio Blog` },
      description: category.description,
      alternates: { canonical: `/blog/${category.slug}` },
    };
  }
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://aiactionstudio.com/blog/${post.slug}`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "AI Action Studio — AI automation agency",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/opengraph-image"],
    },
  };
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const category = getBlogCategory(slug);
  if (category) {
    return (
      <>
        <JsonLd
          data={buildBreadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: category.name, href: `/blog/${category.slug}` },
          ])}
        />
        <BlogCategoryView category={category} posts={getPostsByCategory(category.slug)} />
      </>
    );
  }

  const post = await getPostBySlug(slug);
  if (!post) notFound();
  const postCategory = getBlogCategory(post.category);

  return (
    <article className="py-16 md:py-20">
      <JsonLd
        data={buildBreadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={buildArticleSchema({
          type: "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: `/blog/${post.slug}`,
          image: post.coverImage,
          datePublished: post.date,
          dateModified: post.date,
        })}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-[14px] font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
        >
          ← Blog
        </Link>
        <p className="mt-6 text-[13px] text-slate/70">
          Updated {post.formattedDate} · By{" "}
          <Link
            href="/about"
            className="font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
          >
            Ranjan Kashyap
          </Link>
          {postCategory ? (
            <>
              {" · "}
              <Link
                href={`/blog/${postCategory.slug}`}
                className="font-medium text-navy underline decoration-mint underline-offset-4 hover:decoration-navy"
              >
                {postCategory.name}
              </Link>
            </>
          ) : null}
        </p>
        <h1 className="mt-3 text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-tight text-navy">
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[11px] font-semibold uppercase tracking-wide text-slate">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div
          className="prose-awb mt-10"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <TalkToUsBanner location={`banner-blog-${post.slug}`} className="mt-14" />
        <div className="mt-12 rounded-xl border border-sand bg-white p-6 text-center">
          <p className="text-[16px] font-medium text-navy">Want the practical stack?</p>
          <Link
            href="/free-checklist"
            className="mt-4 inline-flex rounded-lg bg-mint px-5 py-2.5 text-[15px] font-semibold text-navy hover:brightness-110"
          >
            Get the Free Checklist
          </Link>
        </div>
      </div>
    </article>
  );
}
