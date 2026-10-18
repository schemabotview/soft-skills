import type { Scene } from '@graphlearning/flow'
import { jordan } from '../shared/people'

// §3 — two ways to open, and what listening under tension looks like.
export const opening: Scene = {
  id: 'opening',
  title: 'Opening a difficult conversation',
  flow: 'TB',
  nodes: [
    {
      id: 'openings',
      label: 'Two openings',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'blame', ...jordan, pattern: 'warn', label: 'Accusing', sub: '"Your date is unrealistic."' },
        { id: 'shared', ...jordan, label: 'Shared aim', sub: '"I want a launch plan we both trust."' },
        { id: 'blame-then', label: 'Then', sub: 'Priya defends the date', pattern: 'warn', icon: 'lock' },
        { id: 'shared-then', label: 'Then', sub: 'Priya explains the demo', pattern: 'service', icon: 'circlecheck' },
      ],
    },
    {
      id: 'listening',
      label: 'Listening while tense',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'their-view', label: 'Their view first', sub: 'summarised before yours', pattern: 'service', icon: 'repeat' },
        { id: 'body', label: 'Notice tension', sub: 'slow down, lower volume', pattern: 'network', icon: 'waves' },
        { id: 'name-pause', label: 'Name a pause', sub: '"Can we take five minutes?"', pattern: 'service', icon: 'clock' },
        { id: 'stay-specific', label: 'Stay specific', sub: 'this date, not "always"', pattern: 'service', icon: 'calendar' },
      ],
    },
  ],
  edges: [{ source: 'openings', target: 'listening', dashed: true }],
}
