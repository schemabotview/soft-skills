import type { Scene } from '@graphlearning/flow'
import { sam, jordan } from '../shared/people'

// §3 — asking about intent (SBII) and hearing an account that changes the fix, not the impact.
export const intent: Scene = {
  id: 'intent',
  title: 'Asking about intent',
  flow: 'TB',
  nodes: [
    {
      id: 'exchange',
      label: 'After the impact, a question',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ask', ...sam, label: 'Sam asks', sub: '"What was going on for you?"' },
        { id: 'account', ...jordan, label: 'Jordan', sub: '"I got pulled into an outage."' },
        { id: 'acknowledge', ...sam, label: 'Sam', sub: '"That makes sense. It still hurt Mei."' },
        { id: 'together', ...jordan, label: 'Jordan', sub: '"Fair. I should have said so."' },
      ],
    },
    {
      id: 'what-changes',
      label: 'What the account changes',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'impact-stays', label: 'Impact stays', sub: 'Mei still waited', pattern: 'warn', icon: 'clock' },
        { id: 'fix-changes', label: 'Fix changes', sub: 'a backup, not "try harder"', pattern: 'service', icon: 'wrench' },
        { id: 'not-assume', label: 'No assuming', sub: 'intent is asked, not guessed', pattern: 'service', icon: 'search' },
        { id: 'not-excuse', label: 'Not an excuse', sub: 'context, not a free pass', pattern: 'network', icon: 'scale' },
      ],
    },
  ],
  edges: [{ source: 'exchange', target: 'what-changes' }],
}
