import type { Section } from '../types'

export const technicalOverload: Section = {
  id: 'technical-overload',
  title: 'Technical overload',
  scene: 'technical-overload',
  slide: `## Technical overload

Both versions on the left are **true**. Only one of them answers the question the listener is holding.

### What the engineer version gets wrong
- Nothing, technically. It is exactly right, and it belongs in the post-mortem.
- It answers *what happened in the system*. They asked *what happened to my customers*.
- Latency figures and component names are the **evidence**, not the finding
- Delivered to the wrong audience, precision reads as evasion — as if you are hiding behind detail

### The translation
- **Effect** before cause: who was affected, how many, for how long
- State the **status** early: fixed, not fixed, or being worked on
- Answer the unasked question: *"is my data safe?"*, *"will it happen again?"*
- Keep the detail available. Offer it; do not lead with it.

> You are not dumbing it down. You are answering the question they asked.`,
  narration:
    "Look at the two versions on the left, and notice first that they are both completely true. The engineer version is not wrong, it is not sloppy, and it absolutely belongs in the post-mortem. That is what makes this hard — the failure here is not inaccuracy. The engineer version answers the question, what happened inside the system. The client asked a different question, which was, what happened to my customers. The p99, the retry handler, the connection pool — those are the evidence for the finding. They are not the finding. And here is the part worth internalising: delivered to the wrong audience, precision reads as evasion. When a client asks how bad it was and gets a sentence full of component names, what they experience is somebody hiding behind detail, and they will start pushing harder — not because they want more technical depth, but because they have not yet got an answer. So the translation has a few moves. Effect before cause: who was affected, how many, for how long. Status early: it is fixed, or it is not fixed, or we are on it. Then answer the question they did not ask out loud but are definitely holding — is my data safe, and will this happen again. And keep the detail available; offer it, do not lead with it. Because the objection people always raise here is that this is dumbing it down. It is not. It is answering the question that was actually asked.",
}
