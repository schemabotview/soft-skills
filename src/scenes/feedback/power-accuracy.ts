import type { Scene } from '@graphlearning/flow'
import { priya, sam } from '../shared/people'

// §6 — feedback that is inaccurate, and from someone with more power: acknowledge, correct, propose.
export const powerAccuracy: Scene = {
  id: 'power-accuracy',
  title: 'Appreciation, inaccurate feedback and power',
  flow: 'TB',
  nodes: [
    { id: 'claim', ...priya, label: 'Priya', sub: '"Your team never tells me anything."' },
    {
      id: 'pair',
      label: 'Responding, and the power around it',
      pattern: 'external',
      cols: 2,
      children: [
        {
          id: 'reply',
          label: 'Sam’s reply: impact, facts, a fix',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'impact', ...sam, label: 'Impact', sub: '"You’re not getting what you need."' },
            { id: 'facts', ...sam, label: 'Facts', sub: '"Updates go out Tuesdays, in the doc."' },
            { id: 'fix', ...sam, label: 'A fix', sub: '"Would an email summary work better?"' },
          ],
        },
        {
          id: 'power',
          label: 'When power is uneven',
          pattern: 'external',
          cols: 1,
          children: [
            { id: 'upward', label: 'Upward', sub: 'ask first; tie to shared goals', pattern: 'user', icon: 'scale' },
            { id: 'downward', label: 'Downward', sub: 'invite challenge, often', pattern: 'service', icon: 'users' },
            { id: 'appreciate', label: 'Appreciate', sub: 'specific, and as often', pattern: 'service', icon: 'star' },
            { id: 'unsafe', label: 'Unsafe?', sub: 'use other routes, ch. 9', pattern: 'warn', icon: 'shieldcheck' },
          ],
        },
      ],
    },
  ],
  edges: [{ source: 'claim', target: 'pair' }],
}
