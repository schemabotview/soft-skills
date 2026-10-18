import type { Section } from '../types'

export const factsAndAssumptions: Section = {
  id: 'facts-and-assumptions',
  title: 'Facts, assumptions, opinions and missing evidence',
  scene: 'facts-assumptions',
  focus: 'sort',
  slide: `## What we know, and what we assume

A problem-solving meeting mixes **facts**, **assumptions**, **estimates** and **opinions**, often in the same sentence. Sorting them shows what needs checking.

### Sorting what was said
- "Jordan missed two updates" — a **fact**: check the log
- "Jordan isn't trying" — an **assumption** about effort: ask Jordan
- "The fix takes a week" — an **estimate**: ask for the breakdown
- "Finance needs every column" — an **assumption**: ask finance
- "The old report was better" — an **opinion**: better how?

### What nobody knows yet
- Which columns finance actually uses
- What causes the late loads
- An observed missed update is not evidence of low effort
- Name the missing evidence before choosing an option`,
  narration:
    "A problem-solving meeting mixes several kinds of statement, often in the same breath, and they need different treatment. Here is what was said in the meeting about the export. Jordan missed two updates. That is a fact, and it can be checked in the update log. Jordan isn't trying. That is an assumption about effort, and it is quite a different claim: an observed missed update is not evidence of low effort. The only way to check it is to ask Jordan, who, it turns out, has been covering a second team's outage. The fix takes a week. That is an estimate; ask for the breakdown behind it. Finance needs every column. An assumption, and an important one, because it drives the whole scope; ask finance. The old report was better. An opinion, and a question: better in what way? Sorting the statements also shows what nobody knows yet. Which columns finance really uses. What actually causes the late loads. Naming that missing evidence before choosing an option is often the most useful thing a meeting can do. Next, generating options.",
}
