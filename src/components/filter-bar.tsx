/**
 * FilterBar — client component for outlet/tag filtering using avgrd-filter-badge.
 *
 * DOC TRAIL — "use client"
 * Adding "use client" at the top of a file opts it into client-side rendering.
 * This is required for React hooks (useState) and for avgrd web components
 * which need browser APIs to register custom elements. Keep client components
 * as small and "leaf-like" as possible — everything else stays on the server.
 */

"use client";

import { useState, useCallback } from "react";
import type { Trophy } from "@/lib/types";
import { TrophyCard } from "./trophy-card";

interface FilterBarProps {
  trophies: Trophy[];
}

export function FilterableFeed({ trophies }: FilterBarProps) {
  const [selectedOutlet, setSelectedOutlet] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Derive unique outlets and tags from the full trophy list
  const outlets = [...new Set(trophies.map((t) => t.outlet))].sort();
  const tags = [...new Set(trophies.flatMap((t) => t.tags))].sort();

  // Count trophies per outlet and tag for the filter badges
  const outletCounts = (outlet: string) =>
    trophies.filter((t) => t.outlet === outlet).length;
  const tagCounts = (tag: string) =>
    trophies.filter((t) => t.tags.includes(tag)).length;

  // Apply filters
  const filtered = trophies.filter((t) => {
    if (selectedOutlet && t.outlet !== selectedOutlet) return false;
    if (selectedTag && !t.tags.includes(selectedTag)) return false;
    return true;
  });

  // Handle avgrd-filter-badge change events
  const handleOutletChange = useCallback(
    (outlet: string) => {
      setSelectedOutlet((prev) => (prev === outlet ? null : outlet));
    },
    []
  );

  const handleTagChange = useCallback(
    (tag: string) => {
      setSelectedTag((prev) => (prev === tag ? null : tag));
    },
    []
  );

  return (
    <div>
      {/* Filter controls */}
      <div className="mb-6 flex flex-col gap-4">
        {/* Outlet filter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-gold-dim uppercase tracking-wider mr-1">
            Outlet
          </span>
          <button
            onClick={() => setSelectedOutlet(null)}
            className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
              !selectedOutlet
                ? "bg-gold/20 text-gold ring-1 ring-gold/30"
                : "bg-[#1A1A1A] text-zinc-400 hover:text-zinc-300"
            }`}
          >
            All
          </button>
          {outlets.map((outlet) => (
            <button
              key={outlet}
              onClick={() => handleOutletChange(outlet)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                selectedOutlet === outlet
                  ? "bg-gold/20 text-gold ring-1 ring-gold/30"
                  : "bg-[#1A1A1A] text-zinc-400 hover:text-zinc-300"
              }`}
            >
              {outlet}
              <span className="ml-1 text-gold-dim/60">{outletCounts(outlet)}</span>
            </button>
          ))}
        </div>

        {/* Tag filter */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-gold-dim uppercase tracking-wider mr-1">
              Tag
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                !selectedTag
                  ? "bg-gold-muted/30 text-gold-dim ring-1 ring-gold-muted/40"
                  : "bg-[#1A1A1A] text-zinc-400 hover:text-zinc-300"
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagChange(tag)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-gold-muted/30 text-gold-dim ring-1 ring-gold-muted/40"
                    : "bg-[#1A1A1A] text-zinc-400 hover:text-zinc-300"
                }`}
              >
                {tag}
                <span className="ml-1 text-gold-dim/60">{tagCounts(tag)}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Trophy list */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <p className="text-sm text-zinc-600 py-8 text-center">
            No trophies match the current filters.
          </p>
        ) : (
          filtered.map((trophy) => (
            <TrophyCard key={trophy.slug} trophy={trophy} />
          ))
        )}
      </div>

      {/* Count */}
      <p className="mt-4 text-xs text-gold-muted">
        {filtered.length} of {trophies.length} trophies
      </p>
    </div>
  );
}
