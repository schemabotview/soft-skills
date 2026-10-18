import type { Section } from '../types'

export const audienceAndMessage: Section = {
  id: 'audience-and-message',
  title: 'Audience needs, purpose and the central message',
  scene: 'central-message',
  focus: 'decision',
  slide: `## Start from the decision, not the dashboard

A presentation exists to help **particular people** do something. Before building slides, name the audience, what they must **decide or do**, and the one message you want them to leave with.

### Who is in the room
- The **director** decides whether the rollout goes ahead
- **Priya** needs a demo the customer will trust
- **Alex** needs something the team can support
- Each needs a different part of the same story
- Ask what they already know before you start

### Two versions of one talk
- A **tour** walks through each tab and feature
- It ends with "any questions?" and no decision
- Organised around the **decision**: message first
- Then the evidence, the limits, and the ask
- Write the message as **one sentence** you could say in a corridor`,
  narration:
    "Sam has ten minutes at the Thursday demo. The easiest talk to prepare is a tour: here is the overview tab, here is the shops tab, here are the filters, any questions? It feels thorough, but it leaves the work of deciding what matters to the audience. So Sam starts somewhere else: who is in the room, and what do they need to do? The director decides whether the dashboard rolls out to every shop. Priya needs a demo the customer will trust. Alex needs something the team can support at eight in the morning. Each of them needs a different part of the same story. From there Sam writes the central message as one sentence: the dashboard can replace the weekly spreadsheet, and we recommend rolling it out in three weeks. Everything else in the talk serves that sentence. The evidence that the numbers match finance. The limits: three shops still unchecked, data as of eleven. And the ask: a decision today. A useful test is whether you could say the message in a corridor. Next, the story behind it.",
}
