import type { Scene } from '@graphlearning/flow'

// §4 stakeholders [compare] — three columns, and the third is the one that changes behaviour. What
// each audience WANTS is guessable; what each one FEARS is not, and it explains the questions they
// ask that otherwise seem arbitrary. A manager asking "are you sure?" for the third time is not
// doubting you — they are managing the risk of being surprised in their own review.
export const stakeholders: Scene = {
  id: 'stakeholders',
  padding: 0.14,
  nodes: [
    {
      id: 'who',
      kind: 'table',
      pattern: 'user',
      label: 'Who is actually across the table',
      sub: 'what they want — and what they are afraid of',
      headers: ['They are', 'They want', 'They fear'],
      values: [
        ['Your manager', 'predictability', 'being surprised in their own review'],
        ['A client', 'reassurance', 'paying for the same problem twice'],
        ['An executive', 'a decision', 'risk nobody has quantified'],
        ['A peer team', 'not to be blocked', 'your work becoming their on-call'],
      ],
    },
  ],
  edges: [],
}
