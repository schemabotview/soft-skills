import type { Scene } from '@graphlearning/flow'
import { sam } from '../shared/people'

// §1 — a setback (the 15:00 trial is barely used) and changes arriving with incomplete information.
export const changeResponse: Scene = {
  id: 'change-response',
  title: 'Responding to change, setbacks and incomplete information',
  flow: 'TB',
  nodes: [
    {
      id: 'setback',
      label: 'The 15:00 trial, one month on',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'measured', label: 'Measured', sub: '4 of 40 managers used it', pattern: 'warn', icon: 'gauge' },
        { id: 'feeling', ...sam, label: 'Sam', sub: '"Disappointing. It was my idea."' },
        { id: 'report', label: 'Reported', sub: 'end the trial; say why, plainly', pattern: 'service', icon: 'file' },
        { id: 'learned', label: 'Learned', sub: 'ask the users before building', pattern: 'service', icon: 'search' },
      ],
    },
    {
      id: 'changes',
      kind: 'table',
      label: 'Changes with incomplete information',
      headers: ['what changed', 'a first, small step'],
      values: [
        ['12 new shops, format unknown', 'ask for one sample file'],
        ['Alex on leave for two weeks', 'write down who decides what'],
        ['the 15:00 load is switched off', 'tell the 4 managers first'],
        ['a new finance system next year', 'note it; no plan yet'],
      ],
    },
  ],
  edges: [{ source: 'setback', target: 'changes', dashed: true }],
}
