import type { Scene } from '@graphlearning/flow'

// §1 — which channel fits which message.
export const channels: Scene = {
  id: 'channels',
  title: 'Choosing a channel',
  flow: 'TB',
  nodes: [
    {
      id: 'table',
      kind: 'table',
      label: 'Which channel for which message',
      headers: ['channel', 'good for', 'poor for'],
      values: [
        ['conversation', 'tension, nuance, fast back-and-forth', 'a record'],
        ['chat', 'quick questions, short updates', 'decisions people must find later'],
        ['email', 'one request, outside the team', 'long debates'],
        ['document', 'decisions, plans, handovers', 'urgent questions'],
      ],
    },
    {
      id: 'rules',
      label: 'Rules of thumb',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'talk-write', label: 'Talk, then write', sub: 'discuss live, summarise after', pattern: 'service', icon: 'pencil' },
        { id: 'tension', label: 'Tension', sub: 'move it out of chat', pattern: 'warn', icon: 'users' },
        { id: 'durable', label: 'Durable', sub: 'if anyone will look it up', pattern: 'storage', icon: 'file' },
        { id: 'urgent', label: 'Urgent', sub: 'a call, not an email', pattern: 'network', icon: 'bell' },
      ],
    },
  ],
  edges: [{ source: 'table', target: 'rules' }],
}
