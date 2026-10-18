import type { Scene } from '@graphlearning/flow'
import { sam } from '../shared/people'

// §3 — a vague update rewritten so the reader can see progress, evidence, risk and the decision needed.
export const statusUpdate: Scene = {
  id: 'status-update',
  title: 'Status updates that can be acted on',
  flow: 'TB',
  nodes: [
    { id: 'vague', ...sam, pattern: 'warn', label: 'Before', sub: '"Still working on it, should be fine."' },
    {
      id: 'after',
      label: 'After: Tuesday’s update',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'done', label: 'Done', sub: 'region view built, tested', pattern: 'service', icon: 'circlecheck' },
        { id: 'evidence', label: 'Evidence', sub: 'matches finance totals', pattern: 'storage', icon: 'scale' },
        { id: 'blocked', label: 'Blocked', sub: '11:00 load fix, with Jordan', pattern: 'warn', icon: 'lock' },
        { id: 'risk', label: 'Risk', sub: 'regions 3 h stale on Thu', pattern: 'warn', icon: 'clock' },
        { id: 'decision', label: 'Decision', sub: 'Priya: show with a note?', pattern: 'external', icon: 'search' },
        { id: 'next', label: 'Next', sub: 'export, by Friday', pattern: 'service', icon: 'calendar' },
      ],
    },
  ],
  edges: [{ source: 'vague', target: 'after', label: 'rewritten', dashed: true }],
}
