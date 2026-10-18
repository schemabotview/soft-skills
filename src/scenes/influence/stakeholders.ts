import type { Scene } from '@graphlearning/flow'
import { alex, jordan, priya, sam } from '../shared/people'

// §2 — the people Sam's proposal (a third daily load at 15:00) touches, and who decides what.
export const stakeholders: Scene = {
  id: 'stakeholders',
  title: 'Stakeholders, incentives, concerns and decision rights',
  flow: 'TB',
  nodes: [
    {
      id: 'people',
      label: 'A 15:00 load: who it touches',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'priya', ...priya, label: 'Priya', sub: 'wants afternoon data; owns budget' },
        { id: 'jordan', ...jordan, label: 'Jordan', sub: 'a third load to build and keep' },
        { id: 'alex', ...alex, label: 'Alex', sub: 'someone on support at 15:00' },
        { id: 'sam', ...sam, label: 'Sam', sub: 'proposes it; decides none of it' },
      ],
    },
    {
      id: 'rights',
      kind: 'table',
      label: 'Who decides what',
      headers: ['decision', 'who decides'],
      values: [
        ['is it worth paying for?', 'Priya, the sponsor'],
        ['how the load is built', 'Jordan, who owns the feed'],
        ['who supports it, and when', 'Alex, the support owner'],
        ['whether to propose it', 'Sam, or anyone'],
      ],
    },
  ],
  edges: [{ source: 'people', target: 'rights', dashed: true }],
}
