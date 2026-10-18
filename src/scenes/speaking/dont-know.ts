import type { Scene } from '@graphlearning/flow'

// §5 — honest uncertainty versus unsupported certainty, and a request for help that is easy to answer.
export const dontKnow: Scene = {
  id: 'dont-know',
  title: 'Uncertainty, asking for help, "I do not know"',
  flow: 'TB',
  nodes: [
    {
      id: 'certainty',
      kind: 'table',
      label: 'Priya asks: "Will it be fixed by Thursday?"',
      headers: ['answer', 'what it signals'],
      values: [
        ['"Definitely, no problem."', 'certainty Sam doesn’t have'],
        ['"No idea."', 'a dead end'],
        ['"I don’t know yet; I’ll know by 3."', 'honest, with a next step'],
        ['"Likely, if Jordan’s fix holds."', 'a condition, stated'],
      ],
    },
    {
      id: 'help',
      label: 'Asking Alex for help',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'tried', label: 'What I tried', sub: 'reran it, read the log', pattern: 'service', icon: 'wrench' },
        { id: 'stuck', label: 'Where I’m stuck', sub: 'the lock is not ours', pattern: 'service', icon: 'lock' },
        { id: 'need', label: 'What I need', sub: '10 minutes with Jordan', pattern: 'service', icon: 'users' },
        { id: 'by', label: 'By when', sub: 'before the 3 pm update', pattern: 'service', icon: 'clock' },
      ],
    },
  ],
  edges: [{ source: 'certainty', target: 'help' }],
}
