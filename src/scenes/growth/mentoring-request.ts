import type { Scene } from '@graphlearning/flow'

// §3 — a vague mentoring request against a focused one that respects the other person's time.
export const mentoringRequest: Scene = {
  id: 'mentoring-request',
  title: 'Relationships, mentoring requests and reciprocal networking',
  flow: 'TB',
  nodes: [
    {
      id: 'requests',
      label: 'Asking a senior analyst for help',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'vague',
          label: 'Vague',
          pattern: 'warn',
          cols: 1,
          children: [
            { id: 'be-mentor', label: 'The ask', sub: '"Will you be my mentor?"', pattern: 'warn', icon: 'circleslash' },
            { id: 'pick', label: 'Scope', sub: '"Can I pick your brain sometime?"', pattern: 'warn', icon: 'circleslash' },
            { id: 'when', label: 'Time', sub: 'open-ended, every week', pattern: 'warn', icon: 'clock' },
            { id: 'cost', label: 'Effect', sub: 'hard to say yes to', pattern: 'warn', icon: 'ban' },
          ],
        },
        {
          id: 'focused',
          label: 'Focused',
          pattern: 'service',
          cols: 1,
          children: [
            { id: 'context', label: 'Context', sub: '"I present to directors in March."', pattern: 'service', icon: 'file' },
            { id: 'ask', label: 'The ask', sub: '"30 minutes on how you open?"', pattern: 'service', icon: 'search' },
            { id: 'easy-no', label: 'Easy no', sub: '"No problem if it’s a busy month."', pattern: 'service', icon: 'circlecheck' },
            { id: 'give-back', label: 'Give back', sub: 'share the notes; report how it went', pattern: 'service', icon: 'repeat' },
          ],
        },
      ],
    },
  ],
  edges: [],
}
