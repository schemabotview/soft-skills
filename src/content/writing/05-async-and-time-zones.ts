import type { Section } from '../types'

export const asyncAndTimeZones: Section = {
  id: 'async-and-time-zones',
  title: 'Remote collaboration, response expectations and time zones',
  scene: 'time-zones',
  focus: 'expectations',
  slide: `## Working when others are asleep

On a distributed team, a message sent at 16:00 lands at **midnight** for someone else. Agreed **response expectations** stop that from becoming pressure or silence.

### When Sam sends at 16:00 London
- Priya in London and Jordan in Toronto see it **now**
- Mei in Singapore sees it **tomorrow** morning
- Mei should not need to reply at midnight
- Write local times: "16:00 London", not "4pm"
- Hand over **context** at the end of your day

### Agreed expectations, by urgency
- **Urgent** — a call; chat is not enough
- **Today** — a chat message with a clear ask
- **This week** — an email or a document
- **FYI** — say that no reply is expected
- Write so someone can act **without** a follow-up question
- Respect quiet hours, including your own`,
  narration:
    "The dashboard team is spread across time zones. Priya is in London, Jordan in Toronto, and Mei, who joined recently, in Singapore. When Sam sends a message at four in the afternoon London time, Priya and Jordan see it straight away. For Mei it arrives at midnight, and Mei will see it in the morning. That is how it should be. Nobody should feel they have to answer at midnight because a message arrived. What makes this work is agreed response expectations, matched to urgency. Something urgent gets a phone call, because a chat message can easily sit unread. Something needed today gets a chat message with a clear ask. Something for this week goes in an email or a document. And something purely for information says so: no reply needed. With those expectations agreed, a quiet colleague is just a colleague who is asleep, not someone ignoring you. One more habit makes asynchronous work much smoother: write so that the reader can act without needing to ask a follow-up question, because each question can cost a whole day across time zones. Next, checking before you send.",
}
