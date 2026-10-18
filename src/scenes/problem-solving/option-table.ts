import type { Scene } from '@graphlearning/flow'

// §4 — a weighted option table, and what it can and cannot tell the team.
export const optionTable: Scene = {
  id: 'option-table',
  title: 'Comparing options with criteria',
  flow: 'TB',
  nodes: [
    {
      id: 'table',
      kind: 'table',
      label: 'Options scored 1–5 against agreed criteria',
      headers: ['criterion', 'weight', 'less scope', 'later date', 'phased'],
      values: [
        ['finance closes Mon', '3', '4', '1', '5'],
        ['accuracy', '3', '4', '5', '3'],
        ['team load', '2', '4', '5', '2'],
        ['rework later', '1', '3', '5', '2'],
        ['weighted total', '', '35', '33', '30'],
      ],
    },
    {
      id: 'reading',
      label: 'Reading the table',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'close', label: 'Too close', sub: '35, 33, 30: still a judgement', pattern: 'warn', icon: 'scale' },
        { id: 'weights', label: 'Weights', sub: 'are preferences, not facts', pattern: 'warn', icon: 'gauge' },
        { id: 'visible', label: 'Visible', sub: 'where people disagree', pattern: 'service', icon: 'search' },
        { id: 'sensitivity', label: 'Sensitivity', sub: 'swap two weights, re-check', pattern: 'service', icon: 'swap' },
      ],
    },
  ],
  edges: [{ source: 'table', target: 'reading' }],
}
