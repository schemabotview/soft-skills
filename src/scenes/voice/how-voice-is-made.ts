import type { Scene } from '@graphlearning/flow'

// §2 how-voice-is-made [flow] — the instrument, end to end: power, then vibration, then colour, then
// words. This is the scene the rest of the course refers back to — `tension` names where the chain
// gets throttled, `breath` expands stage one, `pitch-and-tone` expands stages two and three.
//
// TB, not LR. Four cards side by side make a composition wide enough that fitView scales every card
// to about 130px and the subs stop being legible — LR caps at three cards here (see CLAUDE.md).
export const howVoiceIsMade: Scene = {
  id: 'how-voice-is-made',
  padding: 0.14,
  nodes: [
    {
      id: 'chain',
      label: 'One instrument, four stages',
      pattern: 'group',
      icon: 'waves',
      flow: 'TB',
      children: [
        { id: 'breath', label: 'Breath', pattern: 'service', icon: 'waves', sub: 'the diaphragm — the power' },
        { id: 'folds', label: 'Vocal folds', pattern: 'network', icon: 'zap', sub: 'vibration — the raw tone' },
        { id: 'resonance', label: 'Resonators', pattern: 'storage', icon: 'box', sub: 'chest, mouth, mask — colour' },
        { id: 'articulators', label: 'Articulators', pattern: 'user', icon: 'scanface', sub: 'lips, tongue, jaw — words' },
      ],
      edges: [
        { source: 'breath', target: 'folds', label: 'power' },
        { source: 'folds', target: 'resonance', label: 'tone' },
        { source: 'resonance', target: 'articulators', label: 'colour' },
      ],
    },
  ],
  edges: [],
}
