import type { Scene } from '@graphlearning/flow'

// §2 — the project as context, problem, action and result, with honest claims about who did what.
export const projectStory: Scene = {
  id: 'project-story',
  title: 'Structuring a project story',
  flow: 'TB',
  nodes: [
    {
      id: 'story',
      label: 'The dashboard project in four parts',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'context', label: 'Context', sub: 'weekly sales report, built by hand', pattern: 'external', icon: 'file' },
        { id: 'problem', label: 'Problem', sub: '4 hours a week, often a week old', pattern: 'warn', icon: 'clock' },
        { id: 'action', label: 'Action', sub: 'two daily loads, checked shops', pattern: 'service', icon: 'wrench' },
        { id: 'result', label: 'Result', sub: 'prep down to 20 min, measured', pattern: 'service', icon: 'circlecheck' },
      ],
    },
    {
      id: 'claims',
      kind: 'table',
      label: 'Telling it honestly',
      headers: ['tempting claim', 'accurate claim'],
      values: [
        ['I built the dashboard', 'I built the views; Jordan the feed'],
        ['the data is clean', 'Mei found the refund bug; fixed'],
        ['it saves hours', '4 h to 20 min, over 2 weeks'],
        ['decisions are faster', 'expected; not measured yet'],
      ],
    },
  ],
  edges: [{ source: 'story', target: 'claims', dashed: true }],
}
