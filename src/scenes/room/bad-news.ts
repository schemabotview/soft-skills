import type { Scene } from '@graphlearning/flow'

// §7 bad-news [script] — the slipped date, delivered three ways. The drip and the ambush are the two
// real-world defaults and both destroy trust by removing the other person's options. The third is
// the same fact delivered early with a plan attached, which is the only version where the
// relationship survives intact — and it is shorter than either of the others.
export const badNews: Scene = {
  id: 'bad-news',
  padding: 0.14,
  nodes: [
    {
      id: 'news',
      kind: 'code',
      filename: 'the date is going to slip',
      label: [
        '# the drip — a week of "nearly there"',
        'mon: "on track"   wed: "mostly there"   fri: "nearly"',
        '',
        '# the ambush — the morning it was due',
        '"So, this is not going to be ready today."',
        '',
        '# early, and with a plan',
        '"Thursday is at risk — the vendor schema changed and I',
        ' lost two days. Two options: ship without the returns',
        ' feed on Thursday, or take all of it on Tuesday.',
        ' My recommendation is Tuesday. Which do you want?"',
      ].join('\n'),
    },
  ],
  edges: [],
}
