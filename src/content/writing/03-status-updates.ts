import type { Section } from '../types'

export const statusUpdates: Section = {
  id: 'status-updates',
  title: 'Status updates: progress, evidence, risks and next actions',
  scene: 'status-update',
  focus: 'after',
  slide: `## "Still working on it" is not an update

A status update exists so the reader can **decide** something. "Still working on it, should be fine" tells them nothing they can act on.

### Sam's Tuesday update, rewritten
- **Done** — the region view is built and tested
- **Evidence** — its totals match finance's figures
- **Blocked** — the 11:00 load fix, which sits with Jordan
- **Risk** — regions may be three hours stale on Thursday
- **Decision** — Priya: show them with a note?
- **Next** — the export, by Friday

### Habits
- Separate what is **done** from what is **planned**
- Name a blocker's **owner**, without blame
- Raise risks **early**, while there are still options
- End with the **one** thing you need from the reader`,
  narration:
    "Still working on it, should be fine, is the most common status update there is, and it tells the reader nothing they can act on. A status update exists so that someone can decide something: whether to worry, whether to step in, whether to change a plan. Here is Sam's Tuesday update, rewritten. Done: the region view is built and tested. Evidence: its totals match the finance team's figures, which is what makes done believable. Blocked: the fix to the eleven o'clock load, which sits with Jordan. Risk: on Thursday the regional numbers may be three hours stale. Decision needed: Priya, should we show them with a note? And next: the export, by Friday. Every line is something the reader can use. A few habits make this routine. Separate what is done from what is planned; mixing them is how surprises happen. Name a blocker's owner plainly, without blame, so the reader knows whom to ask. And raise risks early, while there are still options, rather than on the day they turn into problems. Next, notes and decision records.",
}
