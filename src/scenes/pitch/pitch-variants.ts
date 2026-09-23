import type { Scene } from '@graphlearning/flow'

// §9 pitch-variants [board] — four contexts, four lengths, one underlying pitch. A board because you
// are selecting, not sequencing. Each `sub` carries the duration, which is the real difference
// between them: the networking line and the interview open are the same content at four times the
// compression, and knowing which one you are in is most of getting it right.
export const pitchVariants: Scene = {
  id: 'pitch-variants',
  padding: 0.16,
  nodes: [
    {
      id: 'board',
      label: 'One pitch, four lengths',
      pattern: 'group',
      icon: 'layers',
      cols: 2,
      children: [
        { id: 'v-interview', label: 'The interview open', pattern: 'service', icon: 'usercheck', sub: '90 seconds — the full PPF' },
        { id: 'v-network', label: 'The networking line', pattern: 'network', icon: 'users', sub: '15 seconds — Past + the number' },
        { id: 'v-client', label: 'The client intro', pattern: 'storage', icon: 'building', sub: '30 seconds — no internal jargon' },
        { id: 'v-profile', label: 'The profile summary', pattern: 'user', icon: 'file', sub: 'written — same words, first person' },
      ],
    },
  ],
  edges: [],
}
