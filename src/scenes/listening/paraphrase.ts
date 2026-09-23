import type { Scene } from '@graphlearning/flow'

// §4 paraphrase [script] — the strongest scene available to this course, and the argument that
// listening is a technical skill rather than a courtesy. A real three-turn exchange: the client's
// sentence, the reflex answer that solves the wrong problem, and the paraphrase that surfaces the
// actual requirement. The last comment line is the payoff — the reflex would have shipped a faster
// Monday to somebody who needed a different day entirely.
export const paraphrase: Scene = {
  id: 'paraphrase',
  padding: 0.14,
  nodes: [
    {
      id: 'turns',
      kind: 'code',
      filename: 'three turns',
      label: [
        '# them',
        '"The dashboard is fine. It is just that by the time we see',
        ' the numbers on Monday, the week has already gone."',
        '',
        '# the reflex — solving the sentence',
        '"I can move the refresh earlier on Monday morning."',
        '',
        '# paraphrase first',
        '"So what I am hearing is that Monday is too late — you need',
        ' this during the week, not a faster Monday. Is that right?"',
        '',
        '# "Yes. Daily would change how we work."',
        '# the ask was never about Monday.',
      ].join('\n'),
    },
  ],
  edges: [],
}
