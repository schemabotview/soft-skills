import type { Scene } from '@graphlearning/flow'
import { sam } from '../shared/people'

// §3 — a vague task broken into milestones, with one visible next action.
export const nextActions: Scene = {
  id: 'next-actions',
  title: 'Visible next actions and milestones',
  flow: 'TB',
  nodes: [
    { id: 'vague', ...sam, pattern: 'warn', label: 'On the list', sub: '"Do the export"' },
    {
      id: 'milestones',
      label: 'Milestones',
      sub: 'each one someone can see',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'm1', label: 'Agree columns', sub: 'with Priya, Tue', pattern: 'external', icon: 'users' },
        { id: 'm2', label: 'Sample file', sub: 'to finance, Wed', pattern: 'storage', icon: 'file' },
        { id: 'm3', label: 'Build', sub: 'from the sample, Thu', pattern: 'service', icon: 'wrench' },
        { id: 'm4', label: 'Check totals', sub: 'against finance, Fri', pattern: 'service', icon: 'scale' },
      ],
    },
    {
      id: 'next',
      label: 'The next action, today',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'action', label: 'Do', sub: 'email Priya 3 column options', pattern: 'service', icon: 'pencil' },
        { id: 'size', label: 'Size', sub: '30 minutes, before 11:00', pattern: 'network', icon: 'clock' },
      ],
    },
  ],
  edges: [
    { source: 'vague', target: 'milestones', label: 'broken down' },
    { source: 'milestones', target: 'next' },
  ],
}
