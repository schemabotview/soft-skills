import type { Scene } from '@graphlearning/flow'

// §3 action-is-most-of-it [script] — the proportions, drawn as bars inside a script card because the
// distortion is quantitative and a table of percentages would not land the way a visibly lopsided
// chart does. The engine's highlighter leaves block characters alone, so the bars render as plain
// text. Top block is what people actually do; bottom is the target.
export const actionIsMostOfIt: Scene = {
  id: 'action-is-most-of-it',
  padding: 0.16,
  nodes: [
    {
      id: 'bars',
      kind: 'code',
      filename: 'where the ninety seconds go',
      label: [
        '# what almost everyone does',
        'S  ████████████████   40%   "so the project was..."',
        'T  ████                10%',
        'A  ██████              15%',
        'R  ██                   5%   "...and yeah, it went well"',
        '   (the other 30% was setup nobody needed)',
        '',
        '# what it is scored on',
        'S  ██████              15%',
        'T  ████                10%',
        'A  ████████████████████████   60%   what YOU did',
        'R  ██████              15%   with a number',
      ].join('\n'),
    },
  ],
  edges: [],
}
