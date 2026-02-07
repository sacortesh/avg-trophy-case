/**
 * TrophyCard — a single card in the feed, gold-on-black.
 *
 * DOC TRAIL — Server Component (no "use client")
 * This component renders static HTML on the server. The Next.js <Link>
 * component handles client-side navigation automatically — clicking a card
 * swaps the page content without a full page reload.
 */

import Link from "next/link";
import type { Trophy } from "@/lib/types";

export function TrophyCard({ trophy }: { trophy: Trophy }) {
  return (
    <Link
      href={`/trophy/${trophy.slug}`}
      className="block rounded-lg border border-[#2A2A2A] bg-[#0A0A0A] p-5 transition-all hover:border-gold-dim hover:bg-[#111111] hover:shadow-[0_0_12px_rgba(212,168,67,0.08)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-zinc-100 truncate">
            {trophy.title}
          </h2>
          {trophy.summary && (
            <p className="mt-1 text-sm text-zinc-500">{trophy.summary}</p>
          )}
        </div>
        <time
          dateTime={trophy.date}
          className="shrink-0 text-xs text-gold-dim"
        >
          {new Date(trophy.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-md bg-gold/10 px-2 py-0.5 text-xs font-medium text-gold ring-1 ring-gold/20">
          {trophy.outlet}
        </span>
        {trophy.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md bg-[#1A1A1A] px-2 py-0.5 text-xs text-zinc-400 ring-1 ring-[#2A2A2A]"
          >
            {tag}
          </span>
        ))}
        {trophy.artifact && (
          <span className="inline-flex items-center rounded-md bg-gold-muted/20 px-2 py-0.5 text-xs text-gold-dim ring-1 ring-gold-muted/30">
            artifact
          </span>
        )}
      </div>
    </Link>
  );
}
