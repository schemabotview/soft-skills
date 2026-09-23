import type { Scene } from '@graphlearning/flow'

// §8 pause [framework] — the highest-leverage habit in the concept, given a named four-beat shape so
// it can be practised rather than admired. The middle card IS the silence, and giving silence its
// own card the same size as the others is the argument — it is a step, not a gap between steps.
// TB for the same reason as this course's other four-card flows: LR shrinks them past reading.
export const thePause: Scene = {
  id: 'the-pause',
  padding: 0.14,
  nodes: [
    {
      id: 'beats',
      label: 'The pause, as four beats',
      pattern: 'group',
      icon: 'clock',
      flow: 'TB',
      children: [
        { id: 'b1', label: 'State the point', pattern: 'service', icon: 'file', sub: 'one sentence' },
        { id: 'b2', label: 'Stop. Two seconds.', pattern: 'network', icon: 'circleslash', sub: 'longer than feels safe' },
        { id: 'b3', label: 'It lands', pattern: 'user', icon: 'usercheck', sub: 'they catch up to you' },
        { id: 'b4', label: 'Then the detail', pattern: 'storage', icon: 'layers', sub: 'now they can hold it' },
      ],
      edges: [
        { source: 'b1', target: 'b2' },
        { source: 'b2', target: 'b3' },
        { source: 'b3', target: 'b4' },
      ],
    },
  ],
  edges: [],
}
