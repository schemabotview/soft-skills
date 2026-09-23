import type { Scene } from '@graphlearning/flow'

// §3 prep [framework] — the default shape for any spoken answer, and the first of the course's three
// named structures. TB, four cards. The two `P`s are deliberately the same pattern colour: it is one
// point stated and then restated, not two different points, and colouring them alike is what makes
// the bracket visible without a caption.
export const prep: Scene = {
  id: 'prep',
  padding: 0.14,
  flow: 'TB',
  nodes: [
    { id: 'p1', label: 'P — Point', pattern: 'service', icon: 'file', sub: 'your conclusion, in one sentence' },
    { id: 'r', label: 'R — Reason', pattern: 'network', icon: 'search', sub: 'one or two, not five' },
    { id: 'e', label: 'E — Example', pattern: 'storage', icon: 'box', sub: 'one concrete instance' },
    { id: 'p2', label: 'P — Point', pattern: 'service', icon: 'file', sub: 'the same sentence, landed' },
  ],
  edges: [
    { source: 'p1', target: 'r' },
    { source: 'r', target: 'e' },
    { source: 'e', target: 'p2' },
  ],
}
