import type { Scene } from '@graphlearning/flow'

// §2 reading-the-room [compare] — signal and response, paired. A DATA table because each row is a
// specific observable followed by the specific move it calls for; advice to "read the room" is
// useless without that pairing. The last row is the counter-intuitive one, and it is the one people
// get wrong most: silence after your answer is not a request for more.
export const readingTheRoom: Scene = {
  id: 'reading-the-room',
  padding: 0.14,
  nodes: [
    {
      id: 'read',
      kind: 'table',
      pattern: 'network',
      label: 'What you see, and what to do',
      sub: 'reading a room is a set of specific moves',
      headers: ['You notice', 'You do'],
      values: [
        ['They keep checking the time', 'Compress. Land the point and stop.'],
        ['Short, clipped answers', 'Match it down — do not lift the energy'],
        ['They lean in, ask follow-ups', 'You found the thread. Stay on it.'],
        ['Two of them exchange a look', 'Pause, and ask what they are thinking'],
        ['Silence after your answer', 'Do not fill it. Wait.'],
      ],
    },
  ],
  edges: [],
}
