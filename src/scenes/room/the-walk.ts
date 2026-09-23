import type { Scene } from '@graphlearning/flow'

// §10 the-walk [flow] — the concept's closing scene: one engineer, one project, four rooms, and the
// whole repo spent across them. A TB flow because this genuinely is a sequence, and four cards
// because five would push the composition past the pane (LR caps at three, TB comfortably holds
// four — see CLAUDE.md). Each `sub` names the courses cashed in at that moment, by name and never by
// number, so the spine can still be reordered.
export const theWalk: Scene = {
  id: 'the-walk',
  padding: 0.12,
  flow: 'TB',
  nodes: [
    { id: 'w1', label: 'Kickoff', pattern: 'service', icon: 'users', sub: 'listening — you define "region" before anyone builds' },
    { id: 'w2', label: 'Design review', pattern: 'network', icon: 'layers', sub: 'structure + pressure — point first, and one you cannot answer' },
    { id: 'w3', label: 'The 2 a.m. outage', pattern: 'warn', icon: 'zap', sub: 'voice + bad news — early, straight, with options' },
    { id: 'w4', label: 'The exec readout', pattern: 'user', icon: 'usercheck', sub: 'the audience dial — impact, cost, and are we safe' },
  ],
  edges: [
    { source: 'w1', target: 'w2' },
    { source: 'w2', target: 'w3' },
    { source: 'w3', target: 'w4' },
  ],
}
