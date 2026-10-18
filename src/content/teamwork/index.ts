import type { Course } from '../types'
import { workingAgreementsSection } from './01-working-agreements'
import { trustAndRepair } from './02-trust-and-repair'
import { psychologicalSafetySection } from './03-psychological-safety'
import { inclusiveParticipationSection } from './04-inclusive-participation'
import { productiveMeetings } from './05-productive-meetings'
import { knowledgeAndCredit } from './06-knowledge-and-credit'
import { handoversSection } from './07-handovers'

// Chapter 5: explain how a team establishes coordination and enables contributions.
export const teamwork: Course = {
  id: 'teamwork',
  title: 'Teamwork, inclusion and productive meetings',
  sections: [workingAgreementsSection, trustAndRepair, psychologicalSafetySection, inclusiveParticipationSection, productiveMeetings, knowledgeAndCredit, handoversSection],
}
