import type { Scene } from '@graphlearning/flow'

// §2 technical-overload [script] — one incident, written twice. The engineer version is not wrong
// and that is the point: it is accurate, it is what you would put in the post-mortem, and it is
// useless to the person paying the invoice. A script card because the two paragraphs have to sit
// close enough to compare word for word; a table would have cut them into fragments.
export const technicalOverload: Scene = {
  id: 'technical-overload',
  padding: 0.16,
  nodes: [
    {
      id: 'two',
      kind: 'code',
      filename: 'one incident, two audiences',
      label: [
        '# to the platform team',
        '',
        '"p99 on /checkout went from 180ms to 2.4s once the retry',
        ' handler started blocking on a cold connection pool."',
        '',
        '# to the client, same incident, same morning',
        '',
        '"Checkout was slow for about 4% of customers for forty',
        ' minutes. It is fixed, and no orders were lost."',
      ].join('\n'),
    },
  ],
  edges: [],
}
