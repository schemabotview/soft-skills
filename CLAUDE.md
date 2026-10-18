# CLAUDE.md — soft-skills

> The workspace-level `CLAUDE.md` (one level up, in `graphl-workspace`) holds the invariants that
> span every repo. This file is only what is true *here*.

## What this repo is

The GraphL concept app for **Soft Skills**: twelve courses, 76 sections, following
`SOFT-SKILLS-COURSE-PLAN.md` chapter for chapter. `AUTHORING-PLAN.md` is the working plan: course ids,
the recurring cast, scene strategy, budgets and the density check. A **section** is
`(scene, slide, narration)` and is one segment of the course video. One section = one slide.

The render engine is `@graphlearning/flow`; the app shell is `@graphlearning/shell`. Both are
**published packages pinned by version** (`flow@^1.2.0`, `shell@^0.8.0`). This repo's own surface is
`src/content/`, `src/scenes/`, `src/main.tsx` and `src/theme.css` — nothing else.

## Route contract and course arc

Routes are `#/<courseId>-<sectionId>`; `#/` is the catalog. Course ids, in syllabus order:

| # | course id | chapter | sections |
| --- | --- | --- | --- |
| 1 | `self-awareness` | Self-Awareness, Emotions, and Professional Judgement | 6 |
| 2 | `listening` | Active Listening and Clarifying Questions | 7 |
| 3 | `speaking` | Clear Spoken Communication and Assertiveness | 6 |
| 4 | `writing` | Professional Writing and Asynchronous Communication | 6 |
| 5 | `teamwork` | Teamwork, Inclusion, and Productive Meetings | 7 |
| 6 | `ownership` | Ownership, Prioritisation, and Time Management | 6 |
| 7 | `problem-solving` | Critical Thinking and Collaborative Problem-Solving | 7 |
| 8 | `feedback` | Giving and Receiving Feedback | 6 |
| 9 | `conflict` | Conflict Resolution and Negotiation | 7 |
| 10 | `presenting` | Presentation, Storytelling, and Questions | 6 |
| 11 | `influence` | Leadership and Influence Without Formal Authority | 6 |
| 12 | `growth` | Adaptability, Career Conversations, and Continued Growth | 6 |

The recurring example is a small team delivering a reporting dashboard for a business partner. Its
people come from one shared module so each person looks the same in every course (see
`AUTHORING-PLAN.md` for the cast). Refer to every person by name or **they/them**.

**Scene inventory:** none yet. The template's `demo` course is still registered only because the
shell's catalog throws on an empty registry; it is deleted when `self-awareness` lands.

## Invariants — do not break

- **Never write `x` or `y`.** Scenes are declarative: nodes, edges, nesting. `computeLayout` is not
  exported, so there is no way around this, and that is the point — reproducible frames.
- **Do not reimplement the shell.** `SectionView`, `CourseIndex`, `SlidePanel` and the hooks are
  withheld on purpose. The route contract (`#/<courseId>-<sectionId>`, `?capture=1`,
  `window.__scene.plan()`) is what every recorder drives, and it holds only if every repo composes
  the pieces identically.
- **`SiteHeader` goes on the catalog page only** — never on a section. A section is a video frame.
- **Three stylesheets, in cascade order**, imported in `main.tsx`. The order is load-bearing:
  1. `@graphlearning/flow/styles.css` — react-flow plus the IBM Plex faces the engine is
     *calibrated* to. `codeMetrics` sizes code nodes from a measured 9.02px glyph advance, so a
     different monospace face mis-sizes every code card. Carries the `.tok-*` colours.
  2. `@graphlearning/shell/styles.css` — the shell paints the canvas (`--bg: #1a1d23`; SceneView
     draws its dots at `#2a2f38` assuming a dark surface).
  3. `./theme.css` — this repo's three brand tokens. **Last, or the brand loses to the defaults.**
- **`file:../ui-flow` / `file:../ui-shell` must never be committed.** Local engine work only; CI has
  no sibling checkout.
- **Narration is never hand-produced.** `.tts` → `.wav` via Colab + Chatterbox only.

## Layout rules the frames actually care about

`npm run check` (`scripts/check-content.mjs`) models four silent failures — each builds green and
breaks only on screen. Its comments carry the measured constants; the short version:

- **Leaf cards are a fixed 210×96** with a ~134px text column. Only containers grow to fit. Keep the
  `label` to 2 wrapped lines; 2 label lines + 2 sub lines fits. Watch unbreakable tokens — `_`, `.`
  and `/` are **not** break opportunities in CSS, so `snake_case` and paths overflow sideways in a
  way the height model cannot see.
- **Slides do not scale to fit.** Type size is fixed by the frame (`zoom = paneWidth / 806`,
  width-proportional only), so an over-long slide **clips at the bottom** with no error.
  `check` fails over 1000 modelled design px; the band below gives the floor too. Bullets cost far
  more than prose of the same length.
