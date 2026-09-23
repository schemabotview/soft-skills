import type { Scene } from '@graphlearning/flow'

// §6 the-future [script] — three answers to "where are you going". The industry answer and the money
// answer are the two default failures and both are about anything except this job. The third names
// something specific to the company, which is the only version that gives the interviewer a reason
// to keep going — and it requires ten minutes of research, which is the actual ask.
export const theFuture: Scene = {
  id: 'the-future',
  padding: 0.14,
  nodes: [
    {
      id: 'future',
      kind: 'code',
      filename: 'three futures',
      label: [
        '# about the industry — a forecast, not an answer',
        '"I think AI is going to change data engineering a lot."',
        '',
        '# about money — honest, and not what was asked',
        '"I am looking for a step up in compensation."',
        '',
        '# about them',
        '"I want to move toward platform work. You are rebuilding',
        ' the ingestion layer this year — that is the problem I',
        ' want to be on."',
        '',
        '# the third one costs ten minutes of research. that is all.',
      ].join('\n'),
    },
  ],
  edges: [],
}
