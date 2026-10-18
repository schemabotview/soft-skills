import type { Section } from '../types'

export const renegotiating: Section = {
  id: 'renegotiating',
  title: 'Raising blockers early and renegotiating scope or timing',
  scene: 'renegotiate',
  focus: 'update',
  slide: `## Say it early, with options

The same bad news has different value at different times. On **Tuesday morning** there are options; on **Thursday night** there is only an apology.

### Sam's Tuesday message to Alex and Priya
- **Changed** — the refund bug is bigger than expected
- **Impact** — export and fix won't both fit
- **Options** — fewer columns, a later fix, or help
- **Who decides** — "Choose by Wednesday noon?"
- Short, factual, and sent to **both** people affected

### Why early is better
- Early news leaves room for **scope**, **date** or **help**
- It lets others adjust **their** plans too
- It is information, given while it is useful
- Late news turns a planning problem into a trust problem
- Raise it as soon as you **know**, not when you're sure
- Then confirm the choice in writing
- Silence is read as "on track"`,
  narration:
    "On Tuesday morning, Sam discovers that the refund bug is bigger than expected. There is now no way to finish both the export and the fix this week. The question is when to say so. The same news has very different value at different times. On Tuesday morning, there are still options: fewer columns in the export first, a later date for the fix, or some help from Mei. On Thursday night, the only thing left is an apology. So Sam writes to Alex and Priya on Tuesday. What changed: the refund bug is bigger than we thought. The impact: the export and the bug fix will not both fit this week. The options: fewer columns first, a later fix, or extra help. And who decides, and by when: could you choose by Wednesday noon? Raising it early is not a failure. It is information, given while it is still useful, and it lets other people adjust their own plans too: finance can plan around a smaller export. Late news turns a planning problem into a trust problem, because people wonder what else they have not been told. Next, following through, including on mistakes.",
}
