import type { Scene } from '@graphlearning/flow'

// §5 ppsa [framework] — the shape for describing work rather than answering a question, which is a
// different job from PREP and gets confused with it constantly. TB, four cards. The `A` card is the
// focus in its section because it is the one people drop: engineers describe the work and stop
// before the outcome, which leaves the listener to guess whether any of it mattered.
export const ppsa: Scene = {
  id: 'ppsa',
  padding: 0.14,
  flow: 'TB',
  nodes: [
    { id: 'pr', label: 'P — Project', pattern: 'service', icon: 'box', sub: 'what it was, in a line' },
    { id: 'pb', label: 'P — Problem', pattern: 'warn', icon: 'search', sub: 'what was actually wrong' },
    { id: 's', label: 'S — Solution', pattern: 'network', icon: 'wrench', sub: 'what you did about it' },
    { id: 'a', label: 'A — Achievement', pattern: 'user', icon: 'circlecheck', sub: 'what changed, with a number' },
  ],
  edges: [
    { source: 'pr', target: 'pb' },
    { source: 'pb', target: 's' },
    { source: 's', target: 'a' },
  ],
}
