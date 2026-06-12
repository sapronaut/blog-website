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

    document.documentElement.setAttribute(
      "data-theme",
      initial
    );

    setTheme(initial);
    setMounted(true);
  }, []);

  const toggleTheme = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const next =
      theme === "dark"
        ? "light"
        : "dark";

    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;



    const ink =
      document.createElement("div");

    ink.className =
      `ink-transition ${next}`;

    ink.style.left = `${x}px`;
    ink.style.top = `${y}px`;


    document.body.appendChild(ink);

    requestAnimationFrame(() => {
      ink.classList.add("animate");
    });

    setTimeout(() => {
      document.documentElement.setAttribute(
        "data-theme",
        next
      );

      localStorage.setItem(
        "theme",
        next
      );

      setTheme(next);
    }, 500);

    ink.addEventListener(
      "animationend",
      () => {
        ink.remove();
      }
    );
  };

  if (!mounted) {
    return (
      <div
        className="w-8 h-8"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${
        theme === "dark"
          ? "light"
          : "dark"
      } mode`}
      className="w-8 h-8 flex items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95"
      style={{
        border:
          "1px solid var(--rule)",
        color:
          "var(--text)"
      }}
    >
      <svg
        className={`theme-icon ${
          theme === "dark"
            ? "moon"
            : "sun"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {theme === "dark" ? (
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        ) : (
          <>
            <circle
              cx="12"
              cy="12"
              r="5"
            />
            <line
              x1="12"
              y1="1"
              x2="12"
              y2="3"
            />
            <line
              x1="12"
              y1="21"
              x2="12"
              y2="23"
            />
            <line
              x1="1"
              y1="12"
              x2="3"
              y2="12"
            />
            <line
              x1="21"
              y1="12"
              x2="23"
              y2="12"
            />
          </>
        )}
      </svg>
    </button>
  );
}