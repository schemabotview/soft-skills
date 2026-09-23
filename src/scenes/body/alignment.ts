import type { Scene } from '@graphlearning/flow'

// §2 alignment [flow] — the stack, bottom to top, so grounding reads as something built from the
// floor up rather than a posture you hold. BT (bottom→top) rather than TB: the chain genuinely
// starts at the feet, and drawing it downward would invert the one thing the section is about. Four
// cards, so vertical per the LR-caps-at-three rule.
export const alignment: Scene = {
  id: 'alignment',
  padding: 0.14,
  flow: 'BT',
  nodes: [
    { id: 'feet', label: 'Feet', pattern: 'service', icon: 'ruler', sub: 'hip width, weight even' },
    { id: 'knees', label: 'Knees', pattern: 'network', icon: 'circleslash', sub: 'soft — never locked' },
    { id: 'spine', label: 'Spine', pattern: 'storage', icon: 'layers', sub: 'long, not braced' },
    { id: 'head', label: 'Head', pattern: 'user', icon: 'scanface', sub: 'level — chin neither up nor tucked' },
  ],
  edges: [
    { source: 'feet', target: 'knees' },
    { source: 'knees', target: 'spine' },
    { source: 'spine', target: 'head' },
  ],
}
