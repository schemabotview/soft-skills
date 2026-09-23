import type { Scene } from '@graphlearning/flow'

// §8 four-stages [framework] — Broadwell's competence ladder, which is the learning contract for the
// whole concept: awareness has to come before change. A flow, because these genuinely ARE stages in
// order — one of the few places in this repo where a pipeline is honest. TB, and deliberately so:
// LR was tried and four cards plus three labelled edges make a composition wide enough that fitView
// scales the type down to unreadable. A ladder is worth the vertical pane. Each card's `sub` carries
// the SAME worked habit (the nervous weight-shift) so the ladder is followed by one example rather
// than four, and stage two is `warn` because it is the stage that feels like regression.
export const fourStages: Scene = {
  id: 'four-stages',
  padding: 0.17,
  flow: 'TB',
  nodes: [
    { id: 's1', label: 'Unconsciously incompetent', pattern: 'external', icon: 'circleslash', sub: 'you shift your weight and never notice' },
    { id: 's2', label: 'Consciously incompetent', pattern: 'warn', icon: 'search', sub: 'you notice — and still do it' },
    { id: 's3', label: 'Consciously competent', pattern: 'network', icon: 'gauge', sub: 'you stand still, but it costs attention' },
    { id: 's4', label: 'Unconsciously competent', pattern: 'user', icon: 'circlecheck', sub: 'you just stand still now' },
  ],
  edges: [
    { source: 's1', target: 's2', label: 'awareness' },
    { source: 's2', target: 's3', label: 'practice' },
    { source: 's3', target: 's4', label: 'repetition' },
  ],
}
