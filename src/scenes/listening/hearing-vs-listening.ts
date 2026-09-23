import type { Scene } from '@graphlearning/flow'

// §1 hearing-vs-listening [compare] — the distinction the whole course rests on, and one that sounds
// like hair-splitting until it is priced. A DATA table because each row is the same activity costed
// two ways. The last row is the one that lands: the asymmetry is that hearing feels like listening
// from the inside and does not feel like being heard from the outside.
export const hearingVsListening: Scene = {
  id: 'hearing-vs-listening',
  padding: 0.16,
  nodes: [
    {
      id: 'two',
      kind: 'table',
      pattern: 'network',
      label: 'Hearing is not listening',
      sub: 'the same minutes, priced differently',
      headers: ['Hearing', 'Listening'],
      values: [
        ['Sound arrives at your ear', 'Attention is deliberately spent'],
        ['Free — you can do it while typing', 'Expensive — it is the only thing you do'],
        ['You catch the gist', 'You catch the ask, and the hesitation'],
        ['Feels like listening, to you', 'Feels like being heard, to them'],
      ],
    },
  ],
  edges: [],
}
