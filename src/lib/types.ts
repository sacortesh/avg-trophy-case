/**
 * Trophy & Badge type definitions.
 *
 * DOC TRAIL — TypeScript interfaces
 * Interfaces define the "shape" of data at compile time. They cost nothing at
 * runtime (erased during compilation) but give us autocomplete and type safety
 * everywhere we handle trophies or badges.
 */

/** Frontmatter fields expected in every trophy MDX file. */
export interface TrophyFrontmatter {
  title: string;
  date: string; // ISO 8601 date string, e.g. "2025-06-14"
  outlet: string; // Where the trophy was created (e.g. "Guitar", "Code", "Writing")
  tags: string[]; // Freeform labels for filtering
  artifact?: string; // Optional path relative to /public, e.g. "artifacts/riff.mp3"
  summary?: string; // One-liner shown on the card
}

/** A fully resolved trophy, including its slug and raw MDX content. */
export interface Trophy extends TrophyFrontmatter {
  slug: string; // Derived from filename, used as URL segment
  content: string; // Raw MDX body (everything after frontmatter)
}

/** Badge status — earned or not, with a label and description. */
export interface Badge {
  id: string;
  label: string;
  description: string;
  earned: boolean;
}
