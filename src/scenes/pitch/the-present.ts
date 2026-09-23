import type { Scene } from '@graphlearning/flow'

// §5 the-present [board] — four requirements for the middle beat, as a board because they are
// constraints on one sentence rather than steps. `tense` looks like a pedantic detail and is not:
// past tense turns the hook into history, and "I led" against "I lead" is the difference between
// something you used to be and something you currently are.
export const thePresent: Scene = {
  id: 'the-present',
  padding: 0.16,
  nodes: [
    {
      id: 'board',
      label: 'The middle beat, in four constraints',
      pattern: 'group',
      icon: 'zap',
      cols: 2,
      children: [
        { id: 'where', label: 'Where you are now', pattern: 'service', icon: 'building', sub: 'company or context, half a sentence' },
        { id: 'one', label: 'ONE project', pattern: 'network', icon: 'box', sub: 'named. not a portfolio tour.' },
        { id: 'number', label: 'ONE number', pattern: 'storage', icon: 'hash', sub: 'this is the hook. without it there is none.' },
        { id: 'tense', label: 'Present tense', pattern: 'user', icon: 'clock', sub: '"I lead" — not "I led"' },
      ],
    },
  ],
  edges: [],
}
