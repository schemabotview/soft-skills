import type { Scene } from '@graphlearning/flow'
import { priya } from '../shared/people'

// §3 — one message from Priya, pulled apart into observation, interpretation, feeling and action.
export const observationInterpretation: Scene = {
  id: 'observation-interpretation',
  title: 'Observation, interpretation, feeling, action',
  flow: 'TB',
  nodes: [
    {
      id: 'message',
      ...priya,
      label: 'Priya, 16:40',
      sub: '"Can we split sales by region for Thursday?"',
    },
    {
      id: 'layers',
      label: 'What happens in Sam',
      sub: 'four layers, easily blended',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'observation', label: 'Observation', sub: 'new request, two days out', pattern: 'storage', icon: 'search' },
        { id: 'interpretation', label: 'Interpretation', sub: '"Priya ignores our plan"', pattern: 'warn', icon: 'circleslash' },
        { id: 'feeling', label: 'Feeling', sub: 'frustrated, a bit anxious', pattern: 'network', icon: 'waves' },
        { id: 'action', label: 'Action', sub: 'ask what changed, then reply', pattern: 'service', icon: 'pencil' },
      ],
    },
    {
      id: 'check',
      label: 'The test for each layer',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'camera', label: 'Camera test', sub: 'could a camera record it?', pattern: 'external', icon: 'monitor' },
        { id: 'unknown', label: 'What is unknown?', sub: 'Priya’s reason for asking', pattern: 'external', icon: 'search' },
      ],
    },
  ],
  edges: [
    { source: 'message', target: 'layers' },
    { source: 'layers', target: 'check', dashed: true },
  ],
}
