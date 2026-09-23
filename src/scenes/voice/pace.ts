import type { Scene } from '@graphlearning/flow'

// §6 pace [compare] — the first dial, and the one with an actual number on it. A DATA table because
// every row is the same property read two ways; the rows climb from the measurable (words per
// minute) to the consequence nobody notices in the moment — that speed makes you outrun your own
// thinking, which is the real cost.
export const pace: Scene = {
  id: 'pace',
  padding: 0.16,
  nodes: [
    {
      id: 'wpm',
      kind: 'table',
      pattern: 'service',
      label: 'The pace dial',
      sub: 'the only setting with a number on it',
      headers: ['Rushed — 180+ wpm', 'At pace — 130–150 wpm'],
      values: [
        ['Reads as anxious', 'Reads as certain'],
        ['The listener falls behind', 'The listener keeps up'],
        ['No room for a pause', 'Pauses fit naturally'],
        ['You outrun your own thinking', 'Your thinking leads'],
      ],
    },
  ],
  edges: [],
}
