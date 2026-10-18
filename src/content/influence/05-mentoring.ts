import type { Section } from '../types'

export const mentoringSection: Section = {
  id: 'mentoring',
  title: 'Mentoring, knowledge-sharing and enabling independent judgement',
  scene: 'mentoring',
  focus: 'asking',
  slide: `## Ask about the reasoning before giving the answer

Mentoring aims at someone's **independent judgement**, not just today's answer. Ask how they are thinking about the problem first; then offer advice, as advice.

### Telling
- Mei: "The load is slow. Index, or rewrite?"
- Sam: "Add an index on shop and date."
- Fast, and probably right
- Next time, Mei asks Sam again
- If Mei is stuck or it's urgent, just say what to do

### Asking first
- "What did you **measure**?"
- "What would each change fix?"
- "Which would you try **first**, and why?"
- Mei: "The index, then measure again."
- Then advice: "Agreed. Check the query plan too."
- Write the answer down where others will find it`,
  narration:
    "Two weeks into the trial, the three o'clock load is slow, and Mei asks Sam: should I add an index, or rewrite the query? Sam could simply answer. Add an index on shop and date. It is fast and probably right, and next time Mei will ask again, because the answer was given but the reasoning was not. Mentoring aims at the second thing: Mei's own judgement. So Sam asks first. What did you measure? Mei has the timings for each step. What would each change fix? Mei thinks it through aloud. Which would you try first, and why? Mei says the index, because it is cheaper to undo, and then measure again. Only then does Sam give advice, and as advice: agreed, and check the query plan too. Asking first is not withholding help. If Mei were stuck, or the load were failing in production, Sam would just say what to do. And Sam suggests Mei writes the finding up in the team's notes, so the knowledge is shared beyond one conversation. Next, influence that stays honest.",
}
