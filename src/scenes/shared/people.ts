import type { PatternKey } from '@graphlearning/flow'

// The recurring cast of the dashboard project. Each person's pattern and icon live here so they look
// the same in every course; scenes spread one in and write `label` and `sub` LITERALLY beside it, e.g.
//   { id: 'priya-asks', ...priya, label: 'Priya', sub: '"Can we add regions?"' }
// Literal text is what lets `npm run check` measure the card. A spread label would be invisible to it.
// A card that shows a poor response overrides `pattern: 'warn'` after the spread.
type Style = { pattern: PatternKey; icon: string }

export const priya: Style = { pattern: 'external', icon: 'building' } // business partner
export const sam: Style = { pattern: 'service', icon: 'barchart' } // analyst, main point of view
export const jordan: Style = { pattern: 'storage', icon: 'database' } // data engineer
export const alex: Style = { pattern: 'user', icon: 'users' } // team lead, support owner
export const mei: Style = { pattern: 'network', icon: 'star' } // new team member
