import type { Scene } from '@graphlearning/flow'

// §7 no-story-yet [framework] — three moves, in order of preference, for the genuinely empty case.
// TB. The ordering is the content: widen first (most people DO have the story and have defined the
// category too narrowly), shrink second, and only then go hypothetical — which is honest but scores
// lowest, so it is the fallback rather than the answer.
export const noStoryYet: Scene = {
  id: 'no-story-yet',
  padding: 0.16,
  flow: 'TB',
  nodes: [
    { id: 'n1', label: 'Widen the definition', pattern: 'service', icon: 'search', sub: 'conflict includes a code-review disagreement' },
    { id: 'n2', label: 'Go smaller, stay true', pattern: 'network', icon: 'box', sub: 'a two-day example beats a fictional six-month one' },
    { id: 'n3', label: 'Flag the hypothetical', pattern: 'warn', icon: 'circleslash', sub: '"I have not hit this — here is what I would do"' },
  ],
  edges: [
    { source: 'n1', target: 'n2' },
    { source: 'n2', target: 'n3' },
  ],
}
