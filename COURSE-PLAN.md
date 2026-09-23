# Soft Skills — course plan

The full section plot for the nine-course spine, the scene vocabulary it is drawn with, and the
instructor-notes inventory it was built from. `CLAUDE.md` is the operational summary; this is the
detail.

**90 sections.** Courses 1–5 (50 sections) are the shippable prefix.

---

## What this concept is — and what it deliberately is not

"Soft skills" as a category fails the concept test: no single audience, no through-line, nothing to
draw. This repo is the narrowing that passes it:

> **For the IT professional who has the right answer and still loses the room.**

Everything here serves *spoken professional presence* — clarity, authority, naturalness, voice and
body. Career-adjacent material with no communication surface (time management, negotiation tactics,
productivity systems, resume formatting) is **out of scope** and stays out.

Four decisions taken before a line was authored run through every course below. All four were
settled with the owner on 2026-09-23:

- **Voice and body get a full course each** — 20 sections, against one section each in the source
  workshop. This is the largest departure from the quarry and it is deliberate: spoken delivery is
  the concept's stated purpose, and the Royal Central material supplies the physiology to fill them.
- **Framing first, interview last.** The workshop opens on interview skills; this spine opens on
  *why competence is not the bottleneck* and makes the interview the capstone that uses all eight
  prior courses. The shell plays sections linearly, so the arc has to be a real dependency order.
- **The workshop's career tail is folded, not dropped.** Project skills → `structure` (PPSA).
  Problem solving → `stories`. Leadership, client skills, conflict → `room`. Mindset → split across
  `pressure` and `room`. Every course stays about communication.
- **7-38-55 is stated, then scoped.** The numbers, then what the 1967 experiments actually measured
  (liking, from single words — not technical content), then the claim that survives: when the three
  channels disagree, people believe the voice and the face. The section teaches the finding, not the
  folklore.

**The through-line:** *only a fraction of what lands is your words.* Named in
`presence/three-channels` and `presence/the-7-38-55-rule`. Every later course is downstream of it —
`voice` is the vocal channel, `body` is the visual one, `structure` is what makes the verbal channel
worth hearing, and courses 5–9 are all three under load.

**The worked professional** is a mid-career data/backend engineer. Examples name real situations — a
sprint conflict, a 2 AM outage, a pipeline delivering wrong numbers, a Maven-vs-Gradle disagreement.
No section says "imagine you are giving a presentation".

---

## The scene vocabulary

This concept has no code and no service topology. Left unmanaged, all 90 scenes collapse into the
same three grey cards and an arrow — so the renderers are fixed up front, and every section below
declares which one it uses.

| tag | engine feature | carries |
|---|---|---|
| `[board]` | tiles in a `cols` grid | things that are **simultaneous** — the 5 voice dimensions, the 6 body signals, the 7 presence elements |
| `[compare]` | `kind: 'table'`, data mode | two-column pairs — nervous vs confident, before/after, kills vs wins, question-type → technique |
| `[framework]` | container + `edges` + `flow` | the named step shapes — PREP · STAR · PPF · PASR · LACE · PPSA |
| `[script]` | `kind: 'code'` | **the actual words** — a pitch, an email rewrite, a bridging phrase, a STAR answer, a dialogue |
| `[flow]` | top-level `edges` + `flow` | a genuine mechanism — breath → folds → resonators, adrenaline → body, a fan-out/fan-in |

The **script card** is what makes this concept drawable at all: the left pane holds the sentences
under discussion as a real artifact, the way a code repo's left pane holds source. The engine's
highlighter is language-agnostic — quoted speech paints as a string, a `#` line as a comment, prose
as plain text — so a transcript card renders correctly with no engine change.

### The renderer budget

Per 10-section course, roughly **3 `[board]` · 2 `[compare]` · 2 `[framework]` · 2 `[script]` ·
1 `[flow]`**, and one hard rule:

> **No two adjacent sections use the same renderer.**

Without that rule `body` becomes six comparison tables in a row and the left pane stops carrying
information. The per-course tallies below are checked against the budget before authoring starts.

### Known thin spots

Recorded now rather than discovered at section 60:

- **`listening` is the hardest course to draw.** Six of its ten sections are internal states. The
  answer is dialogue transcripts as `[script]` cards — the other person's line above, the response
  below — plus compare tables. It will be the weakest course visually.
- **`voice` is the opposite.** Breath, resonance, tension and pace are real mechanism, so it carries
  the most `[flow]` and `[board]` work and will likely be the strongest.

---

## Quarry

Two sources, both read in full before plotting:

- **ITC Soft Skills Mastery Workshop** — the instructor's own deck (29 captures), the four MCQ
  assessments, and the two STAR worksheets. A 14-section live workshop. Its frameworks are this
  spine's backbone: 7-38-55, the 3 pillars, PREP, PPSA, PPF, STAR, LACE, PASR, the 5 voice
  dimensions, the 6 body signals, the 7 presence elements, the 6-point virtual etiquette checklist,
  the buying-time phrases, and the before/after pitch makeover.
