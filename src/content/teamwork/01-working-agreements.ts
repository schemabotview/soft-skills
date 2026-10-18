import type { Section } from '../types'

export const workingAgreementsSection: Section = {
  id: 'working-agreements',
  title: 'Shared goals, roles, dependencies and working agreements',
  scene: 'working-agreements',
  focus: 'owners',
  slide: `## Who owns what, said out loud

Teams rarely fail for lack of effort. More often, a piece of work **falls between** two people who each assumed the other had it. Named owners and **working agreements** close those gaps.

### The export format
- Sam assumed Jordan would set it
- Jordan assumed Sam would decide it
- Neither was wrong to assume; nobody had **said**
- An ownership table settles it: Priya decides contents, Sam builds it
- Every row also names what it **depends** on

### Working agreements
- **Updates** on Tuesdays, in the shared document
- **Blockers** raised the same day they appear
- **Decisions** written in the decision record
- **Reviews** answered within one working day
- Agreements are revisited, not carved in stone`,
  narration:
    "Chapter five is about teamwork, and it starts with a gap. Two weeks before the demo, nobody had decided the format of the data export. Sam assumed Jordan would set it, because Jordan owns the data. Jordan assumed Sam would decide it, because Sam builds the dashboard. Neither was being careless. Each made a reasonable assumption, and nobody had said who owned it. Teams rarely fail for lack of effort; more often, a piece of work falls between two people. A simple ownership table closes the gap. Jordan owns the data feed and its loads. Sam owns the dashboard and the export. Priya decides what the export contains, with input from finance. Alex owns the plan and priorities. And each row says what it depends on. Alongside ownership, the team agrees a few working habits: updates every Tuesday in the shared document, blockers raised the same day they appear, decisions written in the decision record, and reviews answered within one working day. These are agreements, not laws. When the work or the team changes, they are worth revisiting. Next, trust.",
}
