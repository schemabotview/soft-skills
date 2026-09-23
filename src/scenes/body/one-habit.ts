import type { Scene } from '@graphlearning/flow'

// §10 one-habit-at-a-time [script] — the course closes on the practice protocol rather than a recap,
// because body language is the one channel where the failure mode is trying to fix everything at
// once. A script card of a real four-week log: one habit per fortnight, attached to moments already
// in the week. The dated entries make it a record rather than advice.
export const oneHabit: Scene = {
  id: 'one-habit',
  padding: 0.16,
  nodes: [
    {
      id: 'log',
      kind: 'code',
      filename: 'practice.md',
      label: [
        '# one habit. two weeks each. attach it to something already in the week.',
        '',
        'wk 1-2  feet flat, weight even     # every standup, while listening',
        'wk 3-4  break eye contact DOWN     # the Tuesday review',
        'wk 5-6  hands visible on the table # one-to-ones',
        '',
        '# not on this list: everything else.',
        '# a list of six habits is a way of doing none of them.',
      ].join('\n'),
    },
  ],
  edges: [],
}
