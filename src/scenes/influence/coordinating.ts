import type { Scene } from '@graphlearning/flow'

// §4 — coordinating the trial: what Sam can do without authority, and what needs someone who has it.
export const coordinating: Scene = {
  id: 'coordinating',
  title: 'Coordinating within actual authority',
  flow: 'TB',
  nodes: [
    {
      id: 'scope',
      label: 'Sam coordinates the trial',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'can',
          label: 'Sam can',
          pattern: 'service',
          cols: 1,
          children: [
            { id: 'request', label: 'Request', sub: '"Could you take the load job?"', pattern: 'service', icon: 'users' },
            { id: 'track', label: 'Track', sub: 'one shared list of owners, dates', pattern: 'service', icon: 'table' },
            { id: 'remind', label: 'Remind', sub: 'a nudge two days before a date', pattern: 'service', icon: 'bell' },
            { id: 'surface', label: 'Surface', sub: 'tell Alex when a date slips', pattern: 'service', icon: 'search' },
          ],
        },
        {
          id: 'cannot',
          label: 'Needs someone with authority',
          pattern: 'warn',
          cols: 1,
          children: [
            { id: 'assign', label: 'Assign', sub: 'Jordan’s time: Alex decides', pattern: 'warn', icon: 'lock' },
            { id: 'priorities', label: 'Reprioritise', sub: 'another team’s work', pattern: 'warn', icon: 'lock' },
            { id: 'budget', label: 'Spend', sub: 'the trial budget: Priya decides', pattern: 'warn', icon: 'lock' },
            { id: 'weekend', label: 'Extend', sub: 'support to weekends: Alex', pattern: 'warn', icon: 'lock' },
          ],
        },
      ],
    },
  ],
  edges: [],
}
