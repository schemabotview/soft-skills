import type { Scene } from '@graphlearning/flow'

// §7 requirements-failures [script] — the course's expensive example, drawn as the four-stage decay
// it actually is. Each line is a faithful transcription of the one above it, which is the point:
// nobody was careless, and the word "region" was never questioned because everyone assumed they
// already knew what it meant. The cost sits on the last line, unadorned.
export const requirementsFailures: Scene = {
  id: 'requirements-failures',
  padding: 0.14,
  nodes: [
    {
      id: 'decay',
      kind: 'code',
      filename: 'one word, six weeks',
      label: [
        '# what the client said',
        '"We need to see returns by region."',
        '',
        '# what went into the ticket',
        '"Add a region dimension to the returns dashboard."',
        '',
        '# what got built',
        'returns_by_region   -- grouped by WAREHOUSE region',
        '',
        '# what they meant',
        '-- CUSTOMER region. nobody asked. six weeks.',
      ].join('\n'),
    },
  ],
  edges: [],
}
