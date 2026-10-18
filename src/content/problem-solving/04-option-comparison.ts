import type { Section } from '../types'

export const optionComparison: Section = {
  id: 'option-comparison',
  title: 'Comparing options using explicit criteria and trade-offs',
  scene: 'option-table',
  focus: 'table',
  slide: `## Making the trade-offs visible

A **weighted option table** scores each option against agreed **criteria**. It makes preferences and trade-offs visible. It does not turn them into objective truth.

### The table
- Criteria: Monday close, accuracy, load, rework
- Weights reflect what the team **values** most
- Totals: less scope 35, later date 33, phased 30
- Agree criteria and weights **before** scoring
- Score with the people who know each area

### Reading it honestly
- The totals are **close**: the decision is still a judgement
- Weights are **preferences**, not facts; say whose they are
- Its real value: it shows **where** people disagree
- Swap two weights and re-check: does the winner change?
- Use the table to structure a conversation, not end it`,
  narration:
    "With a short list of options, a weighted table can help compare them. The team agrees four criteria: whether finance can close the month on Monday, accuracy, the load on the team, and how much rework it creates later. Each criterion gets a weight, reflecting what the team values most, and each option gets a score from one to five against each criterion. Multiply and add, and the totals come out: less scope thirty-five, a later date thirty-three, phased thirty. It is tempting to read that as an answer. It is not quite one. The totals are close, so the decision is still a judgement. And the weights are preferences, not facts: someone chose to weight finance closing on Monday at three, and team load at two. Say whose preferences they are. The real value of the table is that it shows where people disagree, which is usually about a weight or a score, not about the whole option. A useful check is to swap two weights and see whether the winner changes. If it does, the decision depends on that preference, and that is what to discuss. Use the table to structure a conversation, not to end it. Next, the traps in group reasoning.",
}
