import type { Scene } from '@graphlearning/flow'
import { sam } from '../shared/people'

// §4 — the same trigger, three responses, and what each one sets in motion. Each reply sits beside
// its consequence, two columns: three columns of six cards shrank the quotes below reading size.
export const threeResponses: Scene = {
  id: 'three-responses',
  title: 'A trigger and three responses',
  flow: 'TB',
  nodes: [
    {
      id: 'trigger',
      label: 'The trigger',
      sub: 'a late request, when Sam is already behind',
      pattern: 'network',
      cols: 2,
      children: [
        { id: 'body', label: 'In the body', sub: 'jaw tight, typing fast', pattern: 'network', icon: 'zap' },
        { id: 'story', label: 'In the head', sub: '"Not again."', pattern: 'network', icon: 'repeat' },
        { id: 'pause', label: 'The pause', sub: 'draft, wait ten minutes', pattern: 'service', icon: 'clock' },
        { id: 'choose', label: 'Then choose', sub: 'which reply to send', pattern: 'service', icon: 'gitbranch' },
      ],
    },
    {
      id: 'responses',
      label: 'Three replies Sam could send',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'resentful', ...sam, pattern: 'warn', label: 'Agree, resentfully', sub: '"Fine. Whatever you need."' },
        { id: 'resentful-then', label: 'Then', sub: 'silent overtime, no trade-off', pattern: 'warn', icon: 'skull' },
        { id: 'aggressive', ...sam, pattern: 'warn', label: 'Push back hard', sub: '"That’s not how this works."' },
        { id: 'aggressive-then', label: 'Then', sub: 'Priya stops sharing early', pattern: 'warn', icon: 'lock' },
        { id: 'ask', ...sam, label: 'Pause and ask', sub: '"What changed? I’ll offer options."' },
        { id: 'ask-then', label: 'Then', sub: 'a real reason, real options', pattern: 'service', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [{ source: 'trigger', target: 'responses' }],
}
