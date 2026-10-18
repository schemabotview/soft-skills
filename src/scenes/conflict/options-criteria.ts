import type { Scene } from '@graphlearning/flow'

// §5 — options built to meet both sets of interests, judged against agreed criteria.
export const optionsCriteria: Scene = {
  id: 'options-criteria',
  title: 'Creating options and agreeing criteria',
  flow: 'TB',
  nodes: [
    {
      id: 'criteria',
      label: 'Criteria agreed first',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'c-demo', label: 'Demo', sub: 'the customer sees value on the 15th', pattern: 'external', icon: 'users' },
        { id: 'c-accuracy', label: 'Accuracy', sub: 'only reconciled numbers shown', pattern: 'storage', icon: 'shieldcheck' },
        { id: 'c-load', label: 'Load', sub: 'no weekend work', pattern: 'service', icon: 'clock' },
      ],
    },
    {
      id: 'options',
      kind: 'table',
      label: 'Options against the criteria',
      headers: ['option', 'demo', 'accuracy', 'load'],
      values: [
        ['full launch on the 15th', 'yes', 'no', 'no'],
        ['launch in 3 weeks', 'no', 'yes', 'yes'],
        ['demo 37 checked shops, full in 3 wks', 'yes', 'yes', 'yes'],
      ],
    },
  ],
  edges: [{ source: 'criteria', target: 'options' }],
}
