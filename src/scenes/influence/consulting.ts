import type { Scene } from '@graphlearning/flow'
import { alex, jordan, priya, sam } from '../shared/people'

// §3 — announcing a change before consultation, against consulting and recommending in writing.
export const consulting: Scene = {
  id: 'consulting',
  title: 'Building support through evidence and consultation',
  flow: 'TB',
  nodes: [
    {
      id: 'two-routes',
      label: 'Two ways to introduce the 15:00 load',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'announce',
          label: 'Announcing',
          pattern: 'warn',
          cols: 1,
          children: [
            { id: 'post', ...sam, label: 'Sam', sub: '"From Monday we add a 15:00 load."' },
            { id: 'jordan-no', ...jordan, label: 'Jordan', sub: '"Nobody asked me about the feed."' },
            { id: 'alex-no', ...alex, label: 'Alex', sub: '"And who supports it at 15:00?"' },
            { id: 'stall', label: 'Result', sub: 'resisted, then quietly dropped', pattern: 'warn', icon: 'ban' },
          ],
        },
        {
          id: 'consult',
          label: 'Consulting, then recommending',
          pattern: 'service',
          cols: 1,
          children: [
            { id: 'ask-jordan', ...jordan, label: 'Jordan', sub: '"Feasible if it skips refunds."' },
            { id: 'ask-alex', ...alex, label: 'Alex', sub: '"Fine on weekdays, not weekends."' },
            { id: 'note', label: 'Written note', sub: 'evidence, options, both concerns', pattern: 'storage', icon: 'file' },
            { id: 'priya-decides', ...priya, label: 'Priya', sub: '"Weekdays, a one-month trial."' },
          ],
        },
      ],
    },
  ],
  edges: [],
}
