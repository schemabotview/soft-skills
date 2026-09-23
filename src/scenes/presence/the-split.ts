import type { Scene } from '@graphlearning/flow'

// §4 the-7-38-55-rule [compare] — the numbers, and the footnote almost nobody quotes. The table
// carries the split; the `warn` card underneath carries what the 1967 experiments actually measured.
// Both are on screen at once deliberately: the rule is quoted everywhere without its scope, and a
// section that shows the number without the caveat teaches the folklore instead of the finding.
export const theSplit: Scene = {
  id: 'the-split',
  padding: 0.16,
  nodes: [
    {
      id: 'split',
      kind: 'table',
      pattern: 'network',
      label: '7 — 38 — 55',
      sub: 'Mehrabian, 1967',
      headers: ['Channel', 'Share', 'What it carries'],
      values: [
        ['Verbal', '7%', 'the words themselves'],
        ['Vocal', '38%', 'tone, pace, pitch, pause'],
        ['Visual', '55%', 'face, eyes, posture, gesture'],
      ],
    },
    {
      id: 'caveat',
      label: 'What it measured',
      pattern: 'warn',
      icon: 'search',
      sub: 'liking, from single words',
    },
  ],
  edges: [],
}
