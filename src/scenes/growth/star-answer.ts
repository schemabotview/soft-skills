import type { Scene } from '@graphlearning/flow'

// §4 — an honest behavioural interview answer, including an unsuccessful outcome and what was learned.
export const starAnswer: Scene = {
  id: 'star-answer',
  title: 'Explaining contributions in interviews and career conversations',
  flow: 'TB',
  nodes: [
    {
      id: 'star',
      label: '"Tell me about something that didn’t work."',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'situation', label: 'Situation', sub: 'managers wanted afternoon data', pattern: 'external', icon: 'building' },
        { id: 'task', label: 'Task', sub: 'my proposal; I coordinated it', pattern: 'service', icon: 'pencil' },
        { id: 'action', label: 'Action', sub: 'consulted, then a 1-month trial', pattern: 'service', icon: 'wrench' },
        { id: 'result', label: 'Result', sub: '4 of 40 used it; we ended it', pattern: 'warn', icon: 'gauge' },
        { id: 'learning', label: 'Learning', sub: 'now I ask users before building', pattern: 'service', icon: 'search' },
        { id: 'since', label: 'Since then', sub: 'used it on the new shops', pattern: 'service', icon: 'repeat' },
      ],
    },
    {
      id: 'honest',
      kind: 'table',
      label: 'Keeping it accurate',
      headers: ['inflated', 'accurate'],
      values: [
        ['"I led the dashboard"', '"I built the views and the demo"'],
        ['"it was a success"', '"the main rollout worked; this didn\'t"'],
        ['"we" for everything', '"I" for my part, names for others'],
      ],
    },
  ],
  edges: [{ source: 'star', target: 'honest', dashed: true }],
}
