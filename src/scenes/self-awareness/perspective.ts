import type { Scene } from '@graphlearning/flow'
import { priya, sam } from '../shared/people'

// §5 — what Sam assumed, what Priya's week actually held, and the question that bridged them.
export const perspective: Scene = {
  id: 'perspective',
  title: 'Perspective-taking and checking assumptions',
  flow: 'TB',
  nodes: [
    {
      id: 'views',
      label: 'Two views of the same request',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'assumed',
          kind: 'list',
          label: 'What Sam assumed',
          sub: 'from the message alone',
          icon: 'barchart',
          items: ['Priya changes plans on a whim', 'the demo date is flexible', 'regions are a nice-to-have'],
        },
        {
          id: 'actual',
          kind: 'list',
          label: 'What Priya’s week held',
          sub: 'learned by asking',
          icon: 'building',
          items: ['the director moved the review', 'regional leads will attend', 'one region view is enough'],
        },
      ],
    },
    {
      id: 'bridge',
      label: 'The exchange that bridged them',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'sam-asks', ...sam, label: 'Sam', sub: '"What’s behind the change? Who will be there?"' },
        { id: 'priya-explains', ...priya, label: 'Priya', sub: '"The director moved it up. Regional leads will come."' },
      ],
    },
    {
      id: 'limits',
      label: 'Empathy, within limits',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'not-mind-reading', label: 'Not mind-reading', sub: 'ask, do not diagnose', pattern: 'warn', icon: 'search' },
        { id: 'not-agreeing', label: 'Not agreeing', sub: 'understanding ≠ yes', pattern: 'warn', icon: 'scale' },
      ],
    },
  ],
  edges: [
    { source: 'views', target: 'bridge' },
    { source: 'bridge', target: 'limits', dashed: true },
  ],
}
