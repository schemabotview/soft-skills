import type { Scene } from '@graphlearning/flow'

// §8 entry-and-exit [framework] — the two moments that bracket every meeting and get no rehearsal at
// all. Four beats TB. The last card is the section's argument: people leave in a scramble, and the
// exit is the half of the bracket nobody has ever thought about, which makes it the cheapest to fix.
export const entryAndExit: Scene = {
  id: 'entry-and-exit',
  padding: 0.14,
  flow: 'TB',
  nodes: [
    { id: 'e1', label: 'Arrive early', pattern: 'service', icon: 'clock', sub: 'walking in late costs the whole entry' },
    { id: 'e2', label: 'Walk in with purpose', pattern: 'network', icon: 'dooropen', sub: 'unhurried, head level' },
    { id: 'e3', label: 'Settle before you speak', pattern: 'storage', icon: 'ruler', sub: 'sit, breathe once, then start' },
    { id: 'e4', label: 'Own the exit', pattern: 'user', icon: 'usercheck', sub: 'a closing line, then leave unhurried' },
  ],
  edges: [
    { source: 'e1', target: 'e2' },
    { source: 'e2', target: 'e3' },
    { source: 'e3', target: 'e4' },
  ],
}
