import type { Scene } from '@graphlearning/flow'

// §1 — task, relationship and process disagreements, and how one turns into another.
export const conflictTypes: Scene = {
  id: 'conflict-types',
  title: 'Task, relationship and process disagreements',
  flow: 'TB',
  nodes: [
    {
      id: 'types',
      kind: 'table',
      label: 'The launch-date argument has all three',
      headers: ['kind', 'here', 'helps'],
      values: [
        ['task', 'launch on the 15th, or in 3 weeks?', 'evidence, options'],
        ['process', 'who decides the launch date?', 'clear decision rights'],
        ['relationship', '"Jordan always blocks things"', 'a private conversation'],
      ],
    },
    {
      id: 'drift',
      label: 'How it drifts',
      pattern: 'warn',
      cols: 1,
      children: [
        { id: 'starts', label: 'Starts as task', sub: 'different views on risk', pattern: 'service', icon: 'scale' },
        { id: 'unclear', label: 'Unclear process', sub: 'nobody knows who decides', pattern: 'warn', icon: 'search' },
        { id: 'personal', label: 'Turns personal', sub: '"always", "never", motives', pattern: 'warn', icon: 'skull' },
      ],
    },
  ],
  edges: [{ source: 'types', target: 'drift', dashed: true }],
}
