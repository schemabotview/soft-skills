import type { Scene } from '@graphlearning/flow'

// §5 — three traps in group reasoning, and a countermeasure for each.
export const biases: Scene = {
  id: 'biases',
  title: 'Confirmation bias, premature agreement and false certainty',
  flow: 'TB',
  nodes: [
    {
      id: 'traps',
      label: 'Traps in the option meeting',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'confirm', label: 'Confirmation', sub: 'only evidence for "phased"', pattern: 'warn', icon: 'search' },
        { id: 'confirm-fix', label: 'Instead', sub: '"What would change our mind?"', pattern: 'service', icon: 'repeat' },
        { id: 'agree', label: 'Quick consensus', sub: 'Alex spoke first; all agreed', pattern: 'warn', icon: 'users' },
        { id: 'agree-fix', label: 'Instead', sub: 'write views before discussing', pattern: 'service', icon: 'pencil' },
        { id: 'certain', label: 'False certainty', sub: '"Phased will definitely work"', pattern: 'warn', icon: 'ban' },
        { id: 'certain-fix', label: 'Instead', sub: 'a pre-mortem: how could it fail?', pattern: 'service', icon: 'skull' },
      ],
    },
  ],
  edges: [],
}
