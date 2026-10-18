import type { Scene } from '@graphlearning/flow'

// §4 — what each person asks for, and why they ask for it.
export const positionsInterests: Scene = {
  id: 'positions-interests',
  title: 'Positions and interests',
  flow: 'TB',
  nodes: [
    {
      id: 'sides',
      label: 'Positions above, interests below',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'priya-side',
          kind: 'list',
          label: 'Priya',
          sub: 'position: launch on the 15th',
          icon: 'building',
          items: ['demo to a key customer', 'their contract renews', 'credibility with the director'],
        },
        {
          id: 'jordan-side',
          kind: 'list',
          label: 'Jordan',
          sub: 'position: launch in 3 weeks',
          icon: 'database',
          items: ['numbers that reconcile', 'not blamed for errors', 'no weekend firefighting'],
        },
      ],
    },
    {
      id: 'shared',
      label: 'What they share',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'trust', label: 'Customer trust', sub: 'wrong numbers would hurt it', pattern: 'service', icon: 'users' },
        { id: 'success', label: 'A launch that lands', sub: 'not a launch and a recall', pattern: 'service', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [{ source: 'sides', target: 'shared' }],
}
