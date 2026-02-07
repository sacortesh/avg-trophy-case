/**
 * Root Layout — wraps every page in the application.
 *
 * DOC TRAIL — Root Layout
 * In the App Router, `layout.tsx` defines a persistent shell that wraps all
 * pages. It provides the <html> and <body> tags, loads global CSS, and can
 * include shared UI like headers or footers. Layouts are NOT re-rendered when
 * navigating between pages — only the page content inside {children} swaps.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { AvgrdLoader } from "@/components/avgrd-loader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trophy Case",
  description: "A private collection of creative wins",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-foreground`}
      >
        {/* Load avgrd web components client-side */}
        <AvgrdLoader />

        <header className="border-b border-gold-muted/40 px-6 py-4">
          <nav className="mx-auto flex max-w-3xl items-center justify-between">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-gold hover:text-gold-light transition-colors"
            >
              Trophy Case
            </Link>
            <span className="text-xs text-gold-dim/60 font-mono">
              private collection
            </span>
          </nav>
        </header>

        <main className="mx-auto max-w-3xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
