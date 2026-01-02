import React from "react";
import "./globals.css";
import Link from "next/link";
import ThemeProvider from "theme-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <header className="px-4 py-4 bg-fuchsia-800 text-white shadow">
            <nav className="flex gap-4">
              {/* Prefetched when the link is hovered or enters the viewport */}
              <Link href="/blog">Blog</Link>
              {/* no prefetching */}
              <a href="/contact">Contact</a>
            </nav>
          </header>
          {/* Place children where you want to render a page or nested layout */}
          <main className="px-4 py-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
