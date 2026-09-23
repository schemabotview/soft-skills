import type { Scene } from '@graphlearning/flow'

// §6 what-is-not-said [board] — the section that is hardest to make concrete, so every tile is a
// specific observable rather than a disposition. Six signals, all of them things you can notice in
// the room today. `repeated` is the focus: a point made twice is the one thing on this board that is
// almost never accidental, and it is the cheapest to act on.
export const whatIsNotSaid: Scene = {
  id: 'what-is-not-said',
  padding: 0.14,
  nodes: [
    {
      id: 'board',
      label: 'Six things nobody says out loud',
      pattern: 'group',
      icon: 'search',
      cols: 3,
      children: [
        { id: 'pause', label: 'The hesitation', pattern: 'warn', icon: 'clock', sub: 'before "yes, that works"', variant: 'tile' },
        { id: 'qualifier', label: 'The qualifier', pattern: 'warn', icon: 'circleslash', sub: '"should be fine, I think"', variant: 'tile' },
        { id: 'repeated', label: 'The repeated point', pattern: 'network', icon: 'repeat', sub: 'said twice is never accidental', variant: 'tile' },
        { id: 'unasked', label: 'The question not asked', pattern: 'storage', icon: 'ban', sub: 'nobody asked about cost', variant: 'tile' },
        { id: 'fine', label: 'The flat "fine"', pattern: 'warn', icon: 'waves', sub: 'agreement with no energy in it', variant: 'tile' },
        { id: 'quiet', label: 'Who went quiet', pattern: 'user', icon: 'users', sub: 'and at exactly which point', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
