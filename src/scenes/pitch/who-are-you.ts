import type { Scene } from '@graphlearning/flow'

// §1 who-are-you [compare] — the question you answer most often and worst. The right column is not
// a better answer; it is what the usual answer LEAVES the listener holding, which is the diagnosis
// the course needs before any framework. Last row is the commonest closing line in the industry and
// the emptiest.
export const whoAreYou: Scene = {
  id: 'who-are-you',
  padding: 0.16,
  nodes: [
    {
      id: 'usual',
      kind: 'table',
      pattern: 'warn',
      label: '"So, tell me about yourself"',
      sub: 'what gets said, and what it leaves behind',
      headers: ['The usual answer', 'What they are left holding'],
      values: [
        ['"I am a data engineer"', 'a job title they already read'],
        ['The full chronology, from university', 'ninety seconds and no hook'],
        ['The technology list', 'the same list as everybody else'],
        ['"Looking for a good opportunity"', 'nothing to follow up on'],
      ],
    },
  ],
  edges: [],
}
