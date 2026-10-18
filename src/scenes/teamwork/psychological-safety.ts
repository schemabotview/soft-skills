import type { Scene } from '@graphlearning/flow'
import { mei, alex } from '../shared/people'

// §3 — a new member's challenge, two responses, and safety alongside accountability.
export const psychologicalSafety: Scene = {
  id: 'psychological-safety',
  title: 'Psychological safety and accountability',
  flow: 'TB',
  nodes: [
    { id: 'challenge', ...mei, label: 'Mei', sub: '"The region totals don’t match finance?"' },
    {
      id: 'responses',
      label: 'Two responses from Alex',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'shut', ...alex, pattern: 'warn', label: 'Shut down', sub: '"We covered that before you joined."' },
        { id: 'open', ...alex, label: 'Open up', sub: '"Good catch. Show us where."' },
        { id: 'shut-then', label: 'Then', sub: 'Mei stops raising issues', pattern: 'warn', icon: 'lock' },
        { id: 'open-then', label: 'Then', sub: 'a refund bug found early', pattern: 'service', icon: 'bug' },
      ],
    },
    {
      id: 'grid',
      kind: 'table',
      label: 'Safety and accountability together (one model)',
      headers: ['', 'low accountability', 'high accountability'],
      values: [
        ['high safety', 'comfortable, coasting', 'learning, improving'],
        ['low safety', 'disengaged', 'anxious, hiding errors'],
      ],
    },
  ],
  edges: [
    { source: 'challenge', target: 'responses' },
    { source: 'responses', target: 'grid', dashed: true },
  ],
}
