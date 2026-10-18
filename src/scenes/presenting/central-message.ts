import type { Scene } from '@graphlearning/flow'

// §1 — the same dashboard presented as a tour of its parts, or around the decision it supports.
export const centralMessage: Scene = {
  id: 'central-message',
  title: 'Audience, purpose and the central message',
  flow: 'TB',
  nodes: [
    {
      id: 'two-talks',
      label: 'Two versions of the same talk',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'tour',
          label: 'A tour of the parts',
          pattern: 'warn',
          cols: 1,
          children: [
            { id: 'tour-open', label: 'Opening', sub: '"Let me show you the tabs."', pattern: 'warn', icon: 'monitor' },
            { id: 'tab-overview', label: 'Overview tab', sub: 'what each chart shows', pattern: 'warn', icon: 'monitor' },
            { id: 'tab-shops', label: 'Shops tab', sub: 'how the filters work', pattern: 'warn', icon: 'table' },
            { id: 'tab-export', label: 'Export', sub: 'the six columns', pattern: 'warn', icon: 'file' },
            { id: 'tour-end', label: 'Ending', sub: '"Any questions?"', pattern: 'warn', icon: 'circleslash' },
          ],
        },
        {
          id: 'decision',
          label: 'Organised around the decision',
          pattern: 'service',
          cols: 1,
          children: [
            { id: 'audience', label: 'Audience', sub: 'the director decides today', pattern: 'service', icon: 'scale' },
            { id: 'message', label: 'Message', sub: 'replace the weekly spreadsheet', pattern: 'service', icon: 'star' },
            { id: 'evidence', label: 'Evidence', sub: '37 shops match finance', pattern: 'service', icon: 'barchart' },
            { id: 'limits', label: 'Limits', sub: '3 shops unchecked, as of 11:00', pattern: 'service', icon: 'search' },
            { id: 'ask', label: 'Ask', sub: 'approve the rollout today', pattern: 'service', icon: 'circlecheck' },
          ],
        },
      ],
    },
  ],
  edges: [],
}
