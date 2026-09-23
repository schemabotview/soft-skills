import type { Scene } from '@graphlearning/flow'

// §3 three-channels [flow] — the spine of the whole concept. One message leaves you on three
// channels at once and arrives as ONE impression. Drawn as a genuine fan-out/fan-in (LR) rather than
// three stacked cards: the point is simultaneity — all three fire on the same sentence — and only a
// diverge-and-rejoin shape says that. The rejoin node is the real content: the listener never
// separates them.
export const threeChannels: Scene = {
  id: 'three-channels',
  padding: 0.14,
  flow: 'LR',
  nodes: [
    { id: 'you', label: 'You', pattern: 'user', icon: 'usercheck', sub: 'one sentence' },
    { id: 'verbal', label: 'VERBAL', pattern: 'service', icon: 'file', sub: 'the words you chose' },
    { id: 'vocal', label: 'VOCAL', pattern: 'network', icon: 'waves', sub: 'tone · pace · pitch · pause' },
    { id: 'visual', label: 'VISUAL', pattern: 'storage', icon: 'scanface', sub: 'eyes · face · posture · hands' },
    { id: 'them', label: 'One impression', pattern: 'user', icon: 'users', sub: 'they never separate the three' },
  ],
  edges: [
    { source: 'you', target: 'verbal' },
    { source: 'you', target: 'vocal' },
    { source: 'you', target: 'visual' },
    { source: 'verbal', target: 'them' },
    { source: 'vocal', target: 'them' },
    { source: 'visual', target: 'them' },
  ],
}
