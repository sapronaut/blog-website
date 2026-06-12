import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "center",
        }}
      >
        <Link href="/">home</Link>
        <Link href="/blog">notes</Link>
      </div>

      <ThemeToggle />
    </nav>
  );
}