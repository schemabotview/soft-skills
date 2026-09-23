import type { Scene } from '@graphlearning/flow'

// §1 the-gap [flow] — the opening claim: competence was never the bottleneck. Two lanes, same
// analysis, different delivery, different outcome. Drawn as two labelled containers each running a
// small LR flow, stacked — the symmetry IS the argument, so the two lanes must read as the same
// shape with exactly one link changed. The losing lane's middle step is `warn`; the winning lane's
// is `service`. Nothing else differs, including the first card's text.
export const theGap: Scene = {
  id: 'the-gap',
  padding: 0.16,
  nodes: [
    {
      id: 'lane-a',
      label: 'Right — and unheard',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'a-work', label: 'Correct analysis', pattern: 'service', icon: 'circlecheck', sub: 'three weeks of it' },
        { id: 'a-say', label: 'Nine minutes of detail', pattern: 'warn', icon: 'waves', sub: 'no point, no pause' },
        { id: 'a-out', label: 'Decision goes elsewhere', pattern: 'external', icon: 'ban', sub: 'to someone louder' },
      ],
      edges: [
        { source: 'a-work', target: 'a-say', dir: 'LR' },
        { source: 'a-say', target: 'a-out', dir: 'LR' },
      ],
    },
    {
      id: 'lane-b',
      label: 'Right — and heard',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'b-work', label: 'Correct analysis', pattern: 'service', icon: 'circlecheck', sub: 'three weeks of it' },
        { id: 'b-say', label: 'One sentence, then why', pattern: 'service', icon: 'star', sub: 'point first, then stop' },
        { id: 'b-out', label: 'Decision follows you', pattern: 'user', icon: 'usercheck', sub: 'and so does the next one' },
      ],
      edges: [
        { source: 'b-work', target: 'b-say', dir: 'LR' },
        { source: 'b-say', target: 'b-out', dir: 'LR' },
      ],
    },
  ],
  edges: [],
}
