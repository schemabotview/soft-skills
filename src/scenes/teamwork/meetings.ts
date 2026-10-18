import type { Scene } from '@graphlearning/flow'

// §5 — an agenda built around one decision question, and the record that closes the meeting.
export const meetings: Scene = {
  id: 'meetings',
  title: 'Meeting purpose, preparation and decisions',
  flow: 'TB',
  nodes: [
    {
      id: 'agenda',
      label: 'Agenda: demo readiness, 30 min',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'question', label: 'The question', sub: 'go or no-go for regions?', pattern: 'external', icon: 'search' },
        { id: 'pre-read', label: 'Pre-read', sub: 'status and risks, 1 page', pattern: 'storage', icon: 'file' },
        { id: 'who', label: 'Who', sub: 'only those who decide or inform', pattern: 'user', icon: 'users' },
        { id: 'timebox', label: 'Timebox', sub: '10 facts, 15 options, 5 decide', pattern: 'service', icon: 'clock' },
      ],
    },
    {
      id: 'close',
      kind: 'table',
      label: 'The closing record',
      headers: ['item', 'result'],
      values: [
        ['decision', 'go, with an "as of 11:00" note'],
        ['actions', 'note text: Sam, Wed; leads told: Priya, Wed'],
        ['parked', 'streaming: revisit in Q3'],
        ['not needed', 'Friday’s follow-up meeting'],
      ],
    },
  ],
  edges: [{ source: 'agenda', target: 'close' }],
}
