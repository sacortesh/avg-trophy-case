# Trophy Case

A private site for cataloging creative wins. Each trophy is an MDX file with frontmatter. The site renders them as a feed, computes badges from milestones, and shows counts per outlet.

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static generation
```

## Adding a trophy

Create `content/my-thing.mdx` with frontmatter, optionally drop an artifact in `public/artifacts/`, push. See [docs/howto.md](docs/howto.md) for the full guide.

## Stack

- Next.js 16 (App Router, TypeScript)
- MDX via `next-mdx-remote` + `gray-matter`
- Tailwind CSS v4
- [avgrd-components](https://github.com/sacortesh/avgrd-components) (Lit Element)
- Vercel for deploy

## Docs

| Doc | What's in it |
|-----|-------------|
| [docs/howto.md](docs/howto.md) | Adding trophies, pages, styling, color system, project structure |
| [docs/next-steps.md](docs/next-steps.md) | Trophy system framework, time budget, milestones, open decisions |
| [docs/session-log.md](docs/session-log.md) | Origin session — the DDS concept and key insights |
