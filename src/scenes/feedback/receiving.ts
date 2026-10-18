import type { Scene } from '@graphlearning/flow'
import { jordan } from '../shared/people'

// §4 — receiving feedback: the defensive reflex, and the clarifying questions that replace it.
export const receiving: Scene = {
  id: 'receiving',
  title: 'Receiving feedback',
  flow: 'TB',
  nodes: [
    {
      id: 'pair',
      label: 'Jordan hears the feedback',
      pattern: 'external',
      cols: 2,
      children: [
        {
          id: 'reflex',
          label: 'The defensive reflex',
          pattern: 'warn',
          cols: 1,
          children: [
            { id: 'deny', ...jordan, pattern: 'warn', label: 'Deny', sub: '"That’s not what happened."' },
            { id: 'counter', ...jordan, pattern: 'warn', label: 'Counter', sub: '"You missed one too."' },
            { id: 'collapse', ...jordan, pattern: 'warn', label: 'Collapse', sub: '"I’m useless at this."' },
          ],
        },
        {
          id: 'instead',
          label: 'Instead: understand it first',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'pause', label: 'Pause', sub: 'breathe; no reply yet', pattern: 'service', icon: 'clock' },
            { id: 'example', ...jordan, label: 'Example', sub: '"Which handover was it?"' },
            { id: 'helped', ...jordan, label: 'Ask', sub: '"What would have helped?"' },
            { id: 'thanks', ...jordan, label: 'Thank', sub: '"Thanks for telling me."' },
          ],
        },
      ],
    },
  ],
  edges: [],
}
