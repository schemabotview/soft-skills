import type { Scene } from '@graphlearning/flow'

// §6 — closing on the decision, with owners and a check date, not on "any questions?".
export const closing: Scene = {
  id: 'closing',
  title: 'Closing with a recommendation and next step',
  flow: 'TB',
  nodes: [
    {
      id: 'close',
      label: 'Sam’s last minute',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'recommend', label: 'Recommend', sub: 'full rollout in three weeks', pattern: 'service', icon: 'star' },
        { id: 'decide', label: 'Decision', sub: 'yes or no, today', pattern: 'service', icon: 'scale' },
        { id: 'condition', label: 'Condition', sub: '2 weeks in parallel first', pattern: 'warn', icon: 'shieldcheck' },
        { id: 'next', label: 'Next step', sub: 'Jordan: 3 shops by Friday', pattern: 'service', icon: 'calendar' },
      ],
    },
    {
      id: 'endings',
      kind: 'table',
      label: 'Endings, weak and strong',
      headers: ['weak', 'strong'],
      values: [
        ['"So, any questions?"', '"I recommend the rollout."'],
        ['"That\'s about it."', '"We need a decision today."'],
        ['"We\'ll see how it goes."', '"We check again on the 8th."'],
        ['"Hope that was useful."', '"Jordan owns the 3 shops."'],
      ],
    },
  ],
  edges: [{ source: 'close', target: 'endings', dashed: true }],
}
