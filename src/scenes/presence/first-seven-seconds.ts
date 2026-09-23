import type { Scene } from '@graphlearning/flow'

// §6 first-impressions [board] — the seven things a room scores before you finish a sentence. A tile
// BOARD, not a flow: they are simultaneous, not sequential, and a grid is the only shape that says
// "all of these, at once". Four columns so seven tiles fill a landscape pane without the last row
// reading as an afterthought. `first sentence` is last because it is the only one under your direct
// control in the moment — it is the section's focus.
export const firstSevenSeconds: Scene = {
  id: 'first-seven-seconds',
  padding: 0.14,
  nodes: [
    {
      id: 'board',
      label: 'Scored in the first seven seconds',
      pattern: 'group',
      icon: 'clock',
      cols: 4,
      children: [
        { id: 'entry', label: 'Entry', pattern: 'user', icon: 'dooropen', sub: 'how you walk in', variant: 'tile' },
        { id: 'dress', label: 'Dress', pattern: 'user', icon: 'usercheck', sub: 'matched to the room', variant: 'tile' },
        { id: 'eyes', label: 'Eye contact', pattern: 'storage', icon: 'scanface', sub: 'warm, not staring', variant: 'tile' },
        { id: 'energy', label: 'Opening energy', pattern: 'network', icon: 'zap', sub: 'composed, not eager', variant: 'tile' },
        { id: 'posture', label: 'Posture', pattern: 'storage', icon: 'ruler', sub: 'upright, leaning in', variant: 'tile' },
        { id: 'voice', label: 'Voice quality', pattern: 'network', icon: 'waves', sub: 'clear from word one', variant: 'tile' },
        { id: 'sentence', label: 'First sentence', pattern: 'service', icon: 'file', sub: 'does it go anywhere', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
