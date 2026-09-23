import type { Section } from '../types'

export const theAudienceDial: Section = {
  id: 'the-audience-dial',
  title: 'The audience dial',
  scene: 'audience-dial',
  slide: `## The audience dial

"Be clear" is not a fixed target. Clear *for whom* — because each of these three is holding a different question.

### One incident, three versions
- **Engineer** — *"Retry handler blocked on a cold pool; p99 hit 2.4s."* They want the mechanism.
- **Manager** — *"Forty minutes of slow checkout. Fixed. The fix is one line; I'd like a day to add a guard."* They want risk and timing.
- **Client** — *"Checkout was slow for about 4% of customers this morning. It's resolved and no orders were lost."* They want impact and reassurance.

### How to pick, live
- Ask yourself what **decision** this person is about to make. That selects the version.
- When unsure, give the **client** version and offer depth: *"Happy to go into the mechanism."*
- Getting it wrong upward costs more than getting it wrong downward

> The same facts. Three different jobs. Only one of them is the one in front of you.`,
  narration:
    "We should finish this course by killing off a piece of advice, which is: be clear. Be clear is not a fixed target. Clear for whom? Because the three people on the left are each holding a completely different question, and the same sentence is excellent for one of them and useless to the other two. Same incident, three versions. To the engineer: the retry handler blocked on a cold pool and p99 hit two point four seconds. They want the mechanism, because they might have to touch this code. To your manager: forty minutes of slow checkout, it is fixed, the fix is one line and I would like a day to add a guard so it cannot recur. They want risk and timing, because their job is to know what is exposed and when it will be closed. To the client: checkout was slow for about four percent of customers this morning, it is resolved, and no orders were lost. They want impact and reassurance. Now, how do you pick in the moment? Ask yourself what decision this person is about to make. That single question selects the version, almost automatically. If you genuinely do not know, give the client version and then offer depth — happy to go into the mechanism if that is useful. That is safe in both directions, because you can always add detail and you can never take it back. And note the asymmetry: getting it wrong upward, giving an exec the engineer version, costs a great deal more than getting it wrong downward.",
}
