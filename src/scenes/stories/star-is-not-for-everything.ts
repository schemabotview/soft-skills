import type { Scene } from '@graphlearning/flow'

// §10 star-is-not-for-everything [script] — the course's closing correction, and a real failure mode
// once someone has just learned a framework. The same interviewer, two questions; STAR is right for
// one and actively costs you on the other. Written as speech because the wrongness is audible
// immediately — a technical question answered with "so the situation was" is a recognisable sound.
export const starIsNotForEverything: Scene = {
  id: 'star-is-not-for-everything',
  padding: 0.14,
  nodes: [
    {
      id: 'wrong',
      kind: 'code',
      filename: 'right tool, wrong question',
      label: [
        '# "Tell me about a time you disagreed with a manager."',
        'STAR. correct. this is what it is for.',
        '',
        '# "How would you design a rate limiter?"',
        'wrong: "So the situation was, at my last company..."',
        '',
        'right: "Let me start with the requirements, then two',
        '        options, then which I would pick and why."',
        '',
        '# behavioural questions want a story.',
        '# technical questions want a structure. not the same shape.',
      ].join('\n'),
    },
  ],
  edges: [],
}
