import type { Section } from '../types'

export const needsAndConstraints: Section = {
  id: 'needs-and-constraints',
  title: 'Requests, underlying needs and constraints',
  scene: 'needs-constraints',
  focus: 'need',
  slide: `## Request, need, constraint

A **request** is what someone asks for. The **need** is what it is for. The **constraints** are what limit the possible answers. Good options meet the need within the constraints.

### For "real time"
- **Request** — real-time numbers on the dashboard
- **Need** — spot low stock before the noon reorder, in every region
- **Constraints** — the source loads every two hours; no streaming budget

### Options that fit
- Two loads a day, at 06:00 and 11:00
- A **low-stock flag** that shows what to reorder
- Ask **Jordan** whether the 11:00 load can move earlier
- Streaming fits the words, not the need
- Present options to the person who owns the decision
- Write the need down: it guides trade-offs
- Ask "what is it for?" until it is clear`,
  narration:
    "Underneath most requests there are three layers, and it helps to separate them. The request is what someone asks for, in their words: real-time numbers on the dashboard. The need is what it is for. Here, store managers want to spot low stock before the noon reorder, in every region. And the constraints are what limit the possible answers: the source data loads every two hours, there is no budget for streaming, and the data feed belongs to Jordan, the data engineer. Once the layers are separate, better options appear. Two loads a day, at six and eleven, meet the need. A low-stock flag that highlights what to reorder may meet it even better than fresher numbers. And Sam can ask Jordan whether the eleven o'clock load could move earlier. Notice the option that does not appear: streaming. It matches the words of the request, real time, but not the need, and it breaks a constraint. Sam's job is not to choose for Priya, but to bring options that fit to the person who owns the decision. Next, listening across different backgrounds.",
}
