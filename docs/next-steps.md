# DDS — Next Steps: The Trophy System

**Context:** ~5-7 hours/week for hobbies. That's tight. Everything here is designed around that constraint. No fluff, no overhead that eats into making things.

---

## Step 1: Pick an Outlet

An outlet is any creative or technical skill you practice. Current ones: guitar, writing, tech/security. Tomorrow it could be drawing, woodworking, anything.

When you pick up a new outlet, answer these three questions before you start:

1. **What does "done" look like in this outlet?** — A finished thing. Not "I practiced." A thing that exists. Examples:
   - Guitar: a recorded take (even phone quality) of a full piece or riff
   - Writing: a finished short piece (flash fiction, essay, journal entry with a point)
   - Tech: a working tool, script, or writeup of something you broke/built
   - Drawing: a finished sketch or study, signed and dated

2. **What is the smallest version of that thing?** — The trophy must be achievable in a single session (1-2 hours). If it can't be, shrink it. A 30-second riff counts. A 300-word piece counts. A script that does one thing counts. A single hand study counts.

3. **Where does it go when it's done?** — It has a home. See Step 3.

---

## Step 2: Define the Trophy

A trophy has these properties:

| Property | Description | Example (guitar) |
|---|---|---|
| **Format** | What is the artifact, physically or digitally? | .mp3 / .wav file |
| **Minimum viable scope** | The smallest version that still counts | One riff, recorded clean, start to finish |
| **Definition of done** | When do you stop? Be precise. | Recorded, listened back, saved with date in filename |
| **Time budget** | How long per session? | 1-1.5 hours |
| **Cycle** | How often do you produce one? | Weekly |

### Trophy definitions for current outlets:

**Guitar**
- Format: Audio recording (phone/DAW)
- Min scope: One piece/riff/cover, played through without stopping
- Done when: Recorded, named, filed
- Time: 1-1.5h session
- Cycle: Weekly

**Writing**
- Format: Text file (.md or .txt)
- Min scope: 300-1000 words, has a beginning and an end
- Done when: Read back once, titled, filed
- Time: 1-1.5h session
- Cycle: Weekly

**Tech / Security**
- Format: Code repo, script, or writeup (.md)
- Min scope: One tool/exploit/concept, working or documented
- Done when: Runs or reads as complete, committed/saved
- Time: 2-3h (can span two sessions)
- Cycle: Biweekly

### Blank template for a new outlet:

```
**[Outlet Name]**
- Format:
- Min scope:
- Done when:
- Time:
- Cycle:
```

---

## Step 3: The Trophy Case

Trophies need a place. This is your private showcase — where you see what you've built. It must be zero-friction.

### Structure

```
sec_brain/dds/
├── trophies/
│   ├── guitar/
│   │   ├── 2026-02-03_riff-name.mp3
│   │   └── ...
│   ├── writing/
│   │   ├── 2026-02-03_title.md
│   │   └── ...
│   ├── tech/
│   │   ├── 2026-02-03_tool-name/
│   │   └── ...
│   └── [new-outlet]/
│       └── ...
├── trophy_log.md       ← running list of everything completed
├── session_log.md
└── next_steps.md
```

### Trophy Log format

Each entry in `trophy_log.md` is one line:

```
| 2026-02-03 | guitar | Riff: Minor blues loop | 1.5h | First clean recording |
```

Columns: date, outlet, what, time spent, one-line note (optional).

This is the scoreboard. When you feel like you've done nothing, open this file.

---

## Step 4: Time Budget

You have 5-7 hours. Here's how to not waste them.

**Rule: One outlet per week gets the focus. Rotate or repeat as you feel.**

| Week pattern | Session 1 (1.5h) | Session 2 (1.5h) | Session 3 (1.5h) | Flex (1h) |
|---|---|---|---|---|
| Guitar week | Practice | Practice + record | File trophy | Noodle / explore |
| Writing week | Draft | Revise + finish | File trophy | Read / research |
| Tech week | Research/plan | Build | Build + file trophy | Explore / CTF |
| Mixed week | Outlet A session | Outlet B session | Outlet A or B trophy | Free |

**Key rules:**
- Never split a session across outlets. One thing per sit-down.
- The last session of the week MUST produce the trophy. No "I'll finish next week."
- If you can't finish, shrink the scope. The trophy ships.
- Flex time is guilt-free. Explore, consume, do nothing productive.

---

## Step 5: Milestones

Milestones mark volume, not quality. Quality comes from volume.

| Milestone | Count | What it means |
|---|---|---|
| **First Blood** | 1 trophy | You did the thing. The system works. |
| **Streak** | 4 trophies in a row (weekly) | You have a practice, not a one-off. |
| **Collection** | 10 trophies in one outlet | You have a body of work. |
| **Polymath** | 10 trophies across 3+ outlets | The secret identity is real. |
| **Archive** | 50 trophies total | You are not the person you were. |

No timeline on these. They happen when they happen.

---

## Step 6: The New Outlet Checklist

Tomorrow you pick up drawing. Here's exactly what you do:

1. [ ] Answer the 3 questions from Step 1
2. [ ] Fill in the trophy template from Step 2
3. [ ] Create the folder: `trophies/drawing/`
4. [ ] Do one session
5. [ ] Produce the smallest possible trophy
6. [ ] Log it in `trophy_log.md`
7. [ ] Decide: does this outlet earn a weekly slot, or was it a one-off?

That's it. No planning beyond this. No gear purchases. No tutorials longer than your first session. Make the thing first, optimize later.

---

## Step 7: Trophy Case Site — Open Decisions

The trophy case now has a live site (`trophy-case/`). These are decisions parked for later.

### CMS for trophy entry (decide later)

Instead of manually creating MDX files, a git-based CMS could provide a browser form for adding trophies. Researched options:

- **Decap CMS** (formerly Netlify CMS) — client-side SPA at `/admin`, commits files to git via GitHub API. No server except a small OAuth function. Produces frontmatter + markdown files identical to what we write by hand. Downsides: no real MDX support (just markdown), reformats files on save, preview doesn't match site styling, auth setup needed for Vercel, maintenance is slow (Netlify dropped it).
- **Sveltia CMS** — drop-in Decap replacement, reuses same config.yml, actively maintained, 5x smaller. Worth trying first if we go this route.
- **TinaCMS** — only option with native MDX component editing. Heavier, but the right pick if trophies ever use JSX in the body.

Current trophies are just markdown + frontmatter, no JSX — so Decap/Sveltia would work fine. The tradeoff is browser convenience vs. losing precise control of the files.

### Tailwind removal (decide later)

Tailwind is currently used for layout utilities only (flex, gap, padding, max-width). The avgrd component library handles component-level styling. All Tailwind usage maps to 1-2 CSS properties each — straightforward to replace with a small stylesheet if desired. See `HOWTO.md` for the translation table.

### avgrd-components npm export fix

The published npm package (`avgrd-components@0.2.0`) has a broken export map — `package.json` points to `dist/index.js` but only `dist/avgrd-components.js` exists. Currently vendored as `src/lib/vendor/avgrd-components.js`. When the package gets a fixed build, switch back to the npm import.

---

## The One Rule

**The trophy ships.** Shrink it, ugly it up, cut it short — but it ships. An imperfect finished thing beats a perfect idea every single time.
