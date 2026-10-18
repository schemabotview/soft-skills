import type { Scene } from '@graphlearning/flow'

// §6 — who decides, how reversible it is, and a small experiment instead of a debate.
export const reversible: Scene = {
  id: 'reversible',
  title: 'Decision ownership, reversibility and experiments',
  flow: 'TB',
  nodes: [
    {
      id: 'decisions',
      kind: 'table',
      label: 'Matching care to the decision',
      headers: ['decision', 'reversible?', 'decided by', 'speed'],
      values: [
        ['note wording on the demo', 'yes, easily', 'Sam', 'today'],
        ['phased export', 'yes, in a week', 'Alex, Priya', 'this week'],
        ['move loads to 10:00', 'yes, but risky', 'Jordan', 'after a trial'],
        ['change data supplier', 'no, slow', 'Priya’s director', 'months'],
      ],
    },
    {
      id: 'experiment',
      label: 'A proportionate experiment',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'try', label: 'Try', sub: '10:00 load for three days', pattern: 'service', icon: 'zap' },
        { id: 'measure', label: 'Measure', sub: 'minutes late, each day', pattern: 'storage', icon: 'gauge' },
        { id: 'stop', label: 'Stop if', sub: 'a load fails twice', pattern: 'warn', icon: 'ban' },
        { id: 'decide', label: 'Then decide', sub: 'Jordan, on Friday', pattern: 'service', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [{ source: 'decisions', target: 'experiment' }],
}
