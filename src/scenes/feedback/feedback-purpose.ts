import type { Scene } from '@graphlearning/flow'
import { sam } from '../shared/people'

// §1 — purpose, timing, privacy and permission before any feedback is given.
export const feedbackPurpose: Scene = {
  id: 'feedback-purpose',
  title: 'Feedback purpose, timing, privacy and permission',
  flow: 'TB',
  nodes: [
    {
      id: 'before',
      label: 'Before Sam says anything to Jordan',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'purpose', label: 'Purpose', sub: 'to fix handovers, not vent', pattern: 'service', icon: 'search' },
        { id: 'timing', label: 'Timing', sub: 'this week, once calm', pattern: 'service', icon: 'clock' },
        { id: 'privacy', label: 'Privacy', sub: 'one to one, not in standup', pattern: 'service', icon: 'lock' },
        { id: 'permission', ...sam, label: 'Permission', sub: '"Can we talk about Wednesday?"' },
      ],
    },
    {
      id: 'not-like-this',
      kind: 'table',
      label: 'When feedback lands badly',
      headers: ['setting', 'what it signals'],
      values: [
        ['in front of the team', 'a public reprimand'],
        ['by chat, while angry', 'the anger, not the issue'],
        ['Friday at 17:55', 'no time to respond'],
        ['three weeks later', 'saved up, not shared'],
      ],
    },
  ],
  edges: [{ source: 'before', target: 'not-like-this', dashed: true }],
}
