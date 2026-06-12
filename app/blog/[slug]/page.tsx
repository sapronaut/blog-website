import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main>
      <Link href="/blog" className="text-sm" style={{ color: "var(--text-dim)" }}>
        &larr; back to notes
      </Link>

      <article className="mt-8">
        <time className="block text-xs mb-2" style={{ color: "var(--text-dim)" }}>
          {post!.date}
        </time>
        <h1 className="text-2xl font-semibold tracking-tight mb-6">
          {post!.title}
        </h1>
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: post!.contentHtml }}
        />
      </article>
    </main>
  );
}
