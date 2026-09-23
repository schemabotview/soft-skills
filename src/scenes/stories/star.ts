import type { Scene } from '@graphlearning/flow'

// §2 star [framework] — the named shape for a behavioural answer. TB, four beats, each `sub`
// carrying the constraint that beat gets wrong in practice: S runs long, T disappears into "we", A
// is where the marks are, R gets dropped. The proportions are the next section's subject, so this
// scene deliberately shows the beats as equal — the distortion is easier to see after the ideal.
export const star: Scene = {
  id: 'star',
  padding: 0.14,
  flow: 'TB',
  nodes: [
    { id: 's', label: 'S — Situation', pattern: 'service', icon: 'box', sub: 'where, when, which team — two sentences' },
    { id: 't', label: 'T — Task', pattern: 'network', icon: 'search', sub: 'what was YOURS to do' },
    { id: 'a', label: 'A — Action', pattern: 'storage', icon: 'wrench', sub: 'the steps you personally took' },
    { id: 'r', label: 'R — Result', pattern: 'user', icon: 'circlecheck', sub: 'what changed, with a number' },
  ],
  edges: [
    { source: 's', target: 't' },
    { source: 't', target: 'a' },
    { source: 'a', target: 'r' },
  ],
}
