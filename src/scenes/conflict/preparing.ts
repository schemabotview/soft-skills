import type { Scene } from '@graphlearning/flow'

// §2 — Jordan's preparation for the conversation with Priya.
export const preparing: Scene = {
  id: 'preparing',
  title: 'Preparing for a difficult conversation',
  flow: 'TB',
  nodes: [
    {
      id: 'prep',
      label: 'Jordan’s preparation',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'facts', label: 'Facts', sub: '3 of 40 shops don’t reconcile', pattern: 'storage', icon: 'table' },
        { id: 'mine', label: 'My interests', sub: 'numbers I can stand behind', pattern: 'service', icon: 'shieldcheck' },
        { id: 'theirs', label: 'Their interests?', sub: 'a guess, to check with Priya', pattern: 'external', icon: 'search' },
        { id: 'limits', label: 'My limits', sub: 'won’t sign off unchecked totals', pattern: 'warn', icon: 'lock' },
        { id: 'outcome', label: 'Conversation aim', sub: 'options we both understand', pattern: 'service', icon: 'circlecheck' },
        { id: 'not-aim', label: 'Not the aim', sub: 'winning the argument', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [],
}
