/**
 * Badge computation — pure functions, no side effects.
 *
 * DOC TRAIL — Pure functions
 * These functions take a trophy list in and return badges out, with no file I/O
 * or global state. This makes them easy to test and safe to call from any
 * Server Component.
 */

import type { Trophy, Badge } from "./types";

/**
 * Compute all badges from the current trophy list.
 *
 * Badge rules:
 * - **First Blood**  — You created at least one trophy.
 * - **Streak**       — 3+ trophies within the last 30 days.
 * - **Collection**   — 10+ trophies total.
 * - **Polymath**     — Trophies span 3+ different outlets.
 * - **Archive**      — At least one trophy has an artifact attached.
 */
export function computeBadges(trophies: Trophy[]): Badge[] {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const recentCount = trophies.filter(
    (t) => new Date(t.date) >= thirtyDaysAgo
  ).length;

  const uniqueOutlets = new Set(trophies.map((t) => t.outlet));

  const hasArtifact = trophies.some((t) => !!t.artifact);

  return [
    {
      id: "first-blood",
      label: "First Blood",
      description: "Created your first trophy",
      earned: trophies.length >= 1,
    },
    {
      id: "streak",
      label: "Streak",
      description: "3+ trophies in the last 30 days",
      earned: recentCount >= 3,
    },
    {
      id: "collection",
      label: "Collection",
      description: "10+ trophies total",
      earned: trophies.length >= 10,
    },
    {
      id: "polymath",
      label: "Polymath",
      description: "Trophies across 3+ outlets",
      earned: uniqueOutlets.size >= 3,
    },
    {
      id: "archive",
      label: "Archive",
      description: "At least one trophy has an artifact",
      earned: hasArtifact,
    },
  ];
}
