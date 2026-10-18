import type { Scene } from '@graphlearning/flow'

// §2 — Sam's list, ordered by impact, urgency, risk and dependency, and a new urgent request.
export const priorities: Scene = {
  id: 'priorities',
  title: 'Prioritising by impact, urgency, risk and dependency',
  flow: 'TB',
  nodes: [
    {
      id: 'list',
      kind: 'table',
      label: 'Sam’s list on Monday',
      headers: ['work', 'impact', 'urgent', 'risk', 'blocks', 'order'],
      values: [
        ['region note for demo', 'high', 'Thu', 'low', 'demo', '1'],
        ['export columns, agreed', 'high', 'Fri', 'high', 'finance', '2'],
        ['refund bug fix', 'high', 'next wk', 'high', 'totals', '3'],
        ['chart colour polish', 'low', '—', 'low', '—', 'later'],
      ],
    },
    {
      id: 'new-request',
      label: 'Priya, Tuesday: "Finance needs the export by Friday too"',
      pattern: 'external',
      cols: 1,
      children: [
        { id: 'scope', label: 'Scope', sub: 'fewer columns first', pattern: 'service', icon: 'scissors' },
        { id: 'date', label: 'Date', sub: 'bug fix moves a week', pattern: 'service', icon: 'calendar' },
        { id: 'capacity', label: 'Capacity', sub: 'Mei takes the polish', pattern: 'service', icon: 'users' },
      ],
    },
  ],
  edges: [{ source: 'list', target: 'new-request', dashed: true }],
}
