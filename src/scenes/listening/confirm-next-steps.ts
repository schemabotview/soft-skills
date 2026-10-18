import type { Scene } from '@graphlearning/flow'

// §7 — closing a conversation: what was decided, what is open, and who does what by when.
export const confirmNextSteps: Scene = {
  id: 'confirm-next-steps',
  title: 'Confirming decisions and next steps',
  flow: 'TB',
  nodes: [
    {
      id: 'recap',
      label: 'Sam’s closing recap',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'decided', label: 'Decided', sub: 'two loads, 06:00 and 11:00', pattern: 'service', icon: 'circlecheck' },
        { id: 'open', label: 'Still open', sub: 'can 11:00 move earlier?', pattern: 'network', icon: 'search' },
        { id: 'not-doing', label: 'Not doing', sub: 'streaming, for now', pattern: 'warn', icon: 'ban' },
        { id: 'correct', label: 'Correct me', sub: 'reply by Thursday', pattern: 'external', icon: 'pencil' },
      ],
    },
    {
      id: 'actions',
      kind: 'table',
      label: 'Next steps',
      headers: ['action', 'owner', 'by'],
      values: [
        ['ask whether 11:00 load can move', 'Jordan', 'Wed'],
        ['draft low-stock flag rules', 'Sam', 'Thu'],
        ['confirm regions for the demo', 'Priya', 'Thu'],
      ],
    },
  ],
  edges: [{ source: 'recap', target: 'actions' }],
}
