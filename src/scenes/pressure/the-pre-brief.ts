import type { Scene } from '@graphlearning/flow'

// §10 the-pre-brief [board] — the ten minutes before, as a board of six because they happen in no
// particular order and you will not have time for all of them. Three are physical (the body course's
// work, cashed in here) and three are preparation. `opening` is the focus: rehearsing only the first
// sentence is the highest-return item, because the first sentence is when adrenaline peaks.
export const thePreBrief: Scene = {
  id: 'the-pre-brief',
  padding: 0.14,
  nodes: [
    {
      id: 'body',
      label: 'The body, first',
      pattern: 'group',
      icon: 'waves',
      cols: 3,
      children: [
        { id: 'breathe', label: 'Four in, six out', pattern: 'service', icon: 'waves', sub: 'two minutes, anywhere', variant: 'tile' },
        { id: 'shake', label: 'Shake it out', pattern: 'service', icon: 'zap', sub: 'arms, shoulders, jaw', variant: 'tile' },
        { id: 'stand', label: 'Stand and ground', pattern: 'service', icon: 'ruler', sub: 'weight even, knees soft', variant: 'tile' },
      ],
    },
    {
      id: 'prep',
      label: 'Then ten minutes of prep',
      pattern: 'group',
      icon: 'file',
      cols: 3,
      children: [
        { id: 'opening', label: 'Rehearse the opening', pattern: 'warn', icon: 'star', sub: 'out loud — only the first sentence', variant: 'tile' },
        { id: 'three', label: 'Three likely questions', pattern: 'network', icon: 'search', sub: 'and one line each', variant: 'tile' },
        { id: 'ask', label: 'Name your ask', pattern: 'user', icon: 'circlecheck', sub: 'what do you want to leave with', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
