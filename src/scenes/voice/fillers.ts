import type { Scene } from '@graphlearning/flow'

// §9 filler-words [script] — the same answer twice, so the reader counts the fillers themselves
// rather than being told there are too many. The first block is deliberately painful to read; the
// second is the identical technical content at roughly a third of the length. The point the card
// makes without saying it: nothing was lost.
export const fillers: Scene = {
  id: 'fillers',
  padding: 0.16,
  nodes: [
    {
      id: 'fillers',
      kind: 'code',
      filename: 'the same answer, twice',
      label: [
        '# what it actually sounds like',
        '',
        '"So, um, basically what we did was, you know, we kind of',
        ' moved the retries into, like, a separate handler, and',
        ' that sort of fixed it, I think?"',
        '',
        '# fillers replaced with silence — same content, a third the length',
        '',
        '"We moved the retries into a separate handler."',
        '"That fixed it."',
      ].join('\n'),
    },
  ],
  edges: [],
}
