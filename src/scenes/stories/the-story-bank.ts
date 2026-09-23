import type { Scene } from '@graphlearning/flow'

// §8 the-story-bank [board] — six stories that cover most behavioural questions, as a board because
// you are choosing from them rather than walking them in order. The subs are the quarry's own
// worked examples, which keeps the board concrete: a list of six abstract categories is what people
// already have and it has never once helped them in an interview.
export const theStoryBank: Scene = {
  id: 'the-story-bank',
  padding: 0.14,
  nodes: [
    {
      id: 'bank',
      label: 'Six stories, written once',
      pattern: 'group',
      icon: 'scroll',
      cols: 3,
      children: [
        { id: 'b-conflict', label: 'A disagreement', pattern: 'service', icon: 'users', sub: 'Maven vs Gradle, settled on data', variant: 'tile' },
        { id: 'b-fail', label: 'A failure', pattern: 'warn', icon: 'ban', sub: 'rebuilt what should have been patched', variant: 'tile' },
        { id: 'b-lead', label: 'Leading with no title', pattern: 'user', icon: 'usercheck', sub: 'the onboarding KT programme', variant: 'tile' },
        { id: 'b-amb', label: 'Ambiguity', pattern: 'network', icon: 'search', sub: 'the metric nobody had defined', variant: 'tile' },
        { id: 'b-press', label: 'Pressure', pattern: 'warn', icon: 'zap', sub: 'the 2 AM pipeline outage', variant: 'tile' },
        { id: 'b-persuade', label: 'Persuasion', pattern: 'storage', icon: 'star', sub: 'the automation proof-of-concept', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
