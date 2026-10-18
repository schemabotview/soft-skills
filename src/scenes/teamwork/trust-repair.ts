import type { Scene } from '@graphlearning/flow'
import { sam } from '../shared/people'

// §2 — how trust is built and spent, and the four parts of a repair.
export const trustRepair: Scene = {
  id: 'trust-repair',
  title: 'Trust through reliability, honesty and repair',
  flow: 'TB',
  nodes: [
    {
      id: 'ledger',
      label: 'How trust moves',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'kept', label: 'Kept a promise', sub: 'small, repeated, noticed', pattern: 'service', icon: 'circlecheck' },
        { id: 'early', label: 'Said so early', sub: 'before a date slipped', pattern: 'service', icon: 'bell' },
        { id: 'missed', label: 'Missed a handover', sub: 'Mei waited a day', pattern: 'warn', icon: 'ban' },
        { id: 'hidden', label: 'Hid a problem', sub: 'costs most of all', pattern: 'warn', icon: 'lock' },
      ],
    },
    {
      id: 'repair',
      label: 'Sam’s repair, in four parts',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'name', ...sam, label: 'Name it', sub: '"I missed our 10:00 handover."' },
        { id: 'impact', ...sam, label: 'The impact', sub: '"You waited a day for access."' },
        { id: 'fix', ...sam, label: 'The fix', sub: '"Access is done; notes attached."' },
        { id: 'prevent', ...sam, label: 'Next time', sub: '"I’ve put handovers in my calendar."' },
      ],
    },
  ],
  edges: [{ source: 'ledger', target: 'repair', dashed: true }],
}
