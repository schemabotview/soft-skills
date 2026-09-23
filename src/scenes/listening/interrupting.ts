import type { Scene } from '@graphlearning/flow'

// §8 interrupting [compare] — the cut-in, costed. A DATA table because the whole argument is that
// interrupting is a TRADE, not a rudeness: it buys ten seconds and sells something larger. The last
// row is the one that changes behaviour, because nobody interrupts intending to seem impatient.
export const interrupting: Scene = {
  id: 'interrupting',
  padding: 0.16,
  nodes: [
    {
      id: 'cut',
      kind: 'table',
      pattern: 'warn',
      label: 'The cut-in, costed',
      sub: 'what ten seconds buys, and what it sells',
      headers: ['Cutting in', 'Letting it land'],
      values: [
        ['You answer where they started', 'You hear where they were going'],
        ['They stop volunteering things', 'They keep going, and tell you more'],
        ['Saves ten seconds', 'Saves the rework'],
        ['Reads as impatient', 'Reads as senior'],
      ],
    },
  ],
  edges: [],
}
