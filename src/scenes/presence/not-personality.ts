import type { Scene } from '@graphlearning/flow'

// §7 presence-is-not-personality [compare] — the imitation column against the real one. A DATA table
// because both sides are claims about the SAME behaviour, and a table is the only renderer that puts
// them on one row where the swap is visible. Rows are ordered so the last one lands: presence is not
// volume, and it is not extroversion.
export const notPersonality: Scene = {
  id: 'not-personality',
  padding: 0.16,
  nodes: [
    {
      id: 'myth',
      kind: 'table',
      pattern: 'service',
      label: 'Two things that look alike',
      sub: 'and are not the same thing at all',
      headers: ['Mistaken for presence', 'What presence actually is'],
      values: [
        ['Talking the most', 'Saying the thing that moves it forward'],
        ['Never stopping', 'Pausing on purpose'],
        ['Sounding certain about everything', 'Being exact about what you know'],
        ['Being the extrovert', 'Being the calmest person in the room'],
      ],
    },
  ],
  edges: [],
}
