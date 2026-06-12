import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/sapronaut" },
  // add more: { label: "X", href: "https://x.com/..." },
  // { label: "LinkedIn", href: "https://linkedin.com/in/..." },
];

export default function ProfilePage() {
  return (
    <main>
      <section className="flex flex-col items-start gap-5">
        <div
          className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center text-2xl"
          style={{ background: "var(--bg-raised)", border: "1px solid var(--rule)" }}
        >
          {/* Replace with your photo: put a file at /public/avatar.jpg
              and swap this block for:
              <Image src="/avatar.jpg" alt="Saptarshi" width={80} height={80} className="object-cover w-full h-full" />
          */}
          <span style={{ color: "var(--text-dim)" }}>S</span>
        </div>

        <div>
          <h1 className="text-xl font-semibold tracking-tight">Saptarshi</h1>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
            CS student, building things — ML, web apps, a chess engine from
            scratch, and whatever else I get curious about. This is where I
            keep notes, writeups, and unfinished thoughts, mostly for myself.
          </p>
        </div>

        <div className="flex gap-4 text-sm mt-2">
          {links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
          <Link href="/blog">notes &rarr;</Link>
        </div>
      </section>
    </main>
  );
}
