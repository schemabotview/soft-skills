import type { Section } from '../types'

export const handoversSection: Section = {
  id: 'handovers',
  title: 'Handovers, distributed teamwork and changing membership',
  scene: 'handovers',
  focus: 'note',
  slide: `## When people join, leave or hand over

Teams change. A good **handover** gives the newcomer context, decisions, open questions and people to ask, so that knowledge does not leave with the person who had it.

### The handover note for Mei
- **Context** — what the dashboard is for, and for whom
- **Decided** — links to the decision records
- **Open** — the 11:00 load and the export format
- **Who to ask** — Jordan for the feed, Priya for scope
- **Access** granted and tested on day one; a **first task** that is real

### When membership changes
- Revisit **roles**: who owns what now
- Revisit **meeting times** for a new time zone
- Say the team's **norms** out loud instead of assuming them
- Team-development models are lenses, not a fixed sequence`,
  narration:
    "Teams change. People join, leave, go on holiday or move to other projects, and every change is a moment when knowledge can be lost. When Mei joined the dashboard team, the handover note made the difference between a confusing first week and a useful one. It gave the context: what the dashboard is for, and who relies on it. It linked to the decision records, so Mei did not have to reconstruct them from chat. It listed what was still open: the eleven o'clock load and the export format. It said who to ask about what: Jordan for the data feed, Priya for scope. It made sure Mei's access was granted and tested on the first day, not discovered missing on the third. And it gave Mei a first task that was small, real and reviewed. A change in membership is also a good moment to revisit the team's agreements. Who owns what now? Do meeting times still work, with someone in Singapore? And what norms has the team been assuming, that a newcomer cannot see? Team-development models can be useful lenses here, but teams do not move through stages in a fixed order. Next chapter: ownership and priorities.",
}
