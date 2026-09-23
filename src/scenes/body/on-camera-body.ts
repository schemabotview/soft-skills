import type { Scene } from '@graphlearning/flow'

// §9 on-camera-body [board] — the visual half of the call setup, mirroring the vocal checklist in
// the previous course. Six tiles, split by what they fix: the top row is what the camera sees of
// you, the bottom is what you do inside that frame. `lens` is the focus — it is the single change
// that most alters how a call reads, and the one people resist because it feels like not looking at
// anyone.
export const onCameraBody: Scene = {
  id: 'on-camera-body',
  padding: 0.14,
  nodes: [
    {
      id: 'frame',
      label: 'The frame',
      pattern: 'group',
      icon: 'monitor',
      cols: 3,
      children: [
        { id: 'height', label: 'Camera at eye level', pattern: 'service', icon: 'ruler', sub: 'below it, you loom', variant: 'tile' },
        { id: 'distance', label: 'Sit back a little', pattern: 'service', icon: 'box', sub: 'head and shoulders, not a face', variant: 'tile' },
        { id: 'light', label: 'Light in front', pattern: 'service', icon: 'zap', sub: 'a window behind you erases you', variant: 'tile' },
      ],
    },
    {
      id: 'inside',
      label: 'Inside the frame',
      pattern: 'group',
      icon: 'scanface',
      cols: 3,
      children: [
        { id: 'lens', label: 'Look at the lens', pattern: 'warn', icon: 'search', sub: 'not their face, not your own', variant: 'tile' },
        { id: 'hands', label: 'Hands in shot', pattern: 'network', icon: 'users', sub: 'gestures still work on camera', variant: 'tile' },
        { id: 'still', label: 'Stiller than in a room', pattern: 'user', icon: 'circleslash', sub: 'small motion reads as large', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
