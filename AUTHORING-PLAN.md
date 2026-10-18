# Authoring plan — Soft Skills

How `SOFT-SKILLS-COURSE-PLAN.md` (12 chapters / 76 sections) becomes 12 GraphL courses of
`(scene, slide, narration)` sections, and how each frame is checked for density before handover.
The process is the one `apache-airflow` used for its 84 sections; what differs here is the content:
conversations and written artefacts rather than systems.

## 1. Mapping

| syllabus | repo |
| --- | --- |
| chapter | course, `src/content/<courseId>/` + `src/scenes/<courseId>/` (ids in `CLAUDE.md`) |
| numbered section | one section file `NN-<section-id>.ts` — one slide, one scene, one narration |
| objective / outcome / bridge | first section's lead-in, last section's closing block, narration's last sentence |
| worked illustrations | the scenes: each lands on the section it explains |
| sources and scope | not frames; boundaries shape the wording (no diagnosis, no legal advice) |

Sections stay one-to-one with the syllabus (6, 7, 6, 6, 7, 6, 7, 6, 7, 6, 6, 6).

## 2. The recurring cast

One shared module, `src/scenes/shared/people.ts`, so each person looks the same in every course.
Names are deliberately varied and gender-neutral in use; narration says **they/them** or the name.

| id | person | role in the dashboard project |
| --- | --- | --- |
| `priya` | Priya | business partner who asked for the dashboard |
| `sam` | Sam | analyst building it; the learner's main point of view |
| `jordan` | Jordan | data engineer who owns the delayed data source |
| `alex` | Alex | team lead and support owner |
| `mei` | Mei | new team member, joins mid-project |

The contrasting settings from the syllabus (a student group project, a customer-support handover) get
their own small casts where they appear, so the main story is not overloaded.

## 3. Section shape

The syllabus method is objective → situation → annotated conversation or artefact → alternative
response and likely consequences → summary → bridge. In one frame:

- **Slide** — `##` title, a one-sentence claim, then two `###` blocks: what is happening (the
  behaviour and why), and the alternative and its likely consequences. 4–5 bullets each.
- **Scene** — the evidence, in one of four board shapes (below). `focus:` lights the card the
  narration is about.
- **Narration** — ~150–180 words, plainly spoken, ending on the bridge. It explains intent, audience,
  power and uncertainty before recommending wording, and offers plausible responses rather than one
  perfect script.

## 4. Scene strategy

Four board shapes, chosen by what the section shows. A probe of the engine's node types for dialogue
(results in `CLAUDE.md`) decided the building blocks: **cards** for quotes, **tables** for comparisons,
**list cards** for questions and options, and **no code cards** for prose.

| shape | built from | used for |
| --- | --- | --- |
| **Two responses** | a situation card, then two containers (one `warn`, one `service`) each with a reply card and 2–3 consequence cards | the core "alternative response" move: most chapters |
| **Anatomy** | a container of cards, one per part: opening, evidence, risk, request | messages, updates, requests, feedback (SBI), interview answers (STAR) |
| **Comparison** | a `table`, with a small card row under it, stacked so the table sets the width | option tables, priorities, channels, conflict types |
| **Timeline** | a 2-column grid of step cards in reading order | the dashboard story across a chapter, handovers, negotiation steps |

Content rules that keep scenes honest to the syllabus:
- Quotes stay short (under ~70 characters) and plausible; no scene implies one perfect script.
- No personality labels, diagnoses, or assumptions from appearance, culture, accent or disability.
- Sensitive material (chapter 9's harassment, discrimination and safety routes) is named plainly and
  routed to organisational support; it is never framed as a negotiation.
- Frameworks (SBI/SBII, BATNA, STAR) are presented as aids, with their sources, not guarantees.

## 5. Density check

Unchanged from `apache-airflow`, and already in this repo as `npm run density`.

**Layer 1 — static, while writing.** `npm run check` fails a slide over 1000 modelled px. Author to
**940–995 modelled px**; the template's model ran 10–15 % high in `apache-airflow`, so the pilot
measures it here before anything changes.

**Layer 2 — rendered, before handover.** `npm run density [course…]`: headless Chromium, 1920×1080,
`?capture=1`, every route, measured against the `CLAUDE.md` targets:

| metric | target |
| --- | --- |
| slide fill (scaler ÷ panel height) | 0.80–0.95 |
| scene binding axis (node union ÷ pane, larger axis) | ≥ 0.85 |
| scene area (node union w × h ÷ pane) | ≥ 0.55 |
| eyebrow (no node under the top-left label) | clear |

It exits non-zero on any FAIL; `// density-accept: <reason>` in a section file reports ACCEPTED.
Baseline on this scaffold, the template's demo sections:

```
FAIL  slide 0.61  bind 0.89  area 0.27  demo-what-a-section-is
FAIL  slide 0.72  bind 0.89  area 0.70  demo-scene-kinds
```

**Layer 3 — by eye.** A contact sheet of every route in a course, read before each commit, because
neither check sees an edge label over a card or text that is technically present but too small.

**Density risk specific to this course.** Conversation boards are sparse by nature: two quotes and a
few consequences fill a third of the pane. The two-responses shape is built to fill it (situation on
top, two containers side by side, consequences under each, ~1:1 aspect). Where a frame is genuinely a
single short quote, add the context that makes it meaningful (who, what was at stake) rather than
padding, or mark it `density-accept` with the reason.

## 6. Order of work

1. **Pilot — course 1 `self-awareness` (6 sections). Done, awaiting review.** Shared cast, six scenes
   using all four shapes, slides, narration; demo course deleted. All six pass `density`:

   ```
   PASS  0.80  0.89  0.67  clear  self-awareness-behaviours-in-context
   PASS  0.80  0.89  0.70  clear  self-awareness-evidence-of-strengths
   PASS  0.93  0.89  0.68  clear  self-awareness-observation-vs-interpretation
   PASS  0.85  0.89  0.62  clear  self-awareness-triggers-and-responses
   PASS  0.83  0.89  0.69  clear  self-awareness-perspective-taking
   PASS  0.84  0.89  0.73  clear  self-awareness-assertiveness-and-boundaries
   ```

   Calibration decided: keep the template's 12.4 (reasons in `CLAUDE.md`).
2. **Courses 2–12, one commit per course**, in syllabus order, each with scenes, slides, narration, a
   `titles.json` entry, a passing density run and a contact-sheet review.
3. **Audio** — one Colab + Chatterbox pass per finished course.
4. **Deploy** — enable Pages, add the `catalog.json` listing in `ui-graphl`.

## 7. Decisions for the owner

- **Brand**: `--brand #e8590c` (warm orange), `--accent-2 #66d9e8` (cyan).
- **Course ids** in `CLAUDE.md` — they become public URLs.
- **The cast**: names and roles above.
- ~~Slide-model calibration~~ — decided in the pilot: keep 12.4.
