# Soft Skills — GraphL concept app

Visual courses on **professional communication presence for IT professionals**: the left pane is a
diagram, table or script card; the right pane is a slide; each section is one narrated video segment.

> For the IT professional who has the right answer and still loses the room.

**Nine courses, 90 sections, 0 wavs** — live at **[graphl.in/soft-skills](https://graphl.in/soft-skills/)**.
Narration is written but not yet recorded, so the audio control is inert and each section requests a
wav that is not there. Deploy is the standard Pages workflow: push to `main`, and
`.github/workflows/deploy.yml` builds and publishes `dist/`.

## The model

**concept ⊃ course ⊃ section.** A section is the atomic unit of a video — one scene, one slide, one
narration clip. The scene is rendered by `@graphlearning/flow`; the app shell (router, section view,
slide panel, catalog, narration) is `@graphlearning/shell`. This repo supplies content and a brand.

Nine courses, 90 sections planned — see [`COURSE-PLAN.md`](./COURSE-PLAN.md):

1. **Why You're Not Being Heard** — the three channels, 7-38-55, first impressions, the competence ladder
2. **Your Voice Is an Instrument** — breath, tension, pace, pitch, tone, pause, fillers
3. **What They See Before You Speak** — alignment, posture, eyes, hands, face, stillness
4. **Saying It Simply** — PREP, PPSA, technical overload, brevity, hedging
5. **Listening Is the Other Half** — LACE, paraphrase, clarifying questions, what isn't said
6. **Thinking Under Pressure** — the pause, PASR, buying time, "I don't know"
7. **The Stories You Tell About Your Work** — STAR, quantifying, the story bank
8. **Introducing Yourself** — PPF, the ninety-second pitch, before and after
9. **Owning the Room** — interviews, stakeholders, disagreement, conflict, leading without a title

Courses 1–5 are the shippable prefix. **All nine are authored — 90 sections, 90 scenes.** Narration
is written but not yet recorded: `public/audio/` is empty.

## Sources

Built from two quarries, both read in full before the spine was plotted: the **ITC Soft Skills
Mastery Workshop** (deck, assessments, STAR worksheets) for the frameworks, and **Finding Your
Professional Voice: Confidence & Impact** (University of London / Royal Central School of Speech and
Drama) for the voice physiology. Narration is written fresh — neither source is a script.

## Run it

```bash
npm install
npm run dev          # http://localhost:5173
```

Routes are `#/<courseId>-<sectionId>` — e.g. `#/presence-three-channels`. `→` / `←` move between
sections, `Space` toggles narration.

```bash
npm run build        # must stay clean
npx tsc --noEmit     # must stay clean
```

There is no test runner. The bar for a change is **build clean and visually correct in the browser**
at the relevant route.
