import type { Course } from '../types'
import { mainPointSection } from './01-main-point'
import { structureSection } from './02-structure'
import { plainExplanationsSection } from './03-plain-explanations'
import { specificRequestsSection } from './04-specific-requests'
import { sayingIDontKnow } from './05-saying-i-dont-know'
import { respectfulDisagreement } from './06-respectful-disagreement'

// Chapter 3: structure explanations, requests and concerns for a particular audience.
export const speaking: Course = {
  id: 'speaking',
  title: 'Clear spoken communication and assertiveness',
  sections: [mainPointSection, structureSection, plainExplanationsSection, specificRequestsSection, sayingIDontKnow, respectfulDisagreement],
}
