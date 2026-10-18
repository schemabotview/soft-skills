import type { Scene } from '@graphlearning/flow'
import { alex, sam } from '../shared/people'

// §6 — saying no to a commitment Sam cannot make, firmly and with options.
export const disagree: Scene = {
  id: 'disagree',
  title: 'Saying no and raising concerns',
  flow: 'TB',
  nodes: [
    { id: 'ask', ...alex, label: 'Alex', sub: '"Tell Priya it’ll all be ready Thursday."' },
    {
      id: 'replies',
      label: 'Three ways Sam could answer',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'collapse', ...sam, pattern: 'warn', label: 'Give in', sub: '"OK, I’ll tell Priya."' },
        { id: 'collapse-then', label: 'Then', sub: 'a promise nobody can keep', pattern: 'warn', icon: 'skull' },
        { id: 'harsh', ...sam, pattern: 'warn', label: 'Snap', sub: '"That’s unrealistic and you know it."' },
        { id: 'harsh-then', label: 'Then', sub: 'Alex defends the date', pattern: 'warn', icon: 'lock' },
        { id: 'firm', ...sam, label: 'Firm', sub: '"I can’t promise all of it. Two options:"' },
        { id: 'firm-then', label: 'Then', sub: 'a choice Alex can own', pattern: 'service', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [{ source: 'ask', target: 'replies' }],
}
