import type { Scene } from '@graphlearning/flow'

// §9 the-practice-plan [board] — six moments that already exist in the week, each paired with the
// habit that fits it. A BOARD because you pick one, not all six. The pairing is the content: a habit
// with no trigger is an intention, and the reason this repo keeps returning to "one habit, attached
// to something already in your week" is that it is the only version that survives contact with a job.
export const thePracticePlan: Scene = {
  id: 'the-practice-plan',
  padding: 0.14,
  nodes: [
    {
      id: 'board',
      label: 'Six moments already in your week',
      pattern: 'group',
      icon: 'repeat',
      cols: 3,
      children: [
        { id: 'pp-standup', label: 'Standup', pattern: 'service', icon: 'users', sub: 'the two-sentence status', variant: 'tile' },
        { id: 'pp-review', label: 'Design review', pattern: 'network', icon: 'layers', sub: 'point first, then the reasons', variant: 'tile' },
        { id: 'pp-121', label: 'Your one-to-one', pattern: 'user', icon: 'usercheck', sub: 'one number, out loud', variant: 'tile' },
        { id: 'pp-ticket', label: 'Any new ticket', pattern: 'storage', icon: 'search', sub: 'define one obvious noun', variant: 'tile' },
        { id: 'pp-call', label: 'The next client call', pattern: 'warn', icon: 'monitor', sub: 'paraphrase once, before answering', variant: 'tile' },
        { id: 'pp-coffee', label: 'Waiting for coffee', pattern: 'service', icon: 'clock', sub: 'check your jaw and your shoulders', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
