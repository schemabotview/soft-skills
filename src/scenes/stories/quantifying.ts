import type { Scene } from '@graphlearning/flow'

// §5 quantifying [board] — six places a number is hiding, because "quantify your impact" is advice
// nobody can act on without knowing where to look. Every tile is a category plus a worked figure, so
// the board doubles as a prompt list. `risk` is included precisely because it is the one engineers
// never count — prevented incidents leave no trace, so nobody claims them.
export const quantifying: Scene = {
  id: 'quantifying',
  padding: 0.14,
  nodes: [
    {
      id: 'board',
      label: 'Six places a number is hiding',
      pattern: 'group',
      icon: 'hash',
      cols: 3,
      children: [
        { id: 'time', label: 'Time', pattern: 'service', icon: 'clock', sub: '"six hours a week, every week"', variant: 'tile' },
        { id: 'money', label: 'Money', pattern: 'network', icon: 'receipt', sub: '"£1,400 a month in compute"', variant: 'tile' },
        { id: 'volume', label: 'Volume', pattern: 'storage', icon: 'database', sub: '"40 GB a day, up from 4"', variant: 'tile' },
        { id: 'quality', label: 'Quality', pattern: 'user', icon: 'circlecheck', sub: '"zero rework after the check"', variant: 'tile' },
        { id: 'people', label: 'People', pattern: 'user', icon: 'users', sub: '"four analysts unblocked"', variant: 'tile' },
        { id: 'risk', label: 'Risk', pattern: 'warn', icon: 'shieldcheck', sub: '"no repeat in eight months"', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
