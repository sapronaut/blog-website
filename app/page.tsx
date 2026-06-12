import Link from "next/link";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/sapronaut",
  },
];

export default function ProfilePage() {
  return (
    <main>
      <section className="flex flex-col items-start gap-8">
        <div
          className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center text-4xl"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--rule)",
          }}
        >
          <span style={{ color: "var(--text-dim)" }}>
            S
          </span>
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Saptarshi
          </h1>

          <p
            className="mt-5 text-base leading-8 max-w-3xl"
            style={{
              color: "var(--text-dim)",
            }}
          >
            CS student building things —
            machine learning projects,
            web applications, a chess
            engine from scratch, and
            whatever else happens to
            catch my attention.

            <br />
            <br />

            This is my corner of the
            internet for notes, research,
            blog posts, experiments, and
            half-finished thoughts.
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}

          <Link href="/blog">
            notes →
          </Link>
        </div>
      </section>
    </main>
  );
}