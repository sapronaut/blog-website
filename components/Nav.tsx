import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between mb-10 text-sm">
      <div className="flex gap-4">
        <Link href="/" style={{ color: "var(--text)" }}>
          home
        </Link>
        <Link href="/blog" style={{ color: "var(--text)" }}>
          notes
        </Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}
