import type { Scene } from '@graphlearning/flow'

// §5 — feedback that ends in an agreed, practical next step, and a check on it later.
export const nextStep: Scene = {
  id: 'next-step',
  title: 'Agreeing a next step and revisiting it',
  flow: 'TB',
  nodes: [
    {
      id: 'agreed',
      kind: 'table',
      label: 'What Sam and Jordan agreed',
      headers: ['step', 'who', 'when'],
      values: [
        ['one-line note if pulled away', 'Jordan', 'from now'],
        ['a named backup for handovers', 'Alex', 'this week'],
        ['handover notes in the doc', 'both', 'from now'],
        ['check how it is going', 'Sam, Jordan', 'in 2 weeks'],
      ],
    },
    {
      id: 'later',
      label: 'Two weeks later',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'worked', label: 'Worked', sub: 'two notes when pulled away', pattern: 'service', icon: 'circlecheck' },
        { id: 'adjust', label: 'Adjust', sub: 'backup never briefed', pattern: 'warn', icon: 'wrench' },
        { id: 'notice', label: 'Notice', sub: 'Sam says it out loud', pattern: 'service', icon: 'star' },
        { id: 'close', label: 'Close', sub: 'or check once more', pattern: 'external', icon: 'calendar' },
      ],
    },
  ],
  edges: [{ source: 'agreed', target: 'later' }],
}
