import type { Scene } from '@graphlearning/flow'

// §8 leading-without-a-title [compare] — authority against influence, as two columns. The point of
// the pairing is that influence is not a weaker substitute for authority: it works on people who do
// not report to you, which is almost everybody, and it compounds where authority is spent. Last row
// is the practical consequence for anybody without a title, which is most of the audience.
export const leadingWithoutATitle: Scene = {
  id: 'leading-without-a-title',
  padding: 0.14,
  nodes: [
    {
      id: 'lead',
      kind: 'table',
      pattern: 'service',
      label: 'Authority, and influence',
      sub: 'one of these you have to be given',
      headers: ['Authority', 'Influence'],
      values: [
        ['Tells people', 'Shows people'],
        ['Works on your reports', 'Works on everybody else'],
        ['Is spent when used', 'Compounds when used'],
        ['Comes with the title', 'Comes with a track record of being right, early, and clear'],
      ],
    },
  ],
  edges: [],
}
