import type { Scene } from '@graphlearning/flow'

// §7 — the reasoning recorded, the evidence that changed, and the revised recommendation. The trial
// and the revision sit side by side: stacked, they made a tall narrow board; as a 3-card row under
// the table, they shrank the table's type.
export const revisiting: Scene = {
  id: 'revisiting',
  title: 'Recording reasoning and revisiting a decision',
  flow: 'TB',
  nodes: [
    {
      id: 'record',
      kind: 'table',
      label: 'Decision record: export approach',
      headers: ['field', 'entry'],
      values: [
        ['chose', 'less scope, phased: 6 columns'],
        ['how', 'manual file Mon, export Wed'],
        ['because', 'finance closes Mon; accuracy kept'],
        ['assumed', '10:00 loads will be on time'],
        ['revisit if', 'the 10:00 trial is late twice'],
      ],
    },
    {
      id: 'after',
      label: 'Then the evidence came in',
      pattern: 'external',
      cols: 2,
      children: [
        {
          id: 'evidence',
          label: 'What the trial showed',
          pattern: 'warn',
          cols: 1,
          children: [
            { id: 'day-1', label: 'Tuesday', sub: 'on time', pattern: 'service', icon: 'circlecheck' },
            { id: 'day-2', label: 'Wednesday', sub: '40 min late', pattern: 'warn', icon: 'clock' },
            { id: 'day-3', label: 'Thursday', sub: '70 min late', pattern: 'warn', icon: 'clock' },
          ],
        },
        {
          id: 'revised',
          label: 'Revised recommendation',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'keep', label: 'Keep', sub: 'manual file for Monday', pattern: 'service', icon: 'file' },
            { id: 'change', label: 'Change', sub: 'loads stay at 11:00', pattern: 'external', icon: 'repeat' },
            { id: 'tell', label: 'Tell', sub: 'finance and Priya, today', pattern: 'user', icon: 'bell' },
          ],
        },
      ],
    },
  ],
  edges: [{ source: 'record', target: 'after' }],
}
