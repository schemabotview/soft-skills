import type { Section } from '../types'

export const noStoryYet: Section = {
  id: 'no-story-yet',
  title: 'When you have no story',
  scene: 'no-story-yet',
  focus: 'n1',
  slide: `## When you have no story

Three moves, in order of preference. Most people do have the story and have defined the category too narrowly.

### The three
1. **Widen the definition.** "Conflict" includes a code-review disagreement. "Leadership" includes onboarding one person. Start here — it resolves most cases.
2. **Go smaller, stay true.** A two-day example that actually happened beats a six-month one that did not.
3. **Flag the hypothetical.** *"I haven't hit that directly — here's how I'd approach it, and the closest I've come is…"*

### The one thing never to do
- **Do not invent one.** Follow-up questions are where invented stories die, and they always come: *"what did she say when you told her?"*
- A hypothetical, clearly labelled, scores far above a fiction that collapses under one question

> Nearly always, the story exists. You filed it under too small to mention.`,
  narration:
    "Tell me about a time you had a conflict with a colleague — and you draw a blank. Three moves, in order of preference, and the order matters because most people reach for the last one first. Move one: widen the definition. This resolves the great majority of cases. Conflict does not mean a shouting match; a disagreement in a code review about whether to add an index is a conflict, and it is a perfectly good answer. Leadership does not mean managing a team; onboarding one new person is leadership. People have the story and have filed it under too small to mention, which is a judgement they are making about a category, not about the actual answer. Move two: go smaller and stay true. A two-day example that genuinely happened is worth far more than a six-month one that did not, because the small true one survives follow-up questions and the large false one does not. Move three: flag the hypothetical. I have not hit that directly — here is how I would approach it, and the closest I have come is this. That is honest, it demonstrates reasoning, and it scores well. Now the one thing never to do, and I want to be unambiguous about it. Do not invent one. Follow-up questions are where invented stories die, and the follow-up always comes: what did she say when you told her? How long did that take? Who else was involved? Invented stories have no second layer, and the collapse is visible from across the table. A clearly labelled hypothetical beats a fiction every single time.",
}
