import type { Scene } from '@graphlearning/flow'

// §6 technique-per-question [compare] — the decision board, straight from the source workshop and
// kept in its three-column shape because the shape is what makes it usable in the moment. A DATA
// table: question type, the technique it wants, and the words you actually open with. Reading the
// first column alone is enough under pressure, which is the test for a table meant to be recalled.
export const techniquePerQuestion: Scene = {
  id: 'technique-per-question',
  padding: 0.14,
  nodes: [
    {
      id: 'match',
      kind: 'table',
      pattern: 'service',
      label: 'Match the technique to the question',
      sub: 'three kinds, three openings',
      headers: ['The question is…', 'Technique', 'You open with'],
      values: [
        ['Straightforward', 'Transition', '"That matters because…"'],
        ['Complex', 'Slow down, structure', '"There are a few dimensions here."'],
        ['Behavioural', 'Pause, then STAR', '"Let me pick the best example."'],
      ],
    },
  ],
  edges: [],
}
