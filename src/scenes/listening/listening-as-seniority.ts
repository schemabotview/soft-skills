import type { Scene } from '@graphlearning/flow'

// §10 listening-as-seniority [script] — the course closes on the observation that makes all of it
// worth the effort: the SAME technical objection, delivered two ways, produces two completely
// different rooms. The junior version is not wrong — it is correct and fast, and that is exactly
// what makes the comparison land. The parenthetical pause is a line of its own because the two
// seconds are the whole difference.
export const listeningAsSeniority: Scene = {
  id: 'listening-as-seniority',
  padding: 0.14,
  nodes: [
    {
      id: 'two',
      kind: 'code',
      filename: 'the same objection, twice',
      label: [
        '# 0.4 seconds after they stop talking',
        '"That will not work — the partitioning is wrong."',
        '',
        '# the other one',
        '(two seconds)',
        '"Let me make sure I have it — you are proposing X so that Y?"',
        '"Yes, and also Z."',
        '"Then the thing I would want to check is the partitioning."',
        '',
        '# identical objection. one of them gets adopted.',
      ].join('\n'),
    },
  ],
  edges: [],
}
