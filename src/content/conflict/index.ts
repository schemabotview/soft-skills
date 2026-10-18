import type { Course } from '../types'
import { conflictTypesSection } from './01-conflict-types'
import { preparingSection } from './02-preparing'
import { openingTheConversation } from './03-opening-the-conversation'
import { positionsAndInterests } from './04-positions-and-interests'
import { optionsAndCriteria } from './05-options-and-criteria'
import { alternativesToAgreement } from './06-alternatives-to-agreement'
import { escalationRoutes } from './07-escalation-routes'

// Chapter 9: explain how to prepare for disagreement, explore options and recognise escalation boundaries.
export const conflict: Course = {
  id: 'conflict',
  title: 'Conflict resolution and negotiation',
  sections: [conflictTypesSection, preparingSection, openingTheConversation, positionsAndInterests, optionsAndCriteria, alternativesToAgreement, escalationRoutes],
}
