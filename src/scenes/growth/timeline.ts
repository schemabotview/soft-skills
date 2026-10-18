import type { Scene } from '@graphlearning/flow'

// §5 — the whole dashboard project as one timeline, with the skill each stage relied on.
export const timeline: Scene = {
  id: 'timeline',
  title: 'Integrated case: changed requirements through delivery and review',
  flow: 'TB',
  nodes: [
    {
      id: 'project',
      kind: 'table',
      label: 'The dashboard, start to finish',
      headers: ['stage', 'what happened', 'what helped'],
      values: [
        ['brief', '"real time" meant 06:00 and 11:00', 'clarifying questions'],
        ['update', 'the 11:00 load ran 3 h late', 'an early, plain update'],
        ['revised plan', '6 columns; file Mon, export Wed', 'trading scope for time'],
        ['disagreement', 'the 15th, or 3 weeks?', 'interests, criteria'],
        ['presentation', 'rollout approved, with a condition', 'a clear ask'],
        ['review', 'the 15:00 trial ended', 'reporting a setback'],
      ],
    },
    {
      id: 'uncertain',
      label: 'Still uncertain',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'usage', label: 'Lasting use', sub: 'will shops use it in month 6?', pattern: 'warn', icon: 'gauge' },
        { id: 'new-shops', label: 'New shops', sub: '12, in an unknown format', pattern: 'warn', icon: 'database' },
      ],
    },
  ],
  edges: [{ source: 'project', target: 'uncertain', dashed: true }],
}
