import type { Section } from '../types'

export const biasesSection: Section = {
  id: 'biases',
  title: 'Confirmation bias, premature agreement and false certainty',
  scene: 'biases',
  focus: 'traps',
  slide: `## Three traps, three countermeasures

Groups reason badly in predictable ways. Naming the trap is not enough; each needs a small, **built-in** countermeasure.

### Confirmation bias
- The team gathered evidence only **for** the option it liked
- Instead ask: "What would change our mind?"

### Premature agreement
- Alex spoke first, and everyone agreed within a minute
- Instead: everyone **writes** a view before discussion starts

### False certainty
- "Phased will definitely work"
- Instead, a **pre-mortem**: imagine it failed; list why
- These habits work best when they are routine, not accusations`,
  narration:
    "Groups reason badly in some predictable ways, and naming a trap is not enough. Each needs a small countermeasure that is built into how the meeting runs. The first trap is confirmation bias: once the team liked the phased option, it gathered evidence for it and none against it. The countermeasure is a question asked out loud: what would change our mind? It turns looking for agreement into looking for evidence. The second is premature agreement. Alex, the team lead, spoke first, and everyone agreed within a minute. That may have been genuine agreement, or it may have been deference, and there is no way to tell. The countermeasure is to have everyone write down their view before the discussion starts, so the first voice does not set the answer. The third is false certainty: phased will definitely work. The countermeasure is a pre-mortem. Imagine it is two weeks from now and the phased plan has failed, and list the reasons why. People find it easier to name risks this way than to challenge a plan directly. These work best as routine habits, used every time, so that using them never feels like an accusation. Next, matching care to the decision.",
}
