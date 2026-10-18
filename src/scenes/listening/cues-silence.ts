import type { Scene } from '@graphlearning/flow'

// §6 — silence and other cues carry several possible meanings; ask rather than read them.
export const cuesSilence: Scene = {
  id: 'cues-silence',
  title: 'Cues, silence and what they do not prove',
  flow: 'TB',
  nodes: [
    {
      id: 'silence',
      label: 'Priya goes quiet after Sam’s summary',
      sub: 'it could mean any of these',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'agrees', label: 'Agreement', sub: 'nothing to add', pattern: 'service', icon: 'circlecheck' },
        { id: 'unsure', label: 'Uncertainty', sub: 'not sure what to ask', pattern: 'network', icon: 'search' },
        { id: 'thinking', label: 'Thinking', sub: 'still processing', pattern: 'network', icon: 'clock' },
        { id: 'unsaid', label: 'Unsaid', sub: 'a doubt, not voiced', pattern: 'warn', icon: 'lock' },
      ],
    },
    {
      id: 'cues',
      label: 'Cues that vary between people',
      pattern: 'warn',
      cols: 3,
      children: [
        { id: 'eyes', label: 'Eye contact', sub: 'norms differ widely', pattern: 'warn', icon: 'scanface' },
        { id: 'camera', label: 'Camera off', sub: 'many reasons', pattern: 'warn', icon: 'monitor' },
        { id: 'nod', label: 'A nod', sub: 'may mean "go on"', pattern: 'warn', icon: 'repeat' },
      ],
    },
    {
      id: 'instead',
      label: 'Instead of guessing',
      pattern: 'external',
      cols: 2,
      children: [
        { id: 'ask', label: 'Ask', sub: '"What would you change?"', pattern: 'service', icon: 'search' },
        { id: 'offer', label: 'Offer writing', sub: '"Reply later if easier."', pattern: 'service', icon: 'pencil' },
      ],
    },
  ],
  edges: [
    { source: 'silence', target: 'cues', dashed: true },
    { source: 'cues', target: 'instead' },
  ],
}
