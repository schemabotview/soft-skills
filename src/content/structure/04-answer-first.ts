import type { Section } from '../types'

export const answerFirst: Section = {
  id: 'answer-first',
  title: 'Answer first',
  scene: 'answer-first',
  slide: `## Answer first

Engineers narrate in **discovery order**. Almost nobody wants to receive it that way.

### Why we do it
- It is the order it happened in, so it is the order it is stored in
- The journey is where the **work** was — leading with the answer feels like hiding the effort
- There is a real fear of being wrong, and a long wind-up delays the moment of commitment
- In code review, showing your reasoning *is* the deliverable. In a meeting, it is not.

### The inversion
- Conclusion → reasons → detail on request
- If you are genuinely unsure, say **that** first: *"I'm about 70% on this — here's why."*
- Then stop. The detail you were going to give unprompted is what **questions** are for.

> Nobody thinks you did less work because you said the answer early.`,
  narration:
    "Watch the two versions on the left, because the first one is how nearly every engineer I have ever worked with naturally tells it. I started with the logs, then I checked the dashboards, then I noticed the pool was saturating — and four minutes later, so I think maybe we should raise the pool size. That is discovery order. It is the order it happened in, so it is the order it is stored in, and telling it any other way requires actual effort. But there are two more reasons we do it, and they are worth naming because they are not silly. The first is that the journey is where the work was. You spent three hours in those dashboards. Leading with the one-line answer feels like throwing all of that away — like hiding the effort. The second is fear of being wrong: a long wind-up delays the moment where you commit to a position, and delaying that moment feels safer. And there is a third thing, which is that in code review, showing your reasoning genuinely is the deliverable. So we are trained into it. In a meeting it is not the deliverable. So: conclusion first, then reasons, then detail only if it is asked for. And if you are genuinely uncertain, say that first rather than burying it — I am about seventy percent on this, here is why. That is not hedging, that is calibration, and senior people respect it. Then stop. The detail you were about to volunteer is what questions are for. And nobody has ever concluded you did less work because you said the answer early.",
}
