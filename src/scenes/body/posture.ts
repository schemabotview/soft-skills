import type { Scene } from '@graphlearning/flow'

// §3 posture [compare] — three states, not two, which is the point: most advice pits "upright"
// against "slouched" and misses that over-leaning reads just as badly, in the other direction. Three
// columns in a DATA table put all three on one row per signal, so the middle column reads as the
// target rather than as a compromise.
export const posture: Scene = {
  id: 'posture',
  padding: 0.16,
  nodes: [
    {
      id: 'three',
      kind: 'table',
      pattern: 'storage',
      label: 'Three postures, one of them right',
      sub: 'too far back · engaged · too far forward',
      headers: ['Slouched', 'Engaged', 'Over-leaning'],
      values: [
        ['Weight back', 'Upright, slight lean in', 'Crowding the table'],
        ['Reads as bored', 'Reads as interested', 'Reads as anxious'],
        ['Breath is crushed', 'Breath is free', 'Breath is held'],
        ['"I am not invested"', '"I am with you"', '"I need something"'],
      ],
    },
  ],
  edges: [],
}
