import type { Scene } from '@graphlearning/flow'

// §6 signposting [board] — four moves that tell the listener the shape of what is coming, so they
// can hold it. A BOARD because you reach for whichever one the moment needs, not all four in order.
// Every tile's `sub` is the actual phrase rather than a description of it — this is a section about
// wording, so the wording has to be on the frame.
export const signposting: Scene = {
  id: 'signposting',
  padding: 0.16,
  nodes: [
    {
      id: 'board',
      label: 'Four signposts',
      pattern: 'group',
      icon: 'share',
      cols: 2,
      children: [
        { id: 'count', label: 'Number it', pattern: 'service', icon: 'hash', sub: '"There are three things here."' },
        { id: 'shape', label: 'Name the shape', pattern: 'network', icon: 'layers', sub: '"Context first, then the ask."' },
        { id: 'turn', label: 'Flag the turn', pattern: 'storage', icon: 'sortarrows', sub: '"That is the good news. Now the risk."' },
        { id: 'close', label: 'Close the loop', pattern: 'user', icon: 'circlecheck', sub: '"So — the ask is one engineer, for two weeks."' },
      ],
    },
  ],
  edges: [],
}
