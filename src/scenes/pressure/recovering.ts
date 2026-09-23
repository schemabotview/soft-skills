import type { Scene } from '@graphlearning/flow'

// §9 recovering [script] — the three situations everyone hits and nobody has a line ready for. Each
// pair is what the panic version sounds like against the reset. The last one is the important one:
// the broken demo is the moment people apologise their way through five minutes, and one sentence
// closes it instead.
export const recovering: Scene = {
  id: 'recovering',
  padding: 0.14,
  nodes: [
    {
      id: 'reset',
      kind: 'code',
      filename: 'three resets',
      label: [
        '# you lost the thread mid-sentence',
        'panic: "...sorry, what was I — sorry. Anyway."',
        'reset: "Let me start that again."   # then actually stop',
        '',
        '# you gave a number and it was wrong',
        'panic: (carry on and hope)',
        'reset: "Correction — it was 40%, not 60%."',
        '',
        '# the demo broke',
        'panic: five minutes of narrated debugging',
        'reset: "I will fix this after and send a recording.',
        '        Meanwhile, here is what it does."',
      ].join('\n'),
    },
  ],
  edges: [],
}
