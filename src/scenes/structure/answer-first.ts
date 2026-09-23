import type { Scene } from '@graphlearning/flow'

// §4 answer-first [script] — the engineer's default failure, transcribed. The first block is the
// discovery order, which is how we all naturally narrate and which buries the recommendation four
// minutes deep. The second is the same content inverted. The ellipsis line in the middle is doing
// real work: it is the four minutes the listener spent not knowing where this was going.
export const answerFirst: Scene = {
  id: 'answer-first',
  padding: 0.16,
  nodes: [
    {
      id: 'order',
      kind: 'code',
      filename: 'same finding, two orders',
      label: [
        '# discovery order — how we all naturally tell it',
        '',
        '"So I started with the logs, then the dashboards, and I',
        ' noticed the connection pool was saturating, and then..."',
        '',
        '            # ...four minutes later...',
        '',
        '"...so I think maybe we should raise the pool size."',
        '',
        '# conclusion order',
        '',
        '"We should raise the connection pool to 50. It saturates',
        ' at peak, and it is a one-line change."',
      ].join('\n'),
    },
  ],
  edges: [],
}
