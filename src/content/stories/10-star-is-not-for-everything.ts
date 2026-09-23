import type { Section } from '../types'

export const starIsNotForEverything: Section = {
  id: 'star-is-not-for-everything',
  title: 'STAR is not for everything',
  scene: 'star-is-not-for-everything',
  slide: `## STAR is not for everything

The predictable failure right after learning a framework: applying it to a question that wants a different shape.

### Two questions, two shapes
- *"Tell me about a time you disagreed with a manager."* → **STAR.** This is what it is for.
- *"How would you design a rate limiter?"* → **not STAR.** *"So the situation was, at my last company…"* is the wrong sound entirely.
- Technical questions want **requirements → options → choice → trade-offs**. A structure, not a story.

### The tell
- **Past tense** in the question means a story: *tell me about a time, describe a situation, give me an example*
- **Conditional** means a structure: *how would you, what would you do if, walk me through designing*
- If you are unsure, ask. *"Do you want a specific example, or how I'd approach it generally?"* is a good question, not a weak one.

> Behavioural questions want a story. Technical questions want a structure. Same person, different shape.`,
  narration:
    "Let's close with a correction, because there is a completely predictable failure right after somebody learns a framework, which is that they apply it to everything. Two questions. Tell me about a time you disagreed with a manager — that is STAR, that is exactly what STAR is for, run it. How would you design a rate limiter? If you answer that with, so the situation was, at my last company — you have made an audible mistake, and the interviewer's face will change. A technical design question does not want a story. It wants requirements, then options, then a choice, then the trade-offs you accepted. It wants a structure, and the two are not the same shape at all. Now, the tell is grammatical, which makes it reliable under pressure. Past tense in the question means they want a story: tell me about a time, describe a situation, give me an example of. Conditional means they want a structure: how would you, what would you do if, walk me through designing. And if you genuinely cannot tell, ask. Do you want a specific example from my experience, or how I would approach it in general? That is a good question, not a weak one — it is the clarifying question from the listening course, and it costs you six seconds to avoid answering the wrong question for three minutes. Same person, same preparation. Different shape, chosen deliberately.",
}
