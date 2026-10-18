import type { Scene } from '@graphlearning/flow'

// §4 — the request, the need underneath it, the constraints around it, and the option that fits.
export const needsConstraints: Scene = {
  id: 'needs-constraints',
  title: 'Requests, needs and constraints',
  flow: 'TB',
  nodes: [
    {
      id: 'layers',
      label: 'Three layers of "real time"',
      pattern: 'group',
      cols: 3,
      children: [
        {
          id: 'request',
          kind: 'list',
          label: 'The request',
          sub: 'what was said',
          icon: 'pencil',
          items: ['"real time"', 'on the dashboard', 'for the demo', 'from Priya, the sponsor'],
        },
        {
          id: 'need',
          kind: 'list',
          label: 'The need',
          sub: 'what it is for',
          icon: 'search',
          items: ['spot low stock', 'before the noon order', 'in every region', 'without extra staff'],
        },
        {
          id: 'constraints',
          kind: 'list',
          label: 'The constraints',
          sub: 'what limits it',
          icon: 'lock',
          items: ['source loads every 2 h', 'no streaming budget', 'Jordan owns the feed', 'demo on Thursday'],
        },
      ],
    },
    {
      id: 'options',
      label: 'Options that meet the need',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'twice', label: 'Twice a day', sub: '06:00 and 11:00 loads', pattern: 'service', icon: 'clock' },
        { id: 'alert', label: 'Low-stock flag', sub: 'highlights what to reorder', pattern: 'service', icon: 'bell' },
        { id: 'stream', label: 'Streaming', sub: 'meets the words, not the need', pattern: 'warn', icon: 'ban' },
        { id: 'ask-jordan', label: 'Ask Jordan', sub: 'can loads move earlier?', pattern: 'storage', icon: 'database' },
      ],
    },
  ],
  edges: [{ source: 'layers', target: 'options' }],
}
