import type { Scene } from '@graphlearning/flow'

// §1 always-being-read [script] — the course's opening claim, as evidence rather than assertion. A
// transcript of four minutes in which the engineer said nothing at all, with what the room read in
// the trailing comment. The script card is the only renderer that can do this: the left column is
// behaviour, the right is interpretation, and the gap between them IS the section.
export const silentMinutes: Scene = {
  id: 'silent-minutes',
  padding: 0.16,
  nodes: [
    {
      id: 'silent',
      kind: 'code',
      filename: 'four minutes, no words',
      label: [
        '# you did not speak once. this is what the room read anyway.',
        '',
        'arms folded, leaning back      # "he disagrees with this"',
        'eyes on the laptop             # "she has checked out"',
        'jaw set, no nod                # "he thinks we are wrong"',
        'turned toward the door         # "wants this to be over"',
        '',
        '# you were concentrating, and you were cold.',
        '# nobody in the room had access to either of those facts.',
      ].join('\n'),
    },
  ],
  edges: [],
}
