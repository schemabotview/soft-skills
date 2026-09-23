import type { Scene } from '@graphlearning/flow'

// §3 ppf [framework] — Past, Present, Future. Three beats rather than four, which is why it fits in
// ninety seconds. Each `sub` names what that beat is FOR rather than what goes in it: Past
// establishes standing, Present supplies the hook, Future is the only beat that is about them. The
// last is the one everybody gets wrong, so it carries the strongest sub.
export const ppf: Scene = {
  id: 'ppf',
  padding: 0.18,
  flow: 'TB',
  nodes: [
    { id: 'p', label: 'P — Past', pattern: 'service', icon: 'history', sub: 'role, years, domain — your standing' },
    { id: 'pr', label: 'P — Present', pattern: 'network', icon: 'zap', sub: 'one project, one number — the hook' },
    { id: 'f', label: 'F — Future', pattern: 'user', icon: 'star', sub: 'why THIS role — the only beat about them' },
  ],
  edges: [
    { source: 'p', target: 'pr' },
    { source: 'pr', target: 'f' },
  ],
}
