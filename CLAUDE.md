# CLAUDE.md — soft-skills (lean operational pointers)

The **Soft Skills** concept app of GraphL. Workspace-wide invariants, content model and working
agreement live in the workspace [`CLAUDE.md`](../CLAUDE.md) — read that first; this file is
soft-skills-specific. The full 90-section plot is [`COURSE-PLAN.md`](./COURSE-PLAN.md).

## What this is

A standalone concept app: its own scenes + courses. The render engine is **`@graphlearning/flow`**
and the app shell is **`@graphlearning/shell`**, both pinned by version.

The concept is narrowed, and the narrowing is the point:

> **For the IT professional who has the right answer and still loses the room.**

"Soft skills" as a whole fails the concept test — no single audience, no through-line, nothing to
draw. Everything here serves *spoken professional presence*. Time management, negotiation tactics,
productivity systems and resume formatting are **out of scope** and stay out.

**Through-line:** only a fraction of what lands is your words. Named in `presence/three-channels`
and `presence/the-7-38-55-rule`; every later course is downstream of it.

## Course arc (9)

`presence · voice · body · structure · listening · pressure · stories · pitch · room`

All nine are declared in `src/content/index.ts` from day one so the arc is visible in the catalog
immediately; each fills as its slice is authored. **Courses 1–5 are the shippable prefix.** Played
in syllabus order; `→` past a course's last section rolls into the next.

**All nine courses authored: 90 sections, 90 scenes.** No audio yet — `public/audio/` is empty, so
narration is text only and every course's section order is still free to change.

## The scene vocabulary — read before authoring any scene

This concept has no code and no service topology. Left unmanaged, all 90 scenes collapse into the
same three grey cards and an arrow. Five renderers are fixed, and `COURSE-PLAN.md` tags every
section with the one it uses:

| tag | engine feature |
|---|---|
| `[board]` | tiles in a `cols` grid — things that are simultaneous |
| `[compare]` | `kind: 'table'`, data mode — two-column pairs |
| `[framework]` | container + `edges` + `flow` — PREP · STAR · PPF · PASR · LACE · PPSA |
| `[script]` | `kind: 'code'` — the actual words, as an artifact |
| `[flow]` | top-level `edges` — a genuine mechanism |

Two rules, both load-bearing:

- **Per course, roughly 3 board · 2 compare · 2 framework · 2 script · 1 flow.**
- **No two adjacent sections use the same renderer.** Without it, `body` becomes six comparison
  tables in a row and the left pane stops carrying information.

The `[script]` card is what makes this concept drawable at all — the engine's highlighter is
language-agnostic, so quoted speech paints as a string, a `#` line as a comment, and prose as plain
text. A transcript renders correctly with no engine change.

## Authoring rules — learned on the frames, do not relearn them

Every one of these was a defect caught on a rendered frame, not in review of the source.

- **Two `###` subsections per slide. Hard ceiling.** The panel does not scroll in capture, so past
  roughly *intro line + 2 subsections + short blockquote* the tail is silently cut off the bottom of
  the frame. Ten slides shipped clipped across courses 1 and 2 before this was fixed. If the content
  will not fit in two, it is two sections.
- **Never restate the scene in the slide.** Three sections shipped with a markdown table duplicating
  the `[compare]` table already on the left. The right pane is for what the figure cannot say — and
  a markdown table renders badly in the panel anyway.
- **`flow: 'LR'` caps at three cards.** fitView is width-bound: four cards side by side produce a
  composition wide enough that every card scales to ~130px and the subs stop being legible. Tried
  both ways on `four-stages`, `how-voice-is-made`, `breath` and `the-pause` — TB won every time.
  Three cards in LR is fine (`the-gap`, `self-audit`). Four or more: TB.
- **A pattern card does not grow to fit its text.** A three-line `label` with a five-line `sub`
  spills straight out of the box (`breath`'s warn card did exactly this). Keep `label` to about
  three words and `sub` to one line — especially on cards sitting inside a container, where a
  two-line sub also clips against the container's bottom edge.
- **Check the adjacency rule against the plan before authoring, not after.** Three courses shipped
  plans with two adjacent sections on the same renderer (`body` §1/§2, `stories` §6/§7). Retagging
  costs nothing at plan time and a re-author afterwards.

### The `[script]` card, in practice

It carries far more of this repo than the budget suggests, and three uses were found on the frames:

- **Dialogue** — the other person's line above, the reflex answer, then the better one
  (`listening/paraphrase`, `pressure/i-dont-know`, `room/bad-news`). This is what made `listening`
  drawable at all, against the plan's own prediction that it would be the weakest course.
- **Decay** — the same sentence transcribed down a chain until it means something else
  (`listening/requirements-failures`).
- **Annotation** — real words with delivery marks in the trailing comments
  (`pitch/delivering-it`). Block characters also render untouched, so a bar chart works
  (`stories/action-is-most-of-it`).

## Known engine defect

`@graphlearning/flow` `TableNode.tsx` — the `cell()` helper returns a `<div>` with no `key`, and it
is called inside `chars.map(...)`. Every data-mode table logs *"Each child in a list should have a
unique key prop"* in dev. Cosmetic (the rows are static), but it is the only console noise this repo
produces. One-line fix in `ui-flow`, needs an engine release — not fixed here, because this repo
consumes the package by version.

## Layout

```
src/content/    courses → sections (one file per section) + registry
src/scenes/     hand-authored scenes + registry (one folder per course)
src/main.tsx    mounts <ConceptApp> — router, section view, slide panel, catalog
                and narration are all @graphlearning/shell
src/theme.css   this repo's three brand tokens — its entire design surface
scripts/        concept.json (publishing identity)
public/audio/<course>/   narration wavs
```

**Brand:** amethyst `#9d7cf4` + warm gold `#ffcf70`. Every other concept wears a vendor colour; this
one is about a person, so it takes the lane none of them use.

## Build & verify

- `npm install` → `npm run dev` (port 5173). `npm run build` and `npx tsc --noEmit` must stay clean.
- No test runner. Bar for a change: **build clean + visually correct** at the relevant route, and
  **every new section seen rendered** before it is called done.
- Adding a scene: define in `src/scenes/<course>/`, register in that folder's `index.ts`.
- Adding content: add a `Section` under `src/content/<course>/`, list it in that folder's `index.ts`.

## House rules for this repo

- **Nothing cross-references a neighbour by course number.** That is what lets the repo ship as a
  prefix and lets a later reorder cost nothing. Name a course, never number it.
- After a course's audio is generated its section **order is frozen** — wav filenames are pinned to
  section ids.
- Narration is authored **fresh**. The source workshop is an inventory, not a script, and its own
  recordings are never reused.
