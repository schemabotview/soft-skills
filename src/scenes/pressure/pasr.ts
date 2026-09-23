import type { Scene } from '@graphlearning/flow'

// §4 pasr [framework] — the named shape for the two seconds, so they can be practised instead of
// endured. TB, four beats. `Acknowledge` is the beat that makes the pause legible from outside: the
// silence alone can read as being stuck, and one short sentence converts it into deliberate
// composure. That is why it is a separate card rather than folded into the pause.
export const pasr: Scene = {
  id: 'pasr',
  padding: 0.14,
  flow: 'TB',
  nodes: [
    { id: 'p', label: 'P — Pause', pattern: 'network', icon: 'circleslash', sub: 'two seconds, and one breath out' },
    { id: 'a', label: 'A — Acknowledge', pattern: 'service', icon: 'file', sub: 'one sentence, so the silence reads' },
    { id: 's', label: 'S — Structure', pattern: 'storage', icon: 'layers', sub: 'pick the shape before you start' },
    { id: 'r', label: 'R — Respond', pattern: 'user', icon: 'circlecheck', sub: 'and stop when you are done' },
  ],
  edges: [
    { source: 'p', target: 'a' },
    { source: 'a', target: 's' },
    { source: 's', target: 'r' },
  ],
}
