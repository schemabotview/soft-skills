import type { Scene } from '@graphlearning/flow'

// §1 curse-of-knowledge [compare] — the course's opening diagnosis: expertise is what makes you bad
// at explaining, which reframes the whole problem from "be clearer" to "you have a model they do not
// have". A DATA table because each row is the same instinct set against what the listener needed
// instead. Last row is the one that does the work — precision and decisions are different targets.
export const curseOfKnowledge: Scene = {
  id: 'curse-of-knowledge',
  padding: 0.16,
  nodes: [
    {
      id: 'curse',
      kind: 'table',
      pattern: 'warn',
      label: 'The curse of knowledge',
      sub: 'why the person who knows most explains worst',
      headers: ['What the expert does', 'What the listener needed'],
      values: [
        ['Names the cause', 'The effect, first'],
        ['Assumes the system model', 'Has no system model'],
        ['Tells it in discovery order', 'Wants it in conclusion order'],
        ['Optimises for precision', 'Optimises for a decision'],
      ],
    },
  ],
  edges: [],
}
