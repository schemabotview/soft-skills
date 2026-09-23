import type { Scene } from '@graphlearning/flow'

// §1 why-stories [compare] — the claim against the specific, which is the whole course in one table.
// The left column is what candidates actually say and is not false; it is simply unusable, because
// it cannot be checked and cannot be repeated. The last row names the mechanism: specifics are
// believed BECAUSE they are checkable, not despite it.
export const whyStories: Scene = {
  id: 'why-stories',
  padding: 0.16,
  nodes: [
    {
      id: 'claim',
      kind: 'table',
      pattern: 'network',
      label: 'A claim, and a specific',
      sub: 'both true. only one of them survives the room.',
      headers: ['What gets claimed', 'What gets remembered'],
      values: [
        ['"I am a good communicator"', '"I moved the team to Gradle with a benchmark"'],
        ['"I work well under pressure"', '"2 AM outage, diagnosed in fifteen minutes"'],
        ['Forgettable by the next candidate', 'Repeated to the hiring manager'],
        ['Unverifiable', 'Checkable — which is why it is believed'],
      ],
    },
  ],
  edges: [],
}
