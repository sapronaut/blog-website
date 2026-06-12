"use client";

import { useEffect, useState } from "react";

const RIPPLE_COLORS = {
  light: "#f7f3ec",
  dark: "#16140f",
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial =
      stored ||
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    setMounted(true);
  }, []);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = theme === "dark" ? "light" : "dark";
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // size the ripple to cover the whole viewport from the click point
    const maxDim =
      Math.max(window.innerWidth, window.innerHeight) * 2.2;

    const ripple = document.createElement("div");
    ripple.className = "theme-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = `${maxDim}px`;
    ripple.style.height = `${maxDim}px`;
    ripple.style.background = RIPPLE_COLORS[next];
    document.body.appendChild(ripple);

    requestAnimationFrame(() => {
      ripple.classList.add("animating");
    });

    // swap the theme partway through the wipe so the reveal feels intentional
    setTimeout(() => {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      setTheme(next);
    }, 250);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  if (!mounted) {
    return <div className="w-8 h-8" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-8 h-8 flex items-center justify-center rounded-full text-sm transition-transform hover:scale-110 active:scale-90"
      style={{ border: "1px solid var(--rule)", color: "var(--text)" }}
    >
      {theme === "dark" ? "☾" : "☀"}
    </button>
  );
}
