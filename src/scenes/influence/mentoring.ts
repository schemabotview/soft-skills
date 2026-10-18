import type { Scene } from '@graphlearning/flow'
import { mei, sam } from '../shared/people'

// §5 — Mei asks for an answer; Sam asks reasoning questions first, then offers advice.
export const mentoring: Scene = {
  id: 'mentoring',
  title: 'Mentoring and enabling independent judgement',
  flow: 'TB',
  nodes: [
    { id: 'question', ...mei, label: 'Mei', sub: '"The 15:00 load is slow. Index, or rewrite?"' },
    {
      id: 'two-replies',
      label: 'Two replies',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'telling',
          label: 'Telling',
          pattern: 'warn',
          cols: 1,
          children: [
            { id: 'tell', ...sam, label: 'Sam', sub: '"Add an index on shop and date."' },
            { id: 'thanks', ...mei, label: 'Mei', sub: '"Thanks, done."' },
            { id: 'tell-then', ...mei, label: 'Next time', sub: 'Mei asks Sam again' },
          ],
        },
        {
          id: 'asking',
          label: 'Asking first',
          pattern: 'service',
          cols: 1,
          children: [
            { id: 'measured', ...sam, label: 'Sam', sub: '"What did you measure?"' },
            { id: 'first', ...sam, label: 'Sam', sub: '"Which would you try first?"' },
            { id: 'mei-reasons', ...mei, label: 'Mei', sub: '"The index, then measure again."' },
            { id: 'advice', ...sam, label: 'Then advice', sub: '"Agreed. Check the plan too."' },
          ],
        },
      ],
    },
  ],
  edges: [{ source: 'question', target: 'two-replies', dashed: true }],
}
