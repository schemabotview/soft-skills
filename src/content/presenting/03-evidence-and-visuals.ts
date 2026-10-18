import type { Section } from '../types'

export const evidenceAndVisuals: Section = {
  id: 'evidence-and-visuals',
  title: 'Selecting evidence, examples, visuals and limitations',
  scene: 'annotated-visual',
  focus: 'chart',
  slide: `## Every visual needs units, a baseline and its limits

Choose the **few** pieces of evidence that support the message, and make each visual readable **without you**: what is measured, compared with what, and what it leaves out.

### Annotating one chart
- **Title** — the finding, not the topic
- **Units** — £ thousands of sales per day
- **Baseline** — the finance ledger, same 37 shops
- **Axis** — starts at zero, so gaps aren't exaggerated
- **Limitation** — 3 shops left out, data to 11:00
- **Source** — two weeks of loads, dated

### Selecting the evidence
- The **key claim** gets its evidence on a slide
- One number for time saved, not a table of them
- The bug and its fix get one honest line
- Everything else goes in an **appendix**`,
  narration:
    "Sam has more evidence than ten minutes can hold, so Sam keeps only what supports the message. The comparison of dashboard totals with the finance ledger for the thirty-seven checked shops is the key claim, so it gets a chart. The time saved gets one number. The refund bug Mei found, and its fix, gets one honest line. Every other chart goes into an appendix for anyone who asks. Then the chart itself is annotated so it can be read correctly without Sam talking over it. The title states the finding: dashboard totals match finance within half a percent. The units: thousands of pounds of sales per day. The baseline: the finance ledger, for the same thirty-seven shops, so it is a like-for-like comparison. The axis starts at zero, so a small difference does not look like a large one. The limitation is on the chart, not hidden in speech: three shops are left out, and the data runs to eleven o'clock. And the source and dates. A limitation stated up front is far more credible than one discovered later by the audience. Next, rehearsal.",
}
