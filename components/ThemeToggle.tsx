"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as
      | "dark"
      | "light"
      | null;

    const initial =
      stored ||
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark");

    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    setMounted(true);
  }, []);

  const triggerSunrise = () => {
    const overlay = document.createElement("div");

    overlay.className = "sunrise-overlay active";

    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.remove();
    }, 900);
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";

    triggerSunrise();

    setTimeout(() => {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      setTheme(next);
    }, 250);
  };

  if (!mounted) {
    return <div className="w-8 h-8" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-8 h-8 flex items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95"
      style={{
        border: "1px solid var(--rule)",
        color: "var(--text)",
      }}
    >
      <svg
        className={`theme-icon ${theme === "dark" ? "moon" : "sun"}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {theme === "dark" ? (
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </>
        )}
      </svg>
    </button>
  );
}
