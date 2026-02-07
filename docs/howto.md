# Trophy Case — How This Project Works

## Adding a New Trophy

1. Create a file in `content/` with a `.mdx` extension:

```
content/my-new-thing.mdx
```

2. Add frontmatter at the top (YAML between `---` fences):

```mdx
---
title: My New Thing
date: "2025-07-01"
outlet: Guitar
tags:
  - practice
  - recording
summary: One-liner that shows on the card in the feed.
artifact: artifacts/my-recording.mp3
---

Write the body here in regular markdown.

## Subheadings work

- So do lists
- And **bold**, *italic*, `code`, [links](https://example.com)
```

3. If you have an artifact (audio, video, image, any file), drop it in `public/artifacts/`. The `artifact` frontmatter field is the path relative to `public/`.

4. That's it. The feed page, filters, badges, and trophy detail page all update automatically.

### Frontmatter fields

| Field      | Required | Description                                      |
|------------|----------|--------------------------------------------------|
| `title`    | yes      | Display name                                     |
| `date`     | yes      | ISO date string, e.g. `"2025-07-01"`             |
| `outlet`   | yes      | Category — Guitar, Code, Writing, etc.            |
| `tags`     | yes      | Array of freeform labels for filtering            |
| `summary`  | no       | One-liner shown on the card                       |
| `artifact` | no       | Path relative to `public/`, e.g. `artifacts/x.mp3`|

### Supported artifact types

- **Audio** (mp3, wav, ogg) → embedded player
- **Video** (mp4, webm) → embedded player
- **Image** (png, jpg, gif, webp) → inline image
- **Anything else** → download link

---

## Adding a New Page

Next.js uses **file-based routing**. Every file named `page.tsx` inside `src/app/` becomes a URL.

### Static page

Create `src/app/about/page.tsx`:

```tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>Whatever you want here.</p>
    </div>
  );
}
```

This becomes accessible at `/about`. No router config needed.

### Dynamic page (like trophy/[slug])

Create a folder with brackets: `src/app/something/[id]/page.tsx`. The bracket part becomes a URL parameter passed to your component via `params`.

---

## Styling

### Where styles live

- `src/app/globals.css` — Global styles, Tailwind theme tokens, prose (markdown) styles, and avgrd design token overrides.
- Component files — Utility classes on elements (currently Tailwind, but these are just CSS shorthands).
- avgrd components — Self-contained styles via Shadow DOM. Themed through `--avgrd-color-*` CSS custom properties set in `globals.css`.

### The gold color palette

Defined in `globals.css` under `@theme`:

| Token            | Utility class     | Use                        |
|------------------|-------------------|----------------------------|
| `--color-gold`       | `text-gold`       | Primary accent — headings, active states |
| `--color-gold-light` | `text-gold-light` | Hover states, emphasis     |
| `--color-gold-dim`   | `text-gold-dim`   | Secondary text — dates, labels |
| `--color-gold-muted` | `text-gold-muted` | Subtle borders, counters   |

Each works with `text-`, `bg-`, `border-`, `ring-` prefixes and opacity modifiers (`bg-gold/20` = gold at 20% opacity).

### Changing colors

Edit the `@theme` block in `globals.css`. The oklch values control lightness, chroma, and hue:

```css
--color-gold: oklch(0.76 0.1 75);
/*                   ^     ^   ^
                     |     |   hue (75 = warm gold, try 50 for more orange, 90 for more yellow)
                     |     chroma (saturation — higher = more vivid)
                     lightness (0 = black, 1 = white)  */
```

### avgrd components

The avgrd web components (badge, filter-badge, panel, etc.) use their own CSS custom properties for theming. These are overridden in `globals.css` under the `:root` block to match the gold scheme:

```css
:root {
  --avgrd-color-primary: oklch(0.76 0.1 75);  /* matches --color-gold */
  --avgrd-color-background: #000000;
  --avgrd-color-surface: #111111;
  /* ... etc */
}
```

Change these to retheme all avgrd components globally.

### On Tailwind

Tailwind is used here as a layout utility layer — `flex`, `gap`, `px-6`, `max-w-3xl`, etc. It does not style components (that's avgrd's job) or define the color palette (that's the `@theme` block and avgrd tokens).

Everything Tailwind does here maps to plain CSS properties. If you want to remove it, each utility class translates directly:

```
flex           → display: flex
gap-3          → gap: 0.75rem
px-6           → padding-left: 1.5rem; padding-right: 1.5rem
max-w-3xl      → max-width: 48rem
space-y-8 > *  → margin-top: 2rem (on children)
text-xs        → font-size: 0.75rem
rounded-lg     → border-radius: 0.5rem
```

---

## Project structure

```
content/                     ← Trophy MDX files (add new ones here)
public/artifacts/            ← Binary files referenced by trophies
src/
  app/
    globals.css              ← Theme, colors, prose styles
    layout.tsx               ← Shell (header, wrapper) — shared across all pages
    page.tsx                 ← Feed page (home)
    trophy/[slug]/page.tsx   ← Individual trophy page
  components/
    avgrd-loader.tsx         ← Loads avgrd web components client-side
    badge-bar.tsx            ← Badge pills (uses avgrd-badge)
    trophy-card.tsx          ← Card in the feed
    filter-bar.tsx           ← Outlet/tag filter controls
  lib/
    types.ts                 ← TypeScript interfaces
    trophies.ts              ← Reads content/ dir, parses MDX frontmatter
    badges.ts                ← Badge computation logic
    vendor/
      avgrd-components.js    ← Vendored avgrd bundle (npm export map is broken)
```

---

## Running

```bash
npm run dev    # Dev server with hot reload
npm run build  # Production build (static HTML generation)
npm start      # Serve production build locally
```

## Deploying

Push to a git remote connected to Vercel. It runs `npm run build` and deploys the static output. Every `git push` triggers a rebuild — new trophies appear automatically.
