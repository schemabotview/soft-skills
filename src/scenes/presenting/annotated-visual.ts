import type { Scene } from '@graphlearning/flow'

// §3 — one chart, annotated so it can be read correctly without the speaker.
export const annotatedVisual: Scene = {
  id: 'annotated-visual',
  title: 'Selecting evidence, visuals and limitations',
  flow: 'TB',
  nodes: [
    {
      id: 'chart',
      label: 'One chart: dashboard vs finance totals',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'title', label: 'Title', sub: 'states the finding, not the topic', pattern: 'service', icon: 'star' },
        { id: 'units', label: 'Units', sub: '£ thousands of sales per day', pattern: 'service', icon: 'gauge' },
        { id: 'baseline', label: 'Baseline', sub: 'finance ledger, same 37 shops', pattern: 'service', icon: 'scale' },
        { id: 'axis', label: 'Axis', sub: 'starts at zero', pattern: 'service', icon: 'barchart' },
        { id: 'limitation', label: 'Limitation', sub: '3 shops left out, data to 11:00', pattern: 'warn', icon: 'search' },
        { id: 'source', label: 'Source', sub: 'two weeks of loads, dated', pattern: 'storage', icon: 'database' },
      ],
    },
    {
      id: 'chosen',
      kind: 'table',
      label: 'What made the slides',
      headers: ['evidence', 'used?'],
      values: [
        ['totals vs finance, 37 shops', 'yes: the key claim'],
        ['prep time, before and after', 'yes: one number'],
        ['the refund bug, found and fixed', 'yes: one line'],
        ['every chart on the dashboard', 'no: in the appendix'],
      ],
    },
  ],
  edges: [{ source: 'chart', target: 'chosen', dashed: true }],
}
