import type { Scene } from '@graphlearning/flow'

// §7 nervous-vs-confident [compare] — the course's summary table, and the one section that earns a
// six-row figure: every signal covered separately above, now on one screen as a single read. Straight
// from the source workshop, which is the right call — this is the frame people actually remember, and
// re-cutting it would lose the pairing that makes it work.
export const nervousVsConfident: Scene = {
  id: 'nervous-vs-confident',
  padding: 0.14,
  nodes: [
    {
      id: 'read',
      kind: 'table',
      pattern: 'user',
      label: 'The whole read, in one table',
      sub: 'what each signal says about you',
      headers: ['Nervous', 'Confident'],
      values: [
        ['Slouching or leaning too far back', 'Upright, slight forward lean'],
        ['Touching the face repeatedly', 'Still hands, open palms'],
        ['Darting eyes, avoiding contact', 'Steady, warm eye contact'],
        ['Fidgeting with hands or a pen', 'Calm, deliberate movement'],
        ['Arms crossed defensively', 'Comfortable, open position'],
        ['Nodding constantly for approval', 'At ease with silence'],
      ],
    },
  ],
  edges: [],
}
