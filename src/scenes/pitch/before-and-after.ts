import type { Scene } from '@graphlearning/flow'

// §8 before-and-after [compare] — the makeover from the source workshop, but taken apart into the
// properties that changed rather than shown as two paragraphs. The paragraphs are already on the
// script cards in this course; what this table adds is WHY the second one works, row by row, which
// is the part a reader cannot extract by looking at the two blocks side by side.
export const beforeAndAfter: Scene = {
  id: 'before-and-after',
  padding: 0.14,
  nodes: [
    {
      id: 'diff',
      kind: 'table',
      pattern: 'user',
      label: 'The same person, twice',
      sub: 'what actually changed between the two',
      headers: ['Before', 'After'],
      values: [
        ['Opens with education', 'Opens with role and domain'],
        ['Lists nine technologies', 'Names one achievement'],
        ['No number anywhere', '"cut API response time by 40%"'],
        ['"looking for a good opportunity"', '"a senior role where I drive architecture"'],
        ['52 words, no hook', '38 words, three hooks'],
      ],
    },
  ],
  edges: [],
}
