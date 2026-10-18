import type { Scene } from '@graphlearning/flow'

// §5 — a team across time zones, and agreed response expectations by urgency.
export const timeZones: Scene = {
  id: 'time-zones',
  title: 'Asynchronous work across time zones',
  flow: 'TB',
  nodes: [
    {
      id: 'clock',
      kind: 'table',
      label: 'When Sam sends at 16:00 London',
      headers: ['person', 'local time', 'sees it'],
      values: [
        ['Priya, London', '16:00', 'now'],
        ['Jordan, Toronto', '11:00', 'now'],
        ['Mei, Singapore', '00:00', 'tomorrow morning'],
      ],
    },
    {
      id: 'expectations',
      label: 'Agreed response expectations',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'urgent', label: 'Urgent', sub: 'call; chat is not enough', pattern: 'warn', icon: 'bell' },
        { id: 'today', label: 'Today', sub: 'chat, with a clear ask', pattern: 'network', icon: 'clock' },
        { id: 'week', label: 'This week', sub: 'email or document', pattern: 'storage', icon: 'file' },
        { id: 'fyi', label: 'FYI', sub: 'no reply expected', pattern: 'external', icon: 'scroll' },
      ],
    },
  ],
  edges: [{ source: 'clock', target: 'expectations' }],
}
