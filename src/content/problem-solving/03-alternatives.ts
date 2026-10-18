import type { Section } from '../types'

export const alternativesSection: Section = {
  id: 'alternatives',
  title: 'Generating alternatives before choosing a preferred answer',
  scene: 'alternatives',
  focus: 'widen',
  slide: `## Widen before you narrow

Teams often debate the **first** option anyone mentions. Generating several alternatives **before** judging any of them leads to better choices, and sometimes to a combination.

### First, five options and no judging
- **Less scope** — the six columns finance actually uses
- **Later date** — the export next Wednesday
- **More support** — Mei helps with the build
- **Phased** — a manual file on Monday, the export later
- **Reuse** — the old report, patched for now
- Quantity first: quality comes in the narrowing

### Then narrow
- Include one **unusual** option; it shows the edges
- **Rule out** options that break a constraint
- **Combine** what remains: less scope, phased
- Collect options in writing first, so the loudest idea doesn't win
- Keep the rejected ones listed, with the reason`,
  narration:
    "Once the problem is framed, the next temptation is to debate the first option anyone mentions. In this team, that was moving the date. Debating one option quickly becomes a yes or no argument. Generating several alternatives before judging any of them usually leads somewhere better. So the team takes five minutes to widen. Less scope: just the six columns finance actually uses. A later date: the export next Wednesday. More support: Mei helps with the build. Phased: a manual file on Monday, so finance can close, and the automated export later. Reuse: patch the old report for one more month. And one deliberately unusual option, ask finance to wait a month, which is unlikely, but shows where the edges are. Only then does the team narrow. Rule out the options that break a constraint: waiting a month misses month-end. And combine what remains, because the best answer is often a combination: less scope, delivered in phases. One practical tip: collect options in writing first, before discussing them, so the first or loudest idea does not win by default. Next, comparing the options.",
}
