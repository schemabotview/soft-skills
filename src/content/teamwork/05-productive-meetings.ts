import type { Section } from '../types'

export const productiveMeetings: Section = {
  id: 'productive-meetings',
  title: 'Meeting purpose, preparation, facilitation and decisions',
  scene: 'meetings',
  focus: 'question',
  slide: `## A meeting built around a question

A useful meeting has a **question** to answer, the **right** people, a **pre-read**, and a **record** of what it decided. Without a question, it is a status update that could have been written.

### The agenda for demo readiness
- **The question** — go or no-go for showing regions?
- **Pre-read** — status and risks, one page, a day ahead
- **Who** — only those who decide or inform the decision
- **Timebox** — 10 minutes facts, 15 options, 5 to decide
- **Facilitate**: steer drift to its own meeting
- No question? Send a written update instead

### The closing record
- **Decision** — go, with an "as of 11:00" note
- **Actions** — each with one owner and a date
- **Parked** — streaming, to revisit next quarter
- Cancel the follow-up meeting nobody now needs`,
  narration:
    "A useful meeting is built around a question. Here the question is: do we show the regional view at Thursday's demo, yes or no? That single line changes everything else. It decides who needs to be there: only those who make the decision or have information it needs, which here is Priya, Alex, Sam and Jordan. It decides the pre-read: one page of status and risks, sent a day ahead, so the meeting does not spend twenty minutes reading aloud. And it suggests a timebox: ten minutes for facts, fifteen for options, and five to decide. Facilitating then means keeping to that shape, and noticing when the conversation drifts into a different question that deserves its own meeting. The meeting ends with a record. The decision: go, with a note saying the numbers are as of eleven o'clock. The actions, each with one owner and a date. What was parked: streaming, to revisit next quarter, written down so it does not quietly reappear. And, just as useful, what is no longer needed: the follow-up meeting on Friday can be cancelled. Next, sharing knowledge and credit.",
}
