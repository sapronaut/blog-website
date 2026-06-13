import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "saptarshi",
  description:
    "writings, research, half-finished thoughts",
};

const noFlashScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme =
      stored ||
      (
        window.matchMedia(
          '(prefers-color-scheme: light)'
        ).matches
          ? 'light'
          : 'dark'
      );

    document.documentElement.setAttribute(
      'data-theme',
      theme
    );
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: noFlashScript,
          }}
        />
      </head>

      <body className="min-h-screen">
        <div className="max-w-4xl mx-auto px-8 py-16 flex flex-col min-h-screen">
          <Nav />
          <div className="flex-1">{children}</div>
          <footer
            className="mt-20 pt-6 text-xs"
            style={{
              borderTop: "1px solid var(--rule)",
              color: "var(--text-dim)",
            }}
          >
            built with next.js · sapronaut, {new Date().getFullYear()}
          </footer>
        </div>
      </body>
    </html>
  );
}