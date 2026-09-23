import type { Section } from '../types'

export const theWalk: Section = {
  id: 'the-walk',
  title: 'The walk',
  scene: 'the-walk',
  slide: `## The walk

One engineer. One project. Four rooms. Everything in this concept, spent.

### Four rooms
- **Kickoff** — the client says *"returns by region."* You ask *which* region, and the definition goes into the ticket. **Six weeks, saved by one question.**
- **Design review** — recommendation first, then two reasons. A failure mode you had not considered: you pause, acknowledge, bridge to what you *do* know. **Not caught out — seen thinking.**
- **The 2 a.m. outage** — breath low, pace slow, steady on a call full of woken-up people. At 6 a.m. the client hears it early, with options.
- **The exec readout** — not the retry handler. *"Forty minutes, four percent of customers, no orders lost, and it cannot recur."*

### What changed
Nothing technical. Same engineer, same work — **read** completely differently in all four rooms.

> Correct work does not land on its own. That was never a soft skill.`,
  narration:
    "Let's finish by walking one project all the way through, because everything in this concept is meant to be spent, not collected. Kickoff. The client says, we need returns by region. And you ask the question — region meaning where the customer is, or where the warehouse is? They pause, and say, oh — customer, obviously. And you write that definition into the ticket. That is one sentence, and it is the six weeks that the listening course opened with. Design review. You open with the recommendation and then the two reasons, rather than walking everybody through your discovery order. Somebody asks about a failure mode you genuinely have not considered. You pause for two seconds, you acknowledge it, and you bridge to what you do know — here is how I would find out. You are not caught out. You are seen thinking, which is a completely different thing to be seen doing. Two in the morning, and the pipeline is down. You are on a call with four people who were asleep ten minutes ago. Breath low, pace slow, voice steady — and the steadiness is not a performance, it is the thing that lets everybody else on that call think clearly. At six a.m. you tell the client early: here is what broke, here is what is fixed, here is what is not yet, and here is what I recommend. Options, not a problem. And then the exec readout, where you do not mention the retry handler at all. Forty minutes, four percent of customers, no orders lost, and it cannot happen again. Same engineer. Same technical work. Read completely differently — and that was the whole point.",
}
