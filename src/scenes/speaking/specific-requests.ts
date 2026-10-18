import type { Scene } from '@graphlearning/flow'
import { sam, jordan } from '../shared/people'

// §4 — a vague request against a specific one, part by part, and the agreement check.
export const specificRequests: Scene = {
  id: 'specific-requests',
  title: 'Specific requests',
  flow: 'TB',
  nodes: [
    { id: 'vague', ...sam, pattern: 'warn', label: 'Vague', sub: '"Can someone look at the feed?"' },
    {
      id: 'parts',
      label: 'The same request, specific',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'who', ...sam, label: 'Who', sub: '"Jordan, could you…"' },
        { id: 'what', ...sam, label: 'What', sub: '"…move the 11:00 load to 10:00…"' },
        { id: 'why', ...sam, label: 'Why', sub: '"…so stores see it before noon…"' },
        { id: 'when', ...sam, label: 'By when', sub: '"…by Wednesday, if possible?"' },
      ],
    },
    {
      id: 'agreement',
      label: 'Checking agreement',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'jordan-reply', ...jordan, label: 'Jordan', sub: '"Probably. I’ll confirm by 3 pm."' },
        { id: 'not-yet', label: 'Not yet a yes', sub: 'note it as pending', pattern: 'network', icon: 'clock' },
      ],
    },
  ],
  edges: [
    { source: 'vague', target: 'parts', label: 'instead', dashed: true },
    { source: 'parts', target: 'agreement' },
  ],
}
