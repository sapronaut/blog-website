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

  const toggleTheme = () => {
    const next =
      theme === "dark"
        ? "light"
        : "dark";

    const overlay =
      document.createElement("div");

    overlay.className =
      "pen-transition";

    overlay.style.setProperty(
      "--pen-color",
      next === "light"
        ? "#f8f5ee"
        : "#111315"
    );

    document.body.appendChild(
      overlay
    );

    requestAnimationFrame(() => {
      overlay.classList.add(
        "animate"
      );
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
    }, 450);

    overlay.addEventListener(
      "animationend",
      () => {
        overlay.remove();
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
          "var(--text)",
      }}
    >
      {theme === "dark"
        ? "☾"
        : "☀"}
    </button>
  );
}