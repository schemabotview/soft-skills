import type { Scene } from '@graphlearning/flow'

// §3 virtual-etiquette [board] — the six-point checklist from the source workshop, kept whole
// because it is already the right shape: six independent items you sweep before a call. Distinct
// from this repo's two earlier on-camera sections, which covered voice and body separately — this
// is the pre-flight for the call that decides something.
export const virtualEtiquette: Scene = {
  id: 'virtual-etiquette',
  padding: 0.14,
  nodes: [
    {
      id: 'board',
      label: 'Before the call that decides it',
      pattern: 'group',
      icon: 'monitor',
      cols: 3,
      children: [
        { id: 'v-cam', label: 'Camera and background', pattern: 'service', icon: 'monitor', sub: 'eye level, plain, lit from the front', variant: 'tile' },
        { id: 'v-audio', label: 'Audio, tested early', pattern: 'service', icon: 'plug', sub: 'headset, ten minutes before', variant: 'tile' },
        { id: 'v-dress', label: 'Dressed fully', pattern: 'user', icon: 'usercheck', sub: 'it shifts how you sit, not just how you look', variant: 'tile' },
        { id: 'v-lens', label: 'Look at the lens', pattern: 'warn', icon: 'search', sub: 'and hide your self-view', variant: 'tile' },
        { id: 'v-quiet', label: 'Nothing else open', pattern: 'network', icon: 'ban', sub: 'no notifications, no CV behind the call', variant: 'tile' },
        { id: 'v-energy', label: 'Energy up 20%', pattern: 'storage', icon: 'zap', sub: 'the screen takes it straight back', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
