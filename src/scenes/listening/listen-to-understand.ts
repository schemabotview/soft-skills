import type { Scene } from '@graphlearning/flow'
import { priya, sam } from '../shared/people'

// §1 — the same sentence, heard two ways: listening to reply versus listening to understand.
export const listenToUnderstand: Scene = {
  id: 'listen-to-understand',
  title: 'Listening to understand',
  flow: 'TB',
  nodes: [
    { id: 'said', ...priya, label: 'Priya', sub: '"The dashboard has to be real time."' },
    {
      id: 'two-ways',
      label: 'Two ways to hear it',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'reply', ...sam, pattern: 'warn', label: 'To reply', sub: '"Sure, we can stream it."' },
        { id: 'understand', ...sam, label: 'To understand', sub: '"Real time for which decision?"' },
        { id: 'reply-then', label: 'Then', sub: 'commits to the wrong thing', pattern: 'warn', icon: 'ban' },
        { id: 'understand-then', label: 'Then', sub: 'learns what is really needed', pattern: 'service', icon: 'circlecheck' },
      ],
    },
    {
      id: 'attention',
      label: 'What attention looks like',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'finish', label: 'Let them finish', sub: 'no answer mid-sentence', pattern: 'external', icon: 'clock' },
        { id: 'notes', label: 'Notes', sub: 'their words, not rebuttals', pattern: 'external', icon: 'pencil' },
        { id: 'device', label: 'One screen', sub: 'not chat on the side', pattern: 'external', icon: 'monitor' },
        { id: 'interrupt', label: 'Interrupting', sub: 'only to check a word', pattern: 'external', icon: 'search' },
      ],
    },
  ],
  edges: [
    { source: 'said', target: 'two-ways' },
    { source: 'two-ways', target: 'attention', dashed: true },
  ],
}
