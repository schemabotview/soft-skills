import type { Scene } from '@graphlearning/flow'
import { priya, sam } from '../shared/people'

// §3 — a summary built to be corrected, and the correction it invites.
export const paraphrase: Scene = {
  id: 'paraphrase',
  title: 'Paraphrasing and summarising',
  flow: 'TB',
  nodes: [
    {
      id: 'summary',
      label: 'Sam’s summary, said back',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'heard', ...sam, label: 'What I heard', sub: '"Store managers check stock levels."' },
        { id: 'decision', ...sam, label: 'The decision', sub: '"Whether to reorder before noon."' },
        { id: 'limit', ...sam, label: 'The limit', sub: '"So numbers from this morning."' },
        { id: 'correct-me', ...sam, label: 'Correct me', sub: '"What have I got wrong?"' },
      ],
    },
    { id: 'correction', ...priya, label: 'Priya', sub: '"Close. Two updates: 06:00 and 11:00."' },
    {
      id: 'kinds',
      label: 'Three moves',
      pattern: 'external',
      cols: 3,
      children: [
        { id: 'paraphrase-move', label: 'Paraphrase', sub: 'one point, own words', pattern: 'external', icon: 'repeat' },
        { id: 'summarise-move', label: 'Summarise', sub: 'several points, in order', pattern: 'external', icon: 'layers' },
        { id: 'check-move', label: 'Check', sub: 'invite the correction', pattern: 'external', icon: 'search' },
      ],
    },
  ],
  edges: [
    { source: 'summary', target: 'correction' },
    { source: 'correction', target: 'kinds', dashed: true },
  ],
}
