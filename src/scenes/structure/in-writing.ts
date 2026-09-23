import type { Scene } from '@graphlearning/flow'

// §9 in-writing [framework] — the same answer-first discipline, applied to the medium where it is
// most often abandoned. TB, four beats, and the order is the whole teaching: the ask goes ABOVE the
// context, which is the inversion of how almost every work email is written. The subject line gets
// its own card because it is the only part most recipients will read.
export const inWriting: Scene = {
  id: 'in-writing',
  padding: 0.14,
  flow: 'TB',
  nodes: [
    { id: 'w1', label: 'Subject = the ask', pattern: 'service', icon: 'file', sub: '"Approval needed: vendor schema fix"' },
    { id: 'w2', label: 'First line = the decision', pattern: 'network', icon: 'circlecheck', sub: 'before any background at all' },
    { id: 'w3', label: 'Then the context', pattern: 'storage', icon: 'layers', sub: 'as much as the decision needs' },
    { id: 'w4', label: 'Then the date', pattern: 'user', icon: 'clock', sub: 'an explicit one — "by Thursday"' },
  ],
  edges: [
    { source: 'w1', target: 'w2' },
    { source: 'w2', target: 'w3' },
    { source: 'w3', target: 'w4' },
  ],
}
