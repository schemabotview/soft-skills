import type { Section } from '../types'

export const decisionRecords: Section = {
  id: 'decision-records',
  title: 'Meeting notes, decision records and handover context',
  scene: 'decision-record',
  focus: 'record',
  slide: `## Write the decision down where it can be found

Decisions made in chat get **scattered**, stay **implicit**, and are **lost** to anyone who joins later. A short **decision record** keeps what was decided, and why.

### The decision, as it happened
- 43 chat messages over two days, in two threads
- Does "ok" mean yes, or "I saw it"?
- Mei joined the team after the discussion ended

### A decision record
- **Decision** — show regions Thursday, marked "as of 11:00"
- **Who and when** — Priya with Alex, Wednesday noon
- **Options** — show with a note, or wait until Monday
- **Why** — regional leads need it; the note covers the delay
- **Revisit if** — the 11:00 load fails again
- Link the record from the chat, so people find it`,
  narration:
    "The decision about the demo regions was made the way many decisions are: forty-three chat messages, over two days, in two threads. Some of it was explicit. Some of it was a thumbs up that might have meant yes, or might have meant I saw this. And Mei, who joined the team the following week, has no way to reconstruct any of it. Decisions made in chat get scattered, stay implicit, and are lost to anyone who arrives later. A short decision record fixes that. It says what was decided: show the regions on Thursday, marked as of eleven o'clock. Who decided, and when: Priya, with Alex, on Wednesday at noon. Which options were considered: show with a note, or wait until Monday. Why this one was chosen: the regional leads need the view, and the note covers the delay honestly. And when to revisit it: if the eleven o'clock load fails again. It takes five minutes to write, and it is the document that answers the question why did we do it this way, months later. Meeting notes work the same way. Next, working across time zones.",
}
