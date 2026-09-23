import type { Scene } from '@graphlearning/flow'

// §5 disagreeing-up [script] — three ways to challenge a decision above you. The silent version is
// included because it is by far the commonest and is usually invisible as a choice; the blunt
// version is correct and unusable. The third makes the disagreement about a testable consequence
// and hands back the decision, which is what keeps you in the room for the next one.
export const disagreeingUp: Scene = {
  id: 'disagreeing-up',
  padding: 0.14,
  nodes: [
    {
      id: 'up',
      kind: 'code',
      filename: 'three ways to disagree upward',
      label: [
        '# silent — the commonest, and it is still a choice',
        '(say nothing. ship it. be right in six weeks.)',
        '',
        '# blunt — correct, and unusable',
        '"That will not work."',
        '',
        '# the one that keeps you in the room',
        '"I can build that. Before I do — my read is it doubles',
        ' write latency at peak. If that is priced in, I am happy',
        ' to go. If not, I would want an hour to show you why."',
        '',
        '# a testable claim, and the decision handed back.',
      ].join('\n'),
    },
  ],
  edges: [],
}
