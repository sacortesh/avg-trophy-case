/**
 * Trophy loader — reads MDX files from the `content/` directory.
 *
 * DOC TRAIL — Server-only code
 * This module uses Node's `fs` and `path`, which only work on the server.
 * In the App Router every component is a **Server Component** by default, so
 * importing this file from a page or layout "just works" — the code runs at
 * build time (or request time in dev) and never ships to the browser.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Trophy } from "./types";

/** Absolute path to the content directory at the project root. */
const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Return every trophy, sorted newest-first by date.
 *
 * Each `.mdx` file in `content/` is parsed with `gray-matter` which splits
 * YAML frontmatter from the MDX body. The filename (minus extension) becomes
 * the slug used in URLs.
 */
export function getAllTrophies(): Trophy[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"));

  const trophies: Trophy[] = files.map((filename) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug: filename.replace(/\.mdx$/, ""),
      title: data.title ?? "Untitled",
      date: data.date ?? new Date().toISOString().slice(0, 10),
      outlet: data.outlet ?? "Uncategorized",
      tags: Array.isArray(data.tags) ? data.tags : [],
      artifact: data.artifact,
      summary: data.summary,
      content,
    };
  });

  // Sort newest-first
  return trophies.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Return a single trophy by slug, or undefined if not found. */
export function getTrophyBySlug(slug: string): Trophy | undefined {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? new Date().toISOString().slice(0, 10),
    outlet: data.outlet ?? "Uncategorized",
    tags: Array.isArray(data.tags) ? data.tags : [],
    artifact: data.artifact,
    summary: data.summary,
    content,
  };
}
