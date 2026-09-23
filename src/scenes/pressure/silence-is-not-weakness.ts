import type { Scene } from '@graphlearning/flow'

// §3 silence-is-not-weakness [board] — four things the pause mechanically buys, as a board rather
// than a flow because they all happen in the same two seconds. Kept to what is physiological or
// observable: this section has to argue against a strong felt instinct, so vague reassurance is
// worse than useless.
export const silenceIsNotWeakness: Scene = {
  id: 'silence-is-not-weakness',
  padding: 0.16,
  nodes: [
    {
      id: 'board',
      label: 'What two seconds actually buys',
      pattern: 'group',
      icon: 'clock',
      cols: 2,
      children: [
        { id: 's1', label: 'One exhale', pattern: 'service', icon: 'waves', sub: 'the fastest route down from adrenaline' },
        { id: 's2', label: 'Working memory back', pattern: 'network', icon: 'brain', sub: 'enough to hold a structure' },
        { id: 's3', label: 'A choice of shape', pattern: 'storage', icon: 'layers', sub: 'PREP, or STAR, or neither' },
        { id: 's4', label: 'Visible consideration', pattern: 'user', icon: 'usercheck', sub: 'they see you thinking, not stalling' },
      ],
    },
  ],
  edges: [],
}
