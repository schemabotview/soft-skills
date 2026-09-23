import type { Section } from '../types'

export const theClarifyingQuestion: Section = {
  id: 'the-clarifying-question',
  title: 'The clarifying question',
  scene: 'clarifying-question',
  slide: `## The clarifying question

*"Ask clarifying questions"* is useless advice until you know which words always need one.

### The words that always need one
- **"Realtime"** → seconds, or minutes? These are different systems.
- **"The report is wrong"** → which number, and what did you expect it to be?
- **"ASAP"** → before Thursday, or today? ASAP is a feeling, not a date.
- **"It should be fairly simple"** → which part are you picturing as simple?

### Why we skip it
- Asking feels like admitting you did not follow — it feels **junior**
- It is the reverse. Nobody has ever thought worse of an engineer for pinning down "realtime".
- The cost is asymmetric: **eight seconds** now against a sprint later
- And the one time it is genuinely expensive to ask is *after* you have built the wrong thing

> One specific question beats three confident guesses, every time.`,
  narration:
    "Ask clarifying questions is completely useless advice, because it does not tell you when. So let's be concrete: here are four words that turn up constantly in our work, and every one of them always needs a question. Realtime. Seconds or minutes? Those are not two flavours of the same system, they are two different systems with different costs, and the person saying realtime very often means, not once a day. The report is wrong. Which number, and what did you expect it to be? Without that, you are about to go and audit an entire pipeline when the answer is that one cell uses a different definition of active user. ASAP. Before Thursday, or today? ASAP is a feeling, not a date, and the gap between those two interpretations is where most missed expectations live. And it should be fairly simple — which part are you picturing as simple? That one is worth asking because the answer tells you what model of the system they are carrying, and it is usually a much smaller model than the real one. Now, why do we skip these? Because asking feels like admitting you did not follow. It feels junior. And it is exactly the reverse — nobody in the history of software has thought less of an engineer for pinning down what realtime meant. The cost is wildly asymmetric: eight seconds now against a sprint later. And the one moment when it genuinely is expensive to ask is after you have already built the wrong thing.",
}
