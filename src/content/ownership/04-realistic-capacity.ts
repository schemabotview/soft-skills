import type { Section } from '../types'

export const realisticCapacity: Section = {
  id: 'realistic-capacity',
  title: 'Estimation uncertainty, capacity, focus and interruptions',
  scene: 'capacity',
  focus: 'week',
  slide: `## Plans that fit the real week

Plans often assume uninterrupted time that never exists. A realistic plan starts from **actual capacity** and gives estimates as **ranges**.

### Sam's week, honestly
- 37 contracted hours
- Minus about 8 in meetings and 4 answering support questions
- Minus about 5 lost to interruptions and switching
- Leaves roughly **20 hours** of focus time
- Estimate from last month's **actual** week, not an ideal one

### Estimates as ranges
- Export: 8 to 14 hours
- Refund bug: 4 to 12 hours; the cause is still **unknown**
- Total: 13 to 28 hours, against about 20
- So the plan **may not fit**: say so now, not on Friday
- Protect focus blocks; batch questions where possible
- The widest range marks the riskiest work`,
  narration:
    "A plan that assumes Sam has thirty-seven uninterrupted hours this week will fail, because nobody has that week. A realistic plan starts from actual capacity. Sam's contract is thirty-seven hours. About eight go to meetings. About four go to answering support questions about the existing reports. About five more disappear into interruptions and the cost of switching between tasks. That leaves roughly twenty hours of focus time. The estimates are better given as ranges than as single numbers, because a single number hides uncertainty. The export will take eight to fourteen hours. The refund bug, four to twelve, because the cause is still unknown and that is where most of the uncertainty sits. The demo note, one to two. The total is thirteen to twenty-eight hours, against about twenty available. In other words, the plan may fit, or may not, and that is worth saying now, on Monday, rather than discovering on Friday. A few habits help capacity too: protect blocks of focus time, and batch questions into fewer interruptions where the team can agree to. Next, saying early when a plan will not hold.",
}
