import type { Scene } from '@graphlearning/flow'

// §4 breath [flow] — the one habit that moves tone, volume and nerves together. The container is the
// working cycle; the `warn` card beneath is the failure mode almost everyone defaults to under
// pressure. Both on screen at once because the section is a CONTRAST — you cannot tell someone to
// "breathe properly" without showing what they are doing instead.
//
// Three steps, not four, and TB: the rib detail rides the first card's `sub` rather than taking a
// card of its own, which keeps the cycle short enough to sit above the contrast card. The warn
// card's text is deliberately short — a pattern card does NOT grow to fit, so a three-line label
// with a five-line sub spills straight out of the box.
export const breath: Scene = {
  id: 'breath',
  padding: 0.14,
  nodes: [
    {
      id: 'cycle',
      label: 'Low breath — the working cycle',
      pattern: 'group',
      icon: 'repeat',
      flow: 'TB',
      children: [
        { id: 'drop', label: 'Diaphragm drops', pattern: 'service', icon: 'box', sub: 'belly moves, ribs widen' },
        { id: 'fill', label: 'Lungs fill low', pattern: 'network', icon: 'waves', sub: 'more air, less effort' },
        { id: 'stream', label: 'Steady stream out', pattern: 'user', icon: 'gauge', sub: 'the voice rides it' },
      ],
      edges: [
        { source: 'drop', target: 'fill' },
        { source: 'fill', target: 'stream' },
      ],
    },
    {
      id: 'shallow',
      label: 'Under pressure',
      pattern: 'warn',
      icon: 'zap',
      sub: 'shoulders rise — the breath stops at the top',
    },
  ],
  edges: [],
}
