import type { Scene } from '@graphlearning/flow'

// §4 eye-contact [board] — six rules that apply at once rather than in sequence. The two most
// commonly got wrong sit in the middle of the grid: where to look when you break (down, not
// sideways) and where to look on a call (the lens, not the face on screen). Tile subs stay to one
// line — a board of six is the widest thing in this course.
export const eyeContact: Scene = {
  id: 'eye-contact',
  padding: 0.14,
  nodes: [
    {
      id: 'board',
      label: 'Eye contact, six rules',
      pattern: 'group',
      icon: 'scanface',
      cols: 3,
      children: [
        { id: 'hold', label: 'Hold 3–5 seconds', pattern: 'service', icon: 'clock', sub: 'one thought, one person', variant: 'tile' },
        { id: 'break', label: 'Break downward', pattern: 'network', icon: 'circleslash', sub: 'sideways reads as evasive', variant: 'tile' },
        { id: 'never', label: 'Never dart', pattern: 'warn', icon: 'zap', sub: 'the clearest nerves tell', variant: 'tile' },
        { id: 'group', label: 'In a group, rotate', pattern: 'user', icon: 'users', sub: 'a sentence each, not a sweep', variant: 'tile' },
        { id: 'lens', label: 'On a call, the lens', pattern: 'storage', icon: 'monitor', sub: 'not their face on screen', variant: 'tile' },
        { id: 'listen', label: 'More while listening', pattern: 'user', icon: 'usercheck', sub: 'than while speaking', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
