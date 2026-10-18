import type { Scene } from '@graphlearning/flow'

// §6 — each side's realistic alternative to agreement, the limits of their authority, and the record.
export const batna: Scene = {
  id: 'batna',
  title: 'Alternatives to agreement and authority limits',
  flow: 'TB',
  nodes: [
    {
      id: 'alternatives',
      kind: 'table',
      label: 'If they do not agree (each side’s BATNA)',
      headers: ['', 'realistic alternative', 'its cost'],
      values: [
        ['Priya', 'demo the old report', 'looks dated'],
        ['Jordan', 'flag the risk in writing', 'tension, no fix'],
        ['both', 'Alex decides for them', 'neither shapes it'],
      ],
    },
    {
      id: 'limits',
      label: 'What neither can do alone',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'date', label: 'Set the date', sub: 'Alex and the director do', pattern: 'warn', icon: 'calendar' },
        { id: 'promise', label: 'Promise for others', sub: 'finance, support', pattern: 'warn', icon: 'ban' },
      ],
    },
    {
      id: 'record',
      label: 'The agreement, recorded',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'what', label: 'What', sub: 'limited demo 15th, release +3 wks', pattern: 'service', icon: 'file' },
        { id: 'who', label: 'Approved by', sub: 'Alex, Wednesday', pattern: 'user', icon: 'users' },
        { id: 'risks', label: 'Open risks', sub: '3 shops still unreconciled', pattern: 'warn', icon: 'search' },
        { id: 'check', label: 'Check', sub: 'on the 8th: on track?', pattern: 'service', icon: 'clock' },
      ],
    },
  ],
  edges: [
    { source: 'alternatives', target: 'limits', dashed: true },
    { source: 'limits', target: 'record' },
  ],
}
