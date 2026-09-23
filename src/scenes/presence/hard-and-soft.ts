import type { Scene } from '@graphlearning/flow'

// §2 hard-and-soft [compare] — the three-tier claim, straight from the workshop's own line. A DATA
// table rather than a flow: these are not stages you pass through, they are three different doors
// opened by three different things and judged by three different audiences. A table states the
// pairing without implying a pipeline. The third column is the section's actual point — WHO decides.
export const hardAndSoft: Scene = {
  id: 'hard-and-soft',
  padding: 0.22,
  nodes: [
    {
      id: 'tiers',
      kind: 'table',
      pattern: 'service',
      label: 'Three doors',
      sub: 'one person, three different gatekeepers',
      headers: ['What you have', 'What it opens', 'Who is judging'],
      values: [
        ['Hard skills', 'The interview', 'A filter scanning for keywords'],
        ['Soft skills', 'The job', 'A panel, over forty minutes'],
        ['Presence', 'The promotion', 'A room you are not in'],
      ],
    },
  ],
  edges: [],
}
