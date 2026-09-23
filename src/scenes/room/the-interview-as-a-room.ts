import type { Scene } from '@graphlearning/flow'

// §1 the-interview-as-a-room [board] — the capstone's opening move: forty minutes, laid out as the
// eight places the preceding courses get spent. A BOARD rather than a flow, even though an interview
// is sequential, because the point is coverage not order — every one of these is already trained,
// and seeing them as one grid is what makes the interview stop feeling like a single ordeal.
// Course names only, never numbers (see COURSE-PLAN.md).
export const theInterviewAsARoom: Scene = {
  id: 'the-interview-as-a-room',
  padding: 0.14,
  nodes: [
    {
      id: 'board',
      label: 'Forty minutes, and what each part is made of',
      pattern: 'group',
      icon: 'clock',
      cols: 4,
      children: [
        { id: 'r-entry', label: 'The entry', pattern: 'user', icon: 'dooropen', sub: 'body', variant: 'tile' },
        { id: 'r-open', label: 'Tell me about yourself', pattern: 'network', icon: 'star', sub: 'pitch', variant: 'tile' },
        { id: 'r-tech', label: 'The technical part', pattern: 'service', icon: 'terminal', sub: 'structure', variant: 'tile' },
        { id: 'r-hard', label: 'The one you cannot answer', pattern: 'warn', icon: 'zap', sub: 'pressure', variant: 'tile' },
        { id: 'r-behav', label: 'Tell me about a time', pattern: 'storage', icon: 'scroll', sub: 'stories', variant: 'tile' },
        { id: 'r-listen', label: 'Their long question', pattern: 'user', icon: 'users', sub: 'listening', variant: 'tile' },
        { id: 'r-yours', label: 'Your questions', pattern: 'network', icon: 'search', sub: 'the ten minutes people waste', variant: 'tile' },
        { id: 'r-exit', label: 'The exit', pattern: 'user', icon: 'usercheck', sub: 'body', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
