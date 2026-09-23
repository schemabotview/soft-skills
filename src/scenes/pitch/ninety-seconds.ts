import type { Scene } from '@graphlearning/flow'

// §7 ninety-seconds [framework] — the budget, because "keep it short" is not actionable and PPF
// without a clock reliably becomes four minutes. Three cards carrying seconds rather than
// proportions: a number you can count against is the only version of this that survives a real
// conversation. The Present gets the largest share because it is the only beat carrying a hook.
export const ninetySeconds: Scene = {
  id: 'ninety-seconds',
  padding: 0.18,
  flow: 'TB',
  nodes: [
    { id: 't1', label: '0–20s · Past', pattern: 'service', icon: 'history', sub: 'two sentences. no university.' },
    { id: 't2', label: '20–60s · Present', pattern: 'network', icon: 'zap', sub: 'the project and the number live here' },
    { id: 't3', label: '60–90s · Future', pattern: 'user', icon: 'star', sub: 'then stop, and let them ask' },
  ],
  edges: [
    { source: 't1', target: 't2' },
    { source: 't2', target: 't3' },
  ],
}
