import type { Scene } from '@graphlearning/flow'

// §1 fight-or-flight [flow] — the physiology, drawn as a chain so the reader can see that the voice
// problems in this course have a mechanical cause upstream of any confidence question. TB, four
// cards. The last card is the payload: naming exactly what you lose makes the later techniques read
// as compensations for a known deficit rather than as poise you either have or do not.
export const fightOrFlight: Scene = {
  id: 'fight-or-flight',
  padding: 0.14,
  flow: 'TB',
  nodes: [
    { id: 'f1', label: 'A question you did not expect', pattern: 'external', icon: 'search', sub: 'the trigger is often trivial' },
    { id: 'f2', label: 'The amygdala fires', pattern: 'warn', icon: 'zap', sub: 'before you have appraised anything' },
    { id: 'f3', label: 'Adrenaline', pattern: 'warn', icon: 'gauge', sub: 'heart up, breath high and fast' },
    { id: 'f4', label: 'What you lose', pattern: 'network', icon: 'brain', sub: 'working memory · pitch control · the wide view' },
  ],
  edges: [
    { source: 'f1', target: 'f2' },
    { source: 'f2', target: 'f3' },
    { source: 'f3', target: 'f4' },
  ],
}
