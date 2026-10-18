import type { Scene } from '@graphlearning/flow'

// §4 — Sam's real week, and estimates given as ranges against it.
export const capacity: Scene = {
  id: 'capacity',
  title: 'Estimates, capacity and focus',
  flow: 'TB',
  nodes: [
    {
      id: 'week',
      kind: 'table',
      label: 'Sam’s week, honestly',
      headers: ['', 'hours'],
      values: [
        ['contracted', '37'],
        ['meetings', '− 8'],
        ['support questions', '− 4'],
        ['interruptions, switching', '− 5'],
        ['focus time left', '≈ 20'],
      ],
    },
    {
      id: 'estimates',
      label: 'Estimates as ranges',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'export-est', label: 'Export', sub: '8 to 14 h', pattern: 'service', icon: 'file' },
        { id: 'bug-est', label: 'Refund bug', sub: '4 to 12 h: unknown cause', pattern: 'warn', icon: 'bug' },
        { id: 'note-est', label: 'Demo note', sub: '1 to 2 h', pattern: 'service', icon: 'pencil' },
        { id: 'total', label: 'Total', sub: '13 to 28 h, against 20', pattern: 'network', icon: 'gauge' },
      ],
    },
  ],
  edges: [{ source: 'week', target: 'estimates' }],
}
