import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <header className="mb-12">
        <h1 className="text-xl font-semibold tracking-tight">
        <span style={{ color: "var(--accent)" }}>//</span> articles
        </h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-dim)" }}>
          music and muse 
        </p>
      </header>

      <section>
        {posts.length === 0 && (
          <p style={{ color: "var(--text-dim)" }}>nothing here yet.</p>
        )}

        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="pb-6 group"
              style={{ borderBottom: "1px solid var(--rule)" }}
            >
              <time
                className="block text-xs mb-1"
                style={{ color: "var(--accent)" }}
              >
                {post.date}
              </time>
              <Link
                href={`/blog/${post.slug}`}
                className="text-base font-medium transition-all inline-block group-hover:translate-x-1"
                style={{ color: "var(--text)" }}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
