import type { Scene } from '@graphlearning/flow'

// §6 — habits that keep the practice going, and signals that are not a personal failing to absorb.
export const sustainable: Scene = {
  id: 'sustainable',
  title: 'Sustainable practice, reflection and recognising limits',
  flow: 'TB',
  nodes: [
    {
      id: 'practice',
      label: 'Keeping it going',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'reflect', label: 'Reflect', sub: '15 min on Friday: what to repeat', pattern: 'service', icon: 'pencil' },
        { id: 'one-thing', label: 'One thing', sub: 'one behaviour at a time', pattern: 'service', icon: 'star' },
        { id: 'people', label: 'People', sub: 'a mentor, peers, honest feedback', pattern: 'user', icon: 'users' },
        { id: 'rest', label: 'Rest', sub: 'no routine weekend firefighting', pattern: 'service', icon: 'clock' },
      ],
    },
    {
      id: 'limits',
      kind: 'table',
      label: 'Raise it, don’t absorb it',
      headers: ['signal', 'route'],
      values: [
        ['overtime every week', 'raise with your manager'],
        ['targets nobody can meet', 'raise it with evidence'],
        ['unsafe conditions', 'formal routes, safety'],
        ['discrimination, harassment', 'formal routes, HR'],
      ],
    },
  ],
  edges: [{ source: 'practice', target: 'limits', dashed: true }],
}
