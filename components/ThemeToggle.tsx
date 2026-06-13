"use client";

import { useEffect, useState } from "react";

const THEME_COLORS = {
  light: "#f8f5ee",
  dark: "#111315",
};

const DURATIONS = { slash: 750, shutter: 400 };
const SWAP_AT = { slash: 430, shutter: 200 };

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

    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";

    // alternate between slash and shutter on each click
    const countRaw = localStorage.getItem("theme-transition-count");
    const count = countRaw ? parseInt(countRaw, 10) : 0;
    const mode: "slash" | "shutter" = count % 2 === 0 ? "slash" : "shutter";
    localStorage.setItem("theme-transition-count", String(count + 1));

    const overlay = document.createElement("div");
    overlay.style.setProperty("--theme-color", THEME_COLORS[next]);

    if (mode === "slash") {
      overlay.className = "slash-overlay";
      overlay.innerHTML = `
        <div class="slash-wipe"></div>
        <div class="slash-glow"></div>
        <div class="slash-blade"></div>
      `;
    } else {
      overlay.className = "shutter-overlay";
      overlay.innerHTML = `
        <div class="shutter-left"></div>
        <div class="shutter-right"></div>
        <div class="shutter-pow">POW!</div>
      `;
    }

    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.classList.add("animate");
    });

    setTimeout(() => {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      setTheme(next);
    }, SWAP_AT[mode]);

    setTimeout(() => {
      overlay.remove();
    }, DURATIONS[mode] + 100);
  };

  if (!mounted) {
    return (
      <div
        className="w-11 h-11 flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-11 h-11 flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95"
      style={{
        border: "1px solid var(--rule)",
        color: "var(--text)",
        background: "var(--surface)",
      }}
    >
      <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>
        {theme === "dark" ? "☾" : "☀"}
      </span>
    </button>
  );
}