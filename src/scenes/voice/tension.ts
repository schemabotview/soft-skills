import type { Scene } from '@graphlearning/flow'

// §3 tension [board] — six places the chain gets throttled. A BOARD, not a flow: tension is not
// sequential, you carry several of these at once, and a grid says that. Every tile's `sub` names the
// audible consequence rather than the sensation, because the section's argument is that tension is
// something the listener HEARS, not just something you feel.
export const tension: Scene = {
  id: 'tension',
  padding: 0.14,
  nodes: [
    {
      id: 'board',
      label: 'Where tension hides — and what each one costs',
      pattern: 'group',
      icon: 'lock',
      cols: 3,
      children: [
        { id: 'jaw', label: 'Jaw', pattern: 'warn', icon: 'lock', sub: 'clenched — thins the tone', variant: 'tile' },
        { id: 'throat', label: 'Throat', pattern: 'warn', icon: 'ban', sub: 'gripped — the voice sits high', variant: 'tile' },
        { id: 'shoulders', label: 'Shoulders', pattern: 'warn', icon: 'ruler', sub: 'raised — breath stops short', variant: 'tile' },
        { id: 'tongue', label: 'Tongue root', pattern: 'warn', icon: 'circleslash', sub: 'pulled back — swallows sound', variant: 'tile' },
        { id: 'neck', label: 'Neck', pattern: 'warn', icon: 'link', sub: 'locked — the head juts forward', variant: 'tile' },
        { id: 'belly', label: 'Belly', pattern: 'warn', icon: 'box', sub: 'held in — nothing to spend', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
