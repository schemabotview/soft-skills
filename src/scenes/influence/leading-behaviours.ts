import type { Scene } from '@graphlearning/flow'

// §1 — leadership as things people do, seen in the team without anyone's title changing.
export const leadingBehaviours: Scene = {
  id: 'leading-behaviours',
  title: 'Leadership as behaviour, service and responsibility',
  flow: 'TB',
  nodes: [
    {
      id: 'behaviours',
      label: 'Leading, with no change of title',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'notice', label: 'Noticing', sub: 'Sam: shops ask for afternoon data', pattern: 'service', icon: 'search' },
        { id: 'serve', label: 'Serving', sub: 'Jordan pairs with Mei on the feed', pattern: 'service', icon: 'users' },
        { id: 'own', label: 'Owning', sub: 'Mei reports the refund bug', pattern: 'service', icon: 'bug' },
        { id: 'follow', label: 'Following up', sub: 'Sam checks the 3 shops on Friday', pattern: 'service', icon: 'calendar' },
        { id: 'credit', label: 'Crediting', sub: 'Alex names Jordan in the review', pattern: 'service', icon: 'star' },
        { id: 'raise', label: 'Raising risk', sub: 'Jordan flags the 15th, early', pattern: 'warn', icon: 'bell' },
      ],
    },
    {
      id: 'is-not',
      kind: 'table',
      label: 'What leadership is not',
      headers: ['not this', 'but this'],
      values: [
        ['a job title', 'what you do this week'],
        ['deciding for others', 'helping a group decide'],
        ['being the loudest', 'making others heard'],
        ['taking every task', 'making work possible'],
      ],
    },
  ],
  edges: [{ source: 'behaviours', target: 'is-not', dashed: true }],
}
