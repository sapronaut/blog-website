import Link from "next/link";
import Image from "next/image";
const links = [
  {
    label: "GitHub",
    href: "https://github.com/sapronaut",
  },
    {
    label: "X",
    href: "https://x.com/Sapronaut",
  }
];

export default function ProfilePage() {
  return (
    <main>
      <section className="flex flex-col items-start gap-8">
        <div
  className="w-48 h-48 rounded-full overflow-hidden"
  style={{
    border: "1px solid var(--rule)",
  }}
>
  <Image
    src="/avatar (2).jpg"
    alt="Saptarshi"
    width={192}
    height={192}
    className="w-full h-full object-cover"
    priority
  />
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


        </div>
      </section>
    </main>
  );
}