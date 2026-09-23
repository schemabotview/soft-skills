import type { Scene } from '@graphlearning/flow'

// §6 face [board] — the channel you cannot see yourself use, which is why the recording matters more
// here than anywhere else. Four tiles rather than six: the face has fewer independent controls than
// people assume, and padding each out would invent distinctions. `resting` is the focus because it
// is the one nobody believes about themselves until they watch it back.
export const face: Scene = {
  id: 'face',
  padding: 0.16,
  nodes: [
    {
      id: 'board',
      label: 'What your face is doing',
      pattern: 'group',
      icon: 'scanface',
      cols: 2,
      children: [
        { id: 'nod', label: 'The nod', pattern: 'service', icon: 'circlecheck', sub: 'once, at the end of their thought' },
        { id: 'smile', label: 'The genuine one', pattern: 'user', icon: 'star', sub: 'reaches the eyes, or reads as a mask' },
        { id: 'resting', label: 'Your resting face', pattern: 'warn', icon: 'search', sub: 'concentration looks like disapproval' },
        { id: 'react', label: 'Reacting at all', pattern: 'network', icon: 'waves', sub: 'a still face reads as a closed one' },
      ],
    },
  ],
  edges: [],
}
