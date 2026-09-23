import type { Scene } from '@graphlearning/flow'

// §10 voice-on-camera [board] — the course's closing checklist, and the only section that is pure
// practice rather than principle. A BOARD because it is a pre-call sweep you run in any order. Three
// tiles are equipment and three are behaviour: the split matters, because the equipment half is
// solved once and the behaviour half has to be chosen every call.
export const onCamera: Scene = {
  id: 'on-camera',
  padding: 0.14,
  nodes: [
    {
      id: 'kit',
      label: 'Solved once',
      pattern: 'group',
      icon: 'monitor',
      cols: 3,
      children: [
        { id: 'headset', label: 'A real headset', pattern: 'service', icon: 'plug', sub: 'laptop mics flatten you', variant: 'tile' },
        { id: 'test', label: 'Test ten minutes early', pattern: 'service', icon: 'circlecheck', sub: 'never on the call', variant: 'tile' },
        { id: 'quiet', label: 'Notifications off', pattern: 'service', icon: 'bell', sub: 'every ping costs a beat', variant: 'tile' },
      ],
    },
    {
      id: 'behaviour',
      label: 'Chosen every call',
      pattern: 'group',
      icon: 'gauge',
      cols: 3,
      children: [
        { id: 'lift', label: 'Lift energy 20%', pattern: 'warn', icon: 'zap', sub: 'the screen flattens it back', variant: 'tile' },
        { id: 'slower', label: 'Slower than in person', pattern: 'network', icon: 'clock', sub: 'latency eats your pace', variant: 'tile' },
        { id: 'shorter', label: 'Shorter sentences', pattern: 'user', icon: 'file', sub: 'so they can cut in', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
