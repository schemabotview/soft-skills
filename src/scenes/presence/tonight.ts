import type { Scene } from '@graphlearning/flow'

// §5 the-other-93 [script] — the misallocation as an artifact rather than an argument. A single
// script card: the night-before checklist an engineer actually writes, with the weight each line
// carries annotated in the trailing comment. Three ticked boxes all feeding the 7% channel, and the
// one unticked box worth more than all of them — the unchecked line IS the section. A table would
// have stated the same fact and lost the joke, which is what makes it stick.
export const tonight: Scene = {
  id: 'tonight',
  padding: 0.2,
  nodes: [
    {
      id: 'tonight',
      kind: 'code',
      filename: 'tonight.md',
      label: [
        '# Before the design review tomorrow',
        '',
        '- [x] re-read the design doc            # 7%',
        '- [x] re-check the latency numbers      # 7%',
        '- [x] rehearse the three hard questions # 7%',
        '',
        '- [ ] say the opening out loud, once,   # 38% + 55%',
        '      standing up',
      ].join('\n'),
    },
  ],
  edges: [],
}
