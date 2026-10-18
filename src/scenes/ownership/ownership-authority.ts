import type { Scene } from '@graphlearning/flow'

// §1 — four words that are often blurred, applied to the export.
export const ownershipAuthority: Scene = {
  id: 'ownership-authority',
  title: 'Ownership, authority and accountability',
  flow: 'TB',
  nodes: [
    {
      id: 'terms',
      kind: 'table',
      label: 'Four words, applied to the export',
      headers: ['word', 'means', 'for the export'],
      values: [
        ['ownership', 'you drive it to done', 'Sam'],
        ['authority', 'you may decide it', 'Priya, on contents'],
        ['accountability', 'you answer for the outcome', 'Alex, for the plan'],
        ['dependency', 'you need it from someone', 'Jordan’s feed'],
      ],
    },
    {
      id: 'owning',
      label: 'Owning the export means',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'drive', label: 'Driving it', sub: 'next steps, every week', pattern: 'service', icon: 'workflow' },
        { id: 'flag', label: 'Flagging it', sub: 'when the feed slips', pattern: 'service', icon: 'bell' },
        { id: 'not-blame', label: 'Not all blame', sub: 'for others’ delays', pattern: 'warn', icon: 'circleslash' },
        { id: 'not-decide', label: 'Not deciding', sub: 'what Priya decides', pattern: 'warn', icon: 'lock' },
      ],
    },
  ],
  edges: [{ source: 'terms', target: 'owning' }],
}
