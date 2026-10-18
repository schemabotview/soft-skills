import type { Scene } from '@graphlearning/flow'
import { sam } from '../shared/people'

// §6 — a missed commitment handled two ways, and the boundary between responsibility and self-sacrifice.
export const followThrough: Scene = {
  id: 'follow-through',
  title: 'Following through, mistakes and boundaries',
  flow: 'TB',
  nodes: [
    {
      id: 'missed',
      label: 'The sample file was due Wednesday',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'hide', ...sam, pattern: 'warn', label: 'Hide it', sub: 'works all weekend, says nothing' },
        { id: 'hide-then', label: 'Then', sub: 'tired, late anyway, trust lost', pattern: 'warn', icon: 'skull' },
        { id: 'tell', ...sam, label: 'Tell them', sub: '"It’s late. Friday noon, with checks."' },
        { id: 'tell-then', label: 'Then', sub: 'finance plans around it', pattern: 'service', icon: 'circlecheck' },
      ],
    },
    {
      id: 'boundary',
      label: 'Responsibility, not self-sacrifice',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'own', label: 'Own it', sub: 'say it, fix it, learn', pattern: 'service', icon: 'shieldcheck' },
        { id: 'not-all', label: 'Not everything', sub: 'others’ delays are theirs', pattern: 'warn', icon: 'scale' },
        { id: 'sustain', label: 'Sustainable', sub: 'no hidden overtime', pattern: 'service', icon: 'clock' },
        { id: 'escalate', label: 'Escalate', sub: 'when the plan is unreal', pattern: 'network', icon: 'bell' },
      ],
    },
  ],
  edges: [{ source: 'missed', target: 'boundary', dashed: true }],
}
