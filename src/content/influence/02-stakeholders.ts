import type { Section } from '../types'

export const stakeholdersSection: Section = {
  id: 'stakeholders',
  title: 'Understanding stakeholders, incentives, concerns and decision rights',
  scene: 'stakeholders',
  focus: 'people',
  slide: `## Map who a proposal touches, and who decides

Before proposing a change, list the people it **affects**, what each of them **wants** and **worries about**, and who has the **right to decide** each part.

### A 15:00 load: who it touches
- **Priya** wants afternoon data, and owns the budget
- **Jordan** would build and maintain a third load
- **Alex** needs someone on support at 15:00
- **Sam** proposes it, and decides none of it
- Each concern is reasonable from where they sit

### Who decides what
- Whether it is worth paying for: Priya
- How the load is built: Jordan
- Who supports it, and when: Alex
- Anyone can **propose**; not anyone can decide
- Ask, if decision rights are unclear
- Map it before the proposal, not after a refusal`,
  narration:
    "Sam's idea is a third daily load, at three in the afternoon, so shop managers can see the morning's sales before their four o'clock calls. Before proposing anything, Sam maps who the change touches. Priya wants the afternoon data and owns the budget that would pay for it. Jordan would build and maintain a third load on a feed that is already busy. Alex would need someone on support at three o'clock, every day. Each of those concerns is reasonable from where the person sits, and none of them is an obstacle to be got around. Then Sam separates the decisions, because they belong to different people. Whether the load is worth paying for is Priya's decision, as sponsor. How it is built is Jordan's, who owns the feed. Who supports it, and when, is Alex's, as support owner. Sam's own decision right is the smallest: whether to propose it at all. Anyone can propose; not everyone can decide. When decision rights are unclear, the useful move is to ask, before the proposal, not after it has been refused. Next, building support.",
}
