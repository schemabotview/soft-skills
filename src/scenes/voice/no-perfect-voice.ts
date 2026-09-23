import type { Scene } from '@graphlearning/flow'

// §1 no-perfect-voice [compare] — the objection that has to be cleared before any drill: people
// arrive wanting a DIFFERENT voice. A DATA table because each row is the same wish swapped for the
// thing that actually helps, and only a table puts the two on one line. Last row is the thesis of
// the whole course: options, not a replacement.
export const noPerfectVoice: Scene = {
  id: 'no-perfect-voice',
  padding: 0.16,
  nodes: [
    {
      id: 'wish',
      kind: 'table',
      pattern: 'network',
      label: 'There is no perfect voice',
      sub: 'what people ask for, and what actually helps',
      headers: ['What you think you need', 'What you actually need'],
      values: [
        ['A deeper voice', 'The voice you have, unblocked'],
        ['A different accent', 'Clarity — a separate thing entirely'],
        ['To sound confident', 'To stop leaking uncertainty'],
        ['A different personality', 'Options you can choose between'],
      ],
    },
  ],
  edges: [],
}
