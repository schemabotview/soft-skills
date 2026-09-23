import type { Scene } from '@graphlearning/flow'

// §8 hedging [compare] — the language that quietly disowns your own work. A DATA table of near-
// identical sentences: the left column is not rude-made-polite, it is confident-made-deniable, and
// seeing them paired is what makes that visible. The passive-voice row is the one engineers argue
// about, so it sits in the middle rather than at the end where it would read as the punchline.
export const hedging: Scene = {
  id: 'hedging',
  padding: 0.14,
  nodes: [
    {
      id: 'hedge',
      kind: 'table',
      pattern: 'warn',
      label: 'Hedged, and owned',
      sub: 'the same claim, with and without the escape hatch',
      headers: ['What gets said', 'What it could be'],
      values: [
        ['"I think maybe we could possibly…"', '"I recommend we…"'],
        ['"The issue was fixed"', '"I found and fixed it"'],
        ['"Just a quick thought —"', '(nothing; start the sentence)'],
        ['"It sort of works"', '"It works for X. Not yet for Y."'],
        ['"Does that make sense?"', '"What questions do you have?"'],
      ],
    },
  ],
  edges: [],
}
