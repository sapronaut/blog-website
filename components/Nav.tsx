import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between mb-20">
      <div className="flex items-center gap-8 text-sm">
        <Link href="/">home</Link>
        <Link href="/blog">notes</Link>
      </div>

      <ThemeToggle />
    </nav>
  );
}