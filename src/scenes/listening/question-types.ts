import type { Scene } from '@graphlearning/flow'

// §2 — kinds of question, what each gets you, and a sequence that works.
export const questionTypes: Scene = {
  id: 'question-types',
  title: 'Open, focused and probing questions',
  flow: 'TB',
  nodes: [
    {
      id: 'table',
      kind: 'table',
      label: 'Questions Sam could ask about "real time"',
      headers: ['kind', 'example', 'gets you'],
      values: [
        ['open', 'What will you use it for?', 'the purpose'],
        ['focused', 'How old can the numbers be?', 'a limit'],
        ['probing', 'What happens if they are 2 h old?', 'the real cost'],
        ['closed', 'Is noon early enough?', 'a yes or no'],
        ['leading', 'Daily is fine, right?', 'your own answer back'],
      ],
    },
    {
      id: 'sequence',
      label: 'A sequence that works',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'open-first', label: 'Open first', sub: 'let them set the frame', pattern: 'service', icon: 'search' },
        { id: 'then-focus', label: 'Then focus', sub: 'numbers, dates, limits', pattern: 'service', icon: 'gauge' },
        { id: 'probe', label: 'Probe', sub: 'the surprising answer', pattern: 'service', icon: 'zap' },
        { id: 'close', label: 'Close', sub: 'confirm one decision', pattern: 'service', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [{ source: 'table', target: 'sequence' }],
}
