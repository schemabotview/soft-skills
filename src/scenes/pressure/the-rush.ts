import type { Scene } from '@graphlearning/flow'

// §2 the-rush [compare] — what the extra two seconds actually change, row by row. A DATA table
// because every line is the same moment measured twice. The final row is the section's whole
// argument compressed: rushing FEELS safer and is not, and no amount of being told to slow down
// beats seeing the two columns side by side.
export const theRush: Scene = {
  id: 'the-rush',
  padding: 0.16,
  nodes: [
    {
      id: 'rush',
      kind: 'table',
      pattern: 'warn',
      label: 'Two seconds, priced',
      sub: 'the same answer, started at different times',
      headers: ['Straight in', 'After the beat'],
      values: [
        ['You answer the question you assumed', 'You answer the one they asked'],
        ['Structure collapses, fillers arrive', 'Structure holds'],
        ['You outrun your own thinking', 'Your thinking leads'],
        ['Reads as anxious', 'Reads as considered'],
        ['Feels safer', 'Is safer'],
      ],
    },
  ],
  edges: [],
}
