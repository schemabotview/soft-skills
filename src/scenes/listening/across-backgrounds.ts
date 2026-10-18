import type { Scene } from '@graphlearning/flow'

// §5 — the same words mean different things to different experts; habits that help across languages.
export const acrossBackgrounds: Scene = {
  id: 'across-backgrounds',
  title: 'Listening across expertise and language',
  flow: 'TB',
  nodes: [
    {
      id: 'words',
      kind: 'table',
      label: 'One word, two meanings',
      sub: 'Priya (business) and Jordan (data engineering)',
      headers: ['word', 'Priya means', 'Jordan means'],
      values: [
        ['real time', 'this morning’s numbers', 'within seconds'],
        ['refresh', 'the page updates', 'a pipeline run'],
        ['region', 'a sales area', 'a cloud data centre'],
      ],
    },
    {
      id: 'habits',
      label: 'Habits that help',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'define', label: 'Define words', sub: '"By real time, I mean…"', pattern: 'service', icon: 'pencil' },
        { id: 'plain', label: 'Plain words', sub: 'no idioms or acronyms', pattern: 'service', icon: 'file' },
        { id: 'follow-up', label: 'Write it up', sub: 'a summary to reread', pattern: 'service', icon: 'scroll' },
        { id: 'time', label: 'Allow time', sub: 'to process, then reply', pattern: 'service', icon: 'clock' },
      ],
    },
  ],
  edges: [{ source: 'words', target: 'habits' }],
}
