import type { Scene } from '@graphlearning/flow'

// §10 delivering-it [script] — the course's closer, and the place the whole concept converges: the
// finished pitch with the voice and body marks written onto it. A script card annotated in the
// trailing comments, so pitch, pause, pace and eye contact are attached to specific words rather
// than recommended in general. This is the only scene in the repo that cites three other courses at
// once, which is deliberate — it is the last section before the capstone course.
export const deliveringIt: Scene = {
  id: 'delivering-it',
  padding: 0.14,
  nodes: [
    {
      id: 'marked',
      kind: 'code',
      filename: 'the pitch, marked up',
      label: [
        '"Hi, I am Arjun —              # eye contact. not the floor.',
        ' a Java backend engineer',
        ' with five years in fintech.   # pitch FALLS. then pause.',
        '',
        ' At TechCorp I led a migration',
        ' that cut API response time',
        ' by 40%.                       # slow down on the number',
        '',
        ' I am looking for a senior role',
        ' where I drive architecture."  # fall, then STOP.',
        '',
        '# rehearsed until it is boring. never recited.',
      ].join('\n'),
    },
  ],
  edges: [],
}
