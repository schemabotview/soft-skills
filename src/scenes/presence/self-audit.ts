import type { Scene } from '@graphlearning/flow'

// §9 self-audit [script] — the method that gets you from stage one to stage two. Four passes over
// ONE recording, each middle pass deliberately blinding a channel so the other becomes audible:
// sound off isolates the visual, eyes closed isolates the vocal. The last card is the whole point —
// one habit, named, written down. The script card carries the prompt to record, so the exercise is
// runnable straight off the frame instead of described in the abstract.
//
// The passes flow LR, not TB: stacked, the container plus the card below it ran the full height of
// the pane, which shrank every card until the labels wrapped to three lines and the subs clipped
// against the container's bottom edge. Wide-and-short leaves the script card room underneath.
export const selfAudit: Scene = {
  id: 'self-audit',
  padding: 0.06,
  nodes: [
    {
      id: 'passes',
      label: 'Four passes, one recording',
      pattern: 'group',
      icon: 'repeat',
      flow: 'LR',
      children: [
        { id: 'p1', label: 'Record two minutes', pattern: 'service', icon: 'monitor', sub: 'phone · standing · no script' },
        { id: 'p2', label: 'Watch, sound OFF', pattern: 'storage', icon: 'scanface', sub: 'what the body alone says' },
        { id: 'p3', label: 'Listen, eyes CLOSED', pattern: 'network', icon: 'waves', sub: 'pace · fillers · pauses' },
        { id: 'p4', label: 'Name ONE habit', pattern: 'user', icon: 'pencil', sub: 'and write it down' },
      ],
      edges: [
        { source: 'p1', target: 'p2', dir: 'LR' },
        { source: 'p2', target: 'p3', dir: 'LR' },
        { source: 'p3', target: 'p4', dir: 'LR' },
      ],
    },
    {
      id: 'prompt',
      kind: 'code',
      filename: 'the prompt',
      hug: true,
      label: [
        '# Say this to the camera. Do not write it out first.',
        '',
        '"Walk me through a project you shipped recently,',
        ' and what you would do differently."',
      ].join('\n'),
    },
  ],
  edges: [],
}
