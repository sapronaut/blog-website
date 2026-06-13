"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const pathname = usePathname();

  const linkStyle = (href: string) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    return {
      borderBottom: isActive
        ? "2px solid var(--accent)"
        : "2px solid transparent",
      color: isActive ? "var(--accent)" : "var(--text)",
      paddingBottom: "4px",
      transition: "color 0.2s ease, border-color 0.2s ease",
    };
  };

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
          gap: "24px",
          alignItems: "center",
        }}
      >
        <Link href="/" style={linkStyle("/")}>
          home
        </Link>
        <Link href="/blog" style={linkStyle("/blog")}>
          notes
        </Link>
      </div>

      <ThemeToggle />
    </nav>
  );
}