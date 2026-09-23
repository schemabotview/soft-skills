import type { Scene } from '@graphlearning/flow'

// §5 buying-time-phrases [script] — the Acknowledge beat, made sayable. Four phrases, each doing a
// different job, written as they would actually be spoken. A script card rather than a board because
// wording is the entire content here: the difference between a phrase that buys time and one that
// sounds like stalling is a handful of words, and it has to be visible on the frame.
export const buyingTimePhrases: Scene = {
  id: 'buying-time-phrases',
  padding: 0.14,
  nodes: [
    {
      id: 'phrases',
      kind: 'code',
      filename: 'four phrases',
      label: [
        '# acknowledge the question',
        '"That is a good question — let me think it through properly."',
        '',
        '# say you are structuring',
        '"There are a few dimensions here. Let me take them in order."',
        '',
        '# clarify before answering',
        '"Just so I answer the right one — technical, or process?"',
        '',
        '# bridge to a story',
        '"I had a close version of this. Can I walk you through it?"',
        '',
        '# use two of these, not four. four is a tell.',
      ].join('\n'),
    },
  ],
  edges: [],
}
