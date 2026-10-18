import type { Section } from '../types'

export const prioritising: Section = {
  id: 'prioritising',
  title: 'Prioritising by impact, urgency, risk and dependency',
  scene: 'priorities',
  focus: 'list',
  slide: `## What first, and why

A priority is a **choice** with reasons: impact, urgency, risk, and what else is waiting on it. When something new arrives, the choice is not whether to add it, but what **gives way**.

### Sam's Monday order
- The demo note: high impact, due Thursday, low risk
- Export columns: high impact, high risk, finance waits on it
- Refund bug: high impact, high risk, totals depend on it
- Chart colours: **later**; low impact, nothing waits on it

### When a new urgent request arrives
- Finance now needs the export by **Friday** too
- Options: reduce the **scope**, move a **date**, or add **capacity**
- Bring the options to the person who owns the priority: Alex
- Write down what moved, so nobody is surprised`,
  narration:
    "A priority is a choice, and it should have reasons. Four reasons cover most choices: impact, how much it matters; urgency, how soon it is needed; risk, how likely it is to go wrong if left; and dependency, what else is waiting on it. Here is Sam's list on Monday. The note for the demo is high impact, due Thursday, and low risk: first. The export columns are high impact and high risk, and finance is waiting on them: second. The refund bug is high impact and high risk, and the totals depend on it: third. And the chart colours are low impact, with nothing waiting: later. Then, on Tuesday, Priya writes that finance needs the export by Friday as well. The tempting response is to say yes and add it to the pile. But adding something always means something else gives way, and the choice is what. Sam brings three options to Alex, who owns the priorities: reduce the scope with fewer columns first; move a date, so the bug fix waits a week; or add capacity, with Mei taking the polish. Whatever moves is written down, so nobody is surprised later. Next, breaking work into steps.",
}
