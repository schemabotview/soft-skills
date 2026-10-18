import type { Scene } from '@graphlearning/flow'

// §2 — vague self-descriptions versus evidence from a specific situation.
export const strengthsEvidence: Scene = {
  id: 'strengths-evidence',
  title: 'Strengths and development needs, with evidence',
  flow: 'TB',
  nodes: [
    {
      id: 'table',
      kind: 'table',
      label: 'From a label to evidence',
      sub: 'Sam, two weeks into the dashboard project',
      headers: ['label', 'evidence from one situation'],
      values: [
        ['"good communicator"', 'summarised the brief; Priya corrected one point'],
        ['"team player"', 'took Jordan’s handover notes, asked two questions'],
        ['"bad at deadlines"', 'missed the 03-04 draft; said so on 03-05'],
        ['"too quiet"', 'raised the data risk in writing, not in the meeting'],
      ],
    },
    {
      id: 'sorted',
      label: 'What the evidence suggests',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'strength', label: 'A strength', sub: 'checks understanding early', pattern: 'service', icon: 'circlecheck' },
        { id: 'need', label: 'To develop', sub: 'flags slipping dates sooner', pattern: 'external', icon: 'clock' },
        { id: 'context-note', label: 'A context note', sub: 'speaks up best in writing', pattern: 'network', icon: 'pencil' },
        { id: 'next', label: 'One next step', sub: 'a Tuesday status line', pattern: 'storage', icon: 'calendar' },
      ],
    },
  ],
  edges: [{ source: 'table', target: 'sorted' }],
}
