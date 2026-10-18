import type { Scene } from '@graphlearning/flow'
import { jordan, sam } from '../shared/people'

// §6 — transparent persuasion against pressure; dissent heard; follow-through recorded.
export const ethicalInfluence: Scene = {
  id: 'ethical-influence',
  title: 'Ethical influence, credit, dissent and follow-through',
  flow: 'TB',
  nodes: [
    {
      id: 'lines',
      kind: 'table',
      label: 'Persuasion or pressure',
      headers: ['transparent', 'pressure or concealment'],
      values: [
        ['show the weekend gap', 'leave the gap out'],
        ['a real deadline, stated', 'an invented "today only"'],
        ['credit Jordan and Mei', '"my trial"'],
        ['ask for objections', 'go around the objector'],
        ['report the result', 'move on and forget'],
      ],
    },
    {
      id: 'after',
      label: 'After the decision',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'dissent', ...jordan, label: 'Jordan', sub: '"I’d skip it. Noted; I’ll build it."' },
        { id: 'heard', ...sam, label: 'Sam', sub: '"Your concern is in the note."' },
        { id: 'review', label: 'Review date', sub: 'end of the one-month trial', pattern: 'service', icon: 'calendar' },
        { id: 'measure', label: 'Measure', sub: 'is the 15:00 data used?', pattern: 'service', icon: 'gauge' },
      ],
    },
  ],
  edges: [{ source: 'lines', target: 'after', dashed: true }],
}
