// Blog data is pre-generated at build time by scripts/generate-blog.mjs.
import blogData from "./generated/blog-data.json";
import { getBlogCategory } from "./blog-categories";

export interface TocItem {
  level: 2 | 3;
  text: string;
  id: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  excerpt: string;
  coverImage?: string;
  author: string;
  category: string;
  tags: string[];
}

export interface Post extends PostMeta {
  contentHtml: string;
  toc: TocItem[];
}

const posts = blogData.posts as unknown as Post[];

function toMeta(post: Post): PostMeta {
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    formattedDate: post.formattedDate,
    excerpt: post.excerpt,
    coverImage: post.coverImage ?? undefined,
    author: post.author,
    category: post.category,
    tags: post.tags,
  };
}

export function getAllPostsMeta(): PostMeta[] {
  return posts.map(toMeta);
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  return posts.filter((post) => post.category === categorySlug).map(toMeta);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;
  return { ...post, coverImage: post.coverImage ?? undefined };
}

export { getBlogCategory };
