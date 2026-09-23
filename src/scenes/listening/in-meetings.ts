import type { Scene } from '@graphlearning/flow'

// §9 in-meetings [board] — the practice surface, because everything else in this course is internal
// and therefore hard to start doing. Six observable behaviours, all of them things somebody else
// could verify from across the table. Split so the top row is what you stop doing and the bottom is
// what you start.
export const inMeetings: Scene = {
  id: 'in-meetings',
  padding: 0.14,
  nodes: [
    {
      id: 'stop',
      label: 'Stop',
      pattern: 'group',
      icon: 'ban',
      cols: 3,
      children: [
        { id: 'phone', label: 'The phone, face down', pattern: 'warn', icon: 'monitor', sub: 'out of reach, not just quiet', variant: 'tile' },
        { id: 'tabs', label: 'The other tabs', pattern: 'warn', icon: 'layers', sub: 'reading is not listening', variant: 'tile' },
        { id: 'drafting', label: 'Drafting your reply', pattern: 'warn', icon: 'pencil', sub: 'the habit from the last section', variant: 'tile' },
      ],
    },
    {
      id: 'start',
      label: 'Start',
      pattern: 'group',
      icon: 'circlecheck',
      cols: 3,
      children: [
        { id: 'notes', label: 'Notes by hand', pattern: 'service', icon: 'pencil', sub: 'slower, so you have to select', variant: 'tile' },
        { id: 'quiet', label: 'Name who has not spoken', pattern: 'user', icon: 'users', sub: '"Priya, you built this — ?"', variant: 'tile' },
        { id: 'summarise', label: 'Summarise at the end', pattern: 'network', icon: 'circlecheck', sub: 'one minute, and it catches the drift', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
