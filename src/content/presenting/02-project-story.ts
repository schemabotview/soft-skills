import type { Section } from '../types'

export const projectStoryGroup: Section = {
  id: 'project-story',
  title: 'Structuring a project story: context, problem, action and result',
  scene: 'project-story',
  focus: 'story',
  slide: `## A project story has four parts

A project becomes easy to follow as **context, problem, action, result**. The structure helps only if each part is **true**: who did what, and what was actually measured.

### The dashboard in four parts
- **Context** — a weekly sales report, built by hand
- **Problem** — four hours a week, and often a week old
- **Action** — two daily loads, and only checked shops shown
- **Result** — preparation down to twenty minutes, measured
- Keep context short: the audience wants the result

### Telling it honestly
- Say **I** for your part and name the others
- "I built the views; Jordan built the feed"
- Credit Mei by name for the refund bug
- **Measured** results and **expected** benefits are different claims
- A story must not manufacture impact`,
  narration:
    "A project story becomes easy to follow when it has four parts. The context: the shops' sales were reported once a week, in a spreadsheet built by hand. The problem: it took about four hours a week, and the numbers were often a week old by the time anyone read them. The action: two daily loads, at six and eleven, showing only shops whose totals had been checked. The result: preparing the weekly numbers fell from four hours to twenty minutes over two weeks of use. That structure is a tool, and a story told well can still be untrue. So Sam checks each claim. Sam did not build the dashboard alone: Sam built the views, Jordan built the feed, and Mei found the refund bug before launch. Saying so costs nothing, and the people in the room may know anyway. The time saved was measured. Faster decisions are expected, but not yet measured, so Sam says expected. Storytelling organises what happened; it must not manufacture impact. Next, choosing the evidence and the visuals.",
}