- **Finding Your Professional Voice: Confidence & Impact** (University of London / Royal Central
  School of Speech and Drama), Modules 1–2 — the physiological half the workshop does not cover: how
  the voice is made, tension and release, alignment, diaphragmatic breath, fight-or-flight, the four
  stages of competence, and the habit-formation rules `body/one-habit-at-a-time` and
  `room/the-practice-plan` are built on. Modules 3–4 are paywalled and were not available.

Narration is authored **fresh** — neither source is a script, and the workshop's own recordings are
not reused. The house rule holds: **nothing cross-references a neighbour by course number**, so
courses 1–5 can ship while 6–9 are still being authored, and a reorder costs nothing until the wavs
exist. After a course's audio is generated its section ORDER is frozen — wav filenames are pinned to
section ids.

---

## 01 · `presence` — Why You're Not Being Heard (10)

*2 board · 3 compare · 1 framework · 2 script · 2 flow*

1. `the-gap` `[flow]` — the engineer who was right and still lost the room; competence was never the bottleneck
2. `hard-and-soft` `[compare]` — hard skills get the interview, soft skills get the job, presence gets the promotion
3. `three-channels` `[flow]` — verbal · vocal · visual, leaving you at once and arriving as one impression
4. `the-7-38-55-rule` `[compare]` — the numbers, what was actually measured, and what survives the caveat
5. `the-other-93` `[script]` — the night-before checklist, annotated with the weight each line actually carries
6. `first-impressions` `[board]` — the seven-second read, and the seven elements scored before you finish a sentence
7. `presence-is-not-personality` `[compare]` — loud is not authoritative; what quiet authority is made of
8. `four-stages` `[framework]` — unconsciously incompetent → consciously incompetent → consciously competent → unconsciously competent
9. `self-audit` `[script]` — the recording, the two blind passes, and naming the one habit you cannot feel yet
10. `you-are-here` `[board]` — the map of the remaining eight courses

## 02 · `voice` — Your Voice Is an Instrument (10)

*3 board · 2 compare · 1 framework · 2 script · 2 flow*

1. `no-perfect-voice` `[compare]` — the goal is options, not an accent; you keep the voice you have
2. `how-voice-is-made` `[flow]` — breath → vocal folds → resonators, and why each stage is trainable
3. `tension` `[board]` — the jaw, throat and shoulders that strangle the sound; the release drills
4. `breath` `[flow]` — diaphragmatic breathing: one habit that moves tone, volume and nerves at once
5. `the-five-dimensions` `[board]` — pace · pitch · tone · pause · energy, the dial board for everything after
6. `pace` `[compare]` — 130–150 wpm; why fast reads as anxious and measured reads as certain
7. `pitch-and-tone` `[script]` — the upward inflection that turns a statement into a question; ending downward
8. `pause` `[framework]` — the two-second silence before the point; the pause as punctuation
9. `filler-words` `[script]` — um · basically · you know: what they signal, and replacing them with silence
10. `voice-on-camera` `[board]` — the call flattens you; mic, headset, and lifting energy to compensate

## 03 · `body` — What They See Before You Speak (10)

*3 board · 3 compare · 1 framework · 2 script · 1 flow*

1. `always-being-read` `[script]` — four silent minutes, transcribed: what the room read while you said nothing
2. `alignment` `[flow]` — feet, knees, spine: grounding as the root of a steady voice
3. `posture` `[compare]` — upright with a slight forward lean; what slouching and over-leaning each say
4. `eye-contact` `[board]` — three to five seconds per person, breaking gently, never darting
5. `hands` `[compare]` — gestures that emphasise against gestures that leak
6. `face` `[board]` — the nod, the genuine smile, and the resting frown you do not know you have
7. `nervous-vs-confident` `[compare]` — the two-column read: what each signal actually says about you
8. `entry-and-exit` `[framework]` — walking in with purpose, and owning the last ten seconds
9. `on-camera-body` `[board]` — camera at eye level, look at the lens, sit back: the six-point checklist
10. `one-habit-at-a-time` `[script]` — you cannot fix six signals at once; the little-and-often loop

(§1 and §2 were both tagged `[flow]` when this plan was first written — an adjacency violation, caught
and retagged before authoring. §5 moved board → compare for the same reason against §4.)

## 04 · `structure` — Saying It Simply (10)

*2 board · 2 compare · 3 framework · 3 script*

1. `curse-of-knowledge` `[compare]` — you cannot un-know the detail, which is why experts explain worst
2. `technical-overload` `[script]` — "200 ms in the retry handler" versus "checkout was slow for 4% of users"
3. `prep` `[framework]` — Point · Reason · Example · Point: the default shape of a spoken answer
4. `answer-first` `[script]` — leading with the conclusion, and why engineers instinctively lead with the journey
5. `ppsa` `[framework]` — Project · Problem · Solution · Achievement: the shape for describing your work
6. `signposting` `[board]` — naming the shape before you fill it: "there are three things here"
7. `brevity` `[script]` — the two-sentence status; halving an answer without losing it
8. `hedging` `[compare]` — "I think maybe possibly", and the passive voice that disowns your own work
9. `in-writing` `[framework]` — the subject line, the ask, and why walls of text go unread
10. `the-audience-dial` `[board]` — one fact, three versions: engineer · manager · client

