import type { Scene } from '@graphlearning/flow'

// §7 — matching the situation to a route; some situations are not for direct negotiation at all.
export const routes: Scene = {
  id: 'routes',
  title: 'Pausing, mediation and formal routes',
  flow: 'TB',
  nodes: [
    {
      id: 'table',
      kind: 'table',
      label: 'Matching the situation to a route',
      headers: ['situation', 'route'],
      values: [
        ['an ordinary disagreement', 'a direct conversation'],
        ['stuck after trying', 'the manager or a neutral facilitator'],
        ['repeated personal attacks', 'the manager or HR'],
        ['harassment, discrimination', 'formal reporting routes, HR'],
        ['retaliation for raising it', 'formal routes, HR'],
        ['immediate danger', 'emergency services, security'],
      ],
    },
    {
      id: 'always',
      label: 'In any of these',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'pause', label: 'Pausing is allowed', sub: 'stop, resume later', pattern: 'service', icon: 'clock' },
        { id: 'notes', label: 'Write it down', sub: 'dates, words, witnesses', pattern: 'storage', icon: 'pencil' },
        { id: 'not-negotiate', label: 'Not a negotiation', sub: 'harm is not a trade-off', pattern: 'warn', icon: 'shieldcheck' },
        { id: 'support', label: 'Get support', sub: 'a trusted colleague, HR', pattern: 'user', icon: 'users' },
      ],
    },
  ],
  edges: [{ source: 'table', target: 'always', dashed: true }],
}
