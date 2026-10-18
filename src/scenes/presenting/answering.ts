import type { Scene } from '@graphlearning/flow'
import { jordan, sam } from '../shared/people'

// §5 — one hard question, a weak answer, and an answer that separates evidence from the unknown.
export const answering: Scene = {
  id: 'answering',
  title: 'Handling questions, objections and unknowns',
  flow: 'TB',
  nodes: [
    { id: 'question', label: 'Director', sub: '"Three shops are wrong. Why trust any of it?"', pattern: 'external', icon: 'scale' },
    {
      id: 'answers',
      label: 'Two answers',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'weak',
          label: 'Defending',
          pattern: 'warn',
          cols: 1,
          children: [
            { id: 'dismiss', label: 'Dismiss', sub: '"Those are basically fine."', pattern: 'warn', icon: 'ban' },
            { id: 'guess', label: 'Guess', sub: '"Probably a timing thing."', pattern: 'warn', icon: 'circleslash' },
            { id: 'overpromise', label: 'Promise', sub: '"It\'ll be fixed by Monday."', pattern: 'warn', icon: 'zap' },
          ],
        },
        {
          id: 'better',
          label: 'Separating known and unknown',
          pattern: 'service',
          cols: 1,
          children: [
            { id: 'known', ...sam, label: 'Known', sub: '"37 shops match finance to 0.5%."' },
            { id: 'unknown', ...sam, label: 'Unknown', sub: '"We don\'t yet know why 3 differ."' },
            { id: 'follow-up', ...jordan, label: 'Follow-up', sub: '"I\'ll report the cause by Friday."' },
          ],
        },
      ],
    },
  ],
  edges: [{ source: 'question', target: 'answers', dashed: true }],
}
