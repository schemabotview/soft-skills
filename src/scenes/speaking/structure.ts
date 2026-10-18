import type { Scene } from '@graphlearning/flow'
import { sam } from '../shared/people'

// §2 — the same update told in story order and in point-first order.
export const structure: Scene = {
  id: 'structure',
  title: 'Organising an explanation',
  flow: 'TB',
  nodes: [
    {
      id: 'story',
      label: 'Story order',
      sub: 'the point arrives last, if at all',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'monday', ...sam, pattern: 'warn', label: 'First', sub: '"So on Monday, Jordan…"' },
        { id: 'then', ...sam, pattern: 'warn', label: 'Then', sub: '"…and then the retry…"' },
        { id: 'later', ...sam, pattern: 'warn', label: 'Later', sub: '"…which meant that…"' },
        { id: 'finally', ...sam, pattern: 'warn', label: 'Finally', sub: '"…so Thursday is at risk."' },
      ],
    },
    {
      id: 'point-first',
      label: 'Point first',
      sub: 'the listener knows why they are listening',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'point', ...sam, label: 'Point', sub: '"Thursday’s demo is at risk."' },
        { id: 'reason-1', ...sam, label: 'Reason', sub: '"The 11:00 load failed twice."' },
        { id: 'reason-2', ...sam, label: 'Reason', sub: '"The fix needs Jordan until Wed."' },
        { id: 'ask', ...sam, label: 'Then', sub: '"Can we decide today?"' },
      ],
    },
  ],
  edges: [{ source: 'story', target: 'point-first', label: 'instead', dashed: true }],
}