## 05 · `listening` — Listening Is the Other Half (10)

*2 board · 3 compare · 1 framework · 3 script · 1 flow*

1. `hearing-vs-listening` `[compare]` — sound entering your ear is not attention; the difference is intent
2. `listening-to-respond` `[flow]` — composing your reply while they talk, and what it costs you
3. `lace` `[framework]` — Listen · Absorb · Clarify · Execute
4. `paraphrase` `[script]` — "so what I'm hearing is…": the cheapest trust-builder available
5. `the-clarifying-question` `[compare]` — one specific question beats three guesses
6. `what-is-not-said` `[board]` — hesitation, the facial shift, the requirement nobody wrote down
7. `requirements-failures` `[script]` — why IT projects break on listening long before they break on code
8. `interrupting` `[compare]` — the cost of the cut-in, and letting a thought land
9. `in-meetings` `[board]` — the notes, the phone face-down, the camera on
10. `listening-as-seniority` `[script]` — the senior habit: ask, reflect, then answer

## 06 · `pressure` — Thinking Under Pressure (10)

*2 board · 2 compare · 2 framework · 3 script · 1 flow*

1. `fight-or-flight` `[flow]` — what adrenaline does to breath, pitch and working memory
2. `the-rush` `[compare]` — the average candidate rushes the answer and loses the marks
3. `silence-is-not-weakness` `[board]` — the pause is structured thinking made visible
4. `pasr` `[framework]` — Pause · Acknowledge · Structure · Respond
5. `buying-time-phrases` `[script]` — four phrases that buy seconds gracefully, and keeping them natural
6. `technique-per-question` `[compare]` — straightforward → transition · complex → slow down and structure · behavioural → pause and STAR
7. `i-dont-know` `[script]` — acknowledge honestly, then bridge to what you do know
8. `being-challenged` `[framework]` — holding a position under pushback without defending or folding
9. `recovering` `[script]` — the fumbled sentence, the broken demo: resetting mid-answer
10. `the-pre-brief` `[board]` — ten minutes before: breath, alignment, one rehearsed opening

## 07 · `stories` — The Stories You Tell About Your Work (10)

*2 board · 3 compare · 2 framework · 3 script*

1. `why-stories` `[compare]` — a claim is forgettable; a specific is not
2. `star` `[framework]` — Situation · Task · Action · Result
3. `action-is-most-of-it` `[script]` — where answers go wrong: all setup, no actual doing
4. `i-not-we` `[compare]` — owning your contribution without erasing the team
5. `quantifying` `[board]` — 40% faster, 15 minutes to diagnose, zero rework: finding the number
6. `the-failure-story` `[script]` — they are screening for self-aware, not flawless
7. `no-story-yet` `[framework]` — three moves for when you genuinely have no example
8. `the-story-bank` `[board]` — six stories that cover most of what you will ever be asked
9. `the-behavioural-map` `[compare]` — the question, what it is testing, and which story answers it
10. `star-is-not-for-everything` `[script]` — STAR is for behavioural questions; what technical questions want instead

(§6 and §7 were both `[script]` as first planned, and §9 `[framework]`; retagged before authoring so no
two adjacent sections share a renderer.)

## 08 · `pitch` — Introducing Yourself (10)

*2 board · 2 compare · 2 framework · 4 script*

1. `who-are-you` `[compare]` — the question you answer most often, and usually answer worst
2. `not-your-resume` `[script]` — the pitch earns a follow-up question; it does not summarise everything
3. `ppf` `[framework]` — Past · Present · Future
4. `the-open` `[script]` — role, years, domain in one sentence that is not a list of technologies
5. `the-present` `[board]` — the current project and one measurable achievement
6. `the-future` `[script]` — why THIS role, rather than where the industry is going
7. `ninety-seconds` `[framework]` — the length, and what gets cut first
8. `before-and-after` `[compare]` — the same person, two pitches, side by side
9. `pitch-variants` `[board]` — the interview open, the networking line, the client intro, the profile summary
10. `delivering-it` `[script]` — rehearsed but not recited; where voice and body land on the words

## 09 · `room` — Owning the Room (10)

*3 board · 3 compare · 1 framework · 2 script · 1 flow*

1. `the-interview-as-a-room` `[board]` — everything so far, applied to the highest-stakes forty minutes
2. `reading-the-room` `[compare]` — noticing the interviewer's energy, and matching rather than mirroring
3. `virtual-etiquette` `[board]` — the six-point checklist for the call that decides it
4. `stakeholders` `[compare]` — what a manager, a client and an executive each actually want from you
5. `disagreeing-up` `[script]` — challenging a decision without becoming the difficult one
6. `conflict` `[framework]` — the one-to-one, the evidence, and separating the position from the person
7. `bad-news` `[script]` — the outage, the slip, the wrong estimate: early and straight
8. `leading-without-a-title` `[compare]` — influence as a communication skill
9. `the-practice-plan` `[board]` — five minutes a day, one habit at a time, in moments already in your day
10. `the-walk` `[flow]` — one engineer, one project, kickoff to executive readout, using all nine courses
