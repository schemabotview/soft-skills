import type { Scene } from '@graphlearning/flow'

// §5 hands [compare] — the same limbs doing two different jobs. A DATA table because each row is one
// gesture set against its near-identical twin: the difference between emphasis and leakage is not
// what the hands do but whether it is tied to what is being said. The last row is the tell that
// distinguishes the two columns generally.
export const hands: Scene = {
  id: 'hands',
  padding: 0.16,
  nodes: [
    {
      id: 'hands',
      kind: 'table',
      pattern: 'network',
      label: 'Two jobs, one pair of hands',
      sub: 'emphasis against leakage',
      headers: ['Leaking', 'Emphasising'],
      values: [
        ['Fidgeting with a pen', 'Still, until there is a point to make'],
        ['Hands hidden under the table', 'Open palms, visible'],
        ['Constant motion, unrelated', 'One gesture per idea'],
        ['Arms folded', 'Arms open, forearms on the table'],
        ['Moves when you are anxious', 'Moves when the sentence needs it'],
      ],
    },
  ],
  edges: [],
}
