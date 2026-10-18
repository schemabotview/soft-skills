import type { Section } from '../types'

export const sayingIDontKnow: Section = {
  id: 'saying-i-dont-know',
  title: 'Uncertainty, asking for help and "I do not know"',
  scene: 'dont-know',
  focus: 'certainty',
  slide: `## Honest about what you don't know

Unsupported certainty feels reassuring and fails later. "I don't know **yet**", with a next step, is a professional answer, and asking for help well is a skill too.

### Answering "Will it be fixed by Thursday?"
- "Definitely" claims certainty Sam does not have
- "No idea" is honest but leaves Priya stuck
- "I don't know yet; I'll know by 3" gives a **next step**
- "Likely, **if** Jordan's fix holds" states the condition

### Asking for help
- Say what you **tried**: reran it, read the log
- Say where you are **stuck**: the lock is in another team's system
- Say what you **need**: ten minutes with Jordan
- And **by when**: before the 3 pm update
- Asking early is cheaper than rescuing late`,
  narration:
    "Priya asks the question everyone asks: will it be fixed by Thursday? Sam does not know. There are several ways to answer. Definitely, no problem, sounds reassuring, and claims a certainty Sam does not have; if Thursday slips, Priya will remember the definitely. No idea is honest, but leaves Priya with nothing to plan around. I don't know yet, I'll know by three, is honest and gives a next step. And likely, if Jordan's fix holds, states the condition the answer depends on, which is exactly what Priya needs to judge the risk. Saying I don't know yet is not a weakness; it is accurate, and it is what makes your later certainty believable. Asking for help is the other half of this. A good request for help says what you tried, so the helper does not repeat it: Sam reran the job and read the log. It says where you are stuck: the lock is in another team's system. It says what you need: ten minutes with Jordan. And by when: before the three o'clock update. Asking early is almost always cheaper than being rescued late. Next, saying no.",
}
