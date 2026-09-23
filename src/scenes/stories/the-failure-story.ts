import type { Scene } from '@graphlearning/flow'

// §6 the-failure-story [script] — three answers to "tell me about a failure". The humblebrag and the
// disaster are the two ways this is usually got wrong, and both are recognisable enough that people
// see themselves in one of them. The third is a real failure with the learning attached, drawn from
// the quarry's own STAR worksheet: building from scratch what should have been an enhancement.
export const theFailureStory: Scene = {
  id: 'the-failure-story',
  padding: 0.14,
  nodes: [
    {
      id: 'fail',
      kind: 'code',
      filename: 'three answers to one question',
      label: [
        '# the humblebrag — scores zero',
        '"I care too much about quality, so I over-engineer things."',
        '',
        '# the disaster — no learning attached',
        '"I dropped a production table. It was a bad week."',
        '',
        '# the real one',
        '"I was given an enhancement and rebuilt it from scratch.',
        ' I had assumed the existing code was the problem — I never',
        ' checked. I lost a week, then shipped on the original code.',
        ' Now I read what exists before I decide it needs replacing."',
      ].join('\n'),
    },
  ],
  edges: [],
}
