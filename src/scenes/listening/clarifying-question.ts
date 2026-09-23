import type { Scene } from '@graphlearning/flow'

// §5 the-clarifying-question [compare] — the abstract advice ("ask clarifying questions") made
// usable by pairing four words engineers hear every week with the one question that resolves each.
// A DATA table: the left column is the ambiguity as it actually arrives, the right is the question
// that costs eight seconds and saves a sprint.
export const clarifyingQuestion: Scene = {
  id: 'clarifying-question',
  padding: 0.14,
  nodes: [
    {
      id: 'q',
      kind: 'table',
      pattern: 'storage',
      label: 'Four words that always need one question',
      sub: 'eight seconds, against a sprint',
      headers: ['What they said', 'The question that resolves it'],
      values: [
        ['"We need it in realtime"', '"Seconds, or minutes?"'],
        ['"The report is wrong"', '"Which number, and what did you expect?"'],
        ['"ASAP"', '"Before Thursday, or today?"'],
        ['"It should be fairly simple"', '"Which part are you picturing as simple?"'],
      ],
    },
  ],
  edges: [],
}
