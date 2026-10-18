import type { Scene } from '@graphlearning/flow'
import { mei } from '../shared/people'

// §4 — Sam's preparation and rehearsal for the Thursday demo.
export const rehearsal: Scene = {
  id: 'rehearsal',
  title: 'Preparation, rehearsal, delivery and nerves',
  flow: 'TB',
  nodes: [
    {
      id: 'prep',
      label: 'Before Thursday',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'aloud', label: 'Aloud, timed', sub: 'twice, to fit 10 minutes', pattern: 'service', icon: 'clock' },
        { id: 'listener', ...mei, label: 'Mei listens', sub: '"Where did you lose me?"' },
        { id: 'backup', label: 'A backup', sub: 'screenshots if the live feed fails', pattern: 'storage', icon: 'file' },
        { id: 'questions', label: 'Likely questions', sub: 'five, with short answers', pattern: 'service', icon: 'search' },
      ],
    },
    {
      id: 'delivery',
      kind: 'table',
      label: 'In the room',
      headers: ['habit', 'why it helps'],
      values: [
        ['learn the first two sentences', 'nerves peak at the start'],
        ['pause after each key number', 'people need time to read it'],
        ['look at people, not the screen', 'you see who is lost'],
        ['notes on a card are fine', 'reading a script is not'],
        ['a stumble: correct it, carry on', 'nobody needs an apology'],
      ],
    },
  ],
  edges: [{ source: 'prep', target: 'delivery', dashed: true }],
}
