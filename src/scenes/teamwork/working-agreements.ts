import type { Scene } from '@graphlearning/flow'
import { sam, jordan } from '../shared/people'

// §1 — a task that fell between two assumed owners, the ownership table that fixed it, and agreements.
export const workingAgreements: Scene = {
  id: 'working-agreements',
  title: 'Goals, roles, dependencies and working agreements',
  flow: 'TB',
  nodes: [
    {
      id: 'gap',
      label: 'The export format: whose job?',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'sam-thinks', ...sam, pattern: 'warn', label: 'Sam', sub: '"Jordan sets the export format."' },
        { id: 'jordan-thinks', ...jordan, pattern: 'warn', label: 'Jordan', sub: '"Sam decides what it looks like."' },
      ],
    },
    {
      id: 'owners',
      kind: 'table',
      label: 'Who owns what',
      headers: ['work', 'owner', 'depends on'],
      values: [
        ['data feed and loads', 'Jordan', '—'],
        ['dashboard and export', 'Sam', 'the feed'],
        ['what the export contains', 'Priya', 'finance input'],
        ['plan and priorities', 'Alex', 'everyone'],
      ],
    },
    {
      id: 'agreements',
      label: 'Working agreements',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'updates', label: 'Updates', sub: 'Tuesdays, in the doc', pattern: 'service', icon: 'calendar' },
        { id: 'blockers', label: 'Blockers', sub: 'raised the same day', pattern: 'service', icon: 'bell' },
        { id: 'decisions', label: 'Decisions', sub: 'in the decision record', pattern: 'service', icon: 'file' },
        { id: 'reviews', label: 'Reviews', sub: 'within one working day', pattern: 'service', icon: 'clock' },
      ],
    },
  ],
  edges: [
    { source: 'gap', target: 'owners', label: 'resolved by', dashed: true },
    { source: 'owners', target: 'agreements' },
  ],
}
