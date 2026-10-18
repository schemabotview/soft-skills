import type { Scene } from '@graphlearning/flow'
import { alex } from '../shared/people'

// §1 — "we're behind" turned into a framed problem with an outcome and constraints.
export const framing: Scene = {
  id: 'framing',
  title: 'Framing the problem',
  flow: 'TB',
  nodes: [
    { id: 'unframed', ...alex, pattern: 'warn', label: 'Unframed', sub: '"We’re behind. Everyone push harder."' },
    {
      id: 'framed',
      label: 'The same situation, framed',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'problem', label: 'Problem', sub: 'export won’t be ready Fri', pattern: 'warn', icon: 'search' },
        { id: 'outcome', label: 'Outcome', sub: 'finance can close the month', pattern: 'service', icon: 'circlecheck' },
        { id: 'constraints', label: 'Constraints', sub: 'month-end Mon, no new hires', pattern: 'storage', icon: 'lock' },
        { id: 'not-problem', label: 'Not the problem', sub: 'chart colours, streaming', pattern: 'external', icon: 'circleslash' },
      ],
    },
    {
      id: 'question',
      label: 'The question to solve',
      pattern: 'external',
      cols: 1,
      children: [
        { id: 'how-might', label: 'How might we', sub: 'give finance what it needs by Mon?', pattern: 'service', icon: 'search' },
      ],
    },
  ],
  edges: [
    { source: 'unframed', target: 'framed', label: 'framed', dashed: true },
    { source: 'framed', target: 'question' },
  ],
}
