import type { Scene } from '@graphlearning/flow'

// §5 the-five-dimensions [board] — the dial board the rest of the course turns one at a time. Five
// tiles in a row: they are simultaneous settings on one instrument, not steps, and each carries its
// own number or rule in the `sub` so the board is usable as a reference frame on its own. This scene
// is the course's `three-channels` — the thing every later section points back at.
export const fiveDimensions: Scene = {
  id: 'five-dimensions',
  padding: 0.16,
  nodes: [
    {
      id: 'dials',
      label: 'Five dials on one instrument',
      pattern: 'group',
      icon: 'gauge',
      cols: 5,
      children: [
        { id: 'd-pace', label: 'Pace', pattern: 'service', icon: 'clock', sub: '130–150 wpm', variant: 'tile' },
        { id: 'd-pitch', label: 'Pitch', pattern: 'network', icon: 'waves', sub: 'end downward', variant: 'tile' },
        { id: 'd-tone', label: 'Tone', pattern: 'storage', icon: 'star', sub: 'warm, not flat', variant: 'tile' },
        { id: 'd-pause', label: 'Pause', pattern: 'user', icon: 'circleslash', sub: 'two seconds', variant: 'tile' },
        { id: 'd-energy', label: 'Energy', pattern: 'warn', icon: 'zap', sub: 'the room, plus ten', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
