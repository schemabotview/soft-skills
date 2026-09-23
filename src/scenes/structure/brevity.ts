import type { Scene } from '@graphlearning/flow'

// §7 brevity [script] — a real status update, cut. The long version is not padded with nonsense;
// every clause in it is true and relevant, which is exactly why cutting feels impossible from the
// inside. The short version keeps the two facts the reader needed and drops the six that were
// evidence of effort. Shown as one card so the length difference is the whole argument.
export const brevity: Scene = {
  id: 'brevity',
  padding: 0.16,
  nodes: [
    {
      id: 'cut',
      kind: 'code',
      filename: 'the same status, cut',
      label: [
        '# what gets written',
        '',
        '"I have been working through the ingestion backlog this week.',
        ' I hit some issues with the schema drift on the vendor feed,',
        ' which took longer than expected to track down, and I have',
        ' also been helping Priya with the dashboard migration. The',
        ' backlog is mostly cleared but there are a few edge cases."',
        '',
        '# what the reader needed',
        '',
        '"Ingestion backlog is clear except four vendor files.',
        " Those need a schema fix — I'll have it Thursday.\"",
      ].join('\n'),
    },
  ],
  edges: [],
}
