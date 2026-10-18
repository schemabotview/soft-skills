import type { Section } from '../types'

export const structureSection: Section = {
  id: 'structure',
  title: 'Organising an explanation with reasons and detail',
  scene: 'structure',
  focus: 'point-first',
  slide: `## Point first, then reasons

Explanations often come out in **story order**: what happened first, then next, and the point at the end. Listeners do better with the **point first**, then the reasons, then detail on request.

### Story order
- "So on Monday, Jordan… and then the retry…"
- The listener does not know what to listen **for**
- The point, if it arrives, arrives when attention is lowest
- Detail first can sound like an excuse

### Point first
- **Point** — "Thursday's demo is at risk."
- **Reasons** — the load failed twice; the fix needs Jordan until Wednesday
- **Ask** — "Can we decide today?"
- Offer detail when asked, not before
- Two or three reasons are plenty; more dilute the strongest`,
  narration:
    "Once the main point is clear, the next question is order. Most of us explain things in story order, the order they happened to us. So on Monday, Jordan noticed the load was late, and then the retry failed, and later it turned out, which meant that, and finally, so Thursday is at risk. The listener spends the whole explanation not knowing what to listen for, and the point, when it arrives, arrives just as their attention drifts. Turn it round. Put the point first: Thursday's demo is at risk. Then the reasons, two or three at most: the load failed twice, and the fix needs Jordan until Wednesday. Then the ask, if there is one: can we decide today? Detail, such as which job failed and how the retry behaved, comes when someone asks for it, and Alex may not need it at all. Point first can feel abrupt the first few times. In practice it is a courtesy: it tells people why they are listening, and lets them stop you when they have heard enough. Next, explaining technical ideas to people outside the field.",
}
