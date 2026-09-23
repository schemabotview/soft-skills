import type { Scene } from '@graphlearning/flow'

// §2 listening-to-respond [flow] — the actual mechanism of the commonest listening failure, drawn as
// the four-step process it is rather than described as a bad habit. TB. The middle two cards are
// `warn` because that is where the listening stops; the last is `external` because the answer you
// give belongs to a question that was never finished. Naming second three is deliberate — the
// failure has a timestamp, which is what makes it catchable.
export const listeningToRespond: Scene = {
  id: 'listening-to-respond',
  padding: 0.14,
  flow: 'TB',
  nodes: [
    { id: 'l1', label: 'They start talking', pattern: 'user', icon: 'users', sub: 'you are listening, genuinely' },
    { id: 'l2', label: 'Second three: you have a reply', pattern: 'warn', icon: 'zap', sub: 'it arrives unbidden' },
    { id: 'l3', label: 'You start waiting, not listening', pattern: 'warn', icon: 'clock', sub: 'holding the reply costs attention' },
    { id: 'l4', label: 'You answer the first three seconds', pattern: 'external', icon: 'ban', sub: 'the other ninety go unheard' },
  ],
  edges: [
    { source: 'l1', target: 'l2' },
    { source: 'l2', target: 'l3' },
    { source: 'l3', target: 'l4' },
  ],
}
