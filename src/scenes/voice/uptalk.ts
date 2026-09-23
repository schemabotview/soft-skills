import type { Scene } from '@graphlearning/flow'

// §7 pitch-and-tone [script] — uptalk is impossible to describe and obvious to hear, so the scene
// shows the SAME four sentences twice and lets the punctuation carry the pitch. A script card is the
// only renderer that can do this: the question marks are the rising pitch, drawn. The `#` lines do
// the teaching, the quoted lines do the demonstrating.
export const uptalk: Scene = {
  id: 'uptalk',
  padding: 0.16,
  nodes: [
    {
      id: 'uptalk',
      kind: 'code',
      filename: 'the same update, twice',
      label: [
        '# uptalk — the pitch rises, so every statement arrives as a question',
        '',
        '"So I have finished the migration?"',
        '"And the tests are passing?"',
        '"I think we are good to deploy?"',
        '',
        '# landing — the pitch falls, and the same words become facts',
        '',
        '"I have finished the migration."',
        '"The tests are passing."',
        '"We are good to deploy."',
      ].join('\n'),
    },
  ],
  edges: [],
}
