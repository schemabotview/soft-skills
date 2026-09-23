import type { Scene } from '@graphlearning/flow'

// §10 you-are-here [board] — the map of everything that follows, grouped by WHY each course exists
// rather than listed flat. The top row is one course per channel (the split this course just
// established); the bottom row is those same three channels under load — someone else is talking, a
// clock is running, a stranger is deciding. Names only, never course numbers: the repo ships as a
// prefix, so a later reorder must cost nothing (see COURSE-PLAN.md).
export const theMap: Scene = {
  id: 'the-map',
  padding: 0.14,
  nodes: [
    {
      id: 'channels',
      label: 'One course per channel',
      pattern: 'group',
      icon: 'layers',
      cols: 3,
      children: [
        { id: 'c-voice', label: 'Voice', pattern: 'network', icon: 'waves', sub: 'breath · pace · pitch · pause', variant: 'tile' },
        { id: 'c-body', label: 'Body', pattern: 'storage', icon: 'scanface', sub: 'eyes · posture · hands', variant: 'tile' },
        { id: 'c-structure', label: 'Structure', pattern: 'service', icon: 'file', sub: 'making the words worth hearing', variant: 'tile' },
      ],
    },
    {
      id: 'load',
      label: 'The same three, under load',
      pattern: 'group',
      icon: 'gauge',
      cols: 5,
      children: [
        { id: 'c-listening', label: 'Listening', pattern: 'user', icon: 'users', sub: 'someone else is talking', variant: 'tile' },
        { id: 'c-pressure', label: 'Pressure', pattern: 'warn', icon: 'zap', sub: 'a clock is running', variant: 'tile' },
        { id: 'c-stories', label: 'Stories', pattern: 'service', icon: 'scroll', sub: 'they want a specific', variant: 'tile' },
        { id: 'c-pitch', label: 'Pitch', pattern: 'network', icon: 'star', sub: 'ninety seconds on you', variant: 'tile' },
        { id: 'c-room', label: 'The room', pattern: 'user', icon: 'usercheck', sub: 'a stranger is deciding', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
