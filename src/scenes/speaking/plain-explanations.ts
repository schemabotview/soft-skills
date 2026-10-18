import type { Scene } from '@graphlearning/flow'
import { jordan, sam } from '../shared/people'

// §3 — a technical explanation translated for Priya, with an analogy and where it stops working.
export const plainExplanations: Scene = {
  id: 'plain-explanations',
  title: 'Plain language and bounded analogies',
  flow: 'TB',
  nodes: [
    {
      id: 'versions',
      label: 'The same delay, two ways',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'technical', ...jordan, label: 'For engineers', sub: '"The ingest job hit a lock timeout."' },
        { id: 'plain', ...sam, label: 'For Priya', sub: '"The morning data arrived 3 h late."' },
      ],
    },
    {
      id: 'analogy',
      label: 'An analogy, with its limit',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'like', label: 'Like', sub: 'a delivery that comes twice a day', pattern: 'service', icon: 'package' },
        { id: 'unlike', label: 'Unlike', sub: 'it can’t be rushed by paying', pattern: 'warn', icon: 'ban' },
      ],
    },
    {
      id: 'checks',
      label: 'Checks for a plain explanation',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'effect', label: 'Effect first', sub: 'what it means for them', pattern: 'service', icon: 'gauge' },
        { id: 'one-term', label: 'One term', sub: 'defined, if it is needed', pattern: 'service', icon: 'pencil' },
        { id: 'no-blame', label: 'No blame', sub: 'what, not who', pattern: 'service', icon: 'shieldcheck' },
        { id: 'check-back', label: 'Check back', sub: '"Does that make sense?"', pattern: 'service', icon: 'search' },
      ],
    },
  ],
  edges: [
    { source: 'versions', target: 'analogy' },
    { source: 'analogy', target: 'checks', dashed: true },
  ],
}
