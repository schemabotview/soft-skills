import type { Scene } from '@graphlearning/flow'

// §6 — knowledge shared once instead of answered five times, and recognition that is specific.
export const knowledgeCredit: Scene = {
  id: 'knowledge-credit',
  title: 'Sharing knowledge and recognising contributions',
  flow: 'TB',
  nodes: [
    {
      id: 'share',
      label: 'Sharing knowledge',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'asked-five', label: 'Asked 5 times', sub: '"How is the region total made?"', pattern: 'warn', icon: 'repeat' },
        { id: 'note', label: 'Written once', sub: 'a one-page note, linked', pattern: 'service', icon: 'file' },
      ],
    },
    {
      id: 'recognise',
      label: 'Recognition',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'generic', label: 'Generic', sub: '"Thanks, team!"', pattern: 'warn', icon: 'circleslash' },
        { id: 'specific', label: 'Specific', sub: '"Jordan’s Wed fix saved the demo."', pattern: 'service', icon: 'star' },
        { id: 'credit-quiet', label: 'Quiet work', sub: 'Mei found the refund bug', pattern: 'service', icon: 'search' },
        { id: 'in-public', label: 'Where', sub: 'in the update Priya reads', pattern: 'service', icon: 'users' },
      ],
    },
  ],
  edges: [{ source: 'share', target: 'recognise', dashed: true }],
}