- **A `focus:` that names no node in its scene is a silent no-op** — nothing lights up.
- **`icon:` names are NOT guarded.** The engine's lucide registry is `Record<string, LucideIcon>`
  and does not enumerate its keys, so a wrong name type-checks, passes `check`, builds, and renders
  a card with no glyph. There are ~75 valid keys; copy one off an existing scene rather than
  guessing a lucide name (`volume`, `move`, `maximize` and `git` are all absent, for instance).
- **A section with no wav narrates silence** and records a silent segment. Audio resolves purely by
  convention: `public/audio/<course>/<section-id>.wav`.

What `check` does *not* model: an edge label landing on top of a card, or whether the frame is too
empty. Look at the route.

### Density targets — the frame must use the space it has

The guarded failure is a slide that overflows. The unguarded one is its opposite: a frame that
builds green, reads correctly, and leaves half its pane empty. Against the ~1080 design px pane:

| | target | why |
| --- | --- | --- |
| slide height | **80–95 %** of the pane (≈ 865–1025px; `SLIDE_H_MAX` caps the top at 1000) | below 80 % the right half looks empty; above ~95 % it risks clipping |
| scene, binding axis | ≥ 0.85 of the pane | the board should reach the edge it is limited by |
| scene, area | ≥ 0.55 of the pane (w × h) | a wide board that fills the width but a third of the height wastes the pane |
| eyebrow | no node under the top-left eyebrow label | boards that bind on height run up to y≈30 |

Levers: **add real content, not padding**; **restack** a board toward the pane's ~1:1 aspect; lower
scene `padding` to 0.04 for boards that float, **raise** it (0.12–0.17) for tall boards that touch
the eyebrow.

`npm run density` measures all four on the rendered routes (headless Chromium, 1920×1080,
`?capture=1`; set `PUPPETEER_EXECUTABLE_PATH` if puppeteer's own browser was not downloaded). A board
that is sparse on purpose carries `// density-accept: <reason>` in its section file. The two ratios
come from one repo's ~80 frames of diagram-and-code-card boards. Targets, not thresholds.

Calibration: the `check` slide model is the template's (12.4 px per character). In `apache-airflow`
it ran 10–15 % high and that repo moved to 12.0 after measuring 13 slides. Re-measure here during the
pilot before changing it; until then author to **940–995 modelled px**, then confirm with `density`.

Engine behaviours found in `apache-airflow` (flow 1.3.0), which apply here unchanged:
- A container with `edges` **ignores `cols`** and stacks its children in one line. For a 2×2 of
  steps, drop the edges and number the cards with `badge: '01'…`.
- Two opposed edges between the same pair route the return edge **through both cards' labels**.
  Use one edge with `bidirectional: true`.
- `dir:` on a scene edge does not move its target; to stack two boards, nest them in one container.
- **`badge` renders only on container headers.** On a leaf card it is ignored, so a leaf badge must
  never carry content (a time, a map index): put that in the `sub`. Grid order carries sequence.
- A **3-column card row under a table** is wider than the table, sets the board width, and shrinks the
  table's type. Stack those cards (`cols: 1` or `2`) so the table sets the width.
- An **`LR` chain of 4+ cards** makes a thin board with low area; prefer `TB`, or a `cols: 2` grid.
- `padding: 0.04` helps wide boards; on a tall (height-bound) board it pushes nodes under the
  eyebrow, which `density` reports as HIT. Leave tall boards at the default padding.
- First drafts consistently rendered at 0.70–0.78: write slides with two ### blocks of 4–5 bullets.

### Dialogue and written artefacts (probed for this repo)

This course shows conversations and messages, not systems. Rendered side by side:
- **Cards** — speaker as `label`, a short quote as `sub` — read best. `check` holds a sub to ~4
  wrapped lines of ~20 characters, so keep a quote under ~70 characters.
- **Tables** right-align cells in monospace: fine for option comparisons, poor for speech.
- **List cards** suit questions and options, but items render small (14px); keep to 3–5 items.
- **Code cards are not for prose.** The tokenizer colours English words such as "and" and "when" as
  keywords. Show a message as a set of cards, one per part (opening, update, request).

## Guards before handing over

```sh
npm run build && npx tsc --noEmit && npm run check && npm run density
```

All four are a **floor, not proof** — they pass on frames that are visually wrong. The rendered
route is the real bar, and the owner reviews it.

## Working agreement

- **Author the whole unit, then hand over the route.** Scenes, slides and narration together.
- **No ASCII sketches of scenes.** A sketch cannot show what the layout engine will do, which is the
  only thing worth looking at.
- **No silent scaffolding**, no work outside the ask. Say plainly what was built, what was verified,
  and what was left out.
