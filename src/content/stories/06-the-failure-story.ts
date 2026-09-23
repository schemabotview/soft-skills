import type { Section } from '../types'

export const theFailureStory: Section = {
  id: 'the-failure-story',
  title: 'The failure story',
  scene: 'the-failure-story',
  slide: `## The failure story

They are not screening for flawless. Flawless is not available, and everybody in that room knows it.

### The two ways it goes wrong
- **The humblebrag** — *"I care too much about quality."* Scores zero, and now they think you are managing them.
- **The undigested disaster** — a real failure with no learning attached. That is just a liability report.
- Refusing the question entirely is the third, and it is read as *has never been trusted with anything hard*

### What a good one has
1. A **real** failure, with a real cost — a week, a bad decision, a wrong assumption
2. The **cause named honestly**, and the cause is you. Not the vendor, not the deadline.
3. What you **changed** afterwards, stated as a rule you now follow

> Interviewers are not looking for perfect people. They are looking for self-aware ones.`,
  narration:
    "Tell me about a failure. They are not screening for flawless — flawless is not on offer, and everyone in that room including the interviewer knows it. So let's start with the two ways this goes wrong. The humblebrag: I care too much about quality, so I over-engineer things. That scores zero, and worse than zero, because the interviewer now knows you are managing them rather than answering them, and they will push. The undigested disaster is the opposite failure — a real, serious mistake told plainly with no learning attached. I dropped a production table, it was a bad week. That is not a failure story, it is a liability report, and it leaves them nothing to do but worry. And there is a third: refusing the question, saying nothing significant comes to mind. That gets read as somebody who has never been trusted with anything hard enough to fail at. Now, what does a good one have? Three things. A real failure with a real cost — a lost week, a bad decision, a wrong assumption that shipped. The cause named honestly, and here is the part that matters: the cause is you. Not the vendor, not the deadline, not the requirements being unclear, even if all of those were also true. And then what you changed afterwards, stated as a rule you now actually follow. Look at the one on the left: I was given an enhancement and rebuilt it from scratch because I assumed the existing code was the problem, and I never checked. Lost a week. Now I read what exists before I decide it needs replacing. Real cost, honest cause, durable rule.",
}
