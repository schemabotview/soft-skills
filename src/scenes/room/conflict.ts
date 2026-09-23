import type { Scene } from '@graphlearning/flow'

// §6 conflict [framework] — four beats, and the first is the one that does most of the work. Taking
// it out of the group is not politeness: an audience makes both parties defend positions rather than
// examine them, so nothing can move while people are watching. Beat four is what stops it recurring
// — a disagreement with an agreed test has an end condition; one without is permanent.
export const conflict: Scene = {
  id: 'conflict',
  padding: 0.14,
  flow: 'TB',
  nodes: [
    { id: 'k1', label: 'Out of the group', pattern: 'service', icon: 'dooropen', sub: 'an audience makes both of you defend' },
    { id: 'k2', label: 'Their version first', pattern: 'network', icon: 'users', sub: 'and let it finish' },
    { id: 'k3', label: 'Position, not person', pattern: 'storage', icon: 'scale', sub: '"the approach" — never "you"' },
    { id: 'k4', label: 'Agree the test', pattern: 'user', icon: 'circlecheck', sub: 'what evidence settles this, and by when' },
  ],
  edges: [
    { source: 'k1', target: 'k2' },
    { source: 'k2', target: 'k3' },
    { source: 'k3', target: 'k4' },
  ],
}
