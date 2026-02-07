/**
 * Feed page — the home page showing all trophies, badges, and filters.
 *
 * DOC TRAIL — Server Components & data fetching
 * This page is a Server Component (no "use client"). It calls `getAllTrophies()`
 * and `computeBadges()` directly — these run on the server at build time (or
 * on each request in dev). The resulting data is passed as props to child
 * components. The FilterableFeed is a Client Component that handles
 * interactivity, but it receives its data as serializable props from this
 * server-rendered parent.
 */

import { getAllTrophies } from "@/lib/trophies";
import { computeBadges } from "@/lib/badges";
import { BadgeBar } from "@/components/badge-bar";
import { FilterableFeed } from "@/components/filter-bar";

export default function FeedPage() {
  const trophies = getAllTrophies();
  const badges = computeBadges(trophies);

  // Compute outlet counts for the summary
  const outletCounts: Record<string, number> = {};
  for (const t of trophies) {
    outletCounts[t.outlet] = (outletCounts[t.outlet] ?? 0) + 1;
  }

  return (
    <div className="space-y-8">
      {/* Badge bar */}
      <section>
        <h2 className="text-xs font-medium text-gold-dim uppercase tracking-wider mb-3">
          Badges
        </h2>
        <BadgeBar badges={badges} />
      </section>

      {/* Outlet counts */}
      {Object.keys(outletCounts).length > 0 && (
        <section className="flex flex-wrap gap-3">
          {Object.entries(outletCounts)
            .sort(([, a], [, b]) => b - a)
            .map(([outlet, count]) => (
              <div
                key={outlet}
                className="rounded-md border border-[#2A2A2A] bg-[#0A0A0A] px-3 py-2 text-center"
              >
                <div className="text-xl font-bold text-gold">{count}</div>
                <div className="text-xs text-zinc-500">{outlet}</div>
              </div>
            ))}
        </section>
      )}

      {/* Filterable trophy feed */}
      <section>
        <h2 className="text-xs font-medium text-gold-dim uppercase tracking-wider mb-3">
          Trophies
        </h2>
        {trophies.length === 0 ? (
          <p className="text-sm text-zinc-600 py-8 text-center">
            No trophies yet. Add an MDX file to the <code>content/</code> directory to get started.
          </p>
        ) : (
          <FilterableFeed trophies={trophies} />
        )}
      </section>
    </div>
  );
}
