import type { Scene } from '@graphlearning/flow'

// §8 being-challenged [framework] — holding a position under pushback, as four beats. TB. Beat two
// is the load-bearing one and the one people skip: restating the objection before answering it
// removes the "you have misunderstood me" exit and forces the disagreement to be about the thing.
// Beat four is what separates holding a position from digging in.
export const beingChallenged: Scene = {
  id: 'being-challenged',
  padding: 0.14,
  flow: 'TB',
  nodes: [
    { id: 'c1', label: 'Do not answer yet', pattern: 'network', icon: 'circleslash', sub: 'the reflex is to defend' },
    { id: 'c2', label: 'Restate their objection', pattern: 'service', icon: 'repeat', sub: '"So the concern is X — have I got that?"' },
    { id: 'c3', label: 'Separate what is true', pattern: 'storage', icon: 'search', sub: 'concede that part, out loud' },
    { id: 'c4', label: 'Name what would move you', pattern: 'user', icon: 'scale', sub: '"If Y were true I would change my mind."' },
  ],
  edges: [
    { source: 'c1', target: 'c2' },
    { source: 'c2', target: 'c3' },
    { source: 'c3', target: 'c4' },
  ],
}
