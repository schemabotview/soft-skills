import type { Section } from '../types'

export const iDontKnow: Section = {
  id: 'i-dont-know',
  title: 'When you genuinely do not know',
  scene: 'i-dont-know',
  slide: `## When you genuinely do not know

Three options. Two of them lose, for opposite reasons.

### Why the first two fail
- **The bluff** — *"probably some kind of consensus protocol"*. They will follow up, and now you are exposed twice.
- **The collapse** — *"I don't know."* True, and it ends the exchange. You have given them nothing to score.
- Interviewers ask questions you cannot answer **on purpose.** They are testing the response, not the fact.

### The bridge, in three moves
1. **Name the gap plainly** — *"I haven't worked with that directly"*
2. **Move to adjacent ground you do own** — *"What I have done is the equivalent in Postgres"*
3. **Show the reasoning** — *"the thing I'd check first is whether writes are quorum or leader-only"*

> Honesty is the floor, not the answer. What they want to see is what you do next.`,
  narration:
    "You will be asked things you cannot answer, and in interviews you will be asked them deliberately — the unanswerable question is a standard instrument, and what it is measuring is not the fact. It is measuring what you do next. So, three options. The bluff: probably some kind of consensus protocol. It sounds plausible for about four seconds, and then they follow up, because follow-up is exactly what an interviewer does with a vague answer. Now you are exposed twice, and the second time is much worse, because now there is a question about whether you know the limits of what you know. The collapse: I don't know. It is honest, and honesty is genuinely the floor here — but it ends the exchange. You have handed them nothing to score, and the awkward silence afterwards is doing you no favours either. Then the bridge, which is three moves. Name the gap plainly: I have not worked with that directly. No apology, no wincing, just the fact. Move to adjacent ground you actually own: what I have done is the equivalent in Postgres. And then show the reasoning: the thing I would check first is whether writes are quorum or leader-only. Look at what that last move does. You have just demonstrated that you can reason about an unfamiliar system from first principles, which is a substantially more valuable thing to have shown than knowing the trivia would have been. Same admission. One of the three is a demonstration.",
}
