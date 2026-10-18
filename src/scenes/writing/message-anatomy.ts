import type { Scene } from '@graphlearning/flow'
import { sam } from '../shared/people'

// §2 — an email to Priya, one card per part, and the tone trap.
export const messageAnatomy: Scene = {
  id: 'message-anatomy',
  title: 'Anatomy of a message',
  flow: 'TB',
  nodes: [
    {
      id: 'email',
      label: 'Sam’s email to Priya',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'subject', ...sam, label: 'Subject', sub: '"Demo: region decision by Wed noon"' },
        { id: 'opening', ...sam, label: 'Opening', sub: '"I need one decision from you."' },
        { id: 'context', ...sam, label: 'Context', sub: '"Region data may be 3 h late Thu."' },
        { id: 'request', ...sam, label: 'Request', sub: '"Show regions with a note, or wait?"' },
        { id: 'deadline', ...sam, label: 'By when', sub: '"By Wednesday noon, please."' },
        { id: 'close', ...sam, label: 'Close', sub: '"Happy to talk if easier. Sam"' },
      ],
    },
    {
      id: 'tone',
      label: 'Writing reads harsher than speech',
      pattern: 'warn',
      cols: 2,
      children: [
        { id: 'terse', label: 'Terse', sub: '"Need this by Wed."', pattern: 'warn', icon: 'ban' },
        { id: 'warmer', label: 'Warmer', sub: '"Could you let me know by Wed?"', pattern: 'service', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [{ source: 'email', target: 'tone', dashed: true }],
}
