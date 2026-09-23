import type { Scene } from '@graphlearning/flow'

// §7 i-dont-know [script] — three responses to the same gap. The bluff and the collapse are both
// common and both lose, for opposite reasons; the bridge is what the third option actually sounds
// like, which is the part nobody demonstrates. Written as speech because the difference lives
// entirely in the wording — "I don't know" appears in two of the three and only ruins one.
export const iDontKnow: Scene = {
  id: 'i-dont-know',
  padding: 0.14,
  nodes: [
    {
      id: 'three',
      kind: 'code',
      filename: 'three ways to not know',
      label: [
        '# the bluff — plausible, and they will follow up',
        '"I think it uses some kind of consensus protocol, probably."',
        '',
        '# the collapse — true, and it ends the exchange',
        '"I don\'t know."',
        '',
        '# the bridge',
        '"I have not worked with that directly. What I have done is',
        ' the equivalent in Postgres — and the thing I would check',
        ' first is whether writes are quorum or leader-only."',
        '',
        '# same admission. one of them is a demonstration.',
      ].join('\n'),
    },
  ],
  edges: [],
}
