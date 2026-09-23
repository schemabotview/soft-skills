import type { Scene } from '@graphlearning/flow'

// §4 i-not-we [compare] — the habit that erases engineers from their own work. The right column is
// deliberately not "take all the credit": every rewrite still names the team, which is the thing
// people are afraid of losing and the reason the habit persists. Last row states the goal plainly,
// because without it the table reads as advice to be self-promoting.
export const iNotWe: Scene = {
  id: 'i-not-we',
  padding: 0.16,
  nodes: [
    {
      id: 'we',
      kind: 'table',
      pattern: 'warn',
      label: '"We" is where you disappear',
      sub: 'both versions credit the team',
      headers: ['What gets said', 'What it could be'],
      values: [
        ['"We migrated the pipeline"', '"I designed the migration; three of us ran it"'],
        ['"The team decided on Gradle"', '"I proposed Gradle with a benchmark; the team agreed"'],
        ['"We got it done"', '"I owned the ingestion half"'],
        ['Erases you entirely', 'Credits the team AND locates you in it'],
      ],
    },
  ],
  edges: [],
}
