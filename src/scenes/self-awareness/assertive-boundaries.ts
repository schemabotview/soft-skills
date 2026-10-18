import type { Scene } from '@graphlearning/flow'
import { sam } from '../shared/people'

// §6 — passive, aggressive and assertive versions of one reply, and a boundary with options.
export const assertiveBoundaries: Scene = {
  id: 'assertive-boundaries',
  title: 'Assertiveness, boundaries and integrity',
  flow: 'TB',
  nodes: [
    {
      id: 'styles',
      kind: 'table',
      label: 'One request, three styles',
      sub: 'region view by Thursday, with the export also due',
      headers: ['style', 'Sam says', 'leaves out'],
      values: [
        ['passive', '"Sure, no problem."', 'the export slipping'],
        ['aggressive', '"You always do this."', 'Priya’s reason'],
        ['assertive', '"I can do one by Thursday."', 'nothing hidden'],
      ],
    },
    {
      id: 'reply',
      label: 'The assertive reply, in full',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'acknowledge', ...sam, label: 'Acknowledge', sub: '"The region view matters for the demo."' },
        { id: 'limit', ...sam, label: 'The limit', sub: '"Not both by Thursday."' },
        { id: 'options', ...sam, label: 'Options', sub: '"Regions Thursday, export Monday, or both Monday."' },
        { id: 'decide', ...sam, label: 'Who decides', sub: '"Which do you prefer? I’ll tell Alex."' },
      ],
    },
  ],
  edges: [{ source: 'styles', target: 'reply' }],
}
