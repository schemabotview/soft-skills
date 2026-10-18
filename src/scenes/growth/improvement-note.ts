import type { Scene } from '@graphlearning/flow'
import { alex, mei, priya } from '../shared/people'

// §2 — one pattern across several pieces of feedback, and one small behaviour change.
export const improvementNote: Scene = {
  id: 'improvement-note',
  title: 'Learning needs, feedback patterns and small changes',
  flow: 'TB',
  nodes: [
    {
      id: 'pair',
      label: 'From feedback to one change',
      pattern: 'group',
      cols: 2,
      children: [
    {
      id: 'feedback',
      label: 'Three comments, one pattern',
      pattern: 'external',
      cols: 1,
      children: [
        { id: 'from-priya', ...priya, label: 'Priya', sub: '"The update buried the ask."' },
        { id: 'from-alex', ...alex, label: 'Alex', sub: '"Strong, once you got to the decision."' },
        { id: 'from-mei', ...mei, label: 'Mei', sub: '"I was lost in the first minute."' },
      ],
    },
    {
      id: 'note',
      label: 'Sam’s improvement note',
      pattern: 'service',
      cols: 1,
      children: [
        { id: 'pattern', label: 'Pattern', sub: 'detail first, the point late', pattern: 'service', icon: 'search' },
        { id: 'behaviour', label: 'One behaviour', sub: 'open with the point or the ask', pattern: 'service', icon: 'star' },
        { id: 'opportunity', label: 'Opportunity', sub: 'the Monday status note', pattern: 'service', icon: 'calendar' },
        { id: 'optional', label: 'Feedback', sub: 'optional: ask Alex in 4 weeks', pattern: 'service', icon: 'users' },
      ],
    },
      ],
    },
  ],
  edges: [],
}
