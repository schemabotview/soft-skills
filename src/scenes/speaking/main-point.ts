import type { Scene } from '@graphlearning/flow'

// §1 — one fact, three audiences: what each needs, and the main point for each.
export const mainPoint: Scene = {
  id: 'main-point',
  title: 'Purpose, audience and the main point',
  flow: 'TB',
  nodes: [
    { id: 'fact', label: 'The fact', sub: 'the 11:00 load ran 3 h late', pattern: 'storage', icon: 'clock' },
    {
      id: 'audiences',
      kind: 'table',
      label: 'One fact, three audiences',
      headers: ['audience', 'needs to', 'main point'],
      values: [
        ['Jordan', 'fix the cause', 'the 11:00 job failed twice'],
        ['Alex', 'adjust the plan', 'Thursday is at risk'],
        ['Priya', 'decide on the demo', 'regions may be stale'],
      ],
    },
    {
      id: 'questions',
      label: 'Four questions before speaking',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'purpose', label: 'Purpose', sub: 'inform, ask, decide?', pattern: 'service', icon: 'search' },
        { id: 'audience', label: 'Audience', sub: 'what do they know?', pattern: 'user', icon: 'users' },
        { id: 'context', label: 'Context', sub: 'what else is going on?', pattern: 'network', icon: 'globe' },
        { id: 'point', label: 'Main point', sub: 'one sentence first', pattern: 'storage', icon: 'pencil' },
      ],
    },
  ],
  edges: [
    { source: 'fact', target: 'audiences' },
    { source: 'audiences', target: 'questions', dashed: true },
  ],
}
