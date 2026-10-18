import type { Scene } from '@graphlearning/flow'
import { sam } from '../shared/people'

// §2 — a judgement rewritten as situation, behaviour and impact (CCL's SBI).
export const sbi: Scene = {
  id: 'sbi',
  title: 'Situation, behaviour, impact',
  flow: 'TB',
  nodes: [
    { id: 'judgement', ...sam, pattern: 'warn', label: 'A judgement', sub: '"You’re unreliable."' },
    {
      id: 'pair',
      label: 'Rewritten, with a test for each part',
      pattern: 'external',
      cols: 2,
      children: [
        {
          id: 'parts',
          label: 'Rewritten: situation, behaviour, impact',
          sub: 'the Center for Creative Leadership’s SBI',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'situation', ...sam, label: 'Situation', sub: '"At Wednesday’s 10:00 handover…"' },
            { id: 'behaviour', ...sam, label: 'Behaviour', sub: '"…the load notes weren’t sent."' },
            { id: 'impact', ...sam, label: 'Impact', sub: '"Mei waited, and finance’s file slipped."' },
          ],
        },
        {
          id: 'tests',
          label: 'Tests for each part',
          pattern: 'external',
          cols: 1,
          children: [
            { id: 'when-where', label: 'Situation', sub: 'when and where, exactly', pattern: 'external', icon: 'calendar' },
            { id: 'camera', label: 'Behaviour', sub: 'a camera could record it', pattern: 'external', icon: 'monitor' },
            { id: 'effect', label: 'Impact', sub: 'an effect, not a verdict', pattern: 'external', icon: 'gauge' },
          ],
        },
      ],
    },
  ],
  edges: [{ source: 'judgement', target: 'pair', label: 'rewritten', dashed: true }],
}
