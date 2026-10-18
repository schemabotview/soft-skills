import type { Scene } from '@graphlearning/flow'

// §3 — generating options before judging any, then narrowing.
export const alternatives: Scene = {
  id: 'alternatives',
  title: 'Generating alternatives before choosing',
  flow: 'TB',
  nodes: [
    {
      id: 'widen',
      label: 'First, widen: five options, no judging',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'scope', label: 'Less scope', sub: 'the 6 columns finance uses', pattern: 'service', icon: 'scissors' },
        { id: 'date', label: 'Later date', sub: 'export next Wednesday', pattern: 'service', icon: 'calendar' },
        { id: 'support', label: 'More support', sub: 'Mei helps with the build', pattern: 'service', icon: 'users' },
        { id: 'phased', label: 'Phased', sub: 'manual file Mon, export later', pattern: 'service', icon: 'layers' },
        { id: 'reuse', label: 'Reuse', sub: 'the old report, patched', pattern: 'service', icon: 'repeat' },
        { id: 'unusual', label: 'One odd one', sub: 'ask finance to wait a month', pattern: 'network', icon: 'zap' },
      ],
    },
    {
      id: 'then',
      label: 'Then narrow',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'rules', label: 'Rule out', sub: 'breaks a constraint', pattern: 'warn', icon: 'ban' },
        { id: 'combine', label: 'Combine', sub: 'phased + less scope', pattern: 'service', icon: 'merge' },
      ],
    },
  ],
  edges: [{ source: 'widen', target: 'then' }],
}
