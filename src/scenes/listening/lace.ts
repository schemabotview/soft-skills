import type { Scene } from '@graphlearning/flow'

// §3 lace [framework] — the course's named shape, and the counterweight to the failure drawn in the
// previous section: every beat here is something to DO with the ninety seconds you were otherwise
// spending holding a reply. TB, four cards. `Clarify` sits third on purpose — the instinct is to
// clarify first, which interrupts, and the ordering is most of the teaching.
export const lace: Scene = {
  id: 'lace',
  padding: 0.14,
  flow: 'TB',
  nodes: [
    { id: 'la', label: 'L — Listen', pattern: 'service', icon: 'waves', sub: 'the phone goes down. all of it.' },
    { id: 'a', label: 'A — Absorb', pattern: 'network', icon: 'brain', sub: 'words, tone, and what is missing' },
    { id: 'c', label: 'C — Clarify', pattern: 'storage', icon: 'search', sub: 'one question — after they finish' },
    { id: 'e', label: 'E — Execute', pattern: 'user', icon: 'circlecheck', sub: 'answer what was asked, not what you prepared' },
  ],
  edges: [
    { source: 'la', target: 'a' },
    { source: 'a', target: 'c' },
    { source: 'c', target: 'e' },
  ],
}
