import type { Scene } from '@graphlearning/flow'

// §4 — a decision buried in a chat thread versus a decision record someone can find.
export const decisionRecord: Scene = {
  id: 'decision-record',
  title: 'Meeting notes and decision records',
  flow: 'TB',
  nodes: [
    {
      id: 'thread',
      label: 'The decision, as it happened',
      sub: '43 chat messages over two days',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'scattered', label: 'Scattered', sub: 'across two threads', pattern: 'warn', icon: 'layers' },
        { id: 'implicit', label: 'Implicit', sub: 'does "ok" mean yes?', pattern: 'warn', icon: 'search' },
        { id: 'lost', label: 'Lost', sub: 'Mei joined after', pattern: 'warn', icon: 'circleslash' },
        { id: 'who', label: 'Whose call?', sub: 'nobody can say', pattern: 'warn', icon: 'users' },
      ],
    },
    {
      id: 'record',
      kind: 'table',
      label: 'Decision record: demo regions',
      headers: ['field', 'entry'],
      values: [
        ['decision', 'show regions Thursday, marked "as of 11:00"'],
        ['date, by', 'Wed 12:00, Priya with Alex'],
        ['options', 'show with note; wait to Monday'],
        ['why', 'leads need regions; a note covers the delay'],
        ['revisit if', 'the 11:00 load fails again'],
      ],
    },
  ],
  edges: [{ source: 'thread', target: 'record', label: 'written up', dashed: true }],
}
