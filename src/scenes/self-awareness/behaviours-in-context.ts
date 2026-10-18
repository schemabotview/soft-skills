import type { Scene } from '@graphlearning/flow'

// §1 — soft skills as observable behaviours, not traits, and the context that changes the right move.
export const behavioursInContext: Scene = {
  id: 'behaviours-in-context',
  title: 'Behaviours, relationships and context',
  flow: 'TB',
  nodes: [
    {
      id: 'behaviours',
      label: 'What this course means by a soft skill',
      sub: 'something someone could see you do',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'asks', label: 'Asks first', sub: 'checks before assuming', pattern: 'service', icon: 'search' },
        { id: 'states', label: 'States the request', sub: 'who, what, by when', pattern: 'service', icon: 'pencil' },
        { id: 'follows', label: 'Follows through', sub: 'or says early it cannot', pattern: 'service', icon: 'circlecheck' },
        { id: 'repairs', label: 'Repairs', sub: 'names a mistake, fixes it', pattern: 'service', icon: 'wrench' },
      ],
    },
    {
      id: 'not-traits',
      label: 'Not what it means',
      pattern: 'warn',
      cols: 3,
      children: [
        { id: 'extroversion', label: 'Extroversion', sub: 'quiet people listen well', pattern: 'warn', icon: 'ban' },
        { id: 'accent', label: 'Accent', sub: 'clarity is not an accent', pattern: 'warn', icon: 'ban' },
        { id: 'always-on', label: 'Always on', sub: 'availability is not skill', pattern: 'warn', icon: 'ban' },
      ],
    },
    {
      id: 'context',
      label: 'What changes the right move',
      pattern: 'external',
      cols: 3,
      children: [
        { id: 'power', label: 'Power', sub: 'who decides', pattern: 'user', icon: 'scale' },
        { id: 'stakes', label: 'Stakes', sub: 'what goes wrong if', pattern: 'external', icon: 'gauge' },
        { id: 'culture', label: 'Culture', sub: 'team, local, policy', pattern: 'network', icon: 'globe' },
      ],
    },
  ],
  edges: [
    { source: 'behaviours', target: 'not-traits', dashed: true },
    { source: 'not-traits', target: 'context', dashed: true },
  ],
}
