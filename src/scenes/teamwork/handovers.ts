import type { Scene } from '@graphlearning/flow'

// §7 — a handover note for a new member, and the agreements a changed team should revisit.
export const handovers: Scene = {
  id: 'handovers',
  title: 'Handovers and changing team membership',
  flow: 'TB',
  nodes: [
    {
      id: 'note',
      label: 'Handover note for Mei',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'context', label: 'Context', sub: 'what and who it is for', pattern: 'storage', icon: 'scroll' },
        { id: 'decided', label: 'Decided', sub: 'link to decision records', pattern: 'storage', icon: 'file' },
        { id: 'open', label: 'Open', sub: '11:00 load, export format', pattern: 'network', icon: 'search' },
        { id: 'ask', label: 'Who to ask', sub: 'Jordan: feed; Priya: scope', pattern: 'user', icon: 'users' },
        { id: 'access', label: 'Access', sub: 'granted, tested on day 1', pattern: 'service', icon: 'key' },
        { id: 'first', label: 'First task', sub: 'small, real, reviewed', pattern: 'service', icon: 'circlecheck' },
      ],
    },
    {
      id: 'revisit',
      label: 'When membership changes, revisit',
      pattern: 'external',
      cols: 3,
      children: [
        { id: 'roles', label: 'Roles', sub: 'who owns what now', pattern: 'external', icon: 'users' },
        { id: 'times', label: 'Meeting times', sub: 'a new time zone', pattern: 'external', icon: 'clock' },
        { id: 'norms', label: 'Norms', sub: 'said, not assumed', pattern: 'external', icon: 'pencil' },
      ],
    },
  ],
  edges: [{ source: 'note', target: 'revisit', dashed: true }],
}
