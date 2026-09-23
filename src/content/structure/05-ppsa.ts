import type { Section } from '../types'

export const ppsa: Section = {
  id: 'ppsa',
  title: 'PPSA — describing your work',
  scene: 'ppsa',
  focus: 'a',
  slide: `## PPSA — describing your work

Project · Problem · Solution · Achievement. A different job from PREP: this is for *"tell me about what you built"*, not *"what do you think?"*

### The four beats
- **Project** — what it was, in one line. Enough context to place it, no more.
- **Problem** — what was actually wrong. No problem, no story.
- **Solution** — what **you** did about it
- **Achievement** — what changed, with a number if one exists

### Where it goes wrong
- **The A gets dropped.** Engineers describe the work and stop, leaving the listener to guess whether it mattered.
- The P is oversized — five minutes of context before anything happens
- The S becomes *we*, and your contribution disappears into the team

> "I built the ingestion pipeline" is not a story. It is a job description.`,
  narration:
    "PPSA is for a different question than PREP. PREP is for what do you think — an opinion, a recommendation, an answer. PPSA is for tell me about something you built, which is a request for a story, and it comes up constantly: in interviews, in performance reviews, when a new manager asks what you have been working on. Project, Problem, Solution, Achievement. Project: what it was, in one line. Just enough to place it. Problem: what was actually wrong — and this is the load-bearing beat, because no problem means no story. If nothing was difficult, there is nothing to tell. Solution: what you did about it. And Achievement: what changed as a result, with a number if a number exists. Now, three ways this goes wrong, and the first is by far the most common. The A gets dropped. Engineers describe the work in careful detail and then simply stop, leaving the listener to work out for themselves whether any of it mattered — and listeners do not do that work, they just move on. Second, the P is oversized: five minutes of architecture context before anything actually happens, and by then attention is gone. And third, the S quietly becomes we. We migrated the pipeline, we improved the latency. Your specific contribution vanishes into the team, and the person assessing you cannot find you in your own story. I built the ingestion pipeline is not a story. It is a job description.",
}
