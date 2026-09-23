import type { Scene } from '@graphlearning/flow'

// §9 the-behavioural-map [compare] — the middle column is the one that matters and the one no
// candidate sees: what the question is actually testing, which is almost never the topic it names.
// Three columns so the mapping from question to story runs through the test rather than around it —
// pick the story that answers what is being measured, not the one whose topic matches.
export const behaviouralMap: Scene = {
  id: 'behavioural-map',
  padding: 0.14,
  nodes: [
    {
      id: 'map',
      kind: 'table',
      pattern: 'service',
      label: 'What they are actually asking',
      sub: 'the question, the test, and the story that answers it',
      headers: ['They ask', 'They are testing', 'You reach for'],
      values: [
        ['"Tell me about a conflict"', 'whether you make it personal', 'the Gradle one'],
        ['"Describe a failure"', 'self-awareness', 'the rebuild'],
        ['"Led without authority?"', 'influence without power', 'the KT programme'],
        ['"Handling ambiguity"', 'whether you freeze', 'the undefined metric'],
        ['"Under pressure"', 'composure, not heroics', 'the 2 AM outage'],
      ],
    },
  ],
  edges: [],
}
