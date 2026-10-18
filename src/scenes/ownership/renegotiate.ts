import type { Scene } from '@graphlearning/flow'
import { sam } from '../shared/people'

// §5 — an early blocker update with options, against the same news on Thursday night.
export const renegotiate: Scene = {
  id: 'renegotiate',
  title: 'Raising blockers and renegotiating',
  flow: 'TB',
  nodes: [
    {
      id: 'timing',
      label: 'The same news, at two times',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'tuesday', label: 'Tuesday 10:00', sub: 'three options still open', pattern: 'service', icon: 'calendar' },
        { id: 'thursday', label: 'Thursday 22:00', sub: 'only an apology left', pattern: 'warn', icon: 'clock' },
      ],
    },
    {
      id: 'update',
      label: 'Sam’s Tuesday message to Alex and Priya',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'changed', ...sam, label: 'Changed', sub: '"The refund bug is bigger than thought."' },
        { id: 'impact', ...sam, label: 'Impact', sub: '"Export and bug fix won’t both fit."' },
        { id: 'options', ...sam, label: 'Options', sub: '"Fewer columns, a later fix, or help."' },
        { id: 'decide', ...sam, label: 'Who decides', sub: '"Could you choose by Wed noon?"' },
      ],
    },
  ],
  edges: [{ source: 'timing', target: 'update', dashed: true }],
}
