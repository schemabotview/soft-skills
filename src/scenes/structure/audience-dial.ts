import type { Scene } from '@graphlearning/flow'

// §10 the-audience-dial [board] — the course's closing move: one fact, three audiences, and the
// realisation that "being clear" is not a fixed target. Three tiles, each naming what that listener
// is actually trying to decide, because the question they are holding is what determines which half
// of your knowledge is relevant. Not a flow — you are not escalating, you are switching.
export const audienceDial: Scene = {
  id: 'audience-dial',
  padding: 0.18,
  nodes: [
    {
      id: 'dial',
      label: 'One fact, three audiences',
      pattern: 'group',
      icon: 'users',
      cols: 3,
      children: [
        { id: 'eng', label: 'Engineer', pattern: 'service', icon: 'terminal', sub: 'wants: how. and what broke.' },
        { id: 'mgr', label: 'Manager', pattern: 'network', icon: 'gauge', sub: 'wants: when, and what is at risk' },
        { id: 'exec', label: 'Client or exec', pattern: 'user', icon: 'usercheck', sub: 'wants: impact, cost, and are we safe' },
      ],
    },
  ],
  edges: [],
}
